<template>
<!--  #fbfbfb-->
  <div id=defaultLayout>
    <el-row style="background-color: #fbfbfb;">
      <el-col :span="16" :offset="4" class="_document_section">
          <el-menu :default-active="4" mode="horizontal">
            <el-menu-item index="1" style="font-size: xx-large; ">
              <div class="center-logo" @click="handleHome">
              <span>Law</span>
              <span style="color: #048194; margin-left: -5px">Tech</span>
            </div>
            </el-menu-item>
            <el-submenu index="2" style="float:right">
              <template slot="title"><i class="el-icon-user"></i>Nam Pham</template>
              <el-menu-item index="2-1">User page</el-menu-item>
              <el-menu-item index="2-2">Settings</el-menu-item>
              <el-menu-item index="2-3">Log out</el-menu-item>
            </el-submenu>
            <el-menu-item index="3" style="float:right"><span>Soạn thảo</span></el-menu-item>
            <el-menu-item index="4" style="float:right"><span><nuxt-link to="/laws">Tìm kiếm</nuxt-link></span></el-menu-item>
            <el-menu-item index="5" style="float:right"><span><nuxt-link to="/">Trang chủ</nuxt-link></span></el-menu-item>
          </el-menu>
      </el-col>
    </el-row>
    <div class="body">
        <Nuxt/>
    </div>
  <el-row class="footer">
    <div class="info">
    <el-col :span="16" :offset="4">

      <div style="margin-top: 30px"><strong><i class="el-icon-map-location"></i> Địa chỉ: 144 Xuân Thuỷ</strong></div>

      <div style="margin-top: 10px"><strong><i class="el-icon-mobile-phone"></i> Liên hệ: 0261274912</strong></div>
    </el-col>

    </div>
  </el-row>
  </div>
</template>
<script>
  export default {
    methods:{
      handleHome(){

        this.$router.push({name: 'home_page'})
      }
    }
  }
</script>

<style lang="scss">
  html {
    font-family: 'Arial', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    padding: 0;
  }

  h1 {font-size: 2em;}
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
  #defaultLayout .el-menu--horizontal{
    border-bottom: none;
    background-color: #fbfbfb;
    .center-logo{
      font-family: "Gelasio";
      span{
        color: #005461;
        font-weight: bold;
      }
    }
    .el-menu-item:hover{
      background-color: #fbfbfb;
    }
    .el-menu-item:focus{
      background-color: #fbfbfb;
    }
    .el-menu-item > span{
      font-weight: bold;
      font-size: 16px;
      color: #005461;
    }
    .el-submenu__title:hover{
      background-color: #fbfbfb;
    }
    .el-menu-item.is-active{
      border-bottom: none;
    }

  }

  #defaultLayout{

    .footer{
        background-color: #005461;
        min-height: 100px;
         margin-top: 50px;
        strong{
          color: #fbfbfb;
        }
    }
    .body{
      min-height: 730px;
    }
  }



</style>

