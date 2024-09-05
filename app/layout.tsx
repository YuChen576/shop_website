import type { Metadata } from "next";
import { Inter } from "next/font/google";
import icon from "@/public/icon.svg";

const inter = Inter({ subsets: ["latin"] });

// (T)匯入 Metadata 類型，定義網頁(title,description,icons)
//metadata 物件，設定頁面的基本 SEO 元數據：
export const metadata: Metadata = {
  title: "Express",
  description: "this is a test website",
  icons: icon.src,
};
// (T) Readonly<{}>: TypeScript 的型別註解，表明該參數是不可變的。
//RootLayout 組件在渲染時，能動態地嵌入不同子元素，構建通用布局。
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ border: 0, margin: 0, boxSizing: "border-box" }}
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
