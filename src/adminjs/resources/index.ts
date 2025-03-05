import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode } from "../../../models";
import { categoryResourceOptions } from "./category";
import { courseresourceFeatures, courseResourceOptions } from "./Course";
import { episodeResourceFeatures, episodeResourceOptions } from "./episode";

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
    }
]