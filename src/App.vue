<template>
  <div id="app">
    <!--TODO 右箭头之后改成分享页面，左侧箭头是在二级页面下才会显示-->
    <!--顶部bar-->
    <nut-navbar
            v-show="isShowNavBar"
            :leftShow="leftShow"
            :rightShow = 'rightShow'
            @on-click-more="more"
            @on-click-back="back"
            style="background-color:#bbdefb; color: #fff; height:56px; line-height: 56px;position: fixed;top: 0;width: 100%;z-index: 2">
      <a slot="back-icon" class="backBtn">
        <mu-icon value="navigate_before" size="34"></mu-icon>
      </a>
      {{NavBar}}
    </nut-navbar>

    <!--底部footer-->
    <footer v-show="isShowFooter">
      <mu-container>
        <mu-bottom-nav @change="changeNav" :value="activeMenu">
          <mu-bottom-nav-item to="/home" value="home" title="首页" icon="home"></mu-bottom-nav-item>
          <mu-bottom-nav-item to="/find" value="find" title="发现" icon="widgets"></mu-bottom-nav-item>
          <mu-bottom-nav-item to="/mine" value="mine" title="我的" icon="person"></mu-bottom-nav-item>
        </mu-bottom-nav>
      </mu-container>
    </footer>
    <router-view></router-view>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        leftShow: false, //控制顶部navbar 左侧箭头显隐
        rightShow: false, //控制顶部navbar 右侧箭头显隐
        NavBar: '首页',
        isShowNavBar: true,//是否展示顶部bar
        isShowFooter: true,//是否展示底部tab
        activeMenu: 'home',
      };
    },
    created(){
      /**
       *  判断刷新前激活的tab菜单，刷新后重新取出
       */
      window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem('activeMenu', this.activeMenu) //存储当前打开的是那个级菜单
      });

      let activeState = sessionStorage.getItem('activeMenu');
      console.log(activeState)
      if(activeState!=''){
        this.activeMenu = activeState;
      };
      sessionStorage.clear();
    },
    mounted(){

    },
    methods: {
      /**
       * 改变tabNav菜单
       * 底部3个菜单，我的 页面不显示顶部bar
       * @param val
       */
      changeNav(val){
        this.activeMenu = val;
      },
      /**
       * 顶部bar右侧rightShow 点击事件
       */
      more(){
        console.log('header头部， 点击更多');
      },
      /**
       * 顶部bar左侧leftShow 点击事件
       */
      back(){
        this.$router.go(-1);
      },
    },

    watch:{
      /**
       * 检测路由变化，
       * 1、根据不同的页面显示不同的顶部文字
       * 2、除了3个tab页面以外都需要显示左侧返回箭头
       * 3、当页面在抬头列表页的时候顶部bar出现右侧箭头，用于添加抬头
       * 4、底部3个菜单，我的 页面不显示顶部bar
       * @param to
       * @param from
       */
      '$route' (to , from){
        this.NavBar = to.meta;
        if(to.path === '/home' || to.path === '/find' ||to.path === '/mine'){
          this.isShowFooter = true;
          this.leftShow = false;
        }else{
          this.leftShow = true;
          this.isShowFooter = false;
        };
        if(to.path === '/mine'){
          this.isShowNavBar = false;
        }else{
          this.isShowNavBar = true;
        }

      }
    },

    components:{

    }
  };
</script>
<style lang="stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #2c3e50

  #nav
    padding 30px
    a
      font-weight bold
      color #2c3e50
      &.router-link-exact-active
        color #42b983
  footer
    width 100%
    position fixed
    bottom 0
    z-index 2
  .backBtn
    color #ffffff
    line-height 64px
  .main-content
    position relative
    margin-top 70px
</style>
