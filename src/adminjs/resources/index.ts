import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode, User } from "../../../models";
import { categoryResourceOptions } from "./category";
import { courseresourceFeatures, courseResourceOptions } from "./Course";
import { episodeResourceFeatures, episodeResourceOptions } from "./episode";
import { userResourceOptions } from "./user";

export const adminJsResources: ResourceWithOptions[] =[
    {
        resource: Category,
        options: categoryResourceOptions
    },
    {
        resource: Course,
        options: courseResourceOptions,
        features: courseresourceFeatures
    },
    {
        resource: Episode,
        options: episodeResourceOptions,
        features: episodeResourceFeatures
    },
    {
      resource: User,
      options: userResourceOptions
    }
]