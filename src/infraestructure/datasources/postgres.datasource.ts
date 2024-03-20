import { PrismaClient, SeverityLevel } from '@prisma/client';
import { LogDatasource } from '../../domain/datasources/log.datasource';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';


const severityEnum = {
    low: SeverityLevel.LOW,
    medium: SeverityLevel.MEDIUM,
    high: SeverityLevel.HIGH
}

const prisma = new PrismaClient()

export class PostgresDataSource implements LogDatasource {
    async saveLog(log: LogEntity): Promise<void> {
        const level = severityEnum[log.level]
        const newLog = await prisma.logModel.create({
            data: {
                level: level,
                message: log.message,
                origin: log.origin,
            }
        })
        console.log('New log created.', newLog.id)
    }
    async getLogs( severityLevel: LogSeverityLevel ): Promise<LogEntity[]> {

        const level = severityEnum[severityLevel]

        const logs = await prisma.logModel.findMany({
            where: {level} 
        });
    return logs.map(LogEntity.fromObject)
    }
}