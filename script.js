const allSeats = document.querySelectorAll('.seat-btn');
let selectedSeats = [];
const ticketPrice = 550;
const maxSeats = 4;
const seatsLeftEl = document.getElementById('seats-left');
const selectedSeatCountEl = document.getElementById('selected-seat-count');
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');
const grandTotalEl = document.getElementById('grand-total');
const couponInput = document.getElementById('coupon-code');

for (const seat of allSeats) {
    seat.addEventListener('click', function() {
        
        if (selectedSeats.includes(seat.id)) {
            removeSeat(seat.id);
            return;
        }

       
        if (selectedSeats.length >= maxSeats) {
            alert("You can only select up to 4 seats.");
            return;
        }

        selectSeat(seat.id);
    });
}