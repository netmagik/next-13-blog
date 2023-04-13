import { NextResponse } from "next/server";
import courses from '../data.json'

export async function GET(req) {
    const { searchParams } = new URL(req.url)
    console.log(req.url)
    const query = searchParams.get('query');
    const filteredCourses = courses.filter((course) => {
        return course.title.toLowerCase().includes(query.toLowerCase());
      });
    return NextResponse.json(filteredCourses)
}