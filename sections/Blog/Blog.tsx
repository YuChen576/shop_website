import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { setting } from "@/SETTING";
import CustomCard from "@/components/CustomCard";
import { CustomCardProps } from "@/components/CustomCard";

const Blog = () => {
  const data: CustomCardProps[] = [
    {
      authorAvatar: "BM",
      title: "New Watch",
      date: "2024-01-01",
      image: "/blog/0.jpg",
      description:
        "A stylish wristwatch featuring a sleek stainless steel case and a durable leather strap. The watch face is adorned with minimalist hour markers and luminous hands, making it easy to read even in low light. It is equipped with a precise quartz movement for accurate timekeeping and has a water resistance rating suitable for everyday wear. This timepiece combines functionality with timeless elegance, making it perfect for both casual and formal occasions.",
    },
    {
      authorAvatar: "AL",
      title: "fragrance",
      date: "2024-01-01",
      image: "/blog/1.jpg",
      description:
        "A captivating fragrance that exudes elegance and sophistication. This perfume opens with fresh, zesty top notes of citrus, blending seamlessly into a heart of delicate floral aromas, such as jasmine and rose. The base notes of warm amber, musk, and a hint of vanilla provide a lingering, sensual finish. Perfect for both day and night, this scent embodies a timeless allure, leaving a lasting impression wherever you go.",
    },
    {
      authorAvatar: "JA",
      title: "lipstick",
      date: "2024-01-01",
      image: "/blog/2.jpg",
      description:
        "A luxurious lipstick that delivers intense, vibrant color with a single swipe. The creamy, smooth formula glides effortlessly across the lips, providing full coverage and a satin finish. Enriched with moisturizing ingredients, it keeps your lips hydrated and comfortable all day long. Available in a range of shades from classic reds to modern nudes, this lipstick is perfect for any occasion, adding a touch of glamour and confidence to your look.",
    },
  ];
  return (
    <Container
      sx={{
        width: "100%",
        height: "auto",

        py: 10,
        mb: 10,
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mb: 10,
        }}
      >
        <Typography variant="h4" sx={{ color: setting.mainColor }}>
          Recent Blog
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "center",
              md: "space-around",
              lg: "space-between",
            },
          }}
        >
          <Box sx={{ width: "300px", height: "auto", display: "block" }}>
            <CustomCard {...data[0]} />
          </Box>
          <Box
            sx={{
              width: "300px",
              height: "auto",
              display: { xs: "none", md: "block" },
            }}
          >
            <CustomCard {...data[1]} />
          </Box>
          <Box
            sx={{
              width: "300px",
              height: "auto",
              display: { xs: "none", lg: "block" },
            }}
          >
            <CustomCard {...data[2]} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Blog;
