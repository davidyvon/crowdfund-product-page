(()=>{var e={439:()=>{var e=document.getElementById("modalHeader"),t=document.getElementById("nav"),c=document.querySelectorAll(".nav__link"),n=document.getElementById("menuOpen"),i=document.getElementById("menuClose");function d(){n.classList.toggle("active"),i.classList.toggle("active"),t.classList.toggle("active"),e.classList.toggle("active")}n.addEventListener("click",d),i.addEventListener("click",d),c.forEach((function(e){return e.addEventListener("click",d)}))},804:()=>{var e=document.getElementById("backThisProject"),t=document.getElementById("noRewardItem"),c=document.getElementById("productsModal"),n=document.getElementById("closeModal"),i=document.getElementById("confirmModal"),d=document.getElementById("confirmButton"),a=document.getElementById("bambooEditionItem"),o=document.getElementById("blackEditionItem"),l=document.getElementById("payoutBlackEdition"),s=document.getElementById("payoutBambooEdition"),m=document.getElementById("selectBambooEdition"),I=document.getElementById("selectBlackEdition"),u=document.querySelector(".progress-bar--progression"),r=u.dataset.done;r=89,u.style.width="".concat(r,"%");var v=document.getElementById("fundingAmount");function y(e){var t=document.getElementById("totalBacker"),c=parseFloat(v.innerHTML.replace(/\$/,""))+parseFloat(e);v.innerHTML="$".concat(c.toFixed(3));var n=parseFloat(t.innerHTML)+parseFloat(.001);t.innerHTML=n.toFixed(3),r=0;var i=Number(r)+c;u.style.width="".concat(i,"%")}function g(e){e.classList.add("active")}e.addEventListener("click",(function(){c.classList.add("active")})),n.addEventListener("click",(function(){c.classList.remove("active")})),m.addEventListener("click",(function(){a.checked=!0,g(c)})),I.addEventListener("click",(function(){o.checked=!0,g(c)})),d.addEventListener("click",(function(){i.classList.remove("active"),c.classList.remove("active")})),t.addEventListener("click",(function(){t.checked&&(i.classList.toggle("active"),y(0))})),s.addEventListener("click",(function(){var e=document.getElementById("payoutAmountBamboo"),t=e.value/1e3;a.checked&&e.value>=25?(i.classList.add("active"),y(t)):alert("Pledge must be at least $25")})),l.addEventListener("click",(function(){var e=document.getElementById("payoutAmountBlack"),t=e.value/1e3;o.checked&&e.value>=75?(i.classList.add("active"),y(t)):alert("Pledge must be at least $75")}))},836:e=>{"use strict";e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAyMzQgMjM0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPjxnPjxjaXJjbGUgY3g9IjExNi42NjciIGN5PSIxMTYuNjY3IiByPSIxMTYuNjY3IiBzdHlsZT0iZmlsbDojMTQ3Yjc0OyIvPjxwYXRoIGQ9Ik05NS44MzMsNzkuMTY3bDAsNzVsMjAuODM0LC0yMS4wNzVsMjAuODMzLDIxLjA3NWwwLC03NWwtNDEuNjY3LC0wWiIgc3R5bGU9ImZpbGw6I2ZmZjsiLz48L2c+PC9zdmc+"},312:e=>{"use strict";e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiMyRjJGMkYiIGN4PSIyOCIgY3k9IjI4IiByPSIyOCIvPjxwYXRoIGZpbGw9IiNCMUIxQjEiIGQ9Ik0yMyAxOXYxOGw1LTUuMDU4TDMzIDM3VjE5eiIvPjwvZz48L3N2Zz4="}},t={};function c(n){var i=t[n];if(void 0!==i)return i.exports;var d=t[n]={exports:{}};return e[n](d,d.exports,c),d.exports}(()=>{"use strict";c(439),c(804);var e=c(836),t=c(312),n=document.getElementById("toggle"),i=document.getElementById("toggleIcon"),d=document.getElementById("toggleText");d.innerText="Bookmark",i.src=t,n.addEventListener("click",(function(){n.classList.contains("active")?(n.classList.remove("active"),d.innerText="Bookmark",i.src=t):(n.classList.add("active"),d.innerText="Bookmarked",i.src=e)}))})()})();