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
  name: "Condesa SE",
  id: 3,
  thumbnail:
    "https://condesaelectronics.com/cdn/shop/files/DSC08397-Finalweb_0aea56ff-e5e3-4b69-8350-15bfdf85d22a_1080x.png?v=1693554792",
  description:
    "The Carmen SE is a new take on our Carmen series of mixers. New features include bigger VU meters, a staggered channel EQ layout, Urei type pointer knobs, a microphone input with a dedicated fader and the option of the FX send per channel mod.",
};
function ItemPage3() {
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

export default ItemPage3;
