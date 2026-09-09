/**
 * Single source of truth for the mobile development tools comparison page.
 *
 * Everything the comparison table, the "which tool is right for you" section
 * and the sources block render is derived from this file. To refresh the page
 * after a product changes, update the relevant entry and bump `lastVerified`.
 *
 * Ground rules for this data:
 * - Descriptions stay neutral and factual. No "best", "only" or "#1" claims.
 * - A capability is only marked `yes` when the vendor documents it as native.
 * - Running a CLI coding agent inside a terminal is NOT native agent support;
 *   it is recorded as `partial` with a "terminal-based" note.
 * - Remote VS Code / code-server is NOT a native mobile code editor; it is
 *   recorded as `partial`.
 * - When public documentation does not confirm a capability, use `unknown`
 *   instead of asserting it is unsupported.
 */
import { product } from '../product'

export type Locale = 'en' | 'zh'
export type Localized = Record<Locale, string>
export type CellStatus = 'yes' | 'partial' | 'no' | 'unknown'
export type CategoryId = 'ssh-terminal' | 'agent-terminal' | 'orchestration' | 'mobile-workspace'

export interface FeatureCell {
  status: CellStatus
  /** Short qualifier shown next to the symbol (also used as the accessible label). */
  note?: Localized
  /** Free text that replaces the symbol, for non-capability rows. */
  text?: Localized
}

export type FeatureKey =
  | 'platform'
  | 'directSshWorkspace'
  | 'fileExplorer'
  | 'codeEditor'
  | 'lsp'
  | 'debugger'
  | 'terminal'
  | 'gitDiff'
  | 'aiChatAgent'
  | 'claudeCodexWorkflow'
  | 'agentAwareStatus'
  | 'persistentSessions'
  | 'webAppPreview'
  | 'desktopCompanionRequired'
  | 'openSource'
  | 'pricingModel'

export interface FeatureRow {
  key: FeatureKey
  kind: 'capability' | 'info'
  label: Localized
}

export interface SourceLink {
  label: string
  url: string
}

export interface Competitor {
  id: string
  name: string
  slug: string
  website: string
  category: CategoryId
  primaryPositioning: Localized
  summary: Localized
  platforms: Localized
  pricing: Localized
  openSource: Localized
  features: Record<FeatureKey, FeatureCell>
  sources: SourceLink[]
  lastVerified: string
}

export const LAST_VERIFIED = '2026-09-09'

export const featureRows: FeatureRow[] = [
  { key: 'platform', kind: 'info', label: { en: 'Platform', zh: '平台' } },
  { key: 'directSshWorkspace', kind: 'capability', label: { en: 'Direct SSH Workspace', zh: '直接 SSH 工作区' } },
  { key: 'fileExplorer', kind: 'capability', label: { en: 'File Explorer', zh: '文件浏览器' } },
  { key: 'codeEditor', kind: 'capability', label: { en: 'Code Editor', zh: '代码编辑器' } },
  { key: 'lsp', kind: 'capability', label: { en: 'LSP', zh: 'LSP' } },
  { key: 'debugger', kind: 'capability', label: { en: 'Debugger', zh: '调试器' } },
  { key: 'terminal', kind: 'capability', label: { en: 'Terminal', zh: '终端' } },
  { key: 'gitDiff', kind: 'capability', label: { en: 'Git / Diff', zh: 'Git / Diff' } },
  { key: 'aiChatAgent', kind: 'capability', label: { en: 'AI Chat / Agent', zh: 'AI Chat / Agent' } },
  {
    key: 'claudeCodexWorkflow',
    kind: 'capability',
    label: { en: 'Claude Code / Codex Workflow', zh: 'Claude Code / Codex 工作流' }
  },
  { key: 'agentAwareStatus', kind: 'capability', label: { en: 'Agent-aware Status', zh: 'Agent 感知状态' } },
  { key: 'persistentSessions', kind: 'capability', label: { en: 'Persistent Sessions', zh: '持久会话' } },
  { key: 'webAppPreview', kind: 'capability', label: { en: 'Web / App Preview', zh: 'Web / App 预览' } },
  {
    key: 'desktopCompanionRequired',
    kind: 'info',
    label: { en: 'Desktop Companion Required', zh: '是否需要桌面端配合' }
  },
  { key: 'openSource', kind: 'info', label: { en: 'Open Source', zh: '开源' } },
  { key: 'pricingModel', kind: 'info', label: { en: 'Pricing Model', zh: '定价模式' } }
]

const yes = (note?: Localized): FeatureCell => ({ status: 'yes', note })
const partial = (note?: Localized): FeatureCell => ({ status: 'partial', note })
const no = (): FeatureCell => ({ status: 'no' })
const unknown = (note?: Localized): FeatureCell => ({ status: 'unknown', note })
const info = (en: string, zh: string): FeatureCell => ({ status: 'no', text: { en, zh } })

const terminalBased: Localized = { en: 'Terminal-based', zh: '基于终端' }
const viaSshTerminal: Localized = { en: 'Via SSH terminal', zh: '通过 SSH 终端' }
const remoteIde: Localized = { en: 'Remote IDE workflow', zh: '远程 IDE 工作流' }

export const categories: Array<{ id: CategoryId; title: Localized; description: Localized; examples: string }> = [
  {
    id: 'ssh-terminal',
    title: { en: 'SSH / Terminal clients', zh: 'SSH / 终端客户端' },
    description: {
      en: 'Broadly, these tools focus on secure connections, host management and a fast terminal. They are a strong fit when the task is running commands on a server.',
      zh: '总体而言，这类工具专注于安全连接、主机管理与快速终端。当任务主要是在服务器上运行命令时，它们非常合适。'
    },
    examples: 'Termius · Blink Shell'
  },
  {
    id: 'agent-terminal',
    title: { en: 'Agent-aware terminals & mobile agent workspaces', zh: 'Agent 感知终端与移动 Agent 工作区' },
    description: {
      en: 'These tools keep a terminal and add interfaces around CLI coding agents — persistent tmux sessions, agent notifications and lightweight review.',
      zh: '这类工具保留终端，并围绕 CLI 编码 Agent 增加界面——持久 tmux 会话、Agent 通知与轻量审查。'
    },
    examples: 'Redock · Moshi · ServerCC'
  },
  {
    id: 'orchestration',
    title: { en: 'Agent orchestration / desktop companions', zh: 'Agent 编排 / 桌面端配合' },
    description: {
      en: 'These tools coordinate multiple agents and worktrees around a host-side development environment, with a mobile companion for monitoring and control.',
      zh: '这类工具围绕主机侧开发环境编排多个 Agent 与 worktree，并提供用于监控和控制的移动端配套。'
    },
    examples: 'Orca · Port22 · AgentsRoom'
  },
  {
    id: 'mobile-workspace',
    title: { en: 'Full mobile development workspace', zh: '完整移动开发工作区' },
    description: {
      en: 'A workspace keeps the project, editor, terminal, Git review, preview and AI in the same mobile context, so the phone or tablet itself behaves like a development environment.',
      zh: '工作区把项目、编辑器、终端、Git 审查、预览与 AI 放在同一个移动上下文中，让手机或平板本身就像一套开发环境。'
    },
    examples: 'NimoteCode'
  }
]

export const competitors: Competitor[] = [
  {
    id: 'nimotecode',
    name: 'NimoteCode',
    slug: 'nimotecode',
    website: 'https://nimotecode.com/',
    category: 'mobile-workspace',
    primaryPositioning: {
      en: 'Complete mobile development workspace / mobile IDE',
      zh: '完整移动开发工作区 / 移动 IDE'
    },
    summary: {
      en: 'Designed for developers who want the phone or tablet itself to function as a complete development workspace, combining code editing, SSH, Terminal, Git, LSP, debugging and AI workflows.',
      zh: '面向希望手机或平板本身就能充当完整开发工作区的开发者，将代码编辑、SSH、终端、Git、LSP、调试与 AI 工作流结合在一起。'
    },
    platforms: { en: 'Android (iOS in App Store review)', zh: 'Android（iOS 审核中）' },
    pricing: {
      en: `Free tier; ${product.trialDays}-day Pro trial; ${product.pricing.monthly} or ${product.pricing.yearly}. AI is BYOK.`,
      zh: `免费版；${product.trialDays} 天 Pro 试用；${product.pricing.monthly} 或 ${product.pricing.yearly}。AI 为 BYOK。`
    },
    openSource: { en: 'No — closed source', zh: '否——闭源' },
    features: {
      platform: info('Android (iOS in review)', 'Android（iOS 审核中）'),
      directSshWorkspace: yes(),
      fileExplorer: yes(),
      codeEditor: yes(),
      lsp: yes({ en: 'Pro workflow', zh: 'Pro 功能' }),
      debugger: yes({ en: 'Pro workflow', zh: 'Pro 功能' }),
      terminal: yes(),
      gitDiff: yes({ en: 'Review free; write actions with Pro', zh: '审查免费；写入操作需 Pro' }),
      aiChatAgent: yes(),
      claudeCodexWorkflow: partial(viaSshTerminal),
      agentAwareStatus: yes({ en: 'NimoteCode AI Agent', zh: 'NimoteCode AI Agent' }),
      persistentSessions: yes({ en: 'Reconnect-aware SSH', zh: '断线感知 SSH' }),
      webAppPreview: yes(),
      desktopCompanionRequired: info('No', '否'),
      openSource: info('No — closed source', '否——闭源'),
      pricingModel: info(
        `Free + Pro (${product.pricing.monthly} / ${product.pricing.yearly})`,
        `免费 + Pro（${product.pricing.monthly} / ${product.pricing.yearly}）`
      )
    },
    sources: [
      { label: 'NimoteCode website', url: 'https://nimotecode.com/' },
      {
        label: 'NimoteCode on Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.nimote.nimotecode'
      }
    ],
    lastVerified: LAST_VERIFIED
  },
  {
    id: 'termius',
    name: 'Termius',
    slug: 'termius',
    website: 'https://termius.com/',
    category: 'ssh-terminal',
    primaryPositioning: { en: 'Professional SSH client / infrastructure access', zh: '专业 SSH 客户端 / 基础设施访问' },
    summary: {
      en: 'Well suited to developers and infrastructure teams that primarily need a mature SSH, SFTP and remote server management experience.',
      zh: '最适合主要需要成熟 SSH、SFTP 与远程服务器管理体验的开发者和基础设施团队。'
    },
    platforms: { en: 'iOS / Android / Desktop', zh: 'iOS / Android / 桌面端' },
    pricing: { en: 'Free tier; paid plans (see vendor pricing)', zh: '免费版；付费方案（见官网定价）' },
    openSource: { en: 'No — proprietary', zh: '否——专有软件' },
    features: {
      platform: info('iOS / Android / Desktop', 'iOS / Android / 桌面端'),
      directSshWorkspace: partial({ en: 'SSH sessions / SFTP', zh: 'SSH 会话 / SFTP' }),
      fileExplorer: partial({ en: 'SFTP file browser', zh: 'SFTP 文件浏览' }),
      codeEditor: no(),
      lsp: no(),
      debugger: no(),
      terminal: yes(),
      gitDiff: partial(terminalBased),
      aiChatAgent: no(),
      claudeCodexWorkflow: partial(terminalBased),
      agentAwareStatus: no(),
      persistentSessions: unknown({ en: 'Not confirmed', zh: '未确认' }),
      webAppPreview: no(),
      desktopCompanionRequired: info('No', '否'),
      openSource: info('No — proprietary', '否——专有软件'),
      pricingModel: info('Free + paid plans', '免费 + 付费方案')
    },
    sources: [
      { label: 'Termius website', url: 'https://termius.com/' },
      { label: 'Termius pricing', url: 'https://termius.com/pricing' }
    ],
    lastVerified: LAST_VERIFIED
  },
  {
    id: 'blink-shell',
    name: 'Blink Shell',
    slug: 'blink-shell',
    website: 'https://blink.sh/',
    category: 'ssh-terminal',
    primaryPositioning: { en: 'Developer terminal for iPhone / iPad', zh: '面向 iPhone / iPad 的开发者终端' },
    summary: {
      en: 'A strong choice for iPhone and iPad users who prefer a terminal-first workflow, Mosh and remote VS Code environments.',
      zh: '适合偏好终端优先工作流、Mosh 与远程 VS Code 环境的 iPhone 和 iPad 用户。'
    },
    platforms: { en: 'iOS / iPadOS', zh: 'iOS / iPadOS' },
    pricing: { en: 'Paid app (see vendor)', zh: '付费应用（见官网）' },
    openSource: { en: 'Yes', zh: '是' },
    features: {
      platform: info('iOS / iPadOS', 'iOS / iPadOS'),
      directSshWorkspace: partial({ en: 'SSH / Mosh sessions', zh: 'SSH / Mosh 会话' }),
      fileExplorer: partial(remoteIde),
      codeEditor: partial({ en: 'Blink Code / remote VS Code', zh: 'Blink Code / 远程 VS Code' }),
      lsp: partial({ en: 'Depends on remote IDE', zh: '取决于远程 IDE' }),
      debugger: unknown({ en: 'Not confirmed', zh: '未确认' }),
      terminal: yes(),
      gitDiff: partial({ en: 'Terminal / remote IDE', zh: '终端 / 远程 IDE' }),
      aiChatAgent: no(),
      claudeCodexWorkflow: partial(terminalBased),
      agentAwareStatus: no(),
      persistentSessions: partial({ en: 'Mosh roaming', zh: 'Mosh 漫游' }),
      webAppPreview: no(),
      desktopCompanionRequired: info('No', '否'),
      openSource: info('Yes', '是'),
      pricingModel: info('Paid app', '付费应用')
    },
    sources: [
      { label: 'Blink Shell website', url: 'https://blink.sh/' },
      { label: 'Blink Code documentation', url: 'https://docs.blink.sh/advanced/code' },
      { label: 'Blink Shell on GitHub', url: 'https://github.com/blinksh/blink' }
    ],
    lastVerified: LAST_VERIFIED
  },
  {
    id: 'redock',
    name: 'Redock',
    slug: 'redock',
    website: 'https://redock.dev/',
    category: 'agent-terminal',
    primaryPositioning: {
      en: 'Mobile SSH / Mosh terminal for AI coding agents',
      zh: '面向 AI 编码 Agent 的移动 SSH / Mosh 终端'
    },
    summary: {
      en: 'Designed around mobile SSH / Mosh workflows for AI coding agents, with tmux persistence, agent-aware interfaces and web preview.',
      zh: '围绕 AI 编码 Agent 的移动 SSH / Mosh 工作流设计，提供 tmux 持久化、Agent 感知界面与 Web 预览。'
    },
    platforms: { en: 'iOS / Android', zh: 'iOS / Android' },
    pricing: { en: 'See vendor site', zh: '见官网' },
    openSource: { en: 'Not confirmed', zh: '未确认' },
    features: {
      platform: info('iOS / Android', 'iOS / Android'),
      directSshWorkspace: yes(),
      fileExplorer: unknown({ en: 'Not confirmed', zh: '未确认' }),
      codeEditor: no(),
      lsp: no(),
      debugger: no(),
      terminal: yes(),
      gitDiff: unknown({ en: 'Not confirmed', zh: '未确认' }),
      aiChatAgent: yes(),
      claudeCodexWorkflow: yes(),
      agentAwareStatus: yes({ en: 'Agent status / notifications', zh: 'Agent 状态 / 通知' }),
      persistentSessions: yes({ en: 'tmux', zh: 'tmux' }),
      webAppPreview: yes(),
      desktopCompanionRequired: info('No', '否'),
      openSource: info('Not confirmed', '未确认'),
      pricingModel: info('See vendor site', '见官网')
    },
    sources: [
      { label: 'Redock website', url: 'https://redock.dev/' },
      {
        label: 'Redock on Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.redock.android'
      },
      {
        label: 'Redock on the App Store',
        url: 'https://apps.apple.com/us/app/redock-ssh-mosh-terminal/id6763979847'
      }
    ],
    lastVerified: LAST_VERIFIED
  },
  {
    id: 'orca',
    name: 'Orca',
    slug: 'orca',
    website: 'https://www.onorca.dev/',
    category: 'orchestration',
    primaryPositioning: {
      en: 'Agent Development Environment / multi-agent orchestration',
      zh: 'Agent 开发环境 / 多 Agent 编排'
    },
    summary: {
      en: 'Built for orchestrating multiple coding agents and worktrees across a host-side development environment, with a mobile companion for monitoring and control.',
      zh: '面向在主机侧开发环境中编排多个编码 Agent 与 worktree，并提供用于监控和控制的移动端配套。'
    },
    platforms: { en: 'Desktop + mobile companion', zh: '桌面端 + 移动端配套' },
    pricing: { en: 'Open source; see vendor site', zh: '开源；见官网' },
    openSource: { en: 'Yes — MIT', zh: '是——MIT' },
    features: {
      platform: info('Desktop + mobile companion', '桌面端 + 移动端配套'),
      directSshWorkspace: partial({ en: 'Host-centered', zh: '以主机为核心' }),
      fileExplorer: yes({ en: 'Host-side workspace', zh: '主机侧工作区' }),
      codeEditor: partial({ en: 'Host-side desktop; mobile companion', zh: '主机侧桌面端；移动端为配套' }),
      lsp: unknown({ en: 'Not confirmed', zh: '未确认' }),
      debugger: unknown({ en: 'Not confirmed', zh: '未确认' }),
      terminal: yes(),
      gitDiff: yes(),
      aiChatAgent: yes(),
      claudeCodexWorkflow: yes(),
      agentAwareStatus: yes({ en: 'Parallel agents', zh: '并行 Agent' }),
      persistentSessions: unknown({ en: 'Not confirmed', zh: '未确认' }),
      webAppPreview: yes({ en: 'Browser preview', zh: '浏览器预览' }),
      desktopCompanionRequired: info('Yes — host-centered', '是——以主机为核心'),
      openSource: info('Yes — MIT', '是——MIT'),
      pricingModel: info('Open source; see vendor site', '开源；见官网')
    },
    sources: [
      { label: 'Orca website', url: 'https://www.onorca.dev/' },
      { label: 'Orca on GitHub', url: 'https://github.com/stablyai/orca' },
      { label: 'Orca changelog', url: 'https://www.onorca.dev/changelog' }
    ],
    lastVerified: LAST_VERIFIED
  },
  {
    id: 'servercc',
    name: 'ServerCC',
    slug: 'servercc',
    website: 'https://servercc.app/',
    category: 'agent-terminal',
    primaryPositioning: { en: 'Mobile SSH workspace for AI coding agents', zh: '面向 AI 编码 Agent 的移动 SSH 工作区' },
    summary: {
      en: 'Focused on SSH-based mobile coding-agent workflows with persistent sessions, Git Diff, built-in Tailscale and a low-friction sandbox experience.',
      zh: '专注于基于 SSH 的移动编码 Agent 工作流，提供持久会话、Git Diff、内置 Tailscale 与低门槛沙盒体验。'
    },
    platforms: { en: 'iOS / Android', zh: 'iOS / Android' },
    pricing: { en: 'See vendor site', zh: '见官网' },
    openSource: { en: 'Not confirmed', zh: '未确认' },
    features: {
      platform: info('iOS / Android', 'iOS / Android'),
      directSshWorkspace: yes(),
      fileExplorer: unknown({ en: 'Not confirmed', zh: '未确认' }),
      codeEditor: partial({ en: 'Not a full IDE editor', zh: '未达到完整 IDE 编辑器级别' }),
      lsp: unknown({ en: 'Not confirmed', zh: '未确认' }),
      debugger: no(),
      terminal: yes(),
      gitDiff: yes(),
      aiChatAgent: yes(),
      claudeCodexWorkflow: yes({ en: 'Claude Code, Codex and others', zh: 'Claude Code、Codex 等' }),
      agentAwareStatus: unknown({ en: 'Not confirmed', zh: '未确认' }),
      persistentSessions: yes({ en: 'tmux', zh: 'tmux' }),
      webAppPreview: yes({ en: 'Ports / preview', zh: '端口 / 预览' }),
      desktopCompanionRequired: info('No', '否'),
      openSource: info('Not confirmed', '未确认'),
      pricingModel: info('See vendor site', '见官网')
    },
    sources: [
      { label: 'ServerCC website', url: 'https://servercc.app/' },
      { label: 'ServerCC docs', url: 'https://servercc.app/docs' },
      { label: 'ServerCC changelog', url: 'https://servercc.app/changelog' }
    ],
    lastVerified: LAST_VERIFIED
  },
  {
    id: 'moshi',
    name: 'Moshi',
    slug: 'moshi',
    website: 'https://getmoshi.app/',
    category: 'agent-terminal',
    primaryPositioning: { en: 'Agent-aware SSH / Mosh terminal', zh: 'Agent 感知的 SSH / Mosh 终端' },
    summary: {
      en: 'An agent-aware SSH / Mosh terminal optimized for Claude Code, Codex and other CLI-based coding agents.',
      zh: '面向 Claude Code、Codex 及其他 CLI 编码 Agent 优化的 Agent 感知 SSH / Mosh 终端。'
    },
    platforms: { en: 'iOS / Android', zh: 'iOS / Android' },
    pricing: { en: 'See vendor site', zh: '见官网' },
    openSource: { en: 'Not confirmed', zh: '未确认' },
    features: {
      platform: info('iOS / Android', 'iOS / Android'),
      directSshWorkspace: partial({ en: 'SSH / Mosh sessions', zh: 'SSH / Mosh 会话' }),
      fileExplorer: no(),
      codeEditor: no(),
      lsp: no(),
      debugger: no(),
      terminal: yes(),
      gitDiff: yes(),
      aiChatAgent: yes({ en: 'Agent chat / hooks', zh: 'Agent 聊天 / hooks' }),
      claudeCodexWorkflow: yes({ en: 'Claude Code, Codex, OpenCode', zh: 'Claude Code、Codex、OpenCode' }),
      agentAwareStatus: yes({ en: 'Agent-aware input', zh: 'Agent 感知输入' }),
      persistentSessions: yes({ en: 'tmux', zh: 'tmux' }),
      webAppPreview: yes({ en: 'Browser preview', zh: '浏览器预览' }),
      desktopCompanionRequired: info('No', '否'),
      openSource: info('Not confirmed', '未确认'),
      pricingModel: info('See vendor site', '见官网')
    },
    sources: [
      { label: 'Moshi website', url: 'https://getmoshi.app/' },
      { label: 'Moshi documentation', url: 'https://getmoshi.app/docs/introduction' }
    ],
    lastVerified: LAST_VERIFIED
  }
]

export const primaryCompetitors = competitors.filter((entry) => entry.id !== 'moshi')
export const allCompetitors = competitors

export const comparisonCopy = {
  en: {
    legendTitle: 'How to read this table',
    legend: [
      { symbol: '✓', label: 'Native / first-class support' },
      { symbol: '◐', label: 'Partial / integration / terminal-based' },
      { symbol: '—', label: 'Not a core product capability' },
      { symbol: '?', label: 'Not confirmed' }
    ],
    tableHeading: 'Feature comparison',
    tableIntro:
      'The table compares the products most often evaluated together for mobile and remote development. Entries are based on public vendor documentation reviewed on September 9, 2026.',
    categoriesHeading: 'Broadly, these tools emphasize different parts of the mobile development workflow',
    picksHeading: 'Which tool is right for you?',
    sourcesHeading: 'Sources / Data Sources',
    sourcesIntro:
      'This section lists official or first-party sources. Links open in a new tab and are marked nofollow.',
    disclaimer:
      'Feature availability, pricing and platform support change frequently. This comparison was last reviewed on September 9, 2026 and is based on publicly available vendor documentation, official websites and app-store listings.',
    verifiedLabel: 'Last verified',
    midCtaTitle: 'Need more than a terminal?',
    midCtaBody:
      'Explore a full mobile development workspace with code editing, SSH, Git, Terminal and AI.',
    midCtaButton: 'Explore NimoteCode',
    bottomCtaTitle: 'Try NimoteCode on Android',
    bottomCtaButton: 'Google Play',
    iosNote: 'iOS is in App Store review — check current availability on the download page.',
    externalLabel: 'opens in a new tab'
  },
  zh: {
    legendTitle: '如何阅读此表',
    legend: [
      { symbol: '✓', label: '原生 / 一等支持' },
      { symbol: '◐', label: '部分 / 集成 / 基于终端' },
      { symbol: '—', label: '并非产品核心能力' },
      { symbol: '?', label: '未确认' }
    ],
    tableHeading: '功能对比',
    tableIntro:
      '下表对比最常被一起评估的移动与远程开发工具。信息基于 2026 年 9 月 9 日核实过的各产品公开官方文档。',
    categoriesHeading: '总体而言，这些工具强调移动开发工作流的不同部分',
    picksHeading: '哪款工具适合你？',
    sourcesHeading: '来源 / 数据来源',
    sourcesIntro: '仅列出官方或一手来源。链接在新标签页打开，并标记为 nofollow。',
    disclaimer:
      '功能、价格和平台支持可能随版本变化。本对比最后核实于 2026 年 9 月 9 日，信息来源于各产品官方网站、官方文档及应用商店公开信息。',
    verifiedLabel: '最后核实',
    midCtaTitle: '需要的不止是终端？',
    midCtaBody: '体验集代码编辑、SSH、Git、终端与 AI 于一体的完整移动开发工作区。',
    midCtaButton: '了解 NimoteCode',
    bottomCtaTitle: '在 Android 上试用 NimoteCode',
    bottomCtaButton: 'Google Play',
    iosNote: 'iOS 正在 App Store 审核中——请在下载页查看当前可用性。',
    externalLabel: '在新标签页打开'
  }
} as const

export type ComparisonCopy = typeof comparisonCopy
