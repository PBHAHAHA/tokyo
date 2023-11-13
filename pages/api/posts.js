// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { commonRequest } from "./axios";


export async function getAllPosts() {
    const response = await commonRequest.get("/posts");
    return response.data;
}
