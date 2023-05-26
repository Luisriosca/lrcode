import{a0 as n}from"./index.4fbdcc61.js";function _(o){const t=o-1;return t*t*t+1}function $(o,{delay:t=0,duration:r=400,easing:i=_,x:c=0,y:l=0,opacity:p=0}={}){const s=getComputedStyle(o),e=+s.opacity,u=s.transform==="none"?"":s.transform,f=e*(1-p),[m,y]=n(c),[d,g]=n(l);return{delay:t,duration:r,easing:i,css:(a,h)=>`
			transform: ${u} translate(${(1-a)*m}${y}, ${(1-a)*d}${g});
			opacity: ${e-f*h}`}}const b={protocol:{}.URARA_SITE_PROTOCOL??!1?"http://":"https://",domain:{}.URARA_SITE_DOMAIN??"luisrioscode.xyz",title:"luisrioscode",subtitle:"Ingeniero de Software y amante de las plantas",lang:"es-MX",description:"Me especializo en solucionar problemas y coleccionar plantas 🌺",author:{avatar:"/assets/elpatron@640.jpeg",name:"luisrioscode",status:"🦩",bio:`
      🇲🇽 Software Engineer≥ 🧑🏻‍💻
      <br>
      I really wish I was playing Tears of The Kindom right now!
    `},themeColor:"#3D4451"};export{$ as f,b as s};
