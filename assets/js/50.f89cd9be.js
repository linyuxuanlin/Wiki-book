(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{510:function(t,e,r){"use strict";r.r(e);var a=r(14),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"t-clock-桌上小钟"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#t-clock-桌上小钟"}},[t._v("#")]),t._v(" T-Clock 桌上小钟")]),t._v(" "),r("h2",{attrs:{id:"准备材料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#准备材料"}},[t._v("#")]),t._v(" 准备材料")]),t._v(" "),r("ol",[r("li",[r("strong",[t._v("NodeMCU")]),t._v("：基于 ESP8266")]),t._v(" "),r("li",[r("strong",[t._v("OLED")]),t._v("：128x64 分辨率，I2C 接口（SPI 请见参考链接）")])]),t._v(" "),r("h2",{attrs:{id:"接线"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接线"}},[t._v("#")]),t._v(" 接线")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}},[t._v("OLED")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("NodeMCU")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("GND")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("GND")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("VCC")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("3.3V")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("SCL")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("D1")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("SDA")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("D2")])])])]),t._v(" "),r("h2",{attrs:{id:"例程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#例程"}},[t._v("#")]),t._v(" 例程")]),t._v(" "),r("h3",{attrs:{id:"api-配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api-配置"}},[t._v("#")]),t._v(" API 配置")]),t._v(" "),r("ol",[r("li",[t._v("在 "),r("a",{attrs:{href:"https://www.seniverse.com/",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("心知天气")]),r("OutboundLink")],1),t._v(" 注册账户")]),t._v(" "),r("li",[t._v("在控制台内添加新产品（选择免费版即可）")]),t._v(" "),r("li",[t._v("复制 API 私钥")])]),t._v(" "),r("h3",{attrs:{id:"包含库文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#包含库文件"}},[t._v("#")]),t._v(" 包含库文件")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/adafruit/Adafruit_SSD1306",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("Adafruit_SSD1306.h")]),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"最终例程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#最终例程"}},[t._v("#")]),t._v(" 最终例程")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/linyuxuanlin/T-Clock/tree/master/Software/Codes/Weather_Clock_OLED_I2C",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("T-Clock/Software/Codes/Weather_Clock_OLED_I2C")]),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("注：需将 WiFi 名称及密码、城市、私钥改为你自己的。"),r("br"),t._v("\n如果编译出现错误，且错误信息定位在 "),r("code",[t._v('#error("Height incorrect, please fix Adafruit_SSD1306.h!");')]),t._v("，则需打开库文件 "),r("code",[t._v("Adafruit_SSD1306.h")]),t._v("，将 "),r("code",[t._v("#define SSD1306_128_32")]),t._v(" 改为 "),r("code",[t._v("#define SSD1306_128_64")]),t._v("。")]),t._v(" "),r("p",[t._v("注：定制硬件项目正在路上~")]),t._v(" "),r("h2",{attrs:{id:"参考与致谢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[t._v("#")]),t._v(" 参考与致谢")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://wiki-power.com/unlist/T-Clock%E6%A1%8C%E4%B8%8A%E5%B0%8F%E9%92%9F%EF%BC%88%E6%97%A7%EF%BC%89.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("T-Clock 桌上小钟（旧）"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.seniverse.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("心知天气"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.bilibili.com/video/av89935868/?spm_id_from=333.788.b_636f6d6d656e74.4",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESP8266 接入心知天气 API【程序＋详细讲解】"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.bilibili.com/video/av88920975/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESP8266 ＋ OLED = 网络时钟和未来 3 日天气预报"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://gitee.com/young_people_only_love_her/My_ESP8266/tree/master/%E5%BF%83%E7%9F%A5%E5%A4%A9%E6%B0%94",target:"_blank",rel:"noopener noreferrer"}},[t._v("My_ESP8266/心知天气"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.electronicwings.com/nodemcu/oled-graphic-display-interfacing-with-nodemcu",target:"_blank",rel:"noopener noreferrer"}},[t._v("OLED Graphic Display Interfacing with NodeMCU"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/adafruit/Adafruit_SSD1306",target:"_blank",rel:"noopener noreferrer"}},[t._v("adafruit/Adafruit_SSD1306"),r("OutboundLink")],1)])]),t._v(" "),r("br"),t._v(" "),r("br"),t._v(" "),r("blockquote",[r("p",[t._v("文章作者："),r("strong",[t._v("Power Lin")]),r("br"),t._v("\n原文地址："),r("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki-power.com"),r("OutboundLink")],1),r("br"),t._v("\n版权声明：文章采用 "),r("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY-NC-SA 4.0"),r("OutboundLink")],1),t._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);e.default=n.exports}}]);