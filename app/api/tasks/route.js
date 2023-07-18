import { conn} from "@/configs/db.conn";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        // let result;
        const db = await conn;
        const query = `SELECT * FROM tasks;`
        const [result] = await db.promise().query(query);
        return NextResponse.json({
            success: true,
            data:result
        })
    } catch (error) {
        console.log(`${error}`);
        return NextResponse.json({
            success: false,
            error: `${error}`
        })
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const db = await conn;
        const query = `
        INSERT INTO tasks(task_name, completed, deadline) VALUES ('${body.title}', 0, now());
        `
        const [result] = await db.promise().query(query);
        return NextResponse.json({
            success: true,
            data:result
        }) 
    } catch (error) {
        console.log(`${error}`);
        return NextResponse.json({
            success: false,
            error: `${error}`
        })
    }
}

export async function DELETE(req) {
    try {
        const body = await req.json();
        const db = await conn;
        const query = `
        DELETE FROM tasks WHERE id=${body.id};
        `
        const [result] = await db.promise().query(query);
        return NextResponse.json({
            success: true,
            data:result
        }) 
    } catch (error) {
        console.log(`${error}`);
        return NextResponse.json({
            success: false,
            error: `${error}`
        })
    }
}

export async function PATCH(req) {
    try {
        const body = await req.json();
        const db = await conn;
        const query = `
        UPDATE tasks SET completed = ${body.completed} WHERE id = ${body.id};
        `
        const [result] = await db.promise().query(query);
        return NextResponse.json({
            success: true,
            data:result
        }) 
    } catch (error) {
        console.log(`${error}`);
        return NextResponse.json({
            success: false,
            error: `${error}`
        })
    }
}