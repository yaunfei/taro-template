export const env = process.env.NODE_ENV || "production";

const domainObj = {
  // 开发环境
  development: {
    BASE_URL: "", // 基本请求URL
    BASE_H5: "", // 请求H5，URL
    IMG_URL: "", // 基本图片请求URL
    IMG_H5: "", // 请求H5图片URL
  },
  // 生产环境
  production: {
    BASE_URL: "",
    BASE_H5: "",
    IMG_URL: "",
    IMG_H5: "",
  },
};
export const domain = domainObj[env];
