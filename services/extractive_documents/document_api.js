import axios from 'axios'
import {EXTRACTIVE_DOCUMENTS} from '../../config/config_api_backend'


const GetExtractiveDocs = async () => {
  try {
    let res = await axios.get(EXTRACTIVE_DOCUMENTS.ExtractiveDocuments);
    console.log(res.data);
    return res.data.slice(0,5)
  } catch (e) {
    console.log(e);
    return null
  }
};

const Getupcomingeffectivedocument = async () => {
  try {
    let res = await axios.get(EXTRACTIVE_DOCUMENTS.ExtractiveDocuments);
    let upcoming_effective_docs = res.data.sort(function(a,b){
      return new Date(b.effective_date) - new Date(a.effective_date);
    });
    return upcoming_effective_docs.slice(0,5)
  } catch (e) {
    console.log(e);
    return null
  }
};

const Getexpireddocument = async () => {
  try {
    let res = await axios.get(EXTRACTIVE_DOCUMENTS.ExtractiveDocuments);
    let expired_docs = res.data.sort(function(a,b){
      return new Date(b.expiry_date) - new Date(a.expiry_date);
    });
    return expired_docs.slice(0,5)
  } catch (e) {
    console.log(e);
    return null
  }
};

export {
  GetExtractiveDocs,
  Getupcomingeffectivedocument,
  Getexpireddocument
}
