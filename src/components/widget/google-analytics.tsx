"use client";

import Script from "next/script";
import * as gtag from "@/lib/gtag";
import React from "react";

export default function GoogleAnalytics() {
  gtag.useGtag();

  return (
    <React.Fragment>
      {process.env.NODE_ENV !== "development" && (
        <React.Fragment>
          {/* Global Site Tag (gtag.ts) - Google Analytics */}
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag() { dataLayer.push(arguments); }
                gtag("js", new Date());
                gtag("config", "${gtag.GA_TRACKING_ID}", {
                  paage_path: window.location.pathname
                })
              `,
            }}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
