import { FC } from "react";

interface BoxProps {
  className?: string;
}

export const FilledBox: FC<BoxProps> = ({ className }) => {
  return (
    <div
      className={`relative w-5 h-5 border-2 border-gray-900 bg-gray-900 ml-[40px] ${
        className ?? ""
      }`}
    />
  );
};

export const CrossedBox: FC<BoxProps> = ({ className }) => {
  return (
    <div
      className={`relative w-5 h-5 border-2 border-gray-900 ml-[40px] before:absolute before:content-[''] before:w-full before:h-[2px] before:bg-gray-900 before:top-1/2 before:left-0 before:rotate-45 after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-gray-900 after:top-1/2 after:left-0 after:-rotate-45 ${
        className ?? ""
      }`}
    />
  );
};

export const FilledCrossedBox: FC<BoxProps> = ({ className }) => {
  return (
    <div
      className={`relative w-5 h-5 border-2 border-gray-900 bg-gray-900 ml-[40px] before:absolute before:content-[''] before:w-full before:h-[2px] before:bg-[#e0e0e0] before:top-1/2 before:left-0 before:rotate-45 after:absolute after:content-[''] after:w-full after:h-[2px] after:bg-[#e0e0e0] after:top-1/2 after:left-0 after:-rotate-45 ${
        className ?? ""
      }`}
    />
  );
};

export const CircledBox: FC<BoxProps> = ({ className }) => {
  return (
    <div
      className={`relative w-5 h-5 border-2 border-gray-900 ml-[40px] before:absolute before:content-[''] before:w-4 before:h-4 before:bg-gray-900 before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ${
        className ?? ""
      }`}
    />
  );
};

export const FilledCircledBox: FC<BoxProps> = ({ className }) => {
  return (
    <div
      className={`relative w-5 h-5 border-2 border-gray-900 bg-gray-900 ml-[40px] before:absolute before:content-[''] before:w-4 before:h-4 before:bg-[#e0e0e0] before:rounded-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 ${
        className ?? ""
      }`}
    />
  );
};

export const PartialFilledCircledBox: FC<BoxProps> = ({ className }) => {
  return (
    <div
      className={`relative w-5 h-5 border-2 border-gray-900 bg-gray-900 ml-[40px] ${
        className ?? ""
      }`}
    >
      <div className="absolute w-4 h-4 border-2 border-[#e0e0e0] bg-gray-900 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};
