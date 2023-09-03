const addProduct = () => {
    const productField = document.getElementById('product');
    const quantityField = document.getElementById('quantity');

    const product = productField.value;
    const quantity = quantityField.value;

    if(product === '' || quantity === ''){
        alert('please enter your product');
        return;
    }

    productField.value = '';
    quantityField.value = '';
    
    // console.log(product, quantity);
    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}


// const getStoredShopingCart = () => {
//     let cart = {};
//     const savedCart = localStorage.getItem('cart');
//     if(savedCart){
//         cart = JSON.parse(savedCart);
//     }
//     return cart;
// }

// const saveProductToLocalStorage = (product, quantity) => {
//     const cart = getStoredShopingCart();
//     cart[product] = quantity;
//     const cartStringified = JSON.stringify(cart);
//     localStorage.setItem('cart', cartStringified);
// }

// const displayProductsFromLocalStorage = () => {
//     const savedCart = getStoredShopingCart();
//     console.log(savedCart);
//     for(const product in savedCart){
//         console.log(product);
//         const quantity = savedCart[product];
//         console.log(product, quantity);
//         displayProduct(product, quantity);
//     }
// }

// displayProductsFromLocalStorage();

const getStoredShopingCart = () => {
    let cart = {};
    const savedCart = localStorage.getItem('cart');
    if(savedCart){
        cart = JSON.parse(savedCart)
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShopingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const displayProductsFromLocalStorage = () => {
    const cart = getStoredShopingCart();
    for(const product in cart){
        const quantity =  cart[product];
        displayProduct(product,quantity);
    }
}

displayProductsFromLocalStorage();