// import React from 'react'
// import {
//   Route,
//   IndexRoute,
// } from 'react-router'
// import App from './base'
// import Welcome from './pages/welcome'
// // import Login from './containers/App/login'
//
// // import {
// //   houseCheck,
// //   houseManage,
// //   houseDetail,
// //   roomDetail,
// // } from './pages/house'
//
// // import popCheck from './pages/pop/index'
//
// // 表格列表
// const table = (location, cb) => {
//   require.ensure([], (require) => {
//     cb(null, require('./pages/menu/table').default)
//   }, 'table')
// }
//
// // 图表
// const echarts = (location, cb) => {
//   require.ensure([], (require) => {
//     cb(null, require('./pages/menu/echarts').default)
//   }, 'echarts')
// }
//
// // 登录
// const Login = (location, cb) => {
//   require.ensure([], (require) => {
//     cb(null, require('./pages/login').default)
//   }, 'login')
// }
//
// // 注册
// const Register = (location, cb) => {
//   require.ensure([], (require) => {
//     cb(null, require('./pages/register').default)
//   }, 'register')
// }
//
// // 测试
// const chat = (location, cb) => {
//   require.ensure([], (require) => {
//     cb(null, require('./pages/chat').default)
//   }, 'chat')
// }
// // 编辑器
// const editor = (location, cb) => {
//   require.ensure([], (require) => {
//     cb(null, require('./pages/menu/editor').default)
//   }, 'editor')
// }
//
// // kindEditor
// // const kindEditor = (location, cb) => {
// //   require.ensure([], require => {
// //     cb(null, require('./pages/menu/kindEditor').default)
// //   }, 'kindEditor')
// // }
//
// /* 进入路由的判断 */
// function isLogin(nextState, replaceState) {
//   const token = sessionStorage.getItem('token')
//   if (!token) {
//     replaceState('/login')
//     // hashHistory.push('/login')
//   }
// }
//
// const routes = (
//   <Route>
//     <Route path="/" component={App} onEnter={isLogin}>
//       <IndexRoute component={Welcome} />
//       <Route path="/table" getComponent={table} />
//       <Route path="/echarts" getComponent={echarts} />
//       <Route path="/editor" getComponent={editor} />
//
//       <Route path="/chat" getComponent={chat} />
//
//     </Route>
//     <Route path="/login" getComponent={Login} />
//     <Route path="/register" getComponent={Register} />
//   </Route>
// );
//
// export default routes
