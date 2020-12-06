(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{539:function(_,v,t){"use strict";t.r(v);var a=t(23),s=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"大疆-n3-飞控-参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#大疆-n3-飞控-参考资料"}},[_._v("#")]),_._v(" 大疆 N3 飞控 - 参考资料")]),_._v(" "),t("h2",{attrs:{id:"资料及软件下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资料及软件下载"}},[_._v("#")]),_._v(" 资料及软件下载")]),_._v(" "),t("p",[t("a",{attrs:{href:"https://www.dji.com/cn/n3/info#downloads%22",target:"_blank",rel:"noopener noreferrer"}},[_._v("N3 Downloads"),t("OutboundLink")],1)]),_._v(" "),t("h2",{attrs:{id:"基础知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础知识"}},[_._v("#")]),_._v(" 基础知识")]),_._v(" "),t("p",[_._v("硬件组成：")]),_._v(" "),t("ul",[t("li",[_._v("主控器（双 IMU、数据记录仪和气压计），其中 CAN1 连接 GNSS-Compass 模块和 DJI 设备，CAN2 连接 SDK 设备；M1 - M8 连接飞行器电调，且可通过 iESC 端口与 DJI 智能电调通信。")]),_._v(" "),t("li",[_._v("GNSS-Compass 模块，含 GPS / GLONASS 双模接收机和指南针。")]),_._v(" "),t("li",[_._v("电源管理模块（PMU）。")]),_._v(" "),t("li",[_._v("LED 模块。")])]),_._v(" "),t("p",[_._v("飞行模式：")]),_._v(" "),t("ul",[t("li",[_._v("P：定位模式，使用 GPS 模块或视觉定位系统以实现飞行器精确悬停。")]),_._v(" "),t("li",[_._v("A：姿态模式，不使用 GNSS 与视觉定位系统，仅提供姿态增稳，若 GPS 卫星信号良好可实现返航。")]),_._v(" "),t("li",[_._v("S：运动模式，基于自动定位模式，增加感度，姿态角最大可 45°")]),_._v(" "),t("li",[_._v("G：迟缓模式，此模式下飞机运动较为迟缓，建议新手使用。")]),_._v(" "),t("li",[_._v("M：手动，不使用 GNSS 与视觉定位系统，没有姿态增稳，无姿态角度限制。")])]),_._v(" "),t("p",[_._v("返航功能：智能 / 低电压 / 失控返航")]),_._v(" "),t("p",[_._v("保护功能：失控保护 / 低电压保护 / 高度距离限制 / 特殊区域飞行限制 / 输出动力缺失保护（六旋翼以上才有用） / 动力保护 / 内置双 IMU / 内置数据记录仪 / 航向锁定 / 返航锁定")]),_._v(" "),t("p",[_._v("飞行特性：因硬件而差异，最大抗风 10 m/s，悬停精度垂直 ±0.5 m，水平 ± 1.5 m，最大偏航角速度 150 °/s")]),_._v(" "),t("h2",{attrs:{id:"硬件安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#硬件安装"}},[_._v("#")]),_._v(" 硬件安装")]),_._v(" "),t("p",[t("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/UTOOLS1574661666661.png",alt:""}})]),_._v(" "),t("p",[_._v("主控器朝上并与机身平行，推荐方向朝向机头（若是别的方向，要在软件里设置），尽量安装在飞行器重心。")]),_._v(" "),t("p",[_._v("LED 模块可装在机身侧下方，方便飞行时观察状态。")]),_._v(" "),t("p",[_._v("PMU 模块要注意散热。")]),_._v(" "),t("h2",{attrs:{id:"硬件调试"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#硬件调试"}},[_._v("#")]),_._v(" 硬件调试")]),_._v(" "),t("h3",{attrs:{id:"指南针校准"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指南针校准"}},[_._v("#")]),_._v(" 指南针校准")]),_._v(" "),t("ol",[t("li",[_._v("快速拨动 3 次 P / A 模式切换开关，此时黄灯常亮，进入校准状态。")]),_._v(" "),t("li",[_._v("水平旋转飞行器 360°，此时绿灯常亮。")]),_._v(" "),t("li",[_._v("使飞行器机头朝下，水平转 360°。")]),_._v(" "),t("li",[_._v("此时灯正常闪烁，完成校准。若红灯闪烁，则需重新校准。")])]),_._v(" "),t("h3",{attrs:{id:"参数设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数设置"}},[_._v("#")]),_._v(" 参数设置")]),_._v(" "),t("ul",[t("li",[_._v("基础感度（俯仰 / 横滚 / 航向）：尽可能大，但也不要太大，太大会反馈过度，在悬停状态下高频抖动；反之如果太小则造成响应时间变长（可以类比游戏的网络延迟）且晃动。")]),_._v(" "),t("li",[_._v("油门：尽可能大，但过大起降过快，不安全；过小则会造成起降过慢，且影响上面几个参数。")]),_._v(" "),t("li",[_._v("动力带宽：因不同飞机而异，过小会造成响应慢、"),t("strong",[_._v("悬停状态下高频抖动")]),_._v("（不够力）；过大则修正过度，"),t("strong",[_._v("回中时出现慢速晃动")]),_._v(" 。")]),_._v(" "),t("li",[_._v("刹车：")]),_._v(" "),t("li",[_._v("姿态灵敏度（刹车 / 姿态）：姿态灵敏度越小则姿态命令跟随遥控器指令越慢，姿态响应更加平缓；刹车灵敏度描述刹车的快慢程度，越小则刹车过程越平缓且 "),t("strong",[_._v("刹车距离越长")]),_._v(" 。")]),_._v(" "),t("li",[_._v("姿态感度：过大则姿态响应更加迅猛，越小则响应迟缓")])])])}),[],!1,null,null,null);v.default=s.exports}}]);