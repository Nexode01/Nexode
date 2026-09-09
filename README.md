# NimoteCode

<p align="center">
  <a href="./README.md">English</a> · <a href="./README.zh-CN.md">简体中文</a>
</p>

<p align="center">
  <strong>Mobile IDE &amp; AI Coding Agent for Android and iOS</strong><br>
  <strong>Code on your phone or tablet with your real projects.</strong>
</p>

<p align="center">
  NimoteCode is a <strong>mobile IDE</strong> and <strong>SSH IDE</strong> for Android and iOS that brings real software-development workflows to mobile devices: local or SSH workspaces, a full code editor with split panes, in-app web preview, Terminal + Git, and a <strong>built-in AI coding agent that needs no CLI install</strong>. Android is available now; iOS is under App Store review.
</p>

<p align="center">
  <a href="https://nimotecode.com"><img src="https://img.shields.io/badge/Official-Website-4F46E5?logo=googlechrome&logoColor=white" alt="Visit the NimoteCode website"></a>
  <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><img src="https://img.shields.io/badge/Get_on-Google_Play-34A853?logo=googleplay&logoColor=white" alt="Get NimoteCode on Google Play"></a>
  <img src="https://img.shields.io/badge/App_Store-Under_Review-0A84FF?logo=apple&logoColor=white" alt="NimoteCode is under review for the App Store">
  <a href="https://nimotecode.com/docs/quick-start"><img src="https://img.shields.io/badge/Read-Docs-06B6D4" alt="Read NimoteCode documentation"></a>
  <a href="https://discord.gg/tTxbpqYmhR"><img src="https://img.shields.io/badge/Join-Discord-5865F2?logo=discord&logoColor=white" alt="Join the NimoteCode Discord community"></a>
</p>

<p align="center">
  <a href="https://github.com/nimotecode/nimotecode-mobile-ide/stargazers"><img src="https://img.shields.io/github/stars/nimotecode/nimotecode-mobile-ide?style=social" alt="NimoteCode GitHub stars"></a>
  <a href="https://github.com/nimotecode/nimotecode-mobile-ide/network/members"><img src="https://img.shields.io/github/forks/nimotecode/nimotecode-mobile-ide?style=social" alt="NimoteCode GitHub forks"></a>
</p>

> NimoteCode is a **Mobile-first AI Development Environment**.  
> **The latest Android version is available on Google Play. App Store availability is under review.**

<p align="center">
  <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode"><strong>Download for Android</strong></a> ·
  <a href="https://nimotecode.com/docs/quick-start">Documentation</a> ·
  <a href="https://nimotecode.com/features">All features</a> ·
  <a href="https://nimotecode.com/pro">Pricing</a> ·
  <a href="https://discord.gg/tTxbpqYmhR">Discord</a>
</p>

## Table of contents

- [What is NimoteCode?](#what-is-nimotecode)
- [Why NimoteCode](#why-nimotecode)
- [Core features](#core-features)
- [Built-in AI coding agent (no install)](#built-in-ai-coding-agent-no-install)
- [Mobile development capabilities](#mobile-development-capabilities)
- [Use your favorite coding tools from Terminal](#use-your-favorite-coding-tools-from-terminal)
- [Download and platforms](#download-and-platforms)
- [Quick start](#quick-start)
- [Frequently asked questions](#frequently-asked-questions)
- [Links](#links)
- [Repository and release notes](#repository-and-release-notes)

## What is NimoteCode?

NimoteCode is a **mobile IDE** and **SSH IDE** for Android and iOS. It turns a phone or tablet into a real development workspace: open a local project or connect to your Mac, Linux machine, or VPS over SSH, edit code in a full editor, run Terminal commands, review Git changes, preview web projects, and use a built-in AI coding agent — all inside one app.

It is built for developers who need to keep real work moving away from the desk: remote development, on-call fixes, code review, and AI-assisted coding on mobile.

- **Mobile IDE**: a full coding workspace on your phone or tablet.
- **Remote SSH development**: connect to your existing Mac/Linux machine or VPS.
- **Built-in AI agent**: the app's own coding agent runs inside your workspace — no Terminal workflow and no CLI to install, just connect your AI provider.
- **Real developer tools**: editor, Terminal, Git, search, diagnostics, Tasks and debugging.
- **Real development, anywhere**: continue work when you're away from your desk.

<p align="center">
  <video src="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6" controls muted playsinline width="420">
    Your browser does not support embedded video. Open the <a href="https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6">AI Agent demo video</a> instead.
  </video>
</p>

If the embedded player is unavailable in your GitHub client, [watch the AI Agent demo](https://github.com/user-attachments/assets/531d62fc-4874-41b9-96af-1ac9d2ad6fd6).

## Why NimoteCode

| Core capability | What it means for mobile coding |
| --- | --- |
| **Real workspaces** | Open local projects or connect to your actual development machine or VPS over SSH. |
| **Built-in AI coding agent** | Plan, inspect, edit, run, repair and verify multi-step tasks directly in the app — no Terminal workflow and no CLI to install on your host. |
| **Real developer tools** | Use a code editor, Terminal, Git client, search, diagnostics, Tasks and debugging tools. |
| **Built for mobile** | Continue meaningful phone or tablet coding when you are away from your desk. |

## Core features

- Local and SSH workspaces for remote development
- Explorer and full code editor, with split panes to view two files side by side
- In-app Web Preview for local or remote web projects, plus image and media preview
- Terminal for commands, logs, tests and configured CLI tools
- Git Source Control for status, diffs, history and review workflows
- Built-in AI Chat and AI coding Agent for project-aware assistance and tasks — bring your own AI provider, no CLI install
- Search, diagnostics, Tasks, LSP, Debug and Sync / Cache workflows where configured

## Built-in AI coding agent (no install)

The NimoteCode **AI Agent** is part of the app, not a terminal CLI you install on a host. Give it a product brief and it follows one loop: **plan → inspect the project → edit files → run checks → repair failures → review the Git result**. It works directly in your local or SSH workspace and hands back a reviewable Git change.

- No installation, no shell setup and no separate agent runtime.
- Works on the project you already have open.
- You connect your own AI provider and API key (BYOK); NimoteCode does not bundle model access.
- **AI Chat** is available for quick, in-context questions; **AI Agent** is available with the 14-day Pro trial and Pro.

## Mobile development capabilities

### Workspaces, editor and AI agent

Browse, search and edit projects in local files or an SSH workspace, then use the built-in AI Agent for multi-step tasks.

<p align="center">
  <img src="docs/public/screenshots/p1.png" alt="NimoteCode mobile IDE with local and SSH workspaces, code editor and AI Agent" width="720">
</p>

### SSH terminal, Git and code diagnostics

Run commands in an SSH terminal, commit, push, branch and review diffs with Git, and use diagnostics and code navigation to find issues.

<p align="center">
  <img src="docs/public/screenshots/p2.png" alt="NimoteCode SSH terminal, Git Source Control and code diagnostics on mobile" width="720">
</p>

### Debugging and workspace sync

Set breakpoints, inspect variables and call stacks, and synchronize remote workspaces with smart caching.

<p align="center">
  <img src="docs/public/screenshots/p3.png" alt="NimoteCode mobile debugging, remote workspace sync and smart caching" width="720">
</p>

## Use your favorite coding tools from Terminal

NimoteCode's built-in Agent needs no installation. If you also want to run CLI-based AI tools on your own host, you can do that in the active local or SSH workspace — including [Codex](https://nimotecode.com/codex-from-phone), [Claude Code](https://nimotecode.com/claude-code-from-phone), Kimi and similar terminal tools. These are optional and separate from the built-in Agent. For Codex mobile and Claude Code mobile workflows, NimoteCode keeps the CLI, project files, terminal output and Git review together. It does not bundle model subscriptions: configure your own providers, accounts or BYOK access where applicable.

## Download and platforms

- **Android:** available now on [Google Play](https://play.google.com/store/apps/details?id=com.nimote.nimotecode).
- **iPhone and iPad:** under App Store review; availability is announced on the [Download page](https://nimotecode.com/download).
- **Official website:** https://nimotecode.com
- **GitHub Releases (legacy / historical builds):** https://github.com/aounma/nimotecode-ai-powered-mobile-ide/releases
- **Guide:** [Use Android as a remote IDE with Tailscale and NimoteCode](https://nimotecode.com/blog/tailscale-ssh-android-mac-linux)

The latest Android release is always on Google Play. App Store availability will be announced after approval.

## Quick start

1. Install NimoteCode from Google Play. App Store availability is under review.
2. Open a [local workspace or connect over SSH](https://nimotecode.com/docs/ssh).
3. [Edit code or start an AI Agent task](https://nimotecode.com/docs/ai).
4. Run the project or checks in [Terminal](https://nimotecode.com/docs/terminal).
5. Review changes in [Git Source Control](https://nimotecode.com/docs/source-control).

## Frequently asked questions

### Is NimoteCode a full IDE or just an SSH client?

NimoteCode is a full mobile IDE, not only an SSH client. It can open a local project or an SSH workspace and brings Explorer, Editor, Terminal, Git workflows, AI assistance and diagnostic panels into the same project context.

### Is NimoteCode free?

Yes. Free includes local and SSH workspaces, the editor, baseline Terminal, Git review, AI Chat and Tasks. AI Agent and remote search are available during the 14-day, per-device Pro trial and with Pro.

### Does the AI agent run in the Terminal or require a CLI install?

No. The AI Agent is built into the app and runs directly in your local or SSH workspace. You do not install a CLI or set up a shell agent. You only connect your own AI provider and API key (BYOK).

### Does NimoteCode work on iPhone and iPad?

Android is available now. iOS is under App Store review; availability will be announced on the [Download page](https://nimotecode.com/download).

### Which AI providers can I configure?

The app includes 14 built-in provider templates and supports compatible custom endpoints. Provider availability, model access and cost are determined by your own provider account and settings.

### Is NimoteCode open source?

No. NimoteCode is currently **closed source**. This repository is the official website and public-content repository, not the application source code.

### How is NimoteCode different from Termius, Blink Shell or Claude Code?

SSH clients focus on remote access, and terminal AI tools focus on one agent. NimoteCode brings the editor, remote workspace, Terminal, Git, Preview and a built-in AI agent together in one mobile development environment, so you can inspect, edit, run, verify and review in the same place.

## Links

- [Start with SSH](https://nimotecode.com/docs/ssh)
- [Watch workflows](https://nimotecode.com/use-cases/)
- [Official documentation](https://nimotecode.com/docs/quick-start)
- [Join our Discord community](https://discord.gg/tTxbpqYmhR)
- [Report an issue](https://github.com/mobiledevloperlab/nimote_issues/issues)

## Repository and release notes

- This repository is the NimoteCode website repository (docs, landing pages and public content), not the private application source code repository.
- GitHub Releases are for legacy / historical builds only.
- Google Play is the current official release channel; App Store availability is under review.
- NimoteCode is currently **closed source**.
- See the [release notes](https://nimotecode.com/releases/) for the complete change history.

## Safety

Review AI-assisted changes before committing or deploying. Verify commands and test results, then inspect Git diffs before delivery.
