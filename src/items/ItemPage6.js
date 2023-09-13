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
  name: "Technics SL-1200MK7",
  id: 6,
  thumbnail:
    "https://media.sweetwater.com/api/i/q-82__w-750__f-webp__ha-4e66104e6c6c41dd__hmac-ef5f8627e8f5a67849234c709ec0b8f0226a9755/images/items/750/SL1200mk7S-large.jpg.auto.webp",
  description:
    "The original SL-1200 turntable was embraced by DJs in large part due to its innovative direct drive motor, offering unparalleled accuracy and long-term durability. With the SL-1200MK7, Technics introduces their coreless direct drive motor for even greater sound quality and precision. The coreless motor eliminates the potential for cogging — minor speed variations caused by the impulses of a traditional direct drive motor design.",
};

function ItemPage6() {
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

export default ItemPage6;
