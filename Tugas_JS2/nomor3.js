const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    // validasi nilaiAwal < nilaiAkhir
    if (nilaiAwal < nilaiAkhir) {
      // validasi dataArray harus array
      if( Array.isArray(dataArray)){
        if (dataArray.length > 5){
            filterData(nilaiAwal, nilaiAkhir, dataArray);
        }else{
            console.log(" Data array lebih dari 5");
        }
        }else{
            console.log("Nilai harus array")
        }
    }else{
        console.log("Nilai awal harus lebih kecil dari nilai akhir")
    }
}
  
  const filterData = (nilaiAwal, nilaiAkhir, dataArray) => {
    const hasil = dataArray
      .filter((item) => {
        if (item >= nilaiAwal && item <= nilaiAkhir) {
          return item;
        }
      })
    //   .sort((a, b) => a - b);
    .sort(function(a,b) {return a-b;});
  
    if (hasil.length > 0) {
      console.log(hasil);
    } else {
      console.log("Nilai tidak ditemukan");
    }
  };
  
seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]);
seleksiNilai(5, 17, [2, 25, 4]);
seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]); 





//   seleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]); //validasi 1
//   seleksiNilai(true, "8", undefined); // validasi 2
//   seleksiNilai(5, 17, [27, undefined, null]); // validasi 3
//   seleksiNilai(5, 17, [2, 25, 4]); // validasi 4
//   seleksiNilai(5, 17, [2, 25, 4, 1, 30, 18]); // nilai tidak ditemukan
  