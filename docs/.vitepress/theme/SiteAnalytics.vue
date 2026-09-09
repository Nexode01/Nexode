<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'

type Gtag = (command: 'event', eventName: string, parameters: Record<string, string>) => void

function ctaLocation(link: HTMLAnchorElement): string {
  if (link.closest('.VPNav')) return 'navigation'
  if (link.closest('.nimote-site-footer')) return 'footer'
  if (link.closest('.home-page-hero')) return 'homepage_hero'
  if (link.closest('.home-page-cta')) return 'homepage_final_cta'
  if (link.closest('.seo-cta')) return 'seo_cta'
  if (link.closest('.home-page-video')) return 'homepage_demo'
  if (link.closest('.home-page-guide-grid')) return 'homepage_guides'
  return 'content_link'
}

function relatedContentClick(link: HTMLAnchorElement): boolean {
  if (link.closest('.blog-related-content')) return true

  // Detect "Related content" / "Related pages" / "Continue reading" style
  // sections generated from markdown (both EN and ZH headings). We find the
  // last heading that appears before the link in the page and check its label.
  const container = link.closest('.vp-doc') || document.body
  let lastHeading: HTMLElement | null = null
  for (const h of Array.from(container.querySelectorAll('h2, h3'))) {
    if ((h as HTMLElement).compareDocumentPosition(link) & Node.DOCUMENT_POSITION_FOLLOWING) break
    lastHeading = h as HTMLElement
  }
  if (!lastHeading) return false
  const label = (lastHeading.textContent || '').trim()
  return /^(related|explore related|continue reading|continue exploring|相关|继续阅读|继续探索|探索相关工作流)/i.test(label)
}

function isBlogPost(path: string): boolean {
  return /\/blog\//.test(path)
}

function isLandingProductPath(path: string): boolean {
  return /^\/(mobile-ide|ssh-ide|mobile-ai-coding|android-ide|remote-coding|code-from-phone|claude-code-from-phone|codex-from-phone|features|use-cases)/.test(path)
}

function eventFor(link: HTMLAnchorElement, sourcePath: string): string | null {
  const url = new URL(link.href, window.location.origin)

  if (url.hostname === 'play.google.com') {
    return 'android_store_click'
  }
  if (url.hostname === 'apps.apple.com') {
    return 'store_click'
  }
  if (link.closest('.home-page-guide-grid')) {
    return 'homepage_guide_click'
  }
  if (relatedContentClick(link)) {
    return 'related_content_click'
  }
  if (url.hostname === 'www.youtube.com' || url.pathname === '/demo') {
    return 'watch_demo'
  }
  if (url.pathname.endsWith('/docs/quick-start')) {
    return 'docs_start'
  }
  if (url.pathname.endsWith('/download')) {
    return link.closest('.seo-cta') ? 'seo_download_click' : 'download_click'
  }
  if (url.pathname.endsWith('/support') && url.searchParams.get('utm_campaign') === 'ios_availability') {
    return 'ios_availability_interest'
  }

  // A blog post linking onward to a product / landing page is an article-to-product conversion.
  if (isBlogPost(sourcePath) && isLandingProductPath(url.pathname)) {
    return 'article_to_product_click'
  }

  return null
}

function trackClick(event: MouseEvent) {
  const target = event.target
  if (!(target instanceof Element)) return

  const link = target.closest('a[href]') as HTMLAnchorElement | null
  if (!link || link.hasAttribute('data-no-track')) return

  const sourcePath = window.location.pathname
  const eventName = eventFor(link, sourcePath)
  const gtag = (window as unknown as { gtag?: Gtag }).gtag
  if (!eventName || !gtag) return

  const url = new URL(link.href, window.location.origin)
  gtag('event', eventName, {
    cta_location: ctaLocation(link),
    link_text: (link.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 100),
    destination_path: `${url.hostname}${url.pathname}`,
    campaign: url.searchParams.get('utm_campaign') || 'none',
    source_page: sourcePath
  })
}

onMounted(() => document.addEventListener('click', trackClick))
onBeforeUnmount(() => document.removeEventListener('click', trackClick))
</script>

<template>
  <!-- Interaction tracking is delegated at document level so Markdown CTAs,
       navigation, and future landing pages are measured without extra wiring. -->
  <span class="visually-hidden" aria-hidden="true" />
</template>
