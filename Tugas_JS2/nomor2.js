const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"];

function cekitem(str, num, callback) {
    try{
        if ((typeof str != "string")) throw "Masukkan String";
        filteritem(str, num, callback);
    }catch(error){
        console.log(error);
    }
}

function filteritem(str, num, callback){
    let result = name.filter((name) => name.toLowerCase().indexOf(str.toLowerCase())!== -1);
    result = result.slice(0, num);
    callback(result);//revisi, solved
}

function callback(result){
    console.log(result);
}

cekitem('an', 3, callback);

// cekitem(4, 3, callback);