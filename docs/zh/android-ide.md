---
title: "Android IDE：SSH、Git 与 AI 编程 | NimoteCode"
description: NimoteCode 是一款用于真实开发工作的 Android IDE：通过 SSH 连接你自己的开发机，浏览项目、编辑代码、运行终端命令、审查 Git 改动，并在手机或平板上使用 AI 辅助。
---

# Android IDE：SSH、Git 与 AI 编程

Android 不只是用来查看服务器的工具。有了合适的工具链，它也能成为实际的开发环境：通过 SSH 连接你自己的开发机、打开仓库、做出聚焦的修改并验证——全部在手机或平板上完成。

NimoteCode 就是围绕这一工作流打造的 **Android IDE**。它在同一个移动工作区里集成了 Explorer、代码编辑器、SSH 终端、Git 审查、LSP、调试器与 AI Chat 和 Agent，让 Android 成为继续处理桌面、笔记本或服务器上项目的实用方式。

<ImagePlaceholder image-key="sshIde" alt="Android IDE 上的 SSH 远程项目">
  <strong>图片占位 —— Android IDE 工作区</strong>
  <span>请替换为 Android 手机展示远程项目 Explorer、打开的源文件与一条终端验证命令的截图。</span>
</ImagePlaceholder>

## Android IDE 应该做什么

一款 Android IDE 应该把整个开发闭环放在同一个地方：理解项目、编辑文件、运行命令、预览结果并审查将要发布的内容。这与只能编辑本地文件的独立编辑器不同，也与只显示 shell 文本的 SSH 客户端不同。项目、终端与 Git 历史属于同一个工作区。

## 什么时候有用

- 你不在笔记本旁，却需要排查或修复一个服务。
- 你想在手机或平板上审查 diff 并发布一处小改动。
- 你通过 SSH 连接自己的 Mac、Linux 机器或服务器，希望在终端旁边有编辑器与 Git 视图。
- 你希望 AI 阅读真实项目而不是一段粘贴的代码。

## NimoteCode 如何契合

用 [SSH 工作区](/zh/docs/ssh) 连接你的开发机并选择项目根目录。项目保留在远程主机上，文件与终端输出通过 SSH 连接传输，你无需把仓库同步或复制到设备上。如果项目存储在设备上，本地 Explorer 以同样的方式工作。

## Android 上的真实工作流

1. 为你的开发主机保存一个 SSH 配置并打开项目根目录。
2. 在 Explorer 中找到相关文件，而不是死记路径。
3. 在编辑器中做出最小且安全的改动。
4. 在[终端](/zh/docs/terminal)中运行相关的测试、构建或日志命令。
5. 提交或交接前检查[Git 改动](/zh/docs/source-control)。
6. 需要时用 [AI Chat 与 Agent](/zh/docs/ai) 解释代码或规划下一步。

## 与 Android 开发相关的功能

- **SSH 工作区** —— 支持断线重连的远程项目浏览与编辑。
- **编辑器** —— 标签式编辑，大屏幕支持分栏，适配移动键盘输入。
- **终端** —— 带项目上下文的命令会话与输出搜索。
- **Git** —— 查看状态、diff 与历史；受限写入工作流由 Pro 提供。
- **AI Chat 与 Agent** —— 带工作区感知、确认导向的辅助能力。
- **LSP 与调试** —— 语言服务器与调试适配器在远程主机上配置。

## Android IDE 的局限

Android 无法在所有任务上替代桌面。重型本地编译、跨文件的大规模重构与多屏调试，仍然更适合在电脑上完成。远程工作依赖与主机的稳定连接，而重活由主机承担——手机无法弥补服务器性能不足。NimoteCode 瞄准的是聚焦且高价值的时刻：修复、审查、值班工作与小功能。

## 常见问题

### 能在 Android 手机或平板上做真实开发吗？

可以，针对一组聚焦的任务。使用像 NimoteCode 这样的 Android IDE，你可以通过 SSH 连接开发机、浏览项目、编辑文件、运行终端命令、审查 Git 改动并使用 AI 辅助——尤其是修复、审查与小功能。

### NimoteCode 也支持 iOS 吗？

NimoteCode 目前提供 Android 版。公开的 iOS App Store 版本正在准备中，请查看下载页确认当前可用性。

### Android 能运行重型本地构建或完整 IDE 吗？

和桌面不一样。长时间的本地编译与大规模跨文件重构更适合桌面；在 Android 上，通过 SSH 远程连接你现有的机器通常是更高效的选择。

<div class="seo-cta">
  <p><strong>把 Android 手机或平板变成开发工作区。</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=organic&utm_campaign=android_ide" class="home-page-btn primary" target="_blank" rel="noreferrer">下载 Android 版</a>
    <a href="/zh/download?utm_source=android_ide&utm_medium=organic&utm_campaign=ios_interest" class="home-page-btn tertiary">了解 iOS 可用性</a>
    <a href="/zh/demo?utm_source=android_ide&utm_medium=organic&utm_campaign=watch_demo" class="home-page-btn secondary">观看演示</a>
  </p>
</div>

## 相关页面

- [移动 IDE 概览](/zh/mobile-ide)
- [面向远程开发的 SSH IDE](/zh/ssh-ide)
- [用手机或平板远程编程](/zh/remote-coding)
- [用手机写代码](/zh/code-from-phone)
- [2026 年最好的移动 IDE](/zh/blog/best-mobile-ides)
