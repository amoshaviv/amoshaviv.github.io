(this.webpackJsonpcalc=this.webpackJsonpcalc||[]).push([[0],{58:function(e,a,t){e.exports=t(69)},69:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(8),m=t.n(i),c=t(108),l=t(107),s=t(37),o=t(48),u=Object(o.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:s.a.A400},background:{default:"#fff"}}}),f=t(40),x=t(106),d=t(111),g=t(112),b=t(103),v=t(109);var p=function(e){e.setConfig;var a=e.config,t=a.beams?a.beams.join(","):"";return r.a.createElement(d.a,{pt:2,pb:1},r.a.createElement("form",{method:"get",id:"toolbar"},r.a.createElement(b.a,{container:!0,spacing:1},r.a.createElement(b.a,{item:!0,xs:12,sm:12,md:4,lg:4},r.a.createElement(v.a,{id:"beams",name:"beams",fullWidth:!0,label:"Beams",defaultValue:t,variant:"outlined"})),r.a.createElement(b.a,{item:!0,xs:12,sm:12,md:4,lg:4},r.a.createElement(v.a,{id:"maximumRings",name:"maximumRings",fullWidth:!0,label:"Maximum Rings",defaultValue:a.maximumRings,variant:"outlined"})),r.a.createElement(b.a,{item:!0,xs:12,sm:12,md:4,lg:4},r.a.createElement(v.a,{id:"maximumBeams",name:"maximumBeams",fullWidth:!0,label:"Maximum Beams",defaultValue:a.maximumBeams,variant:"outlined"})),r.a.createElement(b.a,{item:!0,xs:12,sm:12,md:12,lg:12},r.a.createElement(g.a,{fullWidth:!0,size:"large",variant:"outlined",type:"submit"},"Update")))))},h=t(4);var E=function(){for(var e=[],a=[],t=0;t<=40;t++)e.push({x1:t/20,y1:0,x2:t/20,y2:2}),a.push({y1:t/20,x1:0,y2:t/20,x2:2});return e.concat(a)}();var y=Object(h.a)((function(e){return{line:{},text:{letterSpacing:"normal"}}}))((function(e){var a=e.classes;return r.a.createElement(r.a.Fragment,null,E.map((function(e,t){return[r.a.createElement("line",{key:"grid-line-".concat(t),x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,stroke:"rgba(0,0,0,0.2)",strokeWidth:"0.001",className:a.line}),r.a.createElement("text",{key:"grid-line-text-".concat(t),className:a.text,x:e.x1,y:2-e.y1,fontSize:"0.02"},((e.y1||e.x1)-1).toFixed(2))]})),")}")})),B=t(114);var w=Object(h.a)((function(e){return{circle:{"&:hover":{fill:"red"}}}}))((function(e){var a=e.circles,t=e.classes;return a.map((function(e){return r.a.createElement(B.a,{title:"b: ".concat(e.numberOfBeams," | cx: ").concat((e.cx-1).toFixed(3)," | cy: ").concat((1-e.cy).toFixed(3)," | beam: ").concat((e.beam+1).toFixed(0)," | ring: ").concat(e.ring.toFixed(0)," | rad: ").concat(e.radius.toFixed(4)),"aria-label":"circle-a".concat(e.numberOfBeams,"-b").concat(e.beam,"-r").concat(e.ring)},r.a.createElement("circle",{className:t.circle,key:"circle-a".concat(e.numberOfBeams,"-b").concat(e.beam,"-r").concat(e.ring),fill:"rgba(0,0,0,0.1)",cx:e.cx,cy:e.cy,r:e.radius}))}))}));var N=function(e){e.config;var a=e.circles,t=Object(n.useRef)(null);return r.a.createElement("svg",{viewBox:"0 0 2 2",xmlns:"http://www.w3.org/2000/svg",ref:t},r.a.createElement(w,{circles:a}),r.a.createElement(y,null))},O={beams:[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97],maximumRings:1},j=t(47),k=t.n(j);var R=function(){var e=function(){var e={},a=k.a.parse(window.location.search,{ignoreQueryPrefix:!0});if(a){if(a.beams&&(e.beams=a.beams.split(",").map((function(e){return Number.parseInt(e)})).filter((function(e){return!isNaN(e)}))),a.maximumBeams){var t=Number.parseInt(a.maximumBeams);isNaN(t)||(e.maximumBeams=t)}if(a.maximumRings){var n=Number.parseInt(a.maximumRings);isNaN(n)||(e.maximumRings=n)}a.rings&&(e.rings=a.rings.split(",").map((function(e){return Number.parseInt(e)})).filter((function(e){return!isNaN(e)})))}return e}(),a=Object.assign({},O,e),t=Object(n.useState)(a),i=Object(f.a)(t,2),m=i[0],c=i[1],l=a.beams.reduce((function(e,t){return e.concat(function(e,a){for(var t=[],n=Math.PI/e,r=Math.sin(n),i=(1-r)/(1+r),m=1/(1+r),c=r/(1+r),l=a.maximumBeams?Math.min(a.maximumBeams,e):e,s=0;s<a.maximumRings;s++){for(var o=0;o<l;o++){var u=1+m*Math.cos(2*n*o),f=1+m*Math.sin(2*n*o);t.push({cy:f,cx:u,radius:c,beam:o,angle:n,ring:s,numberOfBeams:e,distanceFromCenter:m})}c*=i,m*=i}return t}(t,a))}),[]),s=Object(n.useState)(l),o=Object(f.a)(s,2),u=o[0];return o[1],r.a.createElement(x.a,null,r.a.createElement(p,{config:m,setConfig:c}),r.a.createElement(N,{config:m,circles:u}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,{theme:u},r.a.createElement(c.a,null),r.a.createElement(R,null)),","),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.76306e27.chunk.js.map