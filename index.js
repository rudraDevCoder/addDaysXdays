const addDays = require("date-fns/addDays");

function addAfterDays(days) {
  return addDays(new Date("22-aug-2020"), days);
}
//let date = addAfterDays(days);
//let newdateformat =
//date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();

module.exports = addAfterDays;
