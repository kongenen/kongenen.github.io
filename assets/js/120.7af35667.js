(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{438:function(t,s,v){"use strict";v.r(s);var _=v(11),a=Object(_.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第六章-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第六章-函数"}},[t._v("#")]),t._v(" 第六章 函数")]),t._v(" "),s("h2",{attrs:{id:"函数基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数基础"}},[t._v("#")]),t._v(" 函数基础")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("函数定义")]),t._v("：包括返回类型、函数名字和0个或者多个"),s("strong",[t._v("形参")]),t._v("（parameter）组成的列表和函数体。")]),t._v(" "),s("li",[s("strong",[t._v("调用运算符")]),t._v("：调用运算符的形式是一对圆括号 "),s("code",[t._v("()")]),t._v("，作用于一个表达式，该表达式是函数或者指向函数的指针。")]),t._v(" "),s("li",[t._v("圆括号内是用逗号隔开的"),s("strong",[t._v("实参")]),t._v("（argument）列表。")]),t._v(" "),s("li",[t._v("函数调用过程：\n"),s("ul",[s("li",[t._v("1.主调函数（calling function）的执行被中断。")]),t._v(" "),s("li",[t._v("2.被调函数（called function）开始执行。")])])]),t._v(" "),s("li",[s("strong",[t._v("形参和实参")]),t._v("：形参和实参的"),s("strong",[t._v("个数")]),t._v("和"),s("strong",[t._v("类型")]),t._v("必须匹配上。")]),t._v(" "),s("li",[s("strong",[t._v("返回类型")]),t._v("： "),s("code",[t._v("void")]),t._v("表示函数不返回任何值。函数的返回类型不能是数组类型或者函数类型，但可以是指向数组或者函数的指针。")]),t._v(" "),s("li",[s("strong",[t._v("名字")]),t._v("：名字的作用于是程序文本的一部分，名字在其中可见。")])]),t._v(" "),s("h3",{attrs:{id:"局部对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#局部对象"}},[t._v("#")]),t._v(" 局部对象")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("生命周期")]),t._v("：对象的生命周期是程序执行过程中该对象存在的一段时间。")]),t._v(" "),s("li",[s("strong",[t._v("局部变量")]),t._v("（local variable）：形参和函数体内部定义的变量统称为局部变量。它对函数而言是局部的，对函数外部而言是"),s("strong",[t._v("隐藏")]),t._v("的。")]),t._v(" "),s("li",[s("strong",[t._v("自动对象")]),t._v("：只存在于块执行期间的对象。当块的执行结束后，它的值就变成"),s("strong",[t._v("未定义")]),t._v("的了。")]),t._v(" "),s("li",[s("strong",[t._v("局部静态对象")]),t._v("： "),s("code",[t._v("static")]),t._v("类型的局部变量，生命周期贯穿函数调用前后。")])]),t._v(" "),s("h3",{attrs:{id:"函数声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数声明"}},[t._v("#")]),t._v(" 函数声明")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("函数声明")]),t._v("：函数的声明和定义唯一的区别是声明无需函数体，用一个分号替代。函数声明主要用于描述函数的接口，也称"),s("strong",[t._v("函数原型")]),t._v("。")]),t._v(" "),s("li",[s("strong",[t._v("在头文件中进行函数声明")]),t._v("：建议变量在头文件中声明；在源文件中定义。")]),t._v(" "),s("li",[s("strong",[t._v("分离编译")]),t._v("： "),s("code",[t._v("CC a.cc b.cc")]),t._v("直接编译生成可执行文件；"),s("code",[t._v("CC -c a.cc b.cc")]),t._v("编译生成对象代码"),s("code",[t._v("a.o b.o")]),t._v("； "),s("code",[t._v("CC a.o b.o")]),t._v("编译生成可执行文件。")])]),t._v(" "),s("h2",{attrs:{id:"参数传递"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数传递"}},[t._v("#")]),t._v(" 参数传递")]),t._v(" "),s("ul",[s("li",[t._v("形参初始化的机理和变量初始化一样。")]),t._v(" "),s("li",[s("strong",[t._v("引用传递")]),t._v("（passed by reference）：又称传引用调用（called by reference），指"),s("strong",[t._v("形参是引用类型")]),t._v("，引用形参是它对应的实参的别名。")]),t._v(" "),s("li",[s("strong",[t._v("值传递")]),t._v("（passed by value）：又称传值调用（called by value），指实参的值是通过"),s("strong",[t._v("拷贝")]),t._v("传递给形参。")])]),t._v(" "),s("h3",{attrs:{id:"传值参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传值参数"}},[t._v("#")]),t._v(" 传值参数")]),t._v(" "),s("ul",[s("li",[t._v("当初始化一个非引用类型的变量时，初始值被拷贝给变量。")]),t._v(" "),s("li",[t._v("函数对形参做的所有操作都不会影响实参。")]),t._v(" "),s("li",[s("strong",[t._v("指针形参")]),t._v("：常用在C中，"),s("code",[t._v("C++")]),t._v("建议使用引用类型的形参代替指针。")])]),t._v(" "),s("h3",{attrs:{id:"传引用参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#传引用参数"}},[t._v("#")]),t._v(" 传引用参数")]),t._v(" "),s("ul",[s("li",[t._v("通过使用引用形参，允许函数改变一个或多个实参的值。")]),t._v(" "),s("li",[t._v("引用形参直接关联到绑定的对象，而非对象的副本。")]),t._v(" "),s("li",[t._v("使用引用形参可以用于"),s("strong",[t._v("返回额外的信息")]),t._v("。")]),t._v(" "),s("li",[t._v("经常用引用形参来避免不必要的复制。")]),t._v(" "),s("li",[s("code",[t._v("void swap(int &v1, int &v2)")])]),t._v(" "),s("li",[t._v("如果无需改变引用形参的值，最好将其声明为常量引用。")])]),t._v(" "),s("h3",{attrs:{id:"const形参和实参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#const形参和实参"}},[t._v("#")]),t._v(" const形参和实参")]),t._v(" "),s("ul",[s("li",[t._v("形参的顶层"),s("code",[t._v("const")]),t._v("被忽略。"),s("code",[t._v("void func(const int i);")]),t._v("调用时既可以传入"),s("code",[t._v("const int")]),t._v("也可以传入"),s("code",[t._v("int")]),t._v("。")]),t._v(" "),s("li",[t._v("我们可以使用非常量初始化一个底层"),s("code",[t._v("const")]),t._v("对象，但是反过来不行。")]),t._v(" "),s("li",[t._v("在函数中，不能改变实参的"),s("strong",[t._v("局部副本")]),t._v("。")]),t._v(" "),s("li",[t._v("尽量使用常量引用。")])]),t._v(" "),s("h3",{attrs:{id:"数组形参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组形参"}},[t._v("#")]),t._v(" 数组形参")]),t._v(" "),s("ul",[s("li",[t._v("当我们为函数传递一个数组时，实际上传递的是指向数组首元素的指针。")]),t._v(" "),s("li",[t._v("要注意数组的实际长度，不能越界。")])]),t._v(" "),s("h3",{attrs:{id:"main处理命令行选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#main处理命令行选项"}},[t._v("#")]),t._v(" main处理命令行选项")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("int main(int argc, char *argv[]){...}")])]),t._v(" "),s("li",[t._v("第一个形参代表参数的个数；第二个形参是参数C风格字符串数组。")])]),t._v(" "),s("h3",{attrs:{id:"可变形参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可变形参"}},[t._v("#")]),t._v(" 可变形参")]),t._v(" "),s("p",[s("code",[t._v("initializer_list")]),t._v("提供的操作（"),s("code",[t._v("C++11")]),t._v("）：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("操作")]),t._v(" "),s("th",[t._v("解释")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("initializer_list<T> lst;")])]),t._v(" "),s("td",[t._v("默认初始化；"),s("code",[t._v("T")]),t._v("类型元素的空列表")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("initializer_list<T> lst{a,b,c...};")])]),t._v(" "),s("td",[s("code",[t._v("lst")]),t._v("的元素数量和初始值一样多；"),s("code",[t._v("lst")]),t._v("的元素是对应初始值的副本；列表中的元素是"),s("code",[t._v("const")]),t._v("。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("lst2(lst)")])]),t._v(" "),s("td",[t._v("拷贝或赋值一个"),s("code",[t._v("initializer_list")]),t._v("对象不会拷贝列表中的元素；拷贝后，原始列表和副本共享元素。")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("lst2 = lst")])]),t._v(" "),s("td",[t._v("同上")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("lst.size()")])]),t._v(" "),s("td",[t._v("列表中的元素数量")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("lst.begin()")])]),t._v(" "),s("td",[t._v("返回指向"),s("code",[t._v("lst")]),t._v("中首元素的指针")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("lst.end()")])]),t._v(" "),s("td",[t._v("返回指向"),s("code",[t._v("lst")]),t._v("中微元素下一位置的指针")])])])]),t._v(" "),s("p",[s("code",[t._v("initializer_list")]),t._v("使用demo：")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("err_msg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ErrCode e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" initializer_list"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" il"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" bed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" il"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" beg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" il"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" beg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("beg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("err_msg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ErrCode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"functionX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(' "okay'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("ul",[s("li",[t._v("所有实参类型相同，可以使用 "),s("code",[t._v("initializer_list")]),t._v("的标准库类型。")]),t._v(" "),s("li",[t._v("实参类型不同，可以使用"),s("code",[t._v("可变参数模板")]),t._v("。")]),t._v(" "),s("li",[t._v("省略形参符： "),s("code",[t._v("...")]),t._v("，便于"),s("code",[t._v("C++")]),t._v("访问某些C代码，这些C代码使用了 "),s("code",[t._v("varargs")]),t._v("的C标准功能。")])]),t._v(" "),s("h2",{attrs:{id:"返回类型和return语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回类型和return语句"}},[t._v("#")]),t._v(" 返回类型和return语句")]),t._v(" "),s("h3",{attrs:{id:"无返回值函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无返回值函数"}},[t._v("#")]),t._v(" 无返回值函数")]),t._v(" "),s("p",[t._v("没有返回值的 "),s("code",[t._v("return")]),t._v("语句只能用在返回类型是 "),s("code",[t._v("void")]),t._v("的函数中，返回 "),s("code",[t._v("void")]),t._v("的函数不要求非得有 "),s("code",[t._v("return")]),t._v("语句。")]),t._v(" "),s("h3",{attrs:{id:"有返回值函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#有返回值函数"}},[t._v("#")]),t._v(" 有返回值函数")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("return")]),t._v("语句的返回值的类型必须和函数的返回类型相同，或者能够"),s("strong",[t._v("隐式地")]),t._v("转换成函数的返回类型。")]),t._v(" "),s("li",[t._v("值的返回：返回的值用于初始化调用点的一个"),s("strong",[t._v("临时量")]),t._v("，该临时量就是函数调用的结果。")]),t._v(" "),s("li",[s("strong",[t._v("不要返回局部对象的引用或指针")]),t._v("。")]),t._v(" "),s("li",[s("strong",[t._v("引用返回左值")]),t._v("：函数的返回类型决定函数调用是否是左值。调用一个返回引用的函数得到左值；其他返回类型得到右值。")]),t._v(" "),s("li",[s("strong",[t._v("列表初始化返回值")]),t._v("：函数可以返回花括号包围的值的列表。（"),s("code",[t._v("C++11")]),t._v("）")]),t._v(" "),s("li",[s("strong",[t._v("主函数main的返回值")]),t._v("：如果结尾没有"),s("code",[t._v("return")]),t._v("，编译器将隐式地插入一条返回0的"),s("code",[t._v("return")]),t._v("语句。返回0代表执行成功。")])]),t._v(" "),s("h3",{attrs:{id:"返回数组指针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回数组指针"}},[t._v("#")]),t._v(" 返回数组指针")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Type (*function (parameter_list))[dimension]")])]),t._v(" "),s("li",[t._v("使用类型别名： "),s("code",[t._v("typedef int arrT[10];")]),t._v(" 或者 "),s("code",[t._v("using arrT = int[10;]")]),t._v("，然后 "),s("code",[t._v("arrT* func() {...}")])]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("decltype")]),t._v("： "),s("code",[t._v("decltype(odd) *arrPtr(int i) {...}")])]),t._v(" "),s("li",[s("strong",[t._v("尾置返回类型")]),t._v("： 在形参列表后面以一个"),s("code",[t._v("->")]),t._v("开始："),s("code",[t._v("auto func(int i) -> int(*)[10]")]),t._v("（"),s("code",[t._v("C++11")]),t._v("）")])]),t._v(" "),s("h2",{attrs:{id:"函数重载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数重载"}},[t._v("#")]),t._v(" 函数重载")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("重载")]),t._v("：如果同一作用域内几个函数名字相同但形参列表不同，我们称之为重载（overload）函数。")]),t._v(" "),s("li",[s("code",[t._v("main")]),t._v("函数不能重载。")]),t._v(" "),s("li",[s("strong",[t._v("重载和const形参")]),t._v("：\n"),s("ul",[s("li",[t._v("一个有顶层const的形参和没有它的函数无法区分。 "),s("code",[t._v("Record lookup(Phone* const)")]),t._v("和 "),s("code",[t._v("Record lookup(Phone*)")]),t._v("无法区分。")]),t._v(" "),s("li",[t._v("相反，是否有某个底层const形参可以区分。 "),s("code",[t._v("Record lookup(Account*)")]),t._v("和 "),s("code",[t._v("Record lookup(const Account*)")]),t._v("可以区分。")])])]),t._v(" "),s("li",[s("strong",[t._v("重载和作用域")]),t._v("：若在内层作用域中声明名字，它将隐藏外层作用域中声明的同名实体，在不同的作用域中无法重载函数名。")])]),t._v(" "),s("h2",{attrs:{id:"特殊用途语言特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特殊用途语言特性"}},[t._v("#")]),t._v(" 特殊用途语言特性")]),t._v(" "),s("h3",{attrs:{id:"默认实参"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认实参"}},[t._v("#")]),t._v(" 默认实参")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("string screen(sz ht = 24, sz wid = 80, char backgrnd = ' ');")])]),t._v(" "),s("li",[t._v("一旦某个形参被赋予了默认值，那么它之后的形参都必须要有默认值。")])]),t._v(" "),s("h3",{attrs:{id:"内联（inline）函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内联（inline）函数"}},[t._v("#")]),t._v(" 内联（inline）函数")]),t._v(" "),s("ul",[s("li",[t._v("普通函数的缺点：调用函数比求解等价表达式要慢得多。")]),t._v(" "),s("li",[s("code",[t._v("inline")]),t._v("函数可以避免函数调用的开销，可以让编译器在编译时"),s("strong",[t._v("内联地展开")]),t._v("该函数。")]),t._v(" "),s("li",[s("code",[t._v("inline")]),t._v("函数应该在头文件中定义。")])]),t._v(" "),s("h3",{attrs:{id:"constexpr函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constexpr函数"}},[t._v("#")]),t._v(" constexpr函数")]),t._v(" "),s("ul",[s("li",[t._v("指能用于常量表达式的函数。")]),t._v(" "),s("li",[s("code",[t._v("constexpr int new_sz() {return 42;}")])]),t._v(" "),s("li",[t._v("函数的返回类型及所有形参类型都要是字面值类型。")]),t._v(" "),s("li",[s("code",[t._v("constexpr")]),t._v("函数应该在头文件中定义。")])]),t._v(" "),s("h3",{attrs:{id:"调试帮助"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#调试帮助"}},[t._v("#")]),t._v(" 调试帮助")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("assert")]),t._v("预处理宏（preprocessor macro）："),s("code",[t._v("assert(expr);")])])]),t._v(" "),s("p",[t._v("开关调试状态：")]),t._v(" "),s("p",[s("code",[t._v("CC -D NDEBUG main.c")]),t._v("可以定义这个变量"),s("code",[t._v("NDEBUG")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-cpp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("ifndef")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[t._v("NDEBUG")])]),t._v("\n        cerr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__func__")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("endif")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"函数匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数匹配"}},[t._v("#")]),t._v(" 函数匹配")]),t._v(" "),s("ul",[s("li",[t._v("重载函数匹配的"),s("strong",[t._v("三个步骤")]),t._v("：1.候选函数；2.可行函数；3.寻找最佳匹配。")]),t._v(" "),s("li",[s("strong",[t._v("候选函数")]),t._v("：选定本次调用对应的重载函数集，集合中的函数称为候选函数（candidate function）。")]),t._v(" "),s("li",[s("strong",[t._v("可行函数")]),t._v("：考察本次调用提供的实参，选出可以被这组实参调用的函数，新选出的函数称为可行函数（viable function）。")]),t._v(" "),s("li",[s("strong",[t._v("寻找最佳匹配")]),t._v("：基本思想：实参类型和形参类型越接近，它们匹配地越好。")])]),t._v(" "),s("h2",{attrs:{id:"函数指针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数指针"}},[t._v("#")]),t._v(" 函数指针")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("函数指针")]),t._v("：是指向函数的指针。")]),t._v(" "),s("li",[s("code",[t._v("bool (*pf)(const string &, const string &);")]),t._v(" 注：两端的括号不可少。")]),t._v(" "),s("li",[s("strong",[t._v("函数指针形参")]),t._v("：\n"),s("ul",[s("li",[t._v("形参中使用函数定义或者函数指针定义效果一样。")]),t._v(" "),s("li",[t._v("使用类型别名或者"),s("code",[t._v("decltype")]),t._v("。")])])]),t._v(" "),s("li",[s("strong",[t._v("返回指向函数的指针")]),t._v("：1.类型别名；2.尾置返回类型。")])])])}),[],!1,null,null,null);s.default=a.exports}}]);