document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll('.experiencia-item input[type="number"]');
    const totalPriceElement = document.getElementById("totalPrice");
    const buyButton = document.getElementById("buyFood");

    function calculateTotalPrice() {
        let totalPrice = 0;

        inputs.forEach((input) => {
            const price = parseFloat(input.dataset.price) || 0;
            const quantity = parseInt(input.value) || 0;
            totalPrice += price * quantity;
        });

        totalPriceElement.textContent = totalPrice.toFixed(2) + " €";

        if (totalPrice > 0) {
            buyButton.classList.remove("disabled");
            buyButton.disabled = false;
        } else {
            buyButton.classList.add("disabled");
            buyButton.disabled = true;
        }
    }

    inputs.forEach((input) => {
        input.addEventListener("input", calculateTotalPrice);
        input.addEventListener("change", calculateTotalPrice);
    });

    // Si el botón se pulsa sin seleccionar entradas, muestra aviso
    buyButton.addEventListener("click", function (event) {
        const total = parseFloat(totalPriceElement.textContent);
        if (isNaN(total) || total === 0) {
            event.preventDefault();
            alert("Por favor selecciona al menos una entrada antes de continuar.");
        } else {
            alert("¡Gracias por tu compra! Total: " + total.toFixed(2) + " €");
        }
    });

    calculateTotalPrice();
});



