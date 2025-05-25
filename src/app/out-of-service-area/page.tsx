import type { Metadata } from "next";
import { BackButton } from "@/components/ui/back-button";

export const metadata: Metadata = {
  title: "Sam Vargas | Out of service area",
  description: "Sam Vargas tech test for SH:24 for hiring a new software engineer in May/June 2025",
};

export default function OutOfServiceArea() {
  return (
    <div>
      <BackButton className="block mx-auto"/>
      <h2 className="text-xl mb-3 font-semibold text-center">
        We&apos;re sorry, we don&apos;t offer services to that area.
      </h2>
    </div>
  )
}
