import{h as s}from"./index-8ffcac79.js";import{n}from"./index-2dfd5781.js";import"./three-c85558b8.js";var r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("el-dialog",{attrs:{visible:t.visible,width:"600px",center:""},on:{"update:visible":function(a){t.visible=a}}},[e("div",{staticClass:"dialog-title",attrs:{slot:"title"},slot:"title"},[e("vis-icon",{attrs:{code:"#iconjiaohu"}}),t._v(" 应用历史 ")],1),e("el-table",{attrs:{data:t.tableData,height:"50vh"}},[e("el-table-column",{attrs:{prop:"id",label:"ID"}}),e("el-table-column",{attrs:{prop:"name",label:"项目名"}}),e("el-table-column",{attrs:{prop:"mode",label:"模式"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(a.row.mode==="auto"?"自动保存":"手动保存"))])]}}])}),e("el-table-column",{attrs:{prop:"date",label:"保存时间"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(t.getDate(a.row.date)))])]}}])}),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(d){return t.applyHistory(a.row)}}},[t._v(" 应用 ")])]}}])})],1),e("el-pagination",{attrs:{layout:"prev, pager, next",total:t.total,"page-size":t.pageSize,"current-page":t.page},on:{"current-change":t.change}})],1)},l=[];const p={data(){return{visible:!1,tableData:[],page:1,pageSize:10,total:0,mode:""}},mounted(){this.queryList()},methods:{getDate(t){return new Date(t).toLocaleString()},async queryList(){const t=await s.getListByMode({mode:this.mode,page:this.page,pageSize:this.pageSize,appId:this.$store.getters.id}).catch(o=>{this.$message.error("接口有误：historyApi/getListByMode"),console.error(o)});this.tableData=t.list,this.total=t.total},change(t){this.page=t,this.queryList()},applyHistory(t){window.location.href=`${window.location.origin}${window.location.pathname}?id=${t.appId}&history=${t.id}`}}},i={};var c=n(p,r,l,!1,u,"e1d58b02",null,null);function u(t){for(let o in i)this[o]=i[o]}const m=function(){return c.exports}();export{m as default};