<template>
  <div>
    <div class="filter-container" />
    <el-table v-loading="loading" :data="swiperList" stripe style="width: 100%">
      <el-table-column type="index" width="50" />
      <el-table-column label="图片" width="400">
        <template slot-scope="scope">
          <img :src="scope.row.download_url" alt height="50">
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="onDel(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 确认删除的对话框 -->
    <el-dialog title="提示" :visible.sync="delDialogVisible" width="30%">
      <span>确定删除该图片吗</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="delDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="doDel">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { fetchList } from '@/api/swiper'
export default {
  data() {
    return {
      swiperList: [],
      loading: false,
      delDialogVisible: false,
      swiper: {}
    }
  },
  created() {
    fetchList().then(res => {
      console.log(res)
      this.swiperList = res.data
    })
  },
  methods: {
    doDel() {},
    onDel() {}
  }
}
</script>

<style>
</style>
