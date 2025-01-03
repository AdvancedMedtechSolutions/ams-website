import { gql } from "@apollo/client";

export const POST_FIELDS = gql`
  fragment PostFields on Post {
    id
    featuredImage {
      node {
        altText
        sourceUrl
      }
    }
    postsFields {
      listingSubheading
    }
    databaseId
    isSticky
    slug
    title
  }
`;

export const QUERY_ALL_POSTS_INDEX = gql`
  ${POST_FIELDS}
  query AllPostsIndex {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_ALL_POSTS_ARCHIVE = gql`
  ${POST_FIELDS}
  query AllPostsArchive {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
          excerpt
        }
      }
    }
  }
`;

export const QUERY_ALL_POSTS = gql`
  ${POST_FIELDS}
  query AllPosts {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
          excerpt
        }
      }
    }
  }
`;

export const QUERY_POST_BY_SLUG = gql`
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      content
      modified
      databaseId
      title
      slug
      postsFields {
        customTitle
        listingSubheading
        heroImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
`;

export const QUERY_POST_SEO_BY_SLUG = gql`
  query PostSEOBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      seo {
        metaDesc
        title
        opengraphImage {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
`;

export const QUERY_POST_PER_PAGE = gql`
  query PostPerPage {
    allSettings {
      readingSettingsPostsPerPage
    }
  }
`;

export const GET_HOME_PAGE_POSTS = gql`
  query postsforHomePage {
    posts(first: 4) {
      nodes {
        featuredImage {
          node {
            sourceUrl
          }
        }
        id
        slug
        title
        date
      }
    }
  }
`;
