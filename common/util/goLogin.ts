import Taro from "@tarojs/taro";
import { LOGIN_INFO } from "@common/config/constant";

// 跳转到登录页面
export function goLoginPage() {
  return new Promise((reslove) => {
    Taro.navigateTo({
      url: "/pages/common/loginPage/index",
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        [LOGIN_INFO]: function (data) {
          reslove(data);
        },
      },
    });
  });
}
