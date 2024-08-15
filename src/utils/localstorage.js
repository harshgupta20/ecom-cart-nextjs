function getProducts() {
  return localStorage.getItem("products");
}

function setProducts(products) {
  localStorage.setItem("products", products);
}

function removeProducts() {
  localStorage.removeItem("products");
}

function deleteSingleProduct(product) {
  const products = getProducts();
  const newProducts = products.filter((localProduct) => localProduct.id !== product.id);
  setProducts(newProducts);
}

function updateProduct(product) {
  const products = getProducts();
  const newProducts = products.map((localProduct) => {
    if (localProduct.id === product.id) {
      return product;
    }
    return localProduct;
  });
  setProducts(newProducts);
}

export { getProducts, setProducts, removeProducts, deleteSingleProduct, updateProduct };