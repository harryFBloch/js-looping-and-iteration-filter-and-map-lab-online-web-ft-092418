// Code your solution here:
function driversWithRevenueOver(drivers, amount){
   let array =  drivers.filter(function(driver) {
    if (driver["revenue"] > amount) {
      return driver
    }
  })
  return array
}

function driverNamesWithRevenueOver(drivers, amount){
  return driversWithRevenueOver(drivers, amount).map(driver => driver["name"])
}

function exactMatch(drivers, argument){
  return drivers.filter(driver => driver.name === argument.name || driver.revenue === argument.revenue)
}

function exactMatchToList(drivers, argument){
  return exactMatch(drivers, argument).map(driver => driver.name)
}
