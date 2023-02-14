---
layout: default
title: async vs defer
description: script标签上的async、defer属性的详解及验证demo
---

## 一、概览

![](async-defer.png)

## 二、下载和执行

- 普通
  - 下载：阻断 html 解析
  - 执行：阻断 html 解析，下载完就执行
- async
  - 下载：和 html 解析并行进行
  - 执行：阻断 html 解析，下载完就执行，执行顺序不定
- defer
  - 下载：和 html 解析并行进行
  - 执行：在 html 解析完成后才执行，执行顺序和下载顺序一致

## 三、与 DOMContentLoaded、onload 的关系

- async：可以理解成独立脚本
  - DOMContentLoaded 触发：发生在async脚本执行前后都有可能
  - onload触发：一定发生在async脚本执行之后
- defer：defer 脚本执行完成 => DOMContentLoaded 触发 => onload 触发

## 四、DEMO
- [normal](/html/normal.html)
- [async](/html/async.html)
- [defer](/html/async.html)
- [async + defer](/html/async-and-defer.html)
