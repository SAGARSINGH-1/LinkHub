import { Client, Account, ID, Query } from 'appwrite'
import { toast } from 'react-hot-toast';
import conf from '../conf/conf'


export class AppwriteService {

    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    async creatAccount(name,email,password){
        try{
            const userAccount = await this.account.create(ID.unique(),name,email,password)
            if (userAccount) {
                toast.success('Account created successfully')
            }
        }catch(error){
            toast.error(error.message)
        }
    }

    async login(email,password){
        try{
            const userAccount = await this.account.createEmailSession(email,password)
            if (userAccount) {
                console.log(userAccount);
                toast.success('Login successfully')
            }
        }catch(error){
            toast.error(error.message)
        }
    }
}

const appwriteService = new AppwriteService()
export default appwriteService;