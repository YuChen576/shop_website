"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import Image from "next/image";
import a0 from "@/public/newProducts/0.jpg";
import a1 from "@/public/newProducts/1.jpg";
import a2 from "@/public/newProducts/2.jpg";
import a3 from "@/public/newProducts/3.jpg";
import a4 from "@/public/newProducts/4.jpg";
import a5 from "@/public/newProducts/5.jpg";
import a6 from "@/public/newProducts/6.jpg";
import a7 from "@/public/newProducts/7.jpg";
import a8 from "@/public/newProducts/8.jpg";
import a9 from "@/public/newProducts/9.jpg";
import a10 from "@/public/newProducts/10.jpg";
import { setting } from "@/SETTING";

const New = () => {
  let data = [a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
  let [open, setOpen] = useState(false);
  let [index, setIndex] = useState(-1);
  return (
    <Box
      sx={{
        background: "white",
        width: "100%",
        height: "auto",
        minHeight: "600px",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        py: 10,
      }}
    >
      <Typography variant="h4" sx={{ color: setting.mainColor, mb: 10 }}>
        New Arrival
      </Typography>
      <Box sx={{ width: { xs: "100%", md: "80%", lg: "50%" }, height: "100%" }}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          style={{ width: "100%", height: "100%" }}
          initialSlide={1}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} style={{ width: "33%", height: "500px" }}>
              <Image
                src={item}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                onClick={() => {
                  setIndex(index);
                  setOpen(true);
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="xl" // 使用最大寬度設置
        fullWidth // 讓對話框佔滿寬度
      >
        <DialogContent
          sx={{
            height: "80vh", // 設置高度為視窗高度的80%
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 0, // 移除內邊距
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              src={data[index]}
              alt=""
              fill
              style={{ objectFit: "contain" }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => setOpen(false)}
            sx={{ background: setting.mainColor }}
            size="large"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default New;
