var h=Object.defineProperty,w=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var M=(e,o,t)=>o in e?h(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,C=(e,o)=>{for(var t in o||(o={}))V.call(o,t)&&M(e,t,o[t]);if(c)for(var t of c(o))g.call(o,t)&&M(e,t,o[t]);return e},v=(e,o)=>w(e,A(o));var F=(e,o,t)=>new Promise((l,i)=>{var u=n=>{try{r(t.next(n))}catch(m){i(m)}},s=n=>{try{r(t.throw(n))}catch(m){i(m)}},r=n=>n.done?l(n.value):Promise.resolve(n.value).then(u,s);r((t=t.apply(e,o)).next())});import k from"./index-029aa1cb.js";import{a as D}from"./index-73102f02.js";import S from"./JsonModal-84cb069c.js";import{M as U}from"./antd-201c8368.js";import{d as $,f as y,r as B,G as E,a7 as f,Z as G,a8 as J,a9 as b,l as d}from"./vue-ea98dac5.js";import{_ as O}from"./index.js";import"./FormRender-a0d74574.js";import"./index-643cf604.js";import"./formItemConfig-ee3776d6.js";import"./componentMap-18b2c803.js";import"./useFormItem-14b12386.js";import"./RadioButtonGroup-a85e25e5.js";import"./uuid-a2a47690.js";import"./index-10820036.js";import"./useWindowSizeFn-997fa1d0.js";import"./useSortable-3cb9ef53.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-5b47f6d9.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-eb395492.js";import"./copyTextToClipboard-0177fd68.js";import"./index-55225be0.js";import"./useFormDesignState-2b7717e9.js";import"./PreviewCode-e2118b4f.js";import"./index-de9d57d2.js";const N=$({name:"VFormPreview",components:{JsonModal:S,VFormCreate:k,Modal:U},setup(){const e=y(null),o=B({formModel:{},formConfig:{},visible:!1,fApi:{}}),t=r=>{D(r.schemas),o.formConfig=r,o.visible=!0},l=()=>{o.visible=!1,o.formModel={}},i=()=>F(this,null,function*(){var n,m,a,p;const r=yield(m=(n=o.fApi).submit)==null?void 0:m.call(n);(p=(a=e.value)==null?void 0:a.showModal)==null||p.call(a,r)}),u=r=>{},s=()=>{o.formModel={}};return v(C({handleGetData:i,handleCancel:l},E(o)),{showModal:t,jsonModal:e,onSubmit:u,onCancel:s})}});function P(e,o,t,l,i,u){const s=f("a-input"),r=f("VFormCreate"),n=f("JsonModal"),m=f("Modal");return G(),J(m,{title:"预览(支持布局)",open:e.visible,onOk:e.handleGetData,onCancel:e.handleCancel,okText:"获取数据",cancelText:"关闭",style:{top:"20px"},destroyOnClose:!0,width:900},{default:b(()=>[d(r,{"form-config":e.formConfig,fApi:e.fApi,"onUpdate:fApi":o[0]||(o[0]=a=>e.fApi=a),formModel:e.formModel,"onUpdate:formModel":o[1]||(o[1]=a=>e.formModel=a),onSubmit:e.onSubmit},{slotName:b(({formModel:a,field:p})=>[d(s,{value:a[p],"onUpdate:value":_=>a[p]=_,placeholder:"我是插槽传递的输入框"},null,8,["value","onUpdate:value"])]),_:1},8,["form-config","fApi","formModel","onSubmit"]),d(n,{ref:"jsonModal"},null,512)]),_:1},8,["open","onOk","onCancel"])}const uo=O(N,[["render",P]]);export{uo as default};
