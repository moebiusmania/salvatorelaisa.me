(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{442:function(t,e,a){},445:function(t,e,a){"use strict";a(442)},450:function(t,e,a){"use strict";a.r(e);var s=a(3),i=a(9),o=a(241),r=a(243),n=a(242),l={data:function(){return{header:{showCover:!1,coverImage:null,title:null,description:null}}},components:{SiteHeader:r.a,Card:o.a,Error:n.a},methods:Object(s.a)(Object(s.a)({},Object(i.b)(["updateSite","updatePage","updateParams"])),{},{updateLayoutClass:function(){this.$el.parentNode.className="error-template"}}),computed:Object(s.a)({},Object(i.c)(["type","blog","posts"])),watch:{$page:function(){this.updatePage(this.$page),this.updateLayoutClass()},$route:function(){this.updateParams(this.$route.params)}},mounted:function(){this.updatePage(this.$page),this.updateSite(this.$site),this.updateParams(this.$route.params),this.updateLayoutClass()}},u=(a(445),a(4)),c=Object(u.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"site-wrapper"},[a("site-header",{attrs:{blog:t.blog,header:t.header}},[a("nav",{staticClass:"site-nav-center"},[a("a",{staticClass:"site-nav-logo",attrs:{href:t.blog.base}},[t.blog.logo?a("img",{staticClass:"site-logo",attrs:{src:t.blog.logo,alt:t.blog.title}}):a("span",[t._v(t._s(t.blog.title))])])])]),t._v(" "),a("main",{staticClass:"site-main outer",attrs:{id:"site-main"}},[a("div",{staticClass:"inner"},[a("error",{attrs:{description:"Page not found",code:"404",link:t.blog.base}})],1)]),t._v(" "),t.posts.length>0?a("aside",{staticClass:"outer"},[a("div",{staticClass:"inner"},[a("div",{staticClass:"post-feed"},t._l(t.posts.slice(0,3),(function(t,e){return a("card",{key:e,attrs:{post:t}})})),1)])]):t._e()],1)}),[],!1,null,null,null);e.default=c.exports}}]);