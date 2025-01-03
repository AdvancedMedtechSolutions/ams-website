import Genesis from "@/components/layoutComponents/Genesis";
import Hero from "@/components/Blogs/Hero";
import { fadeUp, paraAnim } from "@/components/gsapAnimations";
import Layout from "@/components/Layout";
import Insights from "@/components/Blogs/Insights";
import { getPaginatedPosts, sortStickyPosts } from "@/lib/posts";
import { useEffect, useState } from "react";
import Listing from "@/components/Blogs/Listing";
import MetaData from "@/components/Metadata";
import { WebpageJsonLd } from "@/lib/json-ld";
import { Media } from "@/components/media";
import BgVideo from "@/components/Layout/BgVideo";

export default function NewsPage({ initialPosts, featuredPosts, initialPagination }) {

  const [posts, setPosts] = useState(initialPosts);
  const [pagination, setPagination] = useState(initialPagination);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPageData, setNextPageData] = useState(null);

  fadeUp();
  paraAnim();

  const content = {
    heading: "Stories of Change",
    smallpara: "Stay connected with the latest updates, breakthrough innovations, and exciting events that drive our progress. From industry-leading advancements and strategic partnerships to impactful conferences and community initiatives, this page is your gateway to everything happening in our world. Join us as we share the stories that shape the future and inspire change.",
    bigpara: "Explore how we're driving meaningful change, guided by innovation, compassion, and a relentless dedication to improving lives. Whether it’s through revolutionary medical devices, empowering partnerships, or initiatives that bring care closer to communities, we are committed to creating a healthier tomorrow.  ",
    src: "/assets/blogs/blogs-genesis-bg.png",
  };

  const metadata = {
    title: "Newsroom - Insights from Advanced MedTech",
    description: "Explore healthcare trends, innovations, and expert opinions through our insightful blog posts.",
    img: "blogs.png",
    alt: "Newsroom - Insights from Advanced MedTech",
    slug: "newsroom",
    date_published: "2020-01-01T00:00",
    date_modified: "2024-12-26T12:32",
  };

  useEffect(() => {
    const prefetchNextPage = async () => {
      if (pagination.currentPage < pagination.pagesCount) {
        const nextPage = pagination.currentPage + 1;
        const res = await fetch(`/api/getPosts?page=${nextPage}`);
        const { posts: newPosts, pagination: newPagination } = await res.json();
        setNextPageData({ newPosts, newPagination });
      }
    };
    prefetchNextPage();
  }, [pagination]);

  const loadMorePosts = () => {
    setIsLoading(true);
    if (nextPageData && !isLoading) {
      setPosts((prevPosts) => [...prevPosts, ...nextPageData.newPosts]);
      setPagination(nextPageData.newPagination);
      setNextPageData(null);
      setIsLoading(false);
    }
  };

  return (
    <>
      <MetaData metadata={metadata} />
      <WebpageJsonLd metadata={metadata} />
      <Layout>
        <main>
          <Hero />
          <Genesis
            content={content}
            sParaWidth={"w-[30%] ml-[5%] mobile:ml-0 tablet:ml-0"}
            bParaWidth={"w-[60%]"}
          />
          <Insights posts={featuredPosts} />
          <Listing posts={posts} onClick={loadMorePosts} isLoading={isLoading} pagination={pagination} />
        </main>
      </Layout >
      <Media greaterThan="tablet">
        <BgVideo videoSrc={"/assets/bg-videos/original-bg.mp4"} />
      </Media>
    </>
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params || {};
  let { posts, pagination } = await getPaginatedPosts({
    queryIncludes: 'archive',
  });
  if (slug) {
    const { posts: filteredPosts, pagination: filteredPagination } = await getPaginatedPosts({
      queryIncludes: 'archive',
      categoryId: slug,
    });
    posts = filteredPosts;
    pagination = {
      ...filteredPagination,
      basePath: `/categories/${slug}/page`,
    };
  }
  posts = sortStickyPosts(posts);
  const featuredPosts = posts.filter((post) => post.isSticky) || null;
  posts = posts.filter((post) => !post.isSticky);
  return {
    props: {
      initialPosts: posts,
      featuredPosts,
      initialPagination: {
        ...pagination,
        basePath: slug ? `/categories/${slug}/page` : '/blog',
      },
    },
    revalidate: 10,
  };
}
