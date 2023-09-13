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
  name: "Mastersounds Four Valve MK2",
  id: 5,
  thumbnail:
    "https://mastersounds.co.uk/cdn/shop/products/four-valve-mk2-black-dj-mixer-710703_1080x.jpg?v=1678924565",
  description:
    "Valve MK2 encompasses the true spirit of its predecessor, with its esoteric principles of sound & simplicity, and now includes added playability with a VariableQ high pass filter per channel, a re-designed 3-band EQ & RIAA Input stage, plus Innofader as standard. Two 36mm illuminated analogue VU meters provide accurate signal level monitoring of the mix buss, these automatically switch to monitoring the Cue level when a channel Cue is activated. If the signal level is excessive, the VU meter illumination will change from warm white to bright red",
};
function ItemPage5() {
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

export default ItemPage5;
