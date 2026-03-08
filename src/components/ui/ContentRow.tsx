"use client";
import { ReactNode } from "react";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import ScrollButton from "./ScrollButton";

interface ContentRowProps {
  title: string;
  children: ReactNode;
}

export default function ContentRow({ title, children }: ContentRowProps) {
  const { scrollRef, canScrollLeft, canScrollRight, scroll } =
    useHorizontalScroll();

  return (
    <div className="mb-8 md:mb-12">
      <h2 className="text-lg md:text-xl font-bold text-netflix-white mb-3 px-4 md:px-8 lg:px-12">
        {title}
      </h2>
      <div className="group relative">
        <ScrollButton
          direction="left"
          onClick={() => scroll("left")}
          visible={canScrollLeft}
        />
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-12 py-4"
        >
          {children}
        </div>
        <ScrollButton
          direction="right"
          onClick={() => scroll("right")}
          visible={canScrollRight}
        />
      </div>
    </div>
  );
}
