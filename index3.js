const salary = prompt("What is the your salary?");

function nhifCalculator(salary) {
    let contribution; // Variable to hold the final NHIFcontribution

    if (salary <= 5999) {
        contribution = 150;
    } else if (salary >= 6000 && salary <= 7999) {
        contribution = 300;
    } else if (salary >= 8000 && salary <= 11999) {
        contribution = 400;
    } else if (salary >= 12000 && salary <= 14999) {
        contribution = 500;
    } else if (salary >= 15000 && salary <= 19999) {
        contribution = 600;
    } else if (salary >= 20000 && salary <= 24999) {
        contribution = 750;
    } else if (salary >= 25000 && salary <= 29999) {
        contribution = 850;
    } else if (salary >= 30000 && salary <= 34999) {
        contribution = 950;
    } else if (salary >= 35000 && salary <= 39999) {
        contribution = 1000;
    } else if (salary >= 40000 && salary <= 44999) {
        contribution = 1000;
    } else if (salary >= 45000 && salary <= 49999) {
        contribution = 1100;
    } else if (salary >= 50000 && salary <= 59999) {
        contribution = 1200;
    } else if (salary >= 60000 && salary <= 69999) {
        contribution = 1300;
    } else if (salary >= 70000 && salary <= 79999) {
        contribution = 1400;
    } else if (salary >= 80000 && salary <= 89999) {
        contribution = 1500;
    } else if (salary >= 90000 && salary <= 99999) {
        contribution = 1600;
    } else if (salary > 100000) {
        contribution = 1700;
    } else {
        return "No salary inputted";
    }

    return contribution; // Returns the final NHIF contribution
}

let resultNhif = nhifCalculator(salary); // stores the contribution to be deducted from salary

function taxDeduction(){
    let taxContribution; // Variable to hold the final tax contribution
    
    
    if ( salary <= 24000) {
        taxContribution = salary * 0.10
    } else if (salary >= 24001 && salary <= 32333 ) {
        taxContribution = salary * 0.25
    }else if ( salary >= 32334 && salary <= 500000 ) {
        taxContribution = salary * 0.30
    }else if ( salary >= 500000 && salary <= 800000  ){
        taxContribution = salary * 0.325
    }else if ( salary > 800000  ){
        taxContribution = salary * 0.35
    } else {
        return "No salary inputted";
    }

    return taxContribution; // Returns the final tax contribution
}

let resultTax = taxDeduction(salary); // stores the amount of tax to be deducted

function nssfContribution(){
    let nssfDeduction;
    nssfDeduction = salary * 0.06
    return nssfDeduction; // Returns the NSSF contribution
}

let resultNssf = nssfContribution(salary);
let netSalary = salary -resultTax - resultNhif - resultNssf // Calculates the net Salary including all the deduction

console.log(`Your net salary is ${netSalary}`)
