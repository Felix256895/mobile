import Vue from "vue";
import Router from "vue-router";
import { Dialog } from "vant";

Vue.use(Router);

const router = new Router({
  // mode:'history',
  mode: "hash",
  routes: [
    {
      path: "/",
      meta: {
        requireAuth: false
      },
      redirect: "/index"
    },
    //首页
    {
      path: "/index",
      name: "index",
      meta: {
        requireAuth: false
      },
      component: resolve => {
        require(["@/html/index/index"], resolve);
      }
    },
    // 地图
    {
      path: "/map",
      name: "map",
      meta: {
        requireAuth: false
      },
      component: resolve => {
        require(["@/html/index/map/index"], resolve);
      }
    },
    // 药师咨询
    {
      path: "/pharmacist-consult",
      name: "pharmacist-consult",
      meta: {
        requireAuth: false
      },
      component: resolve => {
        require(["@/html/index/pharmacist-consult/index"], resolve);
      }
    },
    // 医师问诊
    {
      path: "/physician-inquiry",
      name: "physician-inquiry",
      meta: {
        requireAuth: false
      },
      component: resolve => {
        require(["@/html/index/physician-inquiry/index"], resolve);
      }
    },
    //处理药房 prescription
    {
      path: "/trolley",
      name: "trolley",
      meta: {
        requireAuth: false
      },
      component: resolve => {
        require(["@/html/trolley/index"], resolve);
      }
    },
    //我的
    {
      path: "/my",
      name: "my",
      meta: {
        requireAuth: false
      },
      component: resolve => {
        require(["@/html/my/index"], resolve);
      }
    },
    //我的订单
    {
      path: "/order",
      name: "order",
      meta: {
        requireAuth: false
      },
      component: resolve => {
        require(["@/html/order/index"], resolve);
      }
    },
    //确认订单
    {
      path: "/confirm-order",
      name: "confirm-order",
      meta: {
        requireAuth: false
      },
      component: resolve => {
        require(["@/html/confirmOrder/index"], resolve);
      }
    },
    //登录
    {
      path: "/login",
      name: "login",
      meta: {
        requireAuth: false
      },
      component: resolve => {
        require(["@/html/account/login/index"], resolve);
      }
    },
    //注册
    {
      path: "/register",
      name: "register",
      meta: {
        requireAuth: false
      },
      component: resolve => {
        require(["@/html/account/register/index"], resolve);
      }
    },
    //忘记密码
    {
      path: "/forgetpassword",
      name: "forgetpassword",
      meta: {
        requireAuth: false
      },
      component: resolve => {
        require(["@/html/account/forgetPassword/index"], resolve);
      }
    },
    //协议
    {
      path: "/agreement",
      name: "agreement",
      meta: {
        requireAuth: false
      },
      component: resolve => {
        require(["@/html/account/agreement/index"], resolve);
      }
    },
  ]
});

// 判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {
    // 判断是否需要登录权限
    if (window.sessionStorage.getItem("token")) {
      // 判断是否登录
      next();
    } else {
      // 没登录则跳转到登录界面
      Dialog.alert({
        title: "登录失效",
        message: "亲~需要重新登录了哦！"
      }).then(() => {
        next({
          path: "/login"
        });
      });
      return;
    } // 没登录则跳转到登录界面
  } else {
    next();
  }
});

export default router;
