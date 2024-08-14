import { NextResponse } from "next/server";
import DBConnect from "../../config/db";
import Message from "../../models/Message";

export async function POST(request) {
    try {
        await DBConnect(); // Connect to the database

        const { name, email, message } = await request.json(); // Parse the request body

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
        }

        // Create a new message entry
        const newMessage = new Message({
            name,
            email,
            message
        });

        await newMessage.save(); // Save to the database

        return NextResponse.json({ success: 'Message received!' });
    } catch (error) {
        console.error('Error handling message:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}