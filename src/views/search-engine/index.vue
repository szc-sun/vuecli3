/*
 * @Page: 搜索引擎
 * @Author: sun
 * @Date: 2019-11-14 09:50:48
 * @Last Modified by: sun
 */
 <template>
 <div class="search-engine">
   <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-form ref="form" :model="form">
    <el-autocomplete
      class="inline-input"
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      :trigger-on-focus="false"
      @select="handleSelect"
    >
     <i
      class="el-icon-search"
      slot="suffix"
      @click="search">
    </i>
    <template slot-scope="{ item }">
    <div class="name">{{ item }}</div>
  </template>
    </el-autocomplete>
  </el-form>
 </div>
 </template>
<script>
// import vueJsonp from 'vue-jsonp'
export default {
  data() {
    return {
      form: {},
      state2: '',
      restaurants: [],
      options: [{
        value: 'Baidu',
        label: '百度'
      }, {
        value: 'Bing',
        label: '必应'
      }, {
        value: 'Google',
        label: '谷歌'
      }],
      value: 'Baidu'
    }
  },
  mounted() {
    // this.restaurants = this.loadAll()
    this.getFuzzyQuery()
  },
  watch: {
    state2(val) {
      // console.log('state2')
    }
  },
  methods: {
    search(){
      console.log('查询')
    },
    // 获取模糊查询数组
    getFuzzyQuery(value) {
      return this.$jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su' , {
        wd:this.state2,
        callbackQuery: 'cb',
        callbackName: 'callback'
      }).then((res)=>{
        // window.callback = function(res) {
        //   return res
        // }
      // 　console.log(123,res)
        return res.s
      })
    },
    sug(val) {
      return val
    },

    // 计算表达式的值
    evil(fn) {
      var json = (new Function('return ' + fn))()
      return json
    },
    querySearch(queryString, cb) {
      this.getFuzzyQuery().then(res=>{
        this.restaurants = res
        cb(this.restaurants)
      })
    },
    handleSelect(item) {
      this.state2 = item
      // console.log(item)
    }
  }
}
</script>
<style lang="scss" scoped>
.search-engine /deep/{
  .el-form{
    .inline-input{
      .el-input{
        .el-input__suffix{
          right:0;
          .el-input__suffix-inner{
            display:inline-block;
            height:100%;
            .el-icon-search{
              cursor:pointer;
              display:inline-block;
              height:40px;
              width:40px;
              line-height:40px;
              font-size:20px;
            }
          }
        }
      }
    }
  }
}
</style>
