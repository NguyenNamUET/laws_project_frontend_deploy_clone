<template>
  <el-row>
    <el-col :span="16" :offset="4" class="_document_section">
      <el-row class="_document_section_row" >
        <NewIssuedList></NewIssuedList>
        <MosViewedList></MosViewedList>
        <ExpireList></ExpireList>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
  import NewIssuedList from "./components/new_issued_list";
  import MosViewedList from "./components/most_viewed_list";
  import ExpireList from "./components/expire_list";
  export default {
    name: "DocumentSection",
    components: {ExpireList, MosViewedList, NewIssuedList}
  }
</script>

<style lang="scss">


  ._document_section{
    ._document_section_row{
      margin-top: 20px;
      ._document_section_item{
        h3{
          color:  #005461;
        }
        ._document_item{

          margin-top: 15px;
          .el-link{
            color:#048194; font-weight: bold; text-align: justify;
          }
        }
      }
    }
  }
</style>
