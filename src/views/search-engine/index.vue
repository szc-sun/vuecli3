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
  <div class="list-box" >
    <div :class="{'search-con':true,'show':show === index}" v-for="(value,index) in searchData.list" :key = "index" @click="clickIndex(index)">
      <div class="title">{{value.title}}</div>
      <div class="con">
        {{value.data}}
      </div>
    </div>
  </div>
 </div>
 </template>
<script>
// import vueJsonp from 'vue-jsonp'
export default {
  name: 'SearchEngine',
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
      value: 'Baidu',
      show: null,
      searchData: {
        count: 3,
        list: [
          {
            title: 'title1',
            data: '搜索信息1'
          },
          {
            title: 'title2',
            data: '搜索信息2'
          },
          {
            title: 'title3',
            data: '搜索信息3'
          }
        ]
      }
    }
  },
  activated() {
    console.log('activated')
  },
  mounted() {
    console.log('mounted')
    // this.restaurants = this.loadAll()
    this.getFuzzyQuery()
  },
  watch: {
    state2(val) {
      // console.log('state2')
    }
  },
  methods: {
    search() {
      console.log('查询')
    },
    // 获取模糊查询数组
    getFuzzyQuery(value) {
      return this.$jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su', {
        wd: this.state2,
        callbackQuery: 'cb',
        callbackName: 'callback'
      }).then((res) => {
        // window.callback = function(res) {
        //   return res
        // }
      // console.log(123,res)
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
      this.getFuzzyQuery().then(res => {
        this.restaurants = res
        cb(this.restaurants)
      })
    },
    handleSelect(item) {
      this.state2 = item
      // console.log(item)
    },
    clickIndex(index) {
      // console.log(this)
      this.show = index
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
  $height:200px;
  $str: 'color';
  $con:'con';
  $arr:(
    (width:100px,height:50px,background: #fff),
    (width:200px,height:100px,background: #fff),
    (width:300px,height:150px,background: #fff)
  );
  .search-#{$con}{
    height: $height;
    width:500px;
    background: #f2f2f2;
    border:1px solid #ccc;
    #{$str}:#d00;
    @for $i from 1 through length($arr) {
      $item: nth($arr, $i);
      .#{$con}{
        width: map-get($item, width);
        height: map-get($item, height);
      }
    }
    @mixin left01($n) {  //不带参数
      font-size: (30*$n);
    }
    .title{
    @include left01(2px)
    }
  }
  .show{
    background: #ccc
  }
}
</style>
