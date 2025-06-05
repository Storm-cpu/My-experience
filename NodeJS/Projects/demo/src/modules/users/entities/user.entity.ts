import { ApiProperty } from '@nestjs/swagger';

export class User {
    @ApiProperty({ example: 1, description: 'The unique identifier of the user' })
    id: number;

    @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
    name: string;

    @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the user' })
    email: string;

    @ApiProperty({ example: 30, description: 'The age of the user' })
    age: number;

    // Constructor là tùy chọn, nhưng có thể hữu ích
    // constructor(partial: Partial<User>) {
    //   Object.assign(this, partial);
    // }
}