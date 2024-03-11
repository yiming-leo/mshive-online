"use strict";(self["webpackChunkmshive_online"]=self["webpackChunkmshive_online"]||[]).push([[621],{7621:function(e,t,i){i.r(t),i.d(t,{default:function(){return K}});i(7393);var s=i(2240),n=i(573),a=i(596),o=a.Z.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...n.Z.options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(e){this.$nextTick((()=>this.inputIndeterminate=e))},inputIndeterminate(e){this.$emit("update:indeterminate",e)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){const{title:e,...t}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(s.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...t,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}}),h=i(4127),r=i(7955),l=i(266),d=i(4324),c=i(5495),p=i(3305),u=i(1713),m=i(7423),v=i(7808),g=i(2082),f=(i(7658),i(7394)),C=i(4712),b=i(6878),y=i(7678),S=i(5352);const k=(0,y.Z)(b.Z,(0,C.f)("treeview")),O={activatable:Boolean,activeClass:{type:String,default:"v-treeview-node--active"},color:{type:String,default:"primary"},disablePerNode:Boolean,expandIcon:{type:String,default:"$subgroup"},indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},itemChildren:{type:String,default:"children"},itemDisabled:{type:String,default:"disabled"},itemKey:{type:String,default:"id"},itemText:{type:String,default:"name"},loadChildren:Function,loadingIcon:{type:String,default:"$loading"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"},openOnClick:Boolean,rounded:Boolean,selectable:Boolean,selectedColor:{type:String,default:"accent"},shaped:Boolean,transition:Boolean,selectionType:{type:String,default:"leaf",validator:e=>["leaf","independent"].includes(e)}},w=k.extend().extend({name:"v-treeview-node",inject:{treeview:{default:null}},props:{level:Number,item:{type:Object,default:()=>null},parentIsDisabled:Boolean,...O},data:()=>({hasLoaded:!1,isActive:!1,isIndeterminate:!1,isLoading:!1,isOpen:!1,isSelected:!1}),computed:{disabled(){return(0,S.vO)(this.item,this.itemDisabled)||!this.disablePerNode&&this.parentIsDisabled&&"leaf"===this.selectionType},key(){return(0,S.vO)(this.item,this.itemKey)},children(){const e=(0,S.vO)(this.item,this.itemChildren);return e&&e.filter((e=>!this.treeview.isExcluded((0,S.vO)(e,this.itemKey))))},text(){return(0,S.vO)(this.item,this.itemText)},scopedProps(){return{item:this.item,leaf:!this.children,selected:this.isSelected,indeterminate:this.isIndeterminate,active:this.isActive,open:this.isOpen}},computedIcon(){return this.isIndeterminate?this.indeterminateIcon:this.isSelected?this.onIcon:this.offIcon},hasChildren(){return!!this.children&&(!!this.children.length||!!this.loadChildren)}},created(){this.treeview.register(this)},beforeDestroy(){this.treeview.unregister(this)},methods:{checkChildren(){return new Promise((e=>{if(!this.children||this.children.length||!this.loadChildren||this.hasLoaded)return e();this.isLoading=!0,e(this.loadChildren(this.item))})).then((()=>{this.isLoading=!1,this.hasLoaded=!0}))},open(){this.isOpen=!this.isOpen,this.treeview.updateOpen(this.key,this.isOpen),this.treeview.emitOpen()},genLabel(){const e=[];return this.$scopedSlots.label?e.push(this.$scopedSlots.label(this.scopedProps)):e.push(this.text),this.$createElement("div",{slot:"label",staticClass:"v-treeview-node__label"},e)},genPrependSlot(){return this.$scopedSlots.prepend?this.$createElement("div",{staticClass:"v-treeview-node__prepend"},this.$scopedSlots.prepend(this.scopedProps)):null},genAppendSlot(){return this.$scopedSlots.append?this.$createElement("div",{staticClass:"v-treeview-node__append"},this.$scopedSlots.append(this.scopedProps)):null},genContent(){const e=[this.genPrependSlot(),this.genLabel(),this.genAppendSlot()];return this.$createElement("div",{staticClass:"v-treeview-node__content"},e)},genToggle(){return this.$createElement(d.Z,{staticClass:"v-treeview-node__toggle",class:{"v-treeview-node__toggle--open":this.isOpen,"v-treeview-node__toggle--loading":this.isLoading},slot:"prepend",on:{click:e=>{e.stopPropagation(),this.isLoading||this.checkChildren().then((()=>this.open()))}}},[this.isLoading?this.loadingIcon:this.expandIcon])},genCheckbox(){return this.$createElement(d.Z,{staticClass:"v-treeview-node__checkbox",props:{color:this.isSelected||this.isIndeterminate?this.selectedColor:void 0,disabled:this.disabled},on:{click:e=>{e.stopPropagation(),this.isLoading||this.checkChildren().then((()=>{this.$nextTick((()=>{this.isSelected=!this.isSelected,this.isIndeterminate=!1,this.treeview.updateSelected(this.key,this.isSelected),this.treeview.emitSelected()}))}))}}},[this.computedIcon])},genLevel(e){return(0,S.MT)(e).map((()=>this.$createElement("div",{staticClass:"v-treeview-node__level"})))},genNode(){const e=[this.genContent()];return this.selectable&&e.unshift(this.genCheckbox()),this.hasChildren?e.unshift(this.genToggle()):e.unshift(...this.genLevel(1)),e.unshift(...this.genLevel(this.level)),this.$createElement("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-treeview-node__root",class:{[this.activeClass]:this.isActive},on:{click:()=>{this.openOnClick&&this.hasChildren?this.checkChildren().then(this.open):this.activatable&&!this.disabled&&(this.isActive=!this.isActive,this.treeview.updateActive(this.key,this.isActive),this.treeview.emitActive())}}}),e)},genChild(e,t){return this.$createElement(w,{key:(0,S.vO)(e,this.itemKey),props:{activatable:this.activatable,activeClass:this.activeClass,item:e,selectable:this.selectable,selectedColor:this.selectedColor,color:this.color,disablePerNode:this.disablePerNode,expandIcon:this.expandIcon,indeterminateIcon:this.indeterminateIcon,offIcon:this.offIcon,onIcon:this.onIcon,loadingIcon:this.loadingIcon,itemKey:this.itemKey,itemText:this.itemText,itemDisabled:this.itemDisabled,itemChildren:this.itemChildren,loadChildren:this.loadChildren,transition:this.transition,openOnClick:this.openOnClick,rounded:this.rounded,shaped:this.shaped,level:this.level+1,selectionType:this.selectionType,parentIsDisabled:t},scopedSlots:this.$scopedSlots})},genChildrenWrapper(){if(!this.isOpen||!this.children)return null;const e=[this.children.map((e=>this.genChild(e,this.disabled)))];return this.$createElement("div",{staticClass:"v-treeview-node__children"},e)},genTransition(){return this.$createElement(f.Fx,[this.genChildrenWrapper()])}},render(e){const t=[this.genNode()];return this.transition?t.push(this.genTransition()):t.push(this.genChildrenWrapper()),e("div",{staticClass:"v-treeview-node",class:{"v-treeview-node--leaf":!this.hasChildren,"v-treeview-node--click":this.openOnClick,"v-treeview-node--disabled":this.disabled,"v-treeview-node--rounded":this.rounded,"v-treeview-node--shaped":this.shaped,"v-treeview-node--selected":this.isSelected},attrs:{"aria-expanded":String(this.isOpen)}},t)}});var I=w,x=i(6669),A=i(4101);function _(e,t,i){const s=(0,S.vO)(e,i);return s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}function $(e,t,i,s,n,a,o){if(e(t,i,n))return!0;const h=(0,S.vO)(t,a);if(h){let t=!1;for(let r=0;r<h.length;r++)$(e,h[r],i,s,n,a,o)&&(t=!0);if(t)return!0}return o.add((0,S.vO)(t,s)),!1}var Z=(0,y.Z)((0,C.J)("treeview"),x.Z).extend({name:"v-treeview",provide(){return{treeview:this}},props:{active:{type:Array,default:()=>[]},dense:Boolean,disabled:Boolean,filter:Function,hoverable:Boolean,items:{type:Array,default:()=>[]},multipleActive:Boolean,open:{type:Array,default:()=>[]},openAll:Boolean,returnObject:{type:Boolean,default:!1},search:String,value:{type:Array,default:()=>[]},...O},data:()=>({level:-1,activeCache:new Set,nodes:{},openCache:new Set,selectedCache:new Set}),computed:{excludedItems(){const e=new Set;if(!this.search)return e;for(let t=0;t<this.items.length;t++)$(this.filter||_,this.items[t],this.search,this.itemKey,this.itemText,this.itemChildren,e);return e}},watch:{items:{handler(){const e=Object.keys(this.nodes).map((e=>(0,S.vO)(this.nodes[e].item,this.itemKey))),t=this.getKeys(this.items),i=(0,S.tX)(t,e);if(!i.length&&t.length<e.length)return;i.forEach((e=>delete this.nodes[e]));const s=[...this.selectedCache];this.selectedCache=new Set,this.activeCache=new Set,this.openCache=new Set,this.buildTree(this.items),(0,S.vZ)(s,[...this.selectedCache])||this.emitSelected()},deep:!0},active(e){this.handleNodeCacheWatcher(e,this.activeCache,this.updateActive,this.emitActive)},value(e){this.handleNodeCacheWatcher(e,this.selectedCache,this.updateSelected,this.emitSelected)},open(e){this.handleNodeCacheWatcher(e,this.openCache,this.updateOpen,this.emitOpen)}},created(){const e=e=>this.returnObject?(0,S.vO)(e,this.itemKey):e;this.buildTree(this.items);for(const t of this.value.map(e))this.updateSelected(t,!0,!0);for(const t of this.active.map(e))this.updateActive(t,!0)},mounted(){(this.$slots.prepend||this.$slots.append)&&(0,A.Kd)("The prepend and append slots require a slot-scope attribute",this),this.openAll?this.updateAll(!0):(this.open.forEach((e=>this.updateOpen(this.returnObject?(0,S.vO)(e,this.itemKey):e,!0))),this.emitOpen())},methods:{updateAll(e){Object.keys(this.nodes).forEach((t=>this.updateOpen((0,S.vO)(this.nodes[t].item,this.itemKey),e))),this.emitOpen()},getKeys(e,t=[]){for(let i=0;i<e.length;i++){const s=(0,S.vO)(e[i],this.itemKey);t.push(s);const n=(0,S.vO)(e[i],this.itemChildren);n&&t.push(...this.getKeys(n))}return t},buildTree(e,t=null){var i;for(let s=0;s<e.length;s++){const n=e[s],a=(0,S.vO)(n,this.itemKey),o=null!==(i=(0,S.vO)(n,this.itemChildren))&&void 0!==i?i:[],h=this.nodes.hasOwnProperty(a)?this.nodes[a]:{isSelected:!1,isIndeterminate:!1,isActive:!1,isOpen:!1,vnode:null},r={vnode:h.vnode,parent:t,children:o.map((e=>(0,S.vO)(e,this.itemKey))),item:n};if(this.buildTree(o,a),"independent"!==this.selectionType&&null!==t&&!this.nodes.hasOwnProperty(a)&&this.nodes.hasOwnProperty(t)?r.isSelected=this.nodes[t].isSelected:(r.isSelected=h.isSelected,r.isIndeterminate=h.isIndeterminate),r.isActive=h.isActive,r.isOpen=h.isOpen,this.nodes[a]=r,o.length&&"independent"!==this.selectionType){const{isSelected:e,isIndeterminate:t}=this.calculateState(a,this.nodes);r.isSelected=e,r.isIndeterminate=t}!this.nodes[a].isSelected||"independent"!==this.selectionType&&0!==r.children.length||this.selectedCache.add(a),this.nodes[a].isActive&&this.activeCache.add(a),this.nodes[a].isOpen&&this.openCache.add(a),this.updateVnodeState(a)}},calculateState(e,t){const i=t[e].children,s=i.reduce(((e,i)=>(e[0]+=+Boolean(t[i].isSelected),e[1]+=+Boolean(t[i].isIndeterminate),e)),[0,0]),n=!!i.length&&s[0]===i.length,a=!n&&(s[0]>0||s[1]>0);return{isSelected:n,isIndeterminate:a}},emitOpen(){this.emitNodeCache("update:open",this.openCache)},emitSelected(){this.emitNodeCache("input",this.selectedCache)},emitActive(){this.emitNodeCache("update:active",this.activeCache)},emitNodeCache(e,t){this.$emit(e,this.returnObject?[...t].map((e=>this.nodes[e].item)):[...t])},handleNodeCacheWatcher(e,t,i,s){e=this.returnObject?e.map((e=>(0,S.vO)(e,this.itemKey))):e;const n=[...t];(0,S.vZ)(n,e)||(n.forEach((e=>i(e,!1))),e.forEach((e=>i(e,!0))),s())},getDescendants(e,t=[]){const i=this.nodes[e].children;t.push(...i);for(let s=0;s<i.length;s++)t=this.getDescendants(i[s],t);return t},getParents(e){let t=this.nodes[e].parent;const i=[];while(null!==t)i.push(t),t=this.nodes[t].parent;return i},register(e){const t=(0,S.vO)(e.item,this.itemKey);this.nodes[t].vnode=e,this.updateVnodeState(t)},unregister(e){const t=(0,S.vO)(e.item,this.itemKey);this.nodes[t]&&(this.nodes[t].vnode=null)},isParent(e){return this.nodes[e].children&&this.nodes[e].children.length},updateActive(e,t){if(!this.nodes.hasOwnProperty(e))return;this.multipleActive||this.activeCache.forEach((e=>{this.nodes[e].isActive=!1,this.updateVnodeState(e),this.activeCache.delete(e)}));const i=this.nodes[e];i&&(t?this.activeCache.add(e):this.activeCache.delete(e),i.isActive=t,this.updateVnodeState(e))},updateSelected(e,t,i=!1){if(!this.nodes.hasOwnProperty(e))return;const s=new Map;if("independent"!==this.selectionType){for(const a of this.getDescendants(e))(0,S.vO)(this.nodes[a].item,this.itemDisabled)&&!i||(this.nodes[a].isSelected=t,this.nodes[a].isIndeterminate=!1,s.set(a,t));const n=this.calculateState(e,this.nodes);this.nodes[e].isSelected=t,this.nodes[e].isIndeterminate=n.isIndeterminate,s.set(e,t);for(const t of this.getParents(e)){const e=this.calculateState(t,this.nodes);this.nodes[t].isSelected=e.isSelected,this.nodes[t].isIndeterminate=e.isIndeterminate,s.set(t,e.isSelected)}}else this.nodes[e].isSelected=t,this.nodes[e].isIndeterminate=!1,s.set(e,t);for(const[n,a]of s.entries())this.updateVnodeState(n),"leaf"===this.selectionType&&this.isParent(n)||(!0===a?this.selectedCache.add(n):this.selectedCache.delete(n))},updateOpen(e,t){if(!this.nodes.hasOwnProperty(e))return;const i=this.nodes[e],s=(0,S.vO)(i.item,this.itemChildren);s&&!s.length&&i.vnode&&!i.vnode.hasLoaded?i.vnode.checkChildren().then((()=>this.updateOpen(e,t))):s&&s.length&&(i.isOpen=t,i.isOpen?this.openCache.add(e):this.openCache.delete(e),this.updateVnodeState(e))},updateVnodeState(e){const t=this.nodes[e];t&&t.vnode&&(t.vnode.isSelected=t.isSelected,t.vnode.isIndeterminate=t.isIndeterminate,t.vnode.isActive=t.isActive,t.vnode.isOpen=t.isOpen)},isExcluded(e){return!!this.search&&this.excludedItems.has(e)}},render(e){const t=this.items.length?this.items.filter((e=>!this.isExcluded((0,S.vO)(e,this.itemKey)))).map((e=>{const t=I.options.methods.genChild.bind(this);return t(e,this.disabled||(0,S.vO)(e,this.itemDisabled))})):this.$slots.default;return e("div",{staticClass:"v-treeview",class:{"v-treeview--hoverable":this.hoverable,"v-treeview--dense":this.dense,...this.themeClasses}},t)}}),T=function(){var e=this,t=e._self._c;return t(l.Z,{attrs:{cols:10}},[t(m.Z,{staticClass:"overflow-auto",attrs:{"min-height":"60vh","max-height":"80vh",rounded:"lg",elevation:"2"}},[t(l.Z,[t(v.Z,{attrs:{label:"Search Directory / Stuff",outlined:"","background-color":"white","hide-details":"",clearable:"","clear-icon":"mdi-close-circle-outline"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),t(o,{attrs:{"hide-details":"",label:"Case sensitive search"},model:{value:e.caseSensitive,callback:function(t){e.caseSensitive=t},expression:"caseSensitive"}}),t(Z,{attrs:{items:e.items,"return-object":"",search:e.search,filter:e.filter,open:e.open,"open-all":"",dense:"",hoverable:"",rounded:"","selected-color":"blue"},on:{"update:open":function(t){e.open=t}},scopedSlots:e._u([{key:"prepend",fn:function({item:i,open:s}){return[t(r.Z,[t(h.Z,{style:"background: linear-gradient(0.45turn,"+i.mainColor+","+i.minorColor+")",attrs:{small:""}}),t(h.Z,{attrs:{small:"",dark:""}},[e._v(" "+e._s(i.attribute)+" ")]),t(h.Z,{attrs:{small:"",dark:""}},[e._v(" "+e._s(i.size)+" ")]),t(d.Z,{attrs:{color:i.isBookmarks?"green":"red"}},[e._v(" "+e._s(i.isBookmarks?"mdi-book-check":"mdi-book-cancel")+" ")])],1)]}},{key:"append",fn:function({item:i}){return[t(g.Z,{attrs:{left:"",color:"#00000044"},scopedSlots:e._u([{key:"activator",fn:function({on:i,attrs:s}){return[t(m.Z,e._g(e._b({attrs:{height:"40px",width:"250px"}},"v-sheet",s,!1),i))]}}],null,!0)},[t(c.Z,{staticClass:"rounded",attrs:{src:i.image,alt:"No Image","max-width":"300px",width:"300px","max-height":"200px",height:"200px"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[t(u.Z,{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},["Root"!=i.name?t(p.Z,{attrs:{indeterminate:"",color:"grey lighten-5"}}):e._e(),"Root"==i.name?t(d.Z,{attrs:{dark:"",large:""}},[e._v("mdi-cancel")]):e._e()],1)]},proxy:!0}],null,!0)})],1)]}}]),model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}})],1)],1)],1)},B=[],L=JSON.parse('{"name":"Root","id":"648fdfbb54b0950d00c37c2e","image":"","children":[{"name":"老家","id":"648fe2130df02d3007092a58","mainColor":"#2196F3","minorColor":"#ffaaaa","attribute":"老家罢了","image":"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg","children":[{"name":"大书柜","id":"648fe4410df02d3007092a61","mainColor":"#ffaaaa","minorColor":"#aaffff","isBookmarks":true,"attribute":"书柜","image":"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg","children":[{"name":"劳力士","id":"648fe2130df02d3007092a64","mainColor":"#cecece","minorColor":"#818596","isBookmarks":true,"attribute":"手表","image":"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"},{"name":"充电宝","id":"648fe2130df02d3007092a63","mainColor":"#eeeeee","minorColor":"#242631","isBookmarks":false,"attribute":"电器","image":"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"}]}]}]}'),D={name:"BookmarkView",components:{},data:()=>({selection:[],open:[1,2],search:null,treeSearchResult:null,caseSensitive:!1,items:[L]}),computed:{filter(){return this.caseSensitive?(e,t,i)=>e[i].indexOf(t)>-1:void 0}},methods:{}},V=D,E=i(1001),P=(0,E.Z)(V,T,B,!1,null,null,null),K=P.exports},7393:function(){},2082:function(e,t,i){i.d(t,{Z:function(){return c}});var s=i(1452),n=i(6878),a=i(3016),o=i(908),h=i(8938),r=i(5352),l=i(4101),d=i(7678),c=(0,d.Z)(n.Z,a.Z,o.Z,h.Z).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:e,content:t}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?e.offsetLeft:e.left;let n=0;return this.top||this.bottom||i?n=s+e.width/2-t.width/2:(this.left||this.right)&&(n=s+(this.right?e.width:-t.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),`${this.calcXOverflow(n,this.dimensions.content.width)}px`},calculatedTop(){const{activator:e,content:t}=this.dimensions,i=!1!==this.attach?e.offsetTop:e.top;let s=0;return this.top||this.bottom?s=i+(this.bottom?e.height:-t.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=i+e.height/2-t.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),!1===this.attach&&(s+=this.pageYOffset),`${this.calcYOverflow(s)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:(0,r.kb)(this.maxWidth),minWidth:(0,r.kb)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick((()=>{this.value&&this.callActivate()}))},mounted(){"v-slot"===(0,r.sp)(this,"activator",!0)&&(0,l.N6)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const e=s.Z.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(e.focus=e=>{this.getActivator(e),this.runDelay("open")},e.blur=e=>{this.getActivator(e),this.runDelay("close")}),e.keydown=e=>{e.keyCode===r.keyCodes.esc&&(this.getActivator(e),this.runDelay("close"))},e},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const e=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[e]):e},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(e){return e(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((()=>[this.genTransition()])),this.genActivator()])}})},596:function(e,t,i){i.d(t,{Z:function(){return d}});i(7658);var s=i(573),n=i(7069),a=i(144),o=a.ZP.extend({name:"rippleable",directives:{ripple:n.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(e={}){return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),h=i(6174),r=i(7678);function l(e){e.preventDefault()}var d=(0,r.Z)(s.Z,o,h.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const e=this.value,t=this.internalValue;return this.isMultiple?!!Array.isArray(t)&&t.some((t=>this.valueComparator(t,e))):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,t):Boolean(t):this.valueComparator(t,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel(){const e=s.Z.options.methods.genLabel.call(this);return e?(e.data.on={click:l},e):e},genInput(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:l},ref:"input"})},onClick(e){this.onChange(),this.$emit("click",e)},onChange(){if(!this.isInteractive)return;const e=this.value;let t=this.internalValue;if(this.isMultiple){Array.isArray(t)||(t=[]);const i=t.length;t=t.filter((t=>!this.valueComparator(t,e))),t.length===i&&t.push(e)}else t=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(t,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(t,e)?null:e:!t;this.validate(!0,t),this.internalValue=t,this.hasColor=t},onFocus(e){this.isFocused=!0,this.$emit("focus",e)},onBlur(e){this.isFocused=!1,this.$emit("blur",e)},onKeydown(e){}}})}}]);
//# sourceMappingURL=621.c0447291.js.map