import axios from 'axios';
import { JSDOM } from 'jsdom';

export const scrapeDribbble = async (url) => {
  const { data } = await axios.get(url);
  const {
    window: { document: doc },
  } = new JSDOM(data);
  const title = doc.querySelector('h1.shot-header-title').innerHTML;
  const imgSrc = doc
    .querySelector(`img[alt="${title}"]`)
    .src.replace(/\?resize.+/g, '');

  return { imgSrc, title };
};
