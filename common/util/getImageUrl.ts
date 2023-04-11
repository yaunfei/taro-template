import { httpReg } from "@common/config/reg";
import { domain } from "@common/config/domain";
import { ossSuffix } from "@common/util";

export function getImageUrl(url: string) {
  if (!url) return `${domain.IMG_URL}/img/demo.jpg${ossSuffix}`;
  if (httpReg.test(url)) {
    return `${url}${ossSuffix}`;
  } else {
    return `${domain.IMG_URL}/${url}${ossSuffix}`;
  }
}
