"use client";
import { ReactNode } from "react";
import { Label } from "@radix-ui/react-label";

import SliderStyled from "./sliderStyled";

type Props = {
  title: string;
  label: string;
  labelValue: number[];
  unit: string;
  onValueChange: (value: number[]) => void;
  icon: ReactNode;
  min: number;
  max: number;
  step: number;
};
export default function SettingsCard({
  title,
  label,
  labelValue,
  icon,
  unit,
  min,
  max,
  step,
  onValueChange,
}: Props) {
  return (
    <div className="bg-[#1e1e1e] rounded-lg p-6">
      <div className="flex items-center gap-3 mb-12">
        {icon}
        <h3 className="text-xl font-medium">Very {title}</h3>
      </div>

      <div className="mb-12">
        <Label className="text-sm text-[#757575] mb-2 block">
          {label} {labelValue} {unit}
        </Label>
      </div>

      <div className="space-y-2">
        <SliderStyled
          {...{ max, min, onValueChange, step, value: labelValue }}
        />

        <div className="flex justify-between text-xs text-[#757575]">
          <span>
            {min}
            {unit}
          </span>
          <span>
            {max}
            {unit}
          </span>
        </div>
      </div>
    </div>
  );
}
