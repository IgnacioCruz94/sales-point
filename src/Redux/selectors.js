export const Counter = (state) => state.itemCounter.itemsAdded;
export const cart = (state) => state.cart.cartProducts;
export const selectProducts = (state) => state.products.products;
export const selectIsLoading = (state) => state.products.isLoading;
export const selectNewProduct = (state) => state.products.newProduct;
export const selectInvoicesProducts = (state) => state.invoices.invoices;
export const selectInvoicesProductsZero = (state) => state.invoices.invoices[0];