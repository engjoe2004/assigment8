// var dataRow = document.getElementById('dataRow');
// var arr = [
//    [
//   {
//     name: "Chicken Tikka Masala",
//     description: "Rich and creamy Indian curry with tender chicken pieces",
//     image: "chicken tikka masala curry with rice, indian food, professional photography",
//     imgCover: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
//     prepTime: "20 min",
//     cookTime: "30 min",
//     totalTime: 50,
//     servings: "4 people",
//     difficulty: "Intermediate",
//     category: "Asian",
//     ratingsAverage: 4.7,
//     ratingsQuantity: 389,
//     ingredients: [
//       "600g chicken breast, cubed",
//       "1 cup plain yogurt",
//       "2 tablespoons tikka masala paste",
//       "400ml coconut cream",
//       "1 onion, diced",
//       "4 cloves garlic, minced",
//       "2 tablespoons ginger, grated",
//       "400g canned tomatoes",
//       "Fresh cilantro for garnish"
//     ],
//     instructions: [
//       "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
//       "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
//       "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
//       "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
//       "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
//       "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice."
//     ],
//     nutrition: {
//       calories: "450 kcal",
//       protein: "38g",
//       carbs: "24g",
//       fat: "22g",
//       fiber: "4g",
//       sodium: "760mg"
//     },
//     tips: [
//       "Marinate chicken overnight for deeper flavor",
//       "Use full-fat coconut cream for richest sauce",
//       "Adjust spice level by varying the tikka paste amount",
//       "Serve with naan bread and basmati rice"
//     ]
//   },
//   {
//     name: "Classic Spaghetti Carbonara",
//     description: "Authentic Roman pasta tossed with crispy guanciale, egg yolks, and Pecorino Romano cheese",
//     image: "classic spaghetti carbonara pasta, authentic italian cuisine, professional food photography",
//     imgCover: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop",
//     prepTime: "10 min",
//     cookTime: "15 min",
//     totalTime: 25,
//     servings: "2 people",
//     difficulty: "Easy",
//     category: "Italian",
//     ratingsAverage: 4.9,
//     ratingsQuantity: 512,
//     ingredients: [
//       "200g spaghetti",
//       "100g guanciale or pancetta, diced",
//       "2 large egg yolks + 1 whole egg",
//       "50g Pecorino Romano cheese, freshly grated",
//       "1 tsp freshly cracked black pepper",
//       "Salt for pasta water"
//     ],
//     instructions: [
//       "Bring a large pot of salted water to a boil and cook spaghetti until al dente.",
//       "Sauté diced guanciale in a skillet over medium heat until golden and crispy. Remove from heat.",
//       "Whisk egg yolks, whole egg, grated Pecorino Romano, and black pepper together in a bowl.",
//       "Reserve 1/2 cup of starchy pasta water, then drain the spaghetti.",
//       "Add pasta directly to the skillet with warm guanciale (off the heat).",
//       "Pour in the egg mixture while tossing rapidly, adding pasta water a splash at a time until silky."
//     ],
//     nutrition: {
//       calories: "580 kcal",
//       protein: "26g",
//       carbs: "62g",
//       fat: "26g",
//       fiber: "3g",
//       sodium: "640mg"
//     },
//     tips: [
//       "Never add heavy cream; traditional carbonara relies strictly on eggs and cheese for creaminess",
//       "Remove pan from heat before adding eggs to prevent scrambling",
//       "Use freshly grated Pecorino for smooth melting"
//     ]
//   },
//   {
//     name: "Beef Tacos al Pastor",
//     description: "Savory marinated beef tacos topped with charred pineapple, fresh cilantro, and diced white onions",
//     image: "street style beef tacos al pastor with lime and pineapple, mexican food, professional food photography",
//     imgCover: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=800&auto=format&fit=crop",
//     prepTime: "25 min",
//     cookTime: "20 min",
//     totalTime: 45,
//     servings: "4 people",
//     difficulty: "Intermediate",
//     category: "Mexican",
//     ratingsAverage: 4.8,
//     ratingsQuantity: 275,
//     ingredients: [
//       "600g beef flank steak, thinly sliced",
//       "2 tablespoons achiote paste",
//       "1/2 cup orange juice",
//       "2 tablespoons lime juice",
//       "3 cloves garlic, minced",
//       "1 cup fresh pineapple, sliced into rings",
//       "8 warm corn tortillas",
//       "1/2 cup fresh cilantro, finely chopped",
//       "1 small white onion, diced"
//     ],
//     instructions: [
//       "Blend achiote paste, orange juice, lime juice, garlic, salt, and spices into a smooth marinade.",
//       "Coat beef slices in marinade and chill for at least 1 hour.",
//       "Heat a cast-iron skillet over high heat; sear marinated beef until browned and slightly charred.",
//       "Grill or sear pineapple rings until caramelized, then chop into bite-sized pieces.",
//       "Warm corn tortillas in a dry skillet.",
//       "Assemble tacos by layering beef, charred pineapple, onions, and cilantro. Serve with lime wedges."
//     ],
//     nutrition: {
//       calories: "420 kcal",
//       protein: "32g",
//       carbs: "35g",
//       fat: "16g",
//       fiber: "5g",
//       sodium: "510mg"
//     },
//     tips: [
//       "Slice flank steak thinly against the grain for tender meat",
//       "Double up tortillas per taco to prevent breaking under sauce",
//       "Char the pineapple well to contrast the savory spice"
//     ]
//   },
//   {
//     name: "Creamy Tuscan Garlic Salmon",
//     description: "Pan-seared salmon fillets in a rich garlic cream sauce with sun-dried tomatoes and fresh spinach",
//     image: "pan seared Tuscan salmon in garlic cream sauce with spinach and sun dried tomatoes, gourmet food photography",
//     imgCover: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
//     prepTime: "15 min",
//     cookTime: "20 min",
//     totalTime: 35,
//     servings: "3 people",
//     difficulty: "Easy",
//     category: "Mediterranean",
//     ratingsAverage: 4.9,
//     ratingsQuantity: 421,
//     ingredients: [
//       "4 salmon fillets (150g each)",
//       "1 tablespoon olive oil",
//       "2 tablespoons butter",
//       "4 cloves garlic, minced",
//       "1/2 cup heavy cream",
//       "1/3 cup vegetable stock",
//       "1/2 cup sun-dried tomatoes, drained and sliced",
//       "2 cups fresh baby spinach",
//       "1/3 cup freshly grated Parmesan cheese"
//     ],
//     instructions: [
//       "Season salmon fillets with salt, pepper, and garlic powder.",
//       "Heat olive oil in a skillet over medium-high heat. Sear salmon 5 minutes per side until skin is crisp; transfer to plate.",
//       "In the same pan, melt butter and sauté minced garlic for 1 minute until fragrant.",
//       "Pour in vegetable stock and heavy cream; simmer gently for 3 minutes.",
//       "Add sun-dried tomatoes and baby spinach; stir until spinach is wilted.",
//       "Stir in Parmesan cheese, return salmon to skillet, and spoon cream sauce over fillets before serving."
//     ],
//     nutrition: {
//       calories: "510 kcal",
//       protein: "36g",
//       carbs: "8g",
//       fat: "37g",
//       fiber: "2g",
//       sodium: "480mg"
//     },
//     tips: [
//       "Pat salmon skin completely dry before searing to achieve crispy skin",
//       "Use oil from sun-dried tomato jar when searing for extra flavor",
//       "Pairs well with garlic mashed potatoes or pasta"
//     ]
//   },
//   {
//     name: "Thai Green Vegetable Curry",
//     description: "Fragrant Thai curry packed with crisp vegetables, firm tofu, and aromatic green herbs simmered in coconut milk",
//     image: "thai green vegetable curry with tofu and fresh basil in ceramic bowl, Asian food photography",
//     imgCover: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=800&auto=format&fit=crop",
//     prepTime: "15 min",
//     cookTime: "20 min",
//     totalTime: 35,
//     servings: "4 people",
//     difficulty: "Easy",
//     category: "Asian",
//     ratingsAverage: 4.6,
//     ratingsQuantity: 215,
//     ingredients: [
//       "400ml coconut milk",
//       "2 tablespoons Thai green curry paste",
//       "200g firm tofu, pressed and cubed",
//       "1 red bell pepper, sliced",
//       "1 cup sugar snap peas",
//       "1 small zucchini, sliced",
//       "1 cup bamboo shoots",
//       "1 tablespoon tamari or soy sauce",
//       "1 teaspoon brown sugar",
//       "Fresh Thai basil leaves"
//     ],
//     instructions: [
//       "Heat 2 tablespoons of thick coconut milk cream in a wok over medium heat.",
//       "Add Thai green curry paste and fry for 2 minutes until fragrant and oil separates.",
//       "Pour in remaining coconut milk along with soy sauce and brown sugar. Bring to a low simmer.",
//       "Add cubed tofu, bell pepper, zucchini, and bamboo shoots; cook for 8-10 minutes.",
//       "Add sugar snap peas during the last 3 minutes so they stay crisp.",
//       "Remove from heat, stir in fresh Thai basil, and serve hot over steamed jasmine rice."
//     ],
//     nutrition: {
//       calories: "360 kcal",
//       protein: "14g",
//       carbs: "18g",
//       fat: "26g",
//       fiber: "6g",
//       sodium: "680mg"
//     },
//     tips: [
//       "Fry green curry paste in coconut cream to release essential oils",
//       "Press tofu with paper towels beforehand so it absorbs curry flavor better",
//       "Add a squeeze of fresh lime juice at the end to balance coconut richness"
//     ]
//   }
// ]
// ]

// function displayMeal() {
    
//     var cartona = '';
//     for (var i= 0; i< arr.length; i++) {
//       cartona += `  <div class="col-5 p-0">
//               <div class="food-img position-relative">
//                 <img
//                   src="${arr[i].imgCover}"
//                   alt=""
//                   class="rounded-start-5"
//                 />
//                 <div class="rate">
//                   <i class="fa-solid fa-star text-warning"></i>
//                   <span class="p-color fw-bold">${arr[i].ratingsAverage}</span>
//                   <span class="text-secondary">(${arr[i].ratingsQuantity})</span>
//                 </div>

//                 <div class="info-food">
//                   <div class="d-flex justify-content-between">
//                     <div class="d-flex flex-column align-items-center justify-content-center gap-1">
//                       <i class="fa-solid fa-clock fs-4 text-warning"></i>
//                       <span class="text-secondary">Prep Time</span>
//                       <span class="p-color fw-bold">${arr[i.prepTime]}</span>
//                     </div>
//                     <div class="d-flex flex-column align-items-center justify-content-center gap-1">
//                       <i class="fa-solid fa-fire-burner fs-4 text-danger"></i>
//                       <span class="text-secondary">Cook Time</span>
//                       <span class="p-color fw-bold">${arr[i].cookTime}</span>
//                     </div>
//                     <div class="d-flex flex-column align-items-center justify-content-center gap-1">
//                       <i class="fa-solid fa-users fs-4 text-primary"></i>
//                       <span class="text-secondary"> Servings</span>
//                       <span class="p-color fw-bold">${arr[i].servings}</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="col-7">
//               <div class="py-4 px-3 mt-3">
//                 <div class="d-flex justify-content-between align-items-center">
//                   <div>
//                     <div class="mb-2">
//                       <span class="badge badge-first p-2 rounded-5 me-2"
//                         >${arr[i].difficulty}</span
//                       >
//                       <span class="badge badge-second p-2 rounded-5"
//                         >${arr[i].category}</span
//                       >
//                     </div>
//                     <div>
//                       <h3 class="fw-bold">Chicken Stir-Fry</h3>
//                       <p class="text-secondary">
//                         ${arr[i].description}
//                       </p>
//                     </div>
//                   </div>
//                   <div class="d-flex flex-row gap-2">
//                     <span class="icon-item"
//                       ><i class="fa-solid fa-bookmark"></i
//                     ></span>
//                     <span class="icon-item"
//                       ><i class="fa-solid fa-share-nodes"></i
//                     ></span>
//                   </div>
//                 </div>

              
//                 <ul class="nav nav-tabs d-flex align-items-center justify-content-between" id="myTab" role="tablist">
//                   <li class="nav-item" role="presentation">
//                     <button
//                       class="nav-link active"
//                       id="home-tab"
//                       data-bs-toggle="tab"
//                       data-bs-target="#home-tab-pane"
//                       type="button"
//                       role="tab"
//                       aria-controls="home-tab-pane"
//                       aria-selected="true"
//                     >
//                       <i class="fa-solid fa-list-check"></i>
//                       <span class="turncate">Ingredients</span>
//                     </button>
//                   </li>
//                   <li class="nav-item" role="presentation">
//                     <button
//                       class="nav-link"
//                       id="profile-tab"
//                       data-bs-toggle="tab"
//                       data-bs-target="#profile-tab-pane"
//                       type="button"
//                       role="tab"
//                       aria-controls="profile-tab-pane"
//                       aria-selected="false"
//                     >
//                       <i class="fa-solid fa-book-open"></i>
//                       <span class="turncate">Instructions</span>
//                     </button>
//                   </li>
//                   <li class="nav-item" role="presentation">
//                     <button
//                       class="nav-link"
//                       id="contact-tab"
//                       data-bs-toggle="tab"
//                       data-bs-target="#contact-tab-pane"
//                       type="button"
//                       role="tab"
//                       aria-controls="contact-tab-pane"
//                       aria-selected="false"
//                     >
//                        <i class="fa-solid fa-chart-pie"></i>
//                       <span class="turncate">Nutrition</span>
//                     </button>
//                   </li>
//                   <li class="nav-item" role="presentation">
//                     <button
//                       class="nav-link"
//                       id="chef-tab"
//                       data-bs-toggle="tab"
//                       data-bs-target="#chef-tab-pane"
//                       type="button"
//                       role="tab"
//                       aria-controls="chef-tab-pane"
//                       aria-selected="false"
//                     >
//                       <i class="fa-solid fa-lightbulb"></i>
//                       <span class="turncate">Chef's Tips</span>
//                     </button>
//                   </li>
                 
//                 </ul>
//                 <div class="tab-content  mt-3 border-top border-bottom" id="myTabContent">
//                   <div
//                     class="tab-pane fade show active my-3 bg-pink p-3 rounded-4"
//                     id="home-tab-pane"
//                     role="tabpanel"
//                     aria-labelledby="home-tab"
//                     tabindex="0"
//                   >
//                     <ul class="list-unstyled">
//                           <li class="d-flex align-items-start mb-2 gap-2">
//                             <span class="number-sort"> 1 </span>
//                             <span class="text-secondary"
//                               >${arr[i].ingredients[0]}</span
//                             >
//                           </li>
//                           <li class="d-flex align-items-start mb-2 gap-2">
//                             <span class="number-sort"> 1 </span>
//                             <span class="text-secondary"
//                               >${arr[i].ingredients[1]}</span
//                             >
//                           </li>
//                           <li class="d-flex align-items-start mb-2 gap-2">
//                             <span class="number-sort"> 2 </span>
//                             <span class="text-secondary">
//                               ${arr[i].ingredients[2]}</span
//                             >
//                           </li>
//                           <li class="d-flex align-items-start mb-2 gap-2">
//                             <span class="number-sort"> 3</span>
//                             <span class="text-secondary"
//                               >${arr[i].ingredients[3]}</span
//                             >
//                           </li>
//                           <li class="d-flex align-items-start mb-2 gap-2">
//                             <span class="number-sort"> 4 </span>
//                             <span class="text-secondary"
//                               >${arr[i].ingredients[4]}</span
//                             >
//                           </li>
//                           <li class="d-flex align-items-start mb-2 gap-2">
//                             <span class="number-sort"> 5 </span>
//                             <span class="text-secondary"
//                               >${arr[i].ingredients[5]}</span
//                             >
//                           </li>
//                           <li class="d-flex align-items-start mb-2 gap-2">
//                             <span class="number-sort"> 6 </span>
//                             <span class="text-secondary"
//                               >${arr[i].ingredients[6]}</span
//                             >
//                           </li>
//                           <li class="d-flex align-items-start mb-2 gap-2">
//                             <span class="number-sort"> 7</span>
//                             <span class="text-secondary"
//                               >${arr[i].ingredients[7]}</span
//                             >
//                           </li>
//                           <li class="d-flex align-items-start mb-2 gap-2">
//                             <span class="number-sort"> 8 </span>
//                             <span class="text-secondary"
//                               >${arr[i].ingredients[8]}</span
//                             >
//                           </li>
//                           <li class="d-flex align-items-start mb-2 gap-2">
//                             <span class="number-sort"> 9 </span>
//                             <span class="text-secondary"
//                               >${arr[i].ingredients[9]}</span
//                             >
//                           </li>
//                         </ul>
//                   </div>
//                   <div
//                     class="tab-pane fade bg-pink p-3"
//                     id="profile-tab-pane"
//                     role="tabpanel"
//                     aria-labelledby="profile-tab"
//                     tabindex="0"
//                   >
//                   <div class="d-flex align-items-baseline justify-content-start gap-2 mb-3">
//                        <div class="number-sort "> 1 </div>
//                             <p class="p-color pt-2"
//                               >${arr[i].instructions[0]}.</p
//                             >
//                   </div>
//                   <div class="d-flex align-items-baseline justify-content-start gap-2 mb-3">
//                        <div class="number-sort "> 2 </div>
//                             <p class="p-color pt-2"
//                               >${arr[i].instructions[1]}</p
//                             >
//                   </div>
//                   <div class="d-flex align-items-baseline justify-content-start gap-2 mb-3">
//                        <div class="number-sort "> 3 </div>
//                             <p class="p-color pt-2"
//                               >${arr[i].instructions[2]}</p
//                             >
//                   </div>
//                   <div class="d-flex align-items-baseline justify-content-start gap-2 mb-3">
//                        <div class="number-sort "> 4 </div>
//                             <p class="p-color pt-2"
//                               >${arr[i].instructions[3]}</p
//                             >
//                   </div>
//                   <div class="d-flex align-items-baseline justify-content-start gap-2 mb-3">
//                        <div class="number-sort "> 5 </div>
//                             <p class="p-color pt-2"
//                               >${arr[i].instructions[4]}</p
//                             >
//                   </div>
//                   <div class="d-flex align-items-baseline justify-content-start gap-2 mb-3">
//                        <div class="number-sort "> 6 </div>
//                             <p class="p-color pt-2"
//                               >${arr[i].instructions[5]}</p
//                             >
//                   </div>
                     
//                   </div>
//                   <div
//                     class="tab-pane fade"
//                     id="contact-tab-pane"
//                     role="tabpanel"
//                     aria-labelledby="contact-tab"
//                     tabindex="0"
//                   >
//                    <div class="row mt-3 g-3 overflow-auto">
//                     <div class="col-6">
//                       <div class="d-flex justify-content-between align-items-center py-3 px-2 bg-light rounded-3">
//                         <div class="d-flex justify-content-center align-items-center">
//                           <div class="icon icon-one"><i class="fa-solid fa-fire"></i></div>
//                           <span>Calories</span>
//                         </div>
//                         <span class="caloris-value">${arr[i].nutrition.calories}</span>
//                       </div>
//                     </div>
                   
//                     <div class="col-6">
//                       <div class="d-flex justify-content-between align-items-center py-3 px-2 bg-light rounded-3">
//                         <div class="d-flex justify-content-center align-items-center">
//                           <div class="icon icon-two"><i class="fa-solid fa-dumbbell"></i></div>
//                           <span>Protein</span>
//                         </div>
//                         <span class="caloris-value">${arr[i].nutrition.protein}</span>
//                       </div>
//                     </div>
                  
//                     <div class="col-6">
//                       <div class="d-flex justify-content-between align-items-center py-3 px-2 bg-light rounded-3">
//                         <div class="d-flex justify-content-center align-items-center">
//                           <div class="icon icon-three"><i class="fa-solid fa-wheat-awn"></i></div>
//                           <span>Carbohydrates</span>
//                         </div>
//                         <span class="caloris-value">${arr[i].nutrition.carbs}</span>
//                       </div>
//                     </div>
//                     <div class="col-6">
//                       <div class="d-flex justify-content-between align-items-center py-3 px-2 bg-light rounded-3">
//                         <div class="d-flex justify-content-center align-items-center">
//                           <div class="icon icon-four"><i class="fa-solid fa-droplet"></i></div>
//                           <span>Fat</span>
//                         </div>
//                         <span class="caloris-value">${arr[i].nutrition.fat}</span>
//                       </div>
//                     </div>
//                      <div class="col-6">
//                       <div class="d-flex justify-content-between align-items-center py-3 px-2 bg-light rounded-3">
//                         <div class="d-flex justify-content-center align-items-center">
//                           <div class="icon icon-five"><i class="fa-solid fa-seedling"></i></div>
//                           <span>Fiber</span>
//                         </div>
//                         <span class="caloris-value">${arr[i].nutrition.fiber}</span>
                        
//                       </div>
//                     </div>
//                      <div class="col-6">
//                       <div class="d-flex justify-content-between align-items-center py-3 px-2 bg-light rounded-3">
//                         <div class="d-flex justify-content-center align-items-center">
//                           <div class="icon icon-six"><i class="fa-solid fa-cube"></i></div>
//                           <span>Calories</span>
//                         </div>
//                         <span class="caloris-value">${arr[i].nutrition.sodium}</span>
                        
//                       </div>
//                     </div>
                    
//                    </div>
//                   </div>
//                   <div
//                     class="tab-pane fade"
//                     id="chef-tab-pane"
//                     role="tabpanel"
//                     aria-labelledby="chef-tab"
//                     tabindex="0"
//                   >
                     
//                   <div class="chef-content mt-3 p-2 d-flex  align-items-start align-items-baseline gap-2">
//                        <i class="fa-solid fa-circle-check icon-one"></i>
//                        <p class="p-color">${arr[i].tips[0]}</p>
//                   </div>
//                   <div class="chef-content mt-3 p-2 d-flex  align-items-start align-items-baseline gap-2">
//                        <i class="fa-solid fa-circle-check icon-one"></i>
//                        <p class="p-color">${arr[i].tips[1]}</p>
//                   </div>
//                   <div class="chef-content mt-3 p-2 d-flex  align-items-start align-items-baseline gap-2">
//                        <i class="fa-solid fa-circle-check icon-one"></i>
//                        <p class="p-color">${arr[i].tips[2]}</p>
//                   </div>
//                   <div class="chef-content mt-3 p-2 d-flex  align-items-start align-items-baseline gap-2">
//                        <i class="fa-solid fa-circle-check icon-one"></i>
//                        <p class="p-color">${arr[i].tips[3]}</p>
//                   </div>
//                   </div>
                
//                 </div>

//                 <button class="try-btn" onclick="dispalyMeals()">
//                   <i class="fa-solid fa-rotate"></i>
//                   Try Another Recipe
//                 </button>
//               </div>
//             </div>`
       
//     }
//     dataRow.innerHTML=cartona;
     
// }


var dataRow = document.getElementById('dataRow');

// Fixed: Removed extra outer array brackets
var arr = [
  {
    name: "Chicken Tikka Masala",
    description: "Rich and creamy Indian curry with tender chicken pieces",
    image: "chicken tikka masala curry with rice, indian food, professional photography",
    imgCover: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
    prepTime: "20 min",
    cookTime: "30 min",
    totalTime: 50,
    servings: "4 people",
    difficulty: "Intermediate",
    category: "Asian",
    ratingsAverage: 4.7,
    ratingsQuantity: 389,
    ingredients: [
      "600g chicken breast, cubed",
      "1 cup plain yogurt",
      "2 tablespoons tikka masala paste",
      "400ml coconut cream",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "2 tablespoons ginger, grated",
      "400g canned tomatoes",
      "Fresh cilantro for garnish"
    ],
    instructions: [
      "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
      "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
      "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
      "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice."
    ],
    nutrition: {
      calories: "450 kcal",
      protein: "38g",
      carbs: "24g",
      fat: "22g",
      fiber: "4g",
      sodium: "760mg"
    },
    tips: [
      "Marinate chicken overnight for deeper flavor",
      "Use full-fat coconut cream for richest sauce",
      "Adjust spice level by varying the tikka paste amount",
      "Serve with naan bread and basmati rice"
    ]
  },
  {
    name: "Classic Spaghetti Carbonara",
    description: "Authentic Roman pasta tossed with crispy guanciale, egg yolks, and Pecorino Romano cheese",
    image: "classic spaghetti carbonara pasta, authentic italian cuisine, professional food photography",
    imgCover: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop",
    prepTime: "10 min",
    cookTime: "15 min",
    totalTime: 25,
    servings: "2 people",
    difficulty: "Easy",
    category: "Italian",
    ratingsAverage: 4.9,
    ratingsQuantity: 512,
    ingredients: [
      "200g spaghetti",
      "100g guanciale or pancetta, diced",
      "2 large egg yolks + 1 whole egg",
      "50g Pecorino Romano cheese, freshly grated",
      "1 tsp freshly cracked black pepper",
      "Salt for pasta water"
    ],
    instructions: [
      "Bring a large pot of salted water to a boil and cook spaghetti until al dente.",
      "Sauté diced guanciale in a skillet over medium heat until golden and crispy. Remove from heat.",
      "Whisk egg yolks, whole egg, grated Pecorino Romano, and black pepper together in a bowl.",
      "Reserve 1/2 cup of starchy pasta water, then drain the spaghetti.",
      "Add pasta directly to the skillet with warm guanciale (off the heat).",
      "Pour in the egg mixture while tossing rapidly, adding pasta water a splash at a time until silky."
    ],
    nutrition: {
      calories: "580 kcal",
      protein: "26g",
      carbs: "62g",
      fat: "26g",
      fiber: "3g",
      sodium: "640mg"
    },
    tips: [
      "Never add heavy cream; traditional carbonara relies strictly on eggs and cheese for creaminess",
      "Remove pan from heat before adding eggs to prevent scrambling",
      "Use freshly grated Pecorino for smooth melting"
    ]
  },
  {
    name: "Beef Tacos al Pastor",
    description: "Savory marinated beef tacos topped with charred pineapple, fresh cilantro, and diced white onions",
    image: "street style beef tacos al pastor with lime and pineapple, mexican food, professional food photography",
    imgCover: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=800&auto=format&fit=crop",
    prepTime: "25 min",
    cookTime: "20 min",
    totalTime: 45,
    servings: "4 people",
    difficulty: "Intermediate",
    category: "Mexican",
    ratingsAverage: 4.8,
    ratingsQuantity: 275,
    ingredients: [
      "600g beef flank steak, thinly sliced",
      "2 tablespoons achiote paste",
      "1/2 cup orange juice",
      "2 tablespoons lime juice",
      "3 cloves garlic, minced",
      "1 cup fresh pineapple, sliced into rings",
      "8 warm corn tortillas",
      "1/2 cup fresh cilantro, finely chopped",
      "1 small white onion, diced"
    ],
    instructions: [
      "Blend achiote paste, orange juice, lime juice, garlic, salt, and spices into a smooth marinade.",
      "Coat beef slices in marinade and chill for at least 1 hour.",
      "Heat a cast-iron skillet over high heat; sear marinated beef until browned and slightly charred.",
      "Grill or sear pineapple rings until caramelized, then chop into bite-sized pieces.",
      "Warm corn tortillas in a dry skillet.",
      "Assemble tacos by layering beef, charred pineapple, onions, and cilantro. Serve with lime wedges."
    ],
    nutrition: {
      calories: "420 kcal",
      protein: "32g",
      carbs: "35g",
      fat: "16g",
      fiber: "5g",
      sodium: "510mg"
    },
    tips: [
      "Slice flank steak thinly against the grain for tender meat",
      "Double up tortillas per taco to prevent breaking under sauce",
      "Char the pineapple well to contrast the savory spice"
    ]
  },
  {
    name: "Creamy Tuscan Garlic Salmon",
    description: "Pan-seared salmon fillets in a rich garlic cream sauce with sun-dried tomatoes and fresh spinach",
    image: "pan seared Tuscan salmon in garlic cream sauce with spinach and sun dried tomatoes, gourmet food photography",
    imgCover: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "20 min",
    totalTime: 35,
    servings: "3 people",
    difficulty: "Easy",
    category: "Mediterranean",
    ratingsAverage: 4.9,
    ratingsQuantity: 421,
    ingredients: [
      "4 salmon fillets (150g each)",
      "1 tablespoon olive oil",
      "2 tablespoons butter",
      "4 cloves garlic, minced",
      "1/2 cup heavy cream",
      "1/3 cup vegetable stock",
      "1/2 cup sun-dried tomatoes, drained and sliced",
      "2 cups fresh baby spinach",
      "1/3 cup freshly grated Parmesan cheese"
    ],
    instructions: [
      "Season salmon fillets with salt, pepper, and garlic powder.",
      "Heat olive oil in a skillet over medium-high heat. Sear salmon 5 minutes per side until skin is crisp; transfer to plate.",
      "In the same pan, melt butter and sauté minced garlic for 1 minute until fragrant.",
      "Pour in vegetable stock and heavy cream; simmer gently for 3 minutes.",
      "Add sun-dried tomatoes and baby spinach; stir until spinach is wilted.",
      "Stir in Parmesan cheese, return salmon to skillet, and spoon cream sauce over fillets before serving."
    ],
    nutrition: {
      calories: "510 kcal",
      protein: "36g",
      carbs: "8g",
      fat: "37g",
      fiber: "2g",
      sodium: "480mg"
    },
    tips: [
      "Pat salmon skin completely dry before searing to achieve crispy skin",
      "Use oil from sun-dried tomato jar when searing for extra flavor",
      "Pairs well with garlic mashed potatoes or pasta"
    ]
  },
  {
    name: "Thai Green Vegetable Curry",
    description: "Fragrant Thai curry packed with crisp vegetables, firm tofu, and aromatic green herbs simmered in coconut milk",
    image: "thai green vegetable curry with tofu and fresh basil in ceramic bowl, Asian food photography",
    imgCover: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=800&auto=format&fit=crop",
    prepTime: "15 min",
    cookTime: "20 min",
    totalTime: 35,
    servings: "4 people",
    difficulty: "Easy",
    category: "Asian",
    ratingsAverage: 4.6,
    ratingsQuantity: 215,
    ingredients: [
      "400ml coconut milk",
      "2 tablespoons Thai green curry paste",
      "200g firm tofu, pressed and cubed",
      "1 red bell pepper, sliced",
      "1 cup sugar snap peas",
      "1 small zucchini, sliced",
      "1 cup bamboo shoots",
      "1 tablespoon tamari or soy sauce",
      "1 teaspoon brown sugar",
      "Fresh Thai basil leaves"
    ],
    instructions: [
      "Heat 2 tablespoons of thick coconut milk cream in a wok over medium heat.",
      "Add Thai green curry paste and fry for 2 minutes until fragrant and oil separates.",
      "Pour in remaining coconut milk along with soy sauce and brown sugar. Bring to a low simmer.",
      "Add cubed tofu, bell pepper, zucchini, and bamboo shoots; cook for 8-10 minutes.",
      "Add sugar snap peas during the last 3 minutes so they stay crisp.",
      "Remove from heat, stir in fresh Thai basil, and serve hot over steamed jasmine rice."
    ],
    nutrition: {
      calories: "360 kcal",
      protein: "14g",
      carbs: "18g",
      fat: "26g",
      fiber: "6g",
      sodium: "680mg"
    },
    tips: [
      "Fry green curry paste in coconut cream to release essential oils",
      "Press tofu with paper towels beforehand so it absorbs curry flavor better",
      "Add a squeeze of fresh lime juice at the end to balance coconut richness"
    ]
  }
];

function displayMeal() {
  // Pick one random meal index from the array
  var randomIndex = Math.floor(Math.random() * arr.length);
  var meal = arr[randomIndex];

  var cartona = `
    <div class="col-5 p-0">
      <div class="food-img position-relative">
        <img src="${meal.imgCover}" alt="${meal.name}" class="rounded-start-5" />
        <div class="rate">
          <i class="fa-solid fa-star text-warning"></i>
          <span class="p-color fw-bold">${meal.ratingsAverage}</span>
          <span class="text-secondary">(${meal.ratingsQuantity})</span>
        </div>

        <div class="info-food">
          <div class="d-flex justify-content-between">
            <div class="d-flex flex-column align-items-center justify-content-center gap-1">
              <i class="fa-solid fa-clock fs-4 text-warning"></i>
              <span class="text-secondary">Prep Time</span>
              <span class="p-color fw-bold">${meal.prepTime}</span>
            </div>
            <div class="d-flex flex-column align-items-center justify-content-center gap-1">
              <i class="fa-solid fa-fire-burner fs-4 text-danger"></i>
              <span class="text-secondary">Cook Time</span>
              <span class="p-color fw-bold">${meal.cookTime}</span>
            </div>
            <div class="d-flex flex-column align-items-center justify-content-center gap-1">
              <i class="fa-solid fa-users fs-4 text-primary"></i>
              <span class="text-secondary">Servings</span>
              <span class="p-color fw-bold">${meal.servings}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-7">
      <div class="py-4 px-3 mt-3">
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <div class="mb-2">
              <span class="badge badge-first p-2 rounded-5 me-2">${meal.difficulty}</span>
              <span class="badge badge-second p-2 rounded-5">${meal.category}</span>
            </div>
            <div>
              <h3 class="fw-bold">${meal.name}</h3>
              <p class="text-secondary">${meal.description}</p>
            </div>
          </div>
          <div class="d-flex flex-row gap-2">
            <span class="icon-item"><i class="fa-solid fa-bookmark"></i></span>
            <span class="icon-item"><i class="fa-solid fa-share-nodes"></i></span>
          </div>
        </div>

        <!-- Navigation Tabs -->
        <ul class="nav nav-tabs d-flex align-items-center justify-content-between" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab">
              <i class="fa-solid fa-list-check"></i>
              <span class="turncate">Ingredients</span>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab">
              <i class="fa-solid fa-book-open"></i>
              <span class="turncate">Instructions</span>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab">
              <i class="fa-solid fa-chart-pie"></i>
              <span class="turncate">Nutrition</span>
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="chef-tab" data-bs-toggle="tab" data-bs-target="#chef-tab-pane" type="button" role="tab">
              <i class="fa-solid fa-lightbulb"></i>
              <span class="turncate">Chef's Tips</span>
            </button>
          </li>
        </ul>

        <div class="tab-content mt-3 border-top border-bottom" id="myTabContent">
          <!-- Ingredients -->
          <div class="tab-pane fade show active my-3 bg-pink p-3 rounded-4" id="home-tab-pane" role="tabpanel">
            <ul class="list-unstyled">
              ${meal.ingredients.map((ing, idx) => `
                <li class="d-flex align-items-start mb-2 gap-2">
                  <span class="number-sort">${idx + 1}</span>
                  <span class="text-secondary">${ing}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Instructions -->
          <div class="tab-pane fade bg-pink p-3" id="profile-tab-pane" role="tabpanel">
            ${meal.instructions.map((step, idx) => `
              <div class="d-flex align-items-baseline justify-content-start gap-2 mb-3">
                <div class="number-sort">${idx + 1}</div>
                <p class="p-color pt-2">${step}</p>
              </div>
            `).join('')}
          </div>

          <!-- Nutrition -->
          <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel">
            <div class="row mt-3 g-3 overflow-auto">
              <div class="col-6">
                <div class="d-flex justify-content-between align-items-center py-3 px-2 bg-light rounded-3">
                  <div class="d-flex justify-content-center align-items-center">
                    <div class="icon icon-one"><i class="fa-solid fa-fire"></i></div>
                    <span>Calories</span>
                  </div>
                  <span class="caloris-value">${meal.nutrition.calories}</span>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex justify-content-between align-items-center py-3 px-2 bg-light rounded-3">
                  <div class="d-flex justify-content-center align-items-center">
                    <div class="icon icon-two"><i class="fa-solid fa-dumbbell"></i></div>
                    <span>Protein</span>
                  </div>
                  <span class="caloris-value">${meal.nutrition.protein}</span>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex justify-content-between align-items-center py-3 px-2 bg-light rounded-3">
                  <div class="d-flex justify-content-center align-items-center">
                    <div class="icon icon-three"><i class="fa-solid fa-wheat-awn"></i></div>
                    <span>Carbohydrates</span>
                  </div>
                  <span class="caloris-value">${meal.nutrition.carbs}</span>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex justify-content-between align-items-center py-3 px-2 bg-light rounded-3">
                  <div class="d-flex justify-content-center align-items-center">
                    <div class="icon icon-four"><i class="fa-solid fa-droplet"></i></div>
                    <span>Fat</span>
                  </div>
                  <span class="caloris-value">${meal.nutrition.fat}</span>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex justify-content-between align-items-center py-3 px-2 bg-light rounded-3">
                  <div class="d-flex justify-content-center align-items-center">
                    <div class="icon icon-five"><i class="fa-solid fa-seedling"></i></div>
                    <span>Fiber</span>
                  </div>
                  <span class="caloris-value">${meal.nutrition.fiber}</span>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex justify-content-between align-items-center py-3 px-2 bg-light rounded-3">
                  <div class="d-flex justify-content-center align-items-center">
                    <div class="icon icon-six"><i class="fa-solid fa-cube"></i></div>
                    <span>Sodium</span>
                  </div>
                  <span class="caloris-value">${meal.nutrition.sodium}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Chef Tips -->
          <div class="tab-pane fade" id="chef-tab-pane" role="tabpanel">
            ${meal.tips.map(tip => `
              <div class="chef-content mt-3 p-2 d-flex align-items-baseline gap-2">
                <i class="fa-solid fa-circle-check icon-one"></i>
                <p class="p-color">${tip}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <button class="try-btn" onclick="displayMeal()">
          <i class="fa-solid fa-rotate"></i>
          Try Another Recipe
        </button>
      </div>
    </div>`;

  dataRow.innerHTML = cartona;
}

// Display a random meal when the page loads
