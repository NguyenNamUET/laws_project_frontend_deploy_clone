import axios from "../../.nuxt/axios";
import {EXTRACTIVE_DOCUMENTS} from '../../config/config_api_backend'


const getDocumentDetails = async (docId) => {
  try {
    let res = await axios.get(EXTRACTIVE_DOCUMENTS.DETAIL, {
      params: {
        'document_id': docId
      }
    })
    return res ? res.data : null
  } catch (e) {
    alert(e)
    return null
  }
}

export {
  getDocumentDetails
}
