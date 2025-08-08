function handleSearchSubmit(event) {
    event.preventDefault();
    const cityInput = document.getElementById('search-form-input').value;
    document.getElementById('city').textContent = cityInput;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
