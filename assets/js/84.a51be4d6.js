(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{532:function(e,t,r){"use strict";r.r(t);var a=r(23),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"团队知识库搭建记录-dokuwiki"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#团队知识库搭建记录-dokuwiki"}},[e._v("#")]),e._v(" 团队知识库搭建记录 - DokuWiki")]),e._v(" "),r("h2",{attrs:{id:"参考与致谢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[e._v("#")]),e._v(" 参考与致谢")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://blog.csdn.net/wszll_Alex/article/details/80246721",target:"_blank",rel:"noopener noreferrer"}},[e._v("dokuwiki 学习（一）—— 增加页面命名空间"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://blog.csdn.net/wszll_Alex/article/details/80246836",target:"_blank",rel:"noopener noreferrer"}},[e._v("dokuwiki 学习（二）—— 新增页面（文章）"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://blog.csdn.net/wszll_Alex/article/details/80252098",target:"_blank",rel:"noopener noreferrer"}},[e._v("dokuwiki 学习（三）—— 删除页面（文章）"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://blog.csdn.net/wszll_Alex/article/details/80252132",target:"_blank",rel:"noopener noreferrer"}},[e._v("dokuwiki 学习（四）—— 移动页面（文章）"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://leekwen.blog.csdn.net/article/details/54907445?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.control",target:"_blank",rel:"noopener noreferrer"}},[e._v("dokuwiki 插件的常用配置及其他 Tips"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://wiki.gimo.me/wiki/customize",target:"_blank",rel:"noopener noreferrer"}},[e._v("自定义 DokuWiki"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://blog.csdn.net/wszll_Alex/article/details/80252201",target:"_blank",rel:"noopener noreferrer"}},[e._v("dokuwiki 学习（六）—— 增加媒体命名空间"),r("OutboundLink")],1)])])]),e._v(" "),r("p",[e._v("对比：")]),e._v(" "),r("ul",[r("li",[e._v("MoinMoin Wiki")]),e._v(" "),r("li",[e._v("FosWiki")]),e._v(" "),r("li",[e._v("xwiki")]),e._v(" "),r("li",[e._v("mm-wiki 从 7456")]),e._v(" "),r("li",[e._v("MinDoc")])]),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("blockquote",[r("p",[e._v("文章作者："),r("strong",[e._v("Power Lin")])]),e._v(" "),r("p",[e._v("原文地址："),r("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki-power.com"),r("OutboundLink")],1),r("br"),e._v("\n版权声明：文章采用 "),r("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC BY-NC-SA 4.0"),r("OutboundLink")],1),e._v(" 协议，转载请注明出处。")])]),e._v(" "),r("h2",{attrs:{id:"拓展"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#拓展"}},[e._v("#")]),e._v(" 拓展")]),e._v(" "),r("ul",[r("li",[e._v("discussion plugin")]),e._v(" "),r("li",[e._v("Markdowku")]),e._v(" "),r("li",[e._v("MathJax plugin")]),e._v(" "),r("li",[e._v("Pagelist Plugin")]),e._v(" "),r("li",[e._v("simplenavi plugin")]),e._v(" "),r("li",[e._v("Wrap Plugin")]),e._v(" "),r("li",[e._v("Indexmenu Plugin：索引目录")])]),e._v(" "),r("p",[e._v("模板")]),e._v(" "),r("ul",[r("li",[e._v("vector template")])]),e._v(" "),r("h2",{attrs:{id:"命名空间与文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#命名空间与文章"}},[e._v("#")]),e._v(" 命名空间与文章")]),e._v(" "),r("p",[e._v("DokuWiki 的文章数据在 "),r("code",[e._v("dokuwiki/data/pages")]),e._v(" 目录下。命名空间相当于文件夹，"),r("code",[e._v(".txt")]),e._v(" 文件相当于单篇文章。")]),e._v(" "),r("p",[e._v("中文目录不能正常显示的解决方法：")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("进入 "),r("code",[e._v("DokuWiki")]),e._v(" 目录下的 "),r("code",[e._v("/inc")]),e._v(" 文件夹，打开 "),r("code",[e._v("pageutils.php")]),e._v(" 文件，将如下两行注释：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("// $file = urlencode($file);\n// $file = str_replace('%2F','/',$file);\n")])])])]),e._v(" "),r("li",[r("p",[e._v("将如下一行代码注释，并添加另外一行：")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("// return urldecode($file);\nreturn $file;\n")])])])])]),e._v(" "),r("h2",{attrs:{id:"新增文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新增文章"}},[e._v("#")]),e._v(" 新增文章")]),e._v(" "),r("ol",[r("li",[e._v("搜索安装插件："),r("code",[e._v("Add New Page Plugin")])]),e._v(" "),r("li",[e._v("网址后缀 id 改为 "),r("code",[e._v("sidebar")]),e._v(" 访问")]),e._v(" "),r("li",[e._v("创建页面，写入 "),r("code",[e._v(e._s(e.NEWPAGE))])])]),e._v(" "),r("h2",{attrs:{id:"删除文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#删除文章"}},[e._v("#")]),e._v(" 删除文章")]),e._v(" "),r("p",[e._v("把文章内容删空，页面就自动删除了。没有文章的命名空间也会被自动移除")]),e._v(" "),r("h2",{attrs:{id:"移动文章-修改名字"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#移动文章-修改名字"}},[e._v("#")]),e._v(" 移动文章 / 修改名字")]),e._v(" "),r("ol",[r("li",[e._v("搜索安装插件："),r("code",[e._v("Move Plugin")])]),e._v(" "),r("li",[e._v("在右侧工具栏 - "),r("code",[e._v("页面重命名")])])]),e._v(" "),r("h2",{attrs:{id:"定制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#定制"}},[e._v("#")]),e._v(" 定制")]),e._v(" "),r("h3",{attrs:{id:"删除页面内的编辑按钮"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#删除页面内的编辑按钮"}},[e._v("#")]),e._v(" 删除页面内的编辑按钮")]),e._v(" "),r("p",[r("code",[e._v("inc/html.php")]),e._v(" 中搜索")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("return \"<div class='secedit editbutton_\" . $data['target'] .\n                   \" editbutton_\" . $secid . \"'>\" .\n       html_btn('secedit', $ID, '',\n                array_merge(array('do'  => 'edit',\n                                  'rev' => $INFO['lastmod'],\n                                  'summary' => '['.$name.'] '), $data),\n                'post', $name) . '</div>';\n")])])]),r("p",[e._v("注释掉。")])])}),[],!1,null,null,null);t.default=i.exports}}]);