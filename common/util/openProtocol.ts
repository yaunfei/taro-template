import { domain } from "@common/config/domain";
import { openWebView } from "@common/util";

type KeyType = "privacy_agreement" | "user" | "gouchexieyi" | "yinsizhengce";

const urlObj = {
  yinsizhengce: `${domain.BASE_H5}/admin/static-page?key=yinsizhengce`,
  gouchexieyi: `${domain.BASE_H5}/admin/static-page?key=gouchexieyi`,
  privacy_agreement: `${domain.BASE_H5}/admin/static-page?key=privacy_agreement`,
  user: `${domain.BASE_H5}/user/user-agreement`,
};

/**
 * 打开隐私协议 和 用户协议
 * @param key privacy ｜ user
 * @returns
 */
export const openProtocol = (key: KeyType) => {
  if (!key) return;
  openWebView(urlObj[key]);
};
