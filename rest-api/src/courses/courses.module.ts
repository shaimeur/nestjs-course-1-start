import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CoursesController } from "./controllers/courses.controller";
import { CoursesRepository } from "./repositories/courses.repository";
import { CoursesSchema } from "./schemas/courses.schema";

@Module({
    imports : [
        MongooseModule.forFeature([
            {
                name : "Course", schema : CoursesSchema
            }
        ])
    ],
    controllers : [
        CoursesController
    ],
    providers : [
        CoursesRepository
    ]
})
export class CoursesModule {

}