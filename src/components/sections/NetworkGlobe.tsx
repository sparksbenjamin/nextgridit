"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";

type Point = [number, number, number];
const radians = Math.PI / 180;
const reducedQuery = "(prefers-reduced-motion: reduce)";
const subscribe = (callback: () => void) => {
  const media = window.matchMedia(reducedQuery);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
};
const getReducedMotion = () => window.matchMedia(reducedQuery).matches;
const serverMotion = () => true;
function coordinate(latitude: number, longitude: number): Point {
  const phi = latitude * radians;
  const theta = longitude * radians;
  return [
    Math.cos(phi) * Math.sin(theta),
    Math.sin(phi),
    Math.cos(phi) * Math.cos(theta),
  ];
}
const home = coordinate(34.69, -82.95);
// Illustrative connections, not customer locations or live traffic.
const routes = [
  [37.77, -122.42],
  [51.51, -0.13],
  [-23.55, -46.63],
  [1.35, 103.82],
].map(([lat, lon]) => {
  const end = coordinate(lat, lon);
  const angle = Math.acos(
    Math.min(
      1,
      Math.max(
        -1,
        home.reduce((sum, value, i) => sum + value * end[i], 0),
      ),
    ),
  );
  return Array.from({ length: 65 }, (_, index): Point => {
    const t = index / 64;
    const a = Math.sin((1 - t) * angle) / Math.sin(angle);
    const b = Math.sin(t * angle) / Math.sin(angle);
    const lift = 1 + Math.sin(t * Math.PI) * 0.2;
    return home.map((value, i) => (value * a + end[i] * b) * lift) as Point;
  });
});

export function NetworkGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const elapsed = useRef(0);
  const reduced = useSyncExternalStore(
    subscribe,
    getReducedMotion,
    serverMotion,
  );
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;
    let disposed = false;
    let frame = 0;
    let visible = false;
    let last = 0;
    let width = 0;
    let points: Point[] = [];
    let rotationCos = Math.cos(55 * radians);
    let rotationSin = Math.sin(55 * radians);
    const tiltCos = Math.cos(18 * radians);
    const tiltSin = Math.sin(18 * radians);
    const canRun = () => !disposed && visible && !document.hidden && !paused;
    const project = ([x, y, z]: Point): Point => {
      const xx = x * rotationCos + z * rotationSin;
      const zz = z * rotationCos - x * rotationSin;
      return [xx, y * tiltCos - zz * tiltSin, y * tiltSin + zz * tiltCos];
    };
    const draw = () => {
      if (!width || !points.length) return;
      const rotation = 55 * radians + elapsed.current * 0.000035;
      rotationCos = Math.cos(rotation);
      rotationSin = Math.sin(rotation);
      const center = width / 2;
      const radius = width * 0.425;
      context.clearRect(0, 0, width, width);
      const ocean = context.createRadialGradient(
        center - radius * 0.4,
        center - radius * 0.5,
        0,
        center,
        center,
        radius,
      );
      ocean.addColorStop(0, "#1c493e");
      ocean.addColorStop(0.7, "#102f29");
      ocean.addColorStop(1, "#091e1c");
      context.fillStyle = ocean;
      context.beginPath();
      context.arc(center, center, radius, 0, Math.PI * 2);
      context.fill();
      context.strokeStyle = "rgba(127,181,154,.25)";
      context.lineWidth = 1;
      context.stroke();
      // Sparse geographic grid keeps the sphere legible without a dashboard aesthetic.
      context.strokeStyle = "rgba(127,181,154,.1)";
      for (const latitude of [-60, -30, 0, 30, 60]) {
        context.beginPath();
        let started = false;
        for (let lon = -180; lon <= 180; lon += 3) {
          const [x, y, z] = project(coordinate(latitude, lon));
          if (z <= 0) {
            started = false;
            continue;
          }
          if (started) context.lineTo(center + x * radius, center - y * radius);
          else context.moveTo(center + x * radius, center - y * radius);
          started = true;
        }
        context.stroke();
      }
      for (const point of points) {
        const [x, y, z] = project(point);
        if (z <= 0) continue;
        context.fillStyle = `rgba(166,207,181,${0.2 + z * 0.65})`;
        context.beginPath();
        context.arc(
          center + x * radius,
          center - y * radius,
          width * 0.0021,
          0,
          Math.PI * 2,
        );
        context.fill();
      }
      routes.forEach((route, routeIndex) => {
        context.beginPath();
        context.strokeStyle = "rgba(201,228,150,.55)";
        context.lineWidth = Math.max(1, width / 650);
        let started = false;
        for (const point of route) {
          const [x, y, z] = project(point);
          if (z <= 0) {
            started = false;
            continue;
          }
          if (started) context.lineTo(center + x * radius, center - y * radius);
          else context.moveTo(center + x * radius, center - y * radius);
          started = true;
        }
        context.stroke();
        const index = Math.floor(
          ((elapsed.current / 6500 + routeIndex / routes.length) % 1) * 64,
        );
        const [x, y, z] = project(route[index]);
        if (z > 0) {
          context.beginPath();
          context.fillStyle = "#d7ecaa";
          context.arc(
            center + x * radius,
            center - y * radius,
            width * 0.004,
            0,
            Math.PI * 2,
          );
          context.fill();
        }
      });
      const [x, y, z] = project(home);
      if (z > 0) {
        const px = center + x * radius,
          py = center - y * radius;
        context.fillStyle = "#e6f3c6";
        context.beginPath();
        context.arc(px, py, width * 0.006, 0, Math.PI * 2);
        context.fill();
        context.strokeStyle = "rgba(215,236,170,.55)";
        context.beginPath();
        context.arc(px, py, width * 0.016, 0, Math.PI * 2);
        context.stroke();
      }
      canvas.dataset.ready = "true";
    };
    const tick = (now: number) => {
      frame = 0;
      if (!canRun()) {
        last = 0;
        return;
      }
      const interval = width < 500 ? 50 : 33;
      if (!last || now - last >= interval) {
        if (last) elapsed.current += Math.min(now - last, 100);
        last = now;
        draw();
      }
      frame = requestAnimationFrame(tick);
    };
    const update = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      last = 0;
      if (canRun()) frame = requestAnimationFrame(tick);
    };
    const resize = new ResizeObserver(() => {
      width = canvas.getBoundingClientRect().width;
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(width * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw();
    });
    resize.observe(canvas);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      update();
    });
    intersection.observe(canvas);
    document.addEventListener("visibilitychange", update);
    import("@/lib/globe-points.json")
      .then((data) => {
        if (disposed) return;
        points = data.default as Point[];
        draw();
        update();
      })
      .catch(() => {
        /* The locally hosted SVG remains visible if enhancement fails. */
      });
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      resize.disconnect();
      intersection.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, [paused, reduced]);

  return (
    <div
      className="network-globe"
      data-motion={reduced ? "static" : paused ? "paused" : "playing"}
    >
      <div className="network-globe-scene" aria-hidden="true">
        {!reduced && <canvas ref={canvasRef} />}
        {/* A complete static globe is present before JavaScript and for reduced motion. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/network-globe.svg" width="800" height="800" alt="" />
      </div>
      <div className="network-globe-caption">
        <p>
          <span /> Local expertise. A connected world.
          <small>Illustrative network routes</small>
        </p>
        {!reduced && (
          <button
            type="button"
            onClick={() => setPaused(!paused)}
            aria-label={
              paused ? "Play globe animation" : "Pause globe animation"
            }
            title={paused ? "Play globe animation" : "Pause globe animation"}
          >
            {paused ? (
              <IconPlayerPlay size={16} aria-hidden="true" />
            ) : (
              <IconPlayerPause size={16} aria-hidden="true" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}
