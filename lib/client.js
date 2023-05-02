
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '@sanity/client';

export const client = sanityClient({
    projectId: 'jonx2wnb',
    dataset: 'production',
    apiVersion: '2023-04-25',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_KEY
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)