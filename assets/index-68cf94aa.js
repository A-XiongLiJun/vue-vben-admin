var c=(e,a,o)=>new Promise((n,p)=>{var l=t=>{try{s(o.next(t))}catch(i){p(i)}},u=t=>{try{s(o.throw(t))}catch(i){p(i)}},s=t=>t.done?n(t.value):Promise.resolve(t.value).then(l,u);s((o=o.apply(e,a)).next())});import{B as d}from"./BasicForm-48304e34.js";import"./componentMap-18b2c803.js";import{u as b}from"./useForm-e6560703.js";import"./RadioButtonGroup-a85e25e5.js";import{b as f,_}from"./index.js";import"./uuid-a2a47690.js";import{P}from"./index-33f885a5.js";import{d as g,a7 as m,Z as F,a8 as h,a9 as C,l as B}from"./vue-ea98dac5.js";import"./FormItem.vue_vue_type_script_lang-2510bf83.js";import"./antd-201c8368.js";import"./index-10820036.js";import"./useWindowSizeFn-997fa1d0.js";import"./useFormItem-14b12386.js";import"./useSortable-3cb9ef53.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-5b47f6d9.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-eb395492.js";import"./copyTextToClipboard-0177fd68.js";import"./index-55225be0.js";import"./useContentViewHeight-b8e9ee08.js";import"./onMountedOrActivated-3eb95ecd.js";const r={span:8},v=[{field:"title",component:"Input",label:"标题",colProps:r,componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",colProps:r,required:!0},{field:"client",component:"Input",colProps:r,label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"weights",component:"InputNumber",label:"权重",colProps:r,subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"target",component:"InputTextArea",label:"目标描述",colProps:r,componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",colProps:r,componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"inviteer",component:"Input",label:"邀评人",colProps:{span:8},subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",colProps:{span:16},itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosure",component:"Select",label:" ",colProps:{span:8},show:({model:e})=>e.disclosure==="2",componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}],x=g({name:"FormBasicPage",components:{BasicForm:d,PageWrapper:P},setup(){const{createMessage:e}=f(),[a,{validate:o,setProps:n}]=b({labelCol:{span:8},wrapperCol:{span:15},schemas:v,actionColOptions:{offset:8,span:23},submitButtonOptions:{text:"提交"},submitFunc:p});function p(){return c(this,null,function*(){try{yield o(),n({submitButtonOptions:{loading:!0}}),setTimeout(()=>{n({submitButtonOptions:{loading:!1}}),e.success("提交成功！")},2e3)}catch(l){}})}return{register:a}}});function w(e,a,o,n,p,l){const u=m("BasicForm"),s=m("PageWrapper");return F(),h(s,{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",contentClass:"p-4"},{default:C(()=>[B(u,{onRegister:e.register},null,8,["onRegister"])]),_:1})}const K=_(x,[["render",w],["__scopeId","data-v-391920c8"]]);export{K as default};
