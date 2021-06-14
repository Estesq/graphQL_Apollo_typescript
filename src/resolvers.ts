import { IResolvers } from "apollo-server-lambda";
import "reflect-metadata";
import { Tenant } from "./entity/Tenant";
import { connection } from "./apollo-server";
import { Users } from "./entity/User";

export const resolvers:IResolvers = {
  Query: {
    testMessage: () => 'Hello world',
    getTenants:async () => {
      let repo = (await connection).getRepository(Tenant);
      return await repo.find();
    },
    getTenantById: async (_,{id}) => {
      let repo = (await connection).getRepository(Tenant);
      return await repo.findOne({ where: { id: id } });
    },
    getTenantByName: async (_,{name}) => {
      let repo = (await connection).getRepository(Tenant);
      return await repo.findOne({ where: { name: name } });
    },
    getUserByName: async (_,{firstName}) => {
      let repo = (await connection).getRepository(Users);
      return await repo.findOne({ where: { firstName: firstName } });
    },
    getUserByEmail: async (_,{email}) => {
      let repo = (await connection).getRepository(Users);
      return await repo.findOne({ where: { email: email } });
    },
    getUserByTenantID: async (_,{tenantId}) => {
      let user_repo = (await connection).getRepository(Users);
      const data = await user_repo.query("SELECT * FROM USERS RIGHT JOIN TENANT ON USERS.tenant_id = TENANT.id WHERE TENANT.id='"+tenantId+"'");
      const users = Array<Users>();

      data.forEach((elements:any)=>{
        const user = new Users();
        user.firstName = elements.first_name;
        user.lastName = elements.last_name;
        user.email = elements.email;
        user.createdAt = elements.created_at;
        user.updatedAt = elements.updated_at;
        user.tenant = elements.tenant_id;
        users.push(user);
      })
      return users;      
    },
    getUsersByTenantName:async (_,{tenant_name}) => {
      let user_repo = (await connection).getRepository(Users);
      const data = await user_repo.query("SELECT * FROM USERS RIGHT JOIN TENANT ON USERS.tenant_id = TENANT.id WHERE TENANT.name='"+tenant_name+"'");
      const users = Array<Users>();

      data.forEach((elements:any)=>{
        const user = new Users();
        user.firstName = elements.first_name;
        user.lastName = elements.last_name;
        user.email = elements.email;
        user.createdAt = elements.created_at;
        user.updatedAt = elements.updated_at;
        user.tenant = elements.tenant_id;
        users.push(user);
      })
      return users;      
    }
  },

  
  Mutation: {
    createTenant : async (_,{name , label}:any) => {
      try {
        let repo = (await connection).getRepository(Tenant);
        const tenant = new Tenant();
        tenant.name = name;
        tenant.label = label;
        tenant.createdAt = new Date();
        tenant.updatedAt = new Date();
        await repo.save(tenant);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },

    updateTenant: async(_,{id,name,label}:any)=>{
      try{
        let repo = (await connection).getRepository(Tenant);
        const tenant = new Tenant();
        tenant.name = name;
        tenant.label = label;
        tenant.updatedAt = new Date();
        await repo.update({ id }, tenant);
        return true;
      }
      catch(error){
        console.log(error);
        return false;
      }
    },

    createUser : async (_,{tenant_id,email, first_name, last_name}:any) => {
      try {
        let repo = (await connection).getRepository(Users);
        const user = new Users();
        user.email = email;
        user.firstName = first_name;
        user.lastName = last_name;
        user.createdAt = new Date();
        user.updatedAt = new Date();
        user.tenant = tenant_id;
        await repo.save(user);
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },

    updateUser : async (_,{id,tenant_id,email, first_name, last_name}) => {
      try{
        let repo = (await connection).getRepository(Users);
        const user = new Users();
        user.email = email;
        user.firstName = first_name;
        user.lastName = last_name;
        user.tenant = tenant_id;
        user.updatedAt = new Date();
        await repo.update({ id }, user)
        return true;
      }
      catch(error){
        console.log(error);
        return false;
      }
    }
  },


  /**
   * resolvers here for CRUD access to DB records - rename to best practises - see dal.ts
   * 
   * getTenantByName(id)
   * getTenantById(name)
   * getTenants
   * createTenant(name, label) 
   * updateTenant(id, name, label)
   * 
   * getUserByName(id)
   * getUserByEmail(email)
   * getUsersByTenantId(id)
   * getUsersByTenantName(name)
   * 
   * createUser(tenant_id, email, first_name, last_name)
   * updateUser(id, tenant_id, email, first_name, last_name)
   */



};