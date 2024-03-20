import { CronJob } from 'cron';
import { Server } from './presentation/server';
import { envs } from './config/plugins/envs.plugin'
import { MongoDataBase } from './data/mongo/init';
import { LogModel } from './data/mongo/models/log.model';
import { PrismaClient } from '@prisma/client';

(async() => {
    main()
})();

async function main() {
    await MongoDataBase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME,
    })

    const prisma = new PrismaClient();
    // const newLog = await prisma.logModel.create({
    //     data: {
    //         level: 'HIGH',
    //         message: 'Test message',
    //         origin: 'App.ts'
    //     }
    // })

    // const logs = await prisma.logModel.findMany({
    //     where: {
    //         level: 'HIGH'
    //     }
    // })


    Server.start()
}