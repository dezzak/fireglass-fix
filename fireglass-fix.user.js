// ==UserScript==
// @name         Fireglass Fix
// @description  Routes around fire.glass for whitelisted websites
// @author       dezzak
// @include      https://eu-west-email-isolation.prod.fire.glass/*
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/dezzak/fireglass-fix/master/fireglass-fix.user.js
// @downloadURL  https://raw.githubusercontent.com/dezzak/fireglass-fix/master/fireglass-fix.user.js
// ==/UserScript==

(function() {
  'use strict';
  const fireglassUrl = window.location;
  console.debug("Got URL", fireglassUrl);
})();