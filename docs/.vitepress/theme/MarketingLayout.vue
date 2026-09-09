<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, watch } from 'vue'
import { useData, useRoute } from 'vitepress'
import NotFound from 'vitepress/dist/client/theme-default/NotFound.vue'
import VPHome from 'vitepress/dist/client/theme-default/components/VPHome.vue'
import VPNav from 'vitepress/dist/client/theme-default/components/VPNav.vue'
import VPSkipLink from 'vitepress/dist/client/theme-default/components/VPSkipLink.vue'
import SiteAnalytics from './SiteAnalytics.vue'
import SiteFooter from './SiteFooter.vue'

const { frontmatter, page } = useData()

/* Scroll reveal ---------------------------------------------------------
   Elements carrying `data-reveal` fade/slide in as they enter the viewport.
   The hidden state is gated on an `html.js` class that this setup only adds
   when JavaScript is available AND the user has not asked for reduced motion,
   so content is always reachable without JS or with motion preferences. */
let revealObserver: IntersectionObserver | null = null

function setupReveal(): void {
  if (typeof window === 'undefined') return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
  if (!els.length) return

  document.documentElement.classList.add('js')

  if (revealObserver) revealObserver.disconnect()
  revealObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const el = entry.target as HTMLElement
        el.classList.add('is-revealed')
        revealObserver?.unobserve(el)
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  )

  const viewport = window.innerHeight
  for (const el of els) {
    const rect = el.getBoundingClientRect()
    if (rect.top < viewport * 0.92) {
      el.classList.add('is-revealed')
    } else {
      revealObserver.observe(el)
    }
  }
}

const route = useRoute()
onMounted(() => {
  setupReveal()
  watch(
    () => route.path,
    () => nextTick(setupReveal)
  )
})
onBeforeUnmount(() => revealObserver?.disconnect())
</script>

<template>
  <SiteAnalytics />
  <div v-if="frontmatter.layout !== false" class="Layout nimote-marketing-layout" :class="frontmatter.pageClass">
    <VPSkipLink />
    <VPNav />
    <main id="VPContent" class="nimote-marketing-main">
      <NotFound v-if="page.isNotFound" />
      <VPHome v-else-if="frontmatter.layout === 'home'" />
      <div v-else class="nimote-marketing-doc">
        <Content class="vp-doc" />
      </div>
    </main>
    <SiteFooter />
  </div>
  <Content v-else />
</template>
