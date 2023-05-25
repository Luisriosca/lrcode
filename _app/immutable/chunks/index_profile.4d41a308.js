import{S as O,i as R,s as $,k as u,q as I,a as E,l as h,m,r as q,h as n,c as w,n as f,b as p,D as c,E as y,F as J,e as M,$ as K,G as B}from"./index.02fd8880.js";import{s as d}from"./site.96908764.js";function U(i,e,s){const l=i.slice();return l[0]=e[s].text,l[1]=e[s].icon,l[2]=e[s].link,l[3]=e[s].rel,l}function Q(i){let e,s;return{c(){e=u("img"),this.h()},l(l){e=h(l,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){f(e,"class","u-photo rounded-full shadow-xl hover:shadow-2xl transition-shadow z-10 w-24 h-24 md:w-32 md:h-32"),K(e.src,s=d.author.avatar)||f(e,"src",s),f(e,"alt",d.author.name)},m(l,t){p(l,e,t)},p:y,d(l){l&&n(e)}}}function W(i){let e,s=d.author.status+"",l;return{c(){e=u("div"),l=I(s),this.h()},l(t){e=h(t,"DIV",{class:!0});var a=m(e);l=q(a,s),a.forEach(n),this.h()},h(){f(e,"class","absolute z-20 rounded-full w-8 h-8 md:w-10 md:h-10 bottom-0 right-0 bg-base-100 shadow-xl text-lg md:text-xl text-center py-0.5 md:py-1.5")},m(t,a){p(t,e,a),c(e,l)},p:y,d(t){t&&n(e)}}}function X(i){let e,s=d.author.metadata,l=[];for(let t=0;t<s.length;t+=1)l[t]=j(U(i,s,t));return{c(){e=u("div");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=h(t,"DIV",{class:!0});var a=m(e);for(let r=0;r<l.length;r+=1)l[r].l(a);a.forEach(n),this.h()},h(){f(e,"class","flex gap-1 flex-wrap justify-center")},m(t,a){p(t,e,a);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(e,null)},p(t,a){if(a&0){s=d.author.metadata;let r;for(r=0;r<s.length;r+=1){const o=U(t,s,r);l[r]?l[r].p(o,a):(l[r]=j(o),l[r].c(),l[r].m(e,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=s.length}},d(t){t&&n(e),J(l,t)}}}function Y(i){let e,s,l,t=i[1]&&ee(i),a=i[0]&&te(i);return{c(){e=u("button"),t&&t.c(),s=E(),a&&a.c(),l=E(),this.h()},l(r){e=h(r,"BUTTON",{class:!0});var o=m(e);t&&t.l(o),s=w(o),a&&a.l(o),l=w(o),o.forEach(n),this.h()},h(){f(e,"class","btn btn-sm btn-ghost normal-case gap-2"),B(e,"btn-square",!i[0])},m(r,o){p(r,e,o),t&&t.m(e,null),c(e,s),a&&a.m(e,null),c(e,l)},p(r,o){r[1]&&t.p(r,o),r[0]&&a.p(r,o)},d(r){r&&n(e),t&&t.d(),a&&a.d()}}}function Z(i){let e,s,l,t=i[1]&&le(i),a=i[0]&&ae(i);return{c(){e=u("a"),t&&t.c(),s=E(),a&&a.c(),l=E(),this.h()},l(r){e=h(r,"A",{href:!0,rel:!0,class:!0,target:!0});var o=m(e);t&&t.l(o),s=w(o),a&&a.l(o),l=w(o),o.forEach(n),this.h()},h(){f(e,"href",i[2]),f(e,"rel",i[3]??"me noopener noreferrer external"),f(e,"class","btn btn-sm btn-ghost normal-case gap-2 u-url"),f(e,"target","_blank"),B(e,"btn-square",!i[0])},m(r,o){p(r,e,o),t&&t.m(e,null),c(e,s),a&&a.m(e,null),c(e,l)},p(r,o){r[1]&&t.p(r,o),r[0]&&a.p(r,o)},d(r){r&&n(e),t&&t.d(),a&&a.d()}}}function ee(i){let e,s=i[1]+"",l;return{c(){e=u("span"),l=I(s),this.h()},l(t){e=h(t,"SPAN",{class:!0});var a=m(e);l=q(a,s),a.forEach(n),this.h()},h(){f(e,"class",i[1]+" !w-5 !h-5")},m(t,a){p(t,e,a),c(e,l)},p:y,d(t){t&&n(e)}}}function te(i){let e=i[0]+"",s;return{c(){s=I(e)},l(l){s=q(l,e)},m(l,t){p(l,s,t)},p:y,d(l){l&&n(s)}}}function le(i){let e,s=i[1]+"",l;return{c(){e=u("span"),l=I(s),this.h()},l(t){e=h(t,"SPAN",{class:!0});var a=m(e);l=q(a,s),a.forEach(n),this.h()},h(){f(e,"class",i[1]+" !w-5 !h-5")},m(t,a){p(t,e,a),c(e,l)},p:y,d(t){t&&n(e)}}}function ae(i){let e=i[0]+"",s;return{c(){s=I(e)},l(l){s=q(l,e)},m(l,t){p(l,s,t)},p:y,d(l){l&&n(s)}}}function j(i){let e;function s(a,r){return a[2]?Z:Y}let t=s(i)(i);return{c(){t.c(),e=M()},l(a){t.l(a),e=M()},m(a,r){t.m(a,r),p(a,e,r)},p(a,r){t.p(a,r)},d(a){t.d(a),a&&n(e)}}}function re(i){let e,s,l=d.author.name+"",t,a,r,o,G,b,D,z=d.author.name+"",N,P,A,C=d.author.bio+"",T,v=Q(),g=W(),k=d.author.metadata&&X(i);return{c(){e=u("div"),s=u("a"),t=I(l),a=E(),r=u("figure"),v&&v.c(),o=E(),g&&g.c(),G=E(),b=u("div"),D=u("h2"),N=I(z),P=E(),A=u("p"),T=E(),k&&k.c(),this.h()},l(x){e=h(x,"DIV",{class:!0});var _=m(e);s=h(_,"A",{href:!0,class:!0});var F=m(s);t=q(F,l),F.forEach(n),a=w(_),r=h(_,"FIGURE",{class:!0});var V=m(r);v&&v.l(V),o=w(V),g&&g.l(V),V.forEach(n),G=w(_),b=h(_,"DIV",{class:!0});var S=m(b);D=h(S,"H2",{class:!0});var H=m(D);N=q(H,z),H.forEach(n),P=w(S),A=h(S,"P",{class:!0});var L=m(A);L.forEach(n),T=w(S),k&&k.l(S),S.forEach(n),_.forEach(n),this.h()},h(){f(s,"href",d.protocol+d.domain),f(s,"class","hidden u-url u-uid"),f(r,"class","relative mx-auto group"),f(D,"class","text-2xl font-bold mt-0 mb-2 p-name"),f(A,"class","opacity-75 p-note"),f(b,"class","text-center flex flex-col gap-2"),f(e,"class","h-card flex flex-col gap-4 sticky top-24 card card-body p-4 items-right xl:border-2 xl:py-8 border-base-content/10 xl:ml-auto xl:mr-8 xl:max-w-xs")},m(x,_){p(x,e,_),c(e,s),c(s,t),c(e,a),c(e,r),v&&v.m(r,null),c(r,o),g&&g.m(r,null),c(e,G),c(e,b),c(b,D),c(D,N),c(b,P),c(b,A),A.innerHTML=C,c(b,T),k&&k.m(b,null)},p(x,[_]){v.p(x,_),g.p(x,_),d.author.metadata&&k.p(x,_)},i:y,o:y,d(x){x&&n(e),v&&v.d(),g&&g.d(),k&&k.d()}}}class oe extends O{constructor(e){super(),R(this,e,null,re,$,{})}}export{oe as I};