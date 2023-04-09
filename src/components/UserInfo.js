export default class UserInfo {
    constructor(userInfo) {
        this._username = document.querySelector(userInfo.name);
        this._userjob = document.querySelector(userInfo.job);
    }

    getUserInfo () {
        const userData = {
            name: this._username.textContent,
             job: this._userjob.textContent
             }
     
             return userData
    }

    setUserInfo (name, job) {
        this._username.textContent = name;
        this._userjob.textContent = job;
    }
}





