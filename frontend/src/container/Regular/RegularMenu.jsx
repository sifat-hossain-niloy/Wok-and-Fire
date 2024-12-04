 
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

  // Helper Functions
  const isMealReady = selectedBase && selectedFavourites.length > 0 && selectedSauce;

  // Calculate Total Price
  const totalPrice = selectedItems.reduce((acc, item) => acc + item.price, 0);

  const createCheckoutSession = async (items) => {
    try {
      const response = await axios.post('http://localhost:8000/create-checkout-session', { items });
      const { url } = response.data;

      // Redirect to Stripe Checkout
      window.location.href = url;

    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('There was an issue processing your payment. Please try again.');
    }
  };

  const handleAddToCart = () => {
    // Prepare items for Stripe
    const cartItems = selectedItems.map(item => {
      if (item.details) {
        // It's a custom meal
        return {
          name: item.name,
          price: item.price,
          quantity: 1,
        };
      }
      return {
        name: item.name,
        price: item.price,
        quantity: 1,
      };
    });

    // Proceed to checkout
    createCheckoutSession(cartItems);
  };

  return (
    <div className="menu-container">
      <h1 className="menu-title">Menu</h1>

      {/* Menu Sections */}
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
        <a href="https://buy.stripe.com/test_3csbJA7FV1uecgg9AB" target="_blank" rel="noopener noreferrer" className="add-to-cart-button" style={{textDecoration: 'none', textAlign: 'center'}}>
          Checkout Now
        </a>
      )}
    </div>
  );
};

export default RegularMenu;
