import { defineConfig } from 'wmr';

// Full list of options: https://wmr.dev/docs/configuration
export default defineConfig((options) => {
  const config = {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  };
  if (options.mode === 'start') {
    process.env.NODE_ENV = 'development';
  }
  return config;
});
