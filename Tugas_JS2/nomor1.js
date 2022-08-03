//Buat dan jelaskanlah 10 method bawaan JavaScript (Built-in Functions)  
//contoh penggunaannya(kecuali : split, reverse, join, foreach, map)

//1.slice()->array
//Berguna menyalin sebagian elemen array ke array baru.

const kucing1 = ["Anggora", "Persia", "Sphynx", "Ragdoll", "Siberia"];
console.log(kucing1);
console.log(kucing1.slice(1, 3));


//2.push()->array
//Berguna untuk menambahkan satu atau lebih elemen ke dalam array.

const kucing2 = ["Anggora", "Persia", "Sphynx"];
console.log(kucing2);
kucing2.push("Ragdoll", "Siberia");
console.log(kucing2);


//3. includes()->array
//Berguna untuk apakah sebuah array memiliki elemen berdasarkan parameter yang diberikan. Bersifat case-sensitive.

const kucing3 = ["Anggora", "Persia", "Sphynx", "Ragdoll", "Siberia"];
console.log(kucing3.includes("Persia", 0));
console.log(kucing3.includes("Savannah", 0));


//4.replace()->string
//Berguna untuk mencari suatu nilai pada sebuah string berdasarkan parameter pertama yang dimasukkan, lalu jika ditemukan maka string tersebut akan diubah berdasarkan parameter kedua yang dimasukkan. Bersifat case-sensitive.

const str4 = "Kucing Anggora berasal dari Turki.";
console.log(str4);
console.log(str4.replace("Anggora", "Persia"));


//5.trim()->string
//Berguna untuk menghapus spasi pada string yang terdapat di awal dan di akhir string.

const str5 = "     Kucing Isi     ";
console.log(str5, str5.length);
console.log(str5.trim(), str5.trim().length);

//6.repeat()->string
//Berguna untuk membuat salinan string sebanyak parameter yang diberikan.

const str6 = "haha";
console.log(str6.repeat(5));
console.log(str6.repeat(10));

//7.concat()->array
//Berguna untuk menggabungkan dua array menjadi satu.

const kucingg1 = ["Anggora", "Persia", "Sphynx"];
const kucingg2 = ["Ragdoll", "Siberia"];
console.log(kucingg1.concat(kucingg2));

//8.parseInt()->number
//Berguna untuk mengubah suatu nilai string menjadi number.

let number = "25";
console.log(number, typeof number);
number = Number.parseInt(number);
console.log(number, typeof number);

//9.startsWith ->string
//Berguna untuk mengecek apakah suatu string memiliki awalan sesuai dengan parameter string yang dimasukkan. Bersifat case-sensitive.

const string9 = "Kucing persia itu berasal dari Turki.";
console.log(string9.startsWith("Kuc"));
console.log(string9.startsWith("Kuc", 1));

//10.hasOwnProperty ->object
//Berguna untuk mengecek apakah suatu object memiliki key sesuai dengan parameter yang dimasukkan.

const bio = {
    name: "Rizki Nasution",
    alamat: "Bogor",
  };
  console.log(bio.hasOwnProperty("name"));
  console.log(bio.hasOwnProperty("age"));

