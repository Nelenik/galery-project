import { Zoom } from "../utils.js";

// handlers on hover and keydown for desktop
export function zoomHandlers(frame) {
  let delayTimer;
  const handlePointerMove = (e) => {
    clearTimeout(delayTimer);
    if (e.pointerType === "mouse") {
      delayTimer = setTimeout(() => {
        Zoom.in(frame);
      }, 300);
    }
  };

  const handlePointerLeave = (e) => {
    clearTimeout(delayTimer);
    if (e.pointerType === "mouse") {
      Zoom.out(frame);
    }
  };

  const handleClick = () => {
    Zoom.out(frame);
  };

  frame.addEventListener("pointermove", handlePointerMove);
  frame.addEventListener("pointerleave", handlePointerLeave);
  frame.addEventListener("click", handleClick);
}
