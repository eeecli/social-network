(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{125:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(4),s=n(0),a=(n(1),n(11)),i=n(10),o=function(e){return{isAuth:e.auth.isAuth}},c=function(e){return Object(a.b)(o)((function(t){return t.isAuth?Object(s.jsx)(e,Object(r.a)({},t)):Object(s.jsx)(i.a,{to:"/login"})}))}},126:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var r=n(44),s=n(4),a="social-network/dialogs-reduser/ADD-MESSAGE",i="social-network/dialogs-reduser/UPDATE-NEW-MESSAGE-TEXT",o={dialogs:[{id:1,name:"Mishulka"},{id:2,name:"Colleni"},{id:3,name:"Allushka"},{id:4,name:"Kishunchik"}],messages:[{id:1,message:"Hi"},{id:2,message:"Where are you?"},{id:3,message:"I bring the shawerma for you"}]},c=function(e){return{type:a,message:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a:return Object(s.a)(Object(s.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:5,message:t.message}])});case i:return Object(s.a)(Object(s.a)({},e),{},{newMessageText:t.newMessage});default:return e}}},132:function(e,t,n){e.exports={cover:"Cover_cover__jWVSp"}},133:function(e,t,n){e.exports={button:"Button_button__2idP2"}},135:function(e,t,n){e.exports={error:"Controls_error__23Awj"}},136:function(e,t,n){e.exports={item:"Post_item__37R4o"}},139:function(e,t,n){e.exports={profileWrapper:"Profile_profileWrapper__tLDfR"}},140:function(e,t,n){e.exports={isLoading:"Loader_isLoading__rrys5"}},141:function(e,t,n){e.exports={friend:"Friend_friend__36g0p"}},142:function(e,t,n){e.exports={usersWrapper:"Users_usersWrapper__uuTsd"}},16:function(e,t,n){e.exports={nav:"Navbar_nav__B6Ef8",item:"Navbar_item__4DqlJ",active:"Navbar_active__3iA9p"}},174:function(e,t,n){},175:function(e,t,n){},25:function(e,t,n){e.exports={userWrapper:"User_userWrapper__GKy-M",user:"User_user__1bCm7",userName:"User_userName__2D8yj",userStatus:"User_userStatus__GYBJE",userIcon:"User_userIcon__3-lnp",userInfo:"User_userInfo__IU9RV",userLocation:"User_userLocation__2FZUa",headerInfo:"User_headerInfo__1KOa6"}},26:function(e,t,n){e.exports={avatar:"ProfileInfo_avatar__2GFSb",aboutWrapper:"ProfileInfo_aboutWrapper__2Zf1D",userInfo:"ProfileInfo_userInfo__MbKjn",fullName:"ProfileInfo_fullName__2JQFq"}},301:function(e,t,n){"use strict";n.r(t);var r,s=n(0),a=n(1),i=n.n(a),o=n(66),c=n.n(o),u=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,303)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),a(e),i(e)}))},l=(n(174),n(29)),d=n(30),p=n(33),j=n(32),f=n(10),b=n(13),h=(n(175),n(11)),m=n(9),g=n(132),O=n.n(g),x=function(){return Object(s.jsx)("div",{className:O.a.cover})},v=n(40),A=n(57),w=n.n(A),S=function(e){return Object(s.jsx)("header",{className:w.a.headerWrapper,children:Object(s.jsxs)("div",{className:w.a.header,children:[Object(s.jsx)("div",{className:w.a.headerLogo,children:Object(s.jsx)("img",{src:"https://static.wikia.nocookie.net/rainbowsix/images/0/0c/Dokkaebi_icon.png",alt:"logo"})}),Object(s.jsx)("div",{className:w.a.userName,children:!0===e.authData.isAuth?Object(s.jsxs)("div",{children:[e.authData.login," ",Object(s.jsx)(v.a,{buttonText:"Logout",onClick:e.authData.logout})]}):Object(s.jsx)(b.b,{to:"/login",children:"Login"})})]})})},C=n(12),P=n.n(C),_=n(22),k=n(4),N=n(46),W=n(134),y={"API-KEY":"7cb234e4-81a6-4ab6-a053-b6236eb8cc92"},I=n.n(W).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:y}),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return I.get("users?page=".concat(e,"&count=").concat(t))},E=function(e,t){var n="follow/".concat(e);return t?I.delete(n):I.post(n)},F=function(e){return I.get("profile/".concat(e))},M=function(e){return I.get("profile/status/".concat(e))},U=function(e){return I.put("profile/status/",{status:e})},z=function(){return I.get("auth/me")},T=function(e,t,n){return I.post("auth/login",{email:e,password:t,rememberMe:n})},q=function(){return I.delete("auth/login")},D="social-network/auth-reduser/SET-USER-AUTH-DATA",Z={userId:null,email:null,login:null,isAuth:!1},V=function(e,t,n,r){return{type:D,payload:{userId:e,email:t,login:n,isAuth:r}}},G=function(){return function(){var e=Object(_.a)(P.a.mark((function e(t){var n,r,s,a,i;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,a=r.email,i=r.login,t(V(s,a,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(k.a)(Object(k.a)({},e),t.payload);default:return e}},X=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(s.jsx)(S,{authData:this.props})}}]),n}(i.a.Component),B=Object(h.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{getAuthUserData:G,logout:function(){return function(){var e=Object(_.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:0===e.sent.data.resultCode&&t(V(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(X),J=n(16),Y=n.n(J),K=function(){return Object(s.jsxs)("nav",{className:Y.a.nav,children:[Object(s.jsx)("div",{className:Y.a.item,children:Object(s.jsx)(b.b,{to:"/profile",activeClassName:Y.a.active,children:"Profile"})}),Object(s.jsx)("div",{className:Y.a.item,children:Object(s.jsx)(b.b,{to:"/users",activeClassName:Y.a.active,children:"Users"})}),Object(s.jsx)("div",{className:Y.a.item,children:Object(s.jsx)(b.b,{to:"/dialogs",activeClassName:Y.a.active,children:"Messages"})}),Object(s.jsx)("div",{className:Y.a.item,children:Object(s.jsx)(b.b,{to:"/news",activeClassName:Y.a.active,children:"News"})}),Object(s.jsx)("div",{className:Y.a.item,children:Object(s.jsx)(b.b,{to:"/music",activeClassName:Y.a.active,children:"Music"})}),Object(s.jsx)("div",{className:Y.a.item,children:Object(s.jsx)(b.b,{to:"/settings",activeClassName:Y.a.active,children:"Settings"})})]})},H=n(44),Q="social-network/profile-reduser/ADD-POST",$="social-network/profile-reduser/SET-USER-PROFILE",ee="social-network/profile-reduser/SET-USER-STATUS",te="social-network/profile-reduser/DELETE-POST",ne={posts:[{id:1,message:"I aint sullen, Im lachrymose",likesCount:15},{id:2,message:"You have to seize life and relish every minute",likesCount:20}],profile:null,status:null},re=function(e){return{type:ee,status:e}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(k.a)(Object(k.a)({},e),{},{posts:[].concat(Object(H.a)(e.posts),[{id:5,message:t.post,likesCount:0}])});case $:return Object(k.a)(Object(k.a)({},e),{},{profile:t.profile});case ee:return Object(k.a)(Object(k.a)({},e),{},{status:t.status});case te:return Object(k.a)(Object(k.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.id}))});default:return e}},ae=n(127),ie=n(128),oe=n(34),ce=n(135),ue=n.n(ce),le=function(e){e.input;var t=e.meta,n=Object(oe.a)(e,["input","meta"]),r=t.touched&&t.error;return Object(s.jsxs)("div",{className:r?ue.a.error:void 0,children:[n.children,r&&Object(s.jsx)("span",{children:t.error})]})},de=function(e){var t=e.input,n=(e.meta,e.child,Object(oe.a)(e,["input","meta","child"]));return Object(s.jsx)(le,Object(k.a)(Object(k.a)({},e),{},{children:Object(s.jsx)("textarea",Object(k.a)(Object(k.a)({},t),n))}))},pe=function(e){return e?void 0:"This field is required"},je=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())?void 0:"Email is not correct"},fe=n(45),be=n.n(fe),he=n(136),me=n.n(he),ge=function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:me.a.item,children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{src:"https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg",alt:"profile icon"}),e.message]}),Object(s.jsxs)("span",{children:["likes",e.likesCount]})]})})},Oe=(r=10,function(e){return e.length<r?void 0:"Max length is ".concat(r," symbols")}),xe=Object(ie.a)({form:"dialogs"})((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)("div",{children:Object(s.jsx)(ae.a,{name:"post",placeholder:"Say Something",component:de,type:"text",validate:[pe,Oe]})}),Object(s.jsx)("div",{className:be.a.sendBtn,children:Object(s.jsx)(v.a,{type:"button",buttonText:"Send"})})]})})),ve=function(e){var t=e.posts.map((function(e){return Object(s.jsx)(ge,{message:e.message,likesCount:e.likesCount},e.id)}));return Object(s.jsxs)("div",{className:be.a.postsWrapper,children:[Object(s.jsxs)("div",{className:be.a.addPost,children:[Object(s.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",alt:"profile icon"}),Object(s.jsx)("div",{className:be.a.addPostWrapper,children:Object(s.jsx)(xe,{onSubmit:function(t){e.addPost(t.post)}})})]}),Object(s.jsx)("div",{className:be.a.posts,children:t})]})},Ae=Object(h.b)((function(e){return{posts:e.profilePage.posts}}),{addPost:function(e){return{type:Q,post:e}}})(ve),we=n(139),Se=n.n(we),Ce=n(26),Pe=n.n(Ce),_e="data:image/png;base64,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",ke=n(140),Ne=n.n(ke),We=n.p+"static/media/loader.f362a76e.svg",ye=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:We,className:Ne.a.isLoading,alt:"loading"})})},Ie=n(56),Le=function(e){var t=Object(a.useState)(!1),n=Object(Ie.a)(t,2),r=n[0],i=n[1],o=Object(a.useState)(e.status),c=Object(Ie.a)(o,2),u=c[0],l=c[1];Object(a.useEffect)((function(){l(e.status)}),[e.status]);var d=function(){r&&e.updateStatus(u),i(!r)};return Object(s.jsx)("div",{className:Pe.a.status,children:r?Object(s.jsx)("input",{onBlur:d,value:u,maxLength:300,onChange:function(e){return l(e.target.value)}}):Object(s.jsx)("span",{onDoubleClick:d,children:u||"Empty status"})})},Ee=function(e){if(!e.profile)return Object(s.jsx)(ye,{});var t=Object.values(e.profile.contacts).filter((function(e){return e})).map((function(e){return Object(s.jsx)("a",{href:e,children:e},e)}));return Object(s.jsxs)("div",{className:Pe.a.aboutWrapper,children:[Object(s.jsx)("div",{className:Pe.a.avatar,children:Object(s.jsx)("img",{src:e.profile.photos.large||_e,alt:"profile"})}),Object(s.jsxs)("div",{className:Pe.a.userInfo,children:[Object(s.jsx)("div",{className:Pe.a.fullName,children:e.profile.fullName}),Object(s.jsx)("div",{className:Pe.a.description,children:e.profile.aboutMe}),Object(s.jsx)(Le,{status:e.status,updateStatus:e.updateStatus}),!0===e.profile.lookingForAJob?Object(s.jsx)("div",{className:Pe.a.lookingForAJob,children:e.profile.lookingForAJobDescription}):void 0,t]})]})},Fe=function(e){return Object(s.jsxs)("div",{className:Se.a.profileWrapper,children:[Object(s.jsx)(Ee,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(s.jsx)(Ae,{})]})},Me=n(125),Ue=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId||this.props.authUserId;this.props.getProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsx)(Fe,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})})}}]),n}(i.a.Component),ze=Object(m.d)(f.f,Me.a,Object(h.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,isAuth:e.auth.isAuth,authUserId:e.auth.userId}}),{getProfile:function(e){return function(){var t=Object(_.a)(P.a.mark((function t(n){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(e);case 2:r=t.sent,n((s=r.data,{type:$,profile:s}));case 4:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(_.a)(P.a.mark((function t(n){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(e);case 2:r=t.sent,n(re(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(_.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U(e);case 2:0===t.sent.resultCode&&n(re(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(Ue),Te=function(){return Object(s.jsx)("div",{children:"News"})},qe=function(){return Object(s.jsx)("div",{children:"Music"})},De=function(){return Object(s.jsx)("div",{children:"Settings"})},Ze=n(141),Ve=n.n(Ze),Ge=function(e){return Object(s.jsx)("div",{className:Ve.a.friend,children:Object(s.jsx)("img",{src:e.icon,alt:"user icon"})})},Re=n(94),Xe=n.n(Re),Be=function(e){var t=e.friendsBar.friends.map((function(e){return Object(s.jsx)(Ge,{name:e.name,id:e.id,icon:e.icon},e.id)}));return Object(s.jsx)("div",{className:Xe.a.gridBar,children:Object(s.jsx)("div",{className:Xe.a.friendsBar,children:t})})},Je=Object(h.b)((function(e){return{friendsBar:e.friendsBar}}),{})(Be),Ye="social-network/users-reduser/FOLLOW-TOGGLE",Ke="social-network/users-reduser/SET-USERS",He="social-network/users-reduser/SET-IS-LOADING",Qe="social-network/users-reduser/SET-FOLLOWING-IN-PROGRESS",$e="social-network/users-reduser/SET-USERS-COUNT",et={users:[],usersCount:0,isLoading:!1,followingInProgress:[]},tt=function(e){return{type:Ye,userId:e}},nt=function(e){return{type:He,isLoading:e}},rt=function(e,t){return{type:Qe,isInProgres:e,userId:t}},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ye:return Object(k.a)(Object(k.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(k.a)(Object(k.a)({},e),{},{followed:!e.followed}):e}))});case Ke:return Object(k.a)(Object(k.a)({},e),{},{users:t.users});case $e:return Object(k.a)(Object(k.a)({},e),{},{usersCount:t.usersCount});case He:return Object(k.a)(Object(k.a)({},e),{},{isLoading:t.isLoading});case Qe:return Object(k.a)(Object(k.a)({},e),{},{followingInProgress:t.isInProgres?[].concat(Object(H.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},at="social-network/paginator-reduser/SET-CURRENT-PAGE",it={pageSize:10,currentPage:1},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case at:return Object(k.a)(Object(k.a)({},e),{},{currentPage:t.currentPage});default:return e}},ct=function(e){return e.usersPage.users},ut=function(e){return e.pagination.pageSize},lt=function(e){return e.usersPage.usersCount},dt=function(e){return e.pagination.currentPage},pt=function(e){return e.usersPage.isLoading},jt=function(e){return e.usersPage.followingInProgress},ft=n(25),bt=n.n(ft),ht=function(e){var t=e.user,n=t.id,r=t.photos,a=t.status,i=t.followed,o=t.name,c=e.toggleFollow,u=e.followingInProgress,l="Russia",d="Moskow";return Object(s.jsx)("div",{className:bt.a.userWrapper,children:Object(s.jsxs)("div",{className:bt.a.user,children:[Object(s.jsx)("div",{className:bt.a.userIcon,children:Object(s.jsx)(b.b,{to:"/profile/".concat(n),children:Object(s.jsx)("img",{src:r.small||_e,alt:"user icon"})})}),Object(s.jsxs)("div",{className:bt.a.userInfo,children:[Object(s.jsxs)("div",{className:bt.a.headerInfo,children:[Object(s.jsx)("div",{className:bt.a.userName,children:o}),Object(s.jsx)("div",{className:bt.a.userLocation}),l,", ",d]}),Object(s.jsx)("div",{className:bt.a.userStatus,children:a||"Empty status"}),Object(s.jsx)("button",{className:bt.a.follow,onClick:function(){return c(n)},type:"button",disabled:u.some((function(e){return e===n})),children:!0===i?"Unfollow":"Follow"})]})]})})},mt=n(142),gt=n.n(mt),Ot=n(95),xt=n.n(Ot),vt=function(e){for(var t=[],n=Math.ceil(e.elemCount/e.pageSize),r=Math.ceil(n/e.portionSize),i=Object(a.useState)(1),o=Object(Ie.a)(i,2),c=o[0],u=o[1],l=(c-1)*e.portionSize+1,d=c*e.portionSize,p=1;p<=n;p++)t.push(p);return Object(s.jsxs)("div",{className:xt.a.pagination,children:[c>1&&Object(s.jsx)("span",{tabIndex:0,role:"button","aria-disabled":c>1,onClick:function(){return u(1)},onKeyDown:function(){return u(1)},children:"<<"}),c>1&&Object(s.jsx)("span",{tabIndex:0,role:"button","aria-disabled":c>1,onClick:function(){return u(c-1)},onKeyDown:function(){return u(c-1)},children:"<"}),t.filter((function(e){return e>=l&&e<=d})).map((function(t){return Object(s.jsx)("span",{role:"button",tabIndex:0,onClick:function(){return e.onPageChanged(t)},onKeyDown:function(){return e.onPageChanged(t)},className:e.currentPage===t?xt.a.currentPage:void 0,children:t},t)})),r>c&&Object(s.jsx)("span",{tabIndex:0,role:"button",onClick:function(){return u(c+1)},onKeyDown:function(){return u(c+1)},children:">"}),r>c&&Object(s.jsx)("span",{tabIndex:0,role:"button","aria-disabled":c>1,onClick:function(){return u(r)},onKeyDown:function(){return u(r)},children:">>"})]})},At=function(e){var t=e.usersCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,i=e.users,o=e.toggleFollow,c=e.followingInProgress;return Object(s.jsxs)("div",{children:[Object(s.jsx)(vt,{elemCount:t,pageSize:n,currentPage:r,onPageChanged:a,portionSize:"20"}),Object(s.jsx)("div",{className:gt.a.usersWrapper,children:i.map((function(e){return Object(s.jsx)(ht,{user:e,toggleFollow:o,followingInProgress:c})}))})]})},wt=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).toggleFollow=function(t){var n=e.props.users.find((function(e){return e.id===t})).followed;e.props.toggleUserFollow(t,n)},e.componentDidMount=function(){e.props.requestUsers(e.props.currentPage,e.props.pageSize)},e.onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize),e.props.setCurrentPage(t)},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[this.props.isLoading?Object(s.jsx)(ye,{}):void 0,Object(s.jsx)(At,{usersCount:this.props.usersCount,pageSize:this.props.pageSize,users:this.props.users,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,toggleFollow:this.toggleFollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(i.a.Component),St=Object(m.d)(Object(h.b)((function(e){return{users:ct(e),pageSize:ut(e),usersCount:lt(e),currentPage:dt(e),isLoading:pt(e),followingInProgress:jt(e)}}),{toggleUserFollow:function(e,t){return function(){var n=Object(_.a)(P.a.mark((function n(r){return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(nt(!0)),r(rt(!0,e)),n.next=4,E(e,t);case 4:0===n.sent.data.resultCode&&r(tt(e)),r(nt(!1)),r(rt(!1,e));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},setFollowingInProgress:rt,requestUsers:function(e,t){return function(){var n=Object(_.a)(P.a.mark((function n(r){var s;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(nt(!0)),n.next=3,L(e,t);case 3:s=n.sent,r((i=s.data.items,{type:Ke,users:i})),r((a=s.data.totalCount,{type:$e,usersCount:a})),r(nt(!1));case 7:case"end":return n.stop()}var a,i}),n)})));return function(e){return n.apply(this,arguments)}}()},setCurrentPage:function(e){return{type:at,currentPage:e}}}))(wt),Ct=function(e){var t=e.input,n=(e.meta,e.child,Object(oe.a)(e,["input","meta","child"]));return Object(s.jsx)(le,Object(k.a)(Object(k.a)({},e),{},{children:Object(s.jsx)("input",Object(k.a)(Object(k.a)({},t),n))}))},Pt=n(71),_t=n.n(Pt),kt=Object(ie.a)({form:"login"})((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,className:_t.a.loginFormWrapper,children:[Object(s.jsx)("div",{children:Object(s.jsx)(ae.a,{name:"email",placeholder:"Email",component:Ct,type:"text",validate:[pe,je]})}),Object(s.jsx)("div",{children:Object(s.jsx)(ae.a,{name:"password",placeholder:"Password",component:Ct,type:"password",validate:[pe]})}),Object(s.jsx)("div",{children:Object(s.jsx)(ae.a,{name:"rememberme",type:"checkbox",component:Ct,label:"rememberme"})}),e.error?Object(s.jsx)("div",{className:_t.a.formSubmitError,children:e.error}):void 0,Object(s.jsx)("div",{children:Object(s.jsx)(v.a,{buttonText:"Login",type:"submit"})})]})})),Nt=Object(h.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var r=Object(_.a)(P.a.mark((function r(s){var a;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,T(e,t,n);case 2:0===(a=r.sent).data.resultCode?s(G()):s(Object(N.a)("login",{_error:a.messages[0].length>0?a.messages[0]:"Some error"}));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(s.jsx)(f.a,{to:"/profile"}):Object(s.jsxs)("div",{className:_t.a.loginWrapper,children:[Object(s.jsx)("h1",{children:"Login"}),Object(s.jsx)(kt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberme)}})]})})),Wt="INIT-APP-SUCCESS",yt={isAppInit:!1},It=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Wt:return Object(k.a)(Object(k.a)({},e),{},{isAppInit:!0});default:return e}},Lt=n(143),Et=n(129),Ft=n(126),Mt={friends:[{id:1,name:"Mishulka",icon:"https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"},{id:2,name:"Colleni",icon:"https://anekdotsuper.ru/assets/cache_image/assets/img/koko/viberr-1_440x0_3a6.jpg"},{id:3,name:"Allushka",icon:"https://medialeaks.ru/wp-content/uploads/2020/01/JukzoYHHnSs.jpg"},{id:4,name:"Kishunchik",icon:"https://sun9-50.userapi.com/impf/c850136/v850136968/d1b24/-EMtgReU__k.jpg?size=200x0&quality=96&crop=0,0,960,960&sign=9c0e2c292504f9642a51d5d10997d550&ava=1"}]},Ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},zt=Object(m.c)({dialogsPage:Ft.a,profilePage:se,friendsBar:Ut,usersPage:st,auth:R,form:Et.a,app:It,pagination:ot}),Tt=Object(m.e)(zt,Object(m.a)(Lt.a)),qt=i.a.lazy((function(){return n.e(3).then(n.bind(null,304))})),Dt=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.initApp()}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"app-wrapper",children:[Object(s.jsx)(B,{}),Object(s.jsx)(x,{}),Object(s.jsx)(K,{}),Object(s.jsx)("div",{className:"app-wrapper-content",children:Object(s.jsxs)(a.Suspense,{fallback:Object(s.jsx)(ye,{}),children:[Object(s.jsx)(f.b,{path:"/profile/:userId?",render:function(){return Object(s.jsx)(ze,{})}}),Object(s.jsx)(f.b,{path:"/dialogs",render:function(){return Object(s.jsx)(qt,{})}}),Object(s.jsx)(f.b,{path:"/news",component:Te}),Object(s.jsx)(f.b,{path:"/music",component:qe}),Object(s.jsx)(f.b,{path:"/settings",component:De}),Object(s.jsx)(f.b,{path:"/users",render:function(){return Object(s.jsx)(St,{})}}),Object(s.jsx)(f.b,{path:"/login",component:Nt})]})}),Object(s.jsx)(Je,{})]})}}]),n}(i.a.Component),Zt=Object(m.d)(f.f,Object(h.b)((function(e){return{isAppInit:e.app.isAppInit}}),{initApp:function(){return function(e){e(G()).then((function(){return e({type:Wt})}))}}}))(Dt),Vt=function(){return Object(s.jsx)(b.a,{basename:"/social-network",children:Object(s.jsx)(h.a,{store:Tt,children:Object(s.jsx)(Zt,{})})})};c.a.render(Object(s.jsx)(Vt,{}),document.getElementById("root")),u()},40:function(e,t,n){"use strict";var r=n(4),s=n(0),a=n(34),i=(n(1),n(133)),o=n.n(i);t.a=function(e){var t=e.type,n=e.buttonText,i=Object(a.a)(e,["type","buttonText"]);return Object(s.jsx)("button",Object(r.a)(Object(r.a)({},i),{},{type:t?"submit":"button",className:o.a.button,children:n}))}},45:function(e,t,n){e.exports={posts:"MyPosts_posts__2y4bh",postsWrapper:"MyPosts_postsWrapper__3axtl",addPost:"MyPosts_addPost__2s3Jd",sendBtn:"MyPosts_sendBtn__KMu5k",addPostWrapper:"MyPosts_addPostWrapper__3S-T1"}},57:function(e,t,n){e.exports={headerWrapper:"Header_headerWrapper__u4tMz",header:"Header_header__XzIz6",headerLogo:"Header_headerLogo__1lFca",userName:"Header_userName__WRPp8"}},71:function(e,t,n){e.exports={loginFormWrapper:"Login_loginFormWrapper__3srR1",formSubmitError:"Login_formSubmitError__Y0WhZ",loginWrapper:"Login_loginWrapper__2Psos"}},94:function(e,t,n){e.exports={gridBar:"FriendsBar_gridBar__yZBGT",friendsBar:"FriendsBar_friendsBar__1rhll"}},95:function(e,t,n){e.exports={pagination:"Pagination_pagination__1CnUg",currentPage:"Pagination_currentPage__3rZl4"}}},[[301,1,2]]]);
//# sourceMappingURL=main.7d2c1539.chunk.js.map