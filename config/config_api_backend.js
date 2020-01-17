const BACKEND_API = "localhost:5000"


const EXTRACTIVE_DOCUMENTS = {
    TOP: BACKEND_API + '/books/top',
    DETAIL: BACKEND_API + '/books/details',
    RATINGS: BACKEND_API + '/books/ratings',
    CATEGORIES: BACKEND_API + '/books/details/categories',
    RATINGSTAT: BACKEND_API + '/books/ratings/stat'
}

export {
    EXTRACTIVE_DOCUMENTS,
    BACKEND_API
}


