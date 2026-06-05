import { Suspense } from "react";
import PreviewGateClient from "./preview-gate-client";

export default function PreviewPage() {
  return (
    <Suspense fallback={null}>
      <PreviewGateClient />
    </Suspense>
  );
}
