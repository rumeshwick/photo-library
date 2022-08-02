import { Image } from '../models/Image';

export const generateRandom = (min = 0, max = 100) => {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor(rand * difference);
  rand = rand + min;
  return rand;
};

export const getRandomImages = (size: number): Promise<Image[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Promise.all(
        Array(size)
          .fill(0)
          .map(() => fetch('https://picsum.photos/300/300'))
      )
        .then((response) => {
          resolve(
            response.map(({ url }) => ({
              url,
              id: getImageId(url),
              isFavorite: false,
            }))
          );
        })
        .catch(() => {
          reject('Error while loading images');
        });
    }, generateRandom(200, 300));
  });
};

export const getImageId = (url: string): string => {
  let trimText = url.substring(url.indexOf('/id/') + 4);
  trimText = trimText.substring(0, trimText.indexOf('/'));
  return trimText;
};
