(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{470:function(t,e,r){"use strict";r.r(e);var a=r(14),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"attiny85-调试记录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#attiny85-调试记录"}},[t._v("#")]),t._v(" ATTiny85 调试记录")]),t._v(" "),r("h2",{attrs:{id:"bootloader"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bootloader"}},[t._v("#")]),t._v(" Bootloader")]),t._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[t._v("P:"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Arduino"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("hardware"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("tools"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("avr/bin/avrdude -C "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"P:\\Arduino\\hardware'),r("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[t._v("\\t")]),t._v("ools"),r("span",{pre:!0,attrs:{class:"token entity",title:"\\a"}},[t._v("\\a")]),t._v('vr/etc/avrdude.conf"')]),t._v(" -v -pattiny85 -carduino -PCOM4 -b119200 -Uflash:w:D:"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("t85_default.hex:i -U lfuse:w:0xE1:m -U hfuse:w:0xDD:m -U efuse:w:0xFE:m\n")])])]),r("h2",{attrs:{id:"arduino-作为-isp-下载器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arduino-作为-isp-下载器"}},[t._v("#")]),t._v(" Arduino 作为 ISP 下载器")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}},[t._v("Attiny")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("Arduino")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("Pin 1（PB5）")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("D10")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("Pin 4 （GND）")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("GND")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("Pin 5 （PB0）")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("D11")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("Pin 6 （PB1）")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("D12")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("Pin 7 （PB2）")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("D13")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("Pin 8 （VCC）")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("5V")])])])]),t._v(" "),r("p",[t._v("先给 Arduino 烧 ISP 程序：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200426144425.png",alt:""}})]),t._v(" "),r("p",[t._v("打开 IDE 首选项，在附加开发板地址中填写：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("https://raw.githubusercontent.com/damellis/attiny/ide-1.6.x-boards-manager/package_damellis_attiny_index.json\n")])])]),r("p",[t._v("打开开发板管理器：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200426144642.png",alt:""}})]),t._v(" "),r("p",[t._v("搜索并安装（可能需要代理）：\n"),r("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200426144732.png",alt:""}})]),t._v(" "),r("p",[t._v("烧录时注意选对芯片型号、时钟速率（Internal 16 MHz）、Arduino 所在的端口，注意编程器选择 "),r("code",[t._v("Arduino as ISP")]),t._v("：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200426144834.png",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("h2",{attrs:{id:"参考与致谢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[t._v("#")]),t._v(" 参考与致谢")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://blog.csdn.net/Argon_Ghost/article/details/103637870?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-4&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-4",target:"_blank",rel:"noopener noreferrer"}},[t._v("基于 ATTiny85 的 digispark Arduino 最小系统的自制教程（一）"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/Argon_Ghost/article/details/103859931",target:"_blank",rel:"noopener noreferrer"}},[t._v("基于 ATTiny85 的 digispark Arduino 最小系统的自制教程（二）"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/73336394",target:"_blank",rel:"noopener noreferrer"}},[t._v("Digispark USB 开发板把玩笔记（一）：认识这块小巧、便宜、多功能的 Arduino 兼容板"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://digistump.com/wiki/digispark/tutorials/connecting",target:"_blank",rel:"noopener noreferrer"}},[t._v("Connecting and Programming Your Digispark"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://iremo-tw.blogspot.com/2018/03/attiny85-micronucleus-bootloader.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Attiny85 Micronucleus bootloader 燒錄"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.jianshu.com/p/55e86b4e0194",target:"_blank",rel:"noopener noreferrer"}},[t._v("ATtiny85 制作迷你小游戏机"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://blog.sina.com.cn/s/blog_6566538d0102w6qk.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("DigiSpark ATtiny85 8 脚 Arduino AVR ISP 编程的那点事儿 BootLoader 熔丝"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://digistump.com/wiki/digispark/quickref",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quick Reference Frequently requested info"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("文章作者："),r("strong",[t._v("Power Lin")]),t._v("\n原文地址："),r("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki-power.com"),r("OutboundLink")],1),t._v("\n版权声明：文章采用 "),r("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY-NC-SA 4.0"),r("OutboundLink")],1),t._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);e.default=n.exports}}]);