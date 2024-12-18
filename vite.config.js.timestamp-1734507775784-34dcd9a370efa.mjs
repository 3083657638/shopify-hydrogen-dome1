// vite.config.js
import { defineConfig } from "file:///C:/Users/yansw/Desktop/document/react/Hydrogen%20WeeklyHow%20Store%20dome1/hydrogen-dome12_18/node_modules/vite/dist/node/index.js";
import { hydrogen } from "file:///C:/Users/yansw/Desktop/document/react/Hydrogen%20WeeklyHow%20Store%20dome1/hydrogen-dome12_18/node_modules/@shopify/hydrogen/dist/vite/plugin.js";
import { oxygen } from "file:///C:/Users/yansw/Desktop/document/react/Hydrogen%20WeeklyHow%20Store%20dome1/hydrogen-dome12_18/node_modules/@shopify/mini-oxygen/dist/vite/plugin.js";
import { vitePlugin as remix } from "file:///C:/Users/yansw/Desktop/document/react/Hydrogen%20WeeklyHow%20Store%20dome1/hydrogen-dome12_18/node_modules/@remix-run/dev/dist/index.js";
import tsconfigPaths from "file:///C:/Users/yansw/Desktop/document/react/Hydrogen%20WeeklyHow%20Store%20dome1/hydrogen-dome12_18/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    hydrogen(),
    oxygen(),
    remix({
      presets: [hydrogen.preset()],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true
      }
    }),
    tsconfigPaths()
  ],
  build: {
    // Allow a strict Content-Security-Policy
    // withtout inlining assets as base64:
    assetsInlineLimit: 0
  },
  ssr: {
    optimizeDeps: {
      /**
       * Include dependencies here if they throw CJS<>ESM errors.
       * For example, for the following error:
       *
       * > ReferenceError: module is not defined
       * >   at /Users/.../node_modules/example-dep/index.js:1:1
       *
       * Include 'example-dep' in the array below.
       * @see https://vitejs.dev/config/dep-optimization-options
       */
      include: []
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx5YW5zd1xcXFxEZXNrdG9wXFxcXGRvY3VtZW50XFxcXHJlYWN0XFxcXEh5ZHJvZ2VuIFdlZWtseUhvdyBTdG9yZSBkb21lMVxcXFxoeWRyb2dlbi1kb21lMTJfMThcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHlhbnN3XFxcXERlc2t0b3BcXFxcZG9jdW1lbnRcXFxccmVhY3RcXFxcSHlkcm9nZW4gV2Vla2x5SG93IFN0b3JlIGRvbWUxXFxcXGh5ZHJvZ2VuLWRvbWUxMl8xOFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMveWFuc3cvRGVza3RvcC9kb2N1bWVudC9yZWFjdC9IeWRyb2dlbiUyMFdlZWtseUhvdyUyMFN0b3JlJTIwZG9tZTEvaHlkcm9nZW4tZG9tZTEyXzE4L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQge2h5ZHJvZ2VufSBmcm9tICdAc2hvcGlmeS9oeWRyb2dlbi92aXRlJztcclxuaW1wb3J0IHtveHlnZW59IGZyb20gJ0BzaG9waWZ5L21pbmktb3h5Z2VuL3ZpdGUnO1xyXG5pbXBvcnQge3ZpdGVQbHVnaW4gYXMgcmVtaXh9IGZyb20gJ0ByZW1peC1ydW4vZGV2JztcclxuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIGh5ZHJvZ2VuKCksXHJcbiAgICBveHlnZW4oKSxcclxuICAgIHJlbWl4KHtcclxuICAgICAgcHJlc2V0czogW2h5ZHJvZ2VuLnByZXNldCgpXSxcclxuICAgICAgZnV0dXJlOiB7XHJcbiAgICAgICAgdjNfZmV0Y2hlclBlcnNpc3Q6IHRydWUsXHJcbiAgICAgICAgdjNfcmVsYXRpdmVTcGxhdFBhdGg6IHRydWUsXHJcbiAgICAgICAgdjNfdGhyb3dBYm9ydFJlYXNvbjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgdHNjb25maWdQYXRocygpLFxyXG4gIF0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIC8vIEFsbG93IGEgc3RyaWN0IENvbnRlbnQtU2VjdXJpdHktUG9saWN5XHJcbiAgICAvLyB3aXRodG91dCBpbmxpbmluZyBhc3NldHMgYXMgYmFzZTY0OlxyXG4gICAgYXNzZXRzSW5saW5lTGltaXQ6IDAsXHJcbiAgfSxcclxuICBzc3I6IHtcclxuICAgIG9wdGltaXplRGVwczoge1xyXG4gICAgICAvKipcclxuICAgICAgICogSW5jbHVkZSBkZXBlbmRlbmNpZXMgaGVyZSBpZiB0aGV5IHRocm93IENKUzw+RVNNIGVycm9ycy5cclxuICAgICAgICogRm9yIGV4YW1wbGUsIGZvciB0aGUgZm9sbG93aW5nIGVycm9yOlxyXG4gICAgICAgKlxyXG4gICAgICAgKiA+IFJlZmVyZW5jZUVycm9yOiBtb2R1bGUgaXMgbm90IGRlZmluZWRcclxuICAgICAgICogPiAgIGF0IC9Vc2Vycy8uLi4vbm9kZV9tb2R1bGVzL2V4YW1wbGUtZGVwL2luZGV4LmpzOjE6MVxyXG4gICAgICAgKlxyXG4gICAgICAgKiBJbmNsdWRlICdleGFtcGxlLWRlcCcgaW4gdGhlIGFycmF5IGJlbG93LlxyXG4gICAgICAgKiBAc2VlIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvZGVwLW9wdGltaXphdGlvbi1vcHRpb25zXHJcbiAgICAgICAqL1xyXG4gICAgICBpbmNsdWRlOiBbXSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNmMsU0FBUSxvQkFBbUI7QUFDeGUsU0FBUSxnQkFBZTtBQUN2QixTQUFRLGNBQWE7QUFDckIsU0FBUSxjQUFjLGFBQVk7QUFDbEMsT0FBTyxtQkFBbUI7QUFFMUIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsT0FBTztBQUFBLElBQ1AsTUFBTTtBQUFBLE1BQ0osU0FBUyxDQUFDLFNBQVMsT0FBTyxDQUFDO0FBQUEsTUFDM0IsUUFBUTtBQUFBLFFBQ04sbUJBQW1CO0FBQUEsUUFDbkIsc0JBQXNCO0FBQUEsUUFDdEIscUJBQXFCO0FBQUEsTUFDdkI7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxFQUNoQjtBQUFBLEVBQ0EsT0FBTztBQUFBO0FBQUE7QUFBQSxJQUdMLG1CQUFtQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVdaLFNBQVMsQ0FBQztBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
