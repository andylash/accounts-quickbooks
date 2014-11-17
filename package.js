"use strict";

Package.describe({
  summary: "Login service for Quickbooks accounts",
  version: "0.1.1",
  name: "accounts-quickbooks",
  git: "https://github.com/andylash/accounts-quickbooks.git",
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');

  api.use('underscore', ['server']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('quickbooks', ['client', 'server']);

  api.use('http', ['client', 'server']);


  api.addFiles("quickbooks.js");
  api.addFiles('quickbooks_common.js', ['client', 'server']);
});
