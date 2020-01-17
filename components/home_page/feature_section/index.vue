<template>
  <el-col :span="16" :offset="4" class="_feature_section">
    <h1>Các tính năng chính</h1>
    <el-row class="_feature_row" >
      <el-col :span="6"  :offset="1" class="_feature_item">
        <img :src="search_img">
        <h3>Tìm kiếm văn bản</h3>
        <h4>Dữ liệu của hệ thống bao gồm các luận văn, khoá luận của nhiều trường đại học ...</h4>
      </el-col>
      <el-col :span="6" :offset="2" class="_feature_item">

        <img :src="daft_img">

        <h3>Soạn thảo văn bản</h3>
        <h4>Soạn thảo văn bản nhanh chóng với việc sử dụng khuôn mẫu có sẵn và các gợi ý.</h4>
      </el-col>
      <el-col :span="6" :offset="2" class="_feature_item">

        <img :src="management_img">

        <h3>Quản lý văn bản</h3>
        <h4>Quản lý tài liệu cá nhân và chia sẻ với người dùng khác</h4>
      </el-col>
    </el-row>
    <el-divider></el-divider>
  </el-col>
</template>

<script>

  import search_img from '../../../assets/images/iconfinder_SEO_search_word_3059893.png'
  import daft_img from '../../../assets/images/iconfinder_compose_1055085.png'
  import management_img from '../../../assets/images/iconfinder_45-File-Document-share_3213316.png'
  export default {
    name: "FeatureSection",
    data() {
      return {
        search_img: search_img,
        daft_img: daft_img,
        management_img: management_img
      }
    }
  }
</script>

<style lang="scss">
  ._feature_section{
    margin-top: 40px;
    h1{
      font-family: "Gelasio";
      color: #005461;
      text-align: center;
    }
    ._feature_row{
      margin-top: 50px;
      ._feature_item{
        img{
          position: relative;
          left: 50%;
          transform: translateX(-50%);
        }
        h3{
          margin-top: 10px;
          text-align: center;
          color: #005461;
        }
        h4{
          text-align: justify;
          margin-top: 7px;
          color: #048194;
        }
      }
    }
  }
</style>
