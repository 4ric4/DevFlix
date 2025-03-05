import { Category } from "./category";
import { Course } from "./Course";
import { Episode } from './Episode'


Category.hasMany(Course)
Course.hasMany(Episode)

Course.belongsTo(Category)
Episode.belongsTo(Course)

export{
    Category,
    Course,
    Episode
}