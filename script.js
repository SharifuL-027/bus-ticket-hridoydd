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
const applyBtn = document.getElementById('apply-btn');
const nextBtn = document.getElementById('next-btn');
const phoneNumberInput = document.getElementById('phone-number');
const successModal = document.getElementById('success-modal');

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
applyBtn.addEventListener('click', function() {
    const code = couponInput.value;
    const currentTotal = parseInt(totalPriceEl.innerText);
    
    if (code === "NEW15") {
        const discount = currentTotal * 0.15;
        updateGrandTotal(currentTotal - discount);
        hideCouponSection();
    } else if (code === "Couple 20") {
        const discount = currentTotal * 0.20;
        updateGrandTotal(currentTotal - discount);
        hideCouponSection();
    } else {
        alert("Invalid Coupon Code");
    }
});
phoneNumberInput.addEventListener('keyup', function(e) {
    validateForm();
});


nextBtn.addEventListener('click', function() {
    successModal.showModal();
});