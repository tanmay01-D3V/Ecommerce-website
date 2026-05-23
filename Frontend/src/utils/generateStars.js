export const generateStars = (rating = 0) => {
  return Array.from({ length: 5 }, (_, index) => index < rating);
};
