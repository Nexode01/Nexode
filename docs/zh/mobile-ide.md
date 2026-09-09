---
title: "适用于 SSH、Git 与 AI 编程的移动 IDE | NimoteCode"
description: NimoteCode 是面向 Android 的移动 AI 开发工作台，集 SSH、双栏编辑、应用内 Web 预览、Git 与 AI 编程于同一个工作区。
---

# 适用于 SSH、Git 与 AI 编程的移动 IDE

大多数移动编码工具只解决其中一环：打开文件、连接服务器或用 SSH 运行命令。而一个**移动 IDE** 应该把完整开发闭环串在一起：浏览项目、理解代码、做出修改、完成验证，并审查将要交付的内容。

NimoteCode 是一个**移动 AI 开发工作台**。当前 Android 版将 Editor、Explorer、SSH、应用内 Web 与媒体预览、Terminal、Git、AI Chat 与 Agent 放进同一个工作区；iOS 公版仍在准备中。

<ImagePlaceholder image-key="mobileIde" alt="NimoteCode 移动 IDE">
  <strong>图片占位 —— 移动 IDE 总览</strong>
  <span>请替换为清晰展示 Explorer、编辑器、终端、Git 与 AI Agent 在同一工作区内的产品截图。</span>
</ImagePlaceholder>

## 什么让移动 IDE 真正有用？

| 需求 | 单一用途 App | NimoteCode 工作区 |
|---|---|---|
| 理解项目 | 打开单个文件 | 在 Explorer 中浏览项目，文件保留在标签页 |
| 远程工作 | 在 SSH 与编辑器之间切换 | 连接 SSH 工作区并直接处理其文件 |
| 验证改动 | 把命令复制到另一个 App | 在工作区终端中运行命令 |
| 预览 Web 改动 | 切换到独立浏览器 | 从工作区或 Terminal URL 直接打开本地或远程 Web 项目 |
| 对照相关代码 | 在文件之间反复切换 | 通过编辑器双栏并排查看两个文件 |
| 谨慎交付 | 在别处查看原始 diff | 在编辑过的代码旁审查 Git 改动 |
| 获取帮助 | 把片段粘贴到独立的 AI 聊天 | 在带工作区上下文的 AI Chat / Agent 中处理 |

目标并不是在每一个长编码时段都取代电脑，而是让你只拿着手机或平板时，也能真正高效地完成那些时刻：一次值班排查、一个小规模生产修复、一次出差路上的审查，或是对进行中工作的 AI 辅助跟进。

## 完整工作流，无需切换应用

当项目在设备上时从本地项目开始，或通过 [SSH 工作区](/zh/docs/ssh) 连接远程开发机或服务器。接着在编辑器中双栏打开文件，需要时预览本地或远程 Web 项目，在[终端](/zh/docs/terminal)中运行测试或排查命令，并用[源代码管理](/zh/docs/source-control)查看改动产生的 diff。

当任务需要更多上下文时，[AI Chat 与 Agent](/zh/docs/ai)可以解释代码或规划改动。AI Agent 面向受控的多步骤任务；你可以检查它提出的内容，把最终决定权留在自己手中。

## 为移动端限制而设计

好的移动开发不是把桌面界面塞进小屏幕。NimoteCode 围绕触控、移动键盘、聚焦面板以及断线重连的远程工作设计。当前版本还通过更稳定的 SSH 处理、受控的预览资源与更可靠的移动端终端输入，让长时间使用更流畅。平板上更大的屏幕给你更多空间进行双栏编辑、浏览项目与查看终端输出；手机上，同一个工作区依然聚焦于下一步动作。

功能细节见[功能特性](/zh/features)。具体生产场景见[移动端远程热修](/zh/use-cases/remote-hotfix)。安装指引从[快速入门](/zh/docs/quick-start)开始。

## 桌面端依然更适合的场景

移动 IDE 是补充，不是完全替代。长时间不间断的功能开发、重型本地编译、跨文件的大规模重构以及多屏调试，仍然更适合在桌面完成。手机上，焦点会自然收窄到下一步具体动作：检查、编辑、验证、审查。这样的分工，正是通过 SSH 做远程开发——复用你已有的算力——通常是更高效选择的原因，而不是试图在手机上本地编译大型项目。

## 常见问题

### NimoteCode 只是 SSH 客户端吗？

不是。NimoteCode 在同一个移动开发工作区里结合了 Editor、Explorer、SSH、Terminal、Git、AI Chat 与 Agent。

### 能在手机或平板上处理远程项目吗？

可以。通过 SSH 连接后，就能在同一个工作区浏览文件、编辑代码、运行终端命令并审查 Git 改动。

### NimoteCode 支持 Android 和 iOS 吗？

NimoteCode 目前提供 Android 版；iOS 公版正在 App Store 准备中。可在[下载](/zh/download)查看最新可用状态。

<div class="seo-cta">
  <p><strong>带上真实工作流，而不只是一个终端。</strong>查看移动 IDE 的实际效果，或选择你的平台。</p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=organic&utm_campaign=mobile_ide" class="home-page-btn primary" target="_blank" rel="noreferrer">下载 Android 版</a>
    <a href="/zh/download?utm_source=mobile_ide&utm_medium=organic&utm_campaign=ios_interest" class="home-page-btn tertiary">了解 iOS 可用性</a>
    <a href="/zh/demo?utm_source=mobile_ide&utm_medium=organic&utm_campaign=watch_demo" class="home-page-btn secondary">观看演示</a>
  </p>
</div>

## 探索相关工作流

- [面向远程开发的 SSH IDE](/zh/ssh-ide)
- [移动 AI 编程](/zh/mobile-ai-coding)
- [iPad 编程工作区](/zh/ipad-coding)
- [2026 年最好的移动 IDE](/zh/blog/best-mobile-ides)
