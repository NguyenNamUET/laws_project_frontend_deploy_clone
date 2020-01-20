import axios from 'axios'
import {EXTRACTIVE_DOCUMENTS} from '../../config/config_api_backend'


const GetExtractiveDocs = async () => {
  try {
    let res = await axios.get(EXTRACTIVE_DOCUMENTS.ExtractiveDocuments)
    return res.data.results.slice(0,5)
  } catch (e) {
    console.log(e)
    return null
  }
}

const Getupcomingeffectivedocument = async () => {
  try {
    let res = await axios.get(EXTRACTIVE_DOCUMENTS.UpComing)

    return res ? res.data : null
  } catch (e) {
    console.log(e)
    return null
  }
}

const Getcurrentissueddocument = async () => {
  try {
    let res = await axios.get(EXTRACTIVE_DOCUMENTS.CurrentIssued)

    return res ? res.data : null
  } catch (e) {
    console.log(e)
    return null
  }
}

export {
  GetExtractiveDocs,
  Getupcomingeffectivedocument,
  Getcurrentissueddocument
}
