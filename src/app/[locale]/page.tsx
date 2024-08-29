import { Banner } from "@/components/Banner/Banner";
import { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
// import Image from "next/image";

export const metadata: Metadata = {
  title: "PVB",
  description: "site pvb",
};

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <main className="min-h-screen">
     <Banner images={[
            { url: "/banner.png" },
            { url: "/banner3.png" },
          ]} />
    </main>
  );
}
