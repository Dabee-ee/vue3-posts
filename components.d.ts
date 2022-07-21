// components.d.ts
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AppPagination: typeof import('./src/components/app/AppPagination.vue')['default'];
    RouterLink: typeof import('vue-router')['RouterLink'];
    RouterView: typeof import('vue-router')['RouterView'];
  }
}

export {};
