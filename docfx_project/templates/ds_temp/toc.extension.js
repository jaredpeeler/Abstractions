// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE file in the project root for full license information.

/**
 * This method will be called at the start of exports.transform in toc.html.js
 */
exports.preTransform = function (model) {
  // replace recursively the root namespace by ""
  transformItem(model, 1);
  return model;

  function transformItem(item, level) {
    if (item.name) {
      item.name = item.name.replace("DirectScale.Disco.", '');
    } else {
      item.name = null;
    }

    if (item.items && item.items.length > 0) {
      var length = item.items.length;
      for (var i = 0; i < length; i++) {
        transformItem(item.items[i], level + 1);
      };
    }
  }
}

/**
 * This method will be called at the end of exports.transform in toc.html.js
 */
exports.postTransform = function (model) {
  return model;
}