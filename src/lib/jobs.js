/* eslint-disable no-undef */
import { getApolloClient } from './apollo-client';

import {
    QUERY_ALL_JOBS_INDEX,
    QUERY_ALL_JOBS_ARCHIVE,
    QUERY_ALL_JOBS,
} from '../data/jobs';

/**
 * getAllJobs
 */

const allJobsIncludesTypes = {
  all: QUERY_ALL_JOBS,
  archive: QUERY_ALL_JOBS_ARCHIVE,
  index: QUERY_ALL_JOBS_INDEX,
};

export async function getAllJobs(options = {}) {
  const { queryIncludes = 'index' } = options;

  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: allJobsIncludesTypes[queryIncludes],
  });

  const jobs = data?.data.jobs.edges.map(({ node = {} }) => node);

  return {
    jobs: Array.isArray(jobs) && jobs.map(mapJobData),
  };
}

/**
 * mapJobData
 */

export function mapJobData(job = {}) {
  const data = { ...job };
  
  return data;
}