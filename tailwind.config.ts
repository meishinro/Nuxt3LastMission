import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      // 在這裡添加您的自定義配置
      colors: {
        white: "#ffffff",
        black: "#000000",
        primary: "#BF9D7D",
        neutral40: "#ECECEC",
        neutral60: "#909090",
      },
    },
  },
};
