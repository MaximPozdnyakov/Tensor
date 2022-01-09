import React, { useRef, useEffect } from "react";

import { convertHexToHsv, convertHsvToHex, isColorLight } from "utils/colors";
import { clamp } from "utils/clamp";

interface SaturationProps {
  hue: number;
  color: string;
  onChange: (color: string) => void;
}

function Saturation({ hue, color, onChange }: SaturationProps) {
  const pointer = useRef<HTMLDivElement>(null);
  const saturationDiv = useRef<HTMLDivElement>(null);

  const setPointerPosition = (s: number, v: number) => {
    if (pointer.current) {
      const pointerWidth = pointer.current.offsetWidth;
      pointer.current.style.left = `calc(${s}% - ${pointerWidth / 2}px)`;
      pointer.current.style.bottom = `calc(${v}% - ${pointerWidth / 2}px)`;
    }
  };

  useEffect(() => {
    const [_, s, v] = convertHexToHsv(color);
    setPointerPosition(s, v);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    const moveCursor = (e: React.MouseEvent | MouseEvent) => {
      if (saturationDiv.current && pointer.current) {
        const { width, height, left, top } =
          saturationDiv.current.getBoundingClientRect();

        const x = clamp(e.clientX - left, width, 0);
        const y = clamp(e.clientY - top, height, 0);

        const s = +((x / width) * 100).toFixed(2);
        const v = +((1 - y / width) * 100).toFixed(2);
        const hex = convertHsvToHex(hue, s, v);

        onChange(hex);
        setPointerPosition(s, v);
        if (isColorLight(hex)) {
          pointer.current.style.borderColor = "#000";
        } else {
          pointer.current.style.borderColor = "#fff";
        }
      }
    };

    const onMouseUp = (e: MouseEvent) => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseup", onMouseUp);
      moveCursor(e);
    };

    moveCursor(e);
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseup", onMouseUp);
  };

  const backgroundColor = convertHsvToHex(hue, 100, 100);
  return (
    <div
      className="color-picker__saturation"
      style={{ backgroundColor }}
      onMouseDown={onMouseDown}
      ref={saturationDiv}
    >
      <div
        className="color-picker__cursor"
        ref={pointer}
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}

export default Saturation;
