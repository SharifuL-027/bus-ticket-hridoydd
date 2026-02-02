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
function selectSeat(seatId) {
    const seatBtn = document.getElementById(seatId);
    seatBtn.classList.add('bg-[#1DD100]', 'text-white');
    seatBtn.classList.remove('bg-gray-100');
    selectedSeats.push(seatId);
    const row = document.createElement('tr');
    row.id = `cart-item-${seatId}`;
    row.innerHTML = `
        <td class="py-2">${seatId}</td>
        <td class="py-2">Economy</td>
        <td class="py-2 text-right">${ticketPrice}</td>
    `;
    cartItemsContainer.appendChild(row);
    updateSummary();
}
function removeSeat(seatId) {
    const seatBtn = document.getElementById(seatId);

    seatBtn.classList.remove('bg-[#1DD100]', 'text-white');
    seatBtn.classList.add('bg-gray-100');

    selectedSeats = selectedSeats.filter(id => id !== seatId);
    const row = document.getElementById(`cart-item-${seatId}`);
    if(row) row.remove();

    updateSummary();
}
function updateSummary() {
    const count = selectedSeats.length;
    selectedSeatCountEl.innerText = count;
    seatsLeftEl.innerText = 40 - count;

    const total = count * ticketPrice;
    totalPriceEl.innerText = total;
    grandTotalEl.innerText = total;
    if (count > 0) {
        applyBtn.removeAttribute('disabled');
    } else {
        applyBtn.setAttribute('disabled', true);
    }
    validateForm();
}