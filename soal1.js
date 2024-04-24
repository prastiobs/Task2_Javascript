//import readline untuk read and write (stdin dan stdout)
var readline = require('readline');

//buat interface untuk input
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//function menghitung akar dari bilangan positif dan genap
function calculateSqrt() {
    rl.question("Input bilangan genap : ", function(userInput) {
        var number = parseInt(userInput);
        if (number < 0) { //kondisi angka negatif
            console.log("Tidak bisa input bilangan negatif");
        } else if (number % 2 != 0) { //kondisi angka ganjil
            console.log("Tidak bisa input bilangan ganjil");
        } else { //kondisi angka genap
            var squareRoot = Math.sqrt(number); //menghitung akar dari inputan angka
            console.log("Akar dari " + number + " adalah : " + squareRoot); //output hasil
        }
        rl.close();
    });
}

//memanggil fungsi akar
calculateSqrt();
