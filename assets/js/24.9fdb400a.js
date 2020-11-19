(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{478:function(e,t,a){"use strict";a.r(t);var s=a(14),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"docker-学习笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-学习笔记"}},[e._v("#")]),e._v(" Docker 学习笔记")]),e._v(" "),a("h2",{attrs:{id:"docker-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-是什么"}},[e._v("#")]),e._v(" Docker 是什么？")]),e._v(" "),a("p",[e._v("Docker 将软件与所需的环境捆绑在了一起，提供给用户使用。这样可以避免在不同的机器上出现不同的结果（或因环境不同而出现的错误）。")]),e._v(" "),a("p",[e._v("可以类比虚拟机，它也是带环境安装的一种解决方案。但虚拟机过于庞大、占用资源多，所以也产生了另一种虚拟化技术叫 Linux 容器（Linux Containers/LXC）。其原理并非模拟一个完整的操作系统，而是对进程进行隔离（在进程外套了一个保护层）。相比虚拟机，容器资源占用少、启动快、体积小。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://wiki-media-1253965369.cos.ap-guangzhou.myqcloud.com/img/20200416201438.png",alt:""}})]),e._v(" "),a("p",[e._v("Docker 属于 Linux 容器的一种封装。它将应用程序与该程序的依赖，打包在一个文件里面。行这个文件，就会生成一个虚拟容器。程序就运行在这个虚拟容器里面，不必担心环境问题。")]),e._v(" "),a("blockquote",[a("p",[e._v("Docker 的主要用途，目前有三大类：")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("提供一次性的环境")]),e._v("。比如，本地测试他人的软件、持续集成的时候提供单元测试和构建的环境")]),e._v(" "),a("li",[a("strong",[e._v("提供弹性的云服务")]),e._v("。因为 Docker 容器可以随开随关，很适合动态扩容和缩容")]),e._v(" "),a("li",[a("strong",[e._v("组建微服务架构")]),e._v("。通过多个容器，一台机器可以跑多个服务，因此在本机就可以模拟出微服务架构")])])]),e._v(" "),a("h2",{attrs:{id:"docker-基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-基本概念"}},[e._v("#")]),e._v(" Docker 基本概念")]),e._v(" "),a("p",[e._v("Docker 有三个基本概念：")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("镜像 / 文件（image）")]),e._v("：将软件与环境封装在一起，就成了一个镜像")]),e._v(" "),a("li",[a("strong",[e._v("容器（container）")]),e._v("：借用面向对象的思想，镜像是一个类，容器就是将类实例化，生成的一个对象。镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等")]),e._v(" "),a("li",[a("strong",[e._v("仓库（repository）")]),e._v("：类似一个代码控制中心，用来保存镜像。")])]),e._v(" "),a("h2",{attrs:{id:"docker-安装配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装配置"}},[e._v("#")]),e._v(" Docker 安装配置")]),e._v(" "),a("p",[e._v("各版本系统的下载安装详见 "),a("a",{attrs:{href:"https://docs.docker.com/engine/install/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[e._v("Install Docker Engine")]),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("安装完成后，运行下面的命令，验证是否安装成功：")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ docker version\n")])])]),a("h3",{attrs:{id:"配置权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置权限"}},[e._v("#")]),e._v(" 配置权限")]),e._v(" "),a("p",[e._v("Docker 需要 "),a("code",[e._v("sudo")]),e._v(" 权限。为了避免每次使用都要获取权限，可以把用户加入 Docker 用户组：")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("groupadd")]),e._v(" docker\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("usermod")]),e._v(" -aG docker "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$USER")]),e._v("\n")])])]),a("p",[e._v("重启 Docker 后测试：")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ docker run hello-world\n")])])]),a("p",[e._v("能看到 "),a("code",[e._v("hello-world")]),e._v(" 的提示信息则为成功。")]),e._v(" "),a("h3",{attrs:{id:"启动-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-docker"}},[e._v("#")]),e._v(" 启动 Docker")]),e._v(" "),a("p",[e._v("Docker 安装完成后，需要启动其进程：")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl start docker\n或\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("service")]),e._v(" docker start\n")])])]),a("p",[e._v("也可以配置开机自启动：")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("enable")]),e._v(" docker\n")])])]),a("h2",{attrs:{id:"基本操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[e._v("#")]),e._v(" 基本操作")]),e._v(" "),a("h3",{attrs:{id:"image-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image-文件"}},[e._v("#")]),e._v(" image 文件")]),e._v(" "),a("p",[e._v("Docker 把应用程序及其依赖，打包在 image 文件里面。image 文件可以看作是容器的模板，根据 image 文件生成容器的实例。同一个 image 文件，可以生成多个同时运行的容器实例。")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 列出本地所有 image 文件")]),e._v("\n$ docker image "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 删除 image 文件")]),e._v("\n$ docker image "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("imageName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("p",[e._v("为了节省时间与规范化，尽量用别人制作好的 image 文件（尽量不要自己制作，即使要定制，也应该基于别人的 image 文件进行加工）。"),a("br"),e._v("\n你可以在 "),a("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[e._v("Docker Hub")]),a("OutboundLink")],1),e._v(" 搜索和下载大家分享的 image 文件，尽量挑选最多人用的那一个。")]),e._v(" "),a("blockquote",[a("p",[e._v("文章作者："),a("strong",[e._v("Power Lin")]),a("br"),e._v("\n原文地址："),a("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wiki-power.com"),a("OutboundLink")],1),a("br"),e._v("\n版权声明：文章采用 "),a("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[e._v("CC BY-NC-SA 4.0"),a("OutboundLink")],1),e._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);