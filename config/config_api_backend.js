const BACKEND_API = "http://localhost:8000"


const EXTRACTIVE_DOCUMENTS = {
    UpComing: BACKEND_API + '/law/upcoming',
    CurrentIssued: BACKEND_API + '/law/current',
    ExtractiveDocuments: BACKEND_API + '/law'
}

export {
    EXTRACTIVE_DOCUMENTS,
    BACKEND_API
}


