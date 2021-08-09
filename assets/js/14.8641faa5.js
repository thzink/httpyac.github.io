(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{409:function(t,s,a){"use strict";a.r(s);var n=a(15),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"github-graphql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-graphql"}},[t._v("#")]),t._v(" Github GraphQL")]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[t._v("@git_api_key=???\n\n###\nfragment IOParts on Repository {\n  description\n  diskUsage\n}\n\n"),a("span",{pre:!0,attrs:{class:"token request-line"}},[a("span",{pre:!0,attrs:{class:"token method property"}},[t._v("POST")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://api.github.com/graphql")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" application/json\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Authorization:")]),t._v(" Bearer {{git_api_key}}"),a("span",{pre:!0,attrs:{class:"token application-json"}},[t._v("\n\nquery test($name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String!"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $owner"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String!) "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  repository(name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" $name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" owner"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" $owner) "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name\n    fullName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" nameWithOwner\n    ...IOParts\n    forkCount\n    stargazers(first"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(") "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        totalCount\n        nodes "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            login\n            name\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    watchers "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        totalCount\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vscode-httpyac"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"owner"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AnWeber"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n")]),a("span",{pre:!0,attrs:{class:"token request-line"}},[a("span",{pre:!0,attrs:{class:"token method property"}},[t._v("POST")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token request-target url"}},[t._v("https://api.github.com/graphql")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token http-version property"}},[t._v("HTTP/1.1")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" application/json\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Authorization:")]),t._v(" Bearer {{git_api_key}}"),a("span",{pre:!0,attrs:{class:"token application-json"}},[t._v("\n\n\ngql foo < ./graphql.gql\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vscode-httpyac"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"owner"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AnWeber"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);