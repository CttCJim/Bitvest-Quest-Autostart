// ==UserScript==
// @name         BV Quest Auto Start
// @namespace    go
// @version      1.0
// @description  Autostarts quests on bitvest.io when they are available
// @author       CttCJim
// @match      https://bitvest.io/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(
       function(){
            if(typeof(document.getElementsByClassName("quest-time-break")[0].innerHTML) !== "undefined")
            {
                var timeLeft = document.getElementsByClassName("quest-time-break")[0].innerHTML;
                // console.log(timeLeft);
                timeLeft = Date.parse("01/01/2011 "+timeLeft);
                if(timeLeft < Date.parse("01/01/2011 12:00"))
                {
                    //console.log("Would trigger here");
                    var questButton = document.getElementsByClassName("submit side-input blue medium");
                    questButton[0].click();
                }
                else
                {
                    // console.log("Not ready for quests.");
                }
            }
        }
        ,60000); // 60 seconds between checks

})();
