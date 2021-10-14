

const allCategories = document.querySelectorAll('.item');
console.log('Number of categories:', allCategories.length);


allCategories.forEach(item => {

    const heading = item.querySelector('h2');
    console.log("Category:", heading.textContent);
    
    const elements = item.querySelectorAll('li');
    console.log('Elements:',elements.length);
})


