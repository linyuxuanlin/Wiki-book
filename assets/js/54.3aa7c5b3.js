(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{515:function(t,v,_){"use strict";_.r(v);var e=_(14),l=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"ubuntu-配置笔记"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-配置笔记"}},[t._v("#")]),t._v(" Ubuntu 配置笔记")]),t._v(" "),_("h2",{attrs:{id:"安装系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装系统"}},[t._v("#")]),t._v(" 安装系统")]),t._v(" "),_("p",[t._v("参考 https://www.bilibili.com/read/cv2480151/")]),t._v(" "),_("ol",[_("li",[t._v("用 PE 盘清除原有 Windows 系统")]),t._v(" "),_("li",[t._v("下载 .iso 镜像文件")]),t._v(" "),_("li",[t._v("用 UltralISO 烧进新 U 盘")]),t._v(" "),_("li",[t._v("进 BIOS 并安装 Ubuntu")])]),t._v(" "),_("h2",{attrs:{id:"安装软件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装软件"}},[t._v("#")]),t._v(" 安装软件")]),t._v(" "),_("p",[t._v("第三方软件不能安装的问题：https://linux.cn/article-12183-1.html")]),t._v(" "),_("ol",[_("li",[t._v("Chrome")]),t._v(" "),_("li",[t._v("VS Code")]),t._v(" "),_("li",[t._v("Qv2ray（https://qv2ray.net/）")]),t._v(" "),_("li",[t._v("Git\n"),_("ul",[_("li",[_("code",[t._v("$ sudo apt install git")])]),t._v(" "),_("li",[_("code",[t._v('$ git config --global user.name "John Doe"')])]),t._v(" "),_("li",[_("code",[t._v("$ git config --global user.email johndoe@example.com")])])])])]),t._v(" "),_("h2",{attrs:{id:"技巧"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#技巧"}},[t._v("#")]),t._v(" 技巧")]),t._v(" "),_("h3",{attrs:{id:"命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[t._v("#")]),t._v(" 命令")]),t._v(" "),_("p",[t._v("注： "),_("code",[t._v("<xx>")]),t._v(" 表示必须， "),_("code",[t._v("(xx)")]),t._v(" 表示可选")]),t._v(" "),_("ul",[_("li",[t._v("cd\n"),_("ul",[_("li",[t._v("切换工作目录")]),t._v(" "),_("li",[_("code",[t._v("$ cd <目录路径>")])])])]),t._v(" "),_("li",[t._v("pwd\n"),_("ul",[_("li",[t._v("查看当前绝对路径")]),t._v(" "),_("li",[_("code",[t._v("$ pwd")])])])]),t._v(" "),_("li",[t._v("mkdir\n"),_("ul",[_("li",[t._v("创建目录")]),t._v(" "),_("li",[_("code",[t._v("$ mkdir （选项） <目录名称>")])])])]),t._v(" "),_("li",[t._v("ls\n"),_("ul",[_("li",[t._v("列出目录下的内容")]),t._v(" "),_("li",[_("code",[t._v("$ ls （选项） （目录名称）")])])])]),t._v(" "),_("li",[t._v("touch\n"),_("ul",[_("li",[t._v("改变文件 / 目录时间")]),t._v(" "),_("li",[_("code",[t._v("$ touch （选项） <文件名称>")])])])]),t._v(" "),_("li",[t._v("mv\n"),_("ul",[_("li",[t._v("剪切")]),t._v(" "),_("li",[_("code",[t._v("$ mv （选项） （源文件/目录） <目的地文件/目录>")])])])]),t._v(" "),_("li",[t._v("cp\n"),_("ul",[_("li",[t._v("复制")]),t._v(" "),_("li",[_("code",[t._v("$ cp （选项） （源文件名/目录名） <目的地文件名/目录名>")])])])]),t._v(" "),_("li",[t._v("rm\n"),_("ul",[_("li",[t._v("删除")]),t._v(" "),_("li",[_("code",[t._v("$ rm （选项） <文件名/目录名>")])])])])]),t._v(" "),_("h3",{attrs:{id:"快捷键"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#快捷键"}},[t._v("#")]),t._v(" 快捷键")]),t._v(" "),_("ul",[_("li",[t._v("终端："),_("code",[t._v("Ctrl")]),t._v(" "),_("code",[t._v("Alt")]),t._v(" "),_("code",[t._v("T")])]),t._v(" "),_("li",[t._v("显示隐藏文件："),_("code",[t._v("Ctrl")]),t._v(" "),_("code",[t._v("H")])])]),t._v(" "),_("h2",{attrs:{id:"ros"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ros"}},[t._v("#")]),t._v(" ROS")]),t._v(" "),_("h3",{attrs:{id:"安装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),_("p",[t._v("编译器：")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("$ sudo apt-get install g++")])]),t._v(" "),_("li",[_("code",[t._v("$ sudo apt-get install python")])])]),t._v(" "),_("ol",[_("li",[t._v("添加软件源：\n"),_("ul",[_("li",[t._v("$ sudo sh -c 'echo \"deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main\" > /etc/apt/sources.list.d/ros-latest.list'")])])]),t._v(" "),_("li",[t._v("添加密钥：\n"),_("ul",[_("li",[_("code",[t._v("$ sudo apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654")])])])]),t._v(" "),_("li",[t._v("安装 ROS：\n"),_("ul",[_("li",[_("code",[t._v("$ sudo apt update")])]),t._v(" "),_("li",[_("code",[t._v("$ sudo apt install ros-noetic-desktop-full")]),t._v(" 或者 "),_("code",[t._v("$ sudo apt install ros-desktop-full")])])])]),t._v(" "),_("li",[t._v("初始化 rosdep\n"),_("ul",[_("li",[_("code",[t._v("$ rosdep update")])]),t._v(" "),_("li",[_("code",[t._v("$ sudo rosdep init")])]),t._v(" "),_("li",[_("code",[t._v("$ rosdep update")])])])]),t._v(" "),_("li",[t._v("设置环境变量\n"),_("ul",[_("li",[_("code",[t._v('$ echo "source /opt/ros/melodic/setup.bash" >> ~/.bashrc')])]),t._v(" "),_("li",[_("code",[t._v("$ source ~/.bashrc")])])])]),t._v(" "),_("li",[t._v("安装 rosinstall\n"),_("ul",[_("li",[_("code",[t._v("$ sudo apt install python-rosinstall python-rosinstall-generator python-wstool build-essential")])])])])]),t._v(" "),_("h2",{attrs:{id:"卸载"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[t._v("#")]),t._v(" 卸载")]),t._v(" "),_("p",[t._v("步骤：")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("sudo apt-get autoremove --purge ros-*")])]),t._v(" "),_("li",[_("code",[t._v("sudo apt-get autoremove")])]),t._v(" "),_("li",[t._v("检查～/.bashrc 　以及／opt / 目录是否有 ros 文件夹存在")])]),t._v(" "),_("h2",{attrs:{id:"参考与致谢"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[t._v("#")]),t._v(" 参考与致谢")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:""}})])]),t._v(" "),_("blockquote",[_("p",[t._v("文章作者："),_("strong",[t._v("Power Lin")]),_("br"),t._v("\n原文地址："),_("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki-power.com"),_("OutboundLink")],1),_("br"),t._v("\n版权声明：文章采用 "),_("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC BY-NC-SA 4.0"),_("OutboundLink")],1),t._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);v.default=l.exports}}]);