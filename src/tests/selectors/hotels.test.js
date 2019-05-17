import hotels from "../fixtures/hotels"
import selectHotels from '../../selectors/hotels'

test('should filter by star rating', () => {
    const filters = {
        text: '',
        starRating: 5
    }
    const result = selectHotels(hotels, filters);
    expect(result).toEqual([hotels[0]])
})

test('should filter by facilities', () => {
    let filters = {
        text: '',
        starRating: '',
        facilities: ["car park"]
    }
    let result = selectHotels(hotels, filters);
    expect(result).toEqual([hotels[0],hotels[1]]);

    filters = {
        text: '',
        starRating: 5,
        facilities: ["pool"]
    }
    result = selectHotels(hotels, filters);
    expect(result).toEqual([hotels[0]]);

    filters = {
        text: '',
        starRating: 3,
        facilities: ["car park", "gym"]
    }
    result = selectHotels(hotels, filters);
    expect(result).toEqual([hotels[1]]);
})

test('should filter by text search', () => {
    const filters = {
        text: 'hoteltwo',
        starRating: 3,

    }
    const result = selectHotels(hotels, filters);
    expect(result).toEqual([hotels[1]])
})