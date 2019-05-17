export default (hotels, { text, starRating, facilities }) => {
  return hotels.filter(hotel => {
    const textMatch = hotel.name.toLowerCase().includes(text.toLowerCase());
    const starRatingMatch = starRating ? starRating === hotel.starRating : true;

    const facilitiesMatch = facilities
      ? hotel.facilities.some(facility => facilities.includes(facility))
      : true;
    return textMatch && starRatingMatch && facilitiesMatch;
  });
};
