import g from"./index-643cf604.js";import{d as C,a7 as t,Z as r,a8 as n,a9 as s,_ as a,F as p,aa as i,ad as y,N as R}from"./vue-ea98dac5.js";import{R as $,K as k}from"./antd-201c8368.js";import{_ as v}from"./index.js";import"./formItemConfig-ee3776d6.js";import"./componentMap-18b2c803.js";import"./useFormItem-14b12386.js";import"./RadioButtonGroup-a85e25e5.js";import"./uuid-a2a47690.js";import"./index-10820036.js";import"./useWindowSizeFn-997fa1d0.js";import"./useSortable-3cb9ef53.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-5b47f6d9.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-eb395492.js";import"./copyTextToClipboard-0177fd68.js";import"./index-55225be0.js";import"./index-73102f02.js";import"./useFormDesignState-2b7717e9.js";const D=C({name:"FormRender",components:{VFormItem:g,Row:$,Col:k},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,default:()=>({})},formConfig:{type:Object,default:()=>[]},setFormModel:{type:Function,default:null}},emits:["change","submit","reset"],setup(o){}});function M(o,e,b,w,N,P){const l=t("FormRender",!0),f=t("Col"),d=t("Row"),u=t("VFormItem");return["Grid"].includes(o.schema.component)?(r(),n(d,{key:0,class:"grid-row"},{default:s(()=>[(r(!0),a(p,null,i(o.schema.columns,(m,c)=>(r(),n(f,{class:"grid-col",key:c,span:m.span},{default:s(()=>[(r(!0),a(p,null,i(m.children,(F,h)=>(r(),n(l,{key:h,schema:F,formData:o.formData,formConfig:o.formConfig,setFormModel:o.setFormModel},null,8,["schema","formData","formConfig","setFormModel"]))),128))]),_:2},1032,["span"]))),128))]),_:1})):(r(),n(u,{key:1,formConfig:o.formConfig,schema:o.schema,formData:o.formData,setFormModel:o.setFormModel,onChange:e[0]||(e[0]=m=>o.$emit("change",{schema:o.schema,value:m})),onSubmit:e[1]||(e[1]=m=>o.$emit("submit",o.schema)),onReset:e[2]||(e[2]=m=>o.$emit("reset"))},y({_:2},[o.schema.componentProps&&o.schema.componentProps.slotName?{name:o.schema.componentProps.slotName,fn:s(()=>[R(o.$slots,o.schema.componentProps.slotName)]),key:"0"}:void 0]),1032,["formConfig","schema","formData","setFormModel"]))}const W=v(D,[["render",M]]);export{W as default};
