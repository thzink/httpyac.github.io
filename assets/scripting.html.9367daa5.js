import{r,o as l,c as i,a as e,b as n,w as p,F as c,d as a,e as s}from"./app.418c62b6.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";var h="/assets/scripting.8a515e08.svg";const u={},b=a(`<h1 id="scripting" tabindex="-1"><a class="header-anchor" href="#scripting" aria-hidden="true">#</a> Scripting</h1><p>It is possible to use NodeJS scripts. All scripts before the request line are executed before the request is called. All scripts after the request line are executed as soon as the response is received. All exports of the script are stored as variables.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>{{
  //pre request script
  const crypto = require(&#39;crypto&#39;);
  const date = new Date();
  const signatureBase64 = crypto.createHmac(&#39;sha256&#39;, &#39;secret&#39;)
  .update(\`\${request.method}\\u2028\${request.url}\\u2028\${date.getTime()}\`).digest(&quot;base64&quot;);
  exports.authDate = date.toUTCString();
  exports.authentcation = \`Basic \${signatureBase64}\`;
}}
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header-name keyword">Date:</span> {{authDate}}
<span class="token header-name keyword">Authentication:</span> {{authentcation}}

{{
  // post request script
  const assert = require(&#39;assert&#39;);
  test(&quot;authentcation is valid&quot;, () =&gt; {
    assert.equal(response.parsedBody.headers.Authentication, authentcation);
  });
}}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If the execution of the script is <code>async</code>, it is necessary to export this Promise. In this case, the program waits for the Promise to be completed.</p></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>{{
  async function wait(){
    const date = new Date();
    await sleep(10000);
    const afterDate = new Date();
    return afterDate.getTime() - date.getTime();
  }
  exports.wait = wait();
}}
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/anything?delay={{wait}}</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,5),m={class:"custom-container warning"},_=e("p",{class:"custom-container-title"},"WARNING",-1),g=s("Scripts are executed in a custom context/ execution environment. This context should behave identically to "),v={href:"https://nodejs.org/api/vm.html#what-does-it-mean-to-contextify-an-object",target:"_blank",rel:"noopener noreferrer"},f=s("NodeJS Default execution environment"),k=s(", but there may be variations. These can be bypassed using require."),y=e("h2",{id:"access-to-variables",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#access-to-variables","aria-hidden":"true"},"#"),s(" Access to Variables")],-1),q=e("p",null,"All Variables already defined can be accessed via the global scope.",-1),w=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,"Since all variables are placed on the global scope of the script, they may overwrite other variables. Please use unique variable names")],-1),x=e("p",null,"In addition to the defined variables, the following values are also set on global scope",-1),T=e("thead",null,[e("tr",null,[e("th",null,"name"),e("th",null,"description"),e("th",null,"condition")])],-1),j=e("td",null,"grpcStream",-1),P=s("currently active "),S={href:"https://nodejs.org/api/stream.html#writable-streams",target:"_blank",rel:"noopener noreferrer"},A=s("Grpc Writable Stream"),I=e("td",null,"only if grpc stream is active",-1),C=e("td",null,"httpFile",-1),D=s("current "),E={href:"https://github.com/AnWeber/httpyac/blob/main/src/models/httpFile.ts",target:"_blank",rel:"noopener noreferrer"},G=s("httpFile"),H=e("td",null,"-",-1),N=e("td",null,"httpRegion",-1),R=s("current "),W={href:"https://github.com/AnWeber/httpyac/blob/main/src/models/httpRegion.ts",target:"_blank",rel:"noopener noreferrer"},B=s("httpRegion"),L=e("td",null,"-",-1),V=e("td",null,"mqttClient",-1),F=s("currently active "),$={href:"https://github.com/mqttjs/MQTT.js#example",target:"_blank",rel:"noopener noreferrer"},J=s("MQTT Client"),O=e("td",null,"only if mqtt client is active",-1),U=e("td",null,"oauth2Session",-1),Y={href:"https://github.com/AnWeber/httpyac/blob/main/src/variables/replacer/oauth/openIdInformation.ts#L6-L14",target:"_blank",rel:"noopener noreferrer"},M=s("OAuth2 Response"),Q=s("only if "),z=s("OAuth2/ OpenId Connect"),K=s(" is used"),X=e("td",null,"request",-1),Z=s("request of the next "),ee={href:"https://github.com/AnWeber/httpyac/blob/main/src/models/httpRequest.ts",target:"_blank",rel:"noopener noreferrer"},se=s("http request"),ne=e("td",null,"-",-1),te=e("td",null,"response",-1),ae={href:"https://github.com/AnWeber/httpyac/blob/main/src/models/httpResponse.ts",target:"_blank",rel:"noopener noreferrer"},re=s("http response"),oe=s(" of the last executed request"),le=e("td",null,[s("only use it in post request scripts or for responses imported with "),e("code",null,"@forceRef")],-1),ie=e("td",null,"sleep",-1),pe={href:"https://github.com/AnWeber/httpyac/blob/main/src/utils/promiseUtils.ts#L7",target:"_blank",rel:"noopener noreferrer"},ce=s("Method"),de=s(" to wait for a fixed period of time"),he=e("td",null,"-",-1),ue=e("td",null,"test",-1),be=s("method to simplify "),me={href:"https://github.com/AnWeber/httpyac/blob/main/src/actions/jsAction.ts#L40",target:"_blank",rel:"noopener noreferrer"},_e=s("tests"),ge=s(" ("),ve={href:"https://github.com/httpyac/httpyac.github.io/blob/main/examples/project/tests/assert.http",target:"_blank",rel:"noopener noreferrer"},fe=s("assert"),ke=s(" or "),ye={href:"https://github.com/httpyac/httpyac.github.io/blob/main/examples/project/tests/chai.http",target:"_blank",rel:"noopener noreferrer"},qe=s("chai"),we=s(")"),xe=e("td",null,"-",-1),Te=e("td",null,"websocketClient",-1),je=s("currently active "),Pe={href:"https://www.npmjs.com/package/ws#sending-and-receiving-text-data",target:"_blank",rel:"noopener noreferrer"},Se=s("Websocket Client"),Ae=e("td",null,"if websocket client is active",-1),Ie=a(`<h2 id="require" tabindex="-1"><a class="header-anchor" href="#require" aria-hidden="true">#</a> Require</h2><p>External scripts can be imported using require, but you need to install dependencies yourself.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>
{{
  const { authenticate } = require(&#39;./scriptRequire&#39;);
  const authDate = new Date();

  exports.authDate = authDate.toUTCString();
  exports.authentication = authenticate(authDate, request);
}}

<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header-name keyword">Authentication:</span> {{authentication}}
<span class="token header-name keyword">Date:</span> {{authDate}}
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,3),Ce={class:"custom-container tip"},De=e("p",{class:"custom-container-title"},"TIP",-1),Ee=s("External dependencies must be installed independently, exceptions are "),Ge={href:"https://www.npmjs.com/package/@types/vscode",target:"_blank",rel:"noopener noreferrer"},He=s("vscode"),Ne=s(", "),Re={href:"https://www.npmjs.com/package/got",target:"_blank",rel:"noopener noreferrer"},We=s("got"),Be=s(", "),Le={href:"https://www.npmjs.com/package/@grpc/grpc-js",target:"_blank",rel:"noopener noreferrer"},Ve=s("grpc-js"),Fe=s(" and "),$e={href:"https://www.npmjs.com/package/httpyac",target:"_blank",rel:"noopener noreferrer"},Je=s("httpYac"),Oe=s(" Dependency, which are provided from the extension."),Ue={class:"custom-container warning"},Ye=e("p",{class:"custom-container-title"},"WARNING",-1),Me={href:"https://nodejs.org/api/modules.html#modules_require_cache",target:"_blank",rel:"noopener noreferrer"},Qe=s("NodeJS"),ze=s(" caches all loaded scripts. Since in VS Code the script is executed in the context of the extension, the content of the script is not reloaded. Therefore, the script must be manually removed from the cache."),Ke=a(`<h2 id="console" tabindex="-1"><a class="header-anchor" href="#console" aria-hidden="true">#</a> Console</h2><p>The console cannot be accessed in VS Code. Therefore, a separate Console object is provided in the context of the script that redirects the output to the OutputChannel.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@foo = https://httpbin.org

{{
  console.info(foo);
}}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> Test</h2><p>You can write easily test scripts in JavaScript. Tests allow you to ensure that your API is working as expected, to establish that integrations between services are functioning reliably, and to verify that new developments haven&#39;t broken any existing functionality. You can also use test code to aid the debugging process when something goes wrong with your API project.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/json</span> <span class="token http-version property">HTTP/1.1</span></span>
{{
  const { equal } = require(&#39;assert&#39;);
  test(&#39;status code 200&#39;, () =&gt; {
    equal(response.statusCode, 200);
  });
}}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/json</span> <span class="token http-version property">HTTP/1.1</span></span>

{{
  const { expect } = require(&#39;chai&#39;);
  test(&#39;status code 200&#39;, () =&gt; {
    expect(response.statusCode).to.equal(200)
  });
}}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,7),Xe={class:"custom-container tip"},Ze=e("p",{class:"custom-container-title"},"TIP",-1),es={href:"https://github.com/AnWeber/httpyac/blob/790a1b0409bd9eed6ef0ff26a2fc017952d58231/src/models/testFunction.ts#L6-L14",target:"_blank",rel:"noopener noreferrer"},ss=s("Auxiliary methods"),ns=s(" are provided for standard tests such as Status and Content-Type"),ts=a(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/json</span> <span class="token http-version property">HTTP/1.1</span></span>
{{
  test.status(200);
}}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="global-scripts" tabindex="-1"><a class="header-anchor" href="#global-scripts" aria-hidden="true">#</a> Global Scripts</h2><p>Scripts with no request in the same region are always executed (Global Scripts).</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>{{
  console.info(&#39;on every run&#39;)
}}
###
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/json</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/json</span> <span class="token http-version property">HTTP/1.1</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><p>The normal script registration is executed in order of occurrence in http File. For the execution of a request, several steps have to be executed besides the actual request: Replace Variables, Prepare Body, Pretty Print Body. With events scripts can be hooked into concrete steps in this process.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>{{@response
  console.info(&quot;on every request&quot;);
}}
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/json</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>The following events are possible.</p><table><thead><tr><th>Events</th><th>Description</th></tr></thead><tbody><tr><td>request</td><td>event triggered before every request (but after replaceVariableHook)</td></tr><tr><td>streaming</td><td>event triggered while client streaming</td></tr><tr><td>response</td><td>event triggered on response of request</td></tr><tr><td>responseLogging</td><td>event triggered on output of response, used for altering output which is provided with variable response</td></tr><tr><td>after</td><td>event triggered after all request is sent</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The events can be registered automatically globally using <code>+</code>.</p></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>{{+after
  console.info(\`on every request: \${response.statusCode}\`);
}}
###
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/json</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/json</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>If no event is specified for global registration, the script is executed before every request.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>{{+
  console.info(&quot;on every request&quot;);
}}
###
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/json</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/json</span> <span class="token http-version property">HTTP/1.1</span></span>

</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="`+h+'" alt="events"></p><h2 id="intellij-script" tabindex="-1"><a class="header-anchor" href="#intellij-script" aria-hidden="true">#</a> Intellij Script</h2>',15),as=s("Intellij Scripts are supported. An "),rs={href:"https://www.jetbrains.com/help/idea/http-client-reference.html",target:"_blank",rel:"noopener noreferrer"},os=s("Http client"),ls=s(" and "),is={href:"https://www.jetbrains.com/help/idea/http-response-reference.html",target:"_blank",rel:"noopener noreferrer"},ps=s("response"),cs=s(" object corresponding to the interface is created and are available in the script."),ds=a(`<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>The execution environment differs between NodeJS and Intellij (uses Nashorn). Possibly the behavior is not completely identical, to Intellij Execution. If there are problems, please let me know.</p></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header-name keyword">Content-Type:</span> application/x-www-form-urlencoded
<span class="token header-name keyword">accept:</span> application/json

email=user@domain.loc&amp;password=2

&gt; ./intellij.js

<span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header-name keyword">Content-Type:</span> application/x-www-form-urlencoded
<span class="token header-name keyword">accept:</span> application/json

email=user@domain.loc&amp;password=3

&gt; {% client.global.set(&quot;email&quot;, response.body.form.email); %}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Intellij scripts are always executed after request. Scripts before Request Line are ignored</p></div><h2 id="how-to-debug-scripts" tabindex="-1"><a class="header-anchor" href="#how-to-debug-scripts" aria-hidden="true">#</a> How to debug scripts</h2>`,4),hs=e("li",null,[s("Install httpYac cli with "),e("code",null,"npm install httpyac -g")],-1),us=e("li",null,"open Http File in VS Code",-1),bs=s("add "),ms={href:"https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/debugger",target:"_blank",rel:"noopener noreferrer"},_s=s("debugger;"),gs=s(" statement in script"),vs=s("open "),fs={href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_javascript-debug-terminal",target:"_blank",rel:"noopener noreferrer"},ks=s("Javascript Debug Terminal"),ys=s(" in VS Code"),qs=e("li",null,[s("execute command "),e("code",null,"httpyac <file> -l <line>")],-1),ws=a(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>{{
  //pre request script
  const crypto = require(&#39;crypto&#39;);
  const date = new Date();
  const signatureBase64 = crypto.createHmac(&#39;sha256&#39;, &#39;secret&#39;)
  .update(\`\${request.method}\\u2028\${request.url}\\u2028\${date.getTime()}\`).digest(&quot;base64&quot;);
  debugger;
  exports.authDate = date.toUTCString();
  exports.authentcation = \`Basic \${signatureBase64}\`;
}}
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/json</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header-name keyword">Date:</span> {{authDate}}
<span class="token header-name keyword">Authentication:</span> {{authentcation}}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,1);function xs(Ts,js){const t=r("ExternalLinkIcon"),o=r("RouterLink");return l(),i(c,null,[b,e("div",m,[_,e("p",null,[g,e("a",v,[f,n(t)]),k])]),y,q,w,x,e("table",null,[T,e("tbody",null,[e("tr",null,[j,e("td",null,[P,e("a",S,[A,n(t)])]),I]),e("tr",null,[C,e("td",null,[D,e("a",E,[G,n(t)])]),H]),e("tr",null,[N,e("td",null,[R,e("a",W,[B,n(t)])]),L]),e("tr",null,[V,e("td",null,[F,e("a",$,[J,n(t)])]),O]),e("tr",null,[U,e("td",null,[e("a",Y,[M,n(t)])]),e("td",null,[Q,n(o,{to:"/guide/variables.html#oauth2-openid-connect"},{default:p(()=>[z]),_:1}),K])]),e("tr",null,[X,e("td",null,[Z,e("a",ee,[se,n(t)])]),ne]),e("tr",null,[te,e("td",null,[e("a",ae,[re,n(t)]),oe]),le]),e("tr",null,[ie,e("td",null,[e("a",pe,[ce,n(t)]),de]),he]),e("tr",null,[ue,e("td",null,[be,e("a",me,[_e,n(t)]),ge,e("a",ve,[fe,n(t)]),ke,e("a",ye,[qe,n(t)]),we]),xe]),e("tr",null,[Te,e("td",null,[je,e("a",Pe,[Se,n(t)])]),Ae])])]),Ie,e("div",Ce,[De,e("p",null,[Ee,e("a",Ge,[He,n(t)]),Ne,e("a",Re,[We,n(t)]),Be,e("a",Le,[Ve,n(t)]),Fe,e("a",$e,[Je,n(t)]),Oe])]),e("div",Ue,[Ye,e("p",null,[e("a",Me,[Qe,n(t)]),ze])]),Ke,e("div",Xe,[Ze,e("p",null,[e("a",es,[ss,n(t)]),ns])]),ts,e("p",null,[as,e("a",rs,[os,n(t)]),ls,e("a",is,[ps,n(t)]),cs]),ds,e("ol",null,[hs,us,e("li",null,[bs,e("a",ms,[_s,n(t)]),gs]),e("li",null,[vs,e("a",fs,[ks,n(t)]),ys]),qs]),ws],64)}var As=d(u,[["render",xs]]);export{As as default};