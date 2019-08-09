import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      meta: '首页',
      component: Home,
    },
    {
      path: '/find',
      name: 'find',
      meta: '发现',
      component: () => import('./views/Find.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      meta: '我的',
      component: () => import('./views/Mine.vue'),
    },
    {
      path: '/mine/collect',
      name: 'mine-collect',
      meta: '我的收藏',
      component: () => import('./components/mine/CollectedNews.vue'),
    },
    {
      path: '/title_list',
      name: 'title-list',
      meta: '抬头列表',
      component: () => import('./components/mine/TitleManage/TitleList.vue'),
    },
    {
      path: '/title_list/add_title',
      name: 'add-title',
      meta: '添加抬头',
      component: () => import('./components/mine/TitleManage/AddTitle.vue'),
    },
    {
      path: '/invoice_list',
      name: 'invoice-list',
      meta: '开票记录',
      component: () => import('./components/mine/InvoiceList.vue'),
    },
    {
      path: '/title_detail/:id',
      name: 'title-detail',
      meta: '抬头详细',
      component: () => import('./components/mine/TitleManage/TitleDetail.vue'),
    },
    {
      path: '/title_list/title_edit/:id',
      name: 'title-edit',
      meta: '编辑抬头',
      component: () => import('./components/mine/TitleManage/DditTitle.vue'),
    },
    {
      path: '/shop_list',
      name: 'shop-list',
      meta: '商铺列表',
      component: () => import('./components/mine/ShopManage/ShopList.vue'),
    },
    {
      path: '/shop_list/add_shop',
      name: 'add-shop',
      meta: '添加商铺',
      component: () => import('./components/mine/ShopManage/AddShop.vue'),
    },
    {
      path: '/shop_detail/:id',
      name: 'shop-detail',
      meta: '商铺详情',
      component: () => import('./components/mine/ShopManage/ShopDetail.vue'),
    },
    {
      path: '/shop_edit/:id',
      name: 'shop-edit',
      meta: '编辑商铺',
      component: () => import('./components/mine/ShopManage/EditShop.vue'),
    },
    {
      path: '/shop_list/shop_detail_list',
      name: 'shop-detail-list',
      meta: '商品明细列表',
      component: () => import('./components/mine/ShopDetail/ShopDetailList.vue'),
    },
    {
      path: '/shop_list/shop_detail_add',
      name: 'shop-detail-add',
      meta: '添加商铺明细',
      component: () => import('./components/mine/ShopDetail/AddShopDetail.vue'),
    },
    {
      path: '/shop_list/shop_detail_edit/:id',
      name: 'shop-detail-edit',
      meta: '添加商铺明细',
      component: () => import('./components/mine/ShopDetail/EditShopDetail.vue'),
    },
    {
      path: '/shop_list/shop_detail/:id',
      name: 'shop-detail-edit',
      meta: '商铺明细详情',
      component: () => import('./components/mine/ShopDetail/ShopDetail.vue'),
    },
  ]
})
