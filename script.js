document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    if (guests < 1 || guests > 20) {
        alert("Number of guests must be between 1 and 20.");
        return;
    }

    const confirmationMessage = `
        Thank you for your booking, ${name}!
        Your table for ${guests} guests has been booked on ${date} at ${time}.
    `;
    document.getElementById('booking-confirmation').innerText = confirmationMessage;

    document.getElementById('booking-form').reset();
});
