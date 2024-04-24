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

function sumQuantity2(dataProduct) {
    let totalQuantity = 0;
    for (const product of dataProduct) {
        if (product.productCode == "FBR00040101") {
            totalQuantity += product.quantity;
        }
    }
    return totalQuantity;
}

const totalQuantity2 = sumQuantity2(productBin.data)
console.info(totalQuantity2)
