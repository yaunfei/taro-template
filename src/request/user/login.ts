import { domain } from "@common/config/domain";
import { requestUser } from "../index";

const loginRequestUser = requestUser(domain.BASE_URL);

// /internal/login/wechat/miniProgram // 微信小程序登录-新接口
export function miniProgram(
  param: USER.MiniProgram.Request
): Promise<USER.MiniProgram.Response> {
  return loginRequestUser({
    method: "POST",
    data: param,
    url: "/internal/login/wechat/miniProgram",
  });
}
///internal/login/wechat/miniProgram/getUserPhone 微信小程序登录-获取用户手机号
export function getUserPhone(
  param: Partial<USER.GetUserPhone.Request>
): Promise<USER.GetUserPhone.Response> {
  return loginRequestUser({
    method: "POST",
    data: param,
    url: "/internal/login/wechat/miniProgram/getUserPhone",
  });
}

// /logout/wechat/miniProgram 微信小程序登出
export function logoutMiniProgram(): Promise<{ data: number }> {
  return loginRequestUser({
    method: "GET",
    url: "/logout/wechat/miniProgram",
  });
}
