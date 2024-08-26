import { IsNotEmpty } from "class-validator";

export class CreateTaskDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    status: boolean;

    @IsNotEmpty()
    due_date: Date;

    @IsNotEmpty()
    user_id: string;
}
