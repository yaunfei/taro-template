declare namespace USER {
  namespace MiniProgram {
    interface Request {
      appId: string;
      code: string;
    }

    interface Response {
      uuid: string;
    }
  }
  namespace GetUserPhone {
    interface Request {
      code: string;
      encryptedData: string;
      iv: string;
      rawData: string;
      uuid: string;
    }

    interface AppTypes {
      aid: number;
      createTime: number;
      createTimeString: string;
      fuel: number;
      id: number;
      ipStr: string;
      isDel: number;
      modifyTime: number;
      modifyTimeString: string;
      osType: number;
      pushToken: string;
    }

    interface AccountInfo {
      accountCode: string;
      accountStatus: number;
      accountType: number;
      appTypes: AppTypes[];
      avatar: string;
      background: string;
      birthday: number;
      createTime: number;
      createTimeString: string;
      email: string;
      emergencyPhone: string;
      gender: number;
      id: number;
      ipStr: string;
      isDel: number;
      isLock: number;
      mobile: string;
      modifyBy: number;
      modifyTime: number;
      modifyTimeString: string;
      name: string;
      nickName: string;
      osType: number;
      pushToken: string;
      scope: number;
      signature: string;
      vehicleType: number;
    }

    interface Response {
      accountInfo: AccountInfo;
      bindingIphoneState: number;
      bindingQQState: number;
      bindingWechatState: number;
      passwordExists: true;
      userToken: string;
    }
  }
}
