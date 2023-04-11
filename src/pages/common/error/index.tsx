import { View, Image } from "@tarojs/components";
import { domain } from "@common/config/domain";
import Style from "./index.less";

export default function Error() {
  return (
    <View className={Style.errorWarp}>
      <Image src={`${domain.IMG_H5}/img/404.png`}></Image>
      <View className={Style.errorMsg}>页面不翼而飞了~</View>
    </View>
  );
}
