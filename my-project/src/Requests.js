const key = 'cbafecd6c166b7d4cdbf288f5d4616f5'

const requests = {
    requestPopular: 'https://api.themoviedb.org/3/movie/550?api_key=cbafecd6c166b7d4cdbf288f5d4616f5',
    requestTopRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1',
    requestTrending: 'https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2',
    requestUpcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1',
};

export default requests