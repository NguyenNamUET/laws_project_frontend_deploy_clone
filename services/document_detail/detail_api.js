import axios from "axios";
import {DOC_DETAIL} from "../../config/config_api_backend";

const GetDocumentDetail = async (law_id) => {
  try {
    let result = await axios.get(DOC_DETAIL.detail + law_id);
    return result.data
  } catch (e) {
    console.log(e);
    return null
  }
};

export {
  GetDocumentDetail
}
