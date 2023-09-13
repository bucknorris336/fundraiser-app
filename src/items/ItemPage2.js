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
  name: "Varia Instruments RDM40",
  id: 2,
  thumbnail:
    "https://www.varia-instruments.com/images/rdm40/RDM40_scene_4_full.jpg",
  description:
    "We adopted the proven three-band isolators for each individual channel as well as the master isolator from our RDM20. To allow more complex DJ setups, both at home or in club booths, we added a whole set of new features to the RDM40: Dedicated rotary knobs for gain and send are extending the mixers channel strip. The input signals are monitored by a dynamic level indication LED that turns red when the signal is too hot. Using only the best electronic components built into a solid metal housing, this device is made to stand the test of time, even in the rough conditions of the dusty and sweaty club environment.",
};
function ItemPage2() {
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

export default ItemPage2;
