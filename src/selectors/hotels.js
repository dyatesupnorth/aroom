export default (hotels, { text, starRating,facilities }) => {
  return hotels.filter(hotel => {
    const textMatch = hotel.name.toLowerCase().includes(text.toLowerCase());
    const starRatingMatch = starRating ? starRating === hotel.starRating : true;
    const facilitiesMatch = facilities ? hotel.facilities.filter(element => facilities.includes(element)) : true;
    return textMatch && starRatingMatch && facilitiesMatch;
  });
};
