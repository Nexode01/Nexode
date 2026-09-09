---
title: "How to Use Android as a Remote IDE with Tailscale and NimoteCode: Free SSH Access to Mac and Linux"
description: "Learn how to use Android as a remote IDE with Tailscale and NimoteCode for free SSH access to Mac and Linux, without a public IP address or router port forwarding."
date: "2026-09-04"
lastUpdated: "2026-09-04"
author: "NimoteCode Team"
---

# How to Use Android as a Remote IDE with Tailscale and NimoteCode: Free SSH Access to Mac and Linux

<p class="article-meta">Published September 4, 2026 · By NimoteCode Team</p>

This short guide shows how to connect NimoteCode on Android to a Mac or Linux machine through Tailscale and SSH. You do not need a public IP address or router port forwarding.

<div class="home-page-video blog-post-video">
  <figure class="home-page-video-shell blog-post-video-shell">
    <video class="home-page-video-player blog-post-video-player" controls preload="metadata" playsinline aria-label="How to use Android as a remote IDE with Tailscale">
      <source src="/videos/android_ssh_public_guide.mp4" type="video/mp4">
      Your browser does not support embedded video.
    </video>
    <figcaption>Android SSH Remote IDE Guide</figcaption>
  </figure>
</div>

<style>
.blog-post-video,
.blog-post-video-shell {
  width: 100%;
}

.blog-post-video {
  margin-top: 24px;
}

.blog-post-video-shell {
  max-width: 960px;
  padding: 0;
  aspect-ratio: auto;
  min-height: 0;
}

.blog-post-video-player {
  width: 100%;
  height: auto;
  max-height: none;
  display: block;
  object-fit: contain;
}
</style>

## macOS: install Tailscale from the command line

First, check whether Homebrew is installed:

```bash
brew --version
```

If Homebrew is not installed, install it first:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Install Tailscale:

```bash
brew install --cask tailscale
```

Launch Tailscale:

```bash
open -a Tailscale
```

The first launch opens a sign-in page. Sign in with your Tailscale account, then find this Mac's Tailscale IPv4 address:

```bash
tailscale ip -4
```

You will usually see an address similar to:

```text
100.80.12.34
```

Confirm the connection status:

```bash
tailscale status
```

## macOS: enable SSH

Enable Remote Login:

```bash
sudo systemsetup -setremotelogin on
```

Confirm that it is enabled:

```bash
sudo systemsetup -getremotelogin
```

The output should be:

```text
Remote Login: On
```

You can also test SSH locally. Replace `your_username` with your macOS username:

```bash
ssh your_username@localhost
```

## Linux: command line only

Linux does not need a GUI. Install the Tailscale client and service once, then let it run in the background. For Ubuntu or Debian, run:

```bash
curl -fsSL https://tailscale.com/install.sh | sh
```

Start Tailscale and sign in:

```bash
sudo tailscale up
```

The command shows a sign-in URL; open it in a browser to authorize the device. Then check the Tailscale IP and status:

```bash
tailscale ip -4
tailscale status
```

Linux servers are a particularly good fit for this workflow: **install once → run in the background → usually no further attention required**. In NimoteCode, use that `100.x.x.x` address, port `22`, your Linux username, and your password or SSH key.

## Android: install Tailscale and connect NimoteCode

Search Google Play for **Tailscale**, install it, and then:

1. Open Tailscale.
2. Sign in with the same account used on your Mac.
3. Turn on the connection.
4. Confirm that your Mac appears in the device list.

Next, open NimoteCode on Android and create a new SSH connection:

```text
Host: 100.x.x.x
Port: 22
Username: your macOS username
Auth: Password or SSH Key
```

Replace `100.x.x.x` with the address returned by `tailscale ip -4` on the Mac.

Finally, turn off Wi-Fi on your phone and test once over **4G/5G**. If NimoteCode can still connect to the Mac over SSH, you have successfully set up:

**Android phone → Tailscale → home or office Mac → SSH**

## Use your Tailscale connection in NimoteCode

Tailscale gives your Android device and Mac or Linux machine a private network path. NimoteCode turns that private SSH connection into a complete mobile development workspace.

After creating the connection in NimoteCode, you can:

- Open the remote project root and browse it with Explorer instead of memorising paths.
- Edit source files directly on the Mac or Linux machine from your phone or tablet.
- Run tests, builds, Git commands and diagnostics in the integrated SSH terminal.
- Review Git diffs, branches and commits before you ship a change.
- Use AI Chat and Agent alongside the remote project, terminal output and code context.

This is the difference between having remote access and being able to complete real development work away from your desk. Tailscale handles the secure private route; NimoteCode keeps the files, editor, terminal, Git review and AI assistance in one place.

<div class="seo-cta">
  <p><strong>Connect your Tailscale machine to NimoteCode and keep your remote code, terminal and Git workflow together on Android.</strong></p>
  <p class="seo-cta-actions">
    <a href="https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=nimotecode&utm_medium=organic&utm_campaign=tailscale_ssh_guide" class="home-page-btn primary" target="_blank" rel="noreferrer">Download NimoteCode</a>
    <a href="/docs/quick-start?utm_source=tailscale_ssh_guide&utm_medium=organic&utm_campaign=tailscale_quickstart" class="home-page-btn secondary">Read the Quick Start</a>
  </p>
</div>

## What this setup gives you

With Tailscale and NimoteCode, you can securely work from Android even when your devices are on different networks—without exposing SSH directly to the public internet or configuring router port forwarding.

## Related content

- [SSH IDE for remote development](/ssh-ide) — turn an SSH connection into a full development workspace
- [Remote coding from a phone or tablet](/remote-coding) — the remote-first workflow in practice
- [Android IDE for SSH, Git and AI Coding](/android-ide) — a real mobile IDE beyond a terminal
