// 获取秒杀数据
export const loadSeckillsInfo = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = [
      {
        intro: '【西藏扶贫商品】净土 一抔藜麦',
        img: 'static/img/index/seckill/seckill-item1.jpg',
        price: 54.0,
        realPrice: 68.0
      },
      {
        intro: '【西藏扶贫商品】净土 耗牛叔叔 耗牛肉干',
        img: 'static/img/index/seckill/seckill-item2.jpg',
        price: 58.0,
        realPrice: 58.0
      },
      {
        intro: '【中国民用航空局扶贫产品】和田县红枣500g*3包',
        img: 'static/img/index/seckill/seckill-item3.jpg',
        price: 48.0,
        realPrice: 68.0
      },
      {
        intro: '【深度贫困地区重点扶贫商品】新疆叶城县琥珀核桃仁丨多道严选甜脆不腻',
        img: 'static/img/index/seckill/seckill-item4.jpg',
        price: 60.0,
        realPrice: 69.0
      }
    ];
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    console.log([hours, minute, seconds]);
    // 距离开始秒杀时间
    const deadline = {
      hours: 1,
      minute: 38,
      seconds: 36
    };
    commit('SET_SECKILLS_INFO', [data, deadline]);
  });
};

// 获取轮播(营销)图片
export const loadCarouselItems = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const data = {
      carouselItems: [
        'static/img/nav/1.jpg',
        'static/img/nav/2.jpg',
        'static/img/nav/3.jpg',
        'static/img/nav/4.jpg',
        'static/img/nav/5.jpg'
      ],
      activity: [
        'static/img/nav/nav_showimg1.jpg',
        'static/img/nav/nav_showimg2.jpg'
      ]
    };
    commit('SET_CAROUSELITEMS_INFO', data);
  });
};

// 加载1F新疆特色扶贫馆专栏数据
export const loadFirstFloor = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const computer = {
      title: '1F 新疆特色扶贫馆',
      detail: [
        {
          bigImg: 'static/img/index/computer/item-computer-1.jpg',
          itemFour: [
            {
              intro: '￥125',
              img: 'static/img/index/computer/item-computer-2.jpg'
            },
            {
              intro: '￥45',
              img: 'static/img/index/computer/item-computer-1-3.jpg'
            },
            {
              intro: '￥125',
              img: 'static/img/index/computer/item-computer-1-4.jpg'
            },
            {
              intro: '￥48',
              img: 'static/img/index/computer/item-computer-1-5.jpg'
            },
            {
              intro: '￥38',
              img: 'static/img/index/computer/item-computer-1-6.jpg'
            },
            {
              intro: '￥49',
              img: 'static/img/index/computer/item-computer-1-7.jpg'
            }
          ]
        }
      ]
    };
    commit('SET_COMPUTER_INFO', computer);
  });
};

// 加载2F西藏特色扶贫馆专栏数据
export const loadSecondFloor = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const eat = {
      title: '2F西藏特色扶贫馆',
      detail: [
        {
          bigImg: 'static/img/index/eat/item-eat-1-1.jpg',
          itemFour: [
            {
              intro: '￥58',
              img: 'static/img/index/eat/item-eat-1-2.jpg'
            },
            {
              intro: '￥38',
              img: 'static/img/index/eat/item-eat-1-3.jpg'
            },
            {
              intro: '￥86',
              img: 'static/img/index/eat/item-eat-1-4.jpg'
            },
            {
              intro: '￥28.5',
              img: 'static/img/index/eat/item-eat-1-5.jpg'
            },
            {
              intro: '￥3.8',
              img: 'static/img/index/eat/item-eat-1-6.jpg'
            },
            {
              intro: '￥58',
              img: 'static/img/index/eat/item-eat-1-7.jpg'
            }
          ]
        }
      ]
    };
    commit('SET_EAT_INFO', eat);
  });
};

// 加载3F湖南特色扶贫馆专栏数据
export const loadThirdFloor = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const third = {
      title: '3F湖南特色扶贫馆',
      detail: [
        {
          bigImg: 'static/img/index/three/big.png',
          itemFour: [
            {
              intro: '￥180',
              img: 'static/img/index/three/01.png'
            },
            {
              intro: '￥39',
              img: 'static/img/index/three/02.png'
            },
            {
              intro: '￥228',
              img: 'static/img/index/three/03.png'
            },
            {
              intro: '￥22.8',
              img: 'static/img/index/three/04.png'
            },
            {
              intro: '￥28.8',
              img: 'static/img/index/three/05.png'
            },
            {
              intro: '￥58',
              img: 'static/img/index/three/06.png'
            }
          ]
        }
      ]
    };
    commit('SET_THIRD_INFO', third);
  });
};

// 加载4F江西特色扶贫馆专栏数据
export const loadFourthFloor = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const fourth = {
      title: '4F江西特色扶贫馆',
      detail: [
        {
          bigImg: 'static/img/index/fourth/big.jpg',
          itemFour: [
            {
              intro: '￥29.9',
              img: 'static/img/index/fourth/01.jpg'
            },
            {
              intro: '￥26.8',
              img: 'static/img/index/fourth/02.png'
            },
            {
              intro: '￥31.9',
              img: 'static/img/index/fourth/03.png'
            },
            {
              intro: '￥14.5',
              img: 'static/img/index/fourth/04.png'
            },
            {
              intro: '￥49.9',
              img: 'static/img/index/fourth/05.png'
            },
            {
              intro: '￥29.8',
              img: 'static/img/index/fourth/06.png'
            }
          ]
        }
      ]
    };
    commit('SET_FOURTH_INFO', fourth);
  });
};

// 加载5F陕西江西特色扶贫馆专栏数据
export const loadFifthFloor = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const fifth = {
      title: '5F陕西特色扶贫馆',
      detail: [
        {
          bigImg: 'static/img/index/fifth/big.png',
          itemFour: [
            {
              intro: '￥58.8',
              img: 'static/img/index/fifth/01.png'
            },
            {
              intro: '￥68',
              img: 'static/img/index/fifth/02.png'
            },
            {
              intro: '￥128',
              img: 'static/img/index/fifth/03.png'
            },
            {
              intro: '￥49.9',
              img: 'static/img/index/fifth/04.png'
            },
            {
              intro: '￥38.9',
              img: 'static/img/index/fifth/05.png'
            },
            {
              intro: '￥15.9',
              img: 'static/img/index/fifth/06.png'
            }
          ]
        }
      ]
    };
    commit('SET_FIFTH_INFO', fifth);
  });
};

// 加载6F湖北江西特色扶贫馆专栏数据
export const loadSixthFloor = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const sixth = {
      title: '6F湖北特色扶贫馆',
      detail: [
        {
          bigImg: 'static/img/index/sixth/big.jpg',
          itemFour: [
            {
              intro: '￥58.8',
              img: 'static/img/index/sixth/01.png'
            },
            {
              intro: '￥68',
              img: 'static/img/index/sixth/02.png'
            },
            {
              intro: '￥128',
              img: 'static/img/index/sixth/03.png'
            },
            {
              intro: '￥49.9',
              img: 'static/img/index/sixth/04.jpg'
            },
            {
              intro: '￥38.9',
              img: 'static/img/index/sixth/05.png'
            },
            {
              intro: '￥15.9',
              img: 'static/img/index/sixth/06.png'
            }
          ]
        }
      ]
    };
    commit('SET_SIXTH_INFO', sixth);
  });
};

// 请求获得商品详细信息
export const loadGoodsInfo = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        goodsImg: [
          'static/img/goodsDetail/itemDetailOne/1.jpg',
          'static/img/goodsDetail/itemDetailOne/2.jpg',
          'static/img/goodsDetail/itemDetailOne/3.jpg',
          'static/img/goodsDetail/itemDetailOne/4.jpg'
        ],
        title: '【西藏扶贫商品】净土 一捧藜麦',
        tags: ['一捧胜百谷'],
        discount: ['满148减10', '满218减20', '满288减30'],
        promotion: ['跨店满减', '多买优惠'],
        setMeal: [
          [
            {
              intro: '250g*2',
              price: 54.0
            },
            {
              intro: '500g*2',
              price: 98.0
            }
          ]
        ],
        // hot: [
        //   {
        //     img: 'static/img/goodsDetail/hot/1.jpg',
        //     price: 28.0,
        //     sale: 165076
        //   },
        //   {
        //     img: 'static/img/goodsDetail/hot/2.jpg',
        //     price: 36.0,
        //     sale: 135078
        //   },
        //   {
        //     img: 'static/img/goodsDetail/hot/3.jpg',
        //     price: 38.0,
        //     sale: 105073
        //   },
        //   {
        //     img: 'static/img/goodsDetail/hot/4.jpg',
        //     price: 39.0,
        //     sale: 95079
        //   },
        //   {
        //     img: 'static/img/goodsDetail/hot/5.jpg',
        //     price: 25.0,
        //     sale: 5077
        //   },
        //   {
        //     img: 'static/img/goodsDetail/hot/6.jpg',
        //     price: 20.0,
        //     sale: 3077
        //   }
        // ],
        goodsDetail: [
          'static/img/goodsDetail/intro/1.jpg'
        ],
        param: [
          {
            title: '商品名称',
            content: '净土 一捧藜麦'
          },
          {
            title: '商品编号',
            content: '1000015606'
          },
          {
            title: '店铺',
            content: '拉萨净土产业旗舰店'
          },
          {
            title: '商品毛重',
            content: '250.00g'
          },
          {
            title: '商品产地',
            content: '拉萨'
          },
          {
            title: '上架时间',
            content: '2018-11-06 18:18:18'
          }
        ],
        remarks: {
          goodAnalyse: 90,
          remarksTags: [ '颜色可人', '实惠优选', '严丝合缝', '极致轻薄', '质量没话说', '比定做还合适', '完美品质', '正品行货', '包装有档次', '不容易发热', '已经买第二个', '是全覆盖' ],
          remarksNumDetail: [ 2000, 3000, 900, 1 ],
          detail: [
            {
              username: 'p****1',
              values: 3,
              content: '颜色很好看，质量也不错！，还送了个指环，想不到哦！',
              goods: '4.7英寸-深邃蓝',
              create_at: '2018-05-15 09:20'
            },
            {
              username: '13****1',
              values: 5,
              content: '手感没的说，是硬壳，后背带有磨砂手感。很不错，很喜欢，还加送了钢化膜，支架环，物超所值，准备再买一个。很满意。物流很快。很愉快的一次购物！',
              goods: '5.5英寸-玫瑰金',
              create_at: '2018-05-13 15:23'
            },
            {
              username: '3****z',
              values: 4.5,
              content: '相当轻薄，店家还送了一大堆配件，*元非常值得！',
              goods: '4.7英寸-玫瑰金',
              create_at: '2018-05-05 12:25'
            },
            {
              username: 'gd****c',
              values: 3.5,
              content: '就是我想要的手机壳，壳子很薄，手感不错，就像没装手机壳一样，想要裸机手感的赶快下手了。',
              goods: '4.7英寸-中国红',
              create_at: '2018-04-06 16:23'
            },
            {
              username: 'r****b',
              values: 4.5,
              content: '壳子还不错，送的膜也可以，不过还是感觉膜小了那么一点，屏幕没法完全覆盖。对了，壳子稍微有点硬，可能会伤漆，所以不要频繁取壳就好。',
              goods: '4.7英寸-中国红',
              create_at: '2018-03-15 19:24'
            },
            {
              username: 'd****e',
              values: 5,
              content: '磨砂的，相当漂亮，尺寸非常合适！精工细作！',
              goods: '5.5英寸-星空黑',
              create_at: '2018-03-10 10:13'
            }
          ]
        }
      };
      commit('SET_GOODS_INFO', data);
      commit('SET_LOAD_STATUS', false);
    }, 300);
  });
};

// 获取商品列表
export const loadGoodsList = ({ commit }) => {
  commit('SET_LOAD_STATUS', true);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        asItems: [
          {
            img: 'static/img/goodsList/item-as-img-1.jpg',
            price: 39.9,
            intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬',
            num: 3140,
            sale: 9000
          },
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 36.6,
            intro: '狮普 苹果7/7 Plus手机壳 电镀 超薄 全包 防摔 保护外',
            num: 6160,
            sale: 8900
          },
          {
            img: 'static/img/goodsList/item-as-img-1.jpg',
            price: 38.6,
            intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬',
            num: 9160,
            sale: 8800
          },
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 35.6,
            intro: '狮普 苹果7/7 Plus手机壳 电镀 超薄 全包 防摔 保护外',
            num: 6160,
            sale: 7990
          },
          {
            img: 'static/img/goodsList/item-as-img-1.jpg',
            price: 38.6,
            intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬',
            num: 9160,
            sale: 7600
          },
          {
            img: 'static/img/goodsList/item-as-img-2.jpg',
            price: 35.6,
            intro: '狮普 苹果7/7 Plus手机壳 电镀 超薄 全包 防摔 保护外',
            num: 6160,
            sale: 6900
          }
        ],
        goodsList: [
          {
            img: 'static/img/goodsList/item-show-1.jpg',
            price: 36.60,
            intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬壳男女磨砂防摔 火影红(苹',
            remarks: 6160,
            shopName: '元亨利配件专营店',
            sale: 9900
          },
          {
            img: 'static/img/goodsList/item-show-2.jpg',
            price: 28.00,
            intro: '蒙奇奇 苹果6s手机壳磨砂防摔保护套 适用于iphone6/6s/6sPlus/6plus 6/6s 4.7英',
            remarks: 3000,
            shopName: 'monqiqi旗舰店',
            sale: 9600
          },
          {
            img: 'static/img/goodsList/item-show-3.jpg',
            price: 15.00,
            intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 2800,
            shopName: 'BIAZE官方旗舰店',
            sale: 8900
          },
          {
            img: 'static/img/goodsList/item-show-4.jpg',
            price: 29.90,
            intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 9000,
            shopName: '歌乐力手配专营店',
            sale: 8600
          },
          {
            img: 'static/img/goodsList/item-show-5.jpg',
            price: 15.00,
            intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 6160,
            shopName: 'BIAZE官方旗舰店',
            sale: 8560
          },
          {
            img: 'static/img/goodsList/item-show-6.jpg',
            price: 28.00,
            intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 9006,
            shopName: '歌乐力手配专营店',
            sale: 8530
          },
          {
            img: 'static/img/goodsList/item-show-7.jpg',
            price: 15.00,
            intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 8666,
            shopName: 'BIAZE官方旗舰店',
            sale: 8360
          },
          {
            img: 'static/img/goodsList/item-show-8.jpg',
            price: 29.90,
            intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 6080,
            shopName: '歌乐力手配专营店',
            sale: 7560
          },
          {
            img: 'static/img/goodsList/item-show-1.jpg',
            price: 36.60,
            intro: 'SKSK 苹果7/7plus手机壳 iPhone 7 Plus保护套全包硬壳男女磨砂防摔 火影红(苹',
            remarks: 6160,
            shopName: '元亨利配件专营店',
            sale: 7360
          },
          {
            img: 'static/img/goodsList/item-show-2.jpg',
            price: 28.00,
            intro: '蒙奇奇 苹果6s手机壳磨砂防摔保护套 适用于iphone6/6s/6sPlus/6plus 6/6s 4.7英',
            remarks: 3000,
            shopName: 'monqiqi旗舰店',
            sale: 6960
          },
          {
            img: 'static/img/goodsList/item-show-3.jpg',
            price: 15.00,
            intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 2800,
            shopName: 'BIAZE官方旗舰店',
            sale: 6560
          },
          {
            img: 'static/img/goodsList/item-show-4.jpg',
            price: 29.90,
            intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 9000,
            shopName: '歌乐力手配专营店',
            sale: 6360
          },
          {
            img: 'static/img/goodsList/item-show-5.jpg',
            price: 15.00,
            intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 6160,
            shopName: 'BIAZE官方旗舰店',
            sale: 5530
          },
          {
            img: 'static/img/goodsList/item-show-6.jpg',
            price: 28.00,
            intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 9006,
            shopName: '歌乐力手配专营店',
            sale: 5560
          },
          {
            img: 'static/img/goodsList/item-show-7.jpg',
            price: 15.00,
            intro: 'BIAZE 苹果6/6s手机壳 苹果iphone6s 4.7英寸透明手机套 清爽系列',
            remarks: 8666,
            shopName: 'BIAZE官方旗舰店',
            sale: 5260
          },
          {
            img: 'static/img/goodsList/item-show-8.jpg',
            price: 29.90,
            intro: '慕臣 苹果6s手机壳全包防摔磨砂软保护套男女 适用于iPhone6splus',
            remarks: 6080,
            shopName: '歌乐力手配专营店',
            sale: 3560
          }
        ]
      };
      commit('SET_GOODS_LIST', data);
      commit('SET_LOAD_STATUS', false);
    });
  });
};

// 添加购物车
export const addShoppingCart = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    commit('ADD_SHOPPING_CART', data);
  });
};

// 个人中心地址
export const loadAddress = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const address = [
      {
        addressId: '123456',
        name: 'Gavin',
        province: '广东省',
        city: '广州市',
        area: '天河区',
        address: '燕岭路633号',
        phone: '152****0609',
        postalcode: '510000'
      },
      {
        addressId: '123458',
        name: 'Kevin',
        province: '上海市',
        city: '上海市',
        area: '浦东新区',
        address: '沙新镇',
        phone: '158****0888',
        postalcode: '200120'
      }
    ];
    commit('SET_USER_ADDRESS', address);
  });
};

// 购物车默认商品
// export const loadShoppingCart = ({ commit }) => {
//   return new Promise((resolve, reject) => {
//     const data = [{
//       goods_id: 1529931938150,
//       count: 1,
//       img: 'static/img/goodsDetail/pack/1.jpg',
//       package: '4.7英寸-深邃蓝',
//       price: 28,
//       title: '苹果8/7手机壳iPhone7 Plus保护壳全包防摔磨砂硬外壳'
//     }];
//     commit('SET_SHOPPING_CART', data);
//   });
// };

// 添加注册用户
export const addSignUpUser = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    const userArr = localStorage.getItem('users');
    let users = [];
    if (userArr) {
      users = JSON.parse(userArr);
    }
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
  });
};

// 用户登录
export const login = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    if (data.username === 'Gavin' && data.password === '123456') {
      localStorage.setItem('loginInfo', JSON.stringify(data));
      commit('SET_USER_LOGIN_INFO', data);
      resolve(true);
      return true;
    }
    const userArr = localStorage.getItem('users');
    console.log(userArr);
    if (userArr) {
      const users = JSON.parse(userArr);
      for (const item of users) {
        if (item.username === data.username) {
          localStorage.setItem('loginInfo', JSON.stringify(item));
          commit('SET_USER_LOGIN_INFO', item);
          resolve(true);
          break;
        }
      }
    } else {
      resolve(false);
    }
  });
};

// 退出登陆
export const signOut = ({ commit }) => {
  localStorage.removeItem('loginInfo');
  commit('SET_USER_LOGIN_INFO', {});
};

// 判断是否登陆
export const isLogin = ({ commit }) => {
  const user = localStorage.getItem('loginInfo');
  if (user) {
    commit('SET_USER_LOGIN_INFO', JSON.parse(user));
  }
};
