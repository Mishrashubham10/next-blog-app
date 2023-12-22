import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// CATEGORIES
export const GET = async () => {
    try {
        const categories = await prisma.category.findMany();

        return new NextResponse(categories, { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({message: "Something went wrong!"}, { status: 500 }))
    }
}