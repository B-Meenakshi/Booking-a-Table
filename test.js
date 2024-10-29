// booking.test.js
const bookingFunction = (name, email, date, time, guests) => {
    // Simulate booking logic (simplified)
    return `Booking confirmed for ${name} on ${date} at ${time} for ${guests} guests.`;
};

test('Booking function confirmation message', () => {
    expect(bookingFunction('Thumper', 'thumper@example.com', '2024-10-30', '19:00', 4))
        .toBe('Booking confirmed for Thumper on 2024-10-30 at 19:00 for 4 guests.');
});
