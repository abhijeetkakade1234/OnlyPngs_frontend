"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Moon } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export function Features8() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // INSANE Main container animations - MULTIPLE LAYERS OF PARALLAX
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0.5, 1, 1, 0.9]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 0.95, 1, 0.98]
  );
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [150, 50, 0, -80]);

  // Subtle background layers - matching hero's minimal style
  const bg1Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const bg1Opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.05, 0.08, 0.06, 0.04]
  );

  const bg2Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const bg2Opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0.06, 0.1, 0.08, 0.05]
  );

  // Stars and comets parallax animations with more movement
  const star1Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -150, -300]);
  const star1X = useTransform(scrollYProgress, [0, 0.5, 1], [0, 25, 50]);
  const star1Opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0, 0.6, 0.9, 0.8, 0.4]
  );
  const star1Scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 0.9, 1],
    [1, 1.3, 1, 1.2, 1]
  );

  const star2Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -200, -400]);
  const star2X = useTransform(scrollYProgress, [0, 0.5, 1], [0, -40, -80]);
  const star2Opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.6, 1],
    [0, 0.5, 0.8, 0.7, 0.3]
  );
  const star2Scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [1, 1.4, 1, 1.1]
  );

  const star3Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -125, -250]);
  const star3X = useTransform(scrollYProgress, [0, 0.5, 1], [0, 60, 120]);
  const star3Opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.8, 1],
    [0, 0.7, 1, 0.9, 0.5]
  );
  const star3Scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [1, 1.2, 1, 1.3, 1]
  );

  const star4Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -175, -350]);
  const star4X = useTransform(scrollYProgress, [0, 0.5, 1], [0, -75, -150]);
  const star4Opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.5, 1],
    [0, 0.4, 0.4, 0.2]
  );
  const star4Scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [1, 1.3, 1, 1.2]
  );

  const star5Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -100, -200]);
  const star5X = useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, 200]);
  const star5Opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 1],
    [0, 0.6, 0.9, 0.8, 0.4]
  );
  const star5Scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [1, 1.2, 1, 1.1]
  );

  // Comets with trails and curved movement
  const comet1Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -250, -500]);
  const comet1X = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, 100]);
  const comet1Opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.6, 1],
    [0, 0.4, 0.7, 0.6, 0.2]
  );
  const comet1Rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  const comet2Y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -225, -450]);
  const comet2X = useTransform(scrollYProgress, [0, 0.5, 1], [0, -60, -120]);
  const comet2Opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 1],
    [0, 0.3, 0.3, 0.15]
  );
  const comet2Rotate = useTransform(scrollYProgress, [0, 1], [0, -20]);

  // Title animations - subtle parallax matching hero style
  const titleY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [150, 50, 0, -80]
  );
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 0.5, 1, 1, 0.9]
  );
  const titleScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 0.95, 1, 1.05]
  );

  // Card stagger animations - subtle and elegant
  const card1Y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [200, 80, 0, -60]
  );
  const card1Opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0.4, 0.9, 1, 0.8]
  );
  const card1Scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.7, 0.9, 1, 0.95]
  );

  const card2Y = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [220, 90, 0, -70]
  );
  const card2Opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.55, 0.8, 1],
    [0, 0.5, 0.95, 1, 0.75]
  );
  const card2Scale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [0.75, 0.92, 1, 0.93]
  );

  const card3Y = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [240, 100, 0, -80]
  );
  const card3Opacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.6, 0.85, 1],
    [0, 0.6, 1, 1, 0.7]
  );
  const card3Scale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [0.8, 0.94, 1, 0.91]
  );

  const card4Y = useTransform(
    scrollYProgress,
    [0, 0.45, 0.55, 1],
    [260, 110, 0, -90]
  );
  const card4Opacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.65, 0.9, 1],
    [0, 0.7, 1, 1, 0.65]
  );
  const card4Scale = useTransform(
    scrollYProgress,
    [0, 0.45, 0.55, 1],
    [0.85, 0.96, 1, 0.89]
  );

  const card5Y = useTransform(
    scrollYProgress,
    [0, 0.5, 0.5, 1],
    [280, 120, 0, -100]
  );
  const card5Opacity = useTransform(
    scrollYProgress,
    [0, 0.45, 0.7, 0.95, 1],
    [0, 0.8, 1, 1, 0.6]
  );
  const card5Scale = useTransform(
    scrollYProgress,
    [0, 0.5, 0.5, 1],
    [0.9, 0.98, 1, 0.87]
  );

  return (
    <section
      ref={ref}
      className="bg-black py-16 md:py-32 overflow-hidden relative"
    >
      {/* Subtle background layers - matching hero's minimal aesthetic */}
      <motion.div
        style={{
          y: bg1Y,
          opacity: bg1Opacity,
        }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </motion.div>

      <motion.div
        style={{
          y: bg2Y,
          opacity: bg2Opacity,
        }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-br from-violet-500/8 to-indigo-500/8 rounded-full blur-2xl" />
        <div className="absolute bottom-40 left-20 w-72 h-72 bg-gradient-to-br from-teal-500/8 to-cyan-500/8 rounded-full blur-2xl" />
      </motion.div>

      {/* Stars with parallax and twinkling */}
      <motion.div
        style={{
          y: star1Y,
          x: star1X,
          opacity: star1Opacity,
          scale: star1Scale,
        }}
        className="absolute top-[15%] left-[20%] pointer-events-none"
      >
        <motion.div
          className="w-1 h-1 bg-white rounded-full blur-[0.5px]"
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.div
        style={{
          y: star2Y,
          x: star2X,
          opacity: star2Opacity,
          scale: star2Scale,
        }}
        className="absolute top-[25%] right-[30%] pointer-events-none"
      >
        <motion.div
          className="w-1.5 h-1.5 bg-white rounded-full blur-[1px]"
          animate={{
            opacity: [0.5, 0.9, 0.5],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>

      <motion.div
        style={{
          y: star3Y,
          x: star3X,
          opacity: star3Opacity,
          scale: star3Scale,
        }}
        className="absolute top-[40%] left-[60%] pointer-events-none"
      >
        <motion.div
          className="w-1 h-1 bg-white rounded-full blur-[0.5px]"
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>

      <motion.div
        style={{
          y: star4Y,
          x: star4X,
          opacity: star4Opacity,
          scale: star4Scale,
        }}
        className="absolute bottom-[30%] left-[15%] pointer-events-none"
      >
        <motion.div
          className="w-1 h-1 bg-white rounded-full blur-[0.5px]"
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
      </motion.div>

      <motion.div
        style={{
          y: star5Y,
          x: star5X,
          opacity: star5Opacity,
          scale: star5Scale,
        }}
        className="absolute bottom-[20%] right-[25%] pointer-events-none"
      >
        <motion.div
          className="w-1.5 h-1.5 bg-white rounded-full blur-[1px]"
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />
      </motion.div>

      {/* Additional smaller stars with twinkling */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -180]),
          x: useTransform(scrollYProgress, [0, 1], [0, 30]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0.3]),
        }}
        className="absolute top-[55%] left-[45%] pointer-events-none"
      >
        <motion.div
          className="w-0.5 h-0.5 bg-white rounded-full blur-[0.5px]"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        />
      </motion.div>

      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -220]),
          x: useTransform(scrollYProgress, [0, 1], [0, -40]),
          opacity: useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.4, 0.25]),
        }}
        className="absolute top-[65%] right-[40%] pointer-events-none"
      >
        <motion.div
          className="w-0.5 h-0.5 bg-white rounded-full blur-[0.5px]"
          animate={{
            opacity: [0.25, 0.6, 0.25],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 2.9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        />
      </motion.div>

      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -160]),
          x: useTransform(scrollYProgress, [0, 1], [0, 90]),
          opacity: useTransform(
            scrollYProgress,
            [0, 0.3, 0.7, 1],
            [0, 0.5, 0.6, 0.35]
          ),
        }}
        className="absolute top-[35%] right-[15%] pointer-events-none"
      >
        <motion.div
          className="w-0.5 h-0.5 bg-white rounded-full blur-[0.5px]"
          animate={{
            opacity: [0.35, 0.8, 0.35],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 3.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </motion.div>

      {/* Comets with trails and movement */}
      <motion.div
        style={{
          y: comet1Y,
          x: comet1X,
          opacity: comet1Opacity,
          rotate: comet1Rotate,
        }}
        className="absolute top-[10%] left-[10%] pointer-events-none"
      >
        <motion.div
          className="relative"
          animate={{
            x: [0, 3, 0],
            y: [0, -2, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute w-2 h-2 bg-white rounded-full blur-sm" />
          <div className="absolute top-0 left-0 w-8 h-[1px] bg-gradient-to-r from-white/60 to-transparent blur-[0.5px] -rotate-45 origin-left" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{
          y: comet2Y,
          x: comet2X,
          opacity: comet2Opacity,
          rotate: comet2Rotate,
        }}
        className="absolute bottom-[15%] right-[20%] pointer-events-none"
      >
        <motion.div
          className="relative"
          animate={{
            x: [0, -2, 0],
            y: [0, 3, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <div className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full blur-sm" />
          <div className="absolute top-0 left-0 w-6 h-[1px] bg-gradient-to-r from-cyan-300/50 to-transparent blur-[0.5px] rotate-45 origin-left" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{
          opacity,
          scale,
          y,
        }}
        className="mx-auto max-w-3xl lg:max-w-5xl px-6 relative z-10"
      >
        <div className="relative">
          <motion.h2
            style={{
              y: titleY,
              opacity: titleOpacity,
              scale: titleScale,
            }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
          >
            What is Our Product
          </motion.h2>
          <div className="relative z-10 grid grid-cols-6 gap-3">
            {/* Feature 1: Set Rules with AI - Large Card */}
            <motion.div
              style={{
                y: card1Y,
                opacity: card1Opacity,
                scale: card1Scale,
              }}
              className="col-span-full lg:col-span-2"
            >
              <Card className="relative flex overflow-hidden border-gray-800 bg-gray-900">
                <CardContent className="relative m-auto size-fit pt-6">
                  <div className="relative flex h-24 w-56 items-center justify-center">
                    <svg
                      className="text-gray-700 absolute inset-0 size-full"
                      viewBox="0 0 254 104"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="mx-auto block w-fit text-5xl font-semibold text-white">
                      AI
                    </span>
                  </div>
                  <h2 className="mt-6 text-center text-3xl font-semibold text-white">
                    Set Rules with AI
                  </h2>
                  <p className="mt-4 text-center text-sm text-gray-400 max-w-xs">
                    Users define complex buy/sell rules in natural language
                    (e.g., &ldquo;Buy if floor price is below 20 AVAX&rdquo;).
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 2: Zero-Latency Execution */}
            <motion.div
              style={{
                y: card2Y,
                opacity: card2Opacity,
                scale: card2Scale,
              }}
              className="col-span-full sm:col-span-3 lg:col-span-2"
            >
              <Card className="relative overflow-hidden border-gray-800 bg-gray-900">
                <CardContent className="pt-6">
                  <div className="relative mx-auto flex aspect-square size-32 items-center justify-center rounded-full border border-gray-700 before:absolute before:-inset-2 before:rounded-full before:border before:border-gray-800">
                    <Zap
                      className="m-auto h-fit w-24 text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="relative z-10 mt-6 space-y-2 text-center">
                    <h2 className="text-lg font-medium text-white transition">
                      Zero-Latency Execution
                    </h2>
                    <p className="text-gray-400 text-sm">
                      The system automatically captures fleeting market deals
                      missed by humans via 5-second market monitoring.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 3: The Sleeping Buy */}
            <motion.div
              style={{
                y: card3Y,
                opacity: card3Opacity,
                scale: card3Scale,
              }}
              className="col-span-full sm:col-span-3 lg:col-span-2"
            >
              <Card className="relative overflow-hidden border-gray-800 bg-gray-900">
                <CardContent className="pt-6">
                  <div className="pt-6 lg:px-6">
                    <svg
                      className="w-full dark:text-gray-700"
                      viewBox="0 0 386 123"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="386"
                        height="123"
                        rx="10"
                        fill="currentColor"
                      />
                      <g clipPath="url(#clip0_0_106)">
                        <circle
                          className="text-gray-600"
                          cx="29"
                          cy="29"
                          r="15"
                          fill="currentColor"
                        />
                        <path
                          d="M29 23V35"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M35 29L29 35L23 29"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3 123C3 123 14.3298 94.153 35.1282 88.0957C55.9266 82.0384 65.9333 80.5508 65.9333 80.5508C65.9333 80.5508 80.699 80.5508 92.1777 80.5508C103.656 80.5508 100.887 63.5348 109.06 63.5348C117.233 63.5348 117.217 91.9728 124.78 91.9728C132.343 91.9728 142.264 78.03 153.831 80.5508C165.398 83.0716 186.825 91.9728 193.761 91.9728C200.697 91.9728 206.296 63.5348 214.07 63.5348C221.844 63.5348 238.653 93.7771 244.234 91.9728C249.814 90.1684 258.8 60 266.19 60C272.075 60 284.1 88.057 286.678 88.0957C294.762 88.2171 300.192 72.9284 305.423 72.9284C312.323 72.9284 323.377 65.2437 335.553 63.5348C347.729 61.8259 348.218 82.07 363.639 80.5508C367.875 80.1335 372.949 82.2017 376.437 87.1008C379.446 91.3274 381.054 97.4325 382.521 104.647C383.479 109.364 382.521 123 382.521 123"
                        fill="url(#paint0_linear_0_106)"
                      />
                      <path
                        className="text-gray-600"
                        d="M3 121.077C3 121.077 15.3041 93.6691 36.0195 87.756C56.7349 81.8429 66.6632 80.9723 66.6632 80.9723C66.6632 80.9723 80.0327 80.9723 91.4656 80.9723C102.898 80.9723 100.415 64.2824 108.556 64.2824C116.696 64.2824 117.693 92.1332 125.226 92.1332C132.759 92.1332 142.07 78.5115 153.591 80.9723C165.113 83.433 186.092 92.1332 193 92.1332C199.908 92.1332 205.274 64.2824 213.017 64.2824C220.76 64.2824 237.832 93.8946 243.39 92.1332C248.948 90.3718 257.923 60.5 265.284 60.5C271.145 60.5 283.204 87.7182 285.772 87.756C293.823 87.8746 299.2 73.0802 304.411 73.0802C311.283 73.0802 321.425 65.9506 333.552 64.2824C345.68 62.6141 346.91 82.4553 362.27 80.9723C377.629 79.4892 383 106.605 383 106.605"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_106"
                          x1="3"
                          y1="60"
                          x2="3"
                          y2="123"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            className="text-white/15"
                            stopColor="currentColor"
                          />
                          <stop
                            className="text-transparent"
                            offset="1"
                            stopColor="currentColor"
                            stopOpacity="0.103775"
                          />
                        </linearGradient>
                        <clipPath id="clip0_0_106">
                          <rect
                            width="358"
                            height="30"
                            fill="white"
                            transform="translate(14 14)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="relative z-10 mt-6 space-y-2 text-center">
                    <h2 className="text-lg font-medium text-white transition">
                      The Sleeping Buy
                    </h2>
                    <p className="text-gray-400 text-sm">
                      The transaction is executed instantly, non-stop, even when
                      the user is asleep or offline.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 1 Expanded - Alternative View */}
            <motion.div
              style={{
                y: card4Y,
                opacity: card4Opacity,
                scale: card4Scale,
              }}
              className="col-span-full lg:col-span-3"
            >
              <Card className="relative overflow-hidden border-gray-800 bg-gray-900">
                <CardContent className="grid pt-6 sm:grid-cols-2">
                  <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                    <div className="relative flex aspect-square size-12 items-center justify-center rounded-full border border-gray-700 before:absolute before:-inset-2 before:rounded-full before:border before:border-gray-800">
                      <Brain
                        className="m-auto size-5 text-white"
                        strokeWidth={1}
                      />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-medium text-white transition">
                        Set Rules with AI
                      </h2>
                      <p className="text-gray-400 text-sm">
                        Users define complex buy/sell rules in natural language
                        (e.g., &ldquo;Buy if floor price is below 20
                        AVAX&rdquo;).
                      </p>
                    </div>
                  </div>
                  <div className="rounded-tl-lg relative -mb-6 -mr-6 mt-6 h-fit border-l border-t border-gray-700 p-6 py-6 sm:ml-6">
                    <div className="absolute left-3 top-2 flex gap-1">
                      <span className="block size-2 rounded-full border border-gray-700 bg-gray-800"></span>
                      <span className="block size-2 rounded-full border border-gray-700 bg-gray-800"></span>
                      <span className="block size-2 rounded-full border border-gray-700 bg-gray-800"></span>
                    </div>
                    <svg
                      className="w-full sm:w-[150%]"
                      viewBox="0 0 366 231"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.148438 231V179.394L1.92188 180.322L2.94482 177.73L4.05663 183.933L6.77197 178.991L7.42505 184.284L9.42944 187.985L11.1128 191.306V155.455L13.6438 153.03V145.122L14.2197 142.829V150.454V154.842L15.5923 160.829L17.0793 172.215H19.2031V158.182L20.7441 153.03L22.426 148.111V142.407L24.7471 146.86V128.414L26.7725 129.918V120.916L28.1492 118.521L28.4653 127.438L29.1801 123.822L31.0426 120.525V130.26L32.3559 134.71L34.406 145.122V137.548L35.8982 130.26L37.1871 126.049L38.6578 134.71L40.659 138.977V130.26V126.049L43.7557 130.26V123.822L45.972 112.407L47.3391 103.407V92.4726L49.2133 98.4651V106.053L52.5797 89.7556L54.4559 82.7747L56.1181 87.9656L58.9383 89.7556V98.4651L60.7617 103.407L62.0545 123.822L63.8789 118.066L65.631 122.082L68.5479 114.229L70.299 109.729L71.8899 118.066L73.5785 123.822V130.26L74.9446 134.861L76.9243 127.87L78.352 134.71V138.977L80.0787 142.407V152.613L83.0415 142.407V130.26L86.791 123.822L89.0121 116.645V122.082L90.6059 127.87L92.3541 131.77L93.7104 123.822L95.4635 118.066L96.7553 122.082V137.548L99.7094 140.988V131.77L101.711 120.525L103.036 116.645V133.348L104.893 136.218L106.951 140.988L108.933 134.71L110.797 130.26L112.856 140.988V148.111L115.711 152.613L117.941 145.122L119.999 140.988V148.111L123.4 152.613L125.401 158.182L130.547 150.454V156.566L131.578 155.455L134.143 158.182L135.594 168.136L138.329 158.182L140.612 160.829L144.681 169.5L147.011 155.455L148.478 151.787L151.02 152.613L154.886 145.122L158 143.412L159.406 140.637L159.496 133.348L162.295 127.87V122.082L163.855 116.645V109.729L164.83 104.407L166.894 109.729L176.249 98.4651L178.254 106.169L180.77 98.4651V81.045L182.906 69.1641L184.8 56.8669L186.477 62.8428L187.848 79.7483L188.849 106.169L191.351 79.7483L193.485 75.645V98.4651L196.622 94.4523L198.623 87.4228V79.7483L200.717 75.645L202.276 81.045V89.3966L203.638 113.023L205.334 99.8037L207.164 94.4523L208.982 98.4651V102.176L211.267 107.64L212.788 81.045L214.437 66.0083L216.19 62.8428L217.941 56.8669V73.676V79.7483L220.28 75.645L222.516 66.0083V73.676H226.174V84.8662L228.566 98.4651L230.316 75.645L233.61 94.4523V104.25L236.882 102.176L239.543 113.023L241.057 98.4651L243.604 94.4523L244.975 106.169L245.975 87.4228L247.272 89.3966L250.732 84.8662L251.733 96.7549L254.644 94.4523L257.452 99.8037L259.853 91.3111L261.193 84.8662L264.162 75.645L265.808 87.4228L267.247 58.4895L269.757 66.0083L276.625 13.5146L273.33 58.4895L276.25 67.6563L282.377 20.1968L281.37 58.4895V66.0083L283.579 75.645L286.033 56.8669L287.436 73.676L290.628 77.6636L292.414 84.8662L294.214 61.3904L296.215 18.9623L300.826 0.947876L297.531 56.8669L299.973 62.8428L305.548 22.0598L299.755 114.956L301.907 105.378L304.192 112.688V94.9932L308.009 80.0829L310.003 94.9932L311.004 102.127L312.386 105.378L315.007 112.688L316.853 98.004L318.895 105.378L321.257 94.9932L324.349 100.81L325.032 80.0829L327.604 61.5733L329.308 82.3223L333.525 52.7986L334.097 52.145L334.735 55.6812L337.369 59.8108V73.676L340.743 87.9656L343.843 96.3728L348.594 82.7747L349.607 81.045L351 89.7556L352.611 96.3728L355.149 94.9932L356.688 102.176L359.396 108.784L360.684 111.757L365 95.7607V231H148.478H0.148438Z"
                        fill="url(#paint0_linear_0_705)"
                      />
                      <path
                        className="text-gray-600"
                        d="M1 179.796L4.05663 172.195V183.933L7.20122 174.398L8.45592 183.933L10.0546 186.948V155.455L12.6353 152.613V145.122L15.3021 134.71V149.804V155.455L16.6916 160.829L18.1222 172.195V158.182L19.8001 152.613L21.4105 148.111V137.548L23.6863 142.407V126.049L25.7658 127.87V120.525L27.2755 118.066L29.1801 112.407V123.822L31.0426 120.525V130.26L32.3559 134.71L34.406 145.122V137.548L35.8982 130.26L37.1871 126.049L38.6578 134.71L40.659 138.977V130.26V126.049L43.7557 130.26V123.822L45.972 112.407L47.3391 103.407V92.4726L49.2133 98.4651V106.053L52.5797 89.7556L54.4559 82.7747L56.1181 87.9656L58.9383 89.7556V98.4651L60.7617 103.407L62.0545 123.822L63.8789 118.066L65.631 122.082L68.5479 114.229L70.299 109.729L71.8899 118.066L73.5785 123.822V130.26L74.9446 134.861L76.9243 127.87L78.352 134.71V138.977L80.0787 142.407V152.613L83.0415 142.407V130.26L86.791 123.822L89.0121 116.645V122.082L90.6059 127.87L92.3541 131.77L93.7104 123.822L95.4635 118.066L96.7553 122.082V137.548L99.7094 140.988V131.77L101.711 120.525L103.036 116.645V133.348L104.893 136.218L106.951 140.988L108.933 134.71L110.797 130.26L112.856 140.988V148.111L115.711 152.613L117.941 145.122L119.999 140.988L121.501 148.111L123.4 152.613L125.401 158.182L127.992 152.613L131.578 146.76V155.455L134.143 158.182L135.818 164.629L138.329 158.182L140.612 160.829L144.117 166.757L146.118 155.455L147.823 149.804L151.02 152.613L154.886 145.122L158.496 140.988V133.348L161.295 127.87V122.082L162.855 116.645V109.729L164.83 103.407L166.894 109.729L176.249 98.4651L178.254 106.169L180.77 98.4651V81.045L182.906 69.1641L184.8 56.8669L186.477 62.8428L187.848 79.7483L188.849 106.169L191.351 79.7483L193.485 75.645V98.4651L196.622 94.4523L198.623 87.4228V79.7483L200.717 75.645L202.276 81.045V89.3966L203.638 113.023L205.334 99.8037L207.164 94.4523L208.982 98.4651V102.176L211.267 107.64L212.788 81.045L214.437 66.0083L216.19 62.8428L217.941 56.8669V73.676V79.7483L220.28 75.645L222.516 66.0083V73.676H226.174V84.8662L228.566 98.4651L230.316 75.645L233.61 94.4523V104.25L236.882 102.176L239.543 113.023L241.057 98.4651L243.604 94.4523L244.975 106.169L245.975 87.4228L247.272 89.3966L250.732 84.8662L251.733 96.7549L254.644 94.4523L257.452 99.8037L259.853 91.3111L261.193 84.8662L264.162 75.645L265.808 87.4228L267.247 58.4895L269.757 66.0083L276.625 13.5146L273.33 58.4895L276.25 67.6563L282.377 20.1968L281.37 58.4895V66.0083L283.579 75.645L286.033 56.8669L287.436 73.676L290.628 77.6636L292.414 84.8662L294.214 61.3904L296.215 18.9623L300.826 0.947876L297.531 56.8669L299.973 62.8428L305.548 22.0598L299.755 114.956L301.907 105.378L304.192 112.688V94.9932L308.009 80.0829L310.003 94.9932L311.004 102.127L312.386 105.378L315.007 112.688L316.853 98.004L318.895 105.378L321.257 94.9932L324.349 100.81L325.032 80.0829L327.604 61.5733L329.357 74.9864L332.611 52.6565L334.352 48.5552L335.785 55.2637L338.377 59.5888V73.426L341.699 87.5181L343.843 93.4347L347.714 82.1171L350.229 78.6821L351.974 89.7556L353.323 94.9932L355.821 93.4347L357.799 102.127L360.684 108.794L363.219 98.004L365 89.7556"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_0_705"
                          x1="0.85108"
                          y1="0.947876"
                          x2="0.85108"
                          y2="230.114"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop
                            className="text-white/15"
                            stopColor="currentColor"
                          />
                          <stop
                            className="text-transparent"
                            offset="1"
                            stopColor="currentColor"
                            stopOpacity="0.01"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Feature 2 & 3 Combined View */}
            <motion.div
              style={{
                y: card5Y,
                opacity: card5Opacity,
                scale: card5Scale,
              }}
              className="col-span-full lg:col-span-3"
            >
              <Card className="relative overflow-hidden border-gray-800 bg-gray-900">
                <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                  <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                    <div className="relative flex aspect-square size-12 items-center justify-center rounded-full border border-gray-700 before:absolute before:-inset-2 before:rounded-full before:border before:border-gray-800">
                      <Moon
                        className="m-auto size-6 text-white"
                        strokeWidth={1}
                      />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-medium text-white transition">
                        The Sleeping Buy
                      </h2>
                      <p className="text-gray-400 text-sm">
                        The transaction is executed instantly, non-stop, even
                        when the user is asleep or offline.
                      </p>
                    </div>
                  </div>
                  <div className="before:bg-gray-800 relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px sm:-my-6 sm:-mr-6">
                    <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
                      <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                        <span className="block h-fit rounded border border-gray-700 bg-gray-900 px-2 py-1 text-xs text-white shadow-sm">
                          Zero-Latency
                        </span>
                        <div className="ring-gray-900 size-7 ring-4 rounded-full bg-gray-800 flex items-center justify-center">
                          <Zap className="size-4 text-white" />
                        </div>
                      </div>
                      <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2">
                        <div className="ring-gray-900 size-8 ring-4 rounded-full bg-gray-800 flex items-center justify-center">
                          <Brain className="size-4 text-white" />
                        </div>
                        <span className="block h-fit rounded border border-gray-700 bg-gray-900 px-2 py-1 text-xs text-white shadow-sm">
                          AI Rules
                        </span>
                      </div>
                      <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                        <span className="block h-fit rounded border border-gray-700 bg-gray-900 px-2 py-1 text-xs text-white shadow-sm">
                          Always On
                        </span>
                        <div className="ring-gray-900 size-7 ring-4 rounded-full bg-gray-800 flex items-center justify-center">
                          <Moon className="size-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
