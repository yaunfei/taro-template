import Taro from "@tarojs/taro";
import { useState } from "react";
import { Button, View, Image, Text } from "@tarojs/components";
import { miniProgram, getUserPhone } from "@/request/user/login";
import {
  STORE_LOGIN_INFO,
  STORE_TOKEN,
  LOGIN_INFO,
  APP_ID,
} from "@common/config/constant";
// import { Checkbox } from "@antmjs/vantui";
import { domain } from "@common/config/domain";
import { emitCurrentPageData, openProtocol } from "@common/util";
import Style from "./index.less";

export default function LoginPage() {
  const [checkValue, setCheckValue] = useState(false);

  // 登录
  const getPhoneNumber = (e) => {
    if (e.detail.code) {
      Taro.login({
        success: async function (res) {
          if (res.code) {
            // 发起网络请求
            const { uuid } = await miniProgram({
              appId: APP_ID,
              code: res.code,
            });
            if (uuid) {
              const {
                userToken,
                accountInfo: { nickName, avatar },
              } = await getUserPhone({
                code: e.detail.code,
                uuid: uuid,
              });
              // 缓存
              Taro.setStorageSync(STORE_TOKEN, userToken);
              Taro.setStorageSync(STORE_LOGIN_INFO, { nickName, avatar });
              emitCurrentPageData(LOGIN_INFO, { nickName, avatar }); // 传递给上一个页面
              Taro.navigateBack();
            }
          } else {
            Taro.showToast({
              title: "登录失败！",
              icon: "error",
            });
          }
        },
      });
    }
  };

  const clickButton = () => {
    if (!checkValue) {
      Taro.showToast({
        title: "请阅读并勾选页面上的协议",
        icon: "none",
      });
    }
  };

  const checkBox = (e) => {
    setCheckValue(e.detail);
  };

  const weChatIcon = () => (
    <>
      <Image
        className={Style.weChatLogo}
        src={`${domain.IMG_URL}/img/activity/weChat/weChatIcon.png`}
      ></Image>
      微信授权
    </>
  );
  return (
    <View className={Style.loginPage}>
      <Image
        className={Style.logo}
        src={`${domain.IMG_URL}/img/activity/weChat/qjmtLogon.png`}
      ></Image>
      {checkValue ? (
        <Button
          className={Style.buttonStyle}
          open-type="getPhoneNumber"
          onGetPhoneNumber={getPhoneNumber}
        >
          {weChatIcon()}
        </Button>
      ) : (
        <Button className={Style.buttonStyle} onClick={clickButton}>
          {weChatIcon()}
        </Button>
      )}
      <View className={Style.protocolStyle}>
        {/* <Checkbox checkedColor="#07c160" value={checkValue} onChange={checkBox}>
          继续表示您同意
          <Text
            className={Style.otherStyle}
            onClick={e => {
              e.stopPropagation();
              openProtocol("user");
            }}
          >
            《用户协议》
          </Text>
          和
          <Text
            className={Style.otherStyle}
            onClick={e => {
              e.stopPropagation();
              openProtocol("privacy");
            }}
          >
            《隐私条款》
          </Text>
        </Checkbox> */}
      </View>
    </View>
  );
}
