import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom"; // Assuming you're using React Router
const item = {
  name: "Mastersounds SL-1200MK2",
  id: 1,
  thumbnail:
    "https://mastersounds.co.uk/cdn/shop/products/mastersounds-sl-blu-666819_1300x.jpg?v=1690510491",
  description:
    "To celebrate our 15 Years Deep of MasterSounds, we have made 2 pairs of our MasterSounds SL in BLU colorway. We have one pair of SL-1200MK2 and one pair SL-1210MK2. Each turntable has been hand built to Ryan's exacting specifications, and features upgraded and rewired Rega RB-330 tonearm and AT cartridge, plus our LinearPOWER supply & limited edition screen printed 15 Years Deep graphics. Please contact us to order, using the form at the bottom of the page.",
};
function ItemPage1() {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        component="img"
        alt={item.name}
        image={item.thumbnail}
        height="300"
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={`/donations/${item.id}`} // Replace with your actual route
        >
          Donate
        </Button>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/" // Replace with your actual homepage route
        >
          Back to Home
        </Button>
      </CardActions>
    </Card>
  );
}

export default ItemPage1;
