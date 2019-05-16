import hotels from "../fixtures/hotels"
import selectHotels from '../../selectors/hotels'

// test('should filter by star rating', () => {
//     const filters = {
//         starRating: 5
//     }
//     const result = selectHotels(hotels, filters);
//     expect(result).toEqual([hotels[0]])
// })

// test('should filter by facilities', () => {
//     const filters = {
//         facilities: ["car park"]
//     }
//     const result = selectHotels(hotels, filters);
//     expect(result).toEqual([hotels[0],hotels[1]])
// })

test('should filter by text search', () => {
    const filters = {
        text: 'hoteltwo'
    }
    const result = selectHotels(hotels, filters);
    expect(result).toEqual([hotels[1]])
})