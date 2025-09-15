import { useCallback, useEffect, useRef, useState } from "react";

export type Point = { x: number; y: number };

export function useHoverFollower<T extends HTMLElement>(
  containerRef: React.RefObject<T>,
  opts?: { speed?: number }
) {
  const speed = opts?.speed ?? 0.2;
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState<Point>({ x: 0, y: 0 });
  const lastMouse = useRef<Point | null>(null);
  const targetPos = useRef<Point>({ x: 0, y: 0 });
  const animRef = useRef<number | null>(null);

  const startAnim = useCallback(() => {
    if (animRef.current != null) return;
    const step = () => {
      animRef.current = requestAnimationFrame(step);
      setPos((prev) => {
        const tx = targetPos.current.x;
        const ty = targetPos.current.y;
        const nx = prev.x + (tx - prev.x) * speed;
        const ny = prev.y + (ty - prev.y) * speed;
        if (Math.abs(nx - tx) < 0.1 && Math.abs(ny - ty) < 0.1) {
          return { x: tx, y: ty };
        }
        return { x: nx, y: ny };
      });
    };
    step();
  }, [speed]);

  const stopAnim = useCallback(() => {
    if (animRef.current != null) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
  }, []);

  const onMouseEnter = useCallback(() => setHover(true), []);
  const onMouseLeave = useCallback(() => setHover(false), []);
  const onMouseMove: React.MouseEventHandler = useCallback((e) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    lastMouse.current = { x: e.clientX, y: e.clientY };
    targetPos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    if (hover) startAnim();
  }, [hover, startAnim]);

  // Track last mouse position globally so we know where the pointer is even when not moving
  useEffect(() => {
    const onGlobalMouseMove = (e: MouseEvent) => {
      lastMouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onGlobalMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onGlobalMouseMove);
  }, []);

  // Manage animation loop with hover state
  useEffect(() => {
    if (hover) startAnim();
    else stopAnim();
    return () => stopAnim();
  }, [hover, startAnim, stopAnim]);

  // Update follower on scroll/resize; toggle hover when pointer enters/leaves container due to scrolling
  useEffect(() => {
    const updateFromScroll = () => {
      if (!lastMouse.current) return;
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const { x, y } = lastMouse.current;
      const inside = x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
      setHover(inside);
      if (inside) {
        targetPos.current = { x: x - rect.left, y: y - rect.top };
        startAnim();
      }
    };

    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);
    return () => {
      window.removeEventListener("scroll", updateFromScroll as EventListener);
      window.removeEventListener("resize", updateFromScroll as EventListener);
    };
  }, [containerRef, startAnim]);

  return { hover, pos, onMouseEnter, onMouseLeave, onMouseMove } as const;
}
