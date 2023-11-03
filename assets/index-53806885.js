import{B as b}from"./BasicTable-dc3f4490.js";import{T as C}from"./componentMap-18b2c803.js";import"./TableImg.vue_vue_type_style_index_0_lang-6b84e031.js";import{u as T}from"./useTable-64dd7831.js";import{d as g}from"./system-82075152.js";import{u as _}from"./index-aa2de761.js";import{M as w,c as S,s as D}from"./MenuDrawer-126a347b.js";import{d as k,x as B,a7 as o,Z as h,_ as F,l as c,a9 as l,E as M,a8 as y,ab as E}from"./vue-ea98dac5.js";import{_ as x}from"./index.js";import"./useFormItem-14b12386.js";import"./antd-201c8368.js";import"./RadioButtonGroup-a85e25e5.js";import"./uuid-a2a47690.js";import"./index-10820036.js";import"./useWindowSizeFn-997fa1d0.js";import"./useSortable-3cb9ef53.js";import"./download-2647fd8d.js";import"./base64Conver-39fc0d26.js";import"./index-5b47f6d9.js";import"./IconPicker.vue_vue_type_script_setup_true_lang-eb395492.js";import"./copyTextToClipboard-0177fd68.js";import"./index-55225be0.js";import"./BasicForm-48304e34.js";import"./FormItem.vue_vue_type_script_lang-2510bf83.js";import"./useForm-e6560703.js";import"./onMountedOrActivated-3eb95ecd.js";import"./sortable.esm-4ae27e0b.js";const A=k({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:w,TableAction:C},setup(){const[e,{openDrawer:n}]=_(),[m,{reload:u,expandAll:p}]=T({title:"菜单列表",api:g,columns:S,formConfig:{labelWidth:120,schemas:D},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function d(){n(!0,{isUpdate:!1})}function r(t){n(!0,{record:t,isUpdate:!0})}function a(t){}function i(){u()}function s(){B(p)}return{registerTable:m,registerDrawer:e,handleCreate:d,handleEdit:r,handleDelete:a,handleSuccess:i,onFetchSuccess:s}}});function R(e,n,m,u,p,d){const r=o("a-button"),a=o("TableAction"),i=o("BasicTable"),s=o("MenuDrawer");return h(),F("div",null,[c(i,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:l(()=>[c(r,{type:"primary",onClick:e.handleCreate},{default:l(()=>[M(" 新增菜单 ")]),_:1},8,["onClick"])]),bodyCell:l(({column:t,record:f})=>[t.key==="action"?(h(),y(a,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:e.handleDelete.bind(null,f)}}]},null,8,["actions"])):E("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),c(s,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}const ie=x(A,[["render",R]]);export{ie as default};
