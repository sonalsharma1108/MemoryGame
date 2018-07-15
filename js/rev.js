var str ="sonalsharma";
var array = [];

while (str) {
   if (str.length < 5) {
       array.push(str);
       break;
   } else {
       array.push(str.substr(0, 5));
       str = str.substr(5);
   }
}
console.log(array.toString());
var a = array.toString(str);
console.log(a);