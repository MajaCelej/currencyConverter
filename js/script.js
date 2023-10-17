{
    const formElement = document.querySelector(".js-form");
    const resultElement = document.querySelector(".js-result");


    const updateResultText = (result) => {
        resultElement.innerText = result.toFixed(2);
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const rateElement = document.querySelector(".js-rate");

        const amount = amountElement.value;
        const rate = rateElement.value;
        const result = amount * rate;

        updateResultText(result);
    }

    const init = () => {
        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}