 
// import React, { useState } from 'react';
// import './RegularMenu.css';

// const RegularMenu = () => {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [selectedBase, setSelectedBase] = useState('');
//   const [selectedFavourites, setSelectedFavourites] = useState([]);
//   const [selectedSauce, setSelectedSauce] = useState('');
//   const [selectedExtras, setSelectedExtras] = useState([]);

//   // Menu Data
//   const menuData = {
//     friedChicken: [
//       { name: 'Fried Chicken Drumsticks', price: 5.45 },
//       { name: 'Fried Chicken Wings', price: 5.45 },
//     ],
//     chips: [
//       { name: 'Cheesy Chips', price: 3.95 },
//       { name: 'Plain Chips', price: 2.95 },
//     ],
//     cornDog: [
//       { name: 'Original Corn Dog', price: 4.50 },
//       { name: 'Half & Half Corn Dog', price: 4.50 },
//       { name: 'Potato Corn Dog', price: 4.95 },
//       { name: 'Potato & Mozzarella Corn Dog', price: 4.95 },
//     ],
//     mealDeal: [
//       { name: 'Fried Chicken Drumstick + Chips & Drink', price: 8.95 },
//     ],
//     drinks: [
//       { name: 'A Selection of Cold Drinks & Water', price: 1.70 },
//     ],
//   };

//   const baseOptions = {
//     Noodles: ['Egg Noodles', 'Whole Wheat Noodles', 'Rice Noodles', 'Udon Noodles'],
//     Grain: ['Jasmine Rice', 'Whole-Grain Rice'],
//     'Vegetable Stir-Fry': [
//       'Broccoli',
//       'Carrot',
//       'Mushroom Onion',
//       'Pak Choi',
//       'Leek and Cabbage',
//       'Soya Edamame Beans',
//     ],
//   };

//   const favouritesOptions = [
//     { name: 'Chicken Breast', price: 2.80 },
//     { name: 'Chicken Katsu', price: 2.95 },
//     { name: 'Calamari Katsu', price: 2.95 },
//     { name: 'Beef', price: 2.95 },
//     { name: 'Roast Duck', price: 2.95 },
//     { name: 'Mixed Seafood', price: 6.50 },
//     { name: 'Prawn', price: 2.95 },
//     { name: 'Broccoli', price: 0.80 },
//     { name: 'Button Mushroom', price: 0.80 },
//     { name: 'Tofu', price: 0.80 },
//     { name: 'Pak Choi', price: 0.80 },
//     { name: 'Cashew Nut', price: 1.50 },
//     { name: 'Mixed Peppers', price: 1.50 },
//     { name: 'Mixed Onions', price: 1.50 },
//     { name: 'Baby Corn', price: 1.50 },
//     { name: 'Red Onion', price: 1.50 },
//     { name: 'Pineapple', price: 1.50 },
//     { name: 'Soya Edamame Beans', price: 1.50 },
//   ];

//   const sauceOptions = [
//     'Teriyaki',
//     'Sweet & Sour',
//     'Yellow Curry & Coconut',
//     'Dark Soya & Ginger',
//     'Asian Spice Sauce',
//     'Hot Asia',
//     'Garlic & Black Pepper',
//     'Peanut Sauce',
//     'Soya Sauce',
//     'Sweet Chili',
//   ];

//   const extraToppings = [
//     'Fresh Coriander',
//     'Fried Garlic',
//     'Fried Onion',
//     'Peanut',
//     'Sesame Seeds',
//   ];

//   const handleSelectItem = (item) => {
//     if (selectedItems.find((i) => i.name === item.name)) {
//       setSelectedItems(selectedItems.filter((i) => i.name !== item.name));
//     } else {
//       setSelectedItems([...selectedItems, item]);
//     }
//   };

//   const handleAddMeal = () => {
//     if (!isMealReady) return;

//     // Calculate meal price
//     const basePrice = 5.45;
//     const favouritesPrice = selectedFavourites.reduce((acc, name) => {
//       const fav = favouritesOptions.find((f) => f.name === name);
//       return acc + (fav ? fav.price : 0);
//     }, 0);
//     const extrasPrice = selectedExtras.length * 0.6;
//     const totalPrice = basePrice + favouritesPrice + extrasPrice;

//     const meal = {
//       name: `Build Your Own Meal`,
//       details: {
//         base: selectedBase,
//         favourites: selectedFavourites,
//         sauce: selectedSauce,
//         extras: selectedExtras,
//       },
//       price: totalPrice,
//     };
//     setSelectedItems([...selectedItems, meal]);
//     // Reset selections
//     setSelectedBase('');
//     setSelectedFavourites([]);
//     setSelectedSauce('');
//     setSelectedExtras([]);
//   };

//   const handleAddToCart = () => {
//     // Implement cart functionality here
//     alert('Items added to cart:\n' + JSON.stringify(selectedItems, null, 2));
//     // Clear selected items
//     setSelectedItems([]);
//   };

//   // Helper Functions
//   const isMealReady = selectedBase && selectedFavourites.length > 0 && selectedSauce;

//   // Calculate Total Price
//   const totalPrice = selectedItems.reduce((acc, item) => acc + item.price, 0);

//   return (
//     <div className="menu-container">
//       <h1 className="menu-title">Menu</h1>

//       {/* Menu Sections */}
//       <div className="menu-row">
//         {/* Fried Chicken and Chips in the same row */}
//         <div className="menu-section">
//           <h2 className="menu-section-title">Fried Chicken</h2>
//           <div className="menu-items">
//             {menuData.friedChicken.map((item, index) => (
//               <div className="menu-card" key={index}>
//                 <h3>{item.name}</h3>
//                 <p>£{item.price.toFixed(2)}</p>
//                 <button onClick={() => handleSelectItem(item)}>
//                   {selectedItems.find((i) => i.name === item.name) ? 'Remove' : 'Select'}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="menu-section">
//           <h2 className="menu-section-title">Chips</h2>
//           <div className="menu-items">
//             {menuData.chips.map((item, index) => (
//               <div className="menu-card" key={index}>
//                 <h3>{item.name}</h3>
//                 <p>£{item.price.toFixed(2)}</p>
//                 <button onClick={() => handleSelectItem(item)}>
//                   {selectedItems.find((i) => i.name === item.name) ? 'Remove' : 'Select'}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Corn Dogs */}
//       <div className="menu-section">
//         <h2 className="menu-section-title">Corn Dog</h2>
//         <div className="menu-items">
//           {menuData.cornDog.map((item, index) => (
//             <div className="menu-card" key={index}>
//               <h3>{item.name}</h3>
//               <p>£{item.price.toFixed(2)}</p>
//               <button onClick={() => handleSelectItem(item)}>
//                 {selectedItems.find((i) => i.name === item.name) ? 'Remove' : 'Select'}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="menu-row">
//         <div className="menu-section">
//           <h2 className="menu-section-title">Meal Deal</h2>
//           <div className="menu-items">
//             {menuData.mealDeal.map((item, index) => (
//               <div className="menu-card" key={index}>
//                 <h3>{item.name}</h3>
//                 <p>£{item.price.toFixed(2)}</p>
//                 <button onClick={() => handleSelectItem(item)}>
//                   {selectedItems.find((i) => i.name === item.name) ? 'Remove' : 'Select'}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="menu-section">
//           <h2 className="menu-section-title">Drinks</h2>
//           <div className="menu-items">
//             {menuData.drinks.map((item, index) => (
//               <div className="menu-card" key={index}>
//                 <h3>{item.name}</h3>
//                 <p>£{item.price.toFixed(2)}</p>
//                 <button onClick={() => handleSelectItem(item)}>
//                   {selectedItems.find((i) => i.name === item.name) ? 'Remove' : 'Select'}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Build Your Own Meal */}
//       <div className="menu-section-2">
//         <h2 className="menu-section-title">Build Your Own Meal (1+2+3)</h2>
//         <div className="menu-build-your-own">
//           {/* Step 1 */}
//           <div className="menu-subsection">
//             <h3 className="step-title">1. Choose Your Base (with Fresh Veg & Egg) - £5.45</h3>
//             <div className="base-options">
//               {Object.entries(baseOptions).map(([group, options]) => (
//                 <div key={group} className="base-group">
//                   <p className="base-group-title">{group}</p>
//                   {options.map((option) => (
//                     <label key={option} className="base-option">
//                       <input
//                         type="radio"
//                         name="base"
//                         value={option}
//                         checked={selectedBase === option}
//                         onChange={(e) => setSelectedBase(e.target.value)}
//                       />
//                       {option}
//                     </label>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Step 2 */}
//           <div className="menu-subsection">
//             <h3 className="step-title">2. Choose Your Favourites</h3>
//             <div className="favourites-options">
//               {favouritesOptions.map((fav) => (
//                 <label key={fav.name} className="favourite-option">
//                   <input
//                     type="checkbox"
//                     value={fav.name}
//                     checked={selectedFavourites.includes(fav.name)}
//                     onChange={(e) => {
//                       if (selectedFavourites.includes(fav.name)) {
//                         setSelectedFavourites(selectedFavourites.filter((item) => item !== fav.name));
//                       } else {
//                         setSelectedFavourites([...selectedFavourites, fav.name]);
//                       }
//                     }}
//                   />
//                   {fav.name} - £{fav.price.toFixed(2)}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Step 3 */}
//           <div className="menu-subsection">
//             <h3 className="step-title">3. Choose Your Sauce (Free)</h3>
//             <div className="sauce-options">
//               {sauceOptions.map((sauce) => (
//                 <label key={sauce} className="sauce-option">
//                   <input
//                     type="radio"
//                     name="sauce"
//                     value={sauce}
//                     checked={selectedSauce === sauce}
//                     onChange={(e) => setSelectedSauce(e.target.value)}
//                   />
//                   {sauce}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Extra Toppings */}
//           <div className="menu-subsection">
//             <h3 className="step-title">Extra Toppings - £0.60 Each</h3>
//             <div className="extras-options">
//               {extraToppings.map((extra) => (
//                 <label key={extra} className="extra-option">
//                   <input
//                     type="checkbox"
//                     value={extra}
//                     checked={selectedExtras.includes(extra)}
//                     onChange={(e) => {
//                       if (selectedExtras.includes(extra)) {
//                         setSelectedExtras(selectedExtras.filter((item) => item !== extra));
//                       } else {
//                         setSelectedExtras([...selectedExtras, extra]);
//                       }
//                     }}
//                   />
//                   {extra}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Add Meal Button */}
//           <button
//             className="add-meal-button"
//             onClick={handleAddMeal}
//             disabled={!isMealReady}
//           >
//             Add Meal to Selection
//           </button>
//         </div>
//       </div>

//       {/* Selected Items List */}
//       {selectedItems.length > 0 && (
//         <div className="selected-items">
//           <h2 className="selected-items-title">Selected Items</h2>
//           <ul className="selected-items-list">
//             {selectedItems.map((item, index) => (
//               <li key={index} className="selected-item">
//                 <span className="item-name">{item.name}</span>
//                 <span className="item-price">£{item.price.toFixed(2)}</span>
//               </li>
//             ))}
//           </ul>
//           <div className="total-price">
//             <strong>Total: </strong>£{totalPrice.toFixed(2)}
//           </div>
//         </div>
//       )}

//       {/* Tagline */}
//       <p className="menu-tagline">Quick bites, big delights</p>

//       {/* Add to Cart Button */}
//       {selectedItems.length > 0 && (
//         <button className="add-to-cart-button" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       )}
//     </div>
//   );
// };

// export default RegularMenu;



//New Edition
// import React, { useState } from 'react';
// import './RegularMenu.css';
// import axios from 'axios';
// import { loadStripe } from '@stripe/stripe-js';

// // Initialize Stripe with your publishable key
// const stripePromise = loadStripe('pk_test_your_publishable_key_here'); // Replace with your Stripe Publishable Key

// const RegularMenu = () => {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [selectedBase, setSelectedBase] = useState('');
//   const [selectedFavourites, setSelectedFavourites] = useState([]);
//   const [selectedSauce, setSelectedSauce] = useState('');
//   const [selectedExtras, setSelectedExtras] = useState([]);

//   // Menu Data
//   const menuData = {
//     friedChicken: [
//       { name: 'Fried Chicken Drumsticks', price: 5.45 },
//       { name: 'Fried Chicken Wings', price: 5.45 },
//     ],
//     chips: [
//       { name: 'Cheesy Chips', price: 3.95 },
//       { name: 'Plain Chips', price: 2.95 },
//     ],
//     cornDog: [
//       { name: 'Original Corn Dog', price: 4.50 },
//       { name: 'Half & Half Corn Dog', price: 4.50 },
//       { name: 'Potato Corn Dog', price: 4.95 },
//       { name: 'Potato & Mozzarella Corn Dog', price: 4.95 },
//     ],
//     mealDeal: [
//       { name: 'Fried Chicken Drumstick + Chips & Drink', price: 8.95 },
//     ],
//     drinks: [
//       { name: 'A Selection of Cold Drinks & Water', price: 1.70 },
//     ],
//   };

//   const baseOptions = {
//     Noodles: ['Egg Noodles', 'Whole Wheat Noodles', 'Rice Noodles', 'Udon Noodles'],
//     Grain: ['Jasmine Rice', 'Whole-Grain Rice'],
//     'Vegetable Stir-Fry': [
//       'Broccoli',
//       'Carrot',
//       'Mushroom Onion',
//       'Pak Choi',
//       'Leek and Cabbage',
//       'Soya Edamame Beans',
//     ],
//   };

//   const favouritesOptions = [
//     { name: 'Chicken Breast', price: 2.80 },
//     { name: 'Chicken Katsu', price: 2.95 },
//     { name: 'Calamari Katsu', price: 2.95 },
//     { name: 'Beef', price: 2.95 },
//     { name: 'Roast Duck', price: 2.95 },
//     { name: 'Mixed Seafood', price: 6.50 },
//     { name: 'Prawn', price: 2.95 },
//     { name: 'Broccoli', price: 0.80 },
//     { name: 'Button Mushroom', price: 0.80 },
//     { name: 'Tofu', price: 0.80 },
//     { name: 'Pak Choi', price: 0.80 },
//     { name: 'Cashew Nut', price: 1.50 },
//     { name: 'Mixed Peppers', price: 1.50 },
//     { name: 'Mixed Onions', price: 1.50 },
//     { name: 'Baby Corn', price: 1.50 },
//     { name: 'Red Onion', price: 1.50 },
//     { name: 'Pineapple', price: 1.50 },
//     { name: 'Soya Edamame Beans', price: 1.50 },
//   ];

//   const sauceOptions = [
//     'Teriyaki',
//     'Sweet & Sour',
//     'Yellow Curry & Coconut',
//     'Dark Soya & Ginger',
//     'Asian Spice Sauce',
//     'Hot Asia',
//     'Garlic & Black Pepper',
//     'Peanut Sauce',
//     'Soya Sauce',
//     'Sweet Chili',
//   ];

//   const extraToppings = [
//     'Fresh Coriander',
//     'Fried Garlic',
//     'Fried Onion',
//     'Peanut',
//     'Sesame Seeds',
//   ];

//   const handleSelectItem = (item) => {
//     if (selectedItems.find((i) => i.name === item.name)) {
//       setSelectedItems(selectedItems.filter((i) => i.name !== item.name));
//     } else {
//       setSelectedItems([...selectedItems, item]);
//     }
//   };

//   const handleAddMeal = () => {
//     if (!isMealReady) return;

//     // Calculate meal price
//     const basePrice = 5.45;
//     const favouritesPrice = selectedFavourites.reduce((acc, name) => {
//       const fav = favouritesOptions.find((f) => f.name === name);
//       return acc + (fav ? fav.price : 0);
//     }, 0);
//     const extrasPrice = selectedExtras.length * 0.6;
//     const totalPrice = basePrice + favouritesPrice + extrasPrice;

//     const meal = {
//       name: `Build Your Own Meal`,
//       details: {
//         base: selectedBase,
//         favourites: selectedFavourites,
//         sauce: selectedSauce,
//         extras: selectedExtras,
//       },
//       price: totalPrice,
//     };
//     setSelectedItems([...selectedItems, meal]);
//     // Reset selections
//     setSelectedBase('');
//     setSelectedFavourites([]);
//     setSelectedSauce('');
//     setSelectedExtras([]);
//   };

//   // Helper Functions
//   const isMealReady = selectedBase && selectedFavourites.length > 0 && selectedSauce;

//   // Calculate Total Price
//   const totalPrice = selectedItems.reduce((acc, item) => acc + item.price, 0);

//   const createCheckoutSession = async (items) => {
//     try {
//       const response = await axios.post('http://localhost:8000/create-checkout-session', { items });
//       const { url } = response.data;

//       // Redirect to Stripe Checkout
//       window.location.href = url;

//     } catch (error) {
//       console.error('Error creating checkout session:', error);
//       alert('There was an issue processing your payment. Please try again.');
//     }
//   };

//   const handleAddToCart = () => {
//     // Prepare items for Stripe
//     const cartItems = selectedItems.map(item => {
//       if (item.details) {
//         // It's a custom meal
//         return {
//           name: item.name,
//           price: item.price,
//           quantity: 1,
//         };
//       }
//       return {
//         name: item.name,
//         price: item.price,
//         quantity: 1,
//       };
//     });

//     // Proceed to checkout
//     createCheckoutSession(cartItems);
//   };

//   return (
//     <div className="menu-container">
//       <h1 className="menu-title">Menu</h1>

//       {/* Menu Sections */}
//       <div className="menu-row">
//         {/* Fried Chicken and Chips in the same row */}
//         <div className="menu-section">
//           <h2 className="menu-section-title">Fried Chicken</h2>
//           <div className="menu-items">
//             {menuData.friedChicken.map((item, index) => (
//               <div className="menu-card" key={index}>
//                 <h3>{item.name}</h3>
//                 <p>£{item.price.toFixed(2)}</p>
//                 <button onClick={() => handleSelectItem(item)}>
//                   {selectedItems.find((i) => i.name === item.name) ? 'Remove' : 'Select'}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="menu-section">
//           <h2 className="menu-section-title">Chips</h2>
//           <div className="menu-items">
//             {menuData.chips.map((item, index) => (
//               <div className="menu-card" key={index}>
//                 <h3>{item.name}</h3>
//                 <p>£{item.price.toFixed(2)}</p>
//                 <button onClick={() => handleSelectItem(item)}>
//                   {selectedItems.find((i) => i.name === item.name) ? 'Remove' : 'Select'}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Corn Dogs */}
//       <div className="menu-section">
//         <h2 className="menu-section-title">Corn Dog</h2>
//         <div className="menu-items">
//           {menuData.cornDog.map((item, index) => (
//             <div className="menu-card" key={index}>
//               <h3>{item.name}</h3>
//               <p>£{item.price.toFixed(2)}</p>
//               <button onClick={() => handleSelectItem(item)}>
//                 {selectedItems.find((i) => i.name === item.name) ? 'Remove' : 'Select'}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="menu-row">
//         <div className="menu-section">
//           <h2 className="menu-section-title">Meal Deal</h2>
//           <div className="menu-items">
//             {menuData.mealDeal.map((item, index) => (
//               <div className="menu-card" key={index}>
//                 <h3>{item.name}</h3>
//                 <p>£{item.price.toFixed(2)}</p>
//                 <button onClick={() => handleSelectItem(item)}>
//                   {selectedItems.find((i) => i.name === item.name) ? 'Remove' : 'Select'}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="menu-section">
//           <h2 className="menu-section-title">Drinks</h2>
//           <div className="menu-items">
//             {menuData.drinks.map((item, index) => (
//               <div className="menu-card" key={index}>
//                 <h3>{item.name}</h3>
//                 <p>£{item.price.toFixed(2)}</p>
//                 <button onClick={() => handleSelectItem(item)}>
//                   {selectedItems.find((i) => i.name === item.name) ? 'Remove' : 'Select'}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Build Your Own Meal */}
//       <div className="menu-section-2">
//         <h2 className="menu-section-title">Build Your Own Meal (1+2+3)</h2>
//         <div className="menu-build-your-own">
//           {/* Step 1 */}
//           <div className="menu-subsection">
//             <h3 className="step-title">1. Choose Your Base (with Fresh Veg & Egg) - £5.45</h3>
//             <div className="base-options">
//               {Object.entries(baseOptions).map(([group, options]) => (
//                 <div key={group} className="base-group">
//                   <p className="base-group-title">{group}</p>
//                   {options.map((option) => (
//                     <label key={option} className="base-option">
//                       <input
//                         type="radio"
//                         name="base"
//                         value={option}
//                         checked={selectedBase === option}
//                         onChange={(e) => setSelectedBase(e.target.value)}
//                       />
//                       {option}
//                     </label>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Step 2 */}
//           <div className="menu-subsection">
//             <h3 className="step-title">2. Choose Your Favourites</h3>
//             <div className="favourites-options">
//               {favouritesOptions.map((fav) => (
//                 <label key={fav.name} className="favourite-option">
//                   <input
//                     type="checkbox"
//                     value={fav.name}
//                     checked={selectedFavourites.includes(fav.name)}
//                     onChange={(e) => {
//                       if (selectedFavourites.includes(fav.name)) {
//                         setSelectedFavourites(selectedFavourites.filter((item) => item !== fav.name));
//                       } else {
//                         setSelectedFavourites([...selectedFavourites, fav.name]);
//                       }
//                     }}
//                   />
//                   {fav.name} - £{fav.price.toFixed(2)}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Step 3 */}
//           <div className="menu-subsection">
//             <h3 className="step-title">3. Choose Your Sauce (Free)</h3>
//             <div className="sauce-options">
//               {sauceOptions.map((sauce) => (
//                 <label key={sauce} className="sauce-option">
//                   <input
//                     type="radio"
//                     name="sauce"
//                     value={sauce}
//                     checked={selectedSauce === sauce}
//                     onChange={(e) => setSelectedSauce(e.target.value)}
//                   />
//                   {sauce}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Extra Toppings */}
//           <div className="menu-subsection">
//             <h3 className="step-title">Extra Toppings - £0.60 Each</h3>
//             <div className="extras-options">
//               {extraToppings.map((extra) => (
//                 <label key={extra} className="extra-option">
//                   <input
//                     type="checkbox"
//                     value={extra}
//                     checked={selectedExtras.includes(extra)}
//                     onChange={(e) => {
//                       if (selectedExtras.includes(extra)) {
//                         setSelectedExtras(selectedExtras.filter((item) => item !== extra));
//                       } else {
//                         setSelectedExtras([...selectedExtras, extra]);
//                       }
//                     }}
//                   />
//                   {extra}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Add Meal Button */}
//           <button
//             className="add-meal-button"
//             onClick={handleAddMeal}
//             disabled={!isMealReady}
//           >
//             Add Meal to Selection
//           </button>
//         </div>
//       </div>

//       {/* Selected Items List */}
//       {selectedItems.length > 0 && (
//         <div className="selected-items">
//           <h2 className="selected-items-title">Selected Items</h2>
//           <ul className="selected-items-list">
//             {selectedItems.map((item, index) => (
//               <li key={index} className="selected-item">
//                 <span className="item-name">{item.name}</span>
//                 <span className="item-price">£{item.price.toFixed(2)}</span>
//               </li>
//             ))}
//           </ul>
//           <div className="total-price">
//             <strong>Total: </strong>£{totalPrice.toFixed(2)}
//           </div>
//         </div>
//       )}

//       {/* Tagline */}
//       <p className="menu-tagline">Quick bites, big delights</p>

//       {/* Add to Cart Button */}
//       {selectedItems.length > 0 && (
//         <a href="https://buy.stripe.com/test_3csbJA7FV1uecgg9AB" target="_blank" rel="noopener noreferrer" className="add-to-cart-button" style={{textDecoration: 'none', textAlign: 'center'}}>
//           Checkout Now
//         </a>
//       )}
//     </div>
//   );
// };

// export default RegularMenu;


//chatbot version
import React, { useState } from 'react';
import './RegularMenu.css';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('pk_test_your_publishable_key_here'); // Replace with your Stripe Publishable Key

const RegularMenu = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedBase, setSelectedBase] = useState('');
  const [selectedFavourites, setSelectedFavourites] = useState([]);
  const [selectedSauce, setSelectedSauce] = useState('');
  const [selectedExtras, setSelectedExtras] = useState([]);

  // New chatbot-related states
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [showMoreItems, setShowMoreItems] = useState(true);
  
  // Build Your Own Meal chat states
  const [byoStep, setByoStep] = useState(0); // 0=not in BYO flow, 1=Base,2=Favourites,3=Sauce,4=Extras
  const [tempBase, setTempBase] = useState('');
  const [tempFavourites, setTempFavourites] = useState([]);
  const [tempSauce, setTempSauce] = useState('');
  const [tempExtras, setTempExtras] = useState([]);

  // Menu Data
  const menuData = {
    friedChicken: [
      { name: 'Fried Chicken Drumsticks', price: 5.45 },
      { name: 'Fried Chicken Wings', price: 5.45 },
    ],
    chips: [
      { name: 'Cheesy Chips', price: 3.95 },
      { name: 'Plain Chips', price: 2.95 },
    ],
    cornDog: [
      { name: 'Original Corn Dog', price: 4.50 },
      { name: 'Half & Half Corn Dog', price: 4.50 },
      { name: 'Potato Corn Dog', price: 4.95 },
      { name: 'Potato & Mozzarella Corn Dog', price: 4.95 },
    ],
    mealDeal: [
      { name: 'Fried Chicken Drumstick + Chips & Drink', price: 8.95 },
    ],
    drinks: [
      { name: 'A Selection of Cold Drinks & Water', price: 1.70 },
    ],
  };

  const baseOptions = {
    Noodles: ['Egg Noodles', 'Whole Wheat Noodles', 'Rice Noodles', 'Udon Noodles'],
    Grain: ['Jasmine Rice', 'Whole-Grain Rice'],
    'Vegetable Stir-Fry': [
      'Broccoli',
      'Carrot',
      'Mushroom Onion',
      'Pak Choi',
      'Leek and Cabbage',
      'Soya Edamame Beans',
    ],
  };

  const favouritesOptions = [
    { name: 'Chicken Breast', price: 2.80 },
    { name: 'Chicken Katsu', price: 2.95 },
    { name: 'Calamari Katsu', price: 2.95 },
    { name: 'Beef', price: 2.95 },
    { name: 'Roast Duck', price: 2.95 },
    { name: 'Mixed Seafood', price: 6.50 },
    { name: 'Prawn', price: 2.95 },
    { name: 'Broccoli', price: 0.80 },
    { name: 'Button Mushroom', price: 0.80 },
    { name: 'Tofu', price: 0.80 },
    { name: 'Pak Choi', price: 0.80 },
    { name: 'Cashew Nut', price: 1.50 },
    { name: 'Mixed Peppers', price: 1.50 },
    { name: 'Mixed Onions', price: 1.50 },
    { name: 'Baby Corn', price: 1.50 },
    { name: 'Red Onion', price: 1.50 },
    { name: 'Pineapple', price: 1.50 },
    { name: 'Soya Edamame Beans', price: 1.50 },
  ];

  const sauceOptions = [
    'Teriyaki',
    'Sweet & Sour',
    'Yellow Curry & Coconut',
    'Dark Soya & Ginger',
    'Asian Spice Sauce',
    'Hot Asia',
    'Garlic & Black Pepper',
    'Peanut Sauce',
    'Soya Sauce',
    'Sweet Chili',
  ];

  const extraToppings = [
    'Fresh Coriander',
    'Fried Garlic',
    'Fried Onion',
    'Peanut',
    'Sesame Seeds',
  ];

  const handleSelectItem = (item) => {
    if (selectedItems.find((i) => i.name === item.name)) {
      setSelectedItems(selectedItems.filter((i) => i.name !== item.name));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const isMealReady = selectedBase && selectedFavourites.length > 0 && selectedSauce;

  const handleAddMeal = () => {
    if (!isMealReady) return;

    // Calculate meal price
    const basePrice = 5.45;
    const favouritesPrice = selectedFavourites.reduce((acc, name) => {
      const fav = favouritesOptions.find((f) => f.name === name);
      return acc + (fav ? fav.price : 0);
    }, 0);
    const extrasPrice = selectedExtras.length * 0.6;
    const totalPrice = basePrice + favouritesPrice + extrasPrice;

    const meal = {
      name: `Build Your Own Meal`,
      details: {
        base: selectedBase,
        favourites: selectedFavourites,
        sauce: selectedSauce,
        extras: selectedExtras,
      },
      price: totalPrice,
    };
    setSelectedItems([...selectedItems, meal]);
    // Reset selections
    setSelectedBase('');
    setSelectedFavourites([]);
    setSelectedSauce('');
    setSelectedExtras([]);
  };

  const buildChatMealAndAdd = () => {
    // Similar to handleAddMeal but using temp states
    const basePrice = 5.45;
    const favouritesPrice = tempFavourites.reduce((acc, name) => {
      const fav = favouritesOptions.find((f) => f.name === name);
      return acc + (fav ? fav.price : 0);
    }, 0);
    const extrasPrice = tempExtras.length * 0.6;
    const totalPrice = basePrice + favouritesPrice + extrasPrice;

    const meal = {
      name: 'Build Your Own Meal',
      details: {
        base: tempBase,
        favourites: tempFavourites,
        sauce: tempSauce,
        extras: tempExtras,
      },
      price: totalPrice,
    };
    setSelectedItems([...selectedItems, meal]);

    // Reset temp states
    setTempBase('');
    setTempFavourites([]);
    setTempSauce('');
    setTempExtras([]);
    setByoStep(0);

    // Let user know meal is added
    const addedMessage = {
      text: `Your "Build Your Own Meal" has been added to the order!`,
      buttons: [{ label: "Confirm Order", value: "confirm" }, { label: "Back to Categories", value: "back" }]
    };
    setChatMessages([...chatMessages, addedMessage]);
  };

  // Calculate Total Price
  const totalPrice = selectedItems.reduce((acc, item) => acc + item.price, 0);

  const createCheckoutSession = async (items) => {
    try {
      const response = await axios.post('http://localhost:8000/create-checkout-session', { items });
      const { url } = response.data;
      window.location.href = url;
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('There was an issue processing your payment. Please try again.');
    }
  };

  const handleAddToCart = () => {
    // Prepare items for Stripe
    const cartItems = selectedItems.map(item => ({
      name: item.name,
      price: item.price,
      quantity: 1,
    }));
    createCheckoutSession(cartItems);
  };

  // Chatbot Related
  const categoryOrder = [
    { key: 'friedChicken', label: 'Fried Chicken' },
    { key: 'chips', label: 'Chips' },
    { key: 'cornDog', label: 'Corn Dog' },
    { key: 'mealDeal', label: 'Meal Deal' },
    { key: 'drinks', label: 'Drinks' },
    { key: 'buildYourOwn', label: 'Build Your Own Meal (1+2+3)' }
  ];

  const openChat = () => {
    setChatOpen(true);
    startConversation();
  };

  const closeChat = () => {
    setChatOpen(false);
  };

  const startConversation = () => {
    const initialMessage = {
      text: "Hi! What would you like to order from today?",
      buttons: categoryOrder.map(cat => ({ label: cat.label, value: cat.key })).concat([
        { label: "Confirm Order", value: "confirm" }
      ])
    };
    setChatMessages([initialMessage]);
    setShowMoreItems(true);
    setByoStep(0);
  };

  const handleChatButtonClick = (value) => {
    if (value === "confirm") {
      // User confirmed order
      const confirmMessage = {
        text: "Order confirmed! No more items will be shown.",
        buttons: []
      };
      setChatMessages([...chatMessages, confirmMessage]);
      setShowMoreItems(false);
      return;
    }

    if (!showMoreItems) {
      // If confirm was already clicked, do not show more items.
      const noMoreItemsMessage = {
        text: "No more items will be shown.",
        buttons: []
      };
      setChatMessages([...chatMessages, noMoreItemsMessage]);
      return;
    }

    // If we are in the Build Your Own flow:
    if (byoStep > 0) {
      // Handle steps of BYO flow
      handleBYOFlow(value);
      return;
    }

    // Not in BYO flow yet, or user picked a category
    const category = categoryOrder.find(cat => cat.key === value);
    if (category) {
      if (category.key === 'buildYourOwn') {
        // Start BYO flow
        setByoStep(1);
        showBYOStep(1);
      } else {
        // It's a normal category
        const items = menuData[value];
        const itemButtons = items.map(item => ({ label: `${item.name} (£${item.price.toFixed(2)})`, value: item.name }));
        itemButtons.push({ label: "Back to Categories", value: "back" });
        itemButtons.push({ label: "Confirm Order", value: "confirm" });
        const newMessage = {
          text: `You chose ${category.label}. Please select an item:`,
          buttons: itemButtons
        };
        setChatMessages([...chatMessages, newMessage]);
      }
    } else if (value === 'back') {
      // Go back to categories
      const backMessage = {
        text: "What would you like to order from?",
        buttons: categoryOrder.map(cat => ({ label: cat.label, value: cat.key })).concat([
          { label: "Confirm Order", value: "confirm" }
        ])
      };
      setChatMessages([...chatMessages, backMessage]);
    } else {
      // It's an item selection from a standard category
      const lastMessage = chatMessages[chatMessages.length - 1];
      const categoryKey = categoryOrder.find(cat => lastMessage.text.includes(cat.label))?.key;

      if (categoryKey && menuData[categoryKey]) {
        // Find the item
        const item = menuData[categoryKey].find(i => i.name === value);
        if (item) {
          handleSelectItem(item);
          const addedMessage = {
            text: `Added ${item.name} to your order.`,
            buttons: [{ label: "Confirm Order", value: "confirm" }, { label: "Back to Categories", value: "back" }]
          };
          setChatMessages([...chatMessages, addedMessage]);
        } else {
          const errorMessage = {
            text: "Item not found. Please choose again.",
            buttons: [{ label: "Back to Categories", value: "back" }, { label: "Confirm Order", value: "confirm" }]
          };
          setChatMessages([...chatMessages, errorMessage]);
        }
      }
    }
  };

  // Handle Build Your Own meal flow in chat
  const showBYOStep = (step) => {
    // step: 1=Base,2=Favourites,3=Sauce,4=Extras
    let message;
    if (step === 1) {
      // Show base options
      const baseButtons = [];
      Object.entries(baseOptions).forEach(([group, opts]) => {
        opts.forEach(o => baseButtons.push({ label: o, value: o }));
      });
      message = {
        text: "Step 1: Choose Your Base (£5.45)",
        buttons: baseButtons.concat({ label: "Confirm Order", value: "confirm" })
      };
    } else if (step === 2) {
      // Show favourites options (multiple select scenario)
      // We will show a message with favourites and also a "Done" button
      const favButtons = favouritesOptions.map(f => ({ label: f.name + ` (£${f.price.toFixed(2)})`, value: f.name }));
      favButtons.push({ label: "Done", value: "done-fav" });
      favButtons.push({ label: "Confirm Order", value: "confirm" });
      message = {
        text: "Step 2: Choose Your Favourites (Select as many as you like, then press 'Done')",
        buttons: favButtons
      };
    } else if (step === 3) {
      const sauceButtons = sauceOptions.map(s => ({ label: s, value: s }));
      sauceButtons.push({ label: "Confirm Order", value: "confirm" });
      message = {
        text: "Step 3: Choose Your Sauce (Free)",
        buttons: sauceButtons
      };
    } else if (step === 4) {
      const extraButtons = extraToppings.map(e => ({ label: e + " (£0.60)", value: e }));
      extraButtons.push({ label: "Add Meal", value: "add-meal" });
      extraButtons.push({ label: "Confirm Order", value: "confirm" });
      message = {
        text: "Step 4: Choose Your Extras (£0.60 each). Select as many as you like, then press 'Add Meal'",
        buttons: extraButtons
      };
    }
    setChatMessages([...chatMessages, message]);
  };

  const handleBYOFlow = (value) => {
    if (value === "confirm") {
      const confirmMessage = {
        text: "Order confirmed! No more items will be shown.",
        buttons: []
      };
      setChatMessages([...chatMessages, confirmMessage]);
      setShowMoreItems(false);
      return;
    }

    if (byoStep === 1) {
      // Choosing base (single selection)
      // Once user selects base, move to step 2
      setTempBase(value);
      setByoStep(2);
      const chosenBaseMsg = {
        text: `Base chosen: ${value}`,
        buttons: []
      };
      setChatMessages([...chatMessages, chosenBaseMsg]);
      showBYOStep(2);
    } else if (byoStep === 2) {
      // Choosing favourites (multiple selection)
      if (value === 'done-fav') {
        // Move to step 3
        setByoStep(3);
        const chosenFavMsg = {
          text: `Favourites chosen: ${tempFavourites.join(", ") || "None"}`,
          buttons: []
        };
        setChatMessages([...chatMessages, chosenFavMsg]);
        showBYOStep(3);
      } else {
        // Add/remove favourite
        if (tempFavourites.includes(value)) {
          // remove
          setTempFavourites(tempFavourites.filter(f => f !== value));
        } else {
          // add
          setTempFavourites([...tempFavourites, value]);
        }
        // No new message until done is pressed, so just update state.
      }
    } else if (byoStep === 3) {
      // Choosing sauce (single selection)
      setTempSauce(value);
      setByoStep(4);
      const chosenSauceMsg = {
        text: `Sauce chosen: ${value}`,
        buttons: []
      };
      setChatMessages([...chatMessages, chosenSauceMsg]);
      showBYOStep(4);
    } else if (byoStep === 4) {
      if (value === 'add-meal') {
        // Add meal to order
        buildChatMealAndAdd();
      } else {
        // Selecting extras (multiple)
        if (tempExtras.includes(value)) {
          setTempExtras(tempExtras.filter(e => e !== value));
        } else {
          setTempExtras([...tempExtras, value]);
        }
      }
    }
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h1 className="menu-title">Menu</h1>
        {/* Chatbot Icon */}
        <div className="chatbot-icon" onClick={chatOpen ? closeChat : openChat}>
          💬
        </div>
      </div>

      {/* Chatbot Window */}
      {chatOpen && (
        <div className="chatbot-window">
          <div className="chatbot-messages">
            {chatMessages.map((msg, index) => (
              <div className="chatbot-message" key={index}>
                <p>{msg.text}</p>
                <div className="chatbot-buttons">
                  {msg.buttons && msg.buttons.map((btn, i) => (
                    <button key={i} onClick={() => handleChatButtonClick(btn.value)}>
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="chatbot-footer">
            <button className="chatbot-close" onClick={closeChat}>Close Chat</button>
          </div>
        </div>
      )}

      {/* Existing Menu Layout */}
      <div className="menu-row">
        {/* Fried Chicken and Chips in the same row */}
        <div className="menu-section">
          <h2 className="menu-section-title">Fried Chicken</h2>
          <div className="menu-items">
            {menuData.friedChicken.map((item, index) => (
              <div className="menu-card" key={index}>
                <h3>{item.name}</h3>
                <p>£{item.price.toFixed(2)}</p>
                <button onClick={() => handleSelectItem(item)}>
                  {selectedItems.find((i) => i.name === item.name) ? 'Remove' : 'Select'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-section">
          <h2 className="menu-section-title">Chips</h2>
          <div className="menu-items">
            {menuData.chips.map((item, index) => (
              <div className="menu-card" key={index}>
                <h3>{item.name}</h3>
                <p>£{item.price.toFixed(2)}</p>
                <button onClick={() => handleSelectItem(item)}>
                  {selectedItems.find((i) => i.name === item.name) ? 'Remove' : 'Select'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corn Dogs */}
      <div className="menu-section">
        <h2 className="menu-section-title">Corn Dog</h2>
        <div className="menu-items">
          {menuData.cornDog.map((item, index) => (
            <div className="menu-card" key={index}>
              <h3>{item.name}</h3>
              <p>£{item.price.toFixed(2)}</p>
              <button onClick={() => handleSelectItem(item)}>
                {selectedItems.find((i) => i.name === item.name) ? 'Remove' : 'Select'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="menu-row">
        <div className="menu-section">
          <h2 className="menu-section-title">Meal Deal</h2>
          <div className="menu-items">
            {menuData.mealDeal.map((item, index) => (
              <div className="menu-card" key={index}>
                <h3>{item.name}</h3>
                <p>£{item.price.toFixed(2)}</p>
                <button onClick={() => handleSelectItem(item)}>
                  {selectedItems.find((i) => i.name === item.name) ? 'Remove' : 'Select'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="menu-section">
          <h2 className="menu-section-title">Drinks</h2>
          <div className="menu-items">
            {menuData.drinks.map((item, index) => (
              <div className="menu-card" key={index}>
                <h3>{item.name}</h3>
                <p>£{item.price.toFixed(2)}</p>
                <button onClick={() => handleSelectItem(item)}>
                  {selectedItems.find((i) => i.name === item.name) ? 'Remove' : 'Select'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Build Your Own Meal */}
      <div className="menu-section-2">
        <h2 className="menu-section-title">Build Your Own Meal (1+2+3)</h2>
        <div className="menu-build-your-own">
          {/* Step 1 */}
          <div className="menu-subsection">
            <h3 className="step-title">1. Choose Your Base (with Fresh Veg & Egg) - £5.45</h3>
            <div className="base-options">
              {Object.entries(baseOptions).map(([group, options]) => (
                <div key={group} className="base-group">
                  <p className="base-group-title">{group}</p>
                  {options.map((option) => (
                    <label key={option} className="base-option">
                      <input
                        type="radio"
                        name="base"
                        value={option}
                        checked={selectedBase === option}
                        onChange={(e) => setSelectedBase(e.target.value)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className="menu-subsection">
            <h3 className="step-title">2. Choose Your Favourites</h3>
            <div className="favourites-options">
              {favouritesOptions.map((fav) => (
                <label key={fav.name} className="favourite-option">
                  <input
                    type="checkbox"
                    value={fav.name}
                    checked={selectedFavourites.includes(fav.name)}
                    onChange={(e) => {
                      if (selectedFavourites.includes(fav.name)) {
                        setSelectedFavourites(selectedFavourites.filter((item) => item !== fav.name));
                      } else {
                        setSelectedFavourites([...selectedFavourites, fav.name]);
                      }
                    }}
                  />
                  {fav.name} - £{fav.price.toFixed(2)}
                </label>
              ))}
            </div>
          </div>

          {/* Step 3 */}
          <div className="menu-subsection">
            <h3 className="step-title">3. Choose Your Sauce (Free)</h3>
            <div className="sauce-options">
              {sauceOptions.map((sauce) => (
                <label key={sauce} className="sauce-option">
                  <input
                    type="radio"
                    name="sauce"
                    value={sauce}
                    checked={selectedSauce === sauce}
                    onChange={(e) => setSelectedSauce(e.target.value)}
                  />
                  {sauce}
                </label>
              ))}
            </div>
          </div>

          {/* Extra Toppings */}
          <div className="menu-subsection">
            <h3 className="step-title">Extra Toppings - £0.60 Each</h3>
            <div className="extras-options">
              {extraToppings.map((extra) => (
                <label key={extra} className="extra-option">
                  <input
                    type="checkbox"
                    value={extra}
                    checked={selectedExtras.includes(extra)}
                    onChange={(e) => {
                      if (selectedExtras.includes(extra)) {
                        setSelectedExtras(selectedExtras.filter((item) => item !== extra));
                      } else {
                        setSelectedExtras([...selectedExtras, extra]);
                      }
                    }}
                  />
                  {extra}
                </label>
              ))}
            </div>
          </div>

          {/* Add Meal Button */}
          <button
            className="add-meal-button"
            onClick={handleAddMeal}
            disabled={!isMealReady}
          >
            Add Meal to Selection
          </button>
        </div>
      </div>

      {/* Selected Items List */}
      {selectedItems.length > 0 && (
        <div className="selected-items">
          <h2 className="selected-items-title">Selected Items</h2>
          <ul className="selected-items-list">
            {selectedItems.map((item, index) => (
              <li key={index} className="selected-item">
                <span className="item-name">{item.name}</span>
                <span className="item-price">£{item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="total-price">
            <strong>Total: </strong>£{totalPrice.toFixed(2)}
          </div>
        </div>
      )}

      {/* Tagline */}
      <p className="menu-tagline">Quick bites, big delights</p>

      {/* Add to Cart Button */}
      {selectedItems.length > 0 && (
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); handleAddToCart(); }}
          className="add-to-cart-button"
          style={{ textDecoration: 'none', textAlign: 'center' }}
        >
          Checkout Now
        </a>
      )}
    </div>
  );
};

export default RegularMenu;
