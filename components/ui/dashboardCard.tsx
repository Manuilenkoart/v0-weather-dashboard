import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  name: string;
  data: string;
};
export default function DashboardCard({ icon, name, data }: Props) {
  return (
    <div className="bg-[#151515] rounded-2xl p-4 flex flex-col items-center">
      <span className="text-xl text-[#ffffff] mb-4 font-medium">{name}</span>
      {icon}
      <span className="text-lg text-[#ffffff] font-medium">{data}</span>
    </div>
  );
}
