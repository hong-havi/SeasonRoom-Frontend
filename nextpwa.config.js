const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
	reactStrictMode: true
}

module.exports = withPlugins(
	[
		[
			withPWA,
			{
				pwa: {
					dest: "public",
				},
			},
		],
    [
        typescript, 
        {
            typescriptLoaderOptions: {
                transpileOnly: false,
            },
        }
    ]
    // ...
	],
	nextConfig
);
