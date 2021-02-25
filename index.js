const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = array => array.slice(0,2)
console.log(returnFirstTwoDrivers(drivers));


const returnLastTwoDrivers = array => array.slice(-2)
console.log(returnLastTwoDrivers(drivers))
    


let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiplier){
    return fare => {
        return fare * multiplier
    } 
}

console.log(createFareMultiplier(4)(5))


const fareDoubler = (n) => 2 * n


const fareTripler = (n) => 3 * n


function selectDifferentDrivers(drivers, selectingDrivers){
    return selectingDrivers(drivers)
}

console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers))




