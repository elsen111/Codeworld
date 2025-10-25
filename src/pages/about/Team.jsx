import React, { useEffect, useRef, useState } from "react";
import "./Team.css";
import member1 from '../../assets/img/team-member1.jpeg';
import member2 from '../../assets/img/team-member2.jpeg';
import member3 from '../../assets/img/team-member3.jpeg';

/**
 * TeamCarousel
 * Props:
 *  - items: array of { id, name, title, avatarUrl, caption }.
 *
 * Usage:
 *  <TeamCarousel items={myItems} />
 */

const sampleItems = [
  {
    id: 1,
    name: "Aytən Əliyeva",
    title: "Frontend Developer və Təlimçi",
    avatarUrl: member1,
    caption: "İnkişafın başlanğıcı: öyrənməyə olan sevgidən keçir."
  },
  {
    id: 2,
    name: "Rəşad M.",
    title: "Backend Developer",
    avatarUrl: member2,
    caption: ""
  },
  {
    id: 3,
    name: "Leyla K.",
    title: "UI/UX Designer",
    avatarUrl: member3,
    caption: ""
  }
];

export default function TeamCarousel({ items = sampleItems }) {
  const clonesPerSide = 2; // number of clones at each end
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(clonesPerSide);
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartTranslate = useRef(0);
  const rafRef = useRef(null);

  // Build cloned slides for infinite loop
  useEffect(() => {
    const head = items.slice(-clonesPerSide);
    const tail = items.slice(0, clonesPerSide);
    setSlides([...head, ...items, ...tail]);
    setIndex(clonesPerSide);
  }, [items]);

  // Utility: compute slide width and gap depending on viewport width (responsive)
  function getDimensions() {
    const vw = viewportRef.current ? viewportRef.current.clientWidth : window.innerWidth;
    // center slide width between 260 and 520
    const slideW = Math.min(520, Math.max(260, Math.round(vw * 0.42)));
    const gap = Math.round(Math.max(12, vw * 0.02)); // gap scales a bit
    return { slideW, gap, vw };
  }

  // Compute translateX so that slide at `i` is centered
  function computeTranslateForIndex(i) {
    const { slideW, gap, vw } = getDimensions();
    const centerOffset = (vw - slideW) / 2;
    const x = -i * (slideW + gap) + centerOffset;
    return x;
  }

  // Set transform on track (with optional animation)
  function setTrackTranslate(x, animate = true) {
    const el = trackRef.current;
    if (!el) return;
    if (animate) {
      el.style.transition = "transform 420ms cubic-bezier(.22,.98,.3,1)";
    } else {
      el.style.transition = "none";
    }
    el.style.transform = `translate3d(${x}px,0,0)`;
  }

  // Snap to index and update state
  function snapToIndex(targetIndex, animate = true) {
    setIndex(targetIndex);
    setTrackTranslate(computeTranslateForIndex(targetIndex), animate);
  }

  // At end of transition, if in cloned region, silently jump to corresponding real slide
  function handleTransitionEnd() {
    const realCount = items.length;
    if (index < clonesPerSide) {
      const newIndex = index + realCount;
      // jump without animation
      requestAnimationFrame(() => snapToIndex(newIndex, false));
    } else if (index >= clonesPerSide + realCount) {
      const newIndex = index - realCount;
      requestAnimationFrame(() => snapToIndex(newIndex, false));
    }
  }

  // Initialize position when slides load / window resizes
  useEffect(() => {
    function handleResize() {
      // reposition without animation
      snapToIndex(index, false);
    }
    // ensure initial placement after slides set
    requestAnimationFrame(() => snapToIndex(index, false));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides]);

  // Pointer/touch handlers
  function startDrag(clientX) {
    dragging.current = true;
    dragStartX.current = clientX;
    // read current translate from style (if available), else compute
    const computed = trackRef.current ? trackRef.current.style.transform : "";
    const match = computed.match(/translate3d\((-?\d+(\.\d+)?)px,/);
    dragStartTranslate.current = match ? parseFloat(match[1]) : computeTranslateForIndex(index);
    if (trackRef.current) trackRef.current.style.transition = "none";
  }

  function onPointerDown(e) {
    const clientX = e.clientX ?? (e.touches && e.touches[0].clientX);
    startDrag(clientX);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("touchmove", onPointerMove, { passive: false });
    window.addEventListener("touchend", onPointerUp);
  }

  function onPointerMove(e) {
    if (!dragging.current) return;
    const clientX = e.clientX ?? (e.touches && e.touches[0].clientX);
    const dx = clientX - dragStartX.current;
    const translate = dragStartTranslate.current + dx;
    setTrackTranslate(translate, false);
    // prevent page scroll during horizontal drag on touch
    if (e.type === "touchmove") e.preventDefault();
  }

  function endDrag() {
    dragging.current = false;
    // decide whether to move a slide based on drag distance
    const { slideW } = getDimensions();
    // read final translate
    const computed = trackRef.current ? trackRef.current.style.transform : "";
    const match = computed.match(/translate3d\((-?\d+(\.\d+)?)px,/);
    const finalTranslate = match ? parseFloat(match[1]) : computeTranslateForIndex(index);

    const originTranslate = computeTranslateForIndex(index);
    const delta = finalTranslate - originTranslate;
    const threshold = slideW * 0.18;

    let newIndex = index;
    if (Math.abs(delta) > threshold) {
      // drag left -> delta negative -> move right
      if (delta < 0) newIndex = index + 1;
      else newIndex = index - 1;
    }
    snapToIndex(newIndex, true);
  }

  function onPointerUp() {
    if (!dragging.current) return;
    endDrag();
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
    window.removeEventListener("touchmove", onPointerMove);
    window.removeEventListener("touchend", onPointerUp);
  }

  // keyboard navigation
  function handleKeyDown(e) {
    if (e.key === "ArrowLeft") snapToIndex(index - 1, true);
    if (e.key === "ArrowRight") snapToIndex(index + 1, true);
  }

  // Render slides; apply scale and opacity based on distance from center index
  return (
    <section className="Team">
      <div className="section-wrapper about-page-section">
        <div className="carousel-header">
          <div>
            <h2 className="title">
              <span> Komandamızla </span> 
              <span> Tanış Olun </span>  
            </h2>
            <p className="subtitle"> Bizim komandamız texnologiyanı sevən, tədrisə ruhunu qatan mütəxəssislərdən ibarətdir. Hər bir təlimçi öz sahəsində ixtisaslaşmış və illərlə təcrübəyə malikdir. </p>
          </div>
        </div>

        <div
          className="carousel-viewport"
          ref={viewportRef}
          onPointerDown={onPointerDown}
          onTouchStart={(e) => onPointerDown(e)}
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div
            className="carousel-track"
            ref={trackRef}
            onTransitionEnd={handleTransitionEnd}
          >
            {slides.map((s, i) => {
              // distance from current index
              const dist = Math.abs(i - index);
              // scale and opacity rules for stacked center effect
              const scale = dist === 0 ? 1 : Math.max(0.78, 1 - dist * 0.12);
              const opacity = dist > 4 ? 0 : Math.max(0.4, 1 - dist * 0.18);
              const { slideW } = getDimensions();

              // slide class changes for center to show larger
              const style = {
                width: `${slideW}px`,
                transform: `scale(${scale})`,
                opacity,
                transition: dragging.current ? "none" : "transform 420ms, opacity 420ms"
              };

              const real = s || {};
              return (
                <div className="carousel-slide" key={`slide-${real.id ?? i}-${i}`} style={style}>
                  <div className="card">
                    <div className="card-image">
                      <img src={real.avatarUrl} alt={real.name} />
                    </div>
                    <div className="card-body">
                      <div className="card-name">{real.name}</div>
                      <div className="card-title">{real.title}</div>
                      {real.caption ? <div className="card-caption">“{real.caption}”</div> : null}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
