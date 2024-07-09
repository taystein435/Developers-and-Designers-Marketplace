/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Toaster } from "../ui/sonner";

const CookiesPrompt = () => {
  const [toastShown, setToastShown] = useState(false);
  useEffect(() => {
    const isCookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (toastShown) return;
    if (!isCookiesAccepted && !toastShown) {
      const toastContent = (
        <div className="p-4 space-y-4">
          <h2 className="text-2xl font-bold">Cookies & GDPR</h2>
          <p>
            We use cookies to enhance your browsing experience, serve
            personalized ads or content, and analyze our traffic. By clicking
            "Accept All", you consent to our use of cookies.
          </p>
          <div className="flex justify-end space-x-4">
            <button
              className="px-4 py-2 bg-black hover:bg-gray-300 rounded"
              onClick={() => toast.dismiss()}
            >
              Decline
            </button>
            <button
              className="px-4 py-2 bg-white text-black hover:bg-slate-500rounded"
              onClick={() => {
                localStorage.setItem("cookiesAccepted", "true");
                toast.dismiss();
              }}
            >
              Accept All
            </button>
          </div>
        </div>
      );

      toast(toastContent, { duration: Infinity });
      setToastShown(true);
    }
  }, [toastShown]);

  return <Toaster />;
};

export default CookiesPrompt;
