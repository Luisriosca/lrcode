import{a1 as l,a2 as h}from"./index.02fd8880.js";function S(o){const t=o-1;return t*t*t+1}function $(o,{delay:t=0,duration:e=400,easing:s=h}={}){const a=+getComputedStyle(o).opacity;return{delay:t,duration:e,easing:s,css:n=>`opacity: ${n*a}`}}function U(o,{delay:t=0,duration:e=400,easing:s=S,x:a=0,y:n=0,opacity:p=0}={}){const r=getComputedStyle(o),i=+r.opacity,u=r.transform==="none"?"":r.transform,f=i*(1-p),[y,m]=l(a),[d,g]=l(n);return{delay:t,duration:e,easing:s,css:(c,b)=>`
			transform: ${u} translate(${(1-c)*y}${m}, ${(1-c)*d}${g});
			opacity: ${i-f*b}`}}const w={protocol:{}.URARA_SITE_PROTOCOL??!1?"http://":"https://",domain:{}.URARA_SITE_DOMAIN??"urara-demo.netlify.app",title:"luisrioscode",subtitle:"Welcome to my coding blog portfolio site",lang:"en-US",description:"Powered by SvelteKit/Urara",author:{avatar:"/assets/elpatron@640.jpeg",name:"luisrioscode",status:"🦩",bio:`
      🇲🇽 Software Engineer 🧑🏻‍💻
      <br>
        -------------
      <br>
      I really wish I was playing Tears of The Kindom right now!
    `},themeColor:"#3D4451"};export{$ as a,U as f,w as s};
