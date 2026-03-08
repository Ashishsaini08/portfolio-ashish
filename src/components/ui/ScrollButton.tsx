"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScrollButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  visible: boolean;
}

export default function ScrollButton({
  direction,
  onClick,
  visible,
}: ScrollButtonProps) {
  if (!visible) return null;

  return (
    <button
      onClick={onClick}
      className={`absolute top-0 bottom-0 z-20 w-12 flex items-center justify-center
        bg-black/50 hover:bg-black/80 transition-colors cursor-pointer
        ${direction === "left" ? "left-0" : "right-0"}`}
      aria-label={`Scroll ${direction}`}
    >
      {direction === "left" ? (
        <ChevronLeft className="w-8 h-8 text-white" />
      ) : (
        <ChevronRight className="w-8 h-8 text-white" />
      )}
    </button>
  );
}
