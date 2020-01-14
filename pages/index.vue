<template>
  <el-container>
    <el-aside width="200px" ></el-aside>
    <el-main style="margin-left: 120px; margin-right: 120px; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
      <el-divider content-position="left">Văn bản mới ban hành</el-divider>
      <law_listing></law_listing>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="100"
        style="float: right;">
      </el-pagination>

      <br>

      <el-divider content-position="left">Văn bản được xem nhiều</el-divider>
      <law_listing></law_listing>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000"
        style="float: right;">
      </el-pagination>
    </el-main>
    <el-aside width="200px" ></el-aside>
  </el-container>
</template>

<script>
  import law_listing from "../components/law_listing";
  export default {
    components: {
      law_listing
    }
  }
</script>

<style>
</style>
