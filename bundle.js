(()=>{var e={14:e=>{e.exports=class{constructor(e){this.amountDue=e,this.cashTendered=0}insertCoin(e){switch(e){case"quarter":this.cashTendered+=25;break;case"dime":this.cashTendered+=10;break;case"nickel":this.cashTendered+=5;break;case"penny":this.cashTendered+=1}}isPaymentSufficient(){switch(this.cashTendered>=this.amountDue){case!0:return!0;case!1:return!1}}giveChange(){let e=this.amountDue-this.cashTendered,t=0,n=0,i=0,s=0;for(console.log(e);e>0;)e>=25?(t++,e-=25):e>=10?(n++,e-=10):e>=5?(i++,e-=5):(s++,e-=1);return{quarters:t,dimes:n,nickels:i,pennies:s}}}},11:e=>{e.exports=function e(t){return t<0?"-"+e(-t):"$"+(t/100).toFixed(2)}}},t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}(()=>{const e=n(14),t=n(11);let i=new e(0);!function(){const n=document.getElementById("vendingForm"),s=document.getElementById("amountDue"),r=document.getElementById("coins"),d=document.getElementById("cashTendered"),c=document.getElementById("paymentSufficient"),a=document.getElementById("getChangeButton"),u=document.getElementById("change"),o=u.querySelectorAll(".change-count"),h=document.getElementById("resetButton");function m(){d.innerText=t(i.cashTendered);const e=0!==i.amountDue&&i.isPaymentSufficient();c.hidden=!e,a.disabled=!e,u.hidden=!0}s.addEventListener("change",(()=>{const t=Math.round(100*s.value);i=new e(t),m()})),r.addEventListener("click",(e=>{let t=e.target.getAttribute("data-type");t&&(i.insertCoin(t),m())})),n.addEventListener("submit",(e=>{if(e.preventDefault(),i.isPaymentSufficient){const e=i.giveChange();o[0].innerText=e.quarters,o[1].innerText=e.dimes,o[2].innerText=e.nickels,o[3].innerText=e.pennies,u.hidden=!1}})),h.addEventListener("click",(()=>{s.value="",i=new e(0),m()})),m()}()})()})();