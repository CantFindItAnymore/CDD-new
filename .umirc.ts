import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  title: false,
	links: [
		{ rel: 'icon', href: './icon.png' },
		{ rel: 'stylesheet', href: './reset.css' },
	],
});
