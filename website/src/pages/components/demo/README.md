
学习资源
> https://github.com/websemantics/awesome-ant-design

> https://ant.design/index-cn

> https://github.com/ant-design/ant-design

> https://ant.design/docs/react/introduce-cn

> https://github.com/ant-design/ant-design-pro

> https://pro.ant.design/docs/getting-started-cn

> https://medium.com/@yoniweisbrod/styling-react-applications-with-ant-design-92b742aab0b0

> https://github.com/react-component

> https://reactstrap.github.io/

> https://getbootstrap.com/docs/4.1/components/buttons/

---

###### Ant Design React 和 Ant Design Pro 有什么区别？
可以理解为 Ant Design React 是一套 React 组件库，而 Pro 是使用了这套组件库的完整前端脚手架。
---
以下安装方式是学习和测试antd的方式，不是开发项目下的方式

---

> 全局安装 antd

```
sudo npm install antd-init -g
```
> 新建一个空文件夹（antd-demo）

```
sudo mkdir antd-demo //antd-demo
```
> 进入文件夹（antd-demo）

```
cd antd-demo
Beautiful-Girl:antd-demo zsm$ 
```
> 安装antd-init 初始化项目

```
sudo antd-init
```
> 运行项目

```
npm start
#不会跳出地址，浏览器输入：http://localhost:8000/
```

###### antd-init@2 仅适用于学习和体验 antd，如果你要开发项目，推荐使用 create-umi 进行项目初始化


> dora说明
```
//dora说明，不需要安装
地址：https://github.com/dora-js/dora
//备注：到目前为目项目需要手动刷新
```

> 在index.js里引入组入和html代码
```
import { DatePicker,Button,Icon } from 'antd';
//引入了DatePicker,Button,Icon 三个组件
function App() {
  return (
    <div style={{ margin: 100 }}>
      <h1>zsm</h1>
      <hr /><br />
      <DatePicker />
      <Button type="primary"><Icon type="right-circle" />Primary</Button>
      {/* type="primary" 相当于className="primary"  */}
      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

```

---
#### 正式项目中用create-react-app安装antd

---
> 全局安装create-react-app和yarn

```
sudo npm install -g create-react-app yarn
```
> 新建项目

```
sudo create-react-app react-antd-demo
```
> cd到项目目录

```
cd react-antd-demo
```
> 安装antd，初始化项目

```
sudo yarn add antd
```
###### 为什么要安装rewired，项目到目前为目只能是

```
//组件的引入
import Button from 'antd/lib/button';
//src/App.css里导入样式
@import '~antd/dist/antd.css';
```

> 安装 rewired

```
yarn add react-app-rewired customize-cra
```
> 修改package.json的配置

```
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
```



> 安装  babel-plugin-import，一个用于按需加载组件代码和样式的 babel 插件


```
//yarn安装 
sudo yarn add babel-plugin-import
//npm 安装 
sudo npm install antd babel-plugin-import --save

```
> 修改config-overrides.js文件

```
#在项目根目录创建一个 config-overrides.js
 const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
);
```

> 运行项目

```
//cd 目录
cd react-antd-demo
//启动项目
yarn start
```
---
#### 用dva 方式安装antd，官方推荐用create-umi

---
> 全局安装 dva-cli

```
sudo npm install dva-cli -g
```
> 用dva 新建安装项目

```
sudo dva new dva-ant-design
```
> 安装ant

```
sudo yarn add antd
```
> 按需加载 babel-plugin-import

```
//yarn安装 
sudo yarn add babel-plugin-import
//npm 安装 
sudo npm install antd babel-plugin-import --save
//然后只需从 antd 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。
// babel-plugin-import 会帮助你加载 JS 和 CSS，例：
import { DatePicker } from 'antd'; //DatePicker是一个组件
```
> 编辑.webpackrc文件，使 babel-plugin-import插件生效

```
{
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ]
}
```
> 运行

```
//cd 目录
cd dva-ant-design
//启动项目
yarn start
```
> 如果报错，就删除 node_modules

```
//删除node_modules
sudo rm -rf node_modules
//安装node_modules
sudo yarn install
//重新安装antd
yarn add antd
```

---
#### 用create-umi来安装项目
> 全局安装umi

```
//yarn安装方式
yarn global add umi 
//npm 安装方式
npm install -g umi
```

> 创建一个空目录

```
 mkdir myapp
$ cd myapp
```
> 初始化应用

```
sudo yarn create umi
```
>Select 选择

```
> 选择 app, 然后回车确认。
> 选上 antd 和 dva，然后回车确认。
```
> 安装依赖

```
sudo yarn
```
> 运行
```
yarn start
```
> 安装npx
```
yarn global add npx
```
> 新建路由

```
//通过命令创建 /products 路由
npx umi g page products

//创建成功状态如下
 //create src/pages/products.js
 //create src/pages/products.css
```
> 编写 UI Component

```
//创建文件夹component,新建ProductList.js，demo如下
const ProductList = ({ onDelete, products }) => {
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Actions',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
    <Button>Delete</Button>
      </Popconfirm>
    );
    },
  }];
  return (
    <Table
      dataSource={products}
      columns={columns}
    />
  );
};

export default ProductList;
```
> 定义 dva Model

```
//新建 model src/models/products.js
export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};

#namespace 表示在全局 state 上的 key

#state 是初始值，在这里是空数组

#reducers 等同于 redux 里的 reducer，接收 action，同步更新 state

#umi 里约定 src/models 下的 model 会被自动注入，你无需手动注入。
```
> connect 连接起来

```
//src/pages/products.js
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Products);
```
> 初始化数据

```
//src/app.js
export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
    initialState: {
      products: [
        { name: 'dva', id: 1 },
        { name: 'antd', id: 2 },
      ],
    },
  },
};
```










---
#### ant design pro  安装

---

> 安装

```
//第一种直接下载源码
//安装依赖
  sudo npm install
//运行代码
  npm start
  
//第二种克隆
git clone --depth=1 https://github.com/ant-design/ant-design-pro.git my-project
$ cd my-project
//安装依赖
sudo npm install
//运行代码
npm start

```
> enquire-js  移动的判断

```
//安装
 sudo yarn add enquire-js
 
```


























