import { Entity, Column, PrimaryColumn } from "typeorm"
import { Length } from "class-validator"

@Entity('users') 
export class User {

    @PrimaryColumn({
        length: 80
    })
    @Length(10, 100)
    email: string

    @Column({
        length: 80
    })
    @Length(10, 100)
    password: string
}

export const userSchema = {
    email: { type: "string", required: true, example: "Update RESTful APIs" },
    password: { type: "string", required: true, example: "Update RESTful APIs" }
}