const allSeats = document.querySelectorAll('.seat-btn');
let selectedSeats = [];
const ticketPrice = 550;
const maxSeats = 4;


for (const seat of allSeats) {
    seat.addEventListener('click', function() {
        // If seat is already selected, remove it (deselect)
        if (selectedSeats.includes(seat.id)) {
            removeSeat(seat.id);
            return;
        }

        // Validation: Max 4 seats
        if (selectedSeats.length >= maxSeats) {
            alert("You can only select up to 4 seats.");
            return;
        }

        // Add Seat
        selectSeat(seat.id);
    });
}