function getProducts() {
    return JSON.parse(localStorage.getItem("products")) ?? [];
}

function setProduct(product) {
    // Check if product already exists
    let isProductExist = false;
    let localProducts = getProducts();
    localProducts.forEach((localProduct) => {
        if(localProduct.id == product.id){
            isProductExist = true;
        }
    });

    if(isProductExist){
        throw new Error("Product already exists in cart");
    }

    localStorage.setItem("products", JSON.stringify([product, ...localProducts]));
    return [product, ...localProducts];
}

function deleteProducts() {
    localStorage.removeItem("products");
}

function deleteSingleProduct(product) {
    const products = getProducts();
    const newProducts = products.filter((localProduct) => localProduct.id !== product.id);
    localStorage.setItem("products", JSON.stringify(newProducts));
    return newProducts;
}

function updateProduct(product) {
    let products = getProducts();
    products = JSON.parse(products);
    const newProducts = products.map((localProduct) => {
        if (localProduct.id === product.id) {
        return product;
        }
        return localProduct;
    });
    setProduct(JSON.stringify(newProducts));
}

export { getProducts, setProduct, deleteProducts, deleteSingleProduct, updateProduct };