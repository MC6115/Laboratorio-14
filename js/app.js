'use strict';

function AppState() {
  this.allProducts = [];
}

AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}

AppState.prototype.saveToLocalStorage = function () {
  localStorage.setItem(`datos`, JSON.stringify(this.allProducts));


}

AppState.prototype.loadItems = function () {
  // TODO: Update this instance method to retrieve data from local storage instead of creating new 
  // Products on each page load
  //if (localStorage.getItem(`datos`)) {
  //**nofor (let i = 0; i < productNames.length; i++) {
  //const acceder = JSON.parse(localStorage.getItem(`datos`))
  //this.allProducts.push(acceder)
  //**console.log (this.allProducts)
  // }
  // else{
  //  this.instantiateProducts();
  // } 
  const storedData = localStorage.getItem('datos');
  if (storedData !== null) {
    const acceder = JSON.parse(storedData);
    this.allProducts.push(...acceder);
    console.log(this.allProducts);
  } else {
    this.instantiateProducts();
  }
  /* this.instantiateProducts();
 
   let storeData = localStorage.getItem('allProduct');
   let storeDataConver = JSON.parse(storeData);
 
   if (storeData) {
     for (let i = 0; i < storeDataConver.length; i++) {
       if (storeDataConver[i].name === 'sweep') {
         let recuperado = new Product(storeDataConver[i].name, '.png');
         recurperado.timesClicked = storeDataConver[i].timesClicked;
         recuperado.timesShown = storeDataConver[i].timesShown;
         this.allProducts.push(recuperado);
       }
       else {
         let recuperado = new Product(storeDataConver[i].name);
         recurperado.timesClicked = storeDataConver[i].timesClicked;
         recuperado.timesShown = storeDataConver[i].timesShown;
         this.allProducts.push(recuperado);
       }
     }
   } else {
     this.instantiateProducts();
   }
 */
 }

  function Product(name, fileExtension = 'jpg') {
    this.name = name;
    this.source = `assets/${name}.${fileExtension}`;
    this.timesClicked = 0;
    this.timesShown = 0;
  }