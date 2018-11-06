(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(e,t,r){"use strict";r.r(t);var n=r(0),a=(r(168),r(7)),o=r.n(a),i=r(49),c=r.n(i),s=(r(34),r(75),r(47),r(171),r(48),r(164)),p={BOX:"box"},u=r(173),l={border:"1px dashed gray",padding:"0.5rem 1rem",cursor:"move"},f=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,r=e.yellow?"yellow":"white";return n.createElement("div",{style:Object.assign({},l,{backgroundColor:r})},t)},t}(n.PureComponent);var d=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this.props.connectDragPreview;e&&e(Object(u.getEmptyImage)(),{captureDraggingState:!0})},r.render=function(){var e,t,r,a,o,i=this.props,c=i.title,s=i.connectDragSource;return s&&s(n.createElement("div",{style:(e=this.props,t=e.left,r=e.top,a=e.isDragging,o="translate3d("+t+"px, "+r+"px, 0)",{position:"absolute",transform:o,WebkitTransform:o,opacity:a?0:1,height:a?0:""})},n.createElement(f,{title:c})))},t}(n.PureComponent),g=Object(s.DragSource)(p.BOX,{beginDrag:function(e){return{id:e.id,title:e.title,left:e.left,top:e.top}}},function(e,t){return{connectDragSource:e.dragSource(),connectDragPreview:e.dragPreview(),isDragging:t.isDragging()}})(d);function h(e,t){return[32*Math.round(e/32),32*Math.round(t/32)]}var y=r(167),m={width:300,height:300,border:"1px solid black",position:"relative"},v={drop:function(e,t,r){if(r){var n=t.getDifferenceFromInitialOffset(),a=t.getItem(),o=Math.round(a.left+n.x),i=Math.round(a.top+n.y);if(e.snapToGrid){var c=h(o,i);o=c[0],i=c[1]}r.moveBox(a.id,o,i)}}},b=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={boxes:{a:{top:20,left:80,title:"Drag me around"},b:{top:180,left:20,title:"Drag me too"}}},r}o()(t,e);var r=t.prototype;return r.render=function(){var e=this,t=this.props.connectDropTarget,r=this.state.boxes;return t&&t(n.createElement("div",{style:m},Object.keys(r).map(function(t){return e.renderBox(r[t],t)})))},r.moveBox=function(e,t,r){var n;this.setState(y(this.state,{boxes:(n={},n[e]={$merge:{left:t,top:r}},n)}))},r.renderBox=function(e,t){return n.createElement(g,Object.assign({key:t,id:t},e))},t}(n.PureComponent),w=Object(s.DropTarget)(p.BOX,v,function(e){return{connectDropTarget:e.dropTarget()}})(b),D={display:"inline-block",transform:"rotate(-7deg)",WebkitTransform:"rotate(-7deg)"},E=function(e){function t(t){var r;return(r=e.call(this,t)||this).tick=r.tick.bind(c()(c()(r))),r.state={tickTock:!1},r}o()(t,e);var r=t.prototype;return r.componentDidMount=function(){this.interval=setInterval(this.tick,500)},r.componentWillUnmount=function(){clearInterval(this.interval)},r.render=function(){var e=this.props.title,t=this.state.tickTock;return n.createElement("div",{style:D},n.createElement(f,{title:e,yellow:t}))},r.tick=function(){this.setState({tickTock:!this.state.tickTock})},t}(n.PureComponent),T={position:"fixed",pointerEvents:"none",zIndex:100,left:0,top:0,width:"100%",height:"100%"};var x=Object(s.DragLayer)(function(e){return{item:e.getItem(),itemType:e.getItemType(),initialOffset:e.getInitialSourceClientOffset(),currentOffset:e.getSourceClientOffset(),isDragging:e.isDragging()}})(function(e){var t=e.item,r=e.itemType;return e.isDragging?n.createElement("div",{style:T},n.createElement("div",{style:function(e){var t=e.initialOffset,r=e.currentOffset;if(!t||!r)return{display:"none"};var n=r.x,a=r.y;if(e.snapToGrid){var o=h(n-=t.x,a-=t.y);n=o[0],a=o[1],n+=t.x,a+=t.y}var i="translate("+n+"px, "+a+"px)";return{transform:i,WebkitTransform:i}}(e)},function(){switch(r){case p.BOX:return n.createElement(E,{title:t.title});default:return null}}())):null}),k=function(e){function t(t){var r;return(r=e.call(this,t)||this).handleSnapToGridAfterDropChange=r.handleSnapToGridAfterDropChange.bind(c()(c()(r))),r.handleSnapToGridWhileDraggingChange=r.handleSnapToGridWhileDraggingChange.bind(c()(c()(r))),r.state={snapToGridAfterDrop:!1,snapToGridWhileDragging:!1},r}o()(t,e);var r=t.prototype;return r.render=function(){var e=this.state,t=e.snapToGridAfterDrop,r=e.snapToGridWhileDragging;return n.createElement("div",null,n.createElement("p",null,n.createElement("b",null,n.createElement("a",{href:"https://github.com/react-dnd/react-dnd/tree/master/packages/documentation/src/examples/02%20Drag%20Around/Custom%20Drag%20Layer"},"Browse the Source"))),n.createElement("p",null,"The browser APIs provide no way to change the drag preview or its behavior once drag has started. Libraries such as jQuery UI implement the drag and drop from scratch to work around this, but react-dnd only supports browser drag and drop “backend” for now, so we have to accept its limitations."),n.createElement("p",null,"We can, however, customize behavior a great deal if we feed the browser an empty image as drag preview. This library provides a"," ",n.createElement("code",null,"DragLayer")," that you can use to implement a fixed layer on top of your app where you'd draw a custom drag preview component."),n.createElement("p",null,"Note that we can draw a completely different component on our drag layer if we wish so. It's not just a screenshot."),n.createElement("p",null,"With this approach, we miss out on default “return” animation when dropping outside the container. However, we get great flexibility in customizing drag feedback and zero flicker."),n.createElement(w,{snapToGrid:t}),n.createElement(x,{snapToGrid:r}),n.createElement("p",null,n.createElement("label",{htmlFor:"snapToGridWhileDragging"},n.createElement("input",{id:"snapToGridWhileDragging",type:"checkbox",checked:r,onChange:this.handleSnapToGridWhileDraggingChange}),n.createElement("small",null,"Snap to grid while dragging")),n.createElement("br",null),n.createElement("label",{htmlFor:"snapToGridAfterDrop"},n.createElement("input",{id:"snapToGridAfterDrop",type:"checkbox",checked:t,onChange:this.handleSnapToGridAfterDropChange}),n.createElement("small",null,"Snap to grid after drop"))))},r.handleSnapToGridAfterDropChange=function(){this.setState({snapToGridAfterDrop:!this.state.snapToGridAfterDrop})},r.handleSnapToGridWhileDraggingChange=function(){this.setState({snapToGridWhileDragging:!this.state.snapToGridWhileDragging})},t}(n.Component),O=r(165);t.default=function(e){return n.createElement(O.a,e,n.createElement(k,null))}},167:function(e,t,r){var n=r(77),a=Object.prototype.hasOwnProperty,o=Array.prototype.splice,i=Object.prototype.toString,c=function(e){return i.call(e).slice(8,-1)},s=Object.assign||function(e,t){return p(t).forEach(function(r){a.call(t,r)&&(e[r]=t[r])}),e},p="function"==typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function u(e){if(Array.isArray(e))return s(e.constructor(e.length),e);if("Map"===c(e))return new Map(e);if("Set"===c(e))return new Set(e);if(e&&"object"==typeof e){var t=Object.getPrototypeOf(e);return s(Object.create(t),e)}return e}function l(){var e=s({},f);return t.extend=function(t,r){e[t]=r},t.isEquals=function(e,t){return e===t},t;function t(r,o){"function"==typeof o&&(o={$apply:o}),Array.isArray(r)&&Array.isArray(o)||n(!Array.isArray(o),"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."),n("object"==typeof o&&null!==o,"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: %s.",Object.keys(e).join(", "));var i=r;return p(o).forEach(function(n){if(a.call(e,n)){var s=r===i;i=e[n](o[n],i,o,r),s&&t.isEquals(i,r)&&(i=r)}else{var p="Map"===c(r)?t(r.get(n),o[n]):t(r[n],o[n]),l="Map"===c(i)?i.get(n):i[n];t.isEquals(p,l)&&(void 0!==p||a.call(r,n))||(i===r&&(i=u(r)),"Map"===c(i)?i.set(n,p):i[n]=p)}}),i}}var f={$push:function(e,t,r){return g(t,r,"$push"),e.length?t.concat(e):t},$unshift:function(e,t,r){return g(t,r,"$unshift"),e.length?e.concat(t):t},$splice:function(e,t,r,a){return function(e,t){n(Array.isArray(e),"Expected $splice target to be an array; got %s",e),y(t.$splice)}(t,r),e.forEach(function(e){y(e),t===a&&e.length&&(t=u(a)),o.apply(t,e)}),t},$set:function(e,t,r){return function(e){n(1===Object.keys(e).length,"Cannot have more than one key in an object with $set")}(r),e},$toggle:function(e,t){h(e,"$toggle");var r=e.length?u(t):t;return e.forEach(function(e){r[e]=!t[e]}),r},$unset:function(e,t,r,n){return h(e,"$unset"),e.forEach(function(e){Object.hasOwnProperty.call(t,e)&&(t===n&&(t=u(n)),delete t[e])}),t},$add:function(e,t,r,n){return m(t,"$add"),h(e,"$add"),"Map"===c(t)?e.forEach(function(e){var r=e[0],a=e[1];t===n&&t.get(r)!==a&&(t=u(n)),t.set(r,a)}):e.forEach(function(e){t!==n||t.has(e)||(t=u(n)),t.add(e)}),t},$remove:function(e,t,r,n){return m(t,"$remove"),h(e,"$remove"),e.forEach(function(e){t===n&&t.has(e)&&(t=u(n)),t.delete(e)}),t},$merge:function(e,t,r,a){var o,i;return o=t,n((i=e)&&"object"==typeof i,"update(): $merge expects a spec of type 'object'; got %s",i),n(o&&"object"==typeof o,"update(): $merge expects a target of type 'object'; got %s",o),p(e).forEach(function(r){e[r]!==t[r]&&(t===a&&(t=u(a)),t[r]=e[r])}),t},$apply:function(e,t){var r;return n("function"==typeof(r=e),"update(): expected spec of $apply to be a function; got %s.",r),e(t)}},d=l();function g(e,t,r){n(Array.isArray(e),"update(): expected target of %s to be an array; got %s.",r,e),h(t[r],r)}function h(e,t){n(Array.isArray(e),"update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?",t,e)}function y(e){n(Array.isArray(e),"update(): expected spec of $splice to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",e)}function m(e,t){var r=c(e);n("Map"===r||"Set"===r,"update(): %s expects a target of type Set or Map; got %s",t,r)}e.exports=d,e.exports.default=d,e.exports.newContext=l}}]);
//# sourceMappingURL=component---src-pages-examples-drag-around-custom-drag-layer-tsx-afa1d0eaac5c125c7fba.js.map