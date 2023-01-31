
const calcGasoline = () => {
    const price = Number(document.getElementById("price").value);
    // const money = document.getElementById("money").value
    const money = +document.querySelector("#money").value; //new method (+, changed every value to number);
    const answer = document.querySelector("#answer")
    let text;
    const amount = Math.floor(money / price);

    if (amount >= 10) {
        text = `You could get about ${amount} litres, good now you can go.`
    }
    else {
        text = `You could get about ${amount} litres. Sorry you have to stay`
    }

    answer.textContent = text

  
}




const tempConv = (id, value) => {
    const val = parseFloat(value); //parsemethod
    


    const celsius = document.querySelector("#celc");
    const fahrenheit = document.querySelector("#fahr");
    const kelvin = document.querySelector("#kelv");


    if (id === "celc") {
        fahrenheit.value = (val * 1.8 + 32).toFixed(2);
        kelvin.value = (val + 273.15).toFixed(2);     
    }
    if (id === 'fahr') {
        celsius.value = ((val - 32) / 1.8).toFixed(2);
        kelvin.value = ((val - 32) / 1.8 + 273.15).toFixed(2);
    }
    if (id === 'kelv') {
        celsius.value = (val - 273.15).toFixed(2);
        fahrenheit.value = ((val - 273.15) * 1.8 + 32).toFixed(2);

    }
    

};



