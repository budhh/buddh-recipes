// Sample data for recipe cards (replace with your actual data)
const recipes = [
	{
		id: 1,
		title: 'Pasta Carbonara',
		ingredients: ['Pasta', 'Eggs', 'Bacon'],
		instructions: 'Lorem ipsum...',
	},
	{
		id: 2,
		title: 'Chicken Stir Fry',
		ingredients: ['Chicken', 'Vegetables', 'Soy Sauce'],
		instructions: 'Lorem ipsum...',
	},
	// Add more recipe objects as needed
];

// Function to display recipe cards
function displayRecipes() {
	const cardContainer = document.getElementById('card-container');
	// cardContainer.innerHTML = ''; // Clear existing content

	recipes.forEach((recipe) => {
		const card = document.createElement('div');
		card.classList.add('card');
		card.innerHTML = `
        <img src="./images/template_image.png" class="card-image" />
        <h3 class="card-title">${recipe.title}</h3>
        <button class="card-button" onclick="viewRecipe(${recipe.id})">View Recipe</button>
        // <h2>${recipe.title}</h2>
        // <button onclick="viewRecipe(${recipe.id})">View Recipe</button>
      `;
		cardContainer.appendChild(card);
	});
}

// Function to view full recipe
function viewRecipe(recipeId) {
	// Code to handle displaying full recipe goes here
	// You'll need to create a new page or modal to show the detailed recipe
	// recipeId = 1;

	const selectedRecipe = recipes.find((recipe) => recipe.id === recipeId);

	const newPage = window.open('./recipes/template_page_js.html');

	newPage.onload = function () {
		// Access the document of the new page
		const newPageDocument = newPage.document;

		// Update the HTML elements in the new page with recipe details
		newPageDocument.getElementById('title').innerText = selectedRecipe.title;
		newPageDocument.getElementById('ingredients').innerText =
			selectedRecipe.ingredients.join(', ');
		newPageDocument.getElementById('instructions').innerText =
			selectedRecipe.instructions;
	};

	console.log(`Viewing recipe with ID ${recipeId}`);
}

function addRecipe() {
	const button = document.getElementById('id-recipe');
	button.addEventListener('click', viewRecipe(1));
}

// Initial function call to display recipes
displayRecipes();
