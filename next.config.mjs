import createNextIntlPlugin from "next-intl/plugin";
import withVideos from "next-videos";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
};

// Объединение плагинов
module.exports = withNextIntl(withVideos(nextConfig));
