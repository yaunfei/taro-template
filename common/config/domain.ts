export const env = process.env.NODE_ENV || "production";

const domainObj = {
  // 开发环境
  development: {
    BASE_URL: "https://test-wechat.qjmotorlink.com",
    BASE_H5: "https://test-h5.qjmotorlink.com",
    IMG_URL: "https://test-wechat.qjmotorlink.com",
    IMG_H5: "https://test-h5.qjmotorlink.com",
  },
  // 生产环境
  production: {
    BASE_URL: "https://wechat.qjmotorlink.com",
    BASE_H5: "https://h5.qjmotorlink.com",
    IMG_URL: "https://wechat.qjmotorlink.com",
    IMG_H5: "https://h5.qjmotorlink.com",
  },
};
export const domain = domainObj[env];
