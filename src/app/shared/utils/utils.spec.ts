import { generateRandom, getImageId, getRandomImages } from './utils';

describe('Utils', () => {
  let originalTimeout: number;

  beforeEach(function () {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('should return random number between given range', () => {
    expect(generateRandom(200, 300)).toBeGreaterThanOrEqual(200);
    expect(generateRandom(200, 300)).toBeLessThanOrEqual(300);
  });

  it('should return random image list', async () => {
    const list = await getRandomImages(10);
    expect(list).toHaveSize(10);
    expect(list[0].url).toContain('https://i.picsum.photos');
  });

  it('should return image id', () => {
    expect(
      getImageId(
        'https://i.picsum.photos/id/640/300/300.jpg?hmac=gJjzkqqcGzn0WH0oXNjktCL4kTTnFGPJg_J3yK4O0-8'
      )
    ).toEqual('640');
  });
});
