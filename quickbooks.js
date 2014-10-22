/* global QuickBooks */
"use strict";
Accounts.oauth.registerService('quickbooks');

if (Meteor.isClient) {
  Meteor.loginWithQuickbooks = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    QuickBooks.requestCredential(options, credentialRequestCompleteCallback);
  };
}
