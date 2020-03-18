// ==UserScript==
// @name         Fireglass Fix
// @description  Routes around fire.glass for whitelisted websites
// @author       dezzak
// @include      https://eu-west-email-isolation.prod.fire.glass/*
// @run-at       document-start
// @updateURL    https://github.com/dezzak/fireglass-fix/raw/master/fireglass-fix.user.js
// @downloadURL  https://github.com/dezzak/fireglass-fix/raw/master/fireglass-fix.user.js
// @version      1.0
// ==/UserScript==

(function() {
  'use strict';

  const whitelist = [
    'https://app.teammood.com/',
    'https://sainsburys-confluence.valiantys.net/',
    'https://sainsburys-jira.valiantys.net/',
  ];

  const searchParamsRaw = window.location.search;
  if (searchParamsRaw) {
    const searchParams = new URLSearchParams(searchParamsRaw.substr(1));
    const targetUrl = searchParams.get('url');
    if (targetUrl) {
      whitelist.forEach(permitted => {
        if (targetUrl.startsWith(permitted)) {
          window.location = targetUrl;
        }
      })
    }
  }
})();