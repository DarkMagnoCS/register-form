document.addEventListener("DOMContentLoaded", () => {
    const steps = Array.from(document.querySelectorAll(".form-step"));
    const nextBtns = document.querySelectorAll(".btn-next");
    const prevBtns = document.querySelectorAll(".btn-prev");
    const form = document.getElementById("registerForm");

    let currentStep = 0;

    nextBtns.forEach(button => {
        button.addEventListener("click", () => {
            const inputs = steps[currentStep].querySelectorAll("input, select");
            let allValid = true;

            inputs.forEach(input => {
                if (!input.checkValidity()) {
                    input.reportValidity();
                    allValid = false;
                }
            });

            if (allValid) {
                steps[currentStep].classList.remove("form-step-active");
                currentStep++;
                steps[currentStep].classList.add("form-step-active");
                updateStepper();
            }
        });
    });

    prevBtns.forEach(button => {
        button.addEventListener("click", () => {
            steps[currentStep].classList.remove("form-step-active");
            currentStep--;
            steps[currentStep].classList.add("form-step-active");
            updateStepper();
        });
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("✅ Success");
    });

    function updateStepper() {
        const stepIndicators = document.querySelectorAll(".step");
        stepIndicators.forEach((step, index) => {
            if (index === currentStep) {
                step.classList.add("active");
            } else {
                step.classList.remove("active");
            }
        });
    }
});
