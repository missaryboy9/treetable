// 递归
export const recursive = (data, type) => {
  if (data.parentId === '-1') {
    recur(data, type);
  } else {
    recur2(data, type);
  }
};

// 筛选
export const recurrootnode = (data) => {
  arrayfilter = [];
  noderecur(data);
  return arrayfilter;
};

// 递归函数循环体
let recur = (a, b) => {
  a.checked = b;
  if (a.children) {
    a.children.forEach(e => {
      recur(e, b);
    });
  }
  if (a.apis) {
    a.apis.forEach(c => {
      c.checked = b;
    });
  }
};

let recur2 = (a, b) => {
  a.checked = b;
  if (a.children) {
    a.children.forEach(e => {
      recur2(e, b);
    });
  }
};

// 筛选函数(筛选出checked为true的id值和menuType)
let arrayfilter = [];
let noderecur = (a) => {
  if (a.checked) {
    arrayfilter.push({
      id: a.id,
      menuType: a.menuType
    });
  }
  if (a.children) {
    a.children.forEach(e => {
      noderecur(e);
    });
  }
  if (a.apis) {
    a.apis.forEach(c => {
      if (c.checked) {
        arrayfilter.push({
          id: c.id,
          menuType: c.menuType
        });
      }
    });
  }
};
