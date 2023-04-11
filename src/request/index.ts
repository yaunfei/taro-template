import { request } from "@yaunfei/taro-request";

export function requestBBS(baseUrl: string) {
  return request(`${baseUrl}/api/bbs-center`);
}
export function requestUser(baseUrl: string) {
  return request(`${baseUrl}/api/user-center`);
}
