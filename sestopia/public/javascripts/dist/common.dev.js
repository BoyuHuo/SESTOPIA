"use strict";

var request = function request(url, type, data) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: url,
      dataType: "json",
      async: true,
      data: data,
      type: type,
      beforeSend: function beforeSend() {},
      success: function success(req) {
        resolve(req);
      },
      complete: function complete() {},
      error: function error(req) {
        reject(req);
      }
    });
  });
};
//# sourceMappingURL=common.dev.js.map
