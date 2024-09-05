import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListSubheader,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { setting } from "@/SETTING";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Footer = () => {
  const fotterData = [
    {
      title: "About Us",
      data: ["About Us", "Our Team", "Our Story", "Our Mission"],
    },
    {
      title: "Customer Service",
      data: ["Contact Us", "Shipping", "Returns", "Privacy Policy"],
    },
    {
      title: "Follow Us",
      data: ["Facebook", "Instagram", "Twitter", "LinkedIn"],
    },
    {
      title: "Legal",
      data: ["Terms of Use", "Privacy Policy", "Legal Notice"],
    },
  ];

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          minHeight: "100px",
          background: setting.mainColor,
          color: "white",
          display: { xs: "none", lg: "flex" },
          alignItems: "start",
          justifyContent: "space-around",
        }}
      >
        {fotterData.map((item) => (
          <List key={item.title}>
            <ListSubheader
              sx={{
                color: "white",
                background: "none",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {item.title}
            </ListSubheader>
            {item.data.map((data) => (
              <ListItem key={data}>
                <ListItemButton>
                  <ListItemText primary={data} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        ))}
      </Box>
      {fotterData.map((item) => {
        return (
          <Accordion
            sx={{
              display: { lg: "none" },
              "&:before": {
                display: "none",
              },
              "&.Mui-expanded": {
                margin: 0,
              },
            }}
            key={item.title}
          >
            <AccordionSummary
              sx={{
                background: setting.mainColor,
                color: "white",
                minHeight: "48px",
                "& .MuiAccordionSummary-content": {
                  margin: "0",
                },
                "&.Mui-expanded": {
                  minHeight: "48px",
                },
              }}
              expandIcon={<ExpandMoreIcon />}
            >
              {item.title}
            </AccordionSummary>
            <AccordionDetails sx={{ padding: 0 }}>
              {item.data.map((data) => (
                <ListItem key={data}>
                  <ListItemButton>
                    <ListItemText primary={data} />
                  </ListItemButton>
                </ListItem>
              ))}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default Footer;
