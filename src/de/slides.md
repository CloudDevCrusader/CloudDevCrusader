---
title: Präsentations-Seite
icon: slides
layout: Layout
---

<!-- markdownlint-disable MD024 MD033 MD051 -->

@slidestart

<!-- .slide: data-transition="slide" -->

## Präsentations-Demo

<!-- .element: class="r-fit-text" -->

Eine einfache Präsentations-Demo mit verschiedenen Tipps.

<!-- .element: class="r-fit-text" -->

> Von CloudDevCrusader. Bitte scrollen Sie mit der Maus zur nächsten Seite

---

## 标注幻灯片

<!-- .element: class="r-fit-text" -->

[👇](#/1/1)

--

## 标注幻灯片

<!-- .element: class="r-fit-text" -->

使用 `---` 标注水平幻灯片

<!-- .element: class="fragment fade-in" -->

在水平幻灯片中使用 `--` 分割垂直幻灯片

<!-- .element: class="fragment fade-in" -->

使用 `<!-- .slide: ... -->` 在幻灯片上添加属性

<!-- .element: class="fragment fade-in" -->

使用 `<!-- .element: ... -->` 在前一个 HTML 元素上添加属性

<!-- .element: class="fragment fade-in" -->

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## Markdown

<!-- .element: class="r-fit-text" -->

你可以在幻灯片中使用 Markdown 语法的各种标记.

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-auto-animate -->

## Markdown

你可以在幻灯片中使用 Markdown 语法的各种标记.

### 这是一个 H3

标题默认会自动转换为大写。

这是一个有着 **粗体**, _斜体_, ~~删除线~~ 文字并包含 [一个链接](https://mrhope.site) 的段落，并且它会自动换行。所以你无需担心它的长度。

--

<!-- .slide: data-auto-animate -->

## Markdown

你可以在幻灯片中使用 Markdown 语法的各种标记.

列表默认为 `inline-block`

- 项目
- 项目
- 项目

1. 项目 1
1. 项目 2
1. 项目 3

--

<!-- .slide: data-auto-animate -->

## Markdown

你可以在幻灯片中使用 Markdown 语法的各种标记.

在你启用 `highlight` 插件后，代码块会自动高亮。

```js
const a = 1;
```

--

<!-- .slide: data-auto-animate -->

## Markdown

你可以在幻灯片中使用 Markdown 语法的各种标记.

在你启用 `math` 插件后，你也可以使用 TEX 格式使用数学公式。

$$
J(\theta_0,\theta_1) = \sum_{i=0}
$$

--

<!-- .slide: data-auto-animate -->

## Markdown

你可以在幻灯片中使用 Markdown 语法的各种标记.

⚠**请注意**: 表格和分割线，以及所有不在 Markdown 标准语法中的内容均不受支持。

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## 布局

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-auto-animate  -->

## 布局

<!-- .element: class="r-fit-text" -->

👆 `r-fit-text` class 会让文字在不超出幻灯片范围的情况下尽可能大。

--

<!-- .slide: data-auto-animate  -->

## 布局

![Logo](/logo.svg)

<!-- .element: class="r-stretch" -->

👆 `r-stretch` class 帮助你控制注入图片或视频的大小，使它们填充满幻灯片垂直方向上的剩余空间。

--

<!-- .slide: data-auto-animate data-background-color="rgb(70, 70, 255)" -->

## 布局

### 背景

你可以通过向特定幻灯片添加 `data-background` 属性自定义幻灯片背景.

---

<!-- .slide: data-auto-animate -->

## 动画片段

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-auto-animate -->

## 动画片段

<!-- .element: class="r-fit-text" -->

动画片段用于高亮或显隐幻灯片中的元素。

你需要在元素上添加 `fragment` 和动画 class。

--

<!-- .slide: data-auto-animate -->

## 动画片段

### 动画 class

- `fade-in`
<!-- .element: class="fragment fade-in" -->

- `fade-out`
<!-- .element: class="fragment fade-out" -->

- `fade-up`
<!-- .element: class="fragment fade-up" -->

<!-- list break -->

- `fade-down`
<!-- .element: class="fragment fade-down" -->

- `fade-left`
<!-- .element: class="fragment fade-left" -->

- `fade-right`
<!-- .element: class="fragment fade-right" -->

<!-- list break -->

- `fade-in-then-out`
<!-- .element: class="fragment fade-in-then-out" -->

- `fade-in-then-semi-out`
<!-- .element: class="fragment fade-in-then-semi-out" -->

--

<!-- .slide: data-auto-animate -->

## 动画片段

### 动画 class

- `grow`
<!-- .element: class="fragment grow" -->

- `shrink`
<!-- .element: class="fragment shrink" -->

- `strike`
<!-- .element: class="fragment strike" -->

<!-- list break -->

- `highlight-red`
<!-- .element: class="fragment highlight-red" -->

- `highlight-green`
<!-- .element: class="fragment highlight-green" -->

- `highlight-blue`
<!-- .element: class="fragment highlight-blue" -->

<!-- list break -->

- `highlight-current-red`
<!-- .element: class="fragment highlight-current-red" -->

- `highlight-current-green`
<!-- .element: class="fragment highlight-current-green" -->

- `highlight-current-blue`
<!-- .element: class="fragment highlight-current-blue" -->

--

<!-- .slide: data-auto-animate -->

## 动画片段

### 多个动画片段

你可以按照顺序包裹一个 HTML 元素使其拥有多个动画片段

<span class="fragment fade-in">
  <span class="fragment highlight-red">
    <span class="fragment fade-out">
      渐入 > 变红 > 渐出
    </span>
  </span>
</span>

--

<!-- .slide: data-auto-animate -->

## 动画片段

### 顺序

你可以使用 `data-fragment-index` 属性改变元素的动画顺序。

不同元素可以有相同的动画顺序。

- 最后显示
<!-- .element: class="fragment" data-fragment-index="3"-->

- 第二个显示
<!-- .element: class="fragment" data-fragment-index="2"-->

<!-- list break -->

- 第一个显示
<!-- .element: class="fragment" data-fragment-index="1"-->

- 第二个显示
<!-- .element: class="fragment" data-fragment-index="2"-->

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## 渐变

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## 渐变

<!-- .element: class="r-fit-text" -->

Transition 可以通过配置中的 `transition` 选项全局设置，也可以通过在特定幻灯片添加 `data-transition` 属性局部设置.

可能的值:

- none
- fade
- slide

<!-- list break -->

- convex
- concave
- zoom

--

<!-- .slide: data-auto-animate -->

## 渐变

<!-- .element: class="r-fit-text" -->

### 过渡动画

你可以在相邻的幻灯片上添加 `data-auto-animate` 使相同的 HTML 元素产生过渡动画效果。

---

<!-- .slide: data-transition="slide" data-auto-animate -->

## 功能

<!-- .element: class="r-fit-text" -->

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## 功能

<!-- .element: class="r-fit-text" -->

### 代码

通过启用 `highlight` 插件，你可以对代码块进行高亮。

你可以使用 `[a-b|c-d]` 语法来分布高亮特定行。

```js [1-2|3|4]
let a = 1;
let b = 2;
let c = (x) => 1 + 2 + x;
c(3);
```

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## 功能

<!-- .element: class="r-fit-text" -->

### 预览模式

按下 `Esc` 或 `O` 即可在幻灯片获得焦点时进入预览模式。

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## 功能

<!-- .element: class="r-fit-text" -->

### 全屏模式

按下 `F` 或 `F11` 即可在幻灯片获得焦点时进入全屏模式。

--

<!-- .slide: data-transition="slide" data-auto-animate -->

## 功能

<!-- .element: class="r-fit-text" -->

### 缩放

按下 `alt` (Linux 上使用 `ctrl`) 的同时点击幻灯片的任何元素，即可以向此元素进行放大。

再次点击即可缩小。

---

<!-- .element: class="r-fit-text" -->

## 结束

@slideend
