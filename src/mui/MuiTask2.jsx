import React, { useState } from "react";
import { Slider, Typography, Box } from "@mui/material";

const productsData = [
  { id: 1, name: "Smart Watch", price: 15000 },
  { id: 2, name: "Bluetooth Speaker", price: 45000 },
  { id: 3, name: "Laptop Stand", price: 850 },
];

const MuiTask2 = () => {
  // range between 850 to 50000
  const [range, setRange] = useState([850, 50000]);

  const handleChange = (event, newValue) => {
    setRange(newValue);
  };

  return (
    <Box>
      <Typography variant="h6">Price Filter</Typography>

      <Typography>
        Selected Range: {range[0]} - {range[1]}
      </Typography>

      <Slider
        value={range}
        onChange={handleChange}
        min={850}
        max={50000}
        valueLabelDisplay="auto"
      />

      <Typography variant="h6">Products</Typography>

      {productsData
        .filter(
          (item) => item.price >= range[0] && item.price <= range[1]
        )
        .map((item) => (
          <Typography key={item.id}>
            {item.name} - ₹{item.price}
          </Typography>
        ))}
    </Box>
  );
};

export default MuiTask2;