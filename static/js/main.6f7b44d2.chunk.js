(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,n){e.exports=n(25)},18:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(5),c=n.n(i),s=n(10),u=n(6),m=n(7),l=n(12),o=n(11),d=(n(18),n(8)),p=function(e){return r.a.createElement("div",null,e.items.map((function(t){return r.a.createElement("div",{className:"list",key:t.key},r.a.createElement("p",null,r.a.createElement("input",{onChange:function(n){return e.itemUpdate(t.key,n.target.value)},value:t.text}),r.a.createElement("span",null,r.a.createElement(d.a,{className:"faicons",icon:"trash",onClick:function(){return e.deleteItem(t.key)}}))))})))},f=n(2),h=n(9);f.b.add(h.a);var v=function(e){Object(l.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleInput=function(e){a.setState({currentItem:{text:e.target.value,key:Date.now()}})},a.addItem=function(e){e.preventDefault();var t=a.state.currentItem;if(""!==t.text){var n=[].concat(Object(s.a)(a.state.items),[t]);a.setState({items:n,currentItem:{text:"",key:""}})}},a.deleteItem=function(e){var t=a.state.items.filter((function(t){return t.key!==e}));a.setState({items:t})},a.itemUpdate=function(e,t){var n=a.state.items;n.map((function(n){n.key===e&&(n.text=t)})),a.setState({items:n})},a.state={items:[],currentItem:{text:"",key:""}},a}return Object(m.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("form",{id:"to-do-form"},r.a.createElement("input",{type:"text",value:this.state.currentItem.text,onChange:this.handleInput,placeholder:"Enter Text"}),r.a.createElement("button",{type:"submit",className:"disableBlur",onClick:this.addItem},"Add")),r.a.createElement(p,{items:this.state.items,deleteItem:this.deleteItem,itemUpdate:this.itemUpdate}))}}]),n}(a.Component);n(24);c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.6f7b44d2.chunk.js.map