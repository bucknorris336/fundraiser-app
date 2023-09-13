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
      "https://thevinylfactory.com/wp-content/uploads/2021/11/isonoe-ISO420S-mixer-3.jpg",
    description:
      "Built around the same mastering-grade analogue circuitry used in our rack-mount units Audio measurement figures which exceed any analogue mixer we have ever tested. Powered from a compact version of our LRPS power supply. Now ships with a front headphone socket as well as rear.",
  },
  {
    name: "Mastersounds Four Valve MK2",
    thumbnail:
      "https://mastersounds.co.uk/cdn/shop/products/four-valve-mk2-black-dj-mixer-710703_1080x.jpg?v=1678924565",
    description:
      "Valve MK2 encompasses the true spirit of its predecessor, with its esoteric principles of sound & simplicity, and now includes added playability with a VariableQ high pass filter per channel, a re-designed 3-band EQ & RIAA Input stage, plus Innofader as standard. Two 36mm illuminated analogue VU meters provide accurate signal level monitoring of the mix buss, these automatically switch to monitoring the Cue level when a channel Cue is activated. If the signal level is excessive, the VU meter illumination will change from warm white to bright red",
  },
  {
    name: "Technics SL-1200MK7",
    thumbnail:
      "https://media.sweetwater.com/api/i/q-82__w-750__f-webp__ha-4e66104e6c6c41dd__hmac-ef5f8627e8f5a67849234c709ec0b8f0226a9755/images/items/750/SL1200mk7S-large.jpg.auto.webp",
    description:
      "The original SL-1200 turntable was embraced by DJs in large part due to its innovative direct drive motor, offering unparalleled accuracy and long-term durability. With the SL-1200MK7, Technics introduces their coreless direct drive motor for even greater sound quality and precision. The coreless motor eliminates the potential for cogging — minor speed variations caused by the impulses of a traditional direct drive motor design.",
  },
  {
    name: "Alpha Recording System 9100BW",
    thumbnail:
      "https://storage.googleapis.com/studio-design-asset-files/projects/1pqDPop6qj/s-2000x1733_v-frms_webp_c3fb4395-65f4-465f-b8d0-8f379d7e65d0_middle.webp",
    description:
      "ARS MODEL 9100BW DJ MIXER IS A JAPANESE MADE,4CH. ROTARY MIXER WITH WORLD'S FIRST 3BAND HYBRID ISOEQ. HI-EQ MID-EQ LOW -ISO ON EACH CHANNEL. THIS 4 CHANNEL HIGH QUALITY ROTARY DJ MIXER HAS A 3 BAND ISOLATOR ON THE MASTER.POTENTIOMETER AND SWITCH ARE ALL ALPS. A LONG TIME IN THE DEVELOPMENT PHASE THIS MIXER IS A BEAUTIFUL EXAMPLE OF JAPANESE HAND MADE PRECISION WORKMANSHIP.",
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
