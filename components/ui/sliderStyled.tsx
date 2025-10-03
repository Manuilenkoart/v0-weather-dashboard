import * as Slider from "@radix-ui/react-slider";

type Props = {
  value: number[];
  min: number;
  max: number;
  step: number;
  onValueChange: (value: number[]) => void;
};
export default function SliderStyled({
  value,
  max,
  step,
  min,
  onValueChange,
}: Props) {
  return (
    <Slider.Root
      className="relative flex items-center select-none touch-none w-[200px] h-5" // Apply your desired styling
      value={value}
      onValueChange={onValueChange}
      min={min}
      max={max}
      step={step}
    >
      <Slider.Track className="bg-gray-300 relative grow rounded-full h-[3px]">
        <Slider.Range className="absolute bg-blue-500 rounded-full h-full" />
      </Slider.Track>
      <Slider.Thumb className="block w-5 h-5 bg-white rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </Slider.Root>
  );
}
