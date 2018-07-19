import Mock from 'mockjs';
const LoginUsers = [{
  id: 1,
  username: 'admin',
  password: '123456',
  avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
  name: 'sxj'
}];

const Users = [];
for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}
const treedata = [];
// for (let i = 0; i < 80; i++) {
treedata.push({
  'id': '001824216290',
  'menuName': '绩效考核',
  'menuNote': '绩效考核管理',
  'menuUri': null,
  'menuTag': null,
  'menuType': 0,
  'status': 1,
  'editable': false,
  'appId': '000564377339',
  'parentId': '-1',
  'orderBy': 10,
  'leaf': false,
  'checked': false,
  'children': [{
      'id': '001306943502',
      'menuName': '员工管理',
      'menuNote': '员工信息的增删改查',
      'menuUri': '/nja-biz-demo/appraise/employee.html',
      'menuTag': 'appraise-employee',
      'menuType': 0,
      'editable': false,
      'status': 1,
      'appId': '000564377339',
      'parentId': '001824216290',
      'orderBy': 20,
      'leaf': true,
      'checked': false,
      'apis': null
    },
    {
      'id': '001842861634',
      'menuName': '绩效考核及明细管理',
      'menuNote': '绩效考核及明细管理',
      'menuUri': null,
      'menuTag': null,
      'menuType': 0,
      'editable': false,
      'status': 1,
      'appId': '000564377339',
      'parentId': '001824216290',
      'orderBy': 30,
      'leaf': false,
      'checked': false,
      'children': [{
          'id': '001984681016',
          'menuName': '绩效考核',
          'menuNote': '绩效考核信息的增删改查',
          'menuUri': '/nja-biz-demo/appraise/appraise.html',
          'menuTag': 'appraise-appraise',
          'menuType': 0,
          'status': 1,
          'editable': false,
          'appId': '000564377339',
          'parentId': '001842861634',
          'orderBy': 40,
          'leaf': true,
          'checked': false,
          'apis': [{
              'priname': '增加',
              'id': '000001991',
              'checked': false,
              'menuType': 1
            },
            {
              'priname': '删除',
              'id': '000001992',
              'checked': false,
              'menuType': 1
            },
            {
              'priname': '修改',
              'id': '000001993',
              'checked': false,
              'menuType': 1
            },
            {
              'priname': '查询',
              'id': '000001994',
              'checked': false,
              'menuType': 1
            }
          ]
        },
        {
          'id': '000750152662',
          'menuName': '绩效考核明细管理',
          'menuNote': '绩效考核明细管理',
          'menuUri': '/nja-biz-demo/appraise/appraiseDetail.html',
          'menuTag': 'appraise-appraiseDetail',
          'menuType': 0,
          'status': 1,
          'editable': false,
          'appId': '000564377339',
          'parentId': '001842861634',
          'orderBy': 50,
          'leaf': true,
          'checked': false,
          'apis': [{
              priname: '增加',
              id: '000001991',
              checked: false,
              'menuType': 1
            },
            {
              priname: '删除',
              id: '000001992',
              checked: false,
              'menuType': 1
            },
            {
              priname: '修改',
              id: '000001993',
              checked: false,
              'menuType': 1
            },
            {
              priname: '查询',
              id: '000001994',
              checked: false,
              'menuType': 1
            }
          ]
        }
      ]
    },
    {
      'id': '000262430744',
      'menuName': '评分分类管理',
      'menuNote': '评分分类的增删改查',
      'menuUri': '/nja-biz-demo/appraise/scoreCatgory.html',
      'menuTag': 'appraise-scoreCatgory',
      'menuType': 0,
      'status': 1,
      'editable': false,
      'appId': '000564377339',
      'parentId': '001824216290',
      'orderBy': 60,
      'leaf': true,
      'checked': false,
      'children': null
    },
    {
      'id': '001421344864',
      'menuName': '评分记录管理',
      'menuNote': '评分记录管理',
      'menuUri': '/nja-biz-demo/appraise/scoreItem.html',
      'menuTag': 'appraise-scoreItem',
      'menuType': 0,
      'status': 1,
      'editable': false,
      'appId': '000564377339',
      'parentId': '001824216290',
      'orderBy': 70,
      'leaf': true,
      'checked': false,
      'children': null
    }
  ]
});
// }
// for (let i = 0; i < 86; i++) {
//   treedata.push(Mock.mock({
//     'id|1-1000': 1,
//     name: Mock.mock('@cname()'),
//     editpermise: [],
//     leaf: false,
//     children: [Mock.mock({
//       'id|1000-100000': 1,
//       name: Mock.mock('@cname()'),
//       permise: ['增加', '删除', '修改']
//     })]
//   }));
// }

export {
  LoginUsers,
  Users,
  treedata
};
