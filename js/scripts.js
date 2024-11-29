const rootStyles = document.documentElement.style;
const textInputElement = document.getElementById('text-input');
const checkboxElement = document.getElementById('checkbox');
const selectElement = document.getElementById('order');
const productsElement = document.getElementById('products');
const noProducts = document.getElementById('no-products');

const products = [
  {
    image: `./assets/images/image-waffle.jpg`,
    name: 'Waffle with Berries',
    sugarless: 'Sugarless',
    price: 6.5,
  },
  {
    image: `./assets/images/image-creme-brulee.jpg`,
    name: 'Vanilla Bean Crème Brûlée',
    sugarless: 'Sugarless',
    price: 7.0,
  },
  {
    image: `./assets/images/image-macaron.jpg`,
    name: 'Macaron Mix of Five',
    sugarless: '',
    price: 8.0,
  },
  {
    image: `./assets/images/image-tiramisu.jpg`,
    name: 'Classic Tiramisu',
    sugarless: '',
    price: 5.5,
  },
  {
    image: `./assets/images/image-baklava.jpg`,
    name: 'Pistachio Baklava',
    sugarless: 'Sugarless',
    price: 4.0,
  },
  {
    image: `/assets/images/image-meringue.jpg`,
    name: 'Lemon Meringue Pie',
    sugarless: 'Sugarless',
    price: 5.0,
  },
  {
    image: `/assets/images/image-cake.jpg`,
    name: 'Red Velvet Cake',
    sugarless: '',
    price: 4.5,
  },
  {
    image: `./assets/images/image-brownie.jpg`,
    name: 'Salted Caramel Brownie',
    sugarless: '',
    price: 5.5,
  },
  {
    image: `./assets/images/image-panna-cotta.jpg`,
    name: 'Vanilla Panna Cotta',
    sugarless: 'Sugarless',
    price: 6.5,
  },
];

const printItems = (array) => {
  array.forEach((product) => {
    const fragment = document.createDocumentFragment();

    const eachProduct = document.createElement('div');
    eachProduct.classList.add('each-product');

    const image = document.createElement('img');
    image.classList.add('image');
    image.src = product.image;

    const name = document.createElement('span');
    name.classList.add('name');
    name.textContent = product.name;

    const sugarless = document.createElement('span');
    sugarless.classList.add('sugarless');
    sugarless.textContent = product.sugarless;

    const price = document.createElement('span');
    price.classList.add('price');
    price.textContent = '$' + product.price.toFixed(2);

    eachProduct.append(image, name, sugarless, price);
    fragment.append(eachProduct);
    productsElement.append(fragment);
  });
};

const orderByName = () => {
  const newProducts = [...products];
  productsElement.textContent = '';
  newProducts.sort((productA, productB) =>
    productA.name.localeCompare(productB.name)
  );
  console.log(newProducts);
  printItems(newProducts);
};

const orderByPrice = () => {
  const newProducts = [...products];
  productsElement.textContent = '';
  newProducts.sort((productA, productB) => productA.price - productB.price);
  console.log(newProducts);
  printItems(newProducts);
};

const sugarlessProducts = () => {
  const newProducts = [...products];
  productsElement.textContent = '';
  const filteredProducts = newProducts.filter(
    (product) => product.sugarless === 'Sugarless'
  );
  console.log(filteredProducts);
  printItems(filteredProducts);
};

const showAll = () => {
  productsElement.textContent = '';
  printItems(products);
};

showAll();

const showSugarless = (event) => {
  if (event.target.checked) {
    sugarlessProducts();
  } else {
    showAll();
  }
};
checkboxElement.addEventListener('click', showSugarless);

const showByFilters = (event) => {
  if (event.target.value === 'default') {
    showAll();
  } else if (event.target.value === 'name') {
    orderByName();
  } else if (event.target.value === 'price') {
    orderByPrice();
  }
};

const fliterByName = (event) => {
  const productsToFilter = [...products];
  productsElement.textContent = '';
  let input = event.target.value.toLowerCase();
  const filtered = productsToFilter.filter((product) =>
    product.name.toLowerCase().includes(input)
  );
  console.log(filtered);
  printItems(filtered);
  if (filtered.length === 0) {
    noProducts.classList.remove('no-show');
  } else {
    noProducts.classList.add('no-show');
  }
};
selectElement.addEventListener('change', showByFilters);

textInputElement.addEventListener('input', fliterByName);
