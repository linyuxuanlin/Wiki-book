(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{552:function(s,a,t){"use strict";t.r(a);var e=t(14),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"centos-配置-oh-my-zsh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos-配置-oh-my-zsh"}},[s._v("#")]),s._v(" CentOS 配置 Oh My Zsh")]),s._v(" "),t("h2",{attrs:{id:"查看当前-shell"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看当前-shell"}},[s._v("#")]),s._v(" 查看当前 Shell")]),s._v(" "),t("div",{staticClass:"language-Shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$SHELL")]),s._v("\n")])])]),t("p",[s._v("一般情况下会返回 "),t("code",[s._v("bin/bash")])]),s._v(" "),t("h2",{attrs:{id:"安装-zsh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-zsh"}},[s._v("#")]),s._v(" 安装 zsh")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v("\n")])])]),t("h2",{attrs:{id:"切换默认-shell-为-zsh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换默认-shell-为-zsh"}},[s._v("#")]),s._v(" 切换默认 Shell 为 zsh")]),s._v(" "),t("p",[s._v("需要在 root 用户下运行此命令：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ $ chsh -s /bin/zsh\n")])])]),t("h2",{attrs:{id:"安装-git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-git"}},[s._v("#")]),s._v(" 安装 git")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n")])])]),t("h2",{attrs:{id:"安装-oh-my-zsh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-oh-my-zsh"}},[s._v("#")]),s._v(" 安装 Oh My Zsh")]),s._v(" "),t("h3",{attrs:{id:"自动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动"}},[s._v("#")]),s._v(" 自动")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n或\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n")])])]),t("h3",{attrs:{id:"手动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手动"}},[s._v("#")]),s._v(" 手动")]),s._v(" "),t("p",[s._v("如果无法通过上面的方式安装（可能因为墙），则可通过以下方式手动安装：")]),s._v(" "),t("p",[s._v("下载源码：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh\n")])])]),t("p",[s._v("复制配置：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc \n")])])]),t("h2",{attrs:{id:"修改-oh-my-zsh-主题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改-oh-my-zsh-主题"}},[s._v("#")]),s._v(" 修改 Oh My Zsh 主题")]),s._v(" "),t("p",[s._v("列出所有主题：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" ~/.oh-my-zsh/themes\n")])])]),t("p",[s._v("修改主题：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ~/.zshrc\n")])])]),t("p",[s._v("将默认主题是 "),t("code",[s._v('ZSH_THEME="robbyrussell"')]),s._v(" 修改为自己喜欢的即可。")]),s._v(" "),t("h2",{attrs:{id:"重启生效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重启生效"}},[s._v("#")]),s._v(" 重启生效")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reboot")]),s._v("\n")])])]),t("h2",{attrs:{id:"参考与致谢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[s._v("#")]),s._v(" 参考与致谢")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/4ce7d511bc13",target:"_blank",rel:"noopener noreferrer"}},[s._v("centos7 安装 zsh 配置 oh-my-zsh"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/556ff130fc65",target:"_blank",rel:"noopener noreferrer"}},[s._v("CentOs 安装 oh my zsh"),t("OutboundLink")],1)])]),s._v(" "),t("blockquote",[t("p",[s._v("文章作者："),t("strong",[s._v("Power Lin")]),t("br"),s._v("\n原文地址："),t("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://wiki-power.com"),t("OutboundLink")],1),t("br"),s._v("\n版权声明：文章采用 "),t("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[s._v("CC BY-NC-SA 4.0"),t("OutboundLink")],1),s._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);a.default=r.exports}}]);