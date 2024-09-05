import React from "react";
import shop from "@/public/home/shop.png";
import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";
import { setting } from "@/SETTING";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "70%",
        minHeight: "500px",
        background: setting.nav.Home.background,
        display: { md: "flex" },
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          minWidth: "700px",
          height: "100%",
        }}
      >
        <Image
          src={shop}
          alt="shop"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>

      <Box
        sx={{
          height: "100%",
          width: { xs: "100%", md: "40%" },
          minWidth: "400px",
          minHeight: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" color="white" sx={{ mb: 2 }}>
          Shop For
        </Typography>
        <Typography variant="h2" color="white" sx={{ mb: 5 }}>
          What You Want
        </Typography>

        <Typography variant="body2" color="white" sx={{ mb: 5 }}>
          Welcome to our online store! We offer a wide range of products at
          affordable prices.
        </Typography>

        <Button
          variant="contained"
          sx={{ background: setting.secondColor }}
          size="large"
        >
          Shop Now
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
