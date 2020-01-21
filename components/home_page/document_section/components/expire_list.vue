<template>
  <el-col :span="6" :offset="2" class="_document_section_item">
    <h3>Văn bản bị hết hiệu lực</h3>
    <el-row class="_document_item" v-for="item in documents" v-bind:key="item.id">
      <el-col :span="1">
        <i class="el-icon-document" style="color:#048194"></i>
      </el-col>
      <el-col :span="22" :offset="1">
        <el-link :href="'laws/' + item.id">{{item.title + " " +item.description}}</el-link>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>

  import {Getexpireddocument} from '../../../../services/extractive_documents/document_api'
  export default {
    name : "ExpireList",
    data(){
      return{
        documents:[]
      }
    },
    async mounted() {
      let data= await Getexpireddocument();
      this.documents = data
    }
  }
</script>
