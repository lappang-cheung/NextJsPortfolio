module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(2);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/Layout.js

 // import Navbar from './Navbar'

var Layout_Layout = function Layout(props) {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Portfolio - Leo Cheung"), external_react_default.a.createElement("link", {
    href: "/static/main.css",
    rel: "stylesheet"
  }), external_react_default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  })), props.children);
};

/* harmony default export */ var components_Layout = (Layout_Layout);
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Hero.js



var Hero_Hero = function Hero() {
  return external_react_default.a.createElement("section", {
    id: "home",
    className: "home"
  }, external_react_default.a.createElement("span", {
    className: "hero"
  }, external_react_default.a.createElement("h1", {
    className: "name"
  }, "Leo", external_react_default.a.createElement("br", null), "Cheung"), external_react_default.a.createElement("h4", {
    className: "job"
  }, "JavaScript & Front-End Developer"), external_react_default.a.createElement("hr", null), external_react_default.a.createElement("span", {
    className: "social"
  }, external_react_default.a.createElement("span", null, external_react_default.a.createElement(link_default.a, {
    href: "https://github.com/lappang-cheung"
  }, external_react_default.a.createElement("a", {
    target: "_blank"
  }, external_react_default.a.createElement("i", {
    className: "fa fa-github",
    "aria-hidden": "true"
  })))), external_react_default.a.createElement("span", null, external_react_default.a.createElement(link_default.a, {
    href: "https://www.linkedin.com/in/leo-lappang-cheung"
  }, external_react_default.a.createElement("a", {
    target: "_blank"
  }, external_react_default.a.createElement("i", {
    className: "fa fa-linkedin",
    "aria-hidden": "true"
  })))), external_react_default.a.createElement("span", null, external_react_default.a.createElement(link_default.a, {
    href: "https://angel.co/lemonjai"
  }, external_react_default.a.createElement("a", {
    target: "_blank"
  }, external_react_default.a.createElement("i", {
    className: "fa fa-angellist",
    "aria-hidden": "true"
  })))))));
};

/* harmony default export */ var components_Hero = (Hero_Hero);
// CONCATENATED MODULE: ./components/Intro.js


var Intro_Intro = function Intro() {
  return external_react_default.a.createElement("section", {
    id: "intro",
    className: "sections"
  }, external_react_default.a.createElement("span", {
    className: "section-left"
  }, external_react_default.a.createElement("h2", {
    className: "large-heading"
  }, "Intro"), external_react_default.a.createElement("p", {
    className: "small-heading"
  }, "What I am all about")), external_react_default.a.createElement("span", {
    className: "section-right"
  }, external_react_default.a.createElement("p", {
    className: "info"
  }, "An ambitious developer, who is seeking for new opportunities and rapid growth. Has 2 years of web development and 3years of Infrastructure support along with some DevOps experience. Along with the experience of working with external/internal clients in Agile and waterfall environments."), external_react_default.a.createElement("p", {
    className: "info"
  }, external_react_default.a.createElement("strong", null, "Here is my technology stack:")), external_react_default.a.createElement("h4", {
    className: "small-heading"
  }, external_react_default.a.createElement("i", {
    className: "fa fa-code",
    "aria-hidden": "true"
  }), " Front-End:"), external_react_default.a.createElement("p", {
    className: "info tech"
  }, "JavaScript ES5/ES6, NextJs, ReactJs, Apollo, HTML5, CSS3, CSS Grid, Bootstrap, BEM"), external_react_default.a.createElement("h4", {
    className: "small-heading"
  }, external_react_default.a.createElement("i", {
    className: "fa fa-database",
    "aria-hidden": "true"
  }), " Back-End:"), external_react_default.a.createElement("p", {
    className: "info tech"
  }, "NodeJs, ExpressJs, GraphQL, MongoDB, Postgresql, MongoDB, Firebase, Prisma, Java Server Pages"), external_react_default.a.createElement("h4", {
    className: "small-heading"
  }, external_react_default.a.createElement("i", {
    className: "fa fa-cloud",
    "aria-hidden": "true"
  }), " Cloud Hosting:"), external_react_default.a.createElement("p", {
    className: "info tech"
  }, "Heroku, Google App Engine, AWS EC2")));
};

/* harmony default export */ var components_Intro = (Intro_Intro);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Experience.js



var Experience_Experience = function Experience() {
  return external_react_default.a.createElement("section", {
    id: "experience",
    className: "sections"
  }, external_react_default.a.createElement("span", {
    className: "section-left"
  }, external_react_default.a.createElement("h2", {
    className: "large-heading"
  }, "Experience"), external_react_default.a.createElement("p", {
    className: "small-heading"
  }, "What have I done")), external_react_default.a.createElement("span", {
    className: "section-right"
  }, external_react_default.a.createElement("div", {
    className: "timeline"
  }, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement("h3", null, "Web Developer "), external_react_default.a.createElement("p", {
    className: "info"
  }, "University of Toronto (Intern)"), external_react_default.a.createElement("p", null, "Implemented the new responsive website re-design and removal of the old m.sites, also site maintenance after development projects."), external_react_default.a.createElement("p", null, "Technology: JS, HTML5, CSS, Adobe Dreamweaver")), external_react_default.a.createElement("div", {
    className: "time"
  }, external_react_default.a.createElement("h4", null, "Mar 2011 - Mar 2012"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement("h3", null, "Jr Rail Developer"), external_react_default.a.createElement("p", {
    className: "info"
  }, "Contact"), external_react_default.a.createElement("p", null, " Had worked on a small project while I was developing my developer still and still in the infrastructure support team. Met a client through a hackathon event to create proof of concept on job recruiting agency."), external_react_default.a.createElement("p", null, "Technology: Rails 4, Heroku, Dropbox, AWS EC2, Sass, Postgresql")), external_react_default.a.createElement("div", {
    className: "time"
  }, external_react_default.a.createElement("h4", null, "May 2016 - Jun 2016"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement("h3", null, "Application Support Developer"), external_react_default.a.createElement("p", {
    className: "info"
  }, "SunLife Financial"), external_react_default.a.createElement("p", null, "Collaboration with multiple internal business clients to coordinate the deployments and load testing of business applications in the ESB infrastructure.", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), "My responsibilities include the scheduling and maintenance of all the ESB applications in the VM & physical Windows R12 servers. Yearly infrastructure & mainframe automation scripting updates, disaster recovery and bi-yearly onboarding training for offshore support"), external_react_default.a.createElement("p", null, "Technology: ESB Websuite, Windows R12, SQL, DB2, Java, Mainframe")), external_react_default.a.createElement("div", {
    className: "time"
  }, external_react_default.a.createElement("h4", null, "Apr 2014 - Apr 2017"))), external_react_default.a.createElement("li", null, external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement("h3", null, "Jr Web Developer"), external_react_default.a.createElement("p", {
    className: "info"
  }, "SunLife Financial"), external_react_default.a.createElement("p", null, "Collaboration with the business marketing to bring new features and promote new products in the corporate websites. My team used Agile Scrum methodology for fast prototyping of the products and better client deliverables. ", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), "My contributions to different projects include: SEO, Web Accessibility, Browser caching and implementation of 3rd party tools & RESTful API from Adobe."), external_react_default.a.createElement("p", null, "Technology: AIX, OpenTxt WEM, Java Server Pages, HTML5, CSS3, JavaScript, Dimensions")), external_react_default.a.createElement("div", {
    className: "time"
  }, external_react_default.a.createElement("h4", null, "Apr 2017 - Feb 2018"))), external_react_default.a.createElement("div", {
    style: {
      clear: "both"
    }
  })))));
};

/* harmony default export */ var components_Experience = (Experience_Experience);
// CONCATENATED MODULE: ./components/Work.js


var Work_Work = function Work() {
  return external_react_default.a.createElement("section", {
    id: "work",
    className: "sections"
  }, external_react_default.a.createElement("span", {
    className: "section-left"
  }, external_react_default.a.createElement("h2", {
    className: "large-heading"
  }, "Works"), external_react_default.a.createElement("p", {
    className: "small-heading"
  }, "I build real value")), external_react_default.a.createElement("span", {
    className: "section-right"
  }, external_react_default.a.createElement("div", {
    className: "gallery"
  }, external_react_default.a.createElement("a", {
    href: "#"
  }, external_react_default.a.createElement("img", {
    src: "static/images/1.jpg",
    alt: ""
  })), external_react_default.a.createElement("a", {
    href: "#"
  }, external_react_default.a.createElement("img", {
    src: "static/images/2.jpg",
    alt: ""
  })), external_react_default.a.createElement("a", {
    href: "#"
  }, external_react_default.a.createElement("img", {
    src: "static/images/3.jpg",
    alt: ""
  })), external_react_default.a.createElement("a", {
    href: "#"
  }, external_react_default.a.createElement("img", {
    src: "static/images/4.jpg",
    alt: ""
  })), external_react_default.a.createElement("a", {
    href: "#"
  }, external_react_default.a.createElement("img", {
    src: "static/images/5.jpg",
    alt: ""
  })), external_react_default.a.createElement("a", {
    href: "#"
  }, external_react_default.a.createElement("img", {
    src: "static/images/6.jpg",
    alt: ""
  })), external_react_default.a.createElement("a", {
    href: "#"
  }, external_react_default.a.createElement("img", {
    src: "static/images/7.jpg",
    alt: ""
  })), external_react_default.a.createElement("a", {
    href: "#"
  }, external_react_default.a.createElement("img", {
    src: "static/images/8.jpg",
    alt: ""
  })), external_react_default.a.createElement("a", {
    href: "#"
  }, external_react_default.a.createElement("img", {
    src: "static/images/9.jpg",
    alt: ""
  })))));
};

/* harmony default export */ var components_Work = (Work_Work);
// CONCATENATED MODULE: ./components/Contact.js



var Contact_Contact = function Contact() {
  return external_react_default.a.createElement("section", {
    id: "contact",
    className: "sections"
  }, external_react_default.a.createElement("span", {
    className: "section-left"
  }, external_react_default.a.createElement("h2", {
    className: "large-heading"
  }, "Contact"), external_react_default.a.createElement("p", {
    className: "small-heading"
  }, "Hire me")), external_react_default.a.createElement("span", {
    className: "section-right"
  }, external_react_default.a.createElement("div", {
    className: "information"
  }, external_react_default.a.createElement("div", {
    className: "location"
  }, external_react_default.a.createElement("h3", null, "Location"), external_react_default.a.createElement("span", null, external_react_default.a.createElement(link_default.a, {
    href: "https://www.google.ca/maps/place/Aurora+GO/@43.9993742,-79.4594247,17z/data=!4m5!3m4!1s0x882ad3e588a51dd9:0xcd3bf60dd6ad3763!8m2!3d44.000748!4d-79.4597197"
  }, external_react_default.a.createElement("a", {
    target: "_blank"
  }, external_react_default.a.createElement("i", {
    className: "fa fa-map-marker",
    "aria-hidden": "true"
  }), " Aurora, Ontario")))), external_react_default.a.createElement("div", {
    className: "email"
  }, external_react_default.a.createElement("h3", null, "Email"), external_react_default.a.createElement("span", null, external_react_default.a.createElement(link_default.a, {
    href: "mailto:lappangcheung@gmail.com"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("i", {
    className: "fa fa-envelope-o",
    "aria-hidden": "true"
  }), " lappangcheung")))), external_react_default.a.createElement("div", {
    className: "web"
  }, external_react_default.a.createElement("h3", null, "Web"), external_react_default.a.createElement("span", null, external_react_default.a.createElement(link_default.a, {
    href: "http://www.leocheung.ca"
  }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("i", {
    className: "fa fa-globe",
    "aria-hidden": "true"
  }), " leocheung.ca")))))));
};

/* harmony default export */ var components_Contact = (Contact_Contact);
// CONCATENATED MODULE: ./pages/index.js








var pages_index = function index() {
  return external_react_default.a.createElement(components_Layout, null, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement(components_Hero, null), external_react_default.a.createElement(components_Intro, null), external_react_default.a.createElement(components_Experience, null), external_react_default.a.createElement(components_Work, null), external_react_default.a.createElement(components_Contact, null)));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_index);

/***/ })
/******/ ]);