// ==UserScript==
// @name         Fireglass Fix
// @description  Routes around fire.glass for whitelisted websites
// @author       dezzak
// @include      https://eu-west-email-isolation.prod.fire.glass/*
// @run-at       document-start
// @updateURL    https://github.com/dezzak/fireglass-fix/raw/master/fireglass-fix.user.js
// @downloadURL  https://github.com/dezzak/fireglass-fix/raw/master/fireglass-fix.user.js
// @version      0.1
// ==/UserScript==

(function() {
  'use strict';
  const fireglassUrl = window.location;
  console.debug("Got URL", fireglassUrl);
})();