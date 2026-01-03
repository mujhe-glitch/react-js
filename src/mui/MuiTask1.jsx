import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels = {0.5: "Useless",1: "Poor",1.5: "Poor+",2: "Ok",2.5: "Ok+",3: "Good",3.5: "Good+",4: "Excellent",4.5: "Excellent+",5: "Perfect",};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

export const MuiTask1 = () => {
  const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  return (
    <div style={{textAlign:'center'}}>
      <h1>Rating</h1>

      <Box sx={{ display: "flex", alignItems: "center" }} style={{textAlign:'center'}} >
        <Rating 
          name="hover-feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
          emptyIcon={
            <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
          }
        />

        {value !== null && (
          <Box sx={{ ml: 2 }} style={{textAlign:'center'}}>
            {labels[hover !== -1 ? hover : value]}
          </Box>
        )}
      </Box>
    </div>
  );
};
