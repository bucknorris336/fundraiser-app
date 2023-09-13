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
  name: "Isonoe ISO420",
  id: 4,
  thumbnail:
    "https://thevinylfactory.com/wp-content/uploads/2021/11/isonoe-ISO420S-mixer-3.jpg",
  description:
    "Built around the same mastering-grade analogue circuitry used in our rack-mount units Audio measurement figures which exceed any analogue mixer we have ever tested. Powered from a compact version of our LRPS power supply. Now ships with a front headphone socket as well as rear.",
};
function ItemPage4() {
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

export default ItemPage4;
