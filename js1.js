$(document).ready(function() {
    const products = [
        {
          imageSrc: 'photos/product-1.jpg',
          productName: 'Red Printed T-Shirt',
          rating: 4.0,
          price: 50.00,
        },
        {
          imageSrc: 'photos/product-2.jpg',
          productName: 'Blue Striped Shirt',
          rating: 4.5,
          price: 45.99,
        },
        {
          imageSrc: 'photos/product-3.jpg',
          productName: 'Black Leather Jacket',
          rating: 4.8,
          price: 99.99,
        },
        {
          imageSrc: 'photos/product-4.jpg',
          productName: 'White Sneakers',
          rating: 4.2,
          price: 34.50,
        },
        {
          imageSrc: 'photos/product-5.jpg',
          productName: 'Denim Jeans',
          rating: 4.4,
          price: 39.95,
        },
        {
          imageSrc: 'photos/product-6.jpg',
          productName: 'Casual Shorts',
          rating: 3.7,
          price: 29.99,
        },
        {
          imageSrc: 'photos/product-7.jpg',
          productName: 'Hooded Sweatshirt',
          rating: 4.6,
          price: 55.00,
        },
        {
          imageSrc: 'photos/product-8.jpg',
          productName: 'Sports Shoes',
          rating: 4.3,
          price: 64.99,
        },
      ];
      

  function createProductElement(product) {
    return `
      <div class="col-4">
        <img src="${product.imageSrc}">
        <h4>${product.productName}</h4>
        <div class="rating">
          ${Array.from({ length: Math.floor(product.rating) }, () => '<i class="fa fa-star"></i').join('')}
          ${product.rating % 1 === 0.5 ? '<i class="fa fa-star-half-o"></i>' : ''}
          ${Array.from({ length: 5 - Math.ceil(product.rating) }, () => '<i class="fa fa-star-o"></i').join('')}
        </div>
        <p>$${product.price.toFixed(2)}</p>
      </div>
    `;
  }

  function appendProductsToRow1(products) {
    const row1 = $('.row1');
    products.forEach((product) => {
      const productElement = createProductElement(product);
      row1.append(productElement);
    });
  }

  appendProductsToRow1(products);
});
