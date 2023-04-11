export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/my/index",
    "pages/common/webViewPage/index",
    "pages/common/loginPage/index",
    "pages/common/error/index",
  ],
  tabBar: {
    color: "#7E828C",
    selectedColor: "#7E828C",
    list: [
      {
        pagePath: "pages/index/index",
        text: "活动",
        iconPath: "assets/images/homeUncheck@2x.png", // 未选中
        selectedIconPath: "assets/images/homeCheck@2x.png", // 选中
      },
      {
        pagePath: "pages/my/index",
        text: "个人中心",
        iconPath: "assets/images/myUncheck@2x.png", // 未选中
        selectedIconPath: "assets/images/myCheck@2x.png", // 选中
      },
    ],
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
