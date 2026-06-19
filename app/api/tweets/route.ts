import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
import connectDB from "@/app/lib/mongodb"
import Tweet from "@/app/models/Tweet"

type JwtPayload = {
  userId: string
  email: string
}

export async function GET() {
  try {
    await connectDB()

    console.log("🔥 DB CONNECTED")

    const tweets = await Tweet.find()

    console.log("🔥 TWEETS:", tweets)

    return NextResponse.json(tweets)
  } catch (error) {
    console.log("🔥 FULL ERROR:", error)

    return NextResponse.json(
      { error: String(error) },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    await connectDB()

    const token = (await cookies()).get("token")?.value

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      )
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as JwtPayload

    const body = await req.json()

    const tweet = await Tweet.create({
      title: body.title,
      body: body.body,
      user: decoded.userId,
    })

    return NextResponse.json(tweet, { status: 201 })
  } catch (error) {
    console.error("POST TWEET ERROR:", error)

    return NextResponse.json(
      { message: "Failed to create tweet" },
      { status: 500 }
    )
  }
}