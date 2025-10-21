"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { testimonialsData } from "@/data/landing";
import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalBody,
} from "@/components/ui/modal";
import { DemoRequestForm } from "@/components/demo-request-form";

const HeroSection = () => {
    const imageRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = React.useState(false);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
        <section className="pt-25 pb-20 px-4 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.15),transparent_40%)]">
         <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl pb-6 gradient-title leading-tight">
              Track every rupee.
              <br className="hidden md:block" />
              Grow your savings faster.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl lg:mx-0 mx-auto">
              AI-powered finance that helps you see where your money goes,
              set better budgets, and act on clear insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-start justify-center lg:justify-start">
              <Link href="/dashboard">
                <Button size="lg" className="px-8">
                  Start free
                </Button>
              </Link>
              <Modal open={isModalOpen} onOpenChange={setIsModalOpen}>
                <ModalTrigger asChild>
                  <Button size="lg" variant="outline" className="px-8">
                    Request a demo
                  </Button>
                </ModalTrigger>
                <ModalContent>
                  <ModalHeader>
                    <ModalTitle>Request a Demo</ModalTitle>
                  </ModalHeader>
                  <ModalBody>
                    <DemoRequestForm />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </div>
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-2">
                {testimonialsData.slice(0, 5).map((t, i) => (
                  <Image
                    key={i}
                    src={t.image}
                    alt={t.name}
                    width={36}
                    height={36}
                    className="rounded-full ring-2 ring-white"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Trusted by 1,000+ users across India
              </p>
            </div>
          </div>
          <div className="hero-image-wrapper mt-5 md:mt-0">
            <div ref={imageRef} className="hero-image">
              <div className="relative mx-auto max-w-3xl rounded-2xl border border-gray-200/50 bg-white/70 backdrop-blur-lg shadow-2xl">
                <Image
                  src="/banner1.opt.png"
                  width={1200}
                  height={675}
                  alt="Dashboard Preview"
                  className="rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection