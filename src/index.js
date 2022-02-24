module.exports = function toReadable (number) {
    let ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let hundreds = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    
    // 0-10
    if(number<10) return ones[number]
    
    // 11-19
    if(number>=11 && number <20) return teens[number-11]
    
    // Круглые десятки <100
    if(number%10===0 && number <100) return tens[(number/10)-1]
    
    // Остальные до 100
    if(number%10!==0 && number >20 && number <100) return `${tens[Math.floor((number/10)-1)]} ${ones[number%10]}`
    
    // Круглые сотни
    if(number%100 === 0) return hundreds[Math.floor(number/100)-1]
    
    // Сотни + (0-10)
    if(number>100 && number%100<10) return `${hundreds[Math.floor(number/100)-1]} ${ones[number%100]}`
    
    // Сотни + (1-19)
    if(number>100 && number%100>=11 && number%100<20) return `${hundreds[Math.floor(number/100)-1]} ${teens[number%100-11]}`
    
    // Сотни + круглые десятки
    if(number>100 && number%10===0) return `${hundreds[Math.floor(number/100)-1]} ${tens[(number%100/10)-1]}`
    
    // Сотни + остальные
    if(number>100 && number%10!==0 && number%100>20 && number%100<100) return `${hundreds[Math.floor(number/100)-1]} ${tens[Math.floor((number%100/10)-1)]} ${ones[number%100%10]}`
}
