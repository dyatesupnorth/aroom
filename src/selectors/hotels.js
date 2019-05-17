export default (hotels, { text, starRating, facilities }) => {
  return hotels.filter(hotel => {
    const textMatch = hotel.name.toLowerCase().includes(text.toLowerCase());
    const starRatingMatch = starRating ? hotel.starRating >= starRating : true;
    const facilitiesMatch = facilities && facilities.length > 0 ? facilities.every(facility => hotel.facilities.includes(facility)) :true
    return textMatch && starRatingMatch && facilitiesMatch;
  });
};
