let myDate = function (day, month, year) {
   this.day = day;
   this.month = month;
   this.year = year;

   this.getDay = function () {
      return this.day;
   }
   this.getMonth = function () {
      return this.month;
   }
   this.getYear = function () {
      return this.year;
   }
}
let date = new myDate(2, 2, 2007);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
alert(day + "/" + month + "/" + year);
