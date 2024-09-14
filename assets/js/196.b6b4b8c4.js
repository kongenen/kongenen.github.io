(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{516:function(t,s,a){"use strict";a.r(s);var n=a(11),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"目标："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目标："}},[t._v("#")]),t._v(" 目标：")]),t._v(" "),s("p",[t._v("本章节你需要学习以下内容:")]),t._v(" "),s("ul",[s("li",[t._v("我们将学习如何从立体图像创建深度图。")])]),t._v(" "),s("h2",{attrs:{id:"基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),s("p",[t._v("在上一节中我们学习了对极约束的基本概念和相关术语。如果同一场景有两幅图像的话我们在直觉上就可以获得图像的深度信息。下面是的这幅图和其中的数学公式证明我们的直觉是对的。（图像来源 image courtesy）\n"),s("img",{attrs:{src:"https://docs.opencv.org/4.0.0/stereo_depth.jpg",alt:"image9"}})]),t._v(" "),s("p",[t._v("上图包含等效三角形。编写等效方程将产生以下结果：")]),t._v(" "),s("p",[t._v("$$disparity = x - x' = \\frac{Bf}{Z}$$")]),t._v(" "),s("p",[t._v("x 和 x' 分别是图像中的点到 3D 空间中的点和到摄像机中心的距离。B 是这两个摄像机之间的距离，f 是摄像机的焦距。上边的等式告诉我们点的深度与x 和 x' 的差成反比。所以根据这个等式我们就可以得到图像中所有点的深度图。")]),t._v(" "),s("p",[t._v("这样就可以找到两幅图像中的匹配点了。前面我们已经知道了对极约束可以使这个操作更快更准。一旦找到了匹配，就可以计算出 disparity 了。让我们看看在 OpenCV 中怎样做吧。")]),t._v(" "),s("h2",{attrs:{id:"代码实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),s("p",[t._v("下面的代码片段显示了创建视差图的简单过程。")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cv2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" cv\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" matplotlib "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pyplot "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" plt\n\nimgL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tsukuba_l.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nimgR "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tsukuba_r.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nstereo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StereoBM_create"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("numDisparities"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" blockSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndisparity "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stereo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("compute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("imgL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("imgR"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imshow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("disparity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gray'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nplt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("下图包含原始图像（左）及其视差图（右）。如图所见，结果受到高度噪音的污染。通过调整numDisparities和blockSize的值，你可以获得更好的结果。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://docs.opencv.org/4.0.0/disparity_map.jpg",alt:"image10"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);