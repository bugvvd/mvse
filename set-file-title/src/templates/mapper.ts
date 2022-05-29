import * as titleMap from "./templates.json";

export default function mapper(ext: string): string {
    const title = titleMap[`${ext}`];
    return title;
}
