// ==UserScript==
// @name         AnimeFLV
// @version      1
// @match        http*://animeflv.net/ver/*
// @run-at document-load
// @grant unsafeWindow
// @grant GM_addStyle
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_xmlhttpRequest
// @grant GM_registerMenuCommand
// @grant GM_deleteValue
// @grant GM_listValues
// @grant GM_getResourceText
// @grant GM_getResourceURL
// @grant GM_log
// @grant GM_openInTab
// @grant GM_setClipboard
// @grant GM_info
// @grant GM_getMetadata
// ==/UserScript==

(function() {
    'use strict';
    var list = document.getElementsByClassName("Button Sm fa-download");
    for(var i = 0; i < list.length; i++)
    {
        list[i].href=decodeURIComponent(list[i].href.split('=')[1]);
        list[i].target = "_blank";
    }
})();
