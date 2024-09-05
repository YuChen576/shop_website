"use client";

import React, { ReactNode, useState, use } from "react";
import { setting } from "@/SETTING";
import { AppBar, Toolbar, Box, List, Typography } from "@mui/material";
import Home from "@/sections/Home/Home";
import New from "@/sections/New/New";
import Products from "@/sections/Products/Products";
import Blog from "@/sections/Blog/Blog";
import CustomListItem from "@/components/CustomListItem";
import { InView } from "react-intersection-observer";
import Footer from "@/sections/Footer/Footer";

// (T)接口,定義結構。
interface NavItem {
  name: string;
  component: ReactNode;
}

const page = () => {
  const [selectedItem, setSelectedItem] = useState<string>("Home");

  // 定義一個 navItems 陣列
  const navItems: NavItem[] = [
    { name: "Home", component: <Home /> },
    { name: "New", component: <New /> },
    { name: "Products", component: <Products /> },
    { name: "Blog", component: <Blog /> },
  ];
  return (
    <>
      <AppBar sx={{ boxShadow: 0, background: setting.nav.background }}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "space-between" },
          }}
        >
          <Typography
            variant="h4"
            color={setting.nav.logoColor}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Express
          </Typography>
          <List sx={{ display: "flex", gap: 0, color: setting.nav.menuColor }}>
            {navItems.map((item) => {
              return (
                <CustomListItem
                  key={item.name}
                  name={item.name}
                  isVisible={item.name === selectedItem}
                />
              );
            })}
          </List>
        </Toolbar>
      </AppBar>
      {navItems.map((item, index) => {
        return (
          <Box id={item.name} key={item.name} sx={{ width: "100%" }}>
            <Toolbar />
            {/* 用戶滾動頁面時，InView 會偵測各區塊是否進入視窗，並更新導航欄的當前選項。 */}
            <InView
              rootMargin="-30% 0% -70% 0%"
              as="div"
              style={{ width: "100%" }}
              //可以動態更新當前選中的導航項目（setSelectedItem）
              onChange={(inView, entry) => {
                if (inView) {
                  setSelectedItem(item.name);
                }
              }}
            >
              {item.component}
            </InView>
          </Box>
        );
      })}
      <Footer />
    </>
  );
};

export default page;
