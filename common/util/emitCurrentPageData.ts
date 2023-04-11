import Taro from "@tarojs/taro";

/**
 * 传给上一个页面信息
 * @param name
 * @param data
 */
export function emitCurrentPageData(name: string, data: {}) {
  const pages = Taro.getCurrentPages();
  const current = pages[pages.length - 1];
  const eventChannel = current.getOpenerEventChannel();
  eventChannel.emit(name, data);
}
