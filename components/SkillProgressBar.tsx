import React from "react";

const SkillProgressBar = ({
  title,
  progress,
}: {
  title: string;
  progress: 1 | 2 | 3 | 4 | 5;
}) => {
  const color = progress > 3 ? "green" : "yellow";
  return (
    <>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span
              className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-amber-600 bg-amber-200`}
            >
              {title}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-amber-600">
              {progress}
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amber-200">
          <div
            style={{ width: `${progress + 10 * 3}%` }}
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${color}-500`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default SkillProgressBar;
