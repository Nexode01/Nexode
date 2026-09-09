---
title: "通过 SSH 用手机使用 Claude Code | NimoteCode"
description: 学习用手机使用 Claude Code 的实用方式：通过 SSH 连接开发主机、在项目文件中工作、在终端验证并用 NimoteCode 审查 Git 改动。
---

# 如何用手机使用 Claude Code

如果你的开发机已经安装了 Claude Code，你可以通过 SSH 在手机上延续这个工作流。挑战不只是查看 CLI 输出，你还需要检查它讨论的文件、验证它的建议，并审查由此产生的改动。

NimoteCode 为这段远程会话提供一个移动工作区：Explorer 浏览仓库、Editor 编辑文件、SSH 终端运行命令、Git 审查，以及用于代码问题与受控任务的 AI 辅助。

<ImagePlaceholder image-key="claudeCodeFromPhone" alt="通过手机远程使用 Claude Code 的工作流">
  <strong>图片占位 —— 远程 Claude Code 工作流</strong>
  <span>请替换为已脱敏的远程 CLI 会话、已改动文件与 Git diff。未经批准请勿使用 Claude 品牌。</span>
</ImagePlaceholder>

## 一个实用的远程主机配置

1. 在远程开发主机上，按其官方文档安装并认证 Claude Code。
2. 在 NimoteCode 中，用 [SSH 工作区](/zh/docs/ssh) 配置连接该主机，并选择项目根目录。
3. 在 Explorer 打开项目，用 SSH 终端启动或继续你的 Claude Code 会话。
4. 用编辑器检查讨论中的文件与改动。
5. 在终端运行项目检查，再于[源代码管理](/zh/docs/source-control)审查 diff 后提交。

这是一个远程终端工作流：NimoteCode 不声称自己是 Claude Code 产品，也不会替代 Claude Code 自身的配置。它只是让手机或平板上的周边项目工作更可控。

## 让 Agent 扎根于验证

Agent 能加速一个范围很窄的任务，但不能消除理解环境的必要。在移动端，好的习惯是让每个闭环保持很小：要方案、检查被动的文件、运行相关检查，并在发布前审查 Git。如果任务靠近生产，请开启确认并遵循团队的上线流程。

## 何时 NimoteCode 与 Claude Code 搭配有用

- 需要在出差或值班时调查一个仓库。
- Claude Code 运行在你可通过 SSH 访问的 Linux 开发主机上。
- 你希望在终端会话旁有项目 Explorer 与 Git 审查视图。
- 你需要把一条 Agent 建议变成经过验证、可审查的改动。

NimoteCode 自身的 AI 提供商配置见 [AI Chat 与 Agent](/zh/docs/ai)。更宏观的指南见[移动 AI 编程](/zh/mobile-ai-coding)。

## 该工作流的局限

这个方案假设 Claude Code 已经运行在你可通过 SSH 访问的主机上，手机连接的是该主机，而不是在本地运行 Agent。它依赖远程开发一贯的条件：可达的主机、稳定的连接，以及你自己的 Claude Code 凭据。长时间运行的 Agent 会话仍更适合在桌面监管；在手机上，请保持闭环短而聚焦。NimoteCode 不是 Claude Code，也无法修复 Claude Code 自身配置上的问题。

## 常见问题

### 用手机使用 Claude Code 需要 NimoteCode 吗？

不需要。NimoteCode 是一个通过 SSH 把周边项目工作连接起来的移动工作区——Explorer、编辑器、终端与 Git 审查——而 Claude Code 本身在你自己的开发主机上运行并完成认证。

### NimoteCode 会替我运行 Claude Code 吗？

不会。NimoteCode 不是 Claude Code 产品，也不会替代其配置。你需要自行在远程主机上安装并认证 Claude Code，然后用 SSH 终端启动或继续会话。

### 没有远程电脑能在手机上运行 Claude Code 吗？

这个工作流不行。Claude Code 运行在你通过 SSH 访问的主机上，手机只是连接该主机，而不是在本地运行 Agent。

<div class="seo-cta">
  <p><strong>把 SSH 项目、终端与审查工作流带到手机上。</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=organic&utm_campaign=claude_code_from_phone" class="home-page-btn primary" target="_blank" rel="noreferrer">下载 Android 版</a>
    <a href="/zh/download?utm_source=claude_code_from_phone&utm_medium=organic&utm_campaign=ios_interest" class="home-page-btn tertiary">了解 iOS 可用性</a>
    <a href="/zh/demo?utm_source=claude_code_from_phone&utm_medium=organic&utm_campaign=watch_demo" class="home-page-btn secondary">观看演示</a>
  </p>
</div>

## 继续阅读

- [用手机使用 Codex](/zh/codex-from-phone)
- [面向远程开发的 SSH IDE](/zh/ssh-ide)
- [AI Agent 工作流](/zh/use-cases/ai-agent)
- [AI Agent 真的能在手机上编程吗？](/zh/blog/can-an-ai-agent-really-code-from-a-phone)
