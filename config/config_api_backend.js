const BACKEND_API = "https://fathomless-lake-29352.herokuapp.com";


const EXTRACTIVE_DOCUMENTS = {
    UpComing: BACKEND_API + '/laws/upcoming/',
    Expired: BACKEND_API + '/laws/expiry/',
    ExtractiveDocuments: BACKEND_API + '/laws/',
};

const DOC_DETAIL = {
    detail: BACKEND_API + '/laws/',
};

export {
    EXTRACTIVE_DOCUMENTS,
    BACKEND_API,
    DOC_DETAIL
}


