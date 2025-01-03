import Layout from '@/components/Layout';
import { getPostBySlug, getRecentPosts } from '@/lib/posts';
import Image from 'next/image';
import styles from '@/styles/blog.module.css';
import { fadeUp, paraAnim } from '@/components/gsapAnimations';
import { NextSeo } from 'next-seo';
import { ArticleJsonLd } from '@/lib/json-ld';

export default function NewsDetail({ post }) {

    const { content, postsFields, metaImage, metaDescription, metaTitle, slug } = post;
    
    fadeUp();
    paraAnim();

    return (
        <>
            <NextSeo
                title={metaTitle}
                description={metaDescription}
                openGraph={{
                    type: 'article',
                    url: `https://www.amsltd.com/${slug}`,
                    title: metaTitle,
                    "description": metaDescription,
                    images: [
                        {
                            url: metaImage.sourceUrl,
                            width: metaImage.mediaDetails.width,
                            height: metaImage.mediaDetails.height,
                            alt: metaImage.mediaDetails.alt,
                            type: "image/webp",
                        },
                    ],
                    siteName: "AMS Ltd.",
                }}
                additionalMetaTags={[
                    {
                        name: "twitter:title",
                        content: metaTitle
                    },
                    {
                        name: "twitter:description",
                        content: metaDescription
                    },
                    {
                        name: "twitter:image",
                        content: metaImage.sourceUrl
                    },
                ]}
                canonical={`https://www.amsltd.com/${slug}`}
                languageAlternates={[{
                    hrefLang: 'en-US',
                    href: `https://www.amsltd.com/${slug}`,
                }]}
            />
            <ArticleJsonLd post={post} />
            <Layout>
                <main>
                    <section className='hero-container dark' id='hero'>
                        <div className='h-screen w-screen tablet:h-[70vh] mobile:h-[75vw] overflow-hidden'>
                            <Image className='h-full w-full object-cover brightness-75' src={postsFields.heroImage.node.sourceUrl} alt={postsFields.heroImage.node.altText} priority={true} width={1920} height={1080} />
                        </div>
                    </section>
                    <section id='news-content'>
                        <div className='w-[88%] mx-auto pb-[10%] pt-[5%] tablet:pt-[10%] mobile:w-[90%] mobile:pb-[15%]'>
                            <h1 data-para-anim className='text-center w-3/4 tablet:w-full mobile:w-full mx-auto mb-[3vw] text-[3.2vw] font-light leading-[1.3] text-[#1a1a1a] aeonik mobile:text-[7.2vw] mobile:py-[3vw] tablet:text-[5vw] tablet:pb-[4vw]'>{post.postsFields.customTitle}</h1>
                            <div className='fadeUp'>
                                <div className={styles.blog} dangerouslySetInnerHTML={{ __html: content }} />
                            </div>
                        </div>
                    </section>
                </main>
            </Layout>
        </>
    )
}

export async function getStaticProps({ params = {} } = {}) {
    const { slug: postSlug } = params;
    const { post } = await getPostBySlug(postSlug);

    if (!post) {
        return {
            props: {},
            notFound: true,
        };
    }

    const props = {
        post,
    };

    return {
        props,
        revalidate: 10,
    };
}

export async function getStaticPaths() {
    const { posts } = await getRecentPosts({
        count: process.env.POSTS_PRERENDER_COUNT,
        queryIncludes: 'index',
    });

    const paths = posts
        .filter(({ slug }) => typeof slug === 'string')
        .map(({ slug }) => ({
            params: {
                slug: slug,
            },
        }));

    return {
        paths,
        fallback: 'blocking',
    };
}