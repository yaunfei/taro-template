import { View, Text, Button } from "@tarojs/components";
import { navigateToPage } from "@yaunfei/taro-router";

export default function Index() {
  return (
    <View>
      <Text>Hello world!</Text>
      <Button
        onClick={() => {
          navigateToPage("/pages/common/error/index", {}, {});
        }}
      >
        点我
      </Button>
    </View>
  );
}
