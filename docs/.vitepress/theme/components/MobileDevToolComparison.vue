<script setup lang="ts">
import { computed } from 'vue'
import {
  allCompetitors,
  categories,
  comparisonCopy,
  featureRows,
  type CellStatus,
  type Competitor,
  type FeatureCell,
  type FeatureRow,
  type Locale
} from '../data/mobileDevelopmentCompetitors'

const props = withDefaults(defineProps<{ lang?: Locale }>(), { lang: 'en' })

const t = computed(() => comparisonCopy[props.lang])
const products = allCompetitors

const statusSymbols: Record<CellStatus, string> = {
  yes: '✓',
  partial: '◐',
  no: '—',
  unknown: '?'
}

const statusLabels = computed<Record<CellStatus, string>>(() => ({
  yes: t.value.legend[0].label,
  partial: t.value.legend[1].label,
  no: t.value.legend[2].label,
  unknown: t.value.legend[3].label
}))

function cellFor(product: Competitor, row: FeatureRow): FeatureCell {
  switch (row.key) {
    case 'platform':
      return { status: 'no', text: product.platforms }
    case 'openSource':
      return { status: 'no', text: product.openSource }
    default:
      return product.features[row.key]
  }
}

function accessibleLabel(cell: FeatureCell): string {
  if (cell.text) return cell.text[props.lang]
  const base = statusLabels.value[cell.status]
  const note = cell.note?.[props.lang]
  return note ? `${base} — ${note}` : base
}

function noteText(cell: FeatureCell): string | undefined {
  if (cell.text) return undefined
  return cell.note?.[props.lang]
}

const sourceGroups = computed(() =>
  products.map((product) => ({
    id: product.id,
    name: product.name,
    lastVerified: product.lastVerified,
    sources: product.sources
  }))
)

const downloadUrl =
  'https://play.google.com/store/apps/details?id=com.nimote.nimotecode&utm_source=compare&utm_medium=website&utm_campaign=mobile_dev_tools_compare'
const downloadPageUrl =
  props.lang === 'zh'
    ? '/zh/download?utm_source=compare&utm_medium=website&utm_campaign=ios_availability'
    : '/download?utm_source=compare&utm_medium=website&utm_campaign=ios_availability'
const productUrl =
  props.lang === 'zh'
    ? '/zh/mobile-ide?utm_source=compare&utm_medium=website&utm_campaign=explore_nimotecode'
    : '/mobile-ide?utm_source=compare&utm_medium=website&utm_campaign=explore_nimotecode'
</script>

<template>
  <div class="cmp">
    <!-- Product categories -->
    <h2 :id="`categories-${lang}`">{{ t.categoriesHeading }}</h2>
    <div class="cmp-categories">
      <article v-for="category in categories" :key="category.id" class="cmp-category">
        <h3>{{ category.title[lang] }}</h3>
        <p>{{ category.description[lang] }}</p>
        <p class="cmp-category-examples">{{ category.examples }}</p>
      </article>
    </div>

    <!-- Comparison table -->
    <h2 :id="`table-${lang}`">{{ t.tableHeading }}</h2>
    <p>{{ t.tableIntro }}</p>

    <div class="cmp-legend" role="group" :aria-label="t.legendTitle">
      <p class="cmp-legend-title">{{ t.legendTitle }}</p>
      <ul class="cmp-legend-list">
        <li v-for="item in t.legend" :key="item.symbol">
          <span class="cmp-legend-symbol" aria-hidden="true">{{ item.symbol }}</span>
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </div>

    <div
      class="cmp-table-scroll"
      role="region"
      :aria-label="t.tableHeading"
      tabindex="0"
    >
      <table class="cmp-table">
        <thead>
          <tr>
            <th scope="col" class="cmp-feature-col">{{ lang === 'zh' ? '能力' : 'Capability' }}</th>
            <th
              v-for="product in products"
              :key="product.id"
              scope="col"
              :class="{ 'cmp-col-highlight': product.id === 'nimotecode' }"
            >
              {{ product.name }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in featureRows" :key="row.key">
            <th scope="row" class="cmp-feature-col">{{ row.label[lang] }}</th>
            <td
              v-for="product in products"
              :key="product.id"
              :class="[
                `cmp-cell-${cellFor(product, row).status}`,
                { 'cmp-col-highlight': product.id === 'nimotecode' }
              ]"
            >
              <template v-if="cellFor(product, row).text">
                <span class="cmp-text">{{ cellFor(product, row).text?.[lang] }}</span>
              </template>
              <template v-else>
                <span class="cmp-symbol" aria-hidden="true">{{ statusSymbols[cellFor(product, row).status] }}</span>
                <span class="sr-only">{{ accessibleLabel(cellFor(product, row)) }}</span>
                <span v-if="noteText(cellFor(product, row))" class="cmp-note" aria-hidden="true">{{ noteText(cellFor(product, row)) }}</span>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Which tool is right for you -->
    <h2 :id="`picks-${lang}`">{{ t.picksHeading }}</h2>
    <dl class="cmp-picks">
      <div v-for="product in products" :key="product.id" class="cmp-pick">
        <dt>{{ product.name }}</dt>
        <dd>{{ product.summary[lang] }}</dd>
      </div>
    </dl>

    <!-- Mid-page conversion -->
    <div class="seo-cta cmp-cta">
      <p><strong>{{ t.midCtaTitle }}</strong> {{ t.midCtaBody }}</p>
      <p class="seo-cta-actions">
        <a :href="productUrl" class="home-page-btn primary">{{ t.midCtaButton }}</a>
      </p>
    </div>

    <!-- Sources -->
    <h2 :id="`sources-${lang}`">{{ t.sourcesHeading }}</h2>
    <p>{{ t.sourcesIntro }}</p>
    <div class="cmp-sources">
      <section v-for="group in sourceGroups" :key="group.id" class="cmp-source-group">
        <h3>{{ group.name }}</h3>
        <ul>
          <li v-for="source in group.sources" :key="source.url">
            <a :href="source.url" target="_blank" rel="nofollow noopener noreferrer">
              {{ source.label }}
              <svg class="cmp-external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M14 4h6v6" />
                <path d="M20 4 10 14" />
                <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
              </svg>
              <span class="sr-only">({{ t.externalLabel }})</span>
            </a>
          </li>
        </ul>
        <p class="cmp-verified">{{ t.verifiedLabel }}: {{ group.lastVerified }}</p>
      </section>
    </div>

    <!-- Bottom conversion -->
    <div class="seo-cta cmp-cta cmp-cta-bottom">
      <p><strong>{{ t.bottomCtaTitle }}</strong></p>
      <p class="seo-cta-actions">
        <a :href="downloadUrl" class="home-page-btn primary" target="_blank" rel="noreferrer">{{ t.bottomCtaButton }}</a>
        <a :href="downloadPageUrl" class="home-page-btn secondary">{{ t.iosNote }}</a>
      </p>
    </div>

    <p class="cmp-disclaimer">{{ t.disclaimer }}</p>
  </div>
</template>
