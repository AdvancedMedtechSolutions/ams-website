import { gql } from "@apollo/client";

export const JOB_FIELDS = gql`
  fragment JobFields on Job {
    id
    slug
    title
    content
    jobfields {
      category
      location
    }
  }
`;

export const QUERY_ALL_JOBS_INDEX = gql`
  ${JOB_FIELDS}
  query AllJobsIndex {
    jobs(first: 1000, where: { hasPassword: false }) {
      edges {
        node {
          ...JobFields
        }
      }
    }
  }
`;

export const QUERY_ALL_JOBS_ARCHIVE = gql`
  ${JOB_FIELDS}
  query AllJobsArchive {
    jobs(first: 1000, where: { hasPassword: false }) {
      edges {
        node {
          ...JobFields
        }
      }
    }
  }
`;

export const QUERY_ALL_JOBS = gql`
  ${JOB_FIELDS}
  query AllJobs {
    jobs(first: 1000, where: { hasPassword: false }) {
      edges {
        node {
          ...JobFields
        }
      }
    }
  }
`;
