<script setup>
import { useTheme } from 'vuetify'
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import upgradeBannerDark from '@images/pro/upgrade-banner-dark.png'
import upgradeBannerLight from '@images/pro/upgrade-banner-light.png'
import VerticalNavLayout from '@layouts/components/VerticalNavLayout.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'

const vuetifyTheme = useTheme()

const upgradeBanner = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? upgradeBannerLight : upgradeBannerDark
})
</script>

<template>
  <VerticalNavLayout>
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <!-- 👉 Vertical nav toggle in overlay mode -->
        <IconBtn
          class="ms-n3 d-lg-none"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon icon="bx-menu" />
        </IconBtn>

        <!-- 👉 Search -->
        <div
          class="d-flex align-center cursor-pointer"
          style="user-select: none;"
        >
          <!-- 👉 Search Trigger button -->
          <IconBtn>
            <VIcon icon="bx-search" />
          </IconBtn>

          <span class="d-none d-md-flex align-center text-disabled">
            <span class="me-3">Search</span>
            <span class="meta-key">&#8984;K</span>
          </span>
        </div>

        <VSpacer />

        <IconBtn
          class="me-2"
          href="https://github.com/themeselection/sneat-vuetify-vuejs-laravel-admin-template-free"
          target="_blank"
          rel="noopener noreferrer"
        >
          <VIcon icon="bxl-github" />
        </IconBtn>

        <IconBtn class="me-2">
          <VIcon icon="bx-bell" />
        </IconBtn>

        <NavbarThemeSwitcher class="me-2" />

        <UserProfile />
      </div>
    </template>

    <template #vertical-nav-content>
      <!-- START DASHBOARD PAGE -->
      <VerticalNavLink
        :item="{
          title: 'Dashboard',
          icon: 'bx-home',
          to: '/dashboard',
        }"
      />
      <!-- END DASHBOARD PAGE -->

      <!-- START ORDERS PAGE -->
      <VerticalNavLink
        :item="{
          title: 'Orders',
          icon: 'mdi-cart',
          to: '/account-settings',
        }"
      />
      <!-- END ORDERS PAGE -->

      <!-- START ACCESS PAGE -->
      <VerticalNavLink
        :item="{
          title: 'Access',
          icon: 'tabler:lock-access',
          to: '/access',
        }"
      />
      <!-- END ACCESS PAGE -->

      <!-- START CATEGORY PAGE -->
      <VerticalNavLink
        :item="{
          title: 'Categories',
          icon: 'tabler:category',
          to: '/category',
        }"
      />
      <!-- END CATEGORY PAGE -->

      <!-- START RANKING PAGE -->
      <VerticalNavLink
        :item="{
          title: 'Product ranking',
          icon: 'solar:ranking-linear',
          to: '/ranking',
        }"
      />
      <!-- END RANKING PAGE -->


      <!-- START PRODUCTS PAGE -->
      <VerticalNavLink
        :item="{
          title: 'Products',
          icon: 'icon-park-outline:ad-product',
          to: '/products',
        }"
      />
      <!-- END PRODUCTS PAGE -->

      <!-- START CACHE PAGE -->
      <VerticalNavLink
        :item="{
          title: 'Cache',
          icon: 'octicon:cache-16',
          to: '/cache',
        }"
      />
      <!-- END CACHE PAGE -->

      <!-- START ACTIONS PAGE -->
      <VerticalNavLink
        :item="{
          title: 'Actions',
          icon: 'ps:sale-tag',
          to: '/actions',
        }"
      />
      <!-- END ACTIONS PAGE -->

      <!-- START EDIT LINKS PAGE -->
      <VerticalNavLink
        :item="{
          title: 'Edit links',
          icon: 'dashicons:admin-links',
          to: '/url',
        }"
      />
      <!-- END EDIT LINKS PAGE -->

      <!-- START USERS PAGE -->
      <VerticalNavLink
        :item="{
          title: 'Users',
          icon: 'heroicons-outline:users',
          to: '/users',
        }"
      />
      <!-- END USERS PAGE -->

      <!-- START APPLICATIONS PAGE -->
      <VerticalNavLink
        :item="{
          title: 'Applications',
          icon: 'carbon:friendship',
          to: '/applications',
        }"
      />
      <!-- END APPLICATIONS PAGE -->

      <!-- START MARKETPLACE PAGE -->
      <VerticalNavLink
        :item="{
          title: 'Marketplace',
          icon: 'arcticons:app-market',
          to: '/marketplace',
        }"
      />
      <!-- END MARKETPLACE PAGE -->

      <!-- START PROMO CODES PAGE -->
      <VerticalNavLink
        :item="{
          title: 'Promo codes',
          icon: 'ps:promo',
          to: '/promo',
        }"
      />
      <!-- END PROMO CODES PAGE -->

      <!-- START SLIDERS,PAGES,FILES PAGE -->
      <VerticalNavLink
        :item="{
          title: 'Sliders,Pages,Files',
          icon: 'ci:file-blank',
          to: '/blank',
        }"
      />
      <!-- END SLIDERS,PAGES,FILES PAGE -->

      <!-- START SEO PAGE -->
      <VerticalNavLink
        :item="{
          title: 'SEO',
          icon: 'ri:seo-fill',
          to: '/seo',
        }"
      />
      <!-- END SEO PAGE -->

      <!-- START LANDING ORDERS PAGE -->
      <VerticalNavLink
        :item="{
          title: 'Landing Orders',
          icon: 'fluent-mdl2:activate-orders',
          to: '/lading-orders',
        }"
      />
      <!-- END LANDING ORDERS PAGE -->

      <!-- START CREATE BILL PAGE -->
      <VerticalNavLink
        :item="{
          title: 'Create Bill',
          icon: 'fa-solid:money-bill',
          to: '/create-bill',
        }"
      />
      <!-- END CREATE BILL PAGE -->

      <!-- 👉 Pages -->
      <VerticalNavSectionTitle
        :item="{
          heading: 'Pages',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Login',
          icon: 'bx-log-in',
          to: '/login',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Register',
          icon: 'bx-user-plus',
          to: '/register',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Error',
          icon: 'bx-info-circle',
          to: '/no-existence',
        }"
      />

      <!-- 👉 User Interface -->
      <VerticalNavSectionTitle
        :item="{
          heading: 'User Interface',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Typography',
          icon: 'mdi-alpha-t-box-outline',
          to: '/typography',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Icons',
          icon: 'bx-show',
          to: '/icons',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Cards',
          icon: 'bx-credit-card',
          to: '/cards',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Tables',
          icon: 'bx-table',
          to: '/tables',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Form Layouts',
          icon: 'mdi-form-select',
          to: '/form-layouts',
        }"
      />
    </template>

    <!-- 👉 Pages -->
    <slot />

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>
  </VerticalNavLayout>
</template>

<style lang="scss" scoped>
.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}
</style>
