(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/Rmd":function(e,a,t){e.exports={tagCard:"tags-module--tagCard--2sNqZ",tagImg:"tags-module--tagImg--21WVr",pd20px:"tags-module--pd20px--1m4en"}},a0iv:function(e,a,t){"use strict";t.r(a);t("M7k7");var n=t("Ol7k"),o=(t("Jmwx"),t("BMrR")),l=(t("rO+z"),t("kPKH")),r=(t("E9XD"),t("ToJy"),t("q1tI")),s=t.n(r),c=t("U4IR"),g=t("JkAW"),m=t("kuUC"),i=t("Wbzz"),d=t("obyI"),u=t.n(d),p=t("Rt21"),f=t.n(p),E=t("/Rmd"),k=t.n(E),h=function(e){var a=e.img,t=e.name,n=e.description,o=e.color,l=u.a.pages.tag;return s.a.createElement(i.Link,{className:k.a.tagCard,to:f.a.resolvePageUrl(l,t)},s.a.createElement("div",{className:k.a.tagCard},s.a.createElement("div",{className:k.a.tagImg,style:{backgroundImage:"url("+a+")"}}),s.a.createElement("div",{className:k.a.pd20px},s.a.createElement("div",{className:"textCenter"},s.a.createElement("h4",{style:{color:""+o}},"#",t)),s.a.createElement("p",null,n))))};a.default=function(e){var a=e.data,t=a.allFile.edges,r=a.allMarkdownRemark.edges.map((function(e){return e.node.frontmatter.tags})).reduce((function(e,a){return e.concat(a)}));r.filter((function(e,a){return a===r.indexOf(e)})).sort(),console.log("😳🤨🤨🤨🤨🤨🤨🤨🤨🤨 rawTags ->"),console.log(r);var i=u.a.tags;return console.log("🤕🤕🤕🤕🤕🤕🤕  configTags->"),console.log(i),t=t.filter((function(e){return e.node.name in i})),console.log("🤕🤕🤕🤕🤕🤕🤕  edges after filtering is ->"),console.log(t),console.log("🧤🧤🧤🧤🧤🧤🧤tagData ->"),console.log(i),s.a.createElement(n.a,{className:"outerPadding"},s.a.createElement(n.a,{className:"container"},s.a.createElement(c.a,null),s.a.createElement(g.a,{title:"Tags",description:"This page consists of various Tags on various technologies that I'll be using to write blogs. You can check the blogs related to the tags by clicking on any of the tags below.",path:"tags"}),s.a.createElement(m.b,null,s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"marginTopTitle"},s.a.createElement("h1",{className:"titleSeparate"},"#Tags")),s.a.createElement(o.a,{gutter:[30,20]},t.map((function(e){return s.a.createElement(l.a,{key:e.node.name,xs:24,sm:24,md:12,lg:8},s.a.createElement(h,{img:e.node.childImageSharp.fluid.src,name:e.node.name,description:i[e.node.name].description,color:i[e.node.name].color}))})))))))}}}]);
//# sourceMappingURL=component---src-pages-tags-index-jsx-2390f8253ff55c8054ef.js.map