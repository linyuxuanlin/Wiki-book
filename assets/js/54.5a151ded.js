(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{515:function(v,t,_){"use strict";_.r(t);var e=_(14),l=Object(e.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"ubuntu-配置笔记"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-配置笔记"}},[v._v("#")]),v._v(" Ubuntu 配置笔记")]),v._v(" "),_("h2",{attrs:{id:"安装系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装系统"}},[v._v("#")]),v._v(" 安装系统")]),v._v(" "),_("p",[v._v("参考 https://www.bilibili.com/read/cv2480151/")]),v._v(" "),_("ol",[_("li",[v._v("用 PE 盘清除原有 Windows 系统")]),v._v(" "),_("li",[v._v("下载 .iso 镜像文件")]),v._v(" "),_("li",[v._v("用 UltralISO 烧进新 U 盘")]),v._v(" "),_("li",[v._v("进 BIOS 并安装 Ubuntu")])]),v._v(" "),_("h2",{attrs:{id:"安装软件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装软件"}},[v._v("#")]),v._v(" 安装软件")]),v._v(" "),_("p",[v._v("第三方软件不能安装的问题：https://linux.cn/article-12183-1.html")]),v._v(" "),_("ol",[_("li",[v._v("Chrome")]),v._v(" "),_("li",[v._v("VS Code")]),v._v(" "),_("li",[v._v("Qv2ray（https://qv2ray.net/）")]),v._v(" "),_("li",[v._v("Git\n"),_("ul",[_("li",[_("code",[v._v('$ git config --global user.name "John Doe"')])]),v._v(" "),_("li",[_("code",[v._v("$ git config --global user.email johndoe@example.com")])])])])]),v._v(" "),_("h2",{attrs:{id:"技巧"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#技巧"}},[v._v("#")]),v._v(" 技巧")]),v._v(" "),_("h3",{attrs:{id:"命令"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[v._v("#")]),v._v(" 命令")]),v._v(" "),_("p",[v._v("注： "),_("code",[v._v("<xx>")]),v._v(" 表示必须， "),_("code",[v._v("(xx)")]),v._v(" 表示可选")]),v._v(" "),_("ul",[_("li",[v._v("cd\n"),_("ul",[_("li",[v._v("切换工作目录")]),v._v(" "),_("li",[_("code",[v._v("$ cd <目录路径>")])])])]),v._v(" "),_("li",[v._v("pwd\n"),_("ul",[_("li",[v._v("查看当前绝对路径")]),v._v(" "),_("li",[_("code",[v._v("$ pwd")])])])]),v._v(" "),_("li",[v._v("mkdir\n"),_("ul",[_("li",[v._v("创建目录")]),v._v(" "),_("li",[_("code",[v._v("$ mkdir （选项） <目录名称>")])])])]),v._v(" "),_("li",[v._v("ls\n"),_("ul",[_("li",[v._v("列出目录下的内容")]),v._v(" "),_("li",[_("code",[v._v("$ ls （选项） （目录名称）")])])])]),v._v(" "),_("li",[v._v("touch\n"),_("ul",[_("li",[v._v("改变文件 / 目录时间")]),v._v(" "),_("li",[_("code",[v._v("$ touch （选项） <文件名称>")])])])]),v._v(" "),_("li",[v._v("mv\n"),_("ul",[_("li",[v._v("剪切")]),v._v(" "),_("li",[_("code",[v._v("$ mv （选项） （源文件/目录） <目的地文件/目录>")])])])]),v._v(" "),_("li",[v._v("cp\n"),_("ul",[_("li",[v._v("复制")]),v._v(" "),_("li",[_("code",[v._v("$ cp （选项） （源文件名/目录名） <目的地文件名/目录名>")])])])]),v._v(" "),_("li",[v._v("rm\n"),_("ul",[_("li",[v._v("删除")]),v._v(" "),_("li",[_("code",[v._v("$ rm （选项） <文件名/目录名>")])])])])]),v._v(" "),_("h3",{attrs:{id:"快捷键"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#快捷键"}},[v._v("#")]),v._v(" 快捷键")]),v._v(" "),_("ul",[_("li",[v._v("终端："),_("code",[v._v("Ctrl")]),v._v(" "),_("code",[v._v("Alt")]),v._v(" "),_("code",[v._v("T")])]),v._v(" "),_("li",[v._v("显示隐藏文件："),_("code",[v._v("Ctrl")]),v._v(" "),_("code",[v._v("H")])])]),v._v(" "),_("h2",{attrs:{id:"ros"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ros"}},[v._v("#")]),v._v(" ROS")]),v._v(" "),_("h3",{attrs:{id:"安装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[v._v("#")]),v._v(" 安装")]),v._v(" "),_("p",[v._v("编译器：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("$ sudo apt-get install g++")])]),v._v(" "),_("li",[_("code",[v._v("$ sudo apt-get install python")])])]),v._v(" "),_("ol",[_("li",[v._v("添加软件源：\n"),_("ul",[_("li",[v._v("$ sudo sh -c 'echo \"deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main\" > /etc/apt/sources.list.d/ros-latest.list'")])])]),v._v(" "),_("li",[v._v("添加密钥：\n"),_("ul",[_("li",[_("code",[v._v("$ sudo apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654")])])])]),v._v(" "),_("li",[v._v("安装 ROS：\n"),_("ul",[_("li",[_("code",[v._v("$ sudo apt update")])]),v._v(" "),_("li",[_("code",[v._v("$ sudo apt install ros-noetic-desktop-full")]),v._v(" 或者 "),_("code",[v._v("$ sudo apt install ros-desktop-full")])])])]),v._v(" "),_("li",[v._v("初始化 rosdep\n"),_("ul",[_("li",[_("code",[v._v("$ rosdep update")])]),v._v(" "),_("li",[_("code",[v._v("$ sudo rosdep init")])]),v._v(" "),_("li",[_("code",[v._v("$ rosdep update")])])])]),v._v(" "),_("li",[v._v("设置环境变量\n"),_("ul",[_("li",[_("code",[v._v('$ echo "source /opt/ros/melodic/setup.bash" >> ~/.bashrc')])]),v._v(" "),_("li",[_("code",[v._v("$ source ~/.bashrc")])])])]),v._v(" "),_("li",[v._v("安装 rosinstall\n"),_("ul",[_("li",[_("code",[v._v("$ sudo apt install python-rosinstall python-rosinstall-generator python-wstool build-essential")])])])])]),v._v(" "),_("h2",{attrs:{id:"卸载"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[v._v("#")]),v._v(" 卸载")]),v._v(" "),_("p",[v._v("步骤：")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("sudo apt-get autoremove --purge ros-*")])]),v._v(" "),_("li",[_("code",[v._v("sudo apt-get autoremove")])]),v._v(" "),_("li",[v._v("检查～/.bashrc　以及／opt / 目录是否有 ros 文件夹存在")])]),v._v(" "),_("h2",{attrs:{id:"参考与致谢"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[v._v("#")]),v._v(" 参考与致谢")]),v._v(" "),_("ul",[_("li",[_("a",{attrs:{href:""}})])]),v._v(" "),_("blockquote",[_("p",[v._v("文章作者："),_("strong",[v._v("Power Lin")]),_("br"),v._v("\n原文地址："),_("a",{attrs:{href:"https://wiki-power.com",target:"_blank",rel:"noopener noreferrer"}},[v._v("https://wiki-power.com"),_("OutboundLink")],1),_("br"),v._v("\n版权声明：文章采用 "),_("a",{attrs:{href:"https://creativecommons.org/licenses/by/4.0/deed.zh",target:"_blank",rel:"noopener noreferrer"}},[v._v("CC BY-NC-SA 4.0"),_("OutboundLink")],1),v._v(" 协议，转载请注明出处。")])])])}),[],!1,null,null,null);t.default=l.exports}}]);