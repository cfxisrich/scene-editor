import{n as a}from"./index-2dfd5781.js";import"./three-c85558b8.js";var c=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"containerOperation-container"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading-mask"},[t("vis-icon",{staticClass:"ani",attrs:{code:"#iconxuanzhuan"}}),t("span",[e._v("正在加载...")])],1),!e.loading&&!e.floderChildren.length?t("div",{staticClass:"empty-tips"},[t("span",[e._v("这里暂时是空的哦")])]):e._l(e.floderChildren,function(o,i){return t("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:`${o.name}`,expression:"`${item.name}`",modifiers:{bottom:!0}}],key:i,staticClass:"file-item-box",class:{active:!1},attrs:{draggable:!o.dir},on:{click:function(n){return e.chouseFile(o)},dragstart:function(n){return e.dragstart(n,o)}}},[o.dir?[t("vis-icon",{attrs:{size:e.iconSize,code:"#iconwenjianjia"}})]:[t("img",{attrs:{src:o.preview}})],t("span",{staticClass:"item-title",domProps:{textContent:e._s(o.name)}}),t("vis-icon",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"删除",expression:"`删除`",modifiers:{bottom:!0}}],staticClass:"item-delete",attrs:{size:"16px",code:"#iconshanchu"},nativeOn:{click:function(n){return n.stopPropagation(),e.remove(o)}}})],2)}),t("div",{staticClass:"file-item-placeholder",style:{display:e.floderChildren.length%2!==0?"block":"none",flex:1}})],2)},l=[];const d={data(){return{iconSize:"35px",fileIcon:{mtl:"#iconmtl"},configTemplateCache:{},configRootCache:{},timer:"",throttleTime:1e3/45,canMove:!0}},computed:{loading(){return this.$store.getters["componentLibrary/loading"]},currentFloder(){return this.$store.getters["componentLibrary/currentFloder"]},floderChildren(){return this.currentFloder.children},currentScene(){return this.$store.getters["scene/currentScene"]}},methods:{chouseFile(e){e.dir&&this.$store.commit("componentLibrary/currentFloder",e)},dragstart(e,r){e.preventDefault(),this.$store.commit("component/draggedComponentItem",r),this.$store.commit("component/dragging",!0);const t=new Image;t.src=e.target.src,t.style.position="fixed",t.style.zIndex=20,t.style.opacity=.6,document.body.appendChild(t);const o=n=>{this.canMove&&(this.canMove=!1,this.timer=setTimeout(()=>{t.style.top=`${n.clientY+10}px`,t.style.left=`${n.clientX+10}px`,this.canMove=!0},this.throttleTime))},i=n=>{document.body.removeChild(t),document.body.removeEventListener("mousemove",o),document.body.removeEventListener("mouseup",i)};document.body.addEventListener("mousemove",o),document.body.addEventListener("mouseup",i)},remove(e){return this.$tool.devTips()}}},s={};var m=a(d,c,l,!1,u,"9cb52564",null,null);function u(e){for(let r in s)this[r]=s[r]}const h=function(){return m.exports}();export{h as default};