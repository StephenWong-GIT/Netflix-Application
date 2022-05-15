// const key = '06fc11186bde62a2a9a9e217942082ff'

// const requests = {
//     requestPopular: 'https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1',
//     requestTopRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1',
//     requestTrending: 'https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2',
//     requestUpcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1',
// };

// export default requests

const requests = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '06fc11186bde62a2a9a9e217942082ff',
    originalImage: (imgPath) => 'https://image.tmdb.org/t/p/original/${imgPath}',
    w500Image: (imgPath) => 'https://image.tmdb.org/t/p/original/${imgPath}'
}

export default requests;