"use strict";(self["webpackChunkdoclub"]=self["webpackChunkdoclub"]||[]).push([[327],{7751:function(e,t,a){a.r(t),a.d(t,{default:function(){return de}});var n=a(3396),s=a(7139),i=a.p+"img/mail.89847983.svg",l=a.p+"img/tg.9102f840.svg",o=a(4870),d=a(9242),c=a.p+"img/Dropdown.765531e9.svg",u=a.p+"img/Vector.b0c1da05.svg";const r=e=>((0,n.dD)("data-v-99d46176"),e=e(),(0,n.Cn)(),e),_=r((()=>(0,n._)("span",null,"Phone number",-1))),m={class:"select__reletive"},v={class:"phone__box"},g=r((()=>(0,n._)("img",{src:c,alt:""},null,-1))),p={class:"phone__input"},f={class:"select__box-header"},b=r((()=>(0,n._)("div",null,[(0,n._)("h5",null,"☎️ Select a region")],-1))),h=r((()=>(0,n._)("img",{src:u,alt:""},null,-1))),k=[h],y={class:"select__list"},w=["onClick"];var S={__name:"PhoneNumer",props:["modelValue"],setup(e,{emit:t}){const a=(0,o.iH)(null),{modelValue:i}=e,l=t,c=(0,o.iH)(i),u=(0,o.qj)({region:"UZ (+998)",phone:"",toggle:!1,countries:[{name:"UAE (+971)",code:"+971"},{name:"RU(+7)",code:"+7"},{name:"UZ (+998)",code:"+998"},{name:"USA (+1)",code:"+1"},{name:"KZ (+7)",code:"+7"},{name:"UAE (+971)",code:"+971"},{name:"RU (+7)",code:"+7"},{name:"UZ (+998)",code:"+998"},{name:"USA (+1)",code:"+1"},{name:"KZ (+7)",code:"+7"}]}),r=()=>{u.toggle&&h()},h=()=>{if(u.toggle)return u.toggle=!u.toggle,void(a.value&&a.value.focus());setTimeout((()=>{u.toggle=!u.toggle,a.value&&a.value.focus()}),0)},S=()=>{l("update:modelValue",c.value)};return(e,t)=>{const i=(0,n.Q2)("mask"),l=(0,n.Q2)("click-outside");return(0,n.wg)(),(0,n.iD)("div",null,[_,(0,n._)("div",m,[(0,n._)("div",v,[(0,n._)("div",{class:(0,s.C_)(["phone__select",{rotated:u.toggle}])},[(0,n._)("button",{onClick:h},[(0,n._)("span",null,(0,s.zw)(u.region),1)]),g],2),(0,n._)("div",p,[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>c.value=e),onInput:S,type:"tel",pattern:"[0-9]*",inputmode:"numeric",ref_key:"phoneInput",ref:a},null,544),[[d.nr,c.value],[i,"(##) ###-##-##"]])])]),(0,n.wy)(((0,n.wg)(),(0,n.iD)("div",{class:(0,s.C_)([{opened:u.toggle},"select__box"])},[(0,n._)("div",f,[b,(0,n._)("div",null,[(0,n._)("button",{onClick:t[1]||(t[1]=e=>u.toggle=!1)},k)])]),(0,n._)("div",null,[(0,n._)("ul",y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(u.countries,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{key:t,class:"select__list-item",onClick:t=>{u.region=e.name,h()}},(0,s.zw)(e.name),9,w)))),128))])])],2)),[[d.F8,u.toggle],[l,r]])])])}}},C=a(89);const D=(0,C.Z)(S,[["__scopeId","data-v-99d46176"]]);var x=D,U=(a(560),a(2483));const V={key:0,class:"verification__title"},q={key:1,class:"verification__title"},I={key:2,class:"verification__title"},j={class:"verification__container"},T={class:"verification__container-box"};var H={__name:"PhoneVerification",props:["verified"],emits:["codeUpdated","resetValue"],setup(e,{expose:t,emit:a}){const i=a,l=e,c=(0,U.tv)(),u=(0,o.qj)({smsStatus:"sended",code:Array(4).fill("")}),r=(e,t)=>{if("Backspace"===t.key&&""===u.code[e]){if(t.preventDefault(),e>0){u.code[e-1]="";const t=document.querySelector(`.verification__container-item:nth-of-type(${e}) input`);t&&t.focus()}}else if(e<u.code.length-1&&""!==u.code[e]){const t=document.querySelector(`.verification__container-item:nth-of-type(${e+2}) input`);t&&t.focus()}e===u.code.length-2&&m()},_=()=>{u.code=Array(4).fill(""),i("resetValue")},m=()=>{setTimeout((()=>{console.log(l.verified,"props.verified");const e=u.code.join("");i("codeUpdated",e),e==l.verified?(u.smsStatus="verified",localStorage.setItem("fake_token",e),setTimeout((()=>{c.push("/home")}),1e3)):u.smsStatus="failed"}),0)},v=()=>{i("changeNumber")};return t({childMethod:_}),(e,t)=>((0,n.wg)(),(0,n.iD)("div",null,["sended"===u.smsStatus?((0,n.wg)(),(0,n.iD)("div",V,[(0,n.Uk)(" The code was sent. "),(0,n._)("a",{onClick:v},"Change the number")])):(0,n.kq)("",!0),"verified"===u.smsStatus?((0,n.wg)(),(0,n.iD)("div",q," Code verified successfully! ")):(0,n.kq)("",!0),"failed"===u.smsStatus?((0,n.wg)(),(0,n.iD)("div",I,[(0,n.Uk)(" Code verification failed. "),(0,n._)("a",{onClick:v},"Change the number")])):(0,n.kq)("",!0),(0,n._)("div",j,[(0,n._)("ul",T,[(0,n._)("li",{class:(0,s.C_)(["verification__container-item",["failed"===u.smsStatus?"verify__failed":"verified"===u.smsStatus?"verify__success":""]])},[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>u.code[0]=e),onKeydown:t[1]||(t[1]=e=>r(0,e)),max:"9",min:"0",maxlength:"1",pattern:"[0-9]",type:"tel"},null,544),[[d.nr,u.code[0]]])],2),(0,n._)("li",{class:(0,s.C_)(["verification__container-item",["failed"===u.smsStatus?"verify__failed":"verified"===u.smsStatus?"verify__success":""]])},[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>u.code[1]=e),onKeydown:t[3]||(t[3]=e=>r(1,e)),type:"tel",max:"9",min:"0",maxlength:"1",pattern:"[0-9]"},null,544),[[d.nr,u.code[1]]])],2),(0,n._)("li",{class:(0,s.C_)(["verification__container-item",["failed"===u.smsStatus?"verify__failed":"verified"===u.smsStatus?"verify__success":""]])},[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[4]||(t[4]=e=>u.code[2]=e),onKeydown:t[5]||(t[5]=e=>r(2,e)),type:"tel",max:"9",min:"0",maxlength:"1",pattern:"[0-9]"},null,544),[[d.nr,u.code[2]]])],2),(0,n._)("li",{class:(0,s.C_)(["verification__container-item",["failed"===u.smsStatus?"verify__failed":"verified"===u.smsStatus?"verify__success":""]])},[(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":t[6]||(t[6]=e=>u.code[3]=e),onKeydown:t[7]||(t[7]=e=>r(3,e)),type:"tel",max:"9",min:"0",maxlength:"1",pattern:"[0-9]"},null,544),[[d.nr,u.code[3]]])],2)])])]))}};const R=(0,C.Z)(H,[["__scopeId","data-v-532abd56"]]);var Z=R;const K=e=>((0,n.dD)("data-v-549090ab"),e=e(),(0,n.Cn)(),e),A={class:"select__relative"},E={class:"language__box"},z=K((()=>(0,n._)("img",{src:c,alt:""},null,-1))),M=K((()=>(0,n._)("div",{class:"select__box-header"},[(0,n._)("h5",null,"🏳️ Select a language")],-1))),P={class:"select__list"},$=["onClick"];var N={__name:"LanguageSelect",setup(e){const t=(0,o.qj)({language:"English",toggle:!1,languages:["English","Russian"]}),a=()=>{t.toggle&&i()},i=()=>{t.toggle?t.toggle=!t.toggle:setTimeout((()=>{t.toggle=!t.toggle}),0)},l=e=>{t.language=e,i()};return(e,o)=>{const c=(0,n.Q2)("click-outside");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",A,[(0,n._)("div",E,[(0,n._)("div",{onClick:i,class:(0,s.C_)(["language__select",{rotated:t.toggle}])},[(0,n._)("button",null,[(0,n._)("span",null,(0,s.zw)(t.language),1)]),z],2)]),(0,n.wy)(((0,n.wg)(),(0,n.iD)("div",{class:(0,s.C_)([{opened:t.toggle},"select__box"])},[M,(0,n._)("div",null,[(0,n._)("ul",P,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.languages,((e,t)=>((0,n.wg)(),(0,n.iD)("li",{key:t,class:"select__list-item",onClick:t=>l(e)},(0,s.zw)(e),9,$)))),128))])])],2)),[[d.F8,t.toggle],[c,a]])])])}}};const Q=(0,C.Z)(N,[["__scopeId","data-v-549090ab"]]);var F=Q;const Y=e=>((0,n.dD)("data-v-099bcba3"),e=e(),(0,n.Cn)(),e),B={class:"grid grid-cols-3"},L={class:"col-span-3 xl:col-span-1 md:col-span-1 login__container"},W={class:"login__box"},G={class:"login__box-body"},J={class:"login__box-header"},O=Y((()=>(0,n._)("div",{class:"project__name"},[(0,n._)("h2",null,"docmed.space")],-1))),X=Y((()=>(0,n._)("div",{class:"project"},[(0,n._)("div",{class:"project__title"},[(0,n._)("h4",null,"Closed"),(0,n._)("h4",null,"Evidence-based"),(0,n._)("h4",null,"Medicine Club")])],-1))),ee={class:"input__number"},te={key:2,class:"verification__footer"},ae=Y((()=>(0,n._)("span",null,[(0,n.Uk)("I hereby agree to the "),(0,n._)("span",null,"Terms of processing of my personal data.")],-1))),ne=[ae],se=(0,n.uE)('<div class="login__footer" data-v-099bcba3><div class="login__footer-connection" data-v-099bcba3><ul class="login__footer-box" data-v-099bcba3><li class="login__footer-item" data-v-099bcba3><img src="'+i+'" alt="" data-v-099bcba3><span data-v-099bcba3>help@decmed.space</span></li><li class="login__footer-item" data-v-099bcba3><img src="'+l+'" alt="" data-v-099bcba3><span data-v-099bcba3>Chatbot</span></li></ul></div><div class="login__info" data-v-099bcba3><span data-v-099bcba3>ООО МЕДТЕХ</span><span data-v-099bcba3>Personal data protection</span></div></div>',1),ie=Y((()=>(0,n._)("div",{class:"sm:hidden hidden xl:block md:block xl:col-span-2 md:col-span-2"},[(0,n._)("div",{class:"login__background"})],-1)));var le={__name:"Index",setup(e){const t=(0,o.iH)(""),a=(0,o.iH)("Send code"),i=(0,o.iH)(null),l=(0,o.qj)({smsStatus:"new",codeVerifier:"",timer:(0,o.iH)(null),timerDuration:10,isTimerRunning:(0,o.iH)(!1),random:""}),d=()=>{"new"===l.smsStatus?(l.smsStatus="sended",l.random=v(),alert(l.random)):"sended"===l.smsStatus?(l.smsStatus="resend",l.random=v(),alert(l.random),c()):"resend"===l.smsStatus&&(l.smsStatus="sended",l.random=v(),alert(l.random),c()),r()},c=()=>{i.value.childMethod()},u=e=>{l.codeVerifier=e},r=()=>{l.isTimerRunning=!0,a.value=`Resend code (${l.timerDuration}s)`,l.timer=setInterval((()=>{l.timerDuration--,l.timerDuration<=0?(_(),a.value="Send code"):a.value=`Resend code (${l.timerDuration}s)`}),1e3)},_=()=>{clearInterval(l.timer),l.timer=null,l.timerDuration=10,l.isTimerRunning=!1,l.smsStatus="resend"},m=()=>{t.value="",_(),c(),l.smsStatus="new"},v=()=>Math.floor(1e3+9e3*Math.random());return(0,n.Ah)((()=>{l.isTimerRunning&&_()})),(e,o)=>((0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",B,[(0,n._)("div",L,[(0,n._)("div",W,[(0,n._)("div",G,[(0,n._)("div",J,[O,(0,n.Wm)(F)]),X,(0,n._)("div",ee,["new"==l.smsStatus?((0,n.wg)(),(0,n.j4)(x,{key:0,modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=e=>t.value=e)},null,8,["modelValue"])):(0,n.kq)("",!0),"sended"==l.smsStatus||"resend"==l.smsStatus?((0,n.wg)(),(0,n.j4)(Z,{key:1,ref_key:"myChild",ref:i,onCodeUpdated:u,onChangeNumber:m,verified:l.random},null,8,["verified"])):(0,n.kq)("",!0)]),"new"==l.smsStatus?((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,s.C_)(["verfication__button",[t.value.length>12&&"new"==l.smsStatus?"verfication__button-active":""]])},[(0,n._)("button",{onClick:d},"Send code")],2)):(0,n.kq)("",!0),"sended"==l.smsStatus||"resend"==l.smsStatus?((0,n.wg)(),(0,n.iD)("div",{key:1,class:(0,s.C_)(["verfication__button",["sended"==l.smsStatus?"verfication__button-pending":"resend"==l.smsStatus?"verfication__button-active":""]])},[(0,n._)("button",{onClick:d},(0,s.zw)(a.value),1)],2)):(0,n.kq)("",!0),"new"==l.smsStatus?((0,n.wg)(),(0,n.iD)("div",te,ne)):(0,n.kq)("",!0)]),se])]),ie])]))}};const oe=(0,C.Z)(le,[["__scopeId","data-v-099bcba3"]]);var de=oe}}]);
//# sourceMappingURL=327.16273122.js.map