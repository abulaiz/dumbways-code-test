# Dumbways Code Test

### Requirement

Untuk jawaban soal nomer 1 sampai 3 dapat menggunakan node js, dengan mengakses nya melalui terminal / command line

Untuk jawaban soal nomer 4 dapat menggunakan service apache (XAMPP atau LAMPP)

___________________________________

### How to run it 
___________________________________

#### Soal no 1

Jawaban nomer 1 tedapat pada file 1.js

Untuk menguji function tersebut dapat menggunakan node environment dan menambahkan beberapa script berikut ini

``` js
// Runtime

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input : ', (answer) => {

  console.log(`Output : ${is_qualified(answer)}`);

  rl.close();
});
```

___________________________________

#### Soal no 2

Jawaban nomer 2 tedapat pada file 2.js

Untuk menguji function tersebut dapat menggunakan node environment dan menambahkan beberapa script berikut ini

``` js
// Runtime

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input : ', (answer) => {

  console.log(`Output : ${removeDoubleChar(answer)}`);

  rl.close();
});
```

___________________________________

#### Soal no 3

Jawaban nomer 3 tedapat pada file 3.js

Untuk menguji function tersebut dapat menggunakan node environment dan menambahkan beberapa script berikut ini

``` js
// Runtime

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input : ', (answer) => {

  cetak_gambar(answer);

  rl.close();
});
```

___________________________________

#### Soal no 4

Jawaban nomer 4 dapat diakses melalui web browser 