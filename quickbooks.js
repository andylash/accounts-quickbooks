/* global QuickBooks */
/* eslint no-param-reassign:0 */
"use strict";
Accounts.oauth.registerService('quickbooks');

if (Meteor.isClient) {
  Meteor.loginWithQuickbooks = function(options, callback) {
    // support a callback without options
    if (!callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    QuickBooks.requestCredential(options, credentialRequestCompleteCallback);
  };

  // to support package `bozhao:link-accounts`
  Meteor.linkWithQuickbooks = function(options, callback) {
    if (!Meteor.userId()) {
      throw new Meteor.Error(402, 'Please login to an existing account before link.');
    }

    if (!callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.linkCredentialRequestCompleteHandler(callback);
    QuickBooks.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    // publish all fields including access token, which can legitimately
    // be used from the client (if transmitted over ssl or on
    // localhost). https://developers.facebook.com/docs/concepts/login/access-tokens-and-types/,
    // "Sharing of Access Tokens"
    forLoggedInUser: ['services.quickbooks.screenName'],
    forOtherUsers: [
      'services.quickbooks.screenName',
    ]
  });
}
