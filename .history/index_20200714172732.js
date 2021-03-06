const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multi) {
  return function(num) {
    return multi * num
  }
}

function fareDoubler(number) {
  return createFareMultiplier(2)(number)
}