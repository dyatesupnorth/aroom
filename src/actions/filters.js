export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

export const setStarRatingFilter = (starRating = "") => ({
  type: "SET_STAR_RATING_FILTER",
  starRating
});


export const setFacilitiesFilter = (facility = "") => ({
    type: "SET_FACILITIES_FILTER",
    facility
  });