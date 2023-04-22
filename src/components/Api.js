export default class Api {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
    this._token = headers["authorization"];
  }

  getCards() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers,
    }).then((res) => {
      return this._checkResult(res);
    });
  }

  _checkResult(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  addCard({ placename, link }) {
    return fetch(`${this.url}/cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ name: placename, link: link }),
    }).then((res) => {
      return this._checkResult(res);
    });
  }

  getUserData() {
    return fetch(`${this.url}/users/me`, {
      method: "GET",
      headers: this.headers,
    }).then((res) => {
      return this._checkResult(res);
    });
  }

  editUserData({ name, job }) {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({ name: name, about: job }),
    }).then((res) => {
      return this._checkResult(res);
    });
  }

  editAvatar({ avatar }) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then((res) => {
      return this._checkResult(res);
    });
  }

  putLike(id) {
    return fetch(`${this.url}/cards/${id}/likes`, {
      method: "PUT",
      headers: this.headers,
    }).then((res) => {
      return this._checkResult(res);
    });
  }

  removeLike(id) {
    return fetch(`${this.url}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      return this._checkResult(res);
    });
  }

  deleteCard(id) {
    return fetch(`${this.url}/cards/${id}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((res) => {
      return this._checkResult(res);
    });
  }
}
