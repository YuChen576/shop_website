"use client";

import React from "react";
import { ListItem, ListItemButton } from "@mui/material";
import { setting } from "@/SETTING";
import { colors } from "@mui/material";

const CustomListItem = ({
  name,
  isVisible,
}: {
  name: string;
  isVisible: boolean;
}) => {
  const handleClick = () => {
    // 根據 name 屬性獲取對應的 DOM 元素
    const element = document.getElementById(name);
    // 如果元素存在，則平滑滾動到該元素位置
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ListItem>
      <ListItemButton
        sx={{
          borderBottom: isVisible ? `2px solid ` : "",
          borderColor: setting.nav.menuActiveColor,
          color: isVisible ? setting.nav.menuActiveColor : colors.grey[500],
          fontWeight: isVisible ? "bold" : "normal",
          ...setting.nav.menuHover, // 添加 hover 樣式
          // "..."setting.nav.menuHover 物件的所有屬性展開到當前物件中。這樣，你可以將多個樣式屬性合併到一起，避免手動一一列出所有屬性。
          //setting 是一個配置物件，通常包含了應用程序的全局樣式和設置。
        }}
        onClick={handleClick}
      >
        {name}
      </ListItemButton>
    </ListItem>
  );
};

export default CustomListItem;
