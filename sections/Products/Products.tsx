import React from "react";
import { setting } from "@/SETTING";
import { Box, Typography, Container, Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Grid from "@mui/material/Grid2";
import a0 from "@/public/products/0.jpg";
import a1 from "@/public/products/1.jpg";
import a2 from "@/public/products/2.jpg";
import a3 from "@/public/products/3.jpg";
import a4 from "@/public/products/4.jpg";
import Image from "next/image";

const Products = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 5 }}>
        <Typography sx={{ color: setting.mainColor }} variant="h4">
          Products
        </Typography>
        <Button variant="text" sx={{ color: setting.secondColor }}>
          <Typography variant="h5" sx={{ color: setting.secondColor }}>
            View More
          </Typography>
          <ArrowRightAltIcon />
        </Button>
      </Box>
      {/* 最外層 */}
      <Grid container spacing={2} sx={{ width: "100%", height: "auto" }}>
        {/* 第一層 */}
        <Grid
          sx={{
            height: {
              xs: `${setting.nav.products.height / 2}px`,
              md: `${setting.nav.products.height + 16}px`,
              // 高度為 setting.nav.products.height 加 16 像素。
            },
          }}
          size={{ xs: 12, md: 4 }}
          // 不同屏幕尺寸下的佔位格數：xs，佔滿整行（12 格）。
        >
          <Image
            src={a0}
            alt="product"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </Grid>
        {/* 第二層 */}
        <Grid spacing={2} container size={{ xs: 12, md: 8 }}>
          {/* md，佔用 8 格*/}
          <Grid
            height={`${setting.nav.products.height / 2}px`}
            size={{ xs: 12, md: 6 }}
          >
            <Image
              src={a1}
              alt="product"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Grid>
          {/* 第三層 */}
          <Grid
            height={`${setting.nav.products.height / 2}px`}
            size={{ xs: 12, md: 6 }}
          >
            <Image
              src={a2}
              alt="product"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Grid>
          {/* 第四層 */}
          <Grid
            height={`${setting.nav.products.height / 2}px`}
            size={{ xs: 12, md: 6 }}
          >
            <Image
              src={a3}
              alt="product"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Grid>
          {/* 第五層 */}
          <Grid
            height={`${setting.nav.products.height / 2}px`}
            size={{ xs: 12, md: 6 }}
          >
            <Image
              src={a4}
              alt="product"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
