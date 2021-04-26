<template>
  <div class="box">
    <el-table :data="bookValue" border style="width: 100%">
      <el-table-column sortable prop="name" label="书名" width="180" show-overflow-tooltip> </el-table-column>
      <el-table-column sortable prop="class" label="分类" width="180" show-overflow-tooltip>
        <template #default="scope">
          <div class="name-wrapper">
            <el-tag size="medium">{{ '历史' }}</el-tag>
            <el-tag type="primary" size="medium">{{ '哲学' }}</el-tag>
            <el-tag type="success" size="medium">{{ '文言' }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column sortable prop="author" label="作者" width="180" show-overflow-tooltip> </el-table-column>
      <el-table-column sortable prop="pickDate" label="摘录日期" width="180" show-overflow-tooltip> </el-table-column>
      <el-table-column sortable prop="date" width="120" label="成书日期" show-overflow-tooltip> </el-table-column>
      <el-table-column sortable prop="content" label="内容" width="auto"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { ref } from 'vue';
import book from '/content/book.js';
export default {
  components: {},
  props: {},
  setup() {
    var bookValue = ref(book);
    return {
      bookValue,
    };
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
};
</script>

<style scoped lang="scss">
.box {
  width: 100vw;
}
</style>
