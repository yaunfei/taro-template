import Taro from "@tarojs/taro";

// 打开webViewPage
export const openWebView = (url) => {
  if (!url) return;
  Taro.navigateTo({
    url: `/pages/common/webViewPage/index?url=${encodeURIComponent(url)}`,
  });
};
