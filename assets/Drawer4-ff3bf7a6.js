import{B as p,a as m}from"./index-aa2de761.js";import{B as c}from"./BasicForm-48304e34.js";import"./componentMap-18b2c803.js";import{u as l}from"./useForm-e6560703.js";import"./RadioButtonGroup-a85e25e5.js";import{_ as f}from"./index.js";import"./uuid-a2a47690.js";import{d,a7 as s,Z as u,a8 as B,a9 as _,$ as g,l as w,ac as F}from"./vue-ea98dac5.js";import"./antd-201c8368.js";import"./FormItem.vue_vue_type_script_lang-2510bf83.js";import"./index-10820036.js";import"./useWindowSizeFn-997fa1d0.js";import"./useFormItem-14b12386.js";import"./useSortable-3cb9ef53.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-5b47f6d9.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-eb395492.js";import"./copyTextToClipboard-0177fd68.js";import"./index-55225be0.js";const i=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}],h=d({components:{BasicDrawer:p,BasicForm:c},setup(){const[o,{setFieldsValue:r}]=l({labelWidth:120,schemas:i,showActionButtonGroup:!1,actionColOptions:{span:24}}),[t]=m(e=>{r({field2:e.data,field1:e.info})});return{register:t,schemas:i,registerForm:o}}});function D(o,r,t,e,$,C){const a=s("BasicForm"),n=s("BasicDrawer");return u(),B(n,F(o.$attrs,{onRegister:o.register,title:"Drawer Title",width:"50%"}),{default:_(()=>[g("div",null,[w(a,{onRegister:o.registerForm},null,8,["onRegister"])])]),_:1},16,["onRegister"])}const H=f(h,[["render",D]]);export{H as default};
