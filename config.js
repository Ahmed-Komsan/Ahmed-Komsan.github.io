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
    }
  },
};
