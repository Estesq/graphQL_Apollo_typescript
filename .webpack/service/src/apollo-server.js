/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apollo-server.ts":
/*!******************************!*\
  !*** ./src/apollo-server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.graphqlHandler = exports.connection = void 0;
const apollo_server_lambda_1 = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const Tenant_1 = __webpack_require__(/*! ./entity/Tenant */ "./src/entity/Tenant.ts");
const User_1 = __webpack_require__(/*! ./entity/User */ "./src/entity/User.ts");
const resolvers_1 = __webpack_require__(/*! ./resolvers */ "./src/resolvers.ts");
const type_defs_1 = __webpack_require__(/*! ./type-defs */ "./src/type-defs.ts");
exports.connection = typeorm_1.createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "aniketgiram",
    password: "root",
    database: "test",
    entities: [Tenant_1.Tenant, User_1.Users],
    synchronize: true,
    logging: false,
});
const apolloServer = new apollo_server_lambda_1.ApolloServer({ resolvers: resolvers_1.resolvers, typeDefs: type_defs_1.typeDefs });
exports.graphqlHandler = apolloServer.createHandler();


/***/ }),

/***/ "./src/entity/Tenant.ts":
/*!******************************!*\
  !*** ./src/entity/Tenant.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tenant = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Tenant = class Tenant {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Tenant.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    typeorm_1.Index({ unique: true }),
    __metadata("design:type", String)
], Tenant.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Tenant.prototype, "label", void 0);
__decorate([
    typeorm_1.Column({ name: "created_at" }),
    __metadata("design:type", Date)
], Tenant.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ name: "updated_at" }),
    __metadata("design:type", Date)
], Tenant.prototype, "updatedAt", void 0);
Tenant = __decorate([
    typeorm_1.Entity()
], Tenant);
exports.Tenant = Tenant;


/***/ }),

/***/ "./src/entity/User.ts":
/*!****************************!*\
  !*** ./src/entity/User.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Users = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const Tenant_1 = __webpack_require__(/*! ./Tenant */ "./src/entity/Tenant.ts");
let Users = class Users {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Users.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Tenant_1.Tenant),
    typeorm_1.JoinColumn({ name: 'tenant_id', referencedColumnName: 'id' }),
    __metadata("design:type", Tenant_1.Tenant)
], Users.prototype, "tenant", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ name: "first_name" }),
    __metadata("design:type", String)
], Users.prototype, "firstName", void 0);
__decorate([
    typeorm_1.Column({ name: "last_name" }),
    __metadata("design:type", String)
], Users.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column({ name: "created_at" }),
    __metadata("design:type", Date)
], Users.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.Column({ name: "updated_at" }),
    __metadata("design:type", Date)
], Users.prototype, "updatedAt", void 0);
Users = __decorate([
    typeorm_1.Entity()
], Users);
exports.Users = Users;


/***/ }),

/***/ "./src/resolvers.ts":
/*!**************************!*\
  !*** ./src/resolvers.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolvers = void 0;
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const Tenant_1 = __webpack_require__(/*! ./entity/Tenant */ "./src/entity/Tenant.ts");
const apollo_server_1 = __webpack_require__(/*! ./apollo-server */ "./src/apollo-server.ts");
const User_1 = __webpack_require__(/*! ./entity/User */ "./src/entity/User.ts");
const testing_1 = __webpack_require__(/*! ./testing/testing */ "./src/testing/testing.ts");
exports.resolvers = {
    Query: {
        testMessage: () => 'Hello world',
        getTenants: () => __awaiter(void 0, void 0, void 0, function* () {
            let repo = (yield apollo_server_1.connection).getRepository(Tenant_1.Tenant);
            testing_1.testMutation;
            testing_1.testQuery;
            return yield repo.find();
        }),
        getTenantById: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            let repo = (yield apollo_server_1.connection).getRepository(Tenant_1.Tenant);
            return yield repo.findOne({ where: { id: id } });
        }),
        getTenantByName: (_, { name }) => __awaiter(void 0, void 0, void 0, function* () {
            let repo = (yield apollo_server_1.connection).getRepository(Tenant_1.Tenant);
            return yield repo.findOne({ where: { name: name } });
        }),
        getUserByName: (_, { firstName }) => __awaiter(void 0, void 0, void 0, function* () {
            let repo = (yield apollo_server_1.connection).getRepository(User_1.Users);
            return yield repo.findOne({ where: { firstName: firstName } });
        }),
        getUserByEmail: (_, { email }) => __awaiter(void 0, void 0, void 0, function* () {
            let repo = (yield apollo_server_1.connection).getRepository(User_1.Users);
            return yield repo.findOne({ where: { email: email } });
        }),
        getUserByTenantID: (_, { tenantId }) => __awaiter(void 0, void 0, void 0, function* () {
            let user_repo = (yield apollo_server_1.connection).getRepository(User_1.Users);
            const data = yield user_repo.query("SELECT * FROM USERS RIGHT JOIN TENANT ON USERS.tenant_id = TENANT.id WHERE TENANT.id='" + tenantId + "'");
            const users = Array();
            data.forEach((elements) => {
                const user = new User_1.Users();
                user.firstName = elements.first_name;
                user.lastName = elements.last_name;
                user.email = elements.email;
                user.createdAt = elements.created_at;
                user.updatedAt = elements.updated_at;
                user.tenant = elements.tenant_id;
                users.push(user);
            });
            return users;
        }),
        getUsersByTenantName: (_, { tenant_name }) => __awaiter(void 0, void 0, void 0, function* () {
            let user_repo = (yield apollo_server_1.connection).getRepository(User_1.Users);
            const data = yield user_repo.query("SELECT * FROM USERS RIGHT JOIN TENANT ON USERS.tenant_id = TENANT.id WHERE TENANT.name='" + tenant_name + "'");
            const users = Array();
            data.forEach((elements) => {
                const user = new User_1.Users();
                user.firstName = elements.first_name;
                user.lastName = elements.last_name;
                user.email = elements.email;
                user.createdAt = elements.created_at;
                user.updatedAt = elements.updated_at;
                user.tenant = elements.tenant_id;
                users.push(user);
            });
            return users;
        })
    },
    Mutation: {
        createTenant: (_, { name, label }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                let repo = (yield apollo_server_1.connection).getRepository(Tenant_1.Tenant);
                const tenant = new Tenant_1.Tenant();
                tenant.name = name;
                tenant.label = label;
                tenant.createdAt = new Date();
                tenant.updatedAt = new Date();
                yield repo.save(tenant);
                return true;
            }
            catch (error) {
                console.log(error);
                return false;
            }
        }),
        updateTenant: (_, { id, name, label }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                let repo = (yield apollo_server_1.connection).getRepository(Tenant_1.Tenant);
                const tenant = new Tenant_1.Tenant();
                tenant.name = name;
                tenant.label = label;
                tenant.updatedAt = new Date();
                yield repo.update({ id }, tenant);
                return true;
            }
            catch (error) {
                console.log(error);
                return false;
            }
        }),
        createUser: (_, { tenant_id, email, first_name, last_name }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                let repo = (yield apollo_server_1.connection).getRepository(User_1.Users);
                const user = new User_1.Users();
                user.email = email;
                user.firstName = first_name;
                user.lastName = last_name;
                user.createdAt = new Date();
                user.updatedAt = new Date();
                user.tenant = tenant_id;
                yield repo.save(user);
                return true;
            }
            catch (error) {
                console.log(error);
                return false;
            }
        }),
        updateUser: (_, { id, tenant_id, email, first_name, last_name }) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                let repo = (yield apollo_server_1.connection).getRepository(User_1.Users);
                const user = new User_1.Users();
                user.email = email;
                user.firstName = first_name;
                user.lastName = last_name;
                user.tenant = tenant_id;
                user.updatedAt = new Date();
                yield repo.update({ id }, user);
                return true;
            }
            catch (error) {
                console.log(error);
                return false;
            }
        })
    },
};


/***/ }),

/***/ "./src/testing/testQueryAndMutation.ts":
/*!*********************************************!*\
  !*** ./src/testing/testQueryAndMutation.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mutation = exports.query = void 0;
exports.query = `
    query{
        getTenants{
                name
        }
        getTenantById(id:"demoid"){
                name
        }
        getTenantByName(name:"demo"){
                name
        }
        getUserByName(firstName:"demo"){
                firstName
        }
        getUserByEmail(email:"demo"){
                firstName
        }
        getUserByTenantID(tenantId:"demoid"){
                firstName
        }
        getUsersByTenantName(tenant_name:"demo"){
                firstName
        }
    }
`;
exports.mutation = `
        mutation{
                createTenant(name:"demo",label:"upwork")
                updateTenant(id:"demoID",name:"demo",label:"upwork2")
                createUser(tenant_id:"demoID",email:"demo",first_name:"demo",last_name:"demo")
                updateUser(id:"demoID",tenant_id:"demoID",email:"demo", first_name:"demo", last_name:"demo")
        }
`;


/***/ }),

/***/ "./src/testing/testing.ts":
/*!********************************!*\
  !*** ./src/testing/testing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.testQuery = exports.testMutation = void 0;
const schema_1 = __webpack_require__(/*! @graphql-tools/schema */ "@graphql-tools/schema");
const mock_1 = __webpack_require__(/*! @graphql-tools/mock */ "@graphql-tools/mock");
const graphql_1 = __webpack_require__(/*! graphql */ "graphql");
const type_defs_1 = __webpack_require__(/*! ../type-defs */ "./src/type-defs.ts");
const testQueryAndMutation_1 = __webpack_require__(/*! ./testQueryAndMutation */ "./src/testing/testQueryAndMutation.ts");
const schemaString = type_defs_1.typeDefs;
const schema = schema_1.makeExecutableSchema({ typeDefs: schemaString });
const schemaWithMocks = mock_1.addMocksToSchema({ schema });
exports.testMutation = graphql_1.graphql(schemaWithMocks, testQueryAndMutation_1.mutation).then((result) => console.log('Got mutation result', result)).catch((err) => {
    console.log("error", err);
});
exports.testQuery = graphql_1.graphql(schemaWithMocks, testQueryAndMutation_1.query).then((result) => console.log('Got query result', result)).catch((err) => {
    console.log("error", err);
});


/***/ }),

/***/ "./src/type-defs.ts":
/*!**************************!*\
  !*** ./src/type-defs.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.typeDefs = void 0;
const apollo_server_lambda_1 = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");
exports.typeDefs = apollo_server_lambda_1.gql `
  type Query {
    testMessage: String!
    getTenants: [Tenant]
    getTenantById(id: String!): Tenant
    getTenantByName(name: String!): Tenant
    getUserByName(firstName: String!): Users
    getUserByEmail(email:String):Users
    getUserByTenantID(tenantId:String):[Users]
    getUsersByTenantName(tenant_name:String):[Users]
  }
  type Tenant{
    id:String,
    name:String,
    label:String,
    createdAt:String,
    updatedAt:String
  } 
  type Users{
    id: String,
    email: String,
    firstName : String,
    lastName : String,
    createdAt: String,
    updatedAt : String,
    tenant : String
  }
  type Mutation {
    createTenant(name:String!,label:String!): Boolean
    createUser(tenant_id:String,email:String!,first_name:String!,last_name:String!): Boolean
    updateTenant(id:String!,name:String!,label:String!):Boolean
    updateUser(id:String, tenant_id:String, email:String, first_name:String, last_name:String):Boolean
  }
`;


/***/ }),

/***/ "@graphql-tools/mock":
/*!**************************************!*\
  !*** external "@graphql-tools/mock" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@graphql-tools/mock");;

/***/ }),

/***/ "@graphql-tools/schema":
/*!****************************************!*\
  !*** external "@graphql-tools/schema" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@graphql-tools/schema");;

/***/ }),

/***/ "apollo-server-lambda":
/*!***************************************!*\
  !*** external "apollo-server-lambda" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("apollo-server-lambda");;

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("graphql");;

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("reflect-metadata");;

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/apollo-server.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjL2Fwb2xsby1zZXJ2ZXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGl0ZWJyaWNrLWNsb3VkLy4vc3JjL2Fwb2xsby1zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vd2hpdGVicmljay1jbG91ZC8uL3NyYy9lbnRpdHkvVGVuYW50LnRzIiwid2VicGFjazovL3doaXRlYnJpY2stY2xvdWQvLi9zcmMvZW50aXR5L1VzZXIudHMiLCJ3ZWJwYWNrOi8vd2hpdGVicmljay1jbG91ZC8uL3NyYy9yZXNvbHZlcnMudHMiLCJ3ZWJwYWNrOi8vd2hpdGVicmljay1jbG91ZC8uL3NyYy90ZXN0aW5nL3Rlc3RRdWVyeUFuZE11dGF0aW9uLnRzIiwid2VicGFjazovL3doaXRlYnJpY2stY2xvdWQvLi9zcmMvdGVzdGluZy90ZXN0aW5nLnRzIiwid2VicGFjazovL3doaXRlYnJpY2stY2xvdWQvLi9zcmMvdHlwZS1kZWZzLnRzIiwid2VicGFjazovL3doaXRlYnJpY2stY2xvdWQvZXh0ZXJuYWwgXCJAZ3JhcGhxbC10b29scy9tb2NrXCIiLCJ3ZWJwYWNrOi8vd2hpdGVicmljay1jbG91ZC9leHRlcm5hbCBcIkBncmFwaHFsLXRvb2xzL3NjaGVtYVwiIiwid2VicGFjazovL3doaXRlYnJpY2stY2xvdWQvZXh0ZXJuYWwgXCJhcG9sbG8tc2VydmVyLWxhbWJkYVwiIiwid2VicGFjazovL3doaXRlYnJpY2stY2xvdWQvZXh0ZXJuYWwgXCJncmFwaHFsXCIiLCJ3ZWJwYWNrOi8vd2hpdGVicmljay1jbG91ZC9leHRlcm5hbCBcInJlZmxlY3QtbWV0YWRhdGFcIiIsIndlYnBhY2s6Ly93aGl0ZWJyaWNrLWNsb3VkL2V4dGVybmFsIFwidHlwZW9ybVwiIiwid2VicGFjazovL3doaXRlYnJpY2stY2xvdWQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2hpdGVicmljay1jbG91ZC93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1sYW1iZGEnO1xuaW1wb3J0IHsgY3JlYXRlQ29ubmVjdGlvbiB9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgVGVuYW50IH0gZnJvbSAnLi9lbnRpdHkvVGVuYW50JztcbmltcG9ydCB7IFVzZXJzIH0gZnJvbSAnLi9lbnRpdHkvVXNlcic7XG5pbXBvcnQgeyByZXNvbHZlcnMgfSBmcm9tICcuL3Jlc29sdmVycyc7XG5pbXBvcnQgeyB0eXBlRGVmcyB9IGZyb20gJy4vdHlwZS1kZWZzJztcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3Rpb24gPSAgY3JlYXRlQ29ubmVjdGlvbih7XG4gICAgICAgIHR5cGU6IFwicG9zdGdyZXNcIixcbiAgICAgICAgaG9zdDogXCJsb2NhbGhvc3RcIixcbiAgICAgICAgcG9ydDogNTQzMixcbiAgICAgICAgdXNlcm5hbWU6IFwiYW5pa2V0Z2lyYW1cIixcbiAgICAgICAgcGFzc3dvcmQ6IFwicm9vdFwiLFxuICAgICAgICBkYXRhYmFzZTogXCJ0ZXN0XCIsXG4gICAgICAgIGVudGl0aWVzOiBbVGVuYW50LFVzZXJzXSxcbiAgICAgICAgc3luY2hyb25pemU6IHRydWUsXG4gICAgICAgIGxvZ2dpbmc6IGZhbHNlLFxufSk7XG5cblxuXG5jb25zdCBhcG9sbG9TZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHsgcmVzb2x2ZXJzICwgdHlwZURlZnMgfSk7XG5leHBvcnQgY29uc3QgZ3JhcGhxbEhhbmRsZXIgPSBhcG9sbG9TZXJ2ZXIuY3JlYXRlSGFuZGxlcigpO1xuXG5cblxuLy8gVEVTVElORyBDT0RFXG4vLyB0ZXN0UXVlcnlcbi8vIHRlc3RNdXRhdGlvblxuIiwiaW1wb3J0IHsgQ29sdW1uLCBDcmVhdGVEYXRlQ29sdW1uLCBFbnRpdHksIEluZGV4LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSBcInR5cGVvcm1cIjtcblxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgVGVuYW50e1xuXG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oXCJ1dWlkXCIpXG4gICAgaWQhOiBTdHJpbmc7XG5cbiAgICBAQ29sdW1uKClcbiAgICBASW5kZXgoe3VuaXF1ZTp0cnVlfSlcbiAgICBuYW1lITpTdHJpbmc7XG5cbiAgICBAQ29sdW1uKHtudWxsYWJsZTp0cnVlfSlcbiAgICBsYWJlbCE6U3RyaW5nO1xuXG4gICAgQENvbHVtbih7bmFtZTpcImNyZWF0ZWRfYXRcIn0pXG4gICAgY3JlYXRlZEF0ITpEYXRlO1xuXG4gICAgQENvbHVtbih7bmFtZTpcInVwZGF0ZWRfYXRcIn0pXG4gICAgdXBkYXRlZEF0ITpEYXRlO1xuICAgIFxuICAgXG59IiwiaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBNYW55VG9PbmUsIENvbHVtbiwgSm9pbkNvbHVtbiB9IGZyb20gXCJ0eXBlb3JtXCI7XG5pbXBvcnQgeyBUZW5hbnQgfSBmcm9tIFwiLi9UZW5hbnRcIjtcblxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgVXNlcnN7XG5cbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbihcInV1aWRcIilcbiAgICBpZCE6U3RyaW5nO1xuXG4gICAgQE1hbnlUb09uZSh0eXBlID0+IFRlbmFudClcbiAgICBASm9pbkNvbHVtbih7bmFtZTogJ3RlbmFudF9pZCcsIHJlZmVyZW5jZWRDb2x1bW5OYW1lOiAnaWQnfSlcbiAgICB0ZW5hbnQhOiBUZW5hbnQ7XG5cbiAgICBAQ29sdW1uKClcbiAgICBlbWFpbCE6IFN0cmluZztcblxuICAgIEBDb2x1bW4oe25hbWU6XCJmaXJzdF9uYW1lXCJ9KVxuICAgIGZpcnN0TmFtZSE6IFN0cmluZztcblxuICAgIEBDb2x1bW4oe25hbWU6XCJsYXN0X25hbWVcIn0pXG4gICAgbGFzdE5hbWUhOiBTdHJpbmc7XG5cbiAgICBAQ29sdW1uKHtuYW1lOlwiY3JlYXRlZF9hdFwifSlcbiAgICBjcmVhdGVkQXQhOiBEYXRlO1xuXG4gICAgQENvbHVtbih7bmFtZTpcInVwZGF0ZWRfYXRcIn0pXG4gICAgdXBkYXRlZEF0ITogRGF0ZTtcblxuXG59IiwiaW1wb3J0IHsgSVJlc29sdmVycyB9IGZyb20gXCJhcG9sbG8tc2VydmVyLWxhbWJkYVwiO1xuaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuaW1wb3J0IHsgVGVuYW50IH0gZnJvbSBcIi4vZW50aXR5L1RlbmFudFwiO1xuaW1wb3J0IHsgY29ubmVjdGlvbiB9IGZyb20gXCIuL2Fwb2xsby1zZXJ2ZXJcIjtcbmltcG9ydCB7IFVzZXJzIH0gZnJvbSBcIi4vZW50aXR5L1VzZXJcIjtcbmltcG9ydCB7IHRlc3RNdXRhdGlvbiwgdGVzdFF1ZXJ5IH0gZnJvbSBcIi4vdGVzdGluZy90ZXN0aW5nXCI7XG5cblxuZXhwb3J0IGNvbnN0IHJlc29sdmVyczpJUmVzb2x2ZXJzID0ge1xuICBRdWVyeToge1xuICAgIHRlc3RNZXNzYWdlOiAoKSA9PiAnSGVsbG8gd29ybGQnLFxuICAgIGdldFRlbmFudHM6YXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IHJlcG8gPSAoYXdhaXQgY29ubmVjdGlvbikuZ2V0UmVwb3NpdG9yeShUZW5hbnQpO1xuXG4gICAgICB0ZXN0TXV0YXRpb25cbiAgICAgIHRlc3RRdWVyeVxuICAgICAgXG4gICAgICByZXR1cm4gYXdhaXQgcmVwby5maW5kKCk7XG4gICAgfSxcbiAgICBnZXRUZW5hbnRCeUlkOiBhc3luYyAoXyx7aWR9KSA9PiB7XG4gICAgICBsZXQgcmVwbyA9IChhd2FpdCBjb25uZWN0aW9uKS5nZXRSZXBvc2l0b3J5KFRlbmFudCk7XG4gICAgICByZXR1cm4gYXdhaXQgcmVwby5maW5kT25lKHsgd2hlcmU6IHsgaWQ6IGlkIH0gfSk7XG4gICAgfSxcbiAgICBnZXRUZW5hbnRCeU5hbWU6IGFzeW5jIChfLHtuYW1lfSkgPT4ge1xuICAgICAgbGV0IHJlcG8gPSAoYXdhaXQgY29ubmVjdGlvbikuZ2V0UmVwb3NpdG9yeShUZW5hbnQpO1xuICAgICAgcmV0dXJuIGF3YWl0IHJlcG8uZmluZE9uZSh7IHdoZXJlOiB7IG5hbWU6IG5hbWUgfSB9KTtcbiAgICB9LFxuICAgIGdldFVzZXJCeU5hbWU6IGFzeW5jIChfLHtmaXJzdE5hbWV9KSA9PiB7XG4gICAgICBsZXQgcmVwbyA9IChhd2FpdCBjb25uZWN0aW9uKS5nZXRSZXBvc2l0b3J5KFVzZXJzKTtcbiAgICAgIHJldHVybiBhd2FpdCByZXBvLmZpbmRPbmUoeyB3aGVyZTogeyBmaXJzdE5hbWU6IGZpcnN0TmFtZSB9IH0pO1xuICAgIH0sXG4gICAgZ2V0VXNlckJ5RW1haWw6IGFzeW5jIChfLHtlbWFpbH0pID0+IHtcbiAgICAgIGxldCByZXBvID0gKGF3YWl0IGNvbm5lY3Rpb24pLmdldFJlcG9zaXRvcnkoVXNlcnMpO1xuICAgICAgcmV0dXJuIGF3YWl0IHJlcG8uZmluZE9uZSh7IHdoZXJlOiB7IGVtYWlsOiBlbWFpbCB9IH0pO1xuICAgIH0sXG4gICAgZ2V0VXNlckJ5VGVuYW50SUQ6IGFzeW5jIChfLHt0ZW5hbnRJZH0pID0+IHtcbiAgICAgIGxldCB1c2VyX3JlcG8gPSAoYXdhaXQgY29ubmVjdGlvbikuZ2V0UmVwb3NpdG9yeShVc2Vycyk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdXNlcl9yZXBvLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSBVU0VSUyBSSUdIVCBKT0lOIFRFTkFOVCBPTiBVU0VSUy50ZW5hbnRfaWQgPSBURU5BTlQuaWQgV0hFUkUgVEVOQU5ULmlkPSdcIit0ZW5hbnRJZCtcIidcIik7XG4gICAgICBjb25zdCB1c2VycyA9IEFycmF5PFVzZXJzPigpO1xuXG4gICAgICBkYXRhLmZvckVhY2goKGVsZW1lbnRzOmFueSk9PntcbiAgICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VycygpO1xuICAgICAgICB1c2VyLmZpcnN0TmFtZSA9IGVsZW1lbnRzLmZpcnN0X25hbWU7XG4gICAgICAgIHVzZXIubGFzdE5hbWUgPSBlbGVtZW50cy5sYXN0X25hbWU7XG4gICAgICAgIHVzZXIuZW1haWwgPSBlbGVtZW50cy5lbWFpbDtcbiAgICAgICAgdXNlci5jcmVhdGVkQXQgPSBlbGVtZW50cy5jcmVhdGVkX2F0O1xuICAgICAgICB1c2VyLnVwZGF0ZWRBdCA9IGVsZW1lbnRzLnVwZGF0ZWRfYXQ7XG4gICAgICAgIHVzZXIudGVuYW50ID0gZWxlbWVudHMudGVuYW50X2lkO1xuICAgICAgICB1c2Vycy5wdXNoKHVzZXIpO1xuICAgICAgfSlcbiAgICAgIHJldHVybiB1c2VyczsgICAgICBcbiAgICB9LFxuICAgIGdldFVzZXJzQnlUZW5hbnROYW1lOmFzeW5jIChfLHt0ZW5hbnRfbmFtZX0pID0+IHtcbiAgICAgIGxldCB1c2VyX3JlcG8gPSAoYXdhaXQgY29ubmVjdGlvbikuZ2V0UmVwb3NpdG9yeShVc2Vycyk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdXNlcl9yZXBvLnF1ZXJ5KFwiU0VMRUNUICogRlJPTSBVU0VSUyBSSUdIVCBKT0lOIFRFTkFOVCBPTiBVU0VSUy50ZW5hbnRfaWQgPSBURU5BTlQuaWQgV0hFUkUgVEVOQU5ULm5hbWU9J1wiK3RlbmFudF9uYW1lK1wiJ1wiKTtcbiAgICAgIGNvbnN0IHVzZXJzID0gQXJyYXk8VXNlcnM+KCk7XG5cbiAgICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudHM6YW55KT0+e1xuICAgICAgICBjb25zdCB1c2VyID0gbmV3IFVzZXJzKCk7XG4gICAgICAgIHVzZXIuZmlyc3ROYW1lID0gZWxlbWVudHMuZmlyc3RfbmFtZTtcbiAgICAgICAgdXNlci5sYXN0TmFtZSA9IGVsZW1lbnRzLmxhc3RfbmFtZTtcbiAgICAgICAgdXNlci5lbWFpbCA9IGVsZW1lbnRzLmVtYWlsO1xuICAgICAgICB1c2VyLmNyZWF0ZWRBdCA9IGVsZW1lbnRzLmNyZWF0ZWRfYXQ7XG4gICAgICAgIHVzZXIudXBkYXRlZEF0ID0gZWxlbWVudHMudXBkYXRlZF9hdDtcbiAgICAgICAgdXNlci50ZW5hbnQgPSBlbGVtZW50cy50ZW5hbnRfaWQ7XG4gICAgICAgIHVzZXJzLnB1c2godXNlcik7XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHVzZXJzOyAgICAgIFxuICAgIH1cbiAgfSxcblxuICBcbiAgTXV0YXRpb246IHtcbiAgICBjcmVhdGVUZW5hbnQgOiBhc3luYyAoXyx7bmFtZSAsIGxhYmVsfTphbnkpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCByZXBvID0gKGF3YWl0IGNvbm5lY3Rpb24pLmdldFJlcG9zaXRvcnkoVGVuYW50KTtcbiAgICAgICAgY29uc3QgdGVuYW50ID0gbmV3IFRlbmFudCgpO1xuICAgICAgICB0ZW5hbnQubmFtZSA9IG5hbWU7XG4gICAgICAgIHRlbmFudC5sYWJlbCA9IGxhYmVsO1xuICAgICAgICB0ZW5hbnQuY3JlYXRlZEF0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgdGVuYW50LnVwZGF0ZWRBdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGF3YWl0IHJlcG8uc2F2ZSh0ZW5hbnQpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICB1cGRhdGVUZW5hbnQ6IGFzeW5jKF8se2lkLG5hbWUsbGFiZWx9OmFueSk9PntcbiAgICAgIHRyeXtcbiAgICAgICAgbGV0IHJlcG8gPSAoYXdhaXQgY29ubmVjdGlvbikuZ2V0UmVwb3NpdG9yeShUZW5hbnQpO1xuICAgICAgICBjb25zdCB0ZW5hbnQgPSBuZXcgVGVuYW50KCk7XG4gICAgICAgIHRlbmFudC5uYW1lID0gbmFtZTtcbiAgICAgICAgdGVuYW50LmxhYmVsID0gbGFiZWw7XG4gICAgICAgIHRlbmFudC51cGRhdGVkQXQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBhd2FpdCByZXBvLnVwZGF0ZSh7IGlkIH0sIHRlbmFudCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JlYXRlVXNlciA6IGFzeW5jIChfLHt0ZW5hbnRfaWQsZW1haWwsIGZpcnN0X25hbWUsIGxhc3RfbmFtZX06YW55KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBsZXQgcmVwbyA9IChhd2FpdCBjb25uZWN0aW9uKS5nZXRSZXBvc2l0b3J5KFVzZXJzKTtcbiAgICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VycygpO1xuICAgICAgICB1c2VyLmVtYWlsID0gZW1haWw7XG4gICAgICAgIHVzZXIuZmlyc3ROYW1lID0gZmlyc3RfbmFtZTtcbiAgICAgICAgdXNlci5sYXN0TmFtZSA9IGxhc3RfbmFtZTtcbiAgICAgICAgdXNlci5jcmVhdGVkQXQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB1c2VyLnVwZGF0ZWRBdCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHVzZXIudGVuYW50ID0gdGVuYW50X2lkO1xuICAgICAgICBhd2FpdCByZXBvLnNhdmUodXNlcik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHVwZGF0ZVVzZXIgOiBhc3luYyAoXyx7aWQsdGVuYW50X2lkLGVtYWlsLCBmaXJzdF9uYW1lLCBsYXN0X25hbWV9KSA9PiB7XG4gICAgICB0cnl7XG4gICAgICAgIGxldCByZXBvID0gKGF3YWl0IGNvbm5lY3Rpb24pLmdldFJlcG9zaXRvcnkoVXNlcnMpO1xuICAgICAgICBjb25zdCB1c2VyID0gbmV3IFVzZXJzKCk7XG4gICAgICAgIHVzZXIuZW1haWwgPSBlbWFpbDtcbiAgICAgICAgdXNlci5maXJzdE5hbWUgPSBmaXJzdF9uYW1lO1xuICAgICAgICB1c2VyLmxhc3ROYW1lID0gbGFzdF9uYW1lO1xuICAgICAgICB1c2VyLnRlbmFudCA9IHRlbmFudF9pZDtcbiAgICAgICAgdXNlci51cGRhdGVkQXQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBhd2FpdCByZXBvLnVwZGF0ZSh7IGlkIH0sIHVzZXIpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cblxuICAvKipcbiAgICogcmVzb2x2ZXJzIGhlcmUgZm9yIENSVUQgYWNjZXNzIHRvIERCIHJlY29yZHMgLSByZW5hbWUgdG8gYmVzdCBwcmFjdGlzZXMgLSBzZWUgZGFsLnRzXG4gICAqIFxuICAgKiBnZXRUZW5hbnRCeU5hbWUoaWQpXG4gICAqIGdldFRlbmFudEJ5SWQobmFtZSlcbiAgICogZ2V0VGVuYW50c1xuICAgKiBjcmVhdGVUZW5hbnQobmFtZSwgbGFiZWwpIFxuICAgKiB1cGRhdGVUZW5hbnQoaWQsIG5hbWUsIGxhYmVsKVxuICAgKiBcbiAgICogZ2V0VXNlckJ5TmFtZShpZClcbiAgICogZ2V0VXNlckJ5RW1haWwoZW1haWwpXG4gICAqIGdldFVzZXJzQnlUZW5hbnRJZChpZClcbiAgICogZ2V0VXNlcnNCeVRlbmFudE5hbWUobmFtZSlcbiAgICogXG4gICAqIGNyZWF0ZVVzZXIodGVuYW50X2lkLCBlbWFpbCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lKVxuICAgKiB1cGRhdGVVc2VyKGlkLCB0ZW5hbnRfaWQsIGVtYWlsLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUpXG4gICAqL1xuXG5cblxufTsiLCJleHBvcnQgY29uc3QgcXVlcnkgPSBgXG4gICAgcXVlcnl7XG4gICAgICAgIGdldFRlbmFudHN7XG4gICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICB9XG4gICAgICAgIGdldFRlbmFudEJ5SWQoaWQ6XCJkZW1vaWRcIil7XG4gICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICB9XG4gICAgICAgIGdldFRlbmFudEJ5TmFtZShuYW1lOlwiZGVtb1wiKXtcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgIH1cbiAgICAgICAgZ2V0VXNlckJ5TmFtZShmaXJzdE5hbWU6XCJkZW1vXCIpe1xuICAgICAgICAgICAgICAgIGZpcnN0TmFtZVxuICAgICAgICB9XG4gICAgICAgIGdldFVzZXJCeUVtYWlsKGVtYWlsOlwiZGVtb1wiKXtcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWVcbiAgICAgICAgfVxuICAgICAgICBnZXRVc2VyQnlUZW5hbnRJRCh0ZW5hbnRJZDpcImRlbW9pZFwiKXtcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWVcbiAgICAgICAgfVxuICAgICAgICBnZXRVc2Vyc0J5VGVuYW50TmFtZSh0ZW5hbnRfbmFtZTpcImRlbW9cIil7XG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lXG4gICAgICAgIH1cbiAgICB9XG5gO1xuXG5leHBvcnQgY29uc3QgbXV0YXRpb249YFxuICAgICAgICBtdXRhdGlvbntcbiAgICAgICAgICAgICAgICBjcmVhdGVUZW5hbnQobmFtZTpcImRlbW9cIixsYWJlbDpcInVwd29ya1wiKVxuICAgICAgICAgICAgICAgIHVwZGF0ZVRlbmFudChpZDpcImRlbW9JRFwiLG5hbWU6XCJkZW1vXCIsbGFiZWw6XCJ1cHdvcmsyXCIpXG4gICAgICAgICAgICAgICAgY3JlYXRlVXNlcih0ZW5hbnRfaWQ6XCJkZW1vSURcIixlbWFpbDpcImRlbW9cIixmaXJzdF9uYW1lOlwiZGVtb1wiLGxhc3RfbmFtZTpcImRlbW9cIilcbiAgICAgICAgICAgICAgICB1cGRhdGVVc2VyKGlkOlwiZGVtb0lEXCIsdGVuYW50X2lkOlwiZGVtb0lEXCIsZW1haWw6XCJkZW1vXCIsIGZpcnN0X25hbWU6XCJkZW1vXCIsIGxhc3RfbmFtZTpcImRlbW9cIilcbiAgICAgICAgfVxuYDsiLCJpbXBvcnQgeyBtYWtlRXhlY3V0YWJsZVNjaGVtYSB9IGZyb20gJ0BncmFwaHFsLXRvb2xzL3NjaGVtYSc7XG5pbXBvcnQgeyBhZGRNb2Nrc1RvU2NoZW1hIH0gZnJvbSAnQGdyYXBocWwtdG9vbHMvbW9jayc7XG5pbXBvcnQgeyBncmFwaHFsIH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgeyB0eXBlRGVmcyB9IGZyb20gJy4uL3R5cGUtZGVmcyc7XG5pbXBvcnQgeyBtdXRhdGlvbiwgcXVlcnkgfSBmcm9tICcuL3Rlc3RRdWVyeUFuZE11dGF0aW9uJztcblxuY29uc3Qgc2NoZW1hU3RyaW5nID0gdHlwZURlZnM7XG5jb25zdCBzY2hlbWEgPSBtYWtlRXhlY3V0YWJsZVNjaGVtYSh7IHR5cGVEZWZzOiBzY2hlbWFTdHJpbmcgfSk7XG5cbi8vIENyZWF0ZSBhIG5ldyBzY2hlbWEgd2l0aCBtb2Nrc1xuY29uc3Qgc2NoZW1hV2l0aE1vY2tzID0gYWRkTW9ja3NUb1NjaGVtYSh7IHNjaGVtYSB9KTtcblxuZXhwb3J0IGNvbnN0IHRlc3RNdXRhdGlvbiA9IGdyYXBocWwoc2NoZW1hV2l0aE1vY2tzLCBtdXRhdGlvbikudGhlbigocmVzdWx0KSA9PiBjb25zb2xlLmxvZygnR290IG11dGF0aW9uIHJlc3VsdCcsIHJlc3VsdCkpLmNhdGNoKChlcnIpPT57XG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiLGVycikgICAgIFxufSk7XG5leHBvcnQgY29uc3QgdGVzdFF1ZXJ5ID0gZ3JhcGhxbChzY2hlbWFXaXRoTW9ja3MsIHF1ZXJ5KS50aGVuKChyZXN1bHQpID0+IGNvbnNvbGUubG9nKCdHb3QgcXVlcnkgcmVzdWx0JywgcmVzdWx0KSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIixlcnIpICAgICBcbn0pOyIsImltcG9ydCB7IGdxbCB9IGZyb20gJ2Fwb2xsby1zZXJ2ZXItbGFtYmRhJztcblxuICAvKipcbiAgICogc2NoZW1hIGhlcmUgZm9yIENSVUQgYWNjZXNzIHRvIERCIHJlY29yZHMgLSByZW5hbWUgdG8gYmVzdCBwcmFjdGlzZXMgLSBzZWUgZGFsLnRzXG4gICAqIFxuICAgKiBnZXRUZW5hbnRCeU5hbWUoaWQpXG4gICAqIGdldFRlbmFudEJ5SWQobmFtZSlcbiAgICogZ2V0VGVuYW50c1xuICAgKiBjcmVhdGVUZW5hbnQobmFtZSwgbGFiZWwpIFxuICAgKiB1cGRhdGVUZW5hbnQoaWQsIG5hbWUsIGxhYmVsKVxuICAgKiBcbiAgICogZ2V0VXNlckJ5TmFtZShpZClcbiAgICogZ2V0VXNlckJ5RW1haWwoZW1haWwpXG4gICAqIGdldFVzZXJzQnlUZW5hbnRJZChpZClcbiAgICogZ2V0VXNlcnNCeVRlbmFudE5hbWUobmFtZSlcbiAgICogXG4gICAqIGNyZWF0ZVVzZXIodGVuYW50X2lkLCBlbWFpbCwgZmlyc3RfbmFtZSwgbGFzdF9uYW1lKVxuICAgKiB1cGRhdGVVc2VyKGlkLCB0ZW5hbnRfaWQsIGVtYWlsLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUpXG4gICAqL1xuXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWxgXG4gIHR5cGUgUXVlcnkge1xuICAgIHRlc3RNZXNzYWdlOiBTdHJpbmchXG4gICAgZ2V0VGVuYW50czogW1RlbmFudF1cbiAgICBnZXRUZW5hbnRCeUlkKGlkOiBTdHJpbmchKTogVGVuYW50XG4gICAgZ2V0VGVuYW50QnlOYW1lKG5hbWU6IFN0cmluZyEpOiBUZW5hbnRcbiAgICBnZXRVc2VyQnlOYW1lKGZpcnN0TmFtZTogU3RyaW5nISk6IFVzZXJzXG4gICAgZ2V0VXNlckJ5RW1haWwoZW1haWw6U3RyaW5nKTpVc2Vyc1xuICAgIGdldFVzZXJCeVRlbmFudElEKHRlbmFudElkOlN0cmluZyk6W1VzZXJzXVxuICAgIGdldFVzZXJzQnlUZW5hbnROYW1lKHRlbmFudF9uYW1lOlN0cmluZyk6W1VzZXJzXVxuICB9XG4gIHR5cGUgVGVuYW50e1xuICAgIGlkOlN0cmluZyxcbiAgICBuYW1lOlN0cmluZyxcbiAgICBsYWJlbDpTdHJpbmcsXG4gICAgY3JlYXRlZEF0OlN0cmluZyxcbiAgICB1cGRhdGVkQXQ6U3RyaW5nXG4gIH0gXG4gIHR5cGUgVXNlcnN7XG4gICAgaWQ6IFN0cmluZyxcbiAgICBlbWFpbDogU3RyaW5nLFxuICAgIGZpcnN0TmFtZSA6IFN0cmluZyxcbiAgICBsYXN0TmFtZSA6IFN0cmluZyxcbiAgICBjcmVhdGVkQXQ6IFN0cmluZyxcbiAgICB1cGRhdGVkQXQgOiBTdHJpbmcsXG4gICAgdGVuYW50IDogU3RyaW5nXG4gIH1cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgY3JlYXRlVGVuYW50KG5hbWU6U3RyaW5nISxsYWJlbDpTdHJpbmchKTogQm9vbGVhblxuICAgIGNyZWF0ZVVzZXIodGVuYW50X2lkOlN0cmluZyxlbWFpbDpTdHJpbmchLGZpcnN0X25hbWU6U3RyaW5nISxsYXN0X25hbWU6U3RyaW5nISk6IEJvb2xlYW5cbiAgICB1cGRhdGVUZW5hbnQoaWQ6U3RyaW5nISxuYW1lOlN0cmluZyEsbGFiZWw6U3RyaW5nISk6Qm9vbGVhblxuICAgIHVwZGF0ZVVzZXIoaWQ6U3RyaW5nLCB0ZW5hbnRfaWQ6U3RyaW5nLCBlbWFpbDpTdHJpbmcsIGZpcnN0X25hbWU6U3RyaW5nLCBsYXN0X25hbWU6U3RyaW5nKTpCb29sZWFuXG4gIH1cbmA7XG5cblxuXG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGdyYXBocWwtdG9vbHMvbW9ja1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGdyYXBocWwtdG9vbHMvc2NoZW1hXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhcG9sbG8tc2VydmVyLWxhbWJkYVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZW9ybVwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2Fwb2xsby1zZXJ2ZXIudHNcIik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFHQTtBQW1CQTtBQWhCQTtBQURBO0FBQ0E7QUFBQTtBQUlBO0FBRkE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFoQkE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUdBO0FBeUJBO0FBdEJBO0FBREE7QUFDQTtBQUFBO0FBSUE7QUFGQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUFHQTtBQURBO0FBQ0E7QUFBQTtBQUdBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFEQTtBQUNBO0FBQUE7QUF0QkE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXVCQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7Ozs7QUNyS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7Ozs7O0FDbkJBO0FBb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7O0FDdkRBO0FBQ0E7QTs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7Ozs7OztBQ0RBO0FBQ0E7QTs7Ozs7Ozs7QUNEQTtBQUNBO0E7Ozs7Ozs7O0FDREE7QUFDQTtBOzs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9