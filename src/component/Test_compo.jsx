import React, { useState } from "react";
import { Grid, Card, CardContent, Box, Typography } from "@mui/material";
import LogoPensook from "../assets/LogoPensook.png";
const Test_compo = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (index) => {
    // Check if the card is already selected
    const isSelected = selectedCards.includes(index);

    // If already selected and clicking again, remove from the array
    if (isSelected) {
      setSelectedCards((prevSelectedCards) =>
        prevSelectedCards.filter((cardIndex) => cardIndex !== index)
      );
    } else {
      // If not selected and not exceeding the limit of 3, add to the array
      if (selectedCards.length < 3) {
        setSelectedCards((prevSelectedCards) => [...prevSelectedCards, index]);
      }
    }
  };

  const isCardSelected = (index) => {
    return selectedCards.includes(index);
  };

  return (
    <Grid container spacing={2}>
      {[...Array(9).keys()].map((index) => (
        <Grid item xs={3} key={index}>
          <Card
            sx={{
              p: 2,
              border: isCardSelected(index) ? "2px solid black" : "none",
              backgroundColor: isCardSelected(index) ? "lightgrey" : "inherit",
            }}
            onClick={() => handleCardClick(index)}
          >
            <CardContent>
              <Box>
                <img
                  src={LogoPensook}
                  width={50}
                  height={15}
                  alt="logoPensook"
                />
                <Typography variant="body2">โรคหัวใจ</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Test_compo;
