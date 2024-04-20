import { useQuery } from '@tanstack/react-query';
import api from '../services/api';

const fetchBookList = async ({ querytype, start, maxResults, categoryId }) => {
  return await api.get(
    `/ItemList?listType=${querytype}&start=${start}&maxResults=${maxResults}&categoryId=${categoryId}`
  );
};

export const useBookListQuery = ({ querytype, start, maxResults, categoryId }) => {
  return useQuery({
    queryKey: ['Book-List', { querytype, start, maxResults, categoryId }],
    queryFn: () => fetchBookList({ querytype, start, maxResults, categoryId }),
    select: (result) => result.data
  });
};

const fetchNewSpecialBookList = async ({ querytypeNew, startNew, maxResultsNew, categoryIdNew }) => {
  return await api.get(
    `/ItemList?listType=${querytypeNew}&start=${startNew}&maxResults=${maxResultsNew}&categoryId=${categoryIdNew}`
  );
};
export const useNewSpecialBookListQuery = ({ querytypeNew, startNew, maxResultsNew, categoryIdNew }) => {
  return useQuery({
    queryKey: ['newSpecialBookList', { querytypeNew, startNew, maxResultsNew, categoryIdNew }],
    queryFn: () => fetchNewSpecialBookList({ querytypeNew, startNew, maxResultsNew, categoryIdNew }),
    select: (result) => result.data
  });
};

const fetchBookBlogBest = async ({ querytypeBlog, startBlog, maxResultsBlog, categoryIdBlog }) => {
  return await api.get(
    `/ItemList?listType=${querytypeBlog}&start=${startBlog}&maxResults=${maxResultsBlog}&categoryId=${categoryIdBlog}`
  );
};
export const useBookBlogBestQuery = ({ querytypeBlog, startBlog, maxResultsBlog, categoryIdBlog }) => {
  return useQuery({
    queryKey: ['BookBlogBest', { querytypeBlog, startBlog, maxResultsBlog, categoryIdBlog }],
    queryFn: () => fetchBookBlogBest({ querytypeBlog, startBlog, maxResultsBlog, categoryIdBlog }),
    select: (result) => result.data
  });
};

const fetchCategoryTotList = async ({ querytypeTot, startTot, maxResultsTot, categoryIdTot }) => {
  return await api.get(
    `/ItemList?listType=${querytypeTot}&start=${startTot}&maxResults=${maxResultsTot}&categoryId=${categoryIdTot}`
  );
};

export const useBookCategoryTotListQuery = ({ querytypeTot, startTot, maxResultsTot, categoryIdTot }) => {
  return useQuery({
    queryKey: ['CategoryTotList', { querytypeTot, startTot, maxResultsTot, categoryIdTot }],
    queryFn: () => fetchCategoryTotList({ querytypeTot, startTot, maxResultsTot, categoryIdTot }),
    select: (result) => result.data
  });
};

const fetchCategory1List = async ({ querytype1, start1, maxResults1, categoryId1 }) => {
  return await api.get(
    `/ItemList?listType=${querytype1}&start=${start1}&maxResults=${maxResults1}&categoryId=${categoryId1}`
  );
};

export const useBookCategory1ListQuery = ({ querytype1, start1, maxResults1, categoryId1 }) => {
  return useQuery({
    queryKey: ['Category1List', { querytype1, start1, maxResults1, categoryId1 }],
    queryFn: () => fetchCategory1List({ querytype1, start1, maxResults1, categoryId1 }),
    select: (result) => result.data
  });
};

const fetchCategory2List = async ({ querytype2, start2, maxResults2, categoryId2 }) => {
  return await api.get(
    `/ItemList?listType=${querytype2}&start=${start2}&maxResults=${maxResults2}&categoryId=${categoryId2}`
  );
};

export const useBookCategory2ListQuery = ({ querytype2, start2, maxResults2, categoryId2 }) => {
  return useQuery({
    queryKey: ['Category2List', { querytype2, start2, maxResults2, categoryId2 }],
    queryFn: () => fetchCategory2List({ querytype2, start2, maxResults2, categoryId2 }),
    select: (result) => result.data
  });
};

const fetchCategory3List = async ({ querytype3, start3, maxResults3, categoryId3 }) => {
  return await api.get(
    `/ItemList?listType=${querytype3}&start=${start3}&maxResults=${maxResults3}&categoryId=${categoryId3}`
  );
};

export const useBookCategory3ListQuery = ({ querytype3, start3, maxResults3, categoryId3 }) => {
  return useQuery({
    queryKey: ['Category3List', { querytype3, start3, maxResults3, categoryId3 }],
    queryFn: () => fetchCategory3List({ querytype3, start3, maxResults3, categoryId3 }),
    select: (result) => result.data
  });
};

const fetchCategory4List = async ({ querytype4, start4, maxResults4, categoryId4 }) => {
  return await api.get(
    `/ItemList?listType=${querytype4}&start=${start4}&maxResults=${maxResults4}&categoryId=${categoryId4}`
  );
};

export const useBookCategory4ListQuery = ({ querytype4, start4, maxResults4, categoryId4 }) => {
  return useQuery({
    queryKey: ['Category4List', { querytype4, start4, maxResults4, categoryId4 }],
    queryFn: () => fetchCategory4List({ querytype4, start4, maxResults4, categoryId4 }),
    select: (result) => result.data
  });
};

const fetchCategory5List = async ({ querytype5, start5, maxResults5, categoryId5 }) => {
  return await api.get(
    `/ItemList?listType=${querytype5}&start=${start5}&maxResults=${maxResults5}&categoryId=${categoryId5}`
  );
};

export const useBookCategory5ListQuery = ({ querytype5, start5, maxResults5, categoryId5 }) => {
  return useQuery({
    queryKey: ['Category5List', { querytype5, start5, maxResults5, categoryId5 }],
    queryFn: () => fetchCategory5List({ querytype5, start5, maxResults5, categoryId5 }),
    select: (result) => result.data
  });
};

const fetchCategory6List = async ({ querytype6, start6, maxResults6, categoryId6 }) => {
  return await api.get(
    `/ItemList?listType=${querytype6}&start=${start6}&maxResults=${maxResults6}&categoryId=${categoryId6}`
  );
};

export const useBookCategory6ListQuery = ({ querytype6, start6, maxResults6, categoryId6 }) => {
  return useQuery({
    queryKey: ['Category6List', { querytype6, start6, maxResults6, categoryId6 }],
    queryFn: () => fetchCategory6List({ querytype6, start6, maxResults6, categoryId6 }),
    select: (result) => result.data
  });
};

const fetchCategory7List = async ({ querytype7, start7, maxResults7, categoryId7 }) => {
  return await api.get(
    `/ItemList?listType=${querytype7}&start=${start7}&maxResults=${maxResults7}&categoryId=${categoryId7}`
  );
};

export const useBookCategory7ListQuery = ({ querytype7, start7, maxResults7, categoryId7 }) => {
  return useQuery({
    queryKey: ['Category7List', { querytype7, start7, maxResults7, categoryId7 }],
    queryFn: () => fetchCategory7List({ querytype7, start7, maxResults7, categoryId7 }),
    select: (result) => result.data
  });
};

const fetchCategory8List = async ({ querytype8, start8, maxResults8, categoryId8 }) => {
  return await api.get(
    `/ItemList?listType=${querytype8}&start=${start8}&maxResults=${maxResults8}&categoryId=${categoryId8}`
  );
};

export const useBookCategory8ListQuery = ({ querytype8, start8, maxResults8, categoryId8 }) => {
  return useQuery({
    queryKey: ['Category8List', { querytype8, start8, maxResults8, categoryId8 }],
    queryFn: () => fetchCategory8List({ querytype8, start8, maxResults8, categoryId8 }),
    select: (result) => result.data
  });
};
// const fetchBookList = async ({ querytype, start, maxResults, categoryId }) => {
//   const response = await api.get('/ItemList.aspx', {
//     params: {
//       QueryType: querytype,
//       MaxResults: maxResults,
//       start: start,
//       CategoryId: categoryId,
//       SearchTarget: 'Book'
//     }
//   });
//   return response.data;
// };

// export const useBookListQuery = ({ querytype, start, maxResults, categoryId }) => {
//   return useQuery({
//     queryKey: ['BookList', { querytype, start, maxResults, categoryId }],
//     queryFn: () => fetchBookList({ querytype, start, maxResults, categoryId })
//   });
// };
// const fetchNewSpecialBookList = async () => {
//   const response = await api.get('/ItemList.aspx', {
//     params: {
//       QueryType: 'ItemNewSpecial',
//       MaxResults: 10,
//       start: 1,
//       SearchTarget: 'Book',
//       output: 'JS',
//       Version: '20131101',
//       Cover: 'Big'
//     }
//   });
//   return response.data;
// };
// export const useNewSpecialBookListQuery = () => {
//   return useQuery({
//     queryKey: ['newSpecialBookList'],
//     queryFn: fetchNewSpecialBookList
//   });
// };

// const fetchBookBlogBest = async () => {
//   const response = await api.get('/ItemList.aspx', {
//     params: {
//       QueryType: 'BlogBest',
//       MaxResults: 20,
//       start: 1,
//       SearchTarget: 'Book',
//       output: 'JS',
//       Version: '20131101',
//       Cover: 'Big'
//     }
//   });
//   return response.data;
// };
// export const useBookBlogBestQuery = () => {
//   return useQuery({
//     queryKey: ['BookBlogBest'],
//     queryFn: fetchBookBlogBest
//   });
// };
