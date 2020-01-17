<template>
  <el-col :span="6" :offset="2" class="_document_section_item">
    <h3>Văn bản bị hết hiệu lực</h3>
    <el-row class="_document_item" v-for="item in new_document">
      <el-col :span="1">
        <i class="el-icon-document" style="color:#048194"></i>
      </el-col>
      <el-col :span="22" :offset="1">
        <el-link :href="item.url">{{item.content}}</el-link>
      </el-col>
    </el-row>
  </el-col>
</template>

<script>
  export default {
    name : "MosViewedList",
    data(){
      return{
        new_document:[
          {"url" : "", content:"Quyết định 03/2020/QĐ-UBND Quy định giá tối đa dịch vụ sử dụng đò tại Khu Du lịch Hầm Hô huyện Tây Sơn, tỉnh Bình Định của Công ty cổ phần Du lịch Hầm Hô"},
          {"url" : "", content:"Quyết định 03/2020/QĐ-UBND Quy định giá tối đa dịch vụ sử dụng đò tại Khu Du lịch Hầm Hô huyện Tây Sơn, tỉnh Bình Định của Công ty cổ phần Du lịch Hầm Hô"},
          {"url" : "", content:"Quyết định 03/2020/QĐ-UBND Quy định giá tối đa dịch vụ sử dụng đò tại Khu Du lịch Hầm Hô huyện Tây Sơn, tỉnh Bình Định của Công ty cổ phần Du lịch Hầm Hô"},
          {"url" : "", content:"Quyết định 03/2020/QĐ-UBND Quy định giá tối đa dịch vụ sử dụng đò tại Khu Du lịch Hầm Hô huyện Tây Sơn, tỉnh Bình Định của Công ty cổ phần Du lịch Hầm Hô"},
          {"url" : "", content:"Quyết định 03/2020/QĐ-UBND Quy định giá tối đa dịch vụ sử dụng đò tại Khu Du lịch Hầm Hô huyện Tây Sơn, tỉnh Bình Định của Công ty cổ phần Du lịch Hầm Hô"}
        ]
      }
    }
  }
</script>
