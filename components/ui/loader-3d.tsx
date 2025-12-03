"use client";

import { useEffect } from "react";
import { MultiStepLoader } from "@/components/ui/multi-step-loader";

interface Loader3DProps {
  isLoading?: boolean;
  onComplete?: () => void;
  duration?: number;
}

const loadingStates = [
  {
    text: "Initializing Smart Wallet...",
  },
  {
    text: "Connecting to Avalanche Network...",
  },
  {
    text: "AI Agent Analyzing Market...",
  },
  {
    text: "Gasless Transactions Enabled ✓",
  },
  {
    text: "Ready for Autonomous Trading",
  },
];

export function Loader3D({
  isLoading = true,
  onComplete,
  duration = 50,
}: Loader3DProps) {
  useEffect(() => {
    if (!isLoading && onComplete) {
      // Wait for the loader to finish its exit animation
      const timer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, onComplete]);

  return (
    <MultiStepLoader
      loadingStates={loadingStates}
      loading={isLoading}
      duration={duration}
      loop={false}
    />
  );
}
