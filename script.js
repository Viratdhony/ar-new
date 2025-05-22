function calculate() {
    const baseUnit = parseFloat(document.getElementById('baseUnit').value);
    const baseRate = parseFloat(document.getElementById('baseRate').value);
    const ratePerGram = baseRate / baseUnit;
    
    let results = "<h3>Price per 50g increments:</h3><ul>";
    for (let weight = 50; weight <= 1000; weight += 50) {
        results += `<li>${weight}g: ₹${(weight * ratePerGram).toFixed(2)}</li>`;
    }
    results += "</ul>";
    
    document.getElementById('results').innerHTML = results;
}