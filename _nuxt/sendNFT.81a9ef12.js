import{_ as I}from"./BaseHeading.vue.3de0d3e4.js";import{_ as B}from"./BaseParagraph.vue.975bc4b5.js";import{_ as C}from"./BaseInput.vue.cca94ccc.js";import{_ as F}from"./BaseCheckbox.vue.38e55014.js";import{_ as j}from"./BaseButton.d2c9924f.js";import{d as U,r as d,c as N,V as W,o as g,a as A,i as t,a1 as $,b as o,w as l,j as c,e as s,x as m,h as P}from"./entry.3ca38a09.js";import{u as z}from"./toaster.bf488b3c.js";import{z as u,u as L,F as p,t as M}from"./vee-validate.esm.3520a945.js";import"./BasePlaceload.36e028a3.js";import"./_plugin-vue_export-helper.c27b6911.js";import"./Icon.3da843a1.js";import"./index.c75d904c.js";import"./input-id.dddb5502.js";import"./buttons.74dfc8fe.js";import"./nuxt-link.c9e0679d.js";const O={class:"bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4"},Q=t("div",{class:"mx-auto flex h-32 w-full max-w-6xl items-center justify-between px-4"},null,-1),q={class:"flex w-full items-center justify-center"},H={class:"relative mx-auto w-full max-w-2xl shadow-muted-400 shadow shadow-5xl rounded bg-muted-50 dark:bg-muted-700/70"},X={class:"me-auto ms-auto mt-4 w-full"},G={class:"text-center"},J={class:"px-8 py-4"},K={class:"mb-4 space-y-4"},Y={class:"mb-6"},Z={class:"mt-6 flex items-center justify-between"},ee={class:"mb-6 flex items-center justify-center"},se={key:0,class:"fixed top-0 left-0 w-full h-full bg-opacity-50 bg-gray-400 flex justify-center items-center"},te={class:"p-6 bg-gray-700 space-y-3 rounded-lg shadow shadow-lg shadow-gray-700 relative max-w-lg items-center"},oe={class:"mb-6"},ae={class:"mb-6 flex items-center justify-center"},Se=U({__name:"sendNFT",setup(le){d("");const _=d(""),n=d("");var i=d(!1);d("");const w={EMAIL_REQUIRED:"A valid email is required",PASSWORD_REQUIRED:"A password is required"},V=u.object({email:u.string().email(w.EMAIL_REQUIRED),password:u.string().min(1,w.PASSWORD_REQUIRED),trustDevice:u.boolean()}),k=M(V),E=N(()=>({email:"",password:"",trustDevice:!1})),{handleSubmit:S,isSubmitting:r,setFieldError:R,meta:ie,values:ne,errors:re,resetForm:de,setFieldValue:me,setErrors:ce}=L({validationSchema:k,initialValues:E});W();const v=z(),y=S(async f=>{console.log("auth-success",f);try{await new Promise((e,b)=>{f.password!=="password"&&setTimeout(()=>b(new Error("Fake backend validation error")),2e3),setTimeout(e,4e3)}),v.clearAll(),v.show({title:"Success",message:"Welcome back!",color:"success",icon:"ph:user-circle-fill",closable:!0})}catch(e){e.message==="Fake backend validation error"&&R("password",'Invalid credentials (use "password")');return}window.location.href="/dashboards"});return(f,e)=>{const b=I,T=B,h=C,D=F,x=j;return g(),A("div",O,[Q,t("div",q,[t("div",H,[t("div",X,[t("form",{method:"POST",action:"",onSubmit:e[5]||(e[5]=$((...a)=>s(y)&&s(y)(...a),["prevent"])),class:"me-auto ms-auto mt-4 w-full max-w-md",novalidate:""},[t("div",G,[o(b,{as:"h2",size:"3xl",weight:"medium"},{default:l(()=>[c(" Send ")]),_:1}),o(T,{size:"sm",class:"text-muted-400 mb-6"},{default:l(()=>[c(" Enter LTC amount you want to send! ")]),_:1})]),t("div",J,[t("div",K,[o(s(p),{name:"Amount"},{default:l(()=>[o(h,{type:"text",label:"Amount",placeholder:"Amount",classes:{input:"h-12"},icon:"cryptocurrency:ltc",modelValue:s(_),"onUpdate:modelValue":e[0]||(e[0]=a=>m(_)?_.value=a:null)},null,8,["modelValue"])]),_:1}),o(s(p),{name:"Wallet Address"},{default:l(()=>[o(h,{modelValue:s(n),"onUpdate:modelValue":e[1]||(e[1]=a=>m(n)?n.value=a:null),type:"text",label:"Wallet Address",placeholder:"Wallet Address",classes:{input:"h-12"},icon:"solar:copy-bold"},null,8,["modelValue"])]),_:1})]),t("div",Y,[t("div",Z,[o(s(p),{name:"trustAddress"},{default:l(()=>[o(D,{disabled:s(r),shape:"rounded",label:"Deduct transaction fee from amount",color:"primary"},null,8,["disabled"])]),_:1})])]),t("div",ee,[o(x,{disabled:s(r),loading:s(r),type:"submit",color:"primary",class:"!h-12 w-36",onClick:e[2]||(e[2]=a=>m(i)?i.value=!0:i=!0)},{default:l(()=>[c(" Confirm ")]),_:1},8,["disabled","loading"])])]),s(i)?(g(),A("div",se,[t("div",te,[o(s(p),{name:"passkey"},{default:l(()=>[o(h,{modelValue:s(n),"onUpdate:modelValue":e[3]||(e[3]=a=>m(n)?n.value=a:null),type:"text",label:"passkey",placeholder:"passkey",classes:{input:"h-12"},icon:"solar:copy-bold"},null,8,["modelValue"])]),_:1}),t("div",oe,[t("div",ae,[o(x,{disabled:s(r),loading:s(r),type:"submit",color:"primary",class:"!h-12 w-36",onClick:e[4]||(e[4]=a=>m(i)?i.value=!1:i=!1)},{default:l(()=>[c(" Confirm ")]),_:1},8,["disabled","loading"])])])])])):P("",!0)],32)])])])])}}});export{Se as default};
