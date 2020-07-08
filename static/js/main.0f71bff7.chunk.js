(this["webpackJsonpphone-book-ls"]=this["webpackJsonpphone-book-ls"]||[]).push([[0],{102:function(e,t,n){},271:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(91),c=n.n(r),i=(n(102),n(96)),l=n(3),s=n(4),m=n(6),u=n(5),p=n(92),d=n(33),h=n(52),f=n.n(h),b=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={name:""},e.handleChange=function(t){e.setState(Object(d.a)({},t.currentTarget.name,t.currentTarget.value))},e.onSubmit=function(t){t.preventDefault(),""!==e.state.name?(e.props.onSubmit(e.state),e.setState({name:""})):alert("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430")},e.handleResetInput=function(){e.setState({name:""})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:f.a.logo,onClick:function(){return e.handleResetInput()}},o.a.createElement("h1",null,"DAYRY APP"),o.a.createElement("p",null,"Comment with no sense")),o.a.createElement("h2",{className:f.a.title},"Items"),o.a.createElement("form",{onSubmit:this.onSubmit,className:"input-group mb-3"},o.a.createElement("input",{type:"input",name:"name",value:this.state.name,onChange:this.handleChange,className:"form-control",placeholder:"Type name here..."}),o.a.createElement("button",{type:"submit",className:"btn btn-info",id:"button-addon2"},"Add New")))}}]),n}(o.a.Component),v=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleToggleComment=function(t){e.props.onToggleComment(t),e.props.onCheck(t)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.name,a=t.id,r=t.onDeleteItem,c=t.active,i=t.comments;return o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{className:c===a?"list-group-item d-flex justify-content-between align-items-center checked":"list-group-item d-flex justify-content-between align-items-center",onClick:function(){return e.handleToggleComment(a)}},n,o.a.createElement("div",{className:"deleteButton"},o.a.createElement("span",{className:"badge badge-primary badge-pill"},i.length),o.a.createElement("button",{type:"button",onClick:function(){return r(a)},className:"btn btn-outline-danger"},"Delete"))))}}]),n}(o.a.Component),g=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={active:""},e.checkItem=function(t){e.setState({active:t})},e.passItemIdToComment=function(){e.props.onToggleComment(e.state.active)},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.items,a=t.onDeleteItem;return o.a.createElement("ul",{className:"list-group"},n.map((function(t){return o.a.createElement(v,{key:t.id,name:t.name,id:t.id,comments:t.comments,onDeleteItem:a,onCheck:e.checkItem,active:e.state.active,onToggleComment:e.passItemIdToComment})})))}}]),n}(o.a.Component),C=n(93),y=n.n(C);var O=function(e){return o.a.createElement("div",{className:y.a.container},o.a.createElement(b,{onSubmit:e.onAddItem}),o.a.createElement(g,{onDeleteItem:e.onDeleteItem,onToggleComment:e.onToggleComment,items:e.items}))},j=n(1),k=n.n(j),E=n(94),S=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={displayColorPicker:!1,color:{r:"77",g:"63",b:"63",a:"1"}},e.handleClick=function(){e.setState({displayColorPicker:!e.state.displayColorPicker})},e.handleClose=function(){e.setState({displayColorPicker:!1}),e.props.onSetColor(e.state)},e.handleChange=function(t){e.setState({color:t.rgb})},e}return Object(s.a)(n,[{key:"render",value:function(){var e=k()({default:{color:{width:"40px",height:"40px",borderRadius:"2px",background:"rgba(".concat(this.state.color.r,", ").concat(this.state.color.g,", ").concat(this.state.color.b,", ").concat(this.state.color.a,")")},swatch:{padding:"10px",background:"#fff",borderRadius:"1px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block",cursor:"pointer"},popover:{position:"absolute",zIndex:"2"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}}});return o.a.createElement("div",null,o.a.createElement("div",{style:e.swatch,onClick:this.handleClick},o.a.createElement("div",{style:e.color})),this.state.displayColorPicker?o.a.createElement("div",{style:e.popover},o.a.createElement("div",{style:e.cover,onClick:this.handleClose}),o.a.createElement(E.PhotoshopPicker,{color:this.state.color,onChange:this.handleChange})):null)}}]),n}(o.a.Component),x=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={value:""},e.handleChange=function(t){e.setState(Object(d.a)({},t.currentTarget.name,t.currentTarget.value))},e.onSubmit=function(t){t.preventDefault(),e.props.onAddComment(e.state),e.setState({value:""})},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,className:"input-group mb-3"},o.a.createElement(S,{onSetColor:this.props.onSetColor}),o.a.createElement("textarea",{type:"input",name:"value",value:this.state.value,onChange:this.handleChange,className:"form-control",placeholder:"Type comment here..."}),o.a.createElement("button",{type:"submit",className:"btn btn-info",id:"button-addon2"},"Add New"))}}]),n}(o.a.Component),I=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=k()({default:{color:{width:"40px",height:"40px",borderRadius:"2px",background:"rgba(".concat(this.props.color.r,", ").concat(this.props.color.g,", ").concat(this.props.color.b,", ").concat(this.props.color.a,")")},swatch:{padding:"3px",marginRight:"10px",background:"#fff",borderRadius:"1px",boxShadow:"0 0 0 1px rgba(0,0,0,.1)",display:"inline-block"},popover:{position:"absolute",zIndex:"2"},cover:{position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}}});return o.a.createElement("div",{style:e.swatch,onClick:this.handleClick},o.a.createElement("div",{style:e.color}))}}]),n}(o.a.Component),N=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={color:{r:e.props.commentColor.r,g:e.props.commentColor.g,b:e.props.commentColor.b,a:e.props.commentColor.a}},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.commentColor!==e.commentColor&&this.setState({color:this.state.color})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{className:"list-group-item comment-item"},o.a.createElement(I,{color:this.state.color}),this.props.comment))}}]),n}(o.a.Component),w=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.items,n=e.commentColor;return o.a.createElement("ul",{className:"list-group"},t.map((function(e){var t=e.id;return e.comments.map((function(e){var a=e.value;return o.a.createElement(N,{comment:a,key:t+a,commentColor:n})}))})))}}]),n}(o.a.Component),A=n(53),T=n.n(A),_=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={color:{r:"72",g:"63",b:"63",a:"1"}},e.handleSetCommentColor=function(t){var n=t.color;e.setState({color:n})},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:T.a.container},o.a.createElement("h2",{className:T.a.title},"Comments #",this.props.id),o.a.createElement(w,{items:this.props.items,commentColor:this.state.color,id:this.props.id}),o.a.createElement(x,{onAddComment:this.props.onAddComment,onSetColor:this.handleSetCommentColor}))}}]),n}(o.a.Component),D=n(95),L=n.n(D),P=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={itemsList:[],id:""},e.handleAddItem=function(t){var n={name:t.name,comments:[],id:Object(p.v4)()};e.setState((function(e){return{itemsList:[n].concat(Object(i.a)(e.itemsList))}}))},e.handleDeleteItem=function(t){e.setState((function(e){return{itemsList:e.itemsList.filter((function(e){return e.id!==t}))}}))},e.handleAddComment=function(t){var n=e.state.itemsList;if(n.length<1)alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0443 \u0432\u044b\u0448\u0435");else if(""!==e.state.id){var a=n.find((function(t){return t.id===e.state.id}));a&&a.comments.push(t),e.setState({itemsList:n})}else alert("\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u0430\u043c\u0435\u0442\u043a\u0443 \u0432\u044b\u0448\u0435, \u043a\u043b\u0438\u043a\u043d\u0443\u0432 \u043d\u0430 \u043d\u0435\u0435 2 \u0440\u0430\u0437\u0430")},e.handleToggleItem=function(t){e.setState({id:t})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("itemsList"),t=JSON.parse(e);t&&this.setState({itemsList:t})}},{key:"componentDidUpdate",value:function(e){var t=this.state.itemsList;t!==e.itemsList&&localStorage.setItem("itemsList",JSON.stringify(t))}},{key:"render",value:function(){return o.a.createElement("div",{className:L.a.container},o.a.createElement(O,{onToggleComment:this.handleToggleItem,onAddItem:this.handleAddItem,onDeleteItem:this.handleDeleteItem,items:this.state.itemsList}),o.a.createElement(_,{id:this.state.id,onAddComment:this.handleAddComment,items:this.state.itemsList}))}}]),n}(o.a.Component);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(P,null)),document.getElementById("root"))},52:function(e,t,n){e.exports={logo:"ItemsForm_logo__3yRzf",title:"ItemsForm_title__3ucad"}},53:function(e,t,n){e.exports={container:"Comments_container__v9c4l",title:"Comments_title__1Y5TN"}},93:function(e,t,n){e.exports={container:"Items_container__xOPIN"}},95:function(e,t,n){e.exports={container:"App_container__1MQN3"}},97:function(e,t,n){e.exports=n(271)}},[[97,1,2]]]);
//# sourceMappingURL=main.0f71bff7.chunk.js.map