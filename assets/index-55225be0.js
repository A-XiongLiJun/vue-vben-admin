var m=(t,o,n)=>new Promise((a,u)=>{var l=e=>{try{r(n.next(e))}catch(c){u(c)}},s=e=>{try{r(n.throw(e))}catch(c){u(c)}},r=e=>e.done?a(e.value):Promise.resolve(e.value).then(l,s);r((n=n.apply(t,o)).next())});import{t as $,k as B,m as b,_ as v,f as I,w as C}from"./index.js";import{f as d,u as i,d as S,c as h,h as z,a7 as p,Z as y,a8 as _,a9 as f,E as F,a0 as k,ac as g,ad as A,aa as N,N as T,ai as j,aj as D,l as O}from"./vue-ea98dac5.js";import{B as P}from"./antd-201c8368.js";import{u as E}from"./useFormItem-14b12386.js";function R(t){const o=d(t),n=d(!1);let a;function u(){a&&window.clearInterval(a)}function l(){n.value=!1,u(),a=null}function s(){i(n)||a||(n.value=!0,a=setInterval(()=>{i(o)===1?(l(),o.value=t):o.value-=1},1e3))}function r(){o.value=t,l()}function e(){r(),s()}return $(()=>{r()}),{start:s,reset:r,restart:e,clear:u,stop:l,currentCount:o,isStart:n}}const V={value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},L=S({name:"CountButton",components:{Button:P},props:V,setup(t){const o=d(!1),{currentCount:n,isStart:a,start:u,reset:l}=R(t.count),{t:s}=B(),r=h(()=>i(a)?s("component.countdown.sendText",[i(n)]):s("component.countdown.normalText"));z(()=>{t.value===void 0&&l()});function e(){return m(this,null,function*(){const{beforeStartFunc:c}=t;if(c&&b(c)){o.value=!0;try{(yield c())&&u()}finally{o.value=!1}}else u()})}return{handleStart:e,currentCount:n,loading:o,getButtonText:r,isStart:a}}});function U(t,o,n,a,u,l){const s=p("Button");return y(),_(s,g(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:f(()=>[F(k(t.getButtonText),1)]),_:1},16,["disabled","onClick","loading"])}const w=v(L,[["render",U]]),Z={value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},q=S({name:"CountDownInput",components:{CountButton:w},inheritAttrs:!1,props:Z,setup(t){const{prefixCls:o}=I("countdown-input"),[n]=E(t);return{prefixCls:o,state:n}}});function G(t,o,n,a,u,l){const s=p("CountButton"),r=p("a-input");return y(),_(r,g(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),A({addonAfter:f(()=>[O(s,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])]),_:2},[N(Object.keys(t.$slots).filter(e=>e!=="addonAfter"),e=>({name:e,fn:f(c=>[T(t.$slots,e,j(D(c||{})))])}))]),1040,["class","size","value"])}const H=v(q,[["render",G]]),Y=C(H);C(w);export{Y as C};
