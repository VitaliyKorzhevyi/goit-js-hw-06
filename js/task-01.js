const categories = document.querySelectorAll(".item"); // всі class="item"
  
const numberOfCategories = categories.length; // к-сть категорій за допомогою властивості .length

console.log(`Number of categories: ${numberOfCategories}`);
  
// для того щоб, не прописувати однаковий код до кожної категорії, можна загнати в цикл, який перебиратиме його

categories.forEach((item) => {
    const category = item.querySelector("h2").textContent; 
    const numOfElems = item.querySelectorAll("li").length; 
  
    console.log(`Category: ${category} \nElements: ${numOfElems}`);
});