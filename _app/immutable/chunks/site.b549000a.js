import{a0 as a}from"./index.4fbdcc61.js";function _(o){const t=o-1;return t*t*t+1}function $(o,{delay:t=0,duration:i=400,easing:r=_,x:c=0,y:l=0,opacity:p=0}={}){const s=getComputedStyle(o),e=+s.opacity,u=s.transform==="none"?"":s.transform,f=e*(1-p),[m,y]=a(c),[d,g]=a(l);return{delay:t,duration:i,easing:r,css:(n,h)=>`
			transform: ${u} translate(${(1-n)*m}${y}, ${(1-n)*d}${g});
			opacity: ${e-f*h}`}}const A={protocol:{}.URARA_SITE_PROTOCOL??!1?"http://":"https://",domain:{}.URARA_SITE_DOMAIN??"luisrioscode.xyz",title:"luisrioscode",subtitle:"Welcome to my coding blog portfolio site",lang:"en-US",description:"Me especializo en solucionar problemas y coleccionar plantas 🌺",author:{avatar:"/assets/elpatron@640.jpeg",name:"luisrioscode",status:"🦩",bio:`
      🇲🇽 Software Engineer 🧑🏻‍💻
      <br>
      I really wish I was playing Tears of The Kindom right now!
    `},themeColor:"#3D4451"};export{$ as f,A as s};
