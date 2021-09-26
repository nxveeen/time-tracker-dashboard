import * as data from "../data";
import pfp from "url:../../src/images/image-jeremy.png";

class Tracker {
  _parentElement = document.querySelector(".wrapper");
  _data;
  _state;

  constructor() {
    this._data = data.data;
    this._state = "monthly";
  }

  _showdata() {
    console.log(this._data);
  }

  _generateCardMarkup(data) {
    let local = {};
    console.log(data);
    const { daily, weekly, monthly } = data.timeframes;
    // console.log(daily, weekly, monthly);

    if (this._state === "daily") local = daily;
    else if (this._state === "weekly") local = weekly;
    else if (this._state === "monthly") local = monthly;

    return `
      <div class="section">
        <div class="desc">
          <div class="current">
            <p class="type">${data.title}</p>
            <p class="time">${local.current}hrs</p>
          </div>
          <div class="last">
            <div class="ellipses"></div>
            <p class="time">Last Week - ${local.previous}hrs</p>
          </div>
        </div>
      </div>
    `;
  }

  _setProfileCard() {
    const htmlEl = `
      <div class="profile section">
        <div class="profile__top">
          <div class="pr__img">
            <img src="${pfp}" alt="">
          </div>
          <div class="pr__name">
            <span>Report for</span>
            <h3>Jeremy Robson</h3>
          </div>
        </div>
        <div class="profile__bottom">
          <button>Daily</button>
          <button>Weekly</button>
          <button>Monthly</button>
        </div>
      </div>
    `;
    this._parentElement.insertAdjacentHTML("afterbegin", htmlEl);
  }

  _setHourCards() {
    console.log(this._data);
    this._data.forEach((s) => {
      let htmlEl = this._generateCardMarkup(s);
      this._parentElement.insertAdjacentHTML("beforeend", htmlEl);
    });
  }
}

const init = function () {
  const t = new Tracker();
  console.log(t._state);
  t._setProfileCard();
  t._setHourCards();
};

//---------------init function call---------------
init();
