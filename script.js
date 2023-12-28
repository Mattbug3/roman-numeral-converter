const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const romanNumeralConverter = (num) => {
    var singles = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    var hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    var thousands = ["", "M", "MM", "MMM", "MMMM"];
    var length = num.toString().length;
    var numbers = num.toString().split("").map(Number);
    var roman = '';
    var i = 0;
    
    switch (length) {
        
      case 4:
        roman = thousands[numbers[i]];
        i++;
        
      case 3:
        roman += hundreds[numbers[i]];
        i++;
        
      case 2:
        roman += tens[numbers[i]];
        i++;
        
      case 1 :
        roman += singles[numbers[i]];
    }
   return output.textContent = roman;
}

const checkOutput = () => {
    output.style.display = 'block'
    output.style.color = "#fff"
    const numberInputValue = numberInput.value
    if(isNaN(parseInt(numberInputValue))){
        output.textContent = 'Please enter a valid number'
        output.style.color = "#ff0000"
    }else if(parseInt(numberInputValue) <= 0 ){
        output.textContent = 'Please enter a number greater than or equal to 1'
        output.style.color = "#ff0000"
    } else if(parseInt(numberInputValue) >= 4000){
        output.textContent = 'Please enter a number less than or equal to 3999'
        output.style.color = "#ff0000"
    }else{
        romanNumeralConverter(numberInputValue)
    }
}

convertBtn.addEventListener('click', checkOutput)

document.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        checkOutput()
    }
})

