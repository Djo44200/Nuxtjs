import Vue from 'vue'

declare global {
  interface Window {
    Cypress: any
    store: any
  }
  namespace JSX {
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}

// declare module '@aws-amplify/ui';

declare module 'vue/types/vue' {
  interface Vue {}
}
