import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TodoListEntity } from 'src/api/3 - domain/TodoList/toso-list.entity';
import { UserEntity } from 'src/api/3 - domain/User/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'bootcamp-nest-ja-vnt.sqlite3',
            entities: [UserEntity, TodoListEntity],
            synchronize: true,
        })
    ]
})

export class DatabaseModule {}
