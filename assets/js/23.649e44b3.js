(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{399:function(e,t,a){"use strict";a.r(t);var s=a(28),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"plugin-development-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin-development-guide"}},[e._v("#")]),e._v(" Plugin Development Guide")]),e._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting started")]),e._v(" "),a("p",[e._v("A httpYac plugin is an npm package that can add additional features to the project using httpYac. These features can include:")]),e._v(" "),a("ul",[a("li",[e._v("provide additional environments")]),e._v(" "),a("li",[e._v("remove sensitive information from logging")]),e._v(" "),a("li",[e._v("provide additional variable substitution")]),e._v(" "),a("li",[e._v("add new parser logic and actions")])]),e._v(" "),a("p",[e._v("As an npm package, CLI plugin must have a "),a("code",[e._v("package.json")]),e._v(" file. It's also recommended to have a plugin description in "),a("code",[e._v("README.md")]),e._v(" to help others find your plugin on npm.")]),e._v(" "),a("p",[e._v("So, typical CLI plugin folder structure looks like the following:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n├── README.md\n├── index.js      "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# service plugin")]),e._v("\n├── package.json\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h2",{attrs:{id:"naming-and-discoverability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#naming-and-discoverability"}},[e._v("#")]),e._v(" Naming and discoverability")]),e._v(" "),a("p",[e._v("For a plugin to be usable in a httpYac project, it must follow the name convention "),a("code",[e._v("httpyac-plugin-<name>")]),e._v(" or "),a("code",[e._v("@scope/httpyac-plugin-<name>")]),e._v(". It allows your plugin to be:")]),e._v(" "),a("ul",[a("li",[e._v("Discoverable by httpYac;")]),e._v(" "),a("li",[e._v("Discoverable by other developers via searching;")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("Warning")]),e._v(" "),a("p",[e._v("Make sure to name the plugin correctly, otherwise it will be impossible to find it with httpYac plugins search!")])]),e._v(" "),a("p",[e._v("For better discoverability when a user searches for your plugin, put keywords describing your plugin in the "),a("code",[e._v("description")]),e._v(" field of the plugin "),a("code",[e._v("package.json")]),e._v(" file.")]),e._v(" "),a("p",[e._v("Example:")]),e._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"httpyac-plugin-keystore"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.7.7"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"httpyac plugin to add keystore support to variables"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("`")]),e._v(" "),a("h2",{attrs:{id:"service-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-plugin"}},[e._v("#")]),e._v(" Service Plugin")]),e._v(" "),a("p",[e._v("Service plugin serves for extending hooks on every httpyac execution.")]),e._v(" "),a("p",[e._v("Service plugins are loaded automatically when a Service instance is created - i.e. every time the "),a("code",[e._v("httpyac")]),e._v(" command is invoked inside a project. It's located in the "),a("code",[e._v("index.js")]),e._v(" file in httpyac plugin root folder.")]),e._v(" "),a("p",[e._v("A service plugin should export a function which receives one arguments:")]),e._v(" "),a("ul",[a("li",[e._v("A "),a("RouterLink",{attrs:{to:"/plugins/plugin-api.html"}},[e._v("PluginAPI")]),e._v(" instance")],1)]),e._v(" "),a("p",[e._v("The minimal required code in the service plugin file is the following:")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[e._v("exports")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("api")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);