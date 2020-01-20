
<template>
  <div class="app">
    <HeaderDescription></HeaderDescription>
    <div class="main">
      <FeatureSection></FeatureSection>
      <DocumentSection></DocumentSection>
    </div>
  </div>
</template>

<script>
  import HeaderDescription from "../components/home_page/header_description/HeaderDescription";
  import FeatureSection from "../components/home_page/feature_section/FeatureSection";
  import DocumentSection from "../components/home_page/document_section/DocumentSection";
  export default {
    name:"HomePage",
    components: {DocumentSection, FeatureSection, HeaderDescription}
  }
</script>

<style lang="scss">


  .main{
    .el-divider{
      height: 2px!important;
    }
  }
</style>
