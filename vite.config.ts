import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(async () => {
  let locale = 'en-US';
  let currencyCode = 'USD';
  try {
    const ipGetResponse = await fetch('https://api.ipify.org?format=json');
    if (ipGetResponse.ok) {
      const ip = (await ipGetResponse.json())['ip'];
      const userLocaleGetResponse = await fetch(
        `http://usercountry.com/v1.0/json/${ip}`,
      );
      if (userLocaleGetResponse.ok) {
        const userLocale = await userLocaleGetResponse.json();
        currencyCode = userLocale['currency']['code'];
      }
    }
  } catch (error) {
    console.error(error);
  }

  return {
    plugins: [react(), tsconfigPaths()],
    define: {
      DEFAULT_LOCALE: JSON.stringify(locale),
      DEFAULT_CURRENCY_CODE: JSON.stringify(currencyCode),
    },
    test: {
      includeSource: ['src/**/*.{js,ts}'],
      globals: true,
      environment: 'jsdom',
    },
  };
});
