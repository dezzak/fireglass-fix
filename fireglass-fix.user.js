// ==UserScript==
// @name         Fireglass Fix
// @description  Routes around fire.glass for whitelisted websites
// @author       dezzak
// @include      https://eu-west-email-isolation.prod.fire.glass/*
// @run-at       document-start
// @updateURL    https://github.com/dezzak/fireglass-fix/raw/master/fireglass-fix.user.js
// @downloadURL  https://github.com/dezzak/fireglass-fix/raw/master/fireglass-fix.user.js
// @version      0.2
// ==/UserScript==

(function() {
  'use strict';
  const searchParamsRaw = window.location.search;
  if (searchParamsRaw) {
    const searchParams = new URLSearchParams(searchParamsRaw.substr(1));
    const targetUrl = searchParams.get('url');
    if (targetUrl) {
      console.debug(targetUrl);
    }
  }
})();