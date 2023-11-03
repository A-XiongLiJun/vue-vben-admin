var f=(e,l,n)=>new Promise((c,r)=>{var u=o=>{try{a(n.next(o))}catch(s){r(s)}},t=o=>{try{a(n.throw(o))}catch(s){r(s)}},a=o=>o.done?c(o.value):Promise.resolve(o.value).then(u,t);a((n=n.apply(e,l)).next())});import{B}from"./BasicForm-48304e34.js";import"./componentMap-18b2c803.js";import{u as b}from"./useForm-e6560703.js";import"./RadioButtonGroup-a85e25e5.js";import{C as P,_ as C}from"./index.js";import"./uuid-a2a47690.js";import{P as _}from"./index-33f885a5.js";import{d as F,a7 as d,Z as g,a8 as k,a9 as p,$ as W,l as i,E as m}from"./vue-ea98dac5.js";import"./FormItem.vue_vue_type_script_lang-2510bf83.js";import"./antd-201c8368.js";import"./index-10820036.js";import"./useWindowSizeFn-997fa1d0.js";import"./useFormItem-14b12386.js";import"./useSortable-3cb9ef53.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-5b47f6d9.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-eb395492.js";import"./copyTextToClipboard-0177fd68.js";import"./index-55225be0.js";import"./useContentViewHeight-b8e9ee08.js";import"./onMountedOrActivated-3eb95ecd.js";const h=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"字段4必填"}]:[],componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"字段11",colProps:{span:8}},{field:"field5",component:"Switch",label:"是否显示字段1(css控制)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"是否显示字段2(dom控制)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"是否禁用字段3",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"字段4是否必填",colProps:{span:8},labelWidth:200}],w=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"同步f2的值为f1",onChange:l=>{e.f2=l.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e})=>({placeholder:"值改变时执行查询,查看控制台",onChange:()=>f(void 0,null,function*(){const{validate:l}=e;yield l()})})}],S=F({components:{BasicForm:B,CollapseContainer:P,PageWrapper:_},setup(){const[e,{setProps:l,updateSchema:n,appendSchemaByField:c,removeSchemaByField:r}]=b({labelWidth:120,schemas:h,actionColOptions:{span:24}}),[u]=b({labelWidth:120,schemas:w,actionColOptions:{span:24}});function t(){n({field:"field3",label:"字段3 New"})}function a(){n([{field:"field3",label:"字段3 New++"},{field:"field4",label:"字段4 New++"}])}function o(){c({field:"field10",label:"字段10",component:"Input",colProps:{span:8}},"field3")}function s(){r("field11")}return{register:e,register1:u,schemas:h,setProps:l,changeLabel3:t,changeLabel34:a,appendField:o,deleteField:s}}}),y={class:"mb-4"};function D(e,l,n,c,r,u){const t=d("a-button"),a=d("BasicForm"),o=d("CollapseContainer"),s=d("PageWrapper");return g(),k(s,{title:"动态表单示例"},{default:p(()=>[W("div",y,[i(t,{onClick:e.changeLabel3,class:"mr-2"},{default:p(()=>[m(" 更改字段3label ")]),_:1},8,["onClick"]),i(t,{onClick:e.changeLabel34,class:"mr-2"},{default:p(()=>[m(" 同时更改字段3,4label ")]),_:1},8,["onClick"]),i(t,{onClick:e.appendField,class:"mr-2"},{default:p(()=>[m(" 往字段3后面插入字段10 ")]),_:1},8,["onClick"]),i(t,{onClick:e.deleteField,class:"mr-2"},{default:p(()=>[m(" 删除字段11 ")]),_:1},8,["onClick"])]),i(o,{title:"动态表单示例,动态根据表单内其他值改变"},{default:p(()=>[i(a,{onRegister:e.register},null,8,["onRegister"])]),_:1}),i(o,{class:"mt-5",title:"componentProps动态改变"},{default:p(()=>[i(a,{onRegister:e.register1},null,8,["onRegister"])]),_:1})]),_:1})}const Y=C(S,[["render",D]]);export{Y as default};
