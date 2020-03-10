import Head from 'next/head'

const HeadSection = ({SEO}) => {
    return(
        <Head>
            {SEO.Title? 
                <title>{SEO.Title}</title> 
                :
                ''
            }
            {SEO.Description? 
                <meta name="description" content={SEO.Description} />
                :
                ''
            }
            {SEO.og_title? 
                <meta name="og:title" property="og:title" content={SEO.og_title} />
                :
                ''
            }
            {SEO.og_description? 
                <meta name="og:description" property="og:description" content={SEO.og_description} />
                :
                ''
            }
            {SEO.og_sitename? 
                <meta property="og:site_name" content={SEO.og_sitename} />
                :
                ''
            }
            {SEO.og_url? 
                <meta property="og:url" content={SEO.og_url} />
                :
                ''
            }
            {SEO.og_image? 
                <meta property="og:image" content={SEO.og_image.url} />
                :
                ''
            }
            {SEO.keywords? 
                <meta name="keywords" content ={SEO.keywords} />
                :
                ''
            }
        </Head>
    )
}

export default HeadSection;