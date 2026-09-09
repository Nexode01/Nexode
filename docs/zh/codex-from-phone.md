---
title: "通过 SSH 与 Git 用手机使用 Codex | NimoteCode"
description: 在一个实用的远程开发工作流中用手机使用 Codex：SSH 进入开发主机、检查项目文件、运行检查并用 NimoteCode 审查 Git 改动。
---

# 如何用手机使用 Codex

编码代理在靠近它们需要的仓库、终端与测试环境时最有用。如果 Codex 配置在远程开发主机上，基于 SSH 的移动工作区可以让你在手机上延续这份工作，而不是把它退化成一堆贴来贴去的片段。

NimoteCode 结合了 Editor、Explorer、SSH 终端、Git、AI Chat 与 Agent，让你在相同的项目上下文中围绕远程 Codex 会话工作：打开源码、运行命令、检查输出并审查真实 diff。

<ImagePlaceholder image-key="codexFromPhone" alt="通过手机远程使用 Codex 的工作流">
  <strong>图片占位 —— 远程 Codex 工作流</strong>
  <span>请替换为已脱敏的远程 Agent 会话、源码检查与验证输出。请勿包含凭据或私有代码。</span>
</ImagePlaceholder>

## 一个手机友好的 Codex 工作流

1. 在你方组织的凭据与控制要求下，在远程开发主机上配置 Codex。
2. 通过 [SSH 工作区](/zh/docs/ssh) 在 NimoteCode 中打开仓库。
3. 如果你的主机是这样配置的，就从 SSH 终端启动或恢复 Codex 会话。
4. 用 Explorer 与编辑器标签页检查正在讨论或被改动的文件。
5. 在终端运行聚焦的测试或检查。
6. 提交或推送前，在[源代码管理](/zh/docs/source-control)中审查暂存与未暂存的结果。

NimoteCode 不是要替代 Codex 或它的官方配置，而是保持周边开发工作连接且可审查的移动工作区。

## 在工作区里使用兼容 OpenAI 的 AI

NimoteCode 也支持为其应用内 AI Chat 与 Agent 工作流配置 AI 提供商。当你希望在 SSH 会话旁获得带工作区感知的解释、规划或受控自动化时，这很有用。提供商配置见 [AI Chat 与 Agent](/zh/docs/ai)，执行控制见[安全与防护](/zh/docs/security)。

## 让任务保持窄小且可观察

在手机上，速度来自减少上下文切换，而不是跳过安全措施。优先每次一个清晰目标，接受修改前先读文件，运行最小且合适的验证命令，并检查 Git diff。无论 Codex 在协助功能、重构还是事故响应，这套模式都适用。

## 该工作流的局限

Codex 必须已经在你可通过 SSH 访问的主机上配置好；手机不会在本地运行 Codex。这意味着工作流受你的网络、主机配置与 Codex 账户限制影响。长时间或探索性的 Agent 会话更适合在桌面监管，所以在手机上请让每次运行保持窄小且可观察。NimoteCode 是独立的移动工作区——它不代理 Codex，Codex 自身的配置与安全控制仍然适用。

## 常见问题

### 用手机使用 Codex 需要 NimoteCode 吗？

不需要。NimoteCode 是远程 Codex 会话周边的移动工作区——Explorer、编辑器、SSH 终端与 Git 审查——而 Codex 在你自己的开发主机上安装并认证。

### Codex 是 NimoteCode 的官方合作伙伴吗？

不是。Codex 是外部编码代理。NimoteCode 不声称与其有官方合作，也不代理 Codex；你在远程主机上运行 Codex，并通过 SSH 围绕它工作。

### 我可以在 NimoteCode 里用它的 AI 助手代替 Codex 吗？

可以。NimoteCode 自带 AI Chat 与 Agent 工作流并支持提供商配置，既可以配合远程 Codex 会话使用，也可以单独使用。

<div class="seo-cta">
  <p><strong>远程使用 Codex 时，把项目、命令输出与 Git 审查带在身边。</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=organic&utm_campaign=codex_from_phone" class="home-page-btn primary" target="_blank" rel="noreferrer">下载 Android 版</a>
    <a href="/zh/download?utm_source=codex_from_phone&utm_medium=organic&utm_campaign=ios_interest" class="home-page-btn tertiary">了解 iOS 可用性</a>
    <a href="/zh/demo?utm_source=codex_from_phone&utm_medium=organic&utm_campaign=watch_demo" class="home-page-btn secondary">观看演示</a>
  </p>
</div>

## 相关页面

- [移动 AI 编程工作区](/zh/mobile-ai-coding)
- [用手机使用 Claude Code](/zh/claude-code-from-phone)
- [远程热修工作流](/zh/use-cases/remote-hotfix)
- [AI Agent 真的能在手机上编程吗？](/zh/blog/can-an-ai-agent-really-code-from-a-phone)
