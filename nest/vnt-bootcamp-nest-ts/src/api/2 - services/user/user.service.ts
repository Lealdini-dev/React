import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/api/3 - domain/User/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor (
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ){}

    async getAllUsers(): Promise<UserEntity[]>{
        return await this.userRepository.find()
    }

    async getUserById(id: number): Promise<UserEntity> {
        return await this.userRepository.findOne({where: {id}})
    }

    async createNewUser(newUser: UserEntity): Promise<UserEntity>{
        return await this.userRepository.save(newUser)
    }

    async updateUser(updateUser: UserEntity): Promise<UserEntity> {
        const userExists = await this.getUserById(updateUser.id)
        if(!userExists){
            throw new BadRequestException (
                'An user with the given Id doest not exits'
            )
        }
        return await this.userRepository.save(updateUser)
    }

    async deleteUser(id: number): Promise<void> {
        const userExists = await this.getUserById(id)
        if(!userExists) {
            throw new BadRequestException (
                'An user with the given Id doest not exits'
            )
        }
        await this.userRepository.delete(id)
    }
}
