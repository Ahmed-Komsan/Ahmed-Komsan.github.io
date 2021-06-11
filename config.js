module.exports = {
  pathPrefix: "",
  siteUrl: "https://ahmed-komsan.github.io",
  siteTitle: "Ahmed Komsan",
  siteDescription: "Logbook of a software developer",
  author: "Ahmed Komsan",
  postsForArchivePage: 3,
  defaultLanguage: "en",
  disqusScript:
    process.env.DISQUS_SCRIPT || "https://ahmedkomsan.disqus.com/embed.js",
  pages: {
    home: "/",
    blog: "blog",
    contact: "contact",
    resume: "resume",
    tag: "tags",
  },
  social: {
    github: "https://github.com/Ahmed-Komsan",
    facebook: "https://www.facebook.com/ahmed.komsan2013",
    twitter: "https://twitter.com/ahmed_komsan12",
    instagram: "https://www.instagram.com/ahmed.komsan1/",
    rss: "/rss.xml",
  },
  contactFormUrl:
    process.env.CONTACT_FORM_ENDPOINT ||
    "https://getform.io/f/5622bb20-13a9-4932-93d5-ec747d540a6b",
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || "komsan_test_id",
  tags: {
    javascript: {
      name: "javascript",
      description:
        "JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.",
      color: "#f0da50",
    },
    nodejs: {
      name: "Node.js",
      description:
        "Node.js is a tool for executing JavaScript in a variety of environments.",
      color: "#90c53f",
    },
    typescript: {
      name: "typescript",
      description:
        "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
      color: "#257acc",
    },
    reactjs: {
      name: "reactjs",
      description:
        "React is an open source JavaScript library used for designing user interfaces.",
      color: "#61dbfa",
    },
    gatsby: {
      name: "Gatsby.js",
      description:
        "A framework built over ReactJS to generate static page web application.  ",
      color: "#6f309f",
    },
    html: {
      name: "HTML",
      description:
        "A markup language that powers the web. All websites use HTML for structuring the content.",
      color: "#dd3431",
    },
    css: {
      name: "css",
      description:
        "CSS is used to style the HTML element and to give a very fancy look for the web application.",
      color: "#43ace0",
    },
    python: {
      name: "python",
      description:
        "A general purpose programming language that is widely used for developing various applications.",
      color: "#f9c646",
    },
    UIKit: {
      name: "UIKit",
      description:
        "UIKit framework provides the required infrastructure for your iOS or tvOS apps.",
      color: "#43ace0",
    },
    IOS: {
      name: "IOS",
      description:
        "iOS is a mobile operating system created and developed by Apple Inc. exclusively for its hardware. It is the operating system that powers many of the company's mobile devices, including the iPhone and iPod Touch",
      color: "#43ace0",
    },
    Swift: {
      name: "Swift",
      description:
        "Swift is a powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS.",
      color: "#43ace0",
    },
  },
};
