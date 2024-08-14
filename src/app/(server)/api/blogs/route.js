import { NextResponse } from "next/server";
import Blog from "../../models/Blog";
import DBConnect from "../../config/db";

export async function GET() {
    try {
        await DBConnect(); // Ensure the DB connection is established
        
        const blogs = await Blog.find(); // Use your Mongoose model to query the database
        
        return NextResponse.json(blogs);
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}