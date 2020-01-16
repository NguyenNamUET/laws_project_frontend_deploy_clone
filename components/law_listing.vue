<template>
  <div>
    <el-row
      :gutter="20"
      style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);"
      v-for="law in laws"
    >
      <el-col :span="16" style="width: 400px;">
        <nuxt-link :to="{name: law_detail}">
          {{law.name}}
        </nuxt-link>
      </el-col>
      <el-col :span="4" style="width: 200px; float:right">
        Ban hành: {{law.issued_date}}
        <br>
        Hiệu lực:
          <span v-if="law.is_over_due === 1">Hết hiệu lực</span>
          <span v-if="law.is_over_due === 0">Còn hiệu lực</span>
        <br>
      </el-col>
    </el-row>
    <el-row
      :gutter="20"
      style="box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); margin-top: 6px;"
      v-for="law in laws"
    >
      <el-col>
        <span>Từ khóa liên quan: Quyết định, Bộ giáo dục và Đào tạo</span>
      </el-col>
    </el-row>
    <el-divider></el-divider>

  </div>

</template>

<script>
    export default {
        name: "law_listing",
      data() {
        return {
          laws: [
            {
              id: 1,
              name: 'Quyết định 88/QĐ-BGDĐT năm 2020',
              issued_date: '01/01/2020',
              is_over_due: 1,
            },
            {
              id: 1,
              name: 'Quyết định 88/QĐ-BGDĐT năm 2020',
              issued_date: '01/01/2020',
              is_over_due: 1,
            },
            {
              id: 1,
              name: 'Quyết định 88/QĐ-BGDĐT năm 2020',
              issued_date: '01/01/2020',
              is_over_due: 1,
            }
          ]
        }
      },

    }
</script>

<style scoped>

</style>
