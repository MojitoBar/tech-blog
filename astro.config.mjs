// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightGiscus from 'starlight-giscus';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "Mojitobar's blog",
			description: '개발 블로그',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/mojitobar' },
				{ icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/%EB%8F%99%EC%84%9D-%EC%A3%BC-a70903204/' },
			],
			sidebar: [
				{
					label: 'Data Engineering Wiki',
					autogenerate: { directory: '/de-wiki' }
				},
			],
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						href: '/favicon.ico',
					},
				},
			],
			customCss: ['./src/styles/global.css', './src/styles/card.css', './src/styles/custom.css'],
		}),
		starlightGiscus({
			repo: 'YOUR_GITHUB_USERNAME/YOUR_REPO_NAME',
			repoId: 'YOUR_REPO_ID',
			category: 'YOUR_DISCUSSION_CATEGORY_NAME',
			categoryId: 'YOUR_CATEGORY_ID',
		}),
	],
});

