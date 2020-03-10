const sitemap = require('nextjs-sitemap-generator');  
const withSass = require('@zeit/next-sass');
const isProd = process.env.NODE_ENV === 'production';

sitemap({  
    baseUrl: 'https://snipcart-nextjs-seo.netlify.com',  
    pagesDirectory: __dirname + "/pages",  
    targetDirectory : 'static/'  
});

module.exports = withSass({
    exportPathMap: function () {
        return {
        '/': { page: '/' },
        }
    },
    env: {
        ApiUrlStrapi: isProd? 'https://back-office.sky-media.dk/' : 'http://localhost:1337/',
     }
});
