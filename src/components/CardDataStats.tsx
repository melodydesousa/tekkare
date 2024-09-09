import React, { ReactNode } from 'react';

interface CardDataStatsProps {
  title: string;
  total: string | number;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  children,
}) => {
  return (
    <div className="flex flex-row gap-5 items-center rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2">
        {children}
      </div>

      <div className="mt-4 flex flex-col gap-2 items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black">
            {typeof total === "number" ? total.toLocaleString() : total}
          </h4>
          <span className="text-sm font-medium">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
