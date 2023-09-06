import imageDownloader from 'image-downloader';
import path from 'path';

export const downloadImage = async (directory, imgSrc) => {
  const { filename, image } = await imageDownloader.image({
    dest: path.resolve(process.cwd(), directory, 'dribbble.jpg'),
    url: imgSrc,
  });
};
