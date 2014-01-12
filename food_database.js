function LoadFood_database(){
	
	var foods = new Array();
	var food = new Object();
	food.name = "Pizza Margherita";
	food.photo = "./photo/food1.jpg";
	food.video = "video/pizza.webm";
	food.videoFrags = [["Intro", "#t=0,10"], ["Story", "#t=11,29"],["Ingredients", "#t=31,57"], ["Preparation", "#t=58,160"], ["Baking", "#t=161,174"], ["Conclusion", "#t=175,204"]]
	food.ingredients = ["flour : 150g", "water : 150ml", "olive oil two spoon", "salt : 5g", "brewer s yeast", "tomato puree : 150ml", "mozzarella : 100g", "basil"]
	food.rating = "5";
	food.description = "Put the tomato sauce in a bowl and toss with 4 tablespoons of olive oil and salt. When the dough is leavened divide it into 4 parts, take one part and roll it out to form a circle with a diameter of about 30 cm in the pan, lightly greased and sprinkle generously with the tomato sauce, with a little 'extra virgin olive oil mozzarella and coarsely chopped or sliced and bake in preheated oven for about 15 minutes at 250 degrees. Will extract just the pizza from the oven, sprinkle with fresh basil leaves and serve immediately."
	 
	foods[0]=food

	var food = new Object();
	food.name = "roasted meat";
	food.photo = "./photo/food5.jpg";
	food.video = ""
	food.videoFrags = ""
	food.ingredients = ["olive oil two spoon", "salt : 5g", "salad", "basil"];
	food.rating = "3";
	food.description = "So, I recommend that you cook the ribs and x raw chicken thighs because they put a lot more than others, then the sausage and ribs. The thread is very good and is good if you cook it before you put it to soak in a bowl with white wine, oil, garlic and rosemary spice type, and uses a sprig of rosemary x brush this sauce over the meat while cooking. Among the vegetables also add the peppers and attentive WHOLE tomini cook very quickly and if you leave them too can explode."

	foods[1]=food
	
	var food = new Object();
	food.name = "pasta carbonara";
	food.photo = "./photo/food3.jpg";
	food.video = ""
	food.videoFrags = ""
	food.ingredients = ["Spaghetti : 350g", "Pillow : 150g", "Pecorino cheese : 100g", "Pepper", "+1 whole eggs 4 egg yolks"];
	food.rating = "4";
	food.description = "To prepare spaghetti carbonara to put a saucepan containing plenty of water, to a boil, moderately salty again, in view of the fact that the pasta has a very tangy sauce with bacon and cheese. In the meantime, cut the bacon into small cubes or strips, put it in a non-stick pan without adding oil and leave it on the fire until the fat becomes transparent and slightly crispy, and then remove from heat and let cool slightly.Meanwhile, beat the eggs in a bowl then add the cheese and ground pepper."
	
	foods[2]=food
	
	var food = new Object();
	food.name = "mixed fried sea";
	food.photo = "./photo/food2.jpg";
	food.video = ""
	food.videoFrags = ""
	food.ingredients = ["prawn tails : 300g", " squid rings : 300g", "flour : 100g", "a tablespoon of olive oil", "an egg white", "2 cups of peanut oil"];
	food.rating = "5";
	food.description = "Wash and dry the prawns and squid rings. Mix 70 g of flour with olive oil, add two tablespoons of water and stir until you have a smooth batter. Beat the egg whites until stiff and incorporate it to the batter, soak the squid. Heat the oil in a frying pan, then breaded shrimp to remove excess flour, dip them in hot oil, turning them halfway through cooking, remove them from the oil with a slotted spoon and place on paper towels to drain."
	
	foods[3]=food
	
	var food = new Object();
	food.name = "lasagne amatriciana";
	food.photo = "./photo/food4.jpg";
	food.video = ""
	food.videoFrags = ""
	food.ingredients = ["lasagne : 300 grams in total", "250 grams of bacon", "1 red pepper", "olive oil : 6 tablespoons ", "1 golden onion thinly sliced", "butter : 30g"];
	food.rating = "4";
	food.description = "Place in a large skillet thinly sliced onion , chili chopped (no seeds) and the oil and wither all at low fire. Then add the diced bacon and saute until golden brown : remove it from the pan and set it aside. Finally , pour the tomatoes in the pan or if you prefer, fresh ones peeled and seeds . Season with salt and cook over high heat for 8-10 minutes , then add the bacon and let it warm. For the white sauce , melt in a saucepan over low heat the butter, add the flour and stir with a wooden spoon until a thick roux and add a little milk , stirring constantly with wire , so creamy and without lumps."
	
	foods[4]=food
	
	var food = new Object();
	food.name = "spaghetti tomato";
	food.photo = "./photo/food6.jpg";
	food.video = ""
	food.videoFrags = ""
	food.ingredients = ["cherry tomatoes : 300g", "shallot : 40 g", "Parmigiano Reggiano", "spaghetti : 400g", "basil leaves : 4", "San Marzano tomatoes : 200g"];
	food.rating = "3";
	food.description = "To prepare spaghetti with tomatoes 3, started to chop the oregano that will serve to flavor cherry tomatoes (you can also use dried oregano). Take a bowl and put 2 teaspoons of sugar. Then wash the cherry tomatoes, cut in half and arrange on a baking tray lined with baking paper with the cut side facing up. Using a spoon, spread the sauce with oregano and sugar on each half of tomato. Then go a little oil on the tomatoes and bake in a convection oven preheated to 200 degrees for 20 minutes (if oven at 210 degrees for 25-30 minutes)."
	
	foods[5]=food
	
	var food = new Object();
	food.name = "chowder";
	food.photo = "./photo/food7.jpg";
	food.video = ""
	food.videoFrags = ""
	food.ingredients = ["clams : 500g", "extra virgin olive oil : 6 tablespoons", "1 clove of garlic", "Scampi : 300g", "prawns (or shrimp) : 300 g", "butter : 20 gr"];
	food.rating = "4";
	food.description = "To prepare the fish soup, start by cleaning turbot: first, the entrails removed from opening placed under the head, nicked the skin near the opening and pull it away by force, using a towel. Do this on the other side. With a knife removed the top and bottom fins and tail and filleted turbot, eliminating the central bone. Or you can follow the proceedings of the video, before cutting off their fins, and then removing the skin and finally sfilettando meat. Keep aside all the differences, except to serve the innards because the fish stock."
	
	foods[6]=food
	
	var food = new Object();
	food.name = "plumcake chocolate";
	food.photo = "./photo/food8.JPG";
	food.video = ""
	food.videoFrags = ""
	food.ingredients = ["butter : 250g", "sugar : 200g", "honey : 50g", "eggs : 2", "flour : 250g"];
	food.rating = "5";
	food.description = "To prepare the chocolate plum started putting in the bowl of a planetary butter with sugar, honey and vanilla, and then whipped with whips until you have a frothy and then add the eggs a little at a time, always beating. Even when the eggs are blended and the mixture is light and fluffy, add also the fact that you'll melt chocolate in the microwave and let it cool."
	
	foods[7]=food
	
	var food = new Object();
	food.name = "gnocchi sorrentina";
	food.photo = "./photo/food9.jpg";
	food.video = ""
	food.videoFrags = ""
	food.ingredients = ["mozzarella : 250g", "potatoes 1kg", "Parmigiano Reggiano cheese : 100g", "flour : 300g", "salt"];
	food.rating = "4";
	food.description = "To prepare the gnocchi Sorrento started by potatoes, to make gnocchi: wash them under running water to remove any dirt, then pour into a large saucepan and add the salt to taste. Boil the potatoes (it will take about 40 minutes), meanwhile sliced mozzarella and then cut it into small cubes: will be used for seasoning, then set it aside to cool."
	
	foods[8]=food
	
	var food = new Object();
	food.name = "ravioli plin";
	food.photo = "./photo/food10.jpg";
	food.video = ""
	food.videoFrags = ""
	food.ingredients = ["beef lean veal : 250g", "rabbit thighs : 200g", "3 carrots : 300g", "2 stalks celery : 100 grams", "1 large onion", "spinach : 30g"];
	food.rating = "4";
	food.description = "To make the ravioli del plin for first prepare the pasta according to the instructions found here. Sift flour and arrange to fountain on the worktop , inside , one at a time , the eggs and add the salt . Starting from the inside , stir the eggs with a spoon; then worked with hands the dough , mixing all the flour that is located on the worktop . If the dough does not fully collect the flour or would result in slightly hard , add one or two tablespoons of warm water and continue to knead until smooth and compact result."
	
	foods[9]=food
	
	var food = new Object();
	food.name = "meatballs in tomato sauce";
	food.photo = "./photo/food11.jpg";
	food.video = ""
	food.videoFrags = ""
	food.ingredients = ["beef (or pork)", "chopped : 50g", "loaf of bread crumb 100g", "ground pepper", "salt", "chopped parsley : 2 tablespoons", "garlic : 3 cloves"];
	food.rating = "3";
	food.description = "First, to prepare the meatballs to the sauce, remove the crust to a piece of loaf and cut into 100 grams of bread into squares, which will place in a blender and reduce to crumbs. Put in a bowl the minced meat (beef or pork, if you prefer), you can add the sausage deprived of the outer skin and add the finely chopped bread, add the parmesan, pecorino, parsley, eggs, salt, pepper and nutmeg."
	
	foods[10]=food
	
	var food = new Object();
	food.name = "swordfish";
	food.photo = "./photo/food12.jpg";
	food.video = ""
	food.videoFrags = ""
	food.ingredients = ["swordfish steaks : 4", "lemons", "parsley : 1-2", "1 bunch", "extra virgin olive oil", "oregano", "salt"];
	food.rating = "3";
	food.description = "Rinse well under running water, the swordfish steaks and tamponateli with absorbent kitchen paper. Heat on high heat in a cast iron griddle or metal with a thick bottom . While you are heating up quickly brush them with a little bit of ' extra virgin olive oil and pat dry with paper towels. When the plate will be very hot settle the swordfish steaks and cook for a few minutes, holding the flame."
	
	foods[11]=food
	
	var food = new Object();
	food.name = "risotto asparagus";
	food.photo = "./photo/food13.jpg";
	food.video = ""
	food.videoFrags = ""
	food.ingredients = ["carnaroli rice : 320g", "butter : 30g", "2 tablespoons : extra virgin olive oil", "cleaned asparagus : 300g", "1 shallot", "stracchino 150g", "raspadura : 100g"];
	food.rating = "4";
	food.description = "We begin the preparation of risotto with asparagus and asparagus raspadura cleaning (click here to see how to clean the asparagus) once cleansed boil them in salted water. Once in cooking, drain and cut into small pieces, taking care to keep aside some tips for the final decoration of the dish. Chop the shallots finely and let it dry on a low heat for about 10-15 minutes in a pan with the olive oil and butter."
	
	foods[12]=food
	
	var filter = new Array();
	filter[0] = "name";
	filter[1] = "photo";
	filter[2] = "video";
	filter[3] = "videoFrags";
	filter[4] = "ingredients";
	filter[5] = "rating";
	filter[6] = "description";
	
	var jsonText = JSON.stringify(foods, filter, "\t");
	localStorage.food_database=jsonText;
}
