import React from "react";
import BlogCard from "./BlogCard";

const Listing = ({ posts, onClick, isLoading, pagination }) => {

    function chunkArray(array, size) {
        const chunks = [];
        for (let i = 0; i < array.length; i += size) {
            chunks.push(array.slice(i, i + size));
        }
        return chunks;
    }

    const chunkedPosts = chunkArray(posts, 3);

    return (
        <section id="more" className="pb-[5%] relative overflow-hidden w-screen h-full mobile:pb-[20%] mobile:pt-[15vw] mobile:h-full tablet:pb-[10%]">
            <div className="w-full px-[4%] tablet:px-[8%]">
                <div className="text-center flex flex-col items-center mb-[4vw]">
                    <h2 data-para-anim className="text-[2.7vw] font-light leading-[1.2] aeonik  mobile:text-[8vw] tablet:text-[5vw]">
                        More from AMS
                    </h2>
                </div>
                <div className="w-full h-auto mobile:h-full mobile:flex mobile:flex-col mobile:space-y-[18vw] tablet:h-full tablet:flex tablet:flex-col tablet:space-y-[8vw]">
                    {chunkedPosts.map((threePosts, chunkIndex) => (
                        <div key={chunkIndex} className="grid grid-cols-12 row-span-2 space-x-[2vw] tablet:space-x-0 mobile:space-x-0 gap-y-[4vw] mb-[5vw] mobile:mb-[18vw] tablet:mb-[8vw] tablet:flex-col tablet:flex mobile:flex-col mobile:flex">
                            {threePosts.map((post, index) => {
                                if (index === 0) {
                                    return (
                                        <div className="col-span-9 col-start-1 h-[50vw] row-span-2 row-start-1 mobile:py-[5vw] tablet:h-auto mobile:h-auto" key={post.slug}>
                                            <BlogCard
                                                title={post.title}
                                                link={post.slug}
                                                img={post.featuredImage.sourceUrl}
                                                para={post.excerpt}
                                                innertitle={post.postsFields.listingSubheading}
                                                large={true} />
                                        </div>
                                    );
                                } else if (index === 1) {
                                    return (
                                        <div className="col-span-3 col-start-10 h-fit row-start-1 row-span-1 mobile:py-[5vw] tablet:h-auto mobile:h-auto" key={post.slug}>
                                            <BlogCard
                                                title={post.title}
                                                link={post.slug}
                                                img={post.featuredImage.sourceUrl}
                                                para={post.excerpt}
                                                innertitle={post.postsFields.listingSubheading}
                                                large={false}
                                            />
                                        </div>
                                    );
                                } else if (index === 2) {
                                    return (
                                        <div className="col-span-3 col-start-10 h-fit row-start-2 row-span-1 mobile:py-[5vw] tablet:h-auto mobile:h-auto" key={post.slug}>
                                            <BlogCard
                                                title={post.title}
                                                link={post.slug}
                                                img={post.featuredImage.sourceUrl}
                                                para={post.excerpt}
                                                innertitle={post.postsFields.listingSubheading}
                                                large={false}
                                            />
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    ))}
                </div>

                {pagination && pagination.currentPage < pagination.pagesCount && (
                    <div className="w-full flex items-center justify-center mb-[5%]">
                        <button onClick={onClick} disabled={isLoading} className="link-btn">
                            <span className={`btn-text tablet:text-[2vw] tablet:mt-[-0.8vw]`}>See More</span>
                            <span className="btn-images">
                                <div>
                                    <svg viewBox="0 0 22 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.6437 15.9303C13.4217 15.9303 13.1998 15.8485 13.0246 15.6733C12.6858 15.3345 12.6858 14.7738 13.0246 14.4351L19.496 7.96366L13.0246 1.49228C12.6858 1.15352 12.6858 0.592823 13.0246 0.254067C13.3633 -0.0846889 13.924 -0.0846889 14.2628 0.254067L21.3533 7.34455C21.6921 7.68331 21.6921 8.24401 21.3533 8.58277L14.2628 15.6733C14.0876 15.8485 13.8656 15.9303 13.6437 15.9303Z" />
                                        <path d="M20.5356 8.83812L0.876093 8.83812C0.397162 8.83812 0 8.44096 0 7.96203C0 7.4831 0.397162 7.08594 0.876093 7.08594L20.5356 7.08594C21.0145 7.08594 21.4117 7.4831 21.4117 7.96203C21.4117 8.44096 21.0145 8.83812 20.5356 8.83812Z" />
                                    </svg>
                                    <svg viewBox="0 0 22 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.6437 15.9303C13.4217 15.9303 13.1998 15.8485 13.0246 15.6733C12.6858 15.3345 12.6858 14.7738 13.0246 14.4351L19.496 7.96366L13.0246 1.49228C12.6858 1.15352 12.6858 0.592823 13.0246 0.254067C13.3633 -0.0846889 13.924 -0.0846889 14.2628 0.254067L21.3533 7.34455C21.6921 7.68331 21.6921 8.24401 21.3533 8.58277L14.2628 15.6733C14.0876 15.8485 13.8656 15.9303 13.6437 15.9303Z" />
                                        <path d="M20.5356 8.83812L0.876093 8.83812C0.397162 8.83812 0 8.44096 0 7.96203C0 7.4831 0.397162 7.08594 0.876093 7.08594L20.5356 7.08594C21.0145 7.08594 21.4117 7.4831 21.4117 7.96203C21.4117 8.44096 21.0145 8.83812 20.5356 8.83812Z" />
                                    </svg>
                                </div>
                            </span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Listing;
