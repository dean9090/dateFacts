
const chalk = require("chalk");
const moment = require("moment");


// "dddd" gives todays days
let today = moment().format("dddd");
// this formats the rest of the date and time
let date = moment().format("MMMM Do YYYY, h:mm:ss a");

// *****today from beginning of year*****
// DDDo- o gives the th to the end of the days
let days = moment().format("DDDo")

//****** seconds into the days*******
let start = moment().startOf("day")

//*****DAYLIGHT SAVINGS TIME*********
function isItDaylight() {
  let dst = moment().isDST();
    if (dst) {
    return "is"
  }else {
    return "is not"
  }
}
// **********LEAP YEAR********

function isItLeapYear() {
  let leapYear = moment().isLeapYear();
  if(leapYear){
    return "is"
  }else{
    return "is not"
  }
}




//       OUTPUTS
// it is day, date, time
  console.log(`It is ${chalk.rgb(119,138,228)(today)} ${chalk.rgb(119, 138, 228)(date)}.`);
// it is 199th day of the year
  console.log(`It is the ${chalk.rgb(233, 104, 216)(days)} day of the year.`);
// it is 5448 seconds into the day
  console.log(`It is ${chalk.rgb(62, 199, 182)(moment().diff(start, "seconds"))} seconds into the day.`);
// it is during daylight savings time
  console.log(`It ${chalk.rgb(102, 189, 67)(isItDaylight())} during the Daylight Savings Time.`);
// it is not a leap year
  console.log(`It ${chalk.rgb(242, 40, 40)(isItLeapYear())} a leap year.`);
