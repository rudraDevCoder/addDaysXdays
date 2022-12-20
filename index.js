const addDays = require("date-fns/addDays");

function addAfterDays(days) {
  const date = addDays(new Date("22-aug-2020"), days);

  let newdateformat =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  return newdateformat;
}
console.log(addAfterDays(3));
module.exports = addAfterDays;
