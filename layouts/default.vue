<template>
  <div id=defaultLayout>
    <el-container>
      <el-header>
        <el-menu :default-active="4" mode="horizontal">
          <el-menu-item index="1" style="font-size: xx-large; "><nuxt-link to="/">Thư Viện Pháp Luật</nuxt-link></el-menu-item>
          <el-menu-item index="2" style="margin-left: 150px"><i class="el-icon-phone-outline"></i>Liên hệ</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-edit"></i>Soạn thảo văn bản pháp luật</el-menu-item>
          <el-menu-item index="4"><i class="el-icon-search"></i><nuxt-link to="/laws">Tìm kiếm</nuxt-link></el-menu-item>
          <el-menu-item index="5" style="float:right"><i class="el-icon-user"></i>Phạm Công Nam</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <Nuxt/>
      </el-main>
      <el-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<style>
</style>
