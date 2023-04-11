import Taro, { useDidShow } from "@tarojs/taro";
import { useState } from "react";
import { View, Image, Text } from "@tarojs/components";
import { logoutMiniProgram } from "@/request/user/login";
import { STORE_LOGIN_INFO } from "@common/config/constant";
import { goLoginPage, openProtocol, getImageUrl } from "@common/util";
import { domain } from "@common/config/domain";
import Style from "./index.less";

export default function My() {
  const [avatarUrl, setAvatarUrl] = useState<string>();
  const [name, setName] = useState<string>();
  const [loginFlag, setLoginFlag] = useState<boolean>(false);

  // 显示的时候
  useDidShow(() => {
    const userInfo = Taro.getStorageSync(STORE_LOGIN_INFO);

    if (userInfo) {
      setAvatarUrl(userInfo?.avatar);
      setName(userInfo?.nickName);
      setLoginFlag(true);
    }
  });

  const login = () => {
    !loginFlag && goLoginPage();
  };

  // 退出登录
  const logout = () => {
    Taro.showModal({
      title: "确定退出吗？",
      content: "",
      success: function (modalRes) {
        if (modalRes.confirm) {
          logoutMiniProgram().then(() => {
            Taro.clearStorageSync();
            setLoginFlag(false);
            setAvatarUrl("");
          });
        }
      },
    });
  };

  return (
    <View className={Style.myWarp}>
      <Image
        className={Style.myImage}
        src={getImageUrl(avatarUrl!)}
        onClick={login}
      ></Image>
      <View className={Style.myName} onClick={login}>
        {loginFlag ? name : "登录/注册"}
      </View>
      <View className={Style.backStyle}>
        <View
          className={Style.protocol}
          onClick={() => {
            openProtocol("privacy");
          }}
        >
          <Text>隐私政策</Text>
          <Image src={`${domain.IMG_URL}/img/right.png`}></Image>
        </View>
        <View
          className={Style.protocol}
          onClick={() => {
            openProtocol("user");
          }}
        >
          <Text>用户协议</Text>
          <Image src={`${domain.IMG_URL}/img/right.png`}></Image>
        </View>
      </View>
      {loginFlag && (
        <View className={Style.backStyle}>
          <View className={Style.protocol} onClick={logout}>
            <Text>退出登录</Text>
            <Image src={`${domain.IMG_URL}/img/right.png`}></Image>
          </View>
        </View>
      )}
    </View>
  );
}
