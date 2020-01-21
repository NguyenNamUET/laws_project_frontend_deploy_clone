const BACKEND_API = "http://localhost:8000"


const EXTRACTIVE_DOCUMENTS = {
    UpComing: BACKEND_API + '/laws/upcoming',
    CurrentIssued: BACKEND_API + '/laws/current',
    ExtractiveDocuments: BACKEND_API + '/laws'
}

const DOC_DETAIL = {
    detail: BACKEND_API + '/laws/',
}

export {
    EXTRACTIVE_DOCUMENTS,
    BACKEND_API,
    DOC_DETAIL
}


