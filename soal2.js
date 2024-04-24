let productBin = {
    requestid: null,
    data: [
        {
            id: 100000057465,
            storageld: 10000008207,
            code: "A01-01-01-A",
            productid: 110000081009,
            productName: "FloBrand-DressBSPink",
            productCode: "FBR00040101",
            quantity: 76,
            createdTime: "2021-12-21T13:54:482",
        },
        {
            id: 100000057466,
            storageld: 10000008207,
            code: "A01-01-01-A",
            productid: 110000081009,
            productName: "FloBrand-DressBSPink",
            productCode: "FBR00040101",
            quantity: 71,
            createdTime: "2021-12-21T13:54:482",
        },
        {
            id: 1000000653224,
            storageld: 10000008207,
            code: "A01-01-01-A",
            productid: 110000081009,
            productName: "FloBrand-DressBSPink",
            productCode: "FBR00040101",
            quantity: 71,
            createdTime: "2021-12-21T13:54:482",
        }
    ]
}

//function menghitung jumlah quantity dari data
function sumQuantity(dataProduct) {
    let totalQuantity = 0;
    for (const product of dataProduct) { //perulangan untuk mengecek product code dan menghitung jumlah dari quantity
        if (product.productCode == "FBR00040101") { //kondisi jika data productCode FBR00040101
            totalQuantity += product.quantity;
        }
    }
    return totalQuantity;
}

//memanggil fungsi penjumlahan
const ResultTotalQuantity = sumQuantity(productBin.data)
console.info(ResultTotalQuantity)
