(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],[,,,,,,function(e,t,a){e.exports={task_container:"Task_task_container__19GJ5",content:"Task_content__uSX3-",task:"Task_task__dPMvK",remove:"Task_remove__3FgQA",removeTaskIcon:"Task_removeTaskIcon__1IsRY",removeTask:"Task_removeTask__1xfcK"}},function(e,t,a){e.exports={todo:"Todo_todo__2GHFy",wrapper:"Todo_wrapper__2HFV2",title:"Todo_title__7FrBu",clear:"Todo_clear__2hCec"}},,,function(e,t,a){e.exports={todo_container:"App_todo_container__33cNx",newTask:"App_newTask__2Ldze"}},function(e,t,a){e.exports={tasks:"TaskList_tasks__2dTVQ",startText:"TaskList_startText__1r4Uv"}},,function(e,t,a){e.exports={newTaskCont:"NewTask_newTaskCont__1UPIH"}},,,,,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(12),r=a.n(c),i=(a(18),a(2)),o=a(3),l=a(5),k=a(4),u=a(10),j=a.n(u),d=a(13),v=a.n(d),h=a(0),b=function(e){Object(l.a)(a,e);var t=Object(k.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={value:""},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:v.a.newTaskCont})}}]),a}(n.a.Component),T=a(8),p=a(6),_=a.n(p),O=function(e){Object(l.a)(a,e);var t=Object(k.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).strikethroughTask=function(e){var t=e;e.target.style.border="2px solid #183588",e.target.className=e.target.className+" "+_.a.removeTaskIcon,s.setState({remove:!0}),setTimeout((function(){s.props.callback(t)}),5e3)},s.state={remove:!1},s}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsx)("div",{className:_.a.task_container,children:Object(h.jsxs)("div",{className:_.a.content,children:[Object(h.jsx)("div",{className:this.state.remove?"".concat(_.a.task," ").concat(_.a.remove):_.a.task,children:this.props.taskText}),Object(h.jsx)("div",{className:_.a.removeTask,onClick:this.strikethroughTask,"data-key":this.props.keyOfStore,style:{border:"2px solid ".concat(this.props.colorButton%2===0?"#D103FC":"#1654B9")}})]})})}}]),a}(n.a.Component),m=a(11),f=a.n(m),x=function(e){Object(l.a)(a,e);var t=Object(k.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={tasks:new Map(Object.entries({1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9"}))},e.clickToRemoveTask=e.clickToRemoveTask.bind(Object(T.a)(e)),e}return Object(o.a)(a,[{key:"clickToRemoveTask",value:function(e){var t=e.target.dataset.key;this.setState((function(e){var a=e.tasks;return a.delete(t),{tasks:a}}))}},{key:"clean",value:function(){this.setState((function(e){return e.tasks.clear(),{tasks:e.tasks}}))}},{key:"componentDidUpdate",value:function(){0!==this.state.tasks.size?this.props.isClearAll&&this.clean():localStorage.clear()}},{key:"render",value:function(){var e=this;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:f.a.tasks,children:this.state.tasks.size?Object.entries(Object.fromEntries(this.state.tasks.entries())).map((function(t,a){return Object(h.jsx)(O,{taskText:t[1],keyOfStore:t[0],callback:e.clickToRemoveTask,colorButton:a},t.toString())})):Object(h.jsx)("div",{className:f.a.startText,children:"To start using the to-do list, add your first task. To do this, click on the plus in the lower right corner. In the window that opens, write a howl problem and voila!"})})})}}]),a}(n.a.Component),w=a(7),C=a.n(w),y=function(e){Object(l.a)(a,e);var t=Object(k.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).clearAllClick=function(){s.setState({clearAll:!0})},s.state={clearAll:!1,newTask:[]},s}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(){this.state.clearAll&&this.setState({clearAll:!1})}},{key:"saveNewTask",value:function(e){this.setState({newTask:e})}},{key:"render",value:function(){return Object(h.jsx)("div",{className:C.a.todo,children:Object(h.jsxs)("div",{className:C.a.wrapper,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:C.a.title,children:this.props.visible?"Todo's Tasks":"Create a new note"}),this.props.visible?Object(h.jsx)(x,{isClearAll:this.state.clearAll,newTask:this.state.newTask}):Object(h.jsx)(b,{visibleCallback:this.props.visibleCallback})]}),this.props.visible?Object(h.jsx)("div",{className:C.a.clear,onClick:this.clearAllClick,children:"Clear all"}):""]})})}}]),a}(n.a.Component),N=function(e){Object(l.a)(a,e);var t=Object(k.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).newTask=function(){return e.setState((function(e){return{newTaskVis:!e.newTaskVis}}))},e.state={newTaskVis:!0},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:j.a.todo_container,children:[Object(h.jsx)(y,{visible:this.state.newTaskVis,visibleCallback:this.newTask}),Object(h.jsx)("div",{className:j.a.newTask,onClick:this.newTask,children:Object(h.jsx)("span",{})})]})}}]),a}(n.a.Component);r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.cbcb5086.chunk.js.map