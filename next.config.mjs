import createNextIntlPlugin from 'next-intl/plugin';
import withVideos from 'next-videos';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
  images: {
    unoptimized: true,
  },
};

// Объединение плагинов
const combinedConfig = withNextIntl(withVideos(nextConfig));

export default combinedConfig;
