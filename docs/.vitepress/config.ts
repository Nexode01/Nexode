import { defineConfig, type HeadConfig, type TransformContext } from 'vitepress'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { product, productCopy } from './theme/product'

const siteUrl = 'https://nimotecode.com'
const brandLogo = `${siteUrl}/app_icon.png`
const socialImage = `${siteUrl}/screenshots/NimoteCode_Promotion.jpg`
const localeConfig = {
  root: { lang: 'en-US', path: '' },
  zh: { lang: 'zh-CN', path: '/zh' }
} as const

function normalizePath(path: string): string {
  if (!path || path === 'index.md' || path === '/index.md') return '/'
  let normalized = path
    .replace(/\\/g, '/')
    .replace(/(^|\/)index\.md$/, '$1')
    .replace(/\.md$/, '')
  if (!normalized.startsWith('/')) normalized = `/${normalized}`
  normalized = normalized.replace(/\/+/g, '/')
  return normalized === '' ? '/' : normalized
}

function canonicalUrl(path: string): string {
  const normalized = normalizePath(path)
  return normalized === '/' ? siteUrl : `${siteUrl}${normalized}`
}

function pageCanonicalUrl(context: TransformContext): string {
  const explicit = asContent(context.pageData.frontmatter.canonical, '')
  return explicit || canonicalUrl(context.pageData.relativePath)
}

function asContent(value: unknown, fallback: string): string {
  if (typeof value === 'string' && value.trim()) return value
  return fallback
}

function pageDescription(context: TransformContext, title: string): string {
  const explicit = asContent(context.pageData.frontmatter.description, '')
  if (explicit) return explicit

  const normalizedTitle = title.trim()
  if (!normalizedTitle || normalizedTitle === 'NimoteCode') {
    return asContent(context.siteConfig.site.description, 'NimoteCode mobile developer workspace.')
  }

  return `${normalizedTitle} page on NimoteCode, the Mobile AI Development Workspace for SSH, terminal, Git, AI Chat and Agent, debugging, tasks, and sync/cache workflows.`
}

function stripLocalePrefix(path: string): string {
  return path.replace(/^\/zh(?=\/|$)/, '') || '/'
}

function titleCase(value: string): string {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function languageForPath(path: string): string {
  const localeKey = pageLocaleKey(path)
  if (localeKey === 'zh') return 'zh-CN'
  return 'en-US'
}

function openGraphLocale(path: string): string {
  return languageForPath(path).replace('-', '_')
}

function localeAlternates(path: string): HeadConfig[] {
  const normalized = normalizePath(path)
  const suffix = normalized === '/' ? '' : normalized
  const stripped = suffix.replace(/^\/zh(\/|$)/, '/')
  const entries = Object.values(localeConfig).flatMap((locale) => {
    const localePath = `${locale.path}${stripped}` || '/'
    const href = localePath === '/' ? siteUrl : `${siteUrl}${localePath}`
    const sourceRelativePath = localePath.replace(/^\//, '')
    const sourcePath = !sourceRelativePath || sourceRelativePath.endsWith('/')
      ? `${sourceRelativePath}index.md`
      : `${sourceRelativePath}.md`

    // Do not advertise a translated URL unless the page actually exists.
    // This matters for English-only SEO landing pages and avoids hreflang 404s.
    if (!existsSync(resolve(process.cwd(), 'docs', sourcePath))) return []
    return [['link', { rel: 'alternate', hreflang: locale.lang, href }] as HeadConfig]
  })
  const englishPath = stripped || '/'
  const englishHref = englishPath === '/' ? siteUrl : `${siteUrl}${englishPath}`
  entries.push(['link', { rel: 'alternate', hreflang: 'x-default', href: englishHref }])
  return entries
}

function pageSchemas(context: TransformContext): object[] {
  const url = pageCanonicalUrl(context)
  const title = asContent(context.pageData.frontmatter.title, asContent(context.pageData.title, 'NimoteCode'))
  const description = pageDescription(context, title)
  const inLanguage = languageForPath(context.pageData.relativePath)

  const schemas: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'NimoteCode',
      url: siteUrl,
      logo: brandLogo,
      sameAs: [
        'https://github.com/mobiledevloperlab',
        'https://x.com/mobiledevlab'
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'NimoteCode',
      url: siteUrl,
      description: websiteDescription(inLanguage),
      inLanguage
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description,
      url,
      inLanguage
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'NimoteCode',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Android',
      url: siteUrl,
      image: socialImage,
      description: 'Mobile AI development workspace with code editor, SSH terminal, Git, AI Chat and Agent, LSP, debugger, tasks and sync/cache.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        category: 'Freemium'
      }
    }
  ]

  const normalizedPath = normalizePath(context.pageData.relativePath)
  if (normalizedPath !== '/') {
    const isBlogPost = normalizedPath.startsWith('/blog/') && normalizedPath !== '/blog/'
    const datePublished = asContent(context.pageData.frontmatter.date, '')
    const dateModified = asContent(context.pageData.frontmatter.lastUpdated, datePublished)
    const authorName = asContent(context.pageData.frontmatter.author, 'NimoteCode Team')
    const article: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': isBlogPost ? 'BlogPosting' : 'TechArticle',
      headline: title,
      description,
      url,
      author: {
        '@type': 'Organization',
        name: authorName
      },
      publisher: {
        '@type': 'Organization',
        name: 'NimoteCode',
        logo: {
          '@type': 'ImageObject',
          url: brandLogo
        }
      }
    }

    if (isBlogPost && datePublished) {
      article.datePublished = datePublished
      article.dateModified = dateModified
      article.mainEntityOfPage = {
        '@type': 'WebPage',
        '@id': url
      }
      article.image = asContent(context.pageData.frontmatter.image, socialImage)
    }

    schemas.push(article)
  }

  if (context.pageData.frontmatter.noindex === true) {
    return schemas
  }

  const breadcrumb = breadcrumbSchema(context)
  if (breadcrumb) {
    schemas.push(breadcrumb)
  }

  const faq = faqSchema(context)
  if (faq) {
    schemas.push(faq)
  }

  const video = videoSchema(context)
  if (video) {
    schemas.push(video)
  }

  return schemas
}

function videoSchema(context: TransformContext): object | null {
  const value = context.pageData.frontmatter.video
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null

  const video = value as Record<string, unknown>
  const name = asContent(video.name, '')
  const description = asContent(video.description, '')
  const thumbnailUrl = asContent(video.thumbnailUrl, '')
  const uploadDate = asContent(video.uploadDate, '')
  const contentUrl = asContent(video.contentUrl, '')

  if (!name || !description || !thumbnailUrl || !uploadDate || !contentUrl) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    contentUrl,
    embedUrl: asContent(video.embedUrl, contentUrl),
    url: pageCanonicalUrl(context),
    publisher: {
      '@type': 'Organization',
      name: 'NimoteCode',
      logo: {
        '@type': 'ImageObject',
        url: brandLogo
      }
    }
  }
}

function breadcrumbSchema(context: TransformContext): object | null {
  const normalized = normalizePath(context.pageData.relativePath)
  const localePrefix = normalized.match(/^\/zh(?=\/|$)/)?.[0] ?? ''
  const stripped = stripLocalePrefix(normalized)
  if (stripped === '/') return null

  const segments = stripped.split('/').filter(Boolean)
  if (segments.length === 0) return null

  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: localePrefix ? `${siteUrl}${localePrefix}` : siteUrl
    }
  ]

  let currentUrl = localePrefix ? `${siteUrl}${localePrefix}` : siteUrl
  segments.forEach((segment, index) => {
    currentUrl = `${currentUrl}/${segment}`
    const isLast = index === segments.length - 1
    const label = isLast ? asContent(context.pageData.title, titleCase(segment)) : titleCase(segment)

    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name: label,
      item: currentUrl
    })
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  }
}

function faqSchema(context: TransformContext): object | null {
  const normalized = normalizePath(context.pageData.relativePath)
  const faqEntries: Record<string, Array<{ question: string, answer: string }>> = {
    '/docs/faq': [
      {
        question: 'Is NimoteCode only an SSH client?',
        answer: 'No. NimoteCode can open a local project or an SSH workspace, and brings Explorer, Editor, Terminal, Git workflows, AI assistance and diagnostic panels into the same project context.'
      },
      {
        question: 'Can I use it without Pro?',
        answer: `Yes. Free includes local and SSH workspaces, the editor, baseline terminal, AI Chat and basic Tasks. AI Agent and remote search are available during the ${productCopy.en.trial} and with Pro.`
      },
      {
        question: 'Which AI providers can I configure?',
        answer: 'The app includes 14 built-in provider templates and supports compatible custom endpoints. Provider availability, model access and cost are determined by your own provider account and settings.'
      },
      {
        question: 'What does Source Control support?',
        answer: 'All users can inspect repository status, diffs and history. Pro is required for gated Git write workflows such as commits, pushes and stash actions.'
      },
      {
        question: 'Are Tasks local or remote?',
        answer: 'Tasks are designed for repeatable command workflows in an SSH workspace. Make the host, project root and risk of each command clear before running it.'
      },
      {
        question: 'Do LSP and Debug work for every project?',
        answer: 'They depend on a compatible language server or debug adapter being configured on the remote host and on the project setup. They are Pro workflows.'
      }
    ],
    '/zh/docs/faq': [
      {
        question: 'NimoteCode 只是 SSH Client 吗？',
        answer: '不是。NimoteCode 可打开本地项目或 SSH 工作区，并将 Explorer、编辑器、Terminal、Git 工作流、AI 协助与诊断面板放到同一项目上下文中。'
      },
      {
        question: '不购买 Pro 能使用吗？',
        answer: `可以。免费版包含本地与 SSH 工作区、编辑器、基础终端、AI Chat 和基础 Tasks。AI Agent 与远程内容搜索可在${productCopy.zh.trial}期间使用，也可通过 Pro 使用。`
      },
      {
        question: '可配置哪些 AI Provider？',
        answer: '应用提供 14 个内置 Provider 模板，也支持兼容的自定义端点。具体模型访问与费用由你的 Provider 账户和配置决定。'
      },
      {
        question: 'Source Control 支持什么？',
        answer: '所有用户都可查看仓库状态、diff 与历史。提交、推送和 stash 等受限 Git 写入工作流需要 Pro。'
      },
      {
        question: 'Tasks 是本地还是远程运行？',
        answer: 'Tasks 面向 SSH 工作区中的可复用命令流程。运行前请在任务名称中明确主机、项目根目录和风险等级。'
      },
      {
        question: 'LSP 和 Debug 所有项目都能用吗？',
        answer: '这取决于远程主机是否已配置兼容的语言服务或调试适配器，以及项目本身的启动设置。两者均属于 Pro 功能。'
      }
    ],
    '/mobile-ide': [
      {
        question: 'Is NimoteCode just an SSH client?',
        answer: 'No. It combines Editor, Explorer, SSH, Terminal, Git and AI Agent in one mobile development workspace.'
      },
      {
        question: 'Can I work on a remote project from a phone or tablet?',
        answer: 'Yes. Connect to a remote project through SSH, inspect files, edit code, run terminal commands and review Git changes in the same workspace.'
      },
      {
        question: 'Is NimoteCode available for Android and iOS?',
        answer: 'NimoteCode is currently available for Android. The public iOS App Store release is being prepared; check the download page for current availability.'
      }
    ],
    '/ssh-ide': [
      {
        question: 'What is an SSH IDE?',
        answer: 'An SSH IDE adds project browsing, code editing, terminal commands and Git review around an SSH connection so you can work on a remote codebase, not only run shell commands.'
      },
      {
        question: 'Can I review Git changes after editing over SSH?',
        answer: 'Yes. NimoteCode keeps Source Control next to the remote workspace so you can inspect diffs and use supported Git workflows before shipping a change.'
      },
      {
        question: 'When is an SSH IDE better than a terminal-only client?',
        answer: 'Choose an SSH IDE when the task includes locating files, editing code, running verification commands and reviewing a diff. A terminal-only client may be enough for command-only work.'
      }
    ],
    '/mobile-ai-coding': [
      {
        question: 'How is mobile AI coding different from a standalone AI chat?',
        answer: 'NimoteCode keeps AI Chat and Agent alongside the editor, project Explorer, SSH terminal and Git context, so suggestions can be inspected and verified in the real workspace.'
      },
      {
        question: 'Can AI Agent make changes in a remote workspace?',
        answer: 'AI Agent can assist multi-step tasks, but remote and production-adjacent work should be reviewed with command and change controls enabled.'
      },
      {
        question: 'Does AI replace Git review?',
        answer: 'No. AI can help explain, plan and assist a task; Git review and appropriate test or verification commands remain part of the delivery workflow.'
      }
    ],
    '/zh/mobile-ide': [
      {
        question: 'NimoteCode 只是 SSH 客户端吗？',
        answer: '不是。NimoteCode 把编辑器、Explorer、SSH、终端、Git 与 AI Agent 结合在同一个移动开发工作区中。'
      },
      {
        question: '能用手机或平板处理远程项目吗？',
        answer: '可以。通过 SSH 连接远程项目，在同一个工作区中检查文件、编辑代码、运行终端命令并审查 Git 改动。'
      },
      {
        question: 'NimoteCode 支持 Android 和 iOS 吗？',
        answer: 'NimoteCode 目前提供 Android 版。公开的 iOS App Store 版本正在准备中，请查看下载页确认当前可用性。'
      }
    ],
    '/zh/ssh-ide': [
      {
        question: '什么是 SSH IDE？',
        answer: 'SSH IDE 在 SSH 连接之上加入项目浏览、代码编辑、终端命令与 Git 审查，让你可以处理远程代码库，而不仅是运行 Shell 命令。'
      },
      {
        question: '通过 SSH 编辑后能审查 Git 改动吗？',
        answer: '可以。NimoteCode 会把源代码管理与远程工作区放在一起，发布改动前可查看 diff 并使用受支持的 Git 工作流。'
      },
      {
        question: '什么时候 SSH IDE 比纯终端客户端更好？',
        answer: '当任务包含定位文件、编辑代码、运行验证命令与审查 diff 时，选择 SSH IDE。纯命令类工作用终端客户端也许就够了。'
      }
    ],
    '/zh/mobile-ai-coding': [
      {
        question: '移动 AI 编程和独立 AI 聊天有何不同？',
        answer: 'NimoteCode 把 AI Chat 与 Agent 放在编辑器、项目 Explorer、SSH 终端和 Git 上下文旁边，因此建议可以在真实工作区中被检查和验证。'
      },
      {
        question: 'AI Agent 能在远程工作区中改动吗？',
        answer: 'AI Agent 可以协助多步骤任务，但远程与接近生产的改动应在开启命令与变更控制的情况下审查后执行。'
      },
      {
        question: 'AI 会取代 Git 审查吗？',
        answer: '不会。AI 帮助解释、规划与协助任务，而 Git 审查与适当的测试或验证命令仍然是交付流程的一部分。'
      }
    ],
    '/claude-code-from-phone': [
      {
        question: 'Do I need NimoteCode to use Claude Code on my phone?',
        answer: 'No. NimoteCode is a mobile workspace that keeps the surrounding project work connected over SSH — Explorer, editor, terminal and Git review — while Claude Code itself runs and authenticates on your own development host.'
      },
      {
        question: 'Does NimoteCode run Claude Code for me?',
        answer: 'No. NimoteCode is not the Claude Code product and does not replace its setup. You install and authenticate Claude Code on the remote host, then use the SSH terminal to start or continue a session.'
      },
      {
        question: 'Can I run Claude Code from a phone without a remote computer?',
        answer: 'Not with this workflow. Claude Code runs on a host you reach by SSH, so a phone connects to that host rather than running the agent locally.'
      }
    ],
    '/codex-from-phone': [
      {
        question: 'Do I need NimoteCode to use Codex from my phone?',
        answer: 'No. NimoteCode is the mobile workspace around a remote Codex session — Explorer, editor, SSH terminal and Git review — while Codex is installed and authenticated on your own development host.'
      },
      {
        question: 'Is Codex an official partner of NimoteCode?',
        answer: 'No. Codex is an external coding agent. NimoteCode does not claim an official partnership or that it proxies Codex; you run Codex on the remote host and work around it over SSH.'
      },
      {
        question: 'Can I use an AI assistant in NimoteCode instead of Codex?',
        answer: 'Yes. NimoteCode has its own AI Chat and Agent workflows with provider configuration, which can be used in addition to, or instead of, a remote Codex session.'
      }
    ],
    '/android-ide': [
      {
        question: 'Can you do real development on an Android phone or tablet?',
        answer: 'Yes, for a focused set of tasks. With an Android IDE like NimoteCode you can connect over SSH to a development machine, browse the project, edit files, run terminal commands, review Git changes and use AI assistance — especially for fixes, reviews and small features.'
      },
      {
        question: 'Is NimoteCode available on iOS too?',
        answer: 'NimoteCode is currently available for Android. The public iOS App Store release is being prepared; check the download page for current availability.'
      },
      {
        question: 'Can Android run heavy local builds or full IDEs?',
        answer: 'Not the same way a desktop does. Long local compilation and large multi-file refactors are better on a desktop; on Android, remote development over SSH to your existing machine is usually the productive path.'
      }
    ],
    '/remote-coding': [
      {
        question: 'What does remote coding mean in practice?',
        answer: 'Remote coding means editing and running the project on one machine while you interact from another. The most common setup is a phone or tablet connecting over SSH to your desktop, laptop or server and working in the real repository.'
      },
      {
        question: 'Is remote coding over SSH slow?',
        answer: 'Interactive editing over SSH is generally responsive on a good connection. Heavy operations — large builds, full reindexing, or long-running compiles — are subject to your network and the remote host, and are often better left to the desktop.'
      },
      {
        question: 'Do I need the project files on my phone?',
        answer: 'No. With an SSH workspace the project stays on the remote host. Your phone streams file edits, terminal output and Git data from that machine instead of duplicating the repository.'
      }
    ],
    '/code-from-phone': [
      {
        question: 'Is it realistic to code from a phone?',
        answer: 'Yes for focused work: investigating an issue, making a small fix, running commands, reviewing a diff or driving an AI agent on your existing project. Long-form feature work and heavy compilation remain more comfortable on a desktop.'
      },
      {
        question: 'How do I actually code from a phone?',
        answer: 'The reliable pattern is to connect to your own development machine over SSH with a mobile development workspace, then browse, edit, run and review the real project — instead of copying files or snippets between apps.'
      },
      {
        question: 'Which phones can run NimoteCode?',
        answer: 'NimoteCode is available for Android phones and tablets from the current Android release. Check the download page for platform requirements and iOS status.'
      }
    ],
    '/zh/claude-code-from-phone': [
      {
        question: '用手机使用 Claude Code 需要 NimoteCode 吗？',
        answer: '不需要。NimoteCode 是通过 SSH 把周边项目工作连接起来的移动工作区——Explorer、编辑器、终端与 Git 审查——而 Claude Code 本身在你自己的开发主机上运行并完成认证。'
      },
      {
        question: 'NimoteCode 会替我运行 Claude Code 吗？',
        answer: '不会。NimoteCode 不是 Claude Code 产品，也不会替代其配置。你需要自行在远程主机上安装并认证 Claude Code，然后用 SSH 终端启动或继续会话。'
      },
      {
        question: '没有远程电脑能在手机上运行 Claude Code 吗？',
        answer: '这个工作流不行。Claude Code 运行在你通过 SSH 访问的主机上，手机只是连接该主机，而不是在本地运行 Agent。'
      }
    ],
    '/zh/codex-from-phone': [
      {
        question: '用手机使用 Codex 需要 NimoteCode 吗？',
        answer: '不需要。NimoteCode 是远程 Codex 会话周边的移动工作区——Explorer、编辑器、SSH 终端与 Git 审查——而 Codex 在你自己的开发主机上安装并认证。'
      },
      {
        question: 'Codex 是 NimoteCode 的官方合作伙伴吗？',
        answer: '不是。Codex 是外部编码代理。NimoteCode 不声称与其有官方合作，也不代理 Codex；你在远程主机上运行 Codex，并通过 SSH 围绕它工作。'
      },
      {
        question: '我可以在 NimoteCode 里用它的 AI 助手代替 Codex 吗？',
        answer: '可以。NimoteCode 自带 AI Chat 与 Agent 工作流并支持提供商配置，既可以配合远程 Codex 会话使用，也可以单独使用。'
      }
    ],
    '/zh/android-ide': [
      {
        question: '能在 Android 手机或平板上做真实开发吗？',
        answer: '可以，针对一组聚焦的任务。使用像 NimoteCode 这样的 Android IDE，你可以通过 SSH 连接开发机、浏览项目、编辑文件、运行终端命令、审查 Git 改动并使用 AI 辅助——尤其是修复、审查与小功能。'
      },
      {
        question: 'NimoteCode 也支持 iOS 吗？',
        answer: 'NimoteCode 目前提供 Android 版。公开的 iOS App Store 版本正在准备中，请查看下载页确认当前可用性。'
      },
      {
        question: 'Android 能运行重型本地构建或完整 IDE 吗？',
        answer: '和桌面不一样。长时间的本地编译与大规模跨文件重构更适合桌面；在 Android 上，通过 SSH 远程连接你现有的机器通常是更高效的选择。'
      }
    ],
    '/zh/remote-coding': [
      {
        question: '远程编程在实践中意味着什么？',
        answer: '远程编程意味着在一台机器上编辑和运行项目，从另一台机器操作。最常见的是手机或平板通过 SSH 连接你的桌面、笔记本或服务器，在真实仓库中工作。'
      },
      {
        question: '通过 SSH 远程编程会卡吗？',
        answer: '在良好的连接下，SSH 上的交互式编辑通常很流畅。重型操作——大构建、全量重建索引或长时间编译——受网络与远程主机影响，通常更适合留给桌面。'
      },
      {
        question: '手机上需要项目文件吗？',
        answer: '不需要。使用 SSH 工作区时，项目保留在远程主机上。你的手机从该机器流式获取文件编辑、终端输出与 Git 数据，而不是复制一份仓库。'
      }
    ],
    '/zh/code-from-phone': [
      {
        question: '用手机写代码现实吗？',
        answer: '对聚焦的工作是现实的：排查问题、做一处小修复、运行命令、审查 diff，或在你的现有项目上驱动 AI Agent。长篇功能开发与重型编译仍然更适合桌面。'
      },
      {
        question: '我到底该怎么用手机写代码？',
        answer: '可靠的模式是用一个移动开发工作区通过 SSH 连接你自己的开发机，然后浏览、编辑、运行并审查真实项目——而不是在应用之间复制文件或代码片段。'
      },
      {
        question: '哪些手机可以运行 NimoteCode？',
        answer: 'NimoteCode 从当前 Android 版本起支持 Android 手机与平板。请查看下载页了解平台要求与 iOS 状态。'
      }
    ]
  }

  const entries = faqEntries[normalized]
  if (!entries) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: entry.answer
      }
    }))
  }
}

// Load the primary UI font asynchronously so it never blocks first paint.
// The fallback stack in tokens.css renders immediately, and the web font
// swaps in once the stylesheet finishes loading.
const FONT_LATIN = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600&display=swap'
const FONT_ZH = 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700;800&display=swap'

function fontByLocale(lang: string): string {
  if (lang.startsWith('zh')) return FONT_ZH
  return FONT_LATIN
}

function fontLinks(path: string): HeadConfig[] {
  const normalized = normalizePath(path)
  const stripped = suffixToLocaleKey(normalized)
  const lang = stripped === 'zh' ? 'zh-CN' : 'en-US'
  const href = fontByLocale(lang)
  return [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    // Async pattern: stylesheet is print-only until the browser swaps it to all.
    // This keeps the font off the critical render path.
    ['link', { rel: 'preload', as: 'style', href }],
    ['link', { rel: 'stylesheet', href, media: 'print', onload: "this.media='all'" }],
    // noscript fallback so the font still works without JS.
    ['noscript', {}, `<link rel="stylesheet" href="${href}">`]
  ]
}

function suffixToLocaleKey(normalized: string): string {
  const m = normalized.match(/^\/(zh)(?:\/|$)/)
  return m ? m[1] : ''
}

function pageLocaleKey(path: string): string {
  const normalized = normalizePath(path)
  return suffixToLocaleKey(normalized)
}

function websiteDescription(inLanguage: string): string {
  if (inLanguage === 'zh-CN') {
    return 'NimoteCode 是面向移动场景的 AI 开发工作区：集代码编辑器、SSH 终端、Git、AI Chat 与 Agent、LSP、调试器、任务与同步/缓存于一体。'
  }
  return 'NimoteCode is a Mobile AI Development Workspace for Android: code editor, SSH terminal, Git, AI Chat and Agent, LSP, debugger, tasks and sync/cache.'
}

export default defineConfig({
  title: 'NimoteCode',
  titleTemplate: false,
  description: 'NimoteCode is a mobile AI development workspace: an SSH-enabled code editor with terminal, Git, AI Agent, LSP, debugger, tasks and sync/cache.',
  base: '/',
  lang: 'en-US',
  cleanUrls: true,
  // These retired workflow URLs are retained as 301 redirects in public/_redirects
  // so existing articles and external links continue to resolve to the single demo.
  ignoreDeadLinks: [/^\/(?:zh\/)?use-cases\/(?:remote-hotfix|on-call-diagnostics|ai-agent)\/?$/],
  sitemap: {
    hostname: siteUrl
  },
  transformHead(context) {
    const url = pageCanonicalUrl(context)
    const title = asContent(context.pageData.frontmatter.title, asContent(context.pageData.title, 'NimoteCode'))
    const description = pageDescription(context, title)
    const image = asContent(context.pageData.frontmatter.image, socialImage)
    const isPageNotFound = normalizePath(context.pageData.relativePath) === '/404'
    const noIndex = isPageNotFound || context.pageData.frontmatter.noindex === true
    const robotsContent = noIndex
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

    return [
      ['link', { rel: 'canonical', href: url }],
      ...fontLinks(context.pageData.relativePath),
      ['meta', { property: 'og:site_name', content: 'NimoteCode' }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:image', content: image }],
      ['meta', { property: 'og:image:alt', content: `${title} — NimoteCode` }],
      ['meta', { property: 'og:locale', content: openGraphLocale(context.pageData.relativePath) }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: image }],
      ['meta', { name: 'twitter:site', content: '@nimotecode' }],
      ['meta', { name: 'robots', content: robotsContent }],
      ['meta', { name: 'author', content: 'NimoteCode' }],
      ['meta', { name: 'apple-mobile-web-app-title', content: 'NimoteCode' }],
      ['script', { type: 'application/ld+json' }, JSON.stringify(pageSchemas(context))],
      ...(noIndex ? [] : localeAlternates(context.pageData.relativePath))
    ]
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'icon', href: '/app_icon.png', type: 'image/png' }],
    ['link', { rel: 'apple-touch-icon', href: '/app_icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'theme-color', content: '#4f46e5' }],
    ['meta', { name: 'theme-color', content: '#4338ca', media: '(prefers-color-scheme: dark)' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'format-detection', content: 'telephone=no' }],
  ],

  themeConfig: {
    siteTitle: 'NimoteCode',
    logo: {
      light: '/app_icon.png',
      dark: '/app_icon.png'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mobiledevloperlab' },
      { icon: 'twitter', link: 'https://x.com/mobiledevlab' },
      { icon: 'discord', link: 'https://discord.gg/tTxbpqYmhR' }
    ],
    editLink: {
      pattern: 'https://github.com/mobiledevloperlab/nimote_issues/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Product', link: '/features' },
          { text: 'Workflows', link: '/use-cases/' },
          { text: 'Docs', link: '/docs/quick-start' },
          { text: 'Mobile Developer Lab', link: '/blog/' },
          { text: 'Download', link: '/download?utm_source=navigation&utm_medium=website&utm_campaign=primary_nav' }
        ],
        sidebar: {
          '/blog/': [
            {
              text: 'Guides',
              collapsed: false,
              items: [
                { text: 'All Guides', link: '/blog/' },
                { text: 'The Best Mobile IDEs in 2026: What to Look For', link: '/blog/best-mobile-ides' },
                { text: 'How to Use Android as a Remote IDE with Tailscale and NimoteCode: Free SSH Access to Mac and Linux', link: '/blog/tailscale-ssh-android-mac-linux' }
              ]
            },
            {
              text: 'Build Log',
              collapsed: false,
              items: [
                { text: 'Why I Built a Mobile IDE', link: '/blog/why-i-decided-to-build-a-mobile-ide-instead-of-another-ai-app' },
                { text: 'SSH + Mobile Coding Is Still Broken', link: '/blog/ssh-mobile-coding-is-still-broken-so-i-built-my-own-ide' },
                { text: 'Flutter Code Editors Broke Down', link: '/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide' },
                { text: 'Is Local Heavy Compilation Dead?', link: '/blog/is-local-heavy-compilation-dead-the-rise-of-2026-ai-agentic-mobile-ides' },
                { text: '~90% AI-Generated Code, 6 Months', link: '/blog/i-built-a-mobile-ide-with-90-ai-generated-code-but-it-still-took-me-6-months' },
                { text: 'Agent Design Is Bounded Optimization', link: '/blog/agent-design-is-bounded-optimization-not-intelligence' },
                { text: 'Can an AI Agent Code From a Phone?', link: '/blog/can-an-ai-agent-really-code-from-a-phone' }
              ]
            }
          ],
          '/docs/': [
            {
              text: 'Start',
              items: [
                { text: 'Quick Start', link: '/docs/quick-start' }
              ]
            },
            {
              text: 'Daily Workflow',
              collapsed: false,
              items: [
                { text: 'Workspaces', link: '/docs/ssh' },
                { text: 'Editor', link: '/docs/editor' },
                { text: 'Terminal', link: '/docs/terminal' },
                { text: 'Search', link: '/docs/search' },
                { text: 'Source Control', link: '/docs/source-control' },
                { text: 'Tasks', link: '/docs/tasks' }
              ]
            },
            {
              text: 'AI and Diagnostics',
              collapsed: false,
              items: [
                { text: 'AI Chat and Agent', link: '/docs/ai' },
                { text: 'LSP', link: '/docs/lsp' },
                { text: 'Debug', link: '/docs/debug' },
                { text: 'Sync / Cache', link: '/docs/sync-cache' }
              ]
            },
            {
              text: 'Reference',
              collapsed: false,
              items: [
                { text: 'Account and Subscription', link: '/docs/account-subscription' },
                { text: 'Security and Safety', link: '/docs/security' },
                { text: 'Settings', link: '/docs/settings' },
                { text: 'Notifications', link: '/docs/notifications' },
                { text: 'Configuration', link: '/docs/configuration' },
                { text: 'FAQ', link: '/docs/faq' }
              ]
            }
          ],
          '/use-cases/': [
            {
              text: 'Workflows',
              collapsed: false,
              items: [
                { text: 'AI Agent Build Demo', link: '/use-cases/' },
                { text: 'Mobile Workspace Demo', link: '/use-cases/mobile-workspace-demo' },
                { text: 'Terminal AI Tools', link: '/use-cases/terminal-ai-tools' }
              ]
            }
          ]
        },
        search: {
          provider: 'local'
        }
      }
    },

    zh: {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '产品', link: '/zh/features' },
          { text: '工作流', link: '/zh/use-cases/' },
          { text: '文档', link: '/zh/docs/quick-start' },
          { text: '移动开发实验室', link: '/zh/blog/' },
          { text: '下载', link: '/zh/download?utm_source=navigation&utm_medium=website&utm_campaign=primary_nav' }
        ],
        sidebar: {
          '/zh/blog/': [
            {
              text: '指南',
              collapsed: false,
              items: [
                { text: '全部指南', link: '/zh/blog/' },
                { text: '2026 年最好的移动 IDE：应该看什么', link: '/zh/blog/best-mobile-ides' },
                { text: '如何使用 Android 作为远程 IDE：借助 Tailscale 和 NimoteCode 免费 SSH 访问 Mac 与 Linux', link: '/zh/blog/tailscale-ssh-android-mac-linux' }
              ]
            },
            {
              text: '构建日志',
              collapsed: false,
              items: [
                { text: '为什么我选择做移动 IDE', link: '/zh/blog/why-i-decided-to-build-a-mobile-ide-instead-of-another-ai-app' },
                { text: 'SSH + 移动编程仍然破碎', link: '/zh/blog/ssh-mobile-coding-is-still-broken-so-i-built-my-own-ide' },
                { text: 'Flutter 编辑器为何崩坏', link: '/zh/blog/why-existing-flutter-code-editors-broke-down-when-i-built-a-mobile-ide' },
                { text: '本地重型编译会消失吗', link: '/zh/blog/is-local-heavy-compilation-dead-the-rise-of-2026-ai-agentic-mobile-ides' },
                { text: '约 90% AI 代码仍花 6 个月', link: '/zh/blog/i-built-a-mobile-ide-with-90-ai-generated-code-but-it-still-took-me-6-months' },
                { text: 'Agent 设计是有界优化', link: '/zh/blog/agent-design-is-bounded-optimization-not-intelligence' },
                { text: 'AI Agent 能在手机编程吗', link: '/zh/blog/can-an-ai-agent-really-code-from-a-phone' }
              ]
            }
          ],
          '/zh/docs/': [
            {
              text: '开始使用',
              items: [
                { text: '快速入门', link: '/zh/docs/quick-start' }
              ]
            },
            {
              text: '日常开发',
              collapsed: false,
              items: [
                { text: '本地与 SSH 工作区', link: '/zh/docs/ssh' },
                { text: '编辑器', link: '/zh/docs/editor' },
                { text: '终端使用', link: '/zh/docs/terminal' },
                { text: '远程搜索', link: '/zh/docs/search' },
                { text: 'Source Control 工作流', link: '/zh/docs/source-control' },
                { text: 'Tasks 面板', link: '/zh/docs/tasks' }
              ]
            },
            {
              text: 'AI 与诊断',
              collapsed: false,
              items: [
                { text: 'AI Chat 与 Agent', link: '/zh/docs/ai' },
                { text: 'LSP 面板', link: '/zh/docs/lsp' },
                { text: '调试面板', link: '/zh/docs/debug' },
                { text: 'Sync / Cache 面板', link: '/zh/docs/sync-cache' }
              ]
            },
            {
              text: '参考',
              collapsed: false,
              items: [
                { text: '账户与订阅', link: '/zh/docs/account-subscription' },
                { text: '安全与防护', link: '/zh/docs/security' },
                { text: '设置', link: '/zh/docs/settings' },
                { text: '通知', link: '/zh/docs/notifications' },
                { text: '配置', link: '/zh/docs/configuration' },
                { text: '常见问题', link: '/zh/docs/faq' }
              ]
            }
          ],
          '/zh/use-cases/': [
            {
              text: '工作流',
              collapsed: false,
              items: [
                { text: 'AI Agent 构建演示', link: '/zh/use-cases/' },
                { text: '移动工作区演示', link: '/zh/use-cases/mobile-workspace-demo' },
                { text: '终端 AI 工具', link: '/zh/use-cases/terminal-ai-tools' }
              ]
            }
          ]
        },
        search: {
          provider: 'local'
        }
      }
    }
  },

  outDir: './.vitepress/dist',
  assetsDir: './assets',

  vite: {
    plugins: [
      ViteImageOptimizer({
        test: /\.(jpe?g|png|gif|webp|avif)$/i,
        exclude: [
          'app_icon.png',
          'favicon.ico'
        ],
        includePublic: true,
        cache: true,
        cacheLocation: 'node_modules/.vite-image-optimizer',
        logStats: true,
        ansiColors: true,
        svg: {
          multipass: true
        },
        png: {
          quality: 80,
          compressionLevel: 9
        },
        jpeg: {
          quality: 80
        },
        webp: {
          quality: 80
        }
      })
    ]
  }
})
