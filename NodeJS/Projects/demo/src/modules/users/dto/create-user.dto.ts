import { ApiProperty } from '@nestjs/swagger'; // Import
import { IsString, IsEmail, IsInt, Min } from 'class-validator';


export class CreateUserDto {
    @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
    @IsString()
    readonly name: string;

    @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the user' })
    @IsEmail()
    readonly email: string;

    @ApiProperty({ example: 25, description: 'The age of the user', minimum: 1 })
    @IsInt()
    @Min(1)
    readonly age: number;
}

