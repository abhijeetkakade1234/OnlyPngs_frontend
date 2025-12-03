"use client";

import { useEffect } from "react";
import { analytics } from "@/lib/firebase";

/**
 * Firebase Analytics Component
 * Initializes and manages Firebase Analytics for the application
 * This component should be included in the root layout
 */
export default function FirebaseAnalytics() {
  useEffect(() => {
    // Analytics is already initialized in firebase.ts
    // This component ensures analytics is available on the client side
    if (analytics) {
      console.log("Firebase Analytics initialized");
    }
  }, []);

  // This component doesn't render anything
  return null;
}
