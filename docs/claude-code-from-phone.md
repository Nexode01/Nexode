---
title: "Use Claude Code From Your Phone with SSH | NimoteCode"
description: "Learn a practical way to use Claude Code from your phone: connect to a development host over SSH, work in the project files, validate in terminal and review Git changes in NimoteCode."
---

# How to Use Claude Code From Your Phone

If your development machine already has Claude Code installed, you can use your phone to stay connected to that workflow over SSH. The challenge is not only seeing the CLI output. You also need to inspect the files it discusses, validate its suggestions and review the resulting changes.

NimoteCode gives you a mobile workspace around that remote session: Explorer for the repository, Editor for the files, SSH Terminal for commands, Git for review and its own AI assistance for code questions and controlled tasks.

<ImagePlaceholder image-key="claudeCodeFromPhone" alt="Claude Code from phone remote workflow">
  <strong>Image placeholder — Remote Claude Code workflow</strong>
  <span>Replace with a redacted remote CLI session, changed file and Git diff. Do not use Claude branding without approval.</span>
</ImagePlaceholder>

## A practical remote-host setup

1. Install and authenticate Claude Code on the remote development host according to its own documentation.
2. In NimoteCode, connect to that host with an [SSH Workspace](/docs/ssh) profile and select the project root.
3. Open the project in Explorer and use the SSH terminal to start or continue your Claude Code session.
4. Use the editor to inspect the files and changes under discussion.
5. Run the project's checks in Terminal, then review the diff in [Source Control](/docs/source-control) before commit.

This is a remote-terminal workflow: NimoteCode does not claim to be the Claude Code product or to replace Claude Code's own setup. It makes the surrounding project work more manageable from a phone or tablet.

## Keep the agent grounded in verification

An agent can accelerate a narrow task, but it cannot remove the need to understand the environment. On mobile, a good habit is to keep each loop small: ask for the plan, inspect the touched file, run the relevant check, and review Git before shipping. If the task is production-adjacent, use confirmations and follow your team's deployment process.

## When NimoteCode is useful alongside Claude Code

- You need to investigate a repo while travelling or on call.
- Claude Code is running on a Linux development host you can reach by SSH.
- You want a project explorer and Git review view next to the terminal session.
- You need to turn an agent suggestion into a verified, reviewable change.

For AI provider setup inside NimoteCode itself, see [AI Chat and Agent](/docs/ai). For broader guidance, read [Mobile AI Coding](/mobile-ai-coding).

## Limitations of this workflow

This setup assumes Claude Code already runs on a host you can reach by SSH, so a phone connects to that host rather than running the agent locally. It depends on the same things remote development always does: a reachable host, a stable connection and your own Claude Code credentials. Long-running agent sessions are still easier to supervise on a desktop; on a phone, prefer short, narrowly scoped loops. NimoteCode is not Claude Code and cannot fix issues inside Claude Code's own configuration.

## Frequently asked questions

### Do I need NimoteCode to use Claude Code on my phone?

No. NimoteCode is a mobile workspace that keeps the surrounding project work connected over SSH — Explorer, editor, terminal and Git review — while Claude Code itself runs and authenticates on your own development host.

### Does NimoteCode run Claude Code for me?

No. NimoteCode is not the Claude Code product and does not replace its setup. You install and authenticate Claude Code on the remote host, then use the SSH terminal to start or continue a session.

### Can I run Claude Code from a phone without a remote computer?

Not with this workflow. Claude Code runs on a host you reach by SSH, so a phone connects to that host rather than running the agent locally.

<div class="seo-cta">
  <p><strong>Bring your SSH project, terminal and review workflow to the phone.</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=organic&utm_campaign=claude_code_from_phone" class="home-page-btn primary" target="_blank" rel="noreferrer">Download for Android</a>
    <a href="/download?utm_source=claude_code_from_phone&utm_medium=organic&utm_campaign=ios_interest" class="home-page-btn tertiary">Check iOS availability</a>
    <a href="/demo?utm_source=claude_code_from_phone&utm_medium=organic&utm_campaign=watch_demo" class="home-page-btn secondary">Watch Demo</a>
  </p>
</div>

## Continue reading

- [Codex from phone](/codex-from-phone)
- [SSH IDE for remote development](/ssh-ide)
- [AI Agent workflows](/use-cases/ai-agent)
- [Can an AI Agent Really Code From a Phone?](/blog/can-an-ai-agent-really-code-from-a-phone)
