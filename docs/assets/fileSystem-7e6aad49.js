import{n as o,_ as i}from"./index-9292a4d7.js";import"./three-2ccf5448.js";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fileSystem-container"},[n("header-operation"),n("container-operation",{ref:"container"})],1)},a=[];const _=()=>i(()=>import("./headerOperation-d47170fe.js"),["assets/headerOperation-d47170fe.js","assets/index-9292a4d7.js","assets/three-2ccf5448.js","assets/index-b980021f.css","assets/headerOperation-af11093d.css"]),c=()=>i(()=>import("./containerOperation-0d3e2004.js"),["assets/containerOperation-0d3e2004.js","assets/index-9292a4d7.js","assets/three-2ccf5448.js","assets/index-b980021f.css","assets/containerOperation-bd1001d3.css"]),l={components:{headerOperation:_,containerOperation:c},data(){return{visible:!1,confirmFun:()=>{}}},methods:{open({confirm:e}){this.visible=!0,this.confirmFun=e},confirm(){this.visible=!1,this.confirmFun({files:[].concat(this.$refs.container.selected)}),this.$refs.container.selected=[]}},created(){this.$store.commit("appLibrary/request","")}},r={};var f=o(l,s,a,!1,u,"647fe5a6",null,null);function u(e){for(let t in r)this[t]=r[t]}const v=function(){return f.exports}();export{v as default};