// FontChanger
// Copyright (c) 2007 Hirotaka Ogawa
// REQUIRES: prototype.js, cookiemanager.js
FontChanger = Class.create();
FontChanger.prototype = {
  id: null,
  cookieManager: null,
  cookieName: 'body.style.fontSize',
  initialize: function(id) {
    this.id = id || 'fontChanger';
    this.cookieManager = new CookieManager();
    this.cookieManager.cookieShelfLife = 90;
    var fontSize = this.cookieManager.getCookie(this.cookieName);
    if (fontSize) document.body.style.fontSize = fontSize;
  },
  setCookieShelfLife: function(days) {
    this.cookieManager.cookieShelfLife = days;
  },
  change: function(fontSize) {
    document.body.style.fontSize = fontSize;
    this.cookieManager.setCookie(this.cookieName, fontSize);
  },
  reset: function() {
    document.body.style.fontSize = '';
    this.cookieManager.clearCookie(this.cookieName);
  },
  show: function() {
    var id = this.id;

    Event.observe($(id + '-small'), 'click', this.onClickSmall.bind(this));
    Event.observe($(id + '-medium'), 'click', this.onClickMedium.bind(this));
    Event.observe($(id + '-large' ), 'click', this.onClickLarge.bind(this));
  },
  onClickSmall: function(e) { this.change('125%'); },
  onClickMedium: function(e) { this.change('142%'); },
  onClickLarge:  function(e) { this.change('150%'); }
};
// Bootstrap
FontChanger.start = function(id) {
  var fontChanger = new FontChanger(id);
  fontChanger.show();
};