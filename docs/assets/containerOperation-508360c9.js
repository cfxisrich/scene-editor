var $=Object.defineProperty;var w=(t,n,e)=>n in t?$(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var f=(t,n,e)=>(w(t,typeof n!="symbol"?n+"":n,e),e);import{n as y,a9 as d,a5 as C,a7 as O,a3 as N,ab as x,aa as S,as as E,u as P,i as k,a4 as z}from"./texture-635886dc.js";import{e as R}from"./index-fa205994.js";import"./three-ea07d844.js";class b{constructor(n){f(this,"config");this.config=n}pipe(n){return this.config=n(this.config),this}get(){return this.config}}var j=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"containerOperation-container"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"loading-mask"},[e("vis-icon",{staticClass:"ani",attrs:{code:"#iconxuanzhuan"}}),e("span",[t._v("正在加载...")])],1),!t.loading&&!t.floderChildren.length?e("div",{staticClass:"empty-tips"},[e("span",[t._v("这里暂时是空的哦")])]):t._l(t.floderChildren,function(s,p){return e("div",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:`${s.name}`,expression:"`${item.name}`",modifiers:{bottom:!0}}],key:p,staticClass:"file-item-box"},[s.dir?[e("vis-icon",{attrs:{size:t.iconSize,code:"#iconwenjianjia"}})]:[e("img",{attrs:{src:s.preview}}),e("div",{directives:[{name:"show",rawName:"v-show",value:t.selected.id===s.id,expression:"selected.id === item.id"}],staticClass:"item-selected-mask",on:{click:function(a){return a.stopPropagation(),t.$store.commit("templateLibrary/cancelSelected")}}},[e("vis-icon",{staticClass:"item-selected",attrs:{size:"60px",code:"#icongou"}})],1)],e("span",{staticClass:"item-title",domProps:{textContent:t._s(s.name)}}),s.dir?e("span",{staticClass:"item-operate-box"},[e("vis-icon",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"移动",expression:"`移动`",modifiers:{bottom:!0}}],attrs:{size:"20px",code:"#iconpingyi"}}),e("vis-icon",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"打开",expression:"`打开`",modifiers:{bottom:!0}}],attrs:{size:"20px",code:"#iconyidong"},nativeOn:{click:function(a){return a.stopPropagation(),t.chouseFile(s)}}}),e("vis-icon",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"删除",expression:"`删除`",modifiers:{bottom:!0}}],staticClass:"item-delete",attrs:{size:"16px",code:"#iconshanchu"},nativeOn:{click:function(a){return a.stopPropagation(),t.remove(s)}}})],1):e("span",{staticClass:"item-operate-box"},[e("vis-icon",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"更新",expression:"`更新`",modifiers:{bottom:!0}}],attrs:{size:"16px",code:"#iconxuanzhuan"},nativeOn:{click:function(a){return a.stopPropagation(),t.updateTempalte(s)}}}),e("vis-icon",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"应用",expression:"`应用`",modifiers:{bottom:!0}}],attrs:{size:"20px",code:"#iconyingyong"},nativeOn:{click:function(a){return a.stopPropagation(),t.useTemplate(s)}}}),e("vis-icon",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"删除",expression:"`删除`",modifiers:{bottom:!0}}],staticClass:"item-delete",attrs:{size:"16px",code:"#iconshanchu"},nativeOn:{click:function(a){return a.stopPropagation(),t.remove(s)}}})],1)],2)}),e("div",{staticClass:"file-item-placeholder",style:{display:t.floderChildren.length%2!==0?"block":"none",flex:1}})],2)},L=[];const J={data(){return{iconSize:"35px",timer:""}},computed:{loading(){return this.$store.getters["templateLibrary/loading"]},currentFloder(){return this.$store.getters["templateLibrary/currentFloder"]},floderChildren(){return this.currentFloder.children},currentScene(){return this.$store.getters["scene/currentScene"]},selected(){return this.$store.getters["templateLibrary/selected"]}},methods:{chouseFile(t){t.dir&&this.$store.commit("templateLibrary/currentFloder",t)},remove(t){},async useTemplate(t){const n=this.$message.loading("正在应用模板...");let e=d.clone(t.template);delete e.renderer,delete e.controls,delete e.scene;let s=JSON.stringify(e,d.stringify);const p=[];e.assets&&e.assets.forEach(o=>{o.module==="model"?p.push(new Promise((i,r)=>{C.getModel(o.id).then(c=>{const l=URL.createObjectURL(c.model);this.$store.commit("cacheUrl",{module:"model",file:c,url:l}),s=s.replace(new RegExp(`<${o.module}-${o.id}>`,"g"),l),i({url:l,ext:c.ext})}).catch(r)})):o.module==="texture"&&p.push(new Promise((i,r)=>{O.getTexture(o.id).then(c=>{const l=URL.createObjectURL(c.texture);this.$store.commit("cacheUrl",{module:"texture",file:c,url:l}),s=s.replace(new RegExp(`<${o.module}-${o.id}>`,"g"),l),i({url:l,ext:c.ext})}).catch(r)}))});const a=[];e.component&&e.component.forEach(o=>{const[i,r]=o.$url.slice(1,-1).split("-");a.push(new Promise((c,l)=>{N.getComponent(r).then(v=>{const h=URL.createObjectURL(v.component);this.$store.commit("cacheUrl",{module:"component",file:v,url:h}),s=s.replace(new RegExp(`<${i}-${r}>`,"g"),h),o.$url=h,o.$pkg=v.pkg,c(o)})}))}),e.assets=await Promise.all(p),e.component=await Promise.all(a),s=JSON.parse(s,d.parse),s.assets=e.assets,s.component=e.component,e=s;const g=[];let m={};e=new b(e).pipe(o=>{let{config:i,detail:r}=x.clone(o,{detail:!0,filter:["canvas","component","assets","shaderAssets","canvasAssets"]});return m=r,i}).pipe(o=>{let i=JSON.stringify(o,d.c);return o.component.forEach(r=>{const c=S(),l=r.$cid;m[r.$cid]=c,r.$cid=c,i=i.replace(new RegExp(l,"g"),c)}),JSON.parse(i,d.parse)}).pipe(o=>(Object.keys(o).forEach(i=>{E(i)&&Object.values(o[i]).forEach(r=>{r.parent===P(k.SCENE)&&g.push(r.vid)})}),o)).pipe(o=>x.handler(o,i=>z(i.type,i,{strict:!1}),{filter:["canvas","component","assets","shaderAssets","canvasAssets"]})).get();let u=t.editor;u=new b(u).pipe(o=>(o=JSON.stringify(o),Object.keys(m).forEach(i=>{o=o.replace(new RegExp(i,"g"),m[i])}),JSON.parse(o))).get(),(await R.loadConfigAsync(e)).component.forEach(o=>{this.$store.commit("component/add",{config:o.config,configuration:o.packageJSON.configuration})}),this.currentScene.children.push(...g),this.$store.commit("notifyAll"),this.$store.dispatch("appendTemplateInit",u),n.close()},async updateTempalte(t){}}},_={};var A=y(J,j,L,!1,U,"1af4a68e",null,null);function U(t){for(let n in _)this[n]=_[n]}const G=function(){return A.exports}();export{G as default};