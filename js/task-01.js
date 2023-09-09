// ================1.1=============================

const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);
// ================1.2=============================

categories.forEach(category => {
  const items = category.querySelectorAll("li");
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
}
)

