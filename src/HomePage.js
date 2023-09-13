import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  Grid,
} from "@mui/material";

const items = [
  {
    name: "Mastersounds SL-1200MK2",
    thumbnail:
      "https://mastersounds.co.uk/cdn/shop/products/mastersounds-sl-blu-666819_1300x.jpg?v=1690510491",
    description:
      "To celebrate our 15 Years Deep of MasterSounds, we have made 2 pairs of our MasterSounds SL in BLU colorway. We have one pair of SL-1200MK2 and one pair SL-1210MK2. Each turntable has been hand built to Ryan's exacting specifications, and features upgraded and rewired Rega RB-330 tonearm and AT cartridge, plus our LinearPOWER supply & limited edition screen printed 15 Years Deep graphics. Please contact us to order, using the form at the bottom of the page.",
  },
  {
    name: "Varia Instruments RDM40",
    thumbnail:
      "https://www.varia-instruments.com/images/rdm40/RDM40_scene_4_full.jpg",
    description:
      "We adopted the proven three-band isolators for each individual channel as well as the master isolator from our RDM20. To allow more complex DJ setups, both at home or in club booths, we added a whole set of new features to the RDM40: Dedicated rotary knobs for gain and send are extending the mixers channel strip. The input signals are monitored by a dynamic level indication LED that turns red when the signal is too hot. Using only the best electronic components built into a solid metal housing, this device is made to stand the test of time, even in the rough conditions of the dusty and sweaty club environment.",
  },
  {
    name: "Condesa SE",
    thumbnail:
      "https://condesaelectronics.com/cdn/shop/files/DSC08397-Finalweb_0aea56ff-e5e3-4b69-8350-15bfdf85d22a_1080x.png?v=1693554792",
    description:
      "The Carmen SE is a new take on our Carmen series of mixers. New features include bigger VU meters, a staggered channel EQ layout, Urei type pointer knobs, a microphone input with a dedicated fader and the option of the FX send per channel mod.",
  },
  {
    name: "Isonoe ISO420",
    thumbnail:
      "https://www.isonoe.com/wp-content/gallery/iso420-2-1/thumbs/thumbs_iso-3.jpg",
    description:
      "Built around the same mastering-grade analogue circuitry used in our rack-mount units Audio measurement figures which exceed any analogue mixer we have ever tested. Powered from a compact version of our LRPS power supply. Now ships with a front headphone socket as well as rear.",
  },
];

function HomePage() {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      // justifyContent="center"
      alignItems="center"
      padding={4}
    >
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card sx={{ width: 345, height: 575 }}>
            <CardActionArea>
              <CardMedia
                height={276}
                component="img"
                alt={item.name}
                image={item.thumbnail}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ height: 122, overflow: "hidden" }}
                >
                  {item.description}
                </Typography>
                <Button variant="contained" color="primary">
                  View Item
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default HomePage;
