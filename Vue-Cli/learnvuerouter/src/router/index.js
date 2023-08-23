//如何手动搭建路由框架呢？
//1、创建router文件夹，创建index.js文件

import Vue from 'vue'//3、传入Vue
import Router from 'vue-router'//2、导入路由插件
//import home from '../components/home'
//上面为一般的加载路由的方式，下面为es6的懒加载模式
const home = () => import('../components/home')
const about = () => import('../components/about')
const user = () => import('../components/user')
const news = () => import('../components/homeNews')
const text = () => import('../components/homeText')
const profile = () => import('../components/profile')
Vue.use(Router)//3、传入(安装)该插件


//4、创建Router对象
const router = new Router({//6、将router对象导出传到Vue实例中(main.js导入并使用)
  routes: [//5、配置路径和组件之间的映射关系
    {
      //重定向到home页
      path: '/',
      redirect: home,
      // beforeEnter:(to, from, next)=>{//独享守卫

      // }

    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '主页',
      },
      children: [//子路由，实现/home/child
        // {//使返回主页时，默认会显示news的路由界面
        //   path: '',
        //   redirect: 'news'
        // },
        {
          path: 'news',
          component: news,
        },
        {
          path: 'text',
          component: text,
        }
      ],
      component: home
    },
    {
      path: '/about',
      meta: {//元数据
        title: '关于'
      },
      name: 'abolt',
      component: about
    },
    {
      name: 'user',
      path: '/user/:uid',//一般适用于传入单个变量值
      component: user
    },
    {
      name: 'profile',
      path: '/profile',
      component: profile
    }
  ],
  mode: 'history',//游览器的url设置为history模式
  linkActiveClass: 'active'//路由中配置router-link-class的别名
})

//全局导航守卫配置，实现切换路由改变网页标题
router.beforeEach((to, from, next) => {//但这种方式无法显示子路由的标题
  document.title = to.meta.title
  next()
})
//后置钩子，即跳转完的回调函数
router.afterEach((to, from) => {//自行测试

})
//另外还有很多独享守卫，如路由中配置beforeEnter，组件中的beforeLeave等等
export default router