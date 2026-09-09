---
title: NimoteCode Features | Mobile AI Development Workspace
description: "Explore NimoteCode’s mobile development capabilities: local and SSH workspaces, split editing, in-app web and media preview, terminal, Git, AI Chat and Agent, LSP, debugging, tasks and sync/cache."
---

# NimoteCode Features

NimoteCode keeps the essential development loop in one mobile workspace: **Explorer → Editor → Preview → Terminal → Git → AI**. Choose only the tools a task needs, while keeping the project context intact.

<div class="feature-showcase" role="region" aria-label="NimoteCode feature highlights">
  <div class="feature-showcase__track">
    <figure class="feature-showcase__item"><img src="/screenshots/p1.png" alt="Local files, SSH, code editing and AI Agent in NimoteCode" width="1604" height="901" loading="eager"><figcaption>Workspaces, editing and AI Agent</figcaption></figure>
    <figure class="feature-showcase__item"><img src="/screenshots/p2.png" alt="SSH terminal, Source Control and code diagnostics in NimoteCode" width="1597" height="896" loading="lazy"><figcaption>Terminal, Git and diagnostics</figcaption></figure>
    <figure class="feature-showcase__item"><img src="/screenshots/p3.png" alt="NimoteCode debugging, remote workspace sync, and smart caching" width="1598" height="893" loading="lazy"><figcaption>Debugging and workspace sync</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p1.png" alt="" width="1604" height="901" loading="lazy"><figcaption>Workspaces, editing and AI Agent</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p2.png" alt="" width="1597" height="896" loading="lazy"><figcaption>Terminal, Git and diagnostics</figcaption></figure>
    <figure class="feature-showcase__item" aria-hidden="true"><img src="/screenshots/p3.png" alt="" width="1598" height="893" loading="lazy"><figcaption>Debugging and workspace sync</figcaption></figure>
  </div>
</div>

## Core workspace

| Module | What it helps you do | Access |
| --- | --- | --- |
| Explorer + SSH | Open a local project or connect to a saved remote SSH workspace with password or key authentication. | Free |
| Editor | Work in tabs or split panes, save changes, preview images and supported media, use clipboard and undo/redo, follow cursor position and open structural context when available. | Free |
| Web Preview | Open a local or remote web project inside the app, including directly from a URL in Terminal. | Available in the current release |
| Terminal | Run commands in the active workspace, search output, use shortcuts and recover after a remote reconnect. | Free |
| AI Chat | Explain code, inspect error output and plan the next change with current-file context, recent tasks and visible active-Agent status. | Free |
| AI Agent | Assist a controlled multi-step workflow involving files, terminal and Git tools. | 14-day trial · Pro |

## Deliver, diagnose and automate

<div class="product-card-grid">
  <div class="product-card"><strong>Source Control</strong><span>Review repository status, diffs and history for free. Pro unlocks Git write workflows such as commit, push and stash actions.</span></div>
  <div class="product-card"><strong>Multi-terminal · Pro</strong><span>Keep parallel contexts for logs, tests, services and deployment work without leaving the workspace.</span></div>
  <div class="product-card"><strong>LSP + Debug · Pro</strong><span>Use configured remote language-server and debug-adapter workflows for diagnostics, code actions, breakpoints and runtime inspection.</span></div>
  <div class="product-card"><strong>Tasks</strong><span>Save repeated remote commands, organize them by group and follow their terminal-backed execution.</span></div>
  <div class="product-card"><strong>Sync / Cache · Pro</strong><span>Move project content between local and remote workspaces with explicit direction, path boundaries and history.</span></div>
</div>

## New in 1.1.5

The current release makes more of the development loop visible without leaving the workspace: preview local or remote web projects in-app, keep two files open side by side, inspect images and play supported media, and follow active Agent work across panels. It also improves SSH connection reuse, mobile terminal input, Git refresh and diff rendering, long-session resource use, and interface consistency. See the [release notes](/releases/) for the complete change list.

## A practical way to use the features

1. Connect through [SSH Workspace](/docs/ssh), or open a local project.
2. Locate and edit the file in [Editor](/docs/editor).
3. Verify it in [Terminal](/docs/terminal); search output or remote content when needed.
4. Ask [AI Chat and Agent](/docs/ai) to explain an error or plan a change.
5. Use [Source Control](/docs/source-control) to review the result; Pro is required when the delivery step needs a gated Git write action.

> Features are deliberately permission- and environment-aware. For example, LSP and Debug depend on the language server or debug adapter being set up on the remote host, and AI output should be reviewed before use on sensitive systems.

## Explore the SSH workflow

If you are evaluating how these features fit an SSH session, see the [Android SSH client](/android-ssh-client) workflow, compare [SSH clients](/blog/best-ssh-clients), or read the [SSH IDE overview](/ssh-ide) for the full remote development loop.
