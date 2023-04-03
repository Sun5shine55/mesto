import {profileName, profileMyself} from "../utils/constants.js"

export default class UserInfo {
    constructor(username, userdata) {
        this._username = username;
        this._userdata = userdata;
    }

    getUserInfo () {
        this._username.value = profileName.textContent;
        this._userdata.value = profileMyself.textContent;
    }
    
    setUserInfo() {
        profileName.textContent = this._username.value;
        profileMyself.textContent = this._userdata.value;
    }
}