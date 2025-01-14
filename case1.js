const fruits = [
    { fruitId: 1, fruitName: 'Apel', fruitType: 'IMPORT', stock: 10 },
    { fruitId: 2, fruitName: 'Kurma', fruitType: 'IMPORT', stock: 20 },
    { fruitId: 3, fruitName: 'apel', fruitType: 'IMPORT', stock: 50 },
    { fruitId: 4, fruitName: 'Manggis', fruitType: 'LOCAL', stock: 100 },
    { fruitId: 5, fruitName: 'Jeruk Bali', fruitType: 'LOCAL', stock: 10 },
    { fruitId: 5, fruitName: 'KURMA', fruitType: 'IMPORT', stock: 20 },
    { fruitId: 5, fruitName: 'Salak', fruitType: 'LOCAL', stock: 150 }
];

// Fungsi untuk mendapatkan nama buah dengan looping
function getFruitNamesWithLooping(fruits) {
    const fruitNames = [];
    for (let i = 0; i < fruits.length; i++) {
        const fruitNameLowerCase = fruits[i].fruitName.toLowerCase(); // Menyamakan huruf besar dan kecil
        if (!fruitNames.includes(fruitNameLowerCase)) { // Pastikan nama buah tidak duplikat
            fruitNames.push(fruitNameLowerCase);
        }
    }
    return fruitNames;
}

// Fungsi untuk memisahkan buah berdasarkan tipe dan menghitung total stock
function separateFruitsByType(fruits) {
    const fruitTypeMap = {};
    fruits.forEach(fruit => {
        const type = fruit.fruitType;
        const fruitNameLowerCase = fruit.fruitName.toLowerCase(); // Menyamakan huruf besar dan kecil
        const stock = fruit.stock;

        if (!fruitTypeMap[type]) {
            fruitTypeMap[type] = {
                fruits: [],
                totalStock: 0
            };
        }

        // Pastikan nama buah tidak duplikat dalam tipe
        if (!fruitTypeMap[type].fruits.includes(fruitNameLowerCase)) {
            fruitTypeMap[type].fruits.push(fruitNameLowerCase);
        }

        // Tambahkan stock ke totalStock untuk tipe tersebut
        fruitTypeMap[type].totalStock += stock;
    });

    const numberOfContainers = Object.keys(fruitTypeMap).length;
    return {
        numberOfContainers,
        fruitTypeMap
    };
}

// Panggil fungsi
const result = separateFruitsByType(fruits);

// 1. Menampilkan semua nama buah yang dimiliki Andi 
console.log("Buah yang dimiliki Andi:", getFruitNamesWithLooping(fruits));

// 2. Memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah 
console.log("Jumlah wadah yang dibutuhkan:", result.numberOfContainers);
console.log("Buah di masing-masing wadah:", result.fruitTypeMap);

// 3. Menampilkan total stock buah yang ada di masing-masing wadah
console.log("Total stock di masing-masing wadah:");
for (const type in result.fruitTypeMap) {
    console.log(`${type}: ${result.fruitTypeMap[type].totalStock}`);
}

// 4. Komentar terkait kasus di atas
console.log("\nKomentar:");
console.log("Dalam kasus ini, pemisahan buah berdasarkan tipe dan penghitungan total stock yang disesuaikan dengan kapitalisasi nama buah memastikan tidak ada duplikasi dalam penyimpanan buah yang sama.");


