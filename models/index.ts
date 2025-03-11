import { Category } from "./category";
import { Course } from "./Course";
import { Episode } from './Episode'
import { User } from "./User";


Category.hasMany(Course,{as:'courses'})
Course.hasMany(Episode)

Course.belongsTo(Category)
Episode.belongsTo(Course)

export{
    Category,
    Course,
    Episode,
    User
}