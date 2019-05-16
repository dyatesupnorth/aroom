export default (hotels, {text}) => {
    return hotels.filter((hotel) => {
        const textMatch = hotel.name.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    });
}