(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const s=document.querySelectorAll(".reviews-item"),u=document.querySelector(".prev"),a=document.querySelector(".next");function l(){return window.innerWidth||document.documentElement.clientWidth}window.addEventListener("resize",()=>{l()>=1280&&s.forEach((n,o)=>n.style.display="list-item")});document.addEventListener("DOMContentLoaded",function(){let n=0;function o(e){s.forEach((t,r)=>{r===e?t.style.display="list-item":t.style.display="none"})}function c(e){s.forEach((t,r)=>{r===e||r===(e+1)%s.length?t.style.display="list-item":t.style.display="none"})}u.addEventListener("click",function(){n=(n-1+s.length)%s.length;const e=l();e<768&&o(n),e>=768&&e<1280&&c(n)}),a.addEventListener("click",function(){n=(n+1)%s.length;const e=l();e<768&&o(n),e>=768&&e<1280&&c(n)}),window.addEventListener("resize",function(){const e=l();e<768&&o(n),e>=768&&e<1280&&c(n)});const i=l();i<768&&o(n),i>=768&&i<1280&&c(n)});(()=>{const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),i=()=>{const e=n.querySelectorAll('a[href*="#"]'),t=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!t),n.classList.toggle("is-open");const r=t?"enableBodyScroll":"disableBodyScroll";if(bodyScrollLock[r](document.body),e.length!==0){if(!t){e.forEach(d=>{d.addEventListener("click",i)});return}e.forEach(d=>{d.removeEventListener("click",i)})}};o.addEventListener("click",i),c.addEventListener("click",i),window.matchMedia("(min-width: 375px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
//# sourceMappingURL=commonHelpers.js.map
