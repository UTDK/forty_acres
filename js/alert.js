!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery"),require("./util.js")):"function"==typeof define&&define.amd?define(["jquery","./util.js"],t):(e=e||self).Alert=t(e.jQuery,e.Util)}(this,function(o,i){"use strict";function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}o=o&&o.hasOwnProperty("default")?o.default:o,i=i&&i.hasOwnProperty("default")?i.default:i;var e="alert",s="bs.alert",t="."+s,n=o.fn[e],l={CLOSE:"close"+t,CLOSED:"closed"+t,CLICK_DATA_API:"click"+t+".data-api"},a="alert",f="fade",c="show",r=function(){function r(e){this._element=e}var e=r.prototype;return e.close=function(e){var t=this._element;e&&(t=this._getRootElement(e)),this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)},e.dispose=function(){o.removeData(this._element,s),this._element=null},e._getRootElement=function(e){var t=i.getSelectorFromElement(e),n=!1;return t&&(n=document.querySelector(t)),n||(n=o(e).closest("."+a)[0]),n},e._triggerCloseEvent=function(e){var t=o.Event(l.CLOSE);return o(e).trigger(t),t},e._removeElement=function(t){var n=this;if(o(t).removeClass(c),o(t).hasClass(f)){var e=i.getTransitionDurationFromElement(t);o(t).one(i.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(e)}else this._destroyElement(t)},e._destroyElement=function(e){o(e).detach().trigger(l.CLOSED).remove()},r._jQueryInterface=function(n){return this.each(function(){var e=o(this),t=e.data(s);t||(t=new r(this),e.data(s,t)),"close"===n&&t[n](this)})},r._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},function(e,t,n){t&&u(e.prototype,t),n&&u(e,n)}(r,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),r}();return o(document).on(l.CLICK_DATA_API,'[data-dismiss="alert"]',r._handleDismiss(new r)),o.fn[e]=r._jQueryInterface,o.fn[e].Constructor=r,o.fn[e].noConflict=function(){return o.fn[e]=n,r._jQueryInterface},r});