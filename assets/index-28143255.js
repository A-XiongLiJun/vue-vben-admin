var y=Object.defineProperty,b=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var f=(i,e,t)=>e in i?y(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,u=(i,e)=>{for(var t in e||(e={}))k.call(e,t)&&f(i,t,e[t]);if(d)for(var t of d(e))w.call(e,t)&&f(i,t,e[t]);return i},h=(i,e)=>b(i,v(e));var _=(i,e,t)=>new Promise((l,n)=>{var s=r=>{try{a(t.next(r))}catch(m){n(m)}},o=r=>{try{a(t.throw(r))}catch(m){n(m)}},a=r=>r.done?l(r.value):Promise.resolve(r.value).then(s,o);a((t=t.apply(i,e)).next())});import"./TableImg.vue_vue_type_style_index_0_lang-6b84e031.js";import{T as C}from"./componentMap-18b2c803.js";import{g as T}from"./system-82075152.js";import{P as A}from"./index-33f885a5.js";import S from"./DeptTree-ca3039d7.js";import{d as B}from"./account.data-cce96674.js";import{V as P}from"./index-d270ebf5.js";import{d as R,f as g,r as V,Z as I,a8 as N,a9 as x,l as c,$ as q,u as p,ac as z}from"./vue-ea98dac5.js";import"./BasicForm-48304e34.js";import"./FormItem.vue_vue_type_script_lang-2510bf83.js";import"./index.js";import"./antd-201c8368.js";import"./index-10820036.js";import"./useWindowSizeFn-997fa1d0.js";import"./useForm-e6560703.js";import"./RadioButtonGroup-a85e25e5.js";import"./useFormItem-14b12386.js";import"./uuid-a2a47690.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";import"./useSortable-3cb9ef53.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-5b47f6d9.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-eb395492.js";import"./copyTextToClipboard-0177fd68.js";import"./index-55225be0.js";import"./useContentViewHeight-b8e9ee08.js";import"./index-7b1ed2f9.js";import"./useContextMenu-78ae320d.js";const F=[{title:"用户名",field:"account",width:120},{title:"昵称",field:"nickname",width:120},{title:"邮箱",field:"email",width:120},{title:"创建时间",field:"createTime",width:180},{title:"角色",field:"role",width:200},{title:"所属部门",field:"dept",slots:{default:({row:i})=>B[i.dept]}},{title:"备注",field:"remark"},{width:160,title:"操作",align:"center",slots:{default:"action"},fixed:"right"}],H=[{field:"account",title:"用户名",itemRender:{name:"AInput"},span:6},{field:"nickname",title:"昵称",itemRender:{name:"AInput"},span:6},{span:12,align:"right",className:"!pr-0",itemRender:{name:"AButtonGroup",children:[{props:{type:"primary",content:"查询",htmlType:"submit"},attrs:{class:"mr-2"}},{props:{type:"default",htmlType:"reset",content:"重置"}}]}}],j={class:"m-4 vxebasic-form-container"},_e=R({__name:"index",setup(i){const e=g(),t=g(),l=V({id:"VxeTable",keepSource:!0,columns:F,formConfig:{enabled:!0,items:H},height:"auto",proxyConfig:{ajax:{query:r=>_(this,[r],function*({page:o,form:a}){return T(h(u({page:o.currentPage,pageSize:o.pageSize},a),{searchInfo:t.value}))})}}}),n=(o="")=>{t.value=o,e.value&&e.value.commitProxy("query")},s=o=>[{label:"详情",onClick:()=>{}},{label:"编辑",onClick:()=>{}},{label:"删除",color:"error",popConfirm:{title:"是否确认删除",confirm:()=>{var r;(r=e.value)==null||r.remove(o)}}}];return(o,a)=>(I(),N(p(A),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:x(()=>[c(S,{class:"w-1/4 xl:w-1/5",onSelect:n}),q("div",j,[c(p(P),z({ref_key:"tableRef",ref:e},l),{action:x(({row:r})=>[c(p(C),{outside:"",actions:s(r)},null,8,["actions"])]),_:1},16)])]),_:1}))}});export{_e as default};
