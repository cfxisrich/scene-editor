import{n as a}from"./index-9292a4d7.js";import"./three-2ccf5448.js";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pathGeometry-container"},[n("de-collapse-layout",{attrs:{label:"形状",icon:"#iconjichubianhuan",arrowPosition:"left"},scopedSlots:e._u([{key:"container",fn:function(){return[n("de-controller-select",{attrs:{keyframe:!1,label:"路径选择",options:e.pathOptions},model:{value:e.shape.shape,callback:function(r){e.$set(e.shape,"shape",r)},expression:"shape.shape"}}),n("de-controller-number",{attrs:{keyframe:!1,label:"面分段",step:1,dragMultply:3,min:3},model:{value:e.config.curveSegments,callback:function(r){e.$set(e.config,"curveSegments",r)},expression:"config.curveSegments"}})]},proxy:!0}])})],1)},l=[];const c={props:{config:{type:Object,required:!0}},computed:{shape(){return this.$store.getters["shape/get"][this.config.shape]},pathOptions(){return Object.values(this.$store.getters["path/get"]).map(e=>({label:e.name,value:e.vid}))}},methods:{}},s={};var i=a(c,o,l,!1,p,null,null,null);function p(e){for(let t in s)this[t]=s[t]}const m=function(){return i.exports}();export{m as default};