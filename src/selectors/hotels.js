export default (hotels, { text, starRating }) => {
  return hotels.filter(hotel => {
    const textMatch = hotel.name.toLowerCase().includes(text.toLowerCase());
    const starRatingMatch = starRating === hotel.starRating;
    return textMatch && starRatingMatch;
  });
};
