var p=(e,d,a)=>new Promise((l,r)=>{var m=t=>{try{n(a.next(t))}catch(i){r(i)}},o=t=>{try{n(a.throw(t))}catch(i){r(i)}},n=t=>t.done?l(t.value):Promise.resolve(t.value).then(m,o);n((a=a.apply(e,d)).next())});import{B as u}from"./BasicTable-dc3f4490.js";import"./componentMap-18b2c803.js";import"./TableImg.vue_vue_type_style_index_0_lang-6b84e031.js";import{u as c}from"./useTable-64dd7831.js";import{o as s}from"./select-93eac05e.js";import{d as f}from"./table-9286518d.js";import{t as C}from"./tree-164e6087.js";import{b,_ as h}from"./index.js";import{d as x,m as w,a7 as _,Z as E,_ as I,l as v}from"./vue-ea98dac5.js";import{an as P}from"./antd-201c8368.js";import"./useFormItem-14b12386.js";import"./RadioButtonGroup-a85e25e5.js";import"./uuid-a2a47690.js";import"./index-10820036.js";import"./useWindowSizeFn-997fa1d0.js";import"./useSortable-3cb9ef53.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-5b47f6d9.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-eb395492.js";import"./copyTextToClipboard-0177fd68.js";import"./index-55225be0.js";import"./BasicForm-48304e34.js";import"./FormItem.vue_vue_type_script_lang-2510bf83.js";import"./useForm-e6560703.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";const k=[{title:"输入框",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"输入框校验",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",edit:!0,editRule:e=>p(void 0,null,function*(){return e==="2"?"不能输入该值":""}),width:200},{title:"数字输入框",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200,editComponentProps:()=>({max:100,min:0}),editRender:({text:e})=>w(P,{percent:Number(e)})},{title:"下拉框",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:s,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"远程下拉树",dataIndex:"name8",edit:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:C,resultField:"list"},width:200},{title:"日期选择",dataIndex:"date",edit:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:200},{title:"时间选择",dataIndex:"time",edit:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:200},{title:"勾选框",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200},{title:"单选框",dataIndex:"radio1",edit:!0,editComponent:"RadioGroup",editComponentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},width:200},{title:"单选按钮框",dataIndex:"radio2",edit:!0,editComponent:"RadioButtonGroup",editComponentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},width:200},{title:"远程单选框",dataIndex:"radio3",edit:!0,editComponent:"ApiRadioGroup",editComponentProps:{api:s,resultField:"list",labelField:"name",valueField:"id"},width:200}],R=x({components:{BasicTable:u},setup(){const[e]=c({title:"可编辑单元格示例",api:f,columns:k,showIndexColumn:!1,bordered:!0}),{createMessage:d}=b();function a({record:o,index:n,key:t,value:i}){return!1}function l({value:o,key:n,id:t}){return d.loading({content:`正在模拟保存${n}`,key:"_save_fake_data",duration:0}),new Promise(i=>{setTimeout(()=>{o===""?(d.error({content:"保存失败：不能为空",key:"_save_fake_data",duration:2}),i(!1)):(d.success({content:`记录${t}的${n}已保存`,key:"_save_fake_data",duration:2}),i(!0))},2e3)})}function r(de){return p(this,arguments,function*({record:o,index:n,key:t,value:i}){return yield l({id:o.id,key:t,value:i})})}function m(){}return{registerTable:e,handleEditEnd:a,handleEditCancel:m,beforeEditSubmit:r}}}),T={class:"p-4"};function F(e,d,a,l,r,m){const o=_("BasicTable");return E(),I("div",T,[v(o,{onRegister:e.registerTable,onEditEnd:e.handleEditEnd,onEditCancel:e.handleEditCancel,beforeEditSubmit:e.beforeEditSubmit},null,8,["onRegister","onEditEnd","onEditCancel","beforeEditSubmit"])])}const oe=h(R,[["render",F]]);export{oe as default};
