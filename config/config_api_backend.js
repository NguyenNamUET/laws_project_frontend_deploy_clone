const BACKEND_API = "https://floating-river-10954.herokuapp.com/";


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


