/*const angka1 = 2, angka2 = 3;
let result = 0;

function fungsiTambah(){
    result = angka1 + angka2;
    console.log(result);
}

function fungsiKurang(){
    result = angka1 - angka2;
    console.log(result);
}

function fungsiKali(){
    result = angka1 * angka2;
    console.log(result);
}

function fungsiBagi(){
    result = angka1 / angka2;
    console.log(result);
}

fungsiTambah();
fungsiKurang();
fungsiKali();
fungsiBagi();
*/

function calculate(){
    const angkaA = 10, angkaB = 2;
    let result = 0;

    result = angkaA + angkaB;
    console.log(result);

    result = angkaA - angkaB;
    console.log(result);

    result = angkaA * angkaB;
    console.log(result);

    result = angkaA / angkaB;
    console.log(result);

    result = Math.sqrt(angkaA);
    console.log(result);

}
calculate();

module.export = {
    calculate
}

//console.log(__dirname);