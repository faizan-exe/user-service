import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/users/users.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: '34.58.88.65',
            port: 5432,
            username: 'test',
            password: 'tankionline123',
            database: 'postgres',
            entities: [
                Users,
            ],
            synchronize: true,
            logging: true,
        }),
    ],
})
export class DatabaseModule { }