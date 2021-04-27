<template>
  <div class="box">
    <el-table :data="bookValue" border style="width: 100%">
      <el-table-column
        sortable
        prop="name"
        label="书名"
        width="180"
        :filters="createFilterValue(bookList)"
        :filter-method="filter"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        sortable
        prop="class"
        label="分类"
        width="180"
        :filters="createFilterValue(tagList)"
        :filter-method="filterArrInclude"
        show-overflow-tooltip
      >
        <template #default="scope">
          <div class="tag-list">
            <el-tag size="medium" v-for="tag in scope.row['class']" :key="tag">{{ tag }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column sortable prop="author" label="作者" width="180" show-overflow-tooltip> </el-table-column>
      <el-table-column sortable prop="pickDate" label="摘录日期" width="180" show-overflow-tooltip> </el-table-column>
      <el-table-column sortable prop="date" width="120" label="成书日期" show-overflow-tooltip> </el-table-column>
      <el-table-column class-name="pre-wrap" sortable prop="content" label="内容"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { ref } from 'vue'
import book from '/content/book.js'
export default {
  components: {},
  props: {},
  setup() {
    var bookValue = ref(book)
    return {
      bookValue
    }
  },
  data() {
    return {
      authorList: this.createUniqueList(book, 'author'),
      bookList: this.createUniqueList(book, 'name'),
      tagList: this.createUniqueArrayList(book, 'class')
    }
  },
  methods: {
    filter(value, row, column) {
      const property = column['property']
      return row[property] === value
    },
    filterArrInclude(value, row, column) {
      const property = column['property']
      // 默认筛选是并集, 需要交集 可以 使用 filtered-value,获取当前筛选选中了哪些值
      return row[property].includes(value)
    },
    createFilterValue(list) {
      return list.map(value => {
        return { text: value, value }
      })
    },
    createUniqueList(arr, key) {
      return [...new Set(arr.map(value => value[key]))]
    },
    createUniqueArrayList(arr, key) {
      let arrTags = this.createUniqueList(arr, key)
      return [...new Set(arrTags.flat(1))]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {}
}
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  .tag-list {
    .el-tag {
      margin-left: 4px;
    }
  }
}
::v-deep .el-table__column-filter-trigger {
  transform: scale(1.5);
}
</style>
