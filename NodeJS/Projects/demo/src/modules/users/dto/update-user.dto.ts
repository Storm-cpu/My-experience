import { ApiPropertyOptional } from '@nestjs/swagger'; // Import
import { IsString, IsEmail, IsInt, Min, IsOptional } from 'class-validator';

export class UpdateUserDto {
    @ApiPropertyOptional({ example: 'Johnathan Doe', description: 'The updated name of the user' })
    @IsOptional()
    @IsString()
    readonly name?: string;

    @ApiPropertyOptional({ example: 'john.doe.new@example.com', description: 'The updated email of the user' })
    @IsOptional()
    @IsEmail()
    readonly email?: string;

    @ApiPropertyOptional({ example: 26, description: 'The updated age of the user', minimum: 1 })
    @IsOptional()
    @IsInt()
    @Min(1)
    readonly age?: number;
}