import{_ as s}from"./index-8ffcac79.js";import{n as r}from"./index-2dfd5781.js";import"./three-c85558b8.js";var a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("el-dialog",{attrs:{title:"画布库",visible:e.visible,width:"70vw","append-to-body":"",modal:!1},on:{"update:visible":function(n){e.visible=n}}},[t("div",{staticClass:"fileSystem-container"},[t("header-operation"),t("container-operation",{ref:"container"})],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"mini"},on:{click:function(n){e.visible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.confirm}},[e._v("确 定")])],1)])},c=[];const l=()=>s(()=>import("./headerOperation-8186c82b.js"),["assets/headerOperation-8186c82b.js","assets/index-2dfd5781.js","assets/three-c85558b8.js","assets/index-0a056b01.css","assets/index-8ffcac79.js","assets/index-4c2ff732.css","assets/headerOperation-6be366f5.css"]),_=()=>s(()=>import("./containerOperation-da872032.js"),["assets/containerOperation-da872032.js","assets/index-2dfd5781.js","assets/three-c85558b8.js","assets/index-0a056b01.css","assets/containerOperation-9a6a1728.css"]),f={components:{headerOperation:l,containerOperation:_},data(){return{visible:!1,confirmFun:()=>{}}},created(){this.$store.commit("canvasLibrary/request","")},methods:{open({confirm:e}){this.visible=!0,this.confirmFun=e},confirm(){this.visible=!1,this.confirmFun({files:[].concat(this.$refs.container.selected)}),this.$refs.container.selected=[]}}},o={};var m=r(f,a,c,!1,v,"26689648",null,null);function v(e){for(let i in o)this[i]=o[i]}const h=function(){return m.exports}();export{h as default};