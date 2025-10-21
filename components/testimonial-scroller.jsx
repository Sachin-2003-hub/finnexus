"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialScroller({ data }) {
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // Observer for items inside the horizontal scroller (root is the scroller)
    const scrollerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-4", "opacity-0");
          }
        });
      },
      { root: container, threshold: 0.2 }
    );

    // Observer for items in the normal viewport (desktop grid)
    const viewportObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0", "opacity-100");
            entry.target.classList.remove("translate-y-4", "opacity-0");
          }
        });
      },
      { root: null, threshold: 0.2 }
    );

    itemRefs.current.forEach((el) => {
      if (!el) return;
      // If the element is inside the scroller container, observe with scrollerObserver
      if (container.contains(el)) {
        scrollerObserver.observe(el);
      } else {
        viewportObserver.observe(el);
      }
    });

    // Initial visibility check: reveal any items that are already visible within the scroller or viewport
    const containerRect = container.getBoundingClientRect();
    itemRefs.current.forEach((el) => {
      if (!el) return;
      const elRect = el.getBoundingClientRect();
      if (container.contains(el)) {
        // visible inside horizontal scroller if left < container.right && right > container.left
        if (elRect.left < containerRect.right && elRect.right > containerRect.left) {
          el.classList.add("translate-y-0", "opacity-100");
          el.classList.remove("translate-y-4", "opacity-0");
        }
      } else {
        // viewport check
        if (elRect.top < window.innerHeight && elRect.bottom > 0) {
          el.classList.add("translate-y-0", "opacity-100");
          el.classList.remove("translate-y-4", "opacity-0");
        }
      }
    });

    return () => {
      scrollerObserver.disconnect();
      viewportObserver.disconnect();
    };
  }, [data]);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex md:hidden space-x-4 overflow-x-auto scrollbar-hide py-2 px-2 snap-x snap-mandatory scroll-smooth"
      >
        {data.map((testimonial, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="snap-start flex-shrink-0 w-[320px] transform transition-all duration-500 ease-out translate-y-4 opacity-0"
          >
            <Card className="p-6 dark:bg-slate-800 dark:border-slate-700">
              <CardContent className="pt-4">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.quote}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <div className="hidden md:block mt-4">
        <div className="grid grid-cols-3 gap-8">
          {data.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              className="transform transition-all duration-500 ease-out translate-y-4 opacity-0"
            >
              <Card className="p-6 dark:bg-slate-800 dark:border-slate-700">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
