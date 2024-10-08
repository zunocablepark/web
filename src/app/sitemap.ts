import { MetadataRoute } from 'next';

import { BASE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {

  return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
}
