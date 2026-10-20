import { createMetadata } from "@/lib/seo";
import { HomePage2026 } from "@/components/sections/HomePage2026";

export const metadata = createMetadata({
  title: "IT Support & Security in Seneca & Upstate SC",
  description: "IT support, security assessments, MSP transitions, Microsoft 365, and network services for businesses in Seneca and Upstate South Carolina. Contact NextGridIT.",
  path: "/",
});

export default function Home() {
  return <HomePage2026 />;
}
