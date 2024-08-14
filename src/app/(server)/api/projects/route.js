import { NextResponse } from "next/server";
import DBConnect from "../../config/db";
import Project from "../../models/Project";

export async function GET() {
    try {
        await DBConnect(); // Ensure the DB connection is established

        const projects = await Project.find(); // Use your Mongoose model to query the database

        return NextResponse.json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
    }
}