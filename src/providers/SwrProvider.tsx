"use client";

import React from "react";
import { SWRConfig, SWRConfiguration } from "swr";

import http from "@/lib/http";

export default function SwrProvider({ children }: React.PropsWithChildren) {
  const config = {
    fetcher: http.fetcher,
    onError: http.handleError,
  } satisfies SWRConfiguration;

  return <SWRConfig value={config}>{children}</SWRConfig>;
}
