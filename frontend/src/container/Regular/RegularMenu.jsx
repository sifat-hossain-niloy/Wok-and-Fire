// import React from "react";

// import "./RegularMenu.css";

// const RegularMenu = () => {
//     return (
//         <div>
//             <p> Sex Cholbe Shararat</p>
//         </div>
//     );
// };

// export default RegularMenu;


// import React from "react";
// import { Card, CardContent, Typography, CardMedia } from "@mui/material";
// import "./RegularMenu.css";

// const menuItems = [
//   { name: "Item 1", description: "Description of item 1" },
//   { name: "Item 2", description: "Description of item 2" },
//   { name: "Item 3", description: "Description of item 3" },
//   { name: "Item 4", description: "Description of item 4" },
//   { name: "Item 5", description: "Description of item 5" },
//   { name: "Item 6", description: "Description of item 6" },
//   { name: "Item 7", description: "Description of item 7" },
//   { name: "Item 8", description: "Description of item 8" },
//   { name: "Item 9", description: "Description of item 9" },
//   { name: "Item 10", description: "Description of item 10" },
//   { name: "Item 11", description: "Description of item 11" },
//   { name: "Item 12", description: "Description of item 12" },
// ];
// const imageUrl = "https://i.ytimg.com/vi/3CVDrAkhDmI/maxresdefault.jpg"
// const RegularMenu = () => {
//   return (
//     <div className="menu-grid">
//       {menuItems.map((item, index) => (
//         <Card key={index} className="menu-card">
//         <CardMedia 
//             component="img"
//             height="140"
//             image={item.imageUrl}
//             alt={item.name}
//           />
//           <CardContent>
//             <Typography variant="h6">{item.name}</Typography>
//             <Typography variant="body2">{item.description}</Typography>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// };

// export default RegularMenu;

// RegularMenu.jsx
// RegularMenu.jsx
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

//   // Handlers
//   const handleSelectItem = (item) => {
//     if (selectedItems.find((i) => i.name === item.name)) {
//       setSelectedItems(selectedItems.filter((i) => i.name !== item.name));
//     } else {
//       setSelectedItems([...selectedItems, item]);
//     }
//   };

//   const handleAddMeal = () => {
//     const meal = {
//       name: `Build Your Own Meal`,
//       details: {
//         base: selectedBase,
//         favourites: selectedFavourites,
//         sauce: selectedSauce,
//         extras: selectedExtras,
//       },
//       price:
//         5.45 +
//         selectedFavourites.reduce((acc, curr) => acc + curr.price, 0) +
//         selectedExtras.length * 0.6,
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
//   const isMealReady = selectedBase && selectedFavourites.length && selectedSauce;

//   return (
//     <div className="menu-container">
//       <h1 className="menu-title">Menu</h1>

//       {/* Menu Sections */}
//       {Object.entries(menuData).map(([sectionKey, items]) => (
//         <div className="menu-section" key={sectionKey}>
//           <h2 className="menu-section-title">
//             {sectionKey === 'mealDeal' ? 'Wok and Fire Meal Deal' : sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}
//           </h2>
//           <div className="menu-items">
//             {items.map((item, index) => {
//               // For all items except the last one when total is odd
//               if (index < items.length - (items.length % 2)) {
//                 // Only render on even indices to create pairs
//                 if (index % 2 === 0) {
//                   return (
//                     <div key={index} style={{ display: 'flex', width: '100%', gap: '20px', marginBottom: '20px' }}>
//                       <div className="menu-card" style={{ flex: 1 }}>
//                         <h3>{items[index].name}</h3>
//                         <p>£{items[index].price.toFixed(2)}</p>
//                         <button onClick={() => handleSelectItem(items[index])}>
//                           {selectedItems.find((i) => i.name === items[index].name) ? 'Remove' : 'Select'}
//                         </button>
//                       </div>
//                       <div className="menu-card" style={{ flex: 1 }}>
//                         <h3>{items[index + 1].name}</h3>
//                         <p>£{items[index + 1].price.toFixed(2)}</p>
//                         <button onClick={() => handleSelectItem(items[index + 1])}>
//                           {selectedItems.find((i) => i.name === items[index + 1].name) ? 'Remove' : 'Select'}
//                         </button>
//                       </div>
//                     </div>
//                   );
//                 }
//                 return null;
//               } else if (index === items.length - 1 && items.length % 2 === 1) {
//                 // Render the last item centered when total is odd
//                 return (
//                   <div key={index} style={{ width: '50%', margin: '0 auto' }}>
//                     <div className="menu-card">
//                       <h3>{item.name}</h3>
//                       <p>£{item.price.toFixed(2)}</p>
//                       <button onClick={() => handleSelectItem(item)}>
//                         {selectedItems.find((i) => i.name === item.name) ? 'Remove' : 'Select'}
//                       </button>
//                     </div>
//                   </div>
//                 );
//               }
//               return null;
//             })}
//           </div>
//         </div>
//       ))}

//       {/* Build Your Own Meal Section */}
//       <div className="menu-section">
//         <h2 className="menu-section-title">Build Your Own Meal (1+2+3)</h2>
//         <div className="menu-build-your-own">
//           {/* Step 1 */}
//           <h3>1. Choose Your Base (with Fresh Veg & Egg) - £5.45</h3>
//           <div className="menu-subsection">
//             <label>
//               Base:
//               <select value={selectedBase} onChange={(e) => setSelectedBase(e.target.value)}>
//                 <option value="">Select a base</option>
//                 {Object.entries(baseOptions).map(([group, options]) => (
//                   <optgroup label={group} key={group}>
//                     {options.map((option) => (
//                       <option value={option} key={option}>
//                         {option}
//                       </option>
//                     ))}
//                   </optgroup>
//                 ))}
//               </select>
//             </label>
//           </div>

//           {/* Step 2 */}
//           <h3>2. Choose Your Favourites</h3>
//           <div className="menu-subsection favourites-options">
//             {favouritesOptions.map((fav) => (
//               <label key={fav.name}>
//                 <input
//                   type="checkbox"
//                   value={fav.name}
//                   checked={selectedFavourites.includes(fav)}
//                   onChange={(e) => {
//                     if (selectedFavourites.includes(fav)) {
//                       setSelectedFavourites(selectedFavourites.filter((item) => item !== fav));
//                     } else {
//                       setSelectedFavourites([...selectedFavourites, fav]);
//                     }
//                   }}
//                 />
//                 {fav.name} - £{fav.price.toFixed(2)}
//               </label>
//             ))}
//           </div>

//           {/* Step 3 */}
//           <h3>3. Choose Your Sauce (Free)</h3>
//           <div className="menu-subsection">
//             <label>
//               Sauce:
//               <select value={selectedSauce} onChange={(e) => setSelectedSauce(e.target.value)}>
//                 <option value="">Select a sauce</option>
//                 {sauceOptions.map((sauce) => (
//                   <option value={sauce} key={sauce}>
//                     {sauce}
//                   </option>
//                 ))}
//               </select>
//             </label>
//           </div>

//           {/* Extra Toppings */}
//           <h3>Extra Toppings - £0.60 Each</h3>
//           <div className="menu-subsection favourites-options">
//             {extraToppings.map((extra) => (
//               <label key={extra}>
//                 <input
//                   type="checkbox"
//                   value={extra}
//                   checked={selectedExtras.includes(extra)}
//                   onChange={(e) => {
//                     if (selectedExtras.includes(extra)) {
//                       setSelectedExtras(selectedExtras.filter((item) => item !== extra));
//                     } else {
//                       setSelectedExtras([...selectedExtras, extra]);
//                     }
//                   }}
//                 />
//                 {extra}
//               </label>
//             ))}
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


import React, { useState } from 'react';
import './RegularMenu.css';

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
    const meal = {
      name: `Build Your Own Meal`,
      details: {
        base: selectedBase,
        favourites: selectedFavourites,
        sauce: selectedSauce,
        extras: selectedExtras,
      },
      price:
        5.45 +
        selectedFavourites.reduce((acc, curr) => acc + curr.price, 0) +
        selectedExtras.length * 0.6,
    };
    setSelectedItems([...selectedItems, meal]);
    // Reset selections
    setSelectedBase('');
    setSelectedFavourites([]);
    setSelectedSauce('');
    setSelectedExtras([]);
  };

  const handleAddToCart = () => {
    // Implement cart functionality here
    alert('Items added to cart:\n' + JSON.stringify(selectedItems, null, 2));
    // Clear selected items
    setSelectedItems([]);
  };

  // Helper Functions
  const isMealReady = selectedBase && selectedFavourites.length && selectedSauce;

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


      <div className="menu-section-2">
        <h2 className="menu-section-title">Build Your Own Meal (1+2+3)</h2>
        <div className="menu-build-your-own">
          {/* Step 1 */}
          <h3>1. Choose Your Base (with Fresh Veg & Egg) - £5.45</h3>
          <div className="menu-subsection">
            <label>
              Base:
              <select value={selectedBase} onChange={(e) => setSelectedBase(e.target.value)}>
                <option value="">Select a base</option>
                {Object.entries(baseOptions).map(([group, options]) => (
                  <optgroup label={group} key={group}>
                    {options.map((option) => (
                      <option value={option} key={option}>
                        {option}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </label>
          </div>

          {/* Step 2 */}
          <h3>2. Choose Your Favourites</h3>
          <div className="menu-subsection favourites-options">
            {favouritesOptions.map((fav) => (
              <label key={fav.name}>
                <input
                  type="checkbox"
                  value={fav.name}
                  checked={selectedFavourites.includes(fav)}
                  onChange={(e) => {
                    if (selectedFavourites.includes(fav)) {
                      setSelectedFavourites(selectedFavourites.filter((item) => item !== fav));
                    } else {
                      setSelectedFavourites([...selectedFavourites, fav]);
                    }
                  }}
                />
                {fav.name} - £{fav.price.toFixed(2)}
              </label>
            ))}
          </div>

          {/* Step 3 */}
          <h3>3. Choose Your Sauce (Free)</h3>
          <div className="menu-subsection">
            <label>
              Sauce:
              <select value={selectedSauce} onChange={(e) => setSelectedSauce(e.target.value)}>
                <option value="">Select a sauce</option>
                {sauceOptions.map((sauce) => (
                  <option value={sauce} key={sauce}>
                    {sauce}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Extra Toppings */}
          <h3>Extra Toppings - £0.60 Each</h3>
          <div className="menu-subsection favourites-options">
            {extraToppings.map((extra) => (
              <label key={extra}>
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

      {/* Tagline */}
      <p className="menu-tagline">Quick bites, big delights</p>

      {/* Add to Cart Button */}
      {selectedItems.length > 0 && (
        <button className="add-to-cart-button" onClick={() => alert('Items added to cart')}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default RegularMenu;
 