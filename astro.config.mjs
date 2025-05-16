// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightGiscus from 'starlight-giscus';

// https://astro.build/config
export default defineConfig({
	site: 'https://mojito-tech-blog.vercel.app/',
	integrations: [
		starlight({
			plugins: [
				starlightGiscus({
					repo: 'MojitoBar/tech-blog',
					repoId: 'R_kgDOOqh5Pw',
					category: 'General',
					categoryId: 'DIC_kwDOOqh5P84CqLcP',
				}),
			],
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
				{
					tag: 'meta',
					attrs: {
						name: 'google-site-verification',
						content: 'D9UkM4Wzh6zGyXKePHH21HM9W-7zFbOLoLq-sMLscWY',
					},
				},
			],
			customCss: ['./src/styles/global.css', './src/styles/card.css', './src/styles/custom.css', './src/fonts/font-face.css'],
		}),
	],
});

