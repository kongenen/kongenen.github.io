(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{485:function(t,s,a){"use strict";a.r(s);var n=a(11),p=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"目标："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目标："}},[t._v("#")]),t._v(" 目标：")]),t._v(" "),s("ul",[s("li",[t._v("学习直方图的反向投影")])]),t._v(" "),s("h2",{attrs:{id:"理论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#理论"}},[t._v("#")]),t._v(" 理论")]),t._v(" "),s("p",[t._v("它由Michael J. Swain，Dana H. Ballard在他们的论文“Indexing via color histograms”中提出。")]),t._v(" "),s("p",[t._v("用简单的话来说，它到底是什么?它用于图像分割或查找图像中感兴趣的对象。简单地说，它创建了与输入图像大小相同(但是是单一通道)的图像，其中每个像素对应于该像素属于对象的概率。在更简单的世界中，输出的图像将使我们感兴趣的对象与其余部分相比有更多的白色。这是一个直观的解释。(我说得再简单不过了)。直方图反投影与camshift算法等相结合。我们怎么做呢?我们创建一个an的直方图")]),t._v(" "),s("p",[t._v("我们怎么做呢?我们创建一个图像的直方图，其中包含我们感兴趣的对象(在我们的例子中是地面、离开玩家和其他东西)。对象应该尽可能地填充图像，以获得更好的结果。与灰度直方图相比，颜色直方图更受欢迎，因为与灰度强度相比，对象的颜色是一种更好的定义对象的方法。然后我们将这个直方图“向后投射”到我们需要找到目标的测试图像上，换句话说，我们计算出属于地面的每个像素的概率并显示出来。在适当的阈值上得到的输出只给我们提供了基础")]),t._v(" "),s("h2",{attrs:{id:"numpy中的算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#numpy中的算法"}},[t._v("#")]),t._v(" Numpy中的算法")]),t._v(" "),s("ol",[s("li",[t._v("首先，我们需要计算需要找到的对象(设为“M”)和要搜索的图像(设为“I”)的颜色直方图。")])]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cv2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" cvfrom matplotlib "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pyplot "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" plt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#roi is the object or region of object we need to find")]),t._v("\nroi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rose_red.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhsv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cvtColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("roi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COLOR_BGR2HSV"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#target is the image we search in")]),t._v("\ntarget "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rose.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhsvt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cvtColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COLOR_BGR2HSV"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Find the histograms using calcHist. Can be done with np.histogram2d also")]),t._v("\nM "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("calcHist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hsv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nI "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("calcHist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hsvt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("求出比率 $$ R=\\frac{M}{I} $$ 。然后反投影R，使用R作为调色板并创建一个新图像，每个像素作为其对应的目标概率。 即B（x，y）= R[h（x，y），s（x，y）]其中h是色调，s是（x，y）处像素的饱和度。 之后应用条件B（x，y）= min [B（x，y），1]。")])]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("v "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hsvt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" R"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("minimum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reshape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hsvt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shape"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("现在对圆盘进行卷积，B = D * B，其中D是盘卷积核。")])]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("disc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getStructuringElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MORPH_ELLIPSE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter2D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("disc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uint8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("normalize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NORM_MINMAX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("现在最大强度的位置为我们提供了物体的位置。 如果我们期望图像中有一个区域，那么对适当值进行阈值处理会得到很好的结果。")])]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("ret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("thresh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("threshold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("B"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"opencv中的反投影"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#opencv中的反投影"}},[t._v("#")]),t._v(" OpenCV中的反投影")]),t._v(" "),s("p",[t._v("OpenCV提供了一个内置函数"),s("code",[t._v("cv.calcBackProject()")]),t._v("。 它的参数与"),s("code",[t._v("cv.calcHist()")]),t._v("函数几乎相同。 它的一个参数是直方图，它是对象的直方图，我们必须找到它。 此外，在传递给backproject函数之前，应该对象直方图进行规范化。 它返回概率图像。 然后我们将图像与光盘卷积核卷积并应用阈值。 以下是我的代码和输出：")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" numpy "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" np\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cv2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" cv\nroi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rose_red.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhsv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cvtColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("roi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COLOR_BGR2HSV"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntarget "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imread"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rose.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhsvt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cvtColor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COLOR_BGR2HSV"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# calculating object histogram")]),t._v("\nroihist "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("calcHist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hsv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# normalize histogram and apply backprojection")]),t._v("\ncv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("normalize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("roihist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("roihist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NORM_MINMAX"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndst "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("calcBackProject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hsvt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("roihist"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Now convolute with circular disc")]),t._v("\ndisc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getStructuringElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MORPH_ELLIPSE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter2D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dst"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("disc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("dst"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# threshold and binary AND")]),t._v("\nret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("thresh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("threshold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dst"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nthresh "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("merge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("thresh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("thresh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("thresh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nres "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bitwise_and"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("thresh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nres "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" np"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vstack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("thresh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imwrite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'res.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("p",[t._v("下面是我使用的一个例子。我使用蓝色矩形内的区域作为样本对象，我想提取整个地面。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://docs.opencv.org/4.0.0/backproject_opencv.jpg",alt:"image56"}})])])}),[],!1,null,null,null);s.default=p.exports}}]);