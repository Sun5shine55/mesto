export default class UserInfo {
  constructor(userInfo) {
    this._username = document.querySelector(userInfo.name);
    this._userjob = document.querySelector(userInfo.job);
    this._avatar = document.querySelector(userInfo.avatar);
  }

  getUserInfo() {
    const userData = {
      name: this._username.textContent,
      job: this._userjob.textContent,
    };

    return userData;
  }

  setUserInfo(data) {
    this._username.textContent = data.name;
    this._userjob.textContent = data.about;
    this._avatar.src = data.avatar;
  }
}
