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

import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import "./RegularMenu.css";

const menuItems = [
  { name: "Item 1", description: "Description of item 1" },
  { name: "Item 2", description: "Description of item 2" },
  { name: "Item 3", description: "Description of item 3" },
  { name: "Item 4", description: "Description of item 4" },
  { name: "Item 5", description: "Description of item 5" },
  { name: "Item 6", description: "Description of item 6" },
  { name: "Item 7", description: "Description of item 7" },
  { name: "Item 8", description: "Description of item 8" },
  { name: "Item 9", description: "Description of item 9" },
  { name: "Item 10", description: "Description of item 10" },
  { name: "Item 11", description: "Description of item 11" },
  { name: "Item 12", description: "Description of item 12" },
];

const RegularMenu = () => {
  return (
    <div className="menu-grid">
      {menuItems.map((item, index) => (
        <Card key={index} className="menu-card">
        <CardMedia
            component="img"
            height="140"
            image={item.imageUrl}
            alt={item.name}
          />
          <CardContent>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="body2">{item.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RegularMenu;

