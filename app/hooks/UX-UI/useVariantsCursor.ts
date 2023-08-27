import useMouse from "@react-hook/mouse-position";
import { useState } from "react";

export const useVariantsCursor = (ref: React.MutableRefObject<null>) => {
  const [ cursorVariant, setCursorVariant ] = useState("default");
  const mouse = useMouse(ref, { enterDelay: 10, leaveDelay: 10,});

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.clientX !== null) mouseXPosition = mouse.clientX;
  if (mouse.clientY !== null) mouseYPosition = mouse.clientY;

  const spring = { type: "spring", stiffness: 500, damping: 28 };

  const variants = {
    default: {
      opacity: mouseXPosition === 0 ? 0 : 0.8,
      height: 20,
      width: 20,
      backgroundColor: "main",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: { type: "spring", mass: 0.6 },
    },
    white: {
      opacity: 0.5,
      backgroundColor: "white",
      height: 64,
      width: 64,
      fontSize: "32px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    }
  }

  return { variants, spring, cursorVariant, setCursorVariant };
};