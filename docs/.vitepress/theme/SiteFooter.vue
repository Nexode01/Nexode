<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()

const localePrefix = computed(() => {
  const match = route.path.match(/^\/zh(?=\/|$)/)
  return match?.[0] ?? ''
})

const isChinese = computed(() => localePrefix.value === '/zh')

const copy = computed(() => isChinese.value ? {
  positioning: '移动 AI 开发工作台：Editor + Explorer + SSH + Terminal + Git + AI Agent。',
  product: '产品',
  features: '功能特性',
  workflows: '使用场景',
  docs: '文档',
  download: '下载',
  explore: '探索',
  guides: '使用指南',
  changelog: '更新日志',
  social: '关注我们',
  youtube: 'YouTube',
  x: 'X / Twitter',
  github: 'GitHub',
  demo: '观看演示',
  company: '帮助与隐私',
  support: '支持',
  privacy: '隐私政策',
  terms: '服务条款',
  deletion: '账号删除',
  note: '为开发者的移动时刻而构建。',
  exploreLinks: [
    { text: '移动 IDE', href: '/mobile-ide' },
    { text: 'Android IDE', href: '/android-ide' },
    { text: 'SSH IDE', href: '/ssh-ide' },
    { text: '远程编程', href: '/remote-coding' },
    { text: '用手机写代码', href: '/code-from-phone' },
    { text: '移动 AI 编程', href: '/mobile-ai-coding' },
    { text: '使用指南', href: '/blog/' },
    { text: '观看演示', href: '/demo?utm_source=footer&utm_medium=website&utm_campaign=demo' }
  ]
} : {
  positioning: 'Mobile AI Development Workspace: Editor + Explorer + SSH + Terminal + Git + AI Agent.',
  product: 'Product',
  features: 'Features',
  workflows: 'Workflows',
  docs: 'Documentation',
  download: 'Download',
  explore: 'Explore',
  guides: 'Guides',
  changelog: 'What’s New',
  social: 'Follow',
  youtube: 'YouTube',
  x: 'X / Twitter',
  github: 'GitHub',
  demo: 'Watch demo',
  company: 'Support & Privacy',
  support: 'Support',
  privacy: 'Privacy',
  terms: 'Terms',
  deletion: 'Account deletion',
  note: 'Built for developers on the move.',
  exploreLinks: [
    { text: 'Mobile IDE', href: '/mobile-ide' },
    { text: 'Android IDE', href: '/android-ide' },
    { text: 'SSH IDE', href: '/ssh-ide' },
    { text: 'Remote Coding', href: '/remote-coding' },
    { text: 'Code from a Phone', href: '/code-from-phone' },
    { text: 'Mobile AI Coding', href: '/mobile-ai-coding' },
    { text: 'Guides', href: '/blog/' },
    { text: 'Watch demo', href: '/demo?utm_source=footer&utm_medium=website&utm_campaign=demo' }
  ]
})

function localized(path: string) {
  return `${localePrefix.value}${path}` || '/'
}
</script>

<template>
  <footer class="nimote-site-footer">
    <div class="nimote-site-footer-content">
      <div class="nimote-site-footer-inner">
        <section class="nimote-footer-brand" aria-label="NimoteCode">
          <a class="nimote-footer-logo" :href="localized('/')">
            <img src="/app_icon.png" alt="" width="40" height="40">
            <span>NimoteCode</span>
          </a>
          <p>{{ copy.positioning }}</p>
        </section>

        <nav :aria-label="copy.product">
          <h2>{{ copy.product }}</h2>
          <a :href="localized('/features')">{{ copy.features }}</a>
          <a :href="localized('/use-cases/')">{{ copy.workflows }}</a>
          <a :href="localized('/docs/quick-start')">{{ copy.docs }}</a>
          <a :href="localized('/download?utm_source=footer&utm_medium=website&utm_campaign=navigation')">{{ copy.download }}</a>
        </nav>

        <nav :aria-label="copy.explore">
          <h2>{{ copy.explore }}</h2>
          <a v-for="link in copy.exploreLinks" :key="link.href" :href="localized(link.href)">{{ link.text }}</a>
        </nav>

        <nav :aria-label="copy.social">
          <h2>{{ copy.social }}</h2>
          <a href="https://www.youtube.com/watch?v=gW2wFNIBNws" target="_blank" rel="noreferrer">{{ copy.youtube }}</a>
          <a href="https://x.com/mobiledevlab" target="_blank" rel="noreferrer">{{ copy.x }}</a>
          <a href="https://github.com/mobiledevloperlab" target="_blank" rel="noreferrer">{{ copy.github }}</a>
          <a :href="localized('/blog/')">{{ copy.guides }}</a>
          <a :href="localized('/changelog')">{{ copy.changelog }}</a>
        </nav>

        <nav :aria-label="copy.company">
          <h2>{{ copy.company }}</h2>
          <a :href="localized('/support')">{{ copy.support }}</a>
          <a :href="localized('/privacy')">{{ copy.privacy }}</a>
          <a :href="localized('/terms')">{{ copy.terms }}</a>
          <a :href="localized('/account-delete')">{{ copy.deletion }}</a>
        </nav>
      </div>
      <div class="nimote-site-footer-meta">
        <span>{{ copy.note }}</span>
        <span>Copyright © 2026 NimoteCode. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>
