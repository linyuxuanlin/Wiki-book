(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{556:function(t,a,s){"use strict";s.r(a);var r=s(14),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"云打印服务器的搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#云打印服务器的搭建"}},[t._v("#")]),t._v(" 云打印服务器的搭建")]),t._v(" "),s("p",[t._v("—— 用树莓派搭建云打印服务器，让普通打印机也能无线共享打印。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20190106181653349/IMG_20181222_155243.jpg",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("实验室有两台打印机，每次打印，都得抱着电脑跑来跑去，久之觉得麻烦，正好有闲置的树莓派板子一枚，遂搭了个云打印服务器，共享给实验室的所有人，实现云端打印。")]),t._v(" "),s("h2",{attrs:{id:"步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),s("h3",{attrs:{id:"_1-前期准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-前期准备"}},[t._v("#")]),t._v(" 1. 前期准备")]),t._v(" "),s("p",[t._v("树莓派刷入 Raspbian 系统，最好更换国内软件源（教程请自行 Google）。")]),t._v(" "),s("h3",{attrs:{id:"_2-配置云打印服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置云打印服务"}},[t._v("#")]),t._v(" 2. 配置云打印服务")]),t._v(" "),s("p",[t._v("安装 CUPS 插件：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ sudo apt-get install cups\n$ sudo cupsctl --remote-any\n$ sudo /etc/init.d/cups restart\n")])])]),s("p",[t._v("查看树莓派当前 IP 地址：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$hostname -I\n")])])]),s("p",[t._v("现在可以在浏览器输入：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("https://你的树莓派 IP:631/\n")])])]),s("p",[t._v("打开 CUPS 的界面。 浏览器可能会弹出警告，忽略即可。")]),t._v(" "),s("p",[t._v("跳到 Administration 界面，注意右边的勾选：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20190106181653349/SRnaG8Upe4QCw4A7__thumbnail.png",alt:""}})]),t._v(" "),s("p",[t._v("添加打印机：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20190106181653349/2ha01tLqMK8dKPPw__thumbnail.png",alt:""}})]),t._v(" "),s("p",[t._v("将打印机用 USB 线接上树莓派，一般可以看到本地 USB 设备： "),s("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20190106181653349/dOY25IVr55cf4qbg__thumbnail-1.png",alt:""}})]),t._v(" "),s("p",[t._v("直接添加设备，名字越简单越好，share 选项一定要勾选： "),s("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20190106181653349/zY62367hBa0ZuwJV__thumbnail.png",alt:""}})]),t._v(" "),s("p",[t._v("找到打印机相应的型号，然后一直点就行了。 配置完成后，可以在打印机的页面选择 "),s("code",[t._v("Print Test Page")]),t._v(" 测试能否正常打印：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20190106181653349/9izhdEoI8cobbMjF__thumbnail.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"_3-在-windows-上配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-在-windows-上配置"}},[t._v("#")]),t._v(" 3. 在 Windows 上配置")]),t._v(" "),s("p",[t._v("控制面板 - 设备和打印机 - 添加打印机")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20190106181653349/dk39pnMjcQYPBElC__thumbnail.png",alt:""}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20190106181653349/CRkgxClLaaYjdGPt__thumbnail.png",alt:""}})]),t._v(" "),s("p",[t._v("填入 IP，例如：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("http://你的树莓派 IP:631/printers/刚才设定的打印机名称\n")])])]),s("p",[s("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20190106181653349/Z8sZTaxH5ZoGWyBK__thumbnail.png",alt:""}})]),t._v(" "),s("p",[t._v("打印测试页试试？")]),t._v(" "),s("h2",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),s("p",[t._v("Q：两台打印机都能实现云打印了吗？"),s("br"),t._v("\nA：其中一台激光打印机年代比较久远，应该是驱动问题，花了一天的时间折腾，最终还是实现不了。")]),t._v(" "),s("p",[t._v("Q：云打印具体有哪些功能？"),s("br"),t._v("\nA："),s("strong",[t._v("局域网内")]),t._v(" 可以无线打印，手机上也可以直接打印。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("重复两遍以上的事情，就可以考虑用自动化流程解决了，要学会用聪明的方法偷懒。")]),t._v(" "),s("h2",{attrs:{id:"参考与致谢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[t._v("#")]),t._v(" 参考与致谢")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.ncnynl.com/archives/201608/742.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("树莓派 3 - 搭建网络打印机服务器（支持 PC，IPhone，Android 打印）"),s("OutboundLink")],1)])]),t._v(" "),s("blockquote",[s("p",[t._v("文章作者："),s("strong",[t._v("Power Lin")]),s("br"),t._v("\n原文地址："),s("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki-power.com"),s("OutboundLink")],1),s("br"),t._v("\n版权声明：文章采用 "),s("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY-NC-SA 4.0"),s("OutboundLink")],1),t._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);