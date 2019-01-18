/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = __webpack_require__(11);

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SALT_WORK_FACTOR = 10;
var Schema = _mongoose2.default.Schema;

var userSchema = new Schema({
  // 用户手机号
  phone: {
    type: String,
    unique: true,
    required: [true, "Phone is required."]
  },
  name: {
    type: String,
    required: [true, "Nickname is required."],
    lowercase: true
  },
  // 用户密码
  password: { type: String, required: [true, "Password is required."] },
  // 用户头像
  picture: { type: String, default: "" },
  // 用户个性签名
  signature: { type: String, default: "" },
  // 用户类型。
  role: { type: Number, default: 0 },
  // 用户性别
  gender: { type: String, default: "famale" },
  // 用户地址
  address: [{ type: String }],
  // 用户组别
  group: { type: Number },
  // 用户邮箱
  email: { type: String, required: false, lowercase: true },
  // 用户创建的blog
  blog: [{ type: Schema.Types.ObjectId, ref: "Blog" }],
  // 用户收藏的blog
  blogs: [{ type: Schema.Types.ObjectId, ref: "Blog", _id: false }],
  // meta信息
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() }
});

exports.default = _mongoose2.default.model("User", userSchema);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _fs = __webpack_require__(4);

var _fs2 = _interopRequireDefault(_fs);

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _http = __webpack_require__(5);

var _http2 = _interopRequireDefault(_http);

var _cookieParser = __webpack_require__(6);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = __webpack_require__(7);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _router = __webpack_require__(8);

var _router2 = _interopRequireDefault(_router);

var _mongo = __webpack_require__(15);

var _mongo2 = _interopRequireDefault(_mongo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// express instance
var app = (0, _express2.default)();
var port = 8888;
// 普通server
var server = _http2.default.createServer(app);
// 增强server和sslServer支持webSocket
__webpack_require__(16)(app, server);

// common middleware
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());

// mongodb setup
(0, _mongo2.default)(app);
// routes middleware（普通http路由请求）
(0, _router2.default)(app);
// // 路由未匹配到
// app.use(routeNotMatch);
// // 错误收集
// app.use(errorHandler);

// http  请求监听端口
server.listen(port, function () {
  return console.log("bigMonkey server listening on port " + port);
});

// console.log("process.env.NODE_ENV is: ", process.env.NODE_ENV);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _test = __webpack_require__(9);

var _test2 = _interopRequireDefault(_test);

var _currentUser = __webpack_require__(12);

var _currentUser2 = _interopRequireDefault(_currentUser);

var _logList = __webpack_require__(13);

var _logList2 = _interopRequireDefault(_logList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
    app.use('/api/test', _test2.default);
    app.use('/api/currentUser', _currentUser2.default);
    app.use('/api/login', _logList2.default);
}; // routes

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _find = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('route /api/user reques Time: ', Date.now());
  next();
});

// route: /api/test 查询user表全部数据 
router.get('/', _find.find);

exports.default = router;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.find = undefined;

var _user = __webpack_require__(1);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var find = exports.find = function find(req, res) {
    _user2.default.find(function (err, users) {
        if (err) {
            // errCode 3 服务器错误
            res.status(500).json({ errCode: 3, result: err });
        } else {
            res.status(200).json({
                errCode: 0,
                result: { users: users }
            });
        }
    });
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
// import { find } from './find';


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('route /api/currentUser reques Time: ', Date.now());
    next();
});

// route: /api/test 查询user表全部数据 
router.get('/', function (req, res) {
    res.status(200).json({
        address: "西湖区工专路 77 号",
        avatar: "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
        country: "China",
        email: "antdesign@alipay.com",
        geographic: {
            province: {
                label: "浙江省",
                key: "330000"
            },
            city: {
                label: "杭州市",
                key: "330100"
            }
        },
        group: "蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED",
        name: "韩兆科",
        notifyCount: 12,
        phone: "15717671152",
        signature: "海纳百川，有容乃大",
        tags: [{ key: "0", label: "很有想法的" }, { key: "1", label: "专注设计" }, { key: "2", label: "辣~" }],
        title: "交互专家",
        unreadCount: 11,
        userid: "00000001"
    });
});

exports.default = router;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _account = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('route /api/login reques Time: ', Date.now());
  next();
});

// route: /api/login 登录 
router.post('/account', _account.account);

exports.default = router;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.account = undefined;

var _user = __webpack_require__(1);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var account = exports.account = function account(req, res) {
    var _req$body = req.body,
        userName = _req$body.userName,
        password = _req$body.password;

    _user2.default.findOne({ 'name': userName }, function (err, users) {
        if (err) {
            // 查询失败
            console.log('mmmmmmmmmmmmmmmmmm走到这里');
            res.status(200).json({ currentAuthority: "guest", status: "error", type: "account" });
        } else {
            console.log('yyyyyyyyyyyyyyyyyyy come on');
            if (users) {
                console.log(users, 123123123123);
                res.status(200).json({ currentAuthority: "guest", status: "error", type: "account", msg: '用户dui' });
                // res.status(200).json({ currentAuthority: "guest", status: "error", type: "account" });
            } else {
                res.status(200).json({ currentAuthority: "guest", status: "error", type: "account", msg: '用户未注册' });
            }
        }
    });

    // res.status(200).json({ currentAuthority: "guest", status: "error", type: "account" });
    // res.status(200).json({ currentAuthority: "admin",status: "ok",type: "account" });
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(2);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  _mongoose2.default.Promise = global.Promise;
  // 线上环境
  _mongoose2.default.connect("mongodb://47.98.195.42:27017/bigMonkey", {
    user: "hanhou",
    pass: "hanhou1214",
    // 大哥手下留情

    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 1000, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    useNewUrlParser: true,
    useCreateIndex: true
  });
  _mongoose2.default.connection.once("open", function () {
    return console.log("mongoose connection success");
  }).on("error", function (error) {
    return console.log("mongoose connection error", error);
  });
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("express-ws");

/***/ })
/******/ ]);