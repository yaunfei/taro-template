import { WebView } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";

export default function WebViewPage() {
  const router = useRouter();
  const { url } = router.params;
  if (url) {
    return <WebView src={url} />;
  }
}
