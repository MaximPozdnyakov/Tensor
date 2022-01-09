import { ChangeEvent, useEffect, useState, CSSProperties } from "react";

interface SliderProps {
  initialValue: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
  sliderClassName?: string;
  sliderStyles?: CSSProperties;
}

function Slider({
  initialValue,
  min,
  max,
  onChange,
  sliderClassName = "slider",
  sliderStyles,
}: SliderProps) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <div className={sliderClassName} style={sliderStyles}>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setValue(+event.target.value)
        }
        className={`${sliderClassName}__thumb`}
      />
    </div>
  );
}

export default Slider;
