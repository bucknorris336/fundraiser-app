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
  name: "Alpha Recording System 9100BW",
  id: 7,
  thumbnail:
    "https://storage.googleapis.com/studio-design-asset-files/projects/1pqDPop6qj/s-2000x1733_v-frms_webp_c3fb4395-65f4-465f-b8d0-8f379d7e65d0_middle.webp",
  description:
    "ARS MODEL 9100BW DJ MIXER IS A JAPANESE MADE,4CH. ROTARY MIXER WITH WORLD'S FIRST 3BAND HYBRID ISOEQ. HI-EQ MID-EQ LOW -ISO ON EACH CHANNEL. THIS 4 CHANNEL HIGH QUALITY ROTARY DJ MIXER HAS A 3 BAND ISOLATOR ON THE MASTER.POTENTIOMETER AND SWITCH ARE ALL ALPS. A LONG TIME IN THE DEVELOPMENT PHASE THIS MIXER IS A BEAUTIFUL EXAMPLE OF JAPANESE HAND MADE PRECISION WORKMANSHIP.",
};
function ItemPage7() {
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

export default ItemPage7;
