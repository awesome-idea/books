import{_ as a,c as s,o as t,a as e}from"./app.84702608.js";var p="/books/assets/8817cd2b0cf9d146bd5b5df70c606323.ead1ce70.png",r="/books/assets/6cca8a2ad17cfad8cc9dc77a6d5e2a0a.f045f14d.png",i="/books/assets/1a3cd69b563d60c2599040f659e9f7a1.fe1e4b5f.png",d="/books/assets/8a874dbd8bf99e90f45c92f85898dae7.96464fe7.png",c="/books/assets/8fb397315e77f85915347fbac6973aa2.a9caf8e5.png",o="/books/assets/746fa182e8cce09ec3dda6d301c16f45.d21d71c5.png",n="/books/assets/90ad5383cf8003fc15b4c52d7d9e4839.c194a98c.png",l="/books/assets/844417515d447ac933b0c5a81e664ff9.8a0ac036.png",b="/books/assets/581fff8c392bbd445e1425633d53af68.73973869.png",g="/books/assets/263a37ad9d35ee2a475cd7ccda002062.aac69508.png",_="/books/assets/527832638e974b31ea33f83b95258f5f.433c6b7b.png",f="/books/assets/9d98e600ce43cee139fdb71146c74631.23.07.a5c3e134.gif",m="/books/assets/1bb4a16df628b6e9017c0be0f3194d23.23.32.bcba9d62.gif";const J='{"title":"Git Add","description":"","frontmatter":{},"headers":[{"level":2,"title":"Git Add","slug":"git-add"},{"level":2,"title":"Push","slug":"push"},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3"}],"relativePath":"add-push-git-idea.md","lastUpdated":1647078434000}',h={},u=e('<p><img src="'+p+'" alt="">\u8FD9\u662F\u672C\u5468\u5206\u4EAB\u7684\u7B2C\u4E8C\u7BC7\u6587\u7AE0\u3002</p><p>\u7B2C\u4E00\u7BC7\u6587\u7AE0\u4E2D\u4E3B\u8981\u4ECB\u7ECD\u4E86\u5728\u300CIntelliJ IDEA\u300D\u4E2D\u5982\u4F55\u521D\u59CB\u5316\u9879\u76EE</p><p>\u4EE5\u53CA\u5982\u4F55\u8FDB\u884C commit \uFF0C\u4ECE\u5DE5\u4F5C\u533A\u5230\u672C\u5730\u5E93\u3002</p><p>\u4ECA\u5929\u4E3B\u8981\u5206\u4EAB\u7684\u5185\u5BB9\u4E3A Git Add &amp; Git Push</p><h2 id="git-add" tabindex="-1">Git Add <a class="header-anchor" href="#git-add" aria-hidden="true">#</a></h2><p>\u6628\u5929\u5206\u4EAB\u4E86\u5BF9\u6587\u4EF6\u7684\u4FEE\u6539\u4E4B\u540E\u8FDB\u884C Commit \u64CD\u4F5C\u7684\u4ECB\u7ECD\u3002</p><p>\u5BF9\u4E8E\u5DF2\u7ECF\u5B58\u5728\u7684\u6587\u4EF6\uFF0C\u300CIntelliJ IDEA\u300D\u5728\u5904\u7406\u7684\u65F6\u5019\u4F1A\u81EA\u52A8 add\u3002</p><p>\u4E0D\u9700\u8981\u50CF\u547D\u4EE4\u884C\u90A3\u6837 git add xxx\uFF0C\u4F46\u662F\u6709\u4E00\u79CD\u60C5\u51B5\u4F8B\u5916\uFF0C\u90A3\u5C31\u662F\u8FD9\u4E2A\u6587\u4EF6\u662F\u65B0\u521B\u5EFA\u7684\u3002<br><img src="'+r+'" alt=""><br>\u5728\u300CIntelliJ IDEA\u300D\u4E2D\u7B2C\u4E00\u6B21\u521B\u5EFA\u65B0\u6587\u4EF6\u65F6\u4F1A\u5F39\u7A97\u63D0\u793A\u662F\u5426\u5C06\u6587\u4EF6\u6DFB\u52A0\u5230 Git \u4E2D\u3002</p><p>\u5982\u4E0A\u56FE\u6240\u793A\u3002\u4F1A\u63D0\u9192\u4F60\u662F\u5426\u5C06\u5F53\u524D\u65B0\u589E\u6587\u4EF6\u6DFB\u52A0\u5230 vcs \u7248\u672C\u63A7\u5236\u4E2D\uFF0C\u5982\u679C\u52FE\u9009\u662F\u5219\u4EE5\u540E\u6BCF\u6B21\u65B0\u589E\u6587\u4EF6\u7684\u65F6\u5019\u300CIntelliJ IDEA\u300D\u76F8\u5F53\u4E8E\u81EA\u52A8\u4F1A\u6DFB\u52A0 add \u64CD\u4F5C \u4E0D\u7528\u624B\u52A8\u5904\u7406\u3002<br><img src="'+i+'" alt=""><br>\u52FE\u9009\u6DFB\u52A0\u4E4B\u540E \u6587\u4EF6\u989C\u8272\u7531\u521A\u6DFB\u52A0\u65F6\u7684 \u7EA2\u8272\u53D8\u4E3A\u4E86\u84DD\u8272\u3002</p><p>\u4E2A\u4EBA\u5EFA\u8BAE\u5982\u679C\u4E0D\u662F\u9879\u76EE\u5C31\u662F\u90A3\u79CD\u975E\u5E38\u7279\u6B8A\u7684\u90A3\u79CD\uFF0C\u8FD8\u662F\u53EF\u4EE5\u6253\u5F00\u8FD9\u4E2A\u5F00\u5173\u3002</p><p>\u4E0D\u7136\u5C31\u662F\u5F88\u6709\u53EF\u80FD\u51FA\u73B0\u3002\u672C\u6765\u5728\u4F60\u672C\u5730\u8FD0\u884C\u7684\u597D\u597D\u7684\u3002\u540C\u4E8B\u62C9\u53D6\u4E0B\u6765\u7684\u65F6\u5019\u4E0D\u80FD\u8FD0\u884C\u3002<br><img src="'+d+'" alt=""><br>\u770B\u534A\u5929\u539F\u6765\u662F\u6587\u4EF6\u6CA1\u6709\u63D0\u4EA4\u3002</p><p>\u6BD5\u7ADF\u6BCF\u5929\u540C\u6B65\u4EE3\u7801\u662F\u6211\u4EEC\u6BCF\u5929\u5FC5\u987B\u4F1A\u53BB\u505A\u7684\u4E8B\u3002</p><p>\u5982\u679C\u8FD9\u4E2A\u95EE\u9898\u4E0D\u6CE8\u610F\u90A3\u4E48\u5C31\u5F88\u6709\u53EF\u80FD\u7ECF\u5E38\u4F1A\u51FA\u73B0 \u8FD8\u662F\u633A\u70E6\u4EBA\u7684\u3002</p><p><img src="'+c+'" alt=""><br>\u5982\u679C\u662F\u4E0D\u5C0F\u5FC3\u5173\u95ED\u6389\u4E86\u8BBE\u7F6E \u53EF\u4EE5\u5728\u8FD9\u91CC\u8BBE\u7F6E\u56DE\u6765, \u5728 When files are created \u9009\u9879\u4E0B\u52FE\u9009 Add silently\uFF0C\u5C31\u53EF\u4EE5\u9ED8\u8BA4\u6DFB\u52A0\u4E86\u3002</p><p><img src="'+o+'" alt=""><br>\u65B0\u7684\u6587\u4EF6\u5728\u9879\u76EE\u4E2D\u4E5F\u662F\u975E\u5E38\u5BB9\u6613\u770B\u51FA\u6765\u7684\uFF0C\u5728\u6587\u4EF6\u5217\u8868\u4E2D \u4FEE\u6539\u7684\u7684\u6587\u4EF6\u4F1A\u5448\u73B0\u6DE1\u9EC4\u8272\u3002\u5C14\u65B0\u589E\u7684\u6587\u4EF6\u5219\u662F\u8C08\u7EFF\u8272\u3002\u5982\u679C\u662F\u6CA1\u6709\u6DFB\u52A0\u5230\u5DE5\u4F5C\u76EE\u5F55\u7684\u6587\u4EF6\u5219\u662F \u7EA2\u8272\u3002</p><p><img src="'+n+'" alt=""><br>\u5982\u679C\u662F\u6587\u4EF6\u5DF2\u7ECF\u6DFB\u52A0\u4E86\uFF0C\u4F46\u662F\u8FD8\u4E0D\u5728\u6682\u5B58\u533A\uFF0C\u8FD9\u4E2A\u624B\u52A8\u5728\u8981\u6DFB\u52A0\u6587\u4EF6\u6216\u8005\u6587\u4EF6\u5939\u4E0B\u9009\u7740\u53F3\u952E Git -&gt; add to vsc</p><p><img src="'+l+'" alt=""><br>\u5982\u679C\u4F60\u6709\u7279\u6B8A\u7684\u9700\u6C42\uFF0C\u5728\u6587\u4EF6\u7684\u67D0\u4E9B\u72B6\u6001\u4E0B\u4F60\u60F3\u8981\u6539\u53D8\u989C\u8272\uFF0C\u90A3\u4E48\u53EF\u4EE5\u53BB\u8BBE\u7F6E\u91CC\u9762\u8FDB\u884C\u67E5\u770B\uFF0C\u8FD9\u91CC\u9762\u4E5F\u5217\u4E3E\u4E86\u6BCF\u4E00\u79CD\u72B6\u6001\u5BF9\u5E94\u7684\u989C\u8272\u3002</p><h2 id="push" tabindex="-1">Push <a class="header-anchor" href="#push" aria-hidden="true">#</a></h2><p><img src="'+b+`" alt=""><br>\u6211\u4EEC\u5C06\u4EE3\u7801\u63D0\u4EA4\u5230\u672C\u5730\u5E93\u4E4B\u540E\uFF0C\u5176\u5B9E\u5C31\u76F8\u5F53\u4E8E\u4E00\u4E2A\u5C0F\u578B\u7684\u672C\u5730\u7684 Git \u7BA1\u7406\u7CFB\u7EDF\u4E86\uFF0C\u4E0D\u8FC7\u8FD8\u4E0D\u591F\uFF0C\u6BD5\u7ADF\u6211\u4EEC\u7684\u9879\u76EE\u662F\u56E2\u961F\u5F00\u53D1\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u5C06\u6211\u4EEC\u81EA\u5DF1\u7684\u7248\u672C\u5E93\u4E0E\u56E2\u961F\u7ED3\u5408\u3002</p><p>\u6211\u4EEC\u9700\u8981\u5C06\u672C\u5730\u5206\u652F\u63A8\u9001\u5230\u5BF9\u5E94\u7684\u8FDC\u7A0B\u5206\u652F\uFF0C\u5BF9\u5E94\u7684 Git \u547D\u4EE4\u4E3A</p><div class="language-shell"><pre><code><span class="token function">git</span> push origin <span class="token operator">&lt;</span>branchName<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></div><p>\u800C\u5728\u300CIntelliJ IDEA\u300D\u4E2D\u51FA\u53D1\u89E6\u53D1\u8FD9\u4E2A\u64CD\u4F5C\uFF0C\u603B\u5171\u6709 n \u79CD\u8DEF\u5F84\uFF0C\u770B\u56FE<br><img src="`+g+'" alt=""><br>\u672C\u8D28\u4E0A\u5C0F\u7ED3\u80FD\u591F\u89E6\u53D1 Commit \u7684\u4F4D\u7F6E\u5DEE\u4E0D\u591A\uFF0C\u56E0\u4E3A commit \u540E\u9762\u5C31\u662F Push \u4ED6\u4EEC\u662F\u7D27\u5BC6\u76F8\u5173\u7684\u3002</p><p><img src="'+_+'" alt=""></p><ul><li>\u8FD9\u91CC\u53EF\u4EE5\u770B\u5230\u6B64\u6B21\u63D0\u4EA4\u7684\u5185\u5BB9</li><li>\u4EE5\u53CA\u6B64\u6B21\u63D0\u4EA4\u7684\u591A\u5C11\u6B21commit</li><li>\u8FD8\u53EF\u4EE5\u9009\u62E9\u662F\u5426\u63A8\u9001 tag \u5982\u679C\u6709</li><li>\u53F3\u4FA7\u53EF\u4EE5\u770B\u5230\u5BF9\u5E94\u7684 \u6BCF\u6B21\u7684 commit \u5BF9\u5E94\u7684\u6587\u4EF6\u5217\u8868\u3002</li></ul><p><img src="'+f+`" alt=""><br>\u6211\u4EEC\u4E5F\u53EF\u4EE5\u901A\u8FC7\u5FEB\u6377\u952E command + shift + k \u89E6\u53D1 push \u64CD\u4F5C</p><p>\u6B63\u5E38\u6765\u8BF4\u6211\u4EEC\u90FD\u662F\u4E00\u4E2A\u9879\u76EE\u5BF9\u5E94\u4E00\u4E2A\u5730\u5740\uFF0C\u5728\u4E5F\u4E0D\u4FDD\u8BC1\u4E00\u4E9B\u7279\u6B8A\u60C5\u51B5\uFF0C\u4F60\u9700\u8981\u914D\u7F6E\u4E24\u4E2A Git r\u3002\u5BF9\u5E94\u7684\u547D\u4EE4\u4E3A</p><div class="language-shell"><pre><code><span class="token function">git</span> remote <span class="token function">add</span> newAddress https://xxx
</code></pre></div><p><img src="`+m+'" alt=""><br>\u5728\u300CIntelliJ IDEA\u300D\u83DC\u5355\u4E2D\u70B9\u51FB Git -&gt; Manage Remotes\uFF0C \u5728\u5F39\u6846\u4E2D\u65B0\u589E\u5730\u5740\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h2><p>\u5230\u8FD9\u91CC\uFF0C\u6211\u4EEC\u5C31\u7B97\u662F\u5B8C\u6210\u4E86\u4E00\u4E2A\u5B8C\u6210\u7684\u4ECE <strong>\u9879\u76EE\u521D\u59CB\u5316</strong>\uFF0C\u6DFB\u52A0\u9879\u76EE\u5230<strong>\u5DE5\u4F5C\u533A</strong>\uFF0C\u63D0\u4EA4\u5230<strong>\u672C\u5730\u5E93</strong>\u3002\u770B\u5B8C\u8FD9\u4E24\u8282\u6211\u76F8\u4FE1\u5728\u9879\u76EE\u91CC\u9762\u7684\u57FA\u672C\u64CD\u4F5C\u4F60\u5DF2\u7ECF\u5177\u5907\u4E86\uFF0C\u80FD\u5B8C\u6210\u57FA\u672C\u7684\u5DE5\u4F5C\u3002</p><p>\u660E\u5929\u6211\u5C06\u4ECE\u573A\u666F\u89E6\u53D1\uFF0C\u6765\u66F4\u52A0\u6DF1\u5165\u4ECB\u7ECD Git \u7684\u4F7F\u7528\u3002</p><p>\u660E\u4E09\u4E3B\u9898\uFF1AGit Log \u4EE5\u524D\u660E\u660E\u662F\u597D\u7684\u529F\u80FD\uFF0C\u4F46\u662F\u8FD9\u6B21\u53D1\u7248\u4E4B\u540E\u5374\u51FA Bug \u4E86\uFF0C\u4E3A\u5565\uFF1F<br>\u5468\u56DB\u4E3B\u9898\uFF1AGit Merge \u5404\u79CD\u82B1\u5F0F\u89E3\u51B3\u51B2\u7A81\uFF0C\u518D\u4E5F\u4E0D\u6015\u3002<br>\u5468\u4E94\u4E3B\u9898\uFF1AGit Branch \u5404\u79CD\u82B1\u91CC\u80E1\u54E8\u7684\u5DE5\u4F5C\u6D41\uFF0C\u603B\u6709\u9002\u5408\u4F60\u7684\u4E00\u79CD\u3002</p>',32),v=[u];function k(G,A,I,x,D,E){return t(),s("div",null,v)}var T=a(h,[["render",k]]);export{J as __pageData,T as default};