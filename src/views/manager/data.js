var demoData = {
  // 重点样本资源监控数据
  SampleResourceMonitorData: [
    {
      'company': '天津医科大学公卫学院',
      'type': '样本库-细胞样本',
      'number': '6283',
      'time': '2019.8.8',
      'active': true,
      'do': 'in',
      'site': [117.1898360000, 39.1116600000]
    },
    {
      'company': '天津医科大学眼科医院',
      'type': '样本库-眼液样本',
      'number': '628',
      'time': '2019.7.15',
      'do': 'in',
      'site': [117.1269180000, 39.1039450000]
    },
    {
      'company': '天津医科大学总医院',
      'type': '样本库-脑脊液样本',
      'number': '268',
      'time': '2019.7.21',
      'do': 'in',
      'site': [117.1928960000, 39.1235200000]
    }
  ],
  // 实时异常报警通知
  WarningNoticeData: [
    {
      'company': '广西桂林医学院',
      'inform': '故障',
      'text': '未按时传输数据',
      'time': '2019-11-01 20:10:00',
      // 'active': true,
      'site': [110.1688990000, 25.2303810000]
    },
    {
      'company': '上海新华医院',
      'inform': '故障',
      'text': '数据异常',
      'time': '2019-11-01 04:42:13',
      'site': [121.5241110000, 31.2790990000]
    },
    {
      'company': '甘肃省妇幼保健院',
      'inform': '失联',
      'text': '节点失联',
      'time': '2019-10-31 16:10:00',
      'site': [103.7836810000, 36.0763560000]
    },
    {
      'company': '山东中医药研究院',
      'inform': '故障',
      'text': '系统故障',
      'time': '2019-10-31 14:27:00',
      'site': [117.0621300000, 36.6511540000]
    }
  ],
  showData: [
    {
      'company': '上海交通大学医学院附属新华医院',
      'number': '185.2',
      'data': [
        {
          'count': '124.3',
          'type': '血液',
          'number': '3213',
          'organization': '病理科',
          'inOut': '出库'
        },
        {
          'count': '60.9',
          'type': '血液',
          'number': '2156',
          'organization': '病理科',
          'inOut': '入库'
        }
      ]
    },
    {
      'company': '上海市瑞金医院',
      'number': '152.5',
      'data': [
        {
          'count': '100',
          'type': '血液',
          'number': '3125',
          'organization': '检验科',
          'inOut': '出库'
        },
        {
          'count': '52.5',
          'type': '组织',
          'number': '2588',
          'organization': '病理科',
          'inOut': '出库'
        }
      ]
    },
    {
      'company': '宝藤生物',
      'number': '65',
      'data': [
        {
          'count': '30',
          'type': 'DNA',
          'number': '1266',
          'organization': '测序平台',
          'inOut': '入库'
        },
        {
          'count': '35',
          'type': 'RNA',
          'number': '2588',
          'organization': '测序平台',
          'inOut': '入库'
        }
      ]
    },
    {
      'company': '上海厦维生物',
      'number': '70',
      'data': [
        {
          'count': '33',
          'type': 'DNA',
          'number': '356',
          'organization': '测序平台',
          'inOut': '入库'
        },
        {
          'count': '37',
          'type': 'RNA',
          'number': '124',
          'organization': '测序平台',
          'inOut': '出库'
        }
      ]
    },
    {
      'company': '仁东检验所',
      'number': '17',
      'data': [
        {
          'count': '17',
          'type': 'DNA',
          'number': '3812',
          'organization': '医学部',
          'inOut': '出库'
        }
      ]
    },
    {
      'company': '上海鹍远生物技术有限公司',
      'number': '36',
      'data': [
        {
          'count': '36',
          'type': 'DNA',
          'number': '58',
          'organization': '技术部',
          'inOut': '出库'
        }
      ]
    },
    {
      'company': '复旦大学附属儿科医院',
      'number': '36',
      'data': [
        {
          'count': '36',
          'type': '血液',
          'number': '58',
          'organization': '样本库',
          'inOut': '入库'
        }
      ]
    },
    {
      'company': '上海市第一人民医院眼科研究所',
      'number': '5',
      'data': [
        {
          'count': '5',
          'type': '血液',
          'number': '256',
          'organization': '样本库',
          'inOut': '入库'
        }
      ]
    },
    {
      'company': '复旦大学附属第四医院',
      'number': '65.8',
      'data': [
        {
          'count': '36',
          'type': '血液',
          'number': '1288',
          'organization': '检验科',
          'inOut': '出库'
        },
        {
          'count': '29.8',
          'type': '全血',
          'number': '2411',
          'organization': '病理科',
          'inOut': '出库'
        }
      ]
    },
    {
      'company': '上海市第六人民医院',
      'number': '193.0',
      'data': [
        {
          'count': '110.0',
          'type': '全血',
          'number': '1056',
          'organization': '样本库',
          'inOut': '入库'
        },
        {
          'count': '68.0',
          'type': '组织',
          'number': '2411',
          'organization': '样本库',
          'inOut': '入库'
        },
        {
          'count': '15.0',
          'type': '尿液',
          'number': '125',
          'organization': '样本库',
          'inOut': '入库'
        }
      ]
    },
    {
      'company': '上海市胸科医院',
      'number': '24.5',
      'data': [
        {
          'count': '11.5',
          'type': '血液',
          'number': '2187',
          'organization': '病理科',
          'inOut': '出库'
        },
        {
          'count': '13.0',
          'type': '组织',
          'number': '541',
          'organization': '检验科',
          'inOut': '出库'
        }
      ]
    },
    {
      'company': '上海市儿童医院',
      'number': '51.0',
      'data': [
        {
          'count': '25.0',
          'type': '血液',
          'number': '3500',
          'organization': '样本库',
          'inOut': '入库'
        },
        {
          'count': '26.0',
          'type': '全血',
          'number': '3200',
          'organization': '病理科',
          'inOut': '出库'
        }
      ]
    },
    {
      'company': '上海交通大学附属第六人民医院骨病临床诊治与研究中心',
      'number': '73.0',
      'data': [
        {
          'count': '73.0',
          'type': '组织',
          'number': '3266',
          'organization': '',
          'inOut': '出库'
        }
      ]
    },
    {
      'company': '上海市第十人民医院',
      'number': '33.0',
      'data': [
        {
          'count': '21.0',
          'type': '血液',
          'number': '1288',
          'organization': '',
          'inOut': '入库'
        },
        {
          'count': '12.0',
          'type': '组织',
          'number': '3268',
          'organization': '',
          'inOut': '出库'
        }
      ]
    },
    {
      'company': '上海市疾控中心',
      'number': '489.0',
      'data': [
        {
          'count': '125.0',
          'type': '血液',
          'number': '31',
          'organization': '',
          'inOut': '出库'
        },
        {
          'count': '156.0',
          'type': '菌液',
          'number': '2625',
          'organization': '',
          'inOut': '入库'
        },
        {
          'count': '208.0',
          'type': '血浆',
          'number': '1326',
          'organization': '',
          'inOut': '入库'
        }
      ]
    },
    {
      'company': '上海中医药大学曙光医院',
      'number': '158.0',
      'data': [
        {
          'count': '65.0',
          'type': '血液',
          'number': '1088',
          'organization': '',
          'inOut': '入库'
        },
        {
          'count': '45.0',
          'type': '组织',
          'number': '2367',
          'organization': '',
          'inOut': '出库'
        },
        {
          'count': '48.0',
          'type': '尿液',
          'number': '1688',
          'organization': '',
          'inOut': '出库'
        }
      ]
    }
  ]

}

export { demoData }
