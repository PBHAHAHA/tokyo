// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { commonRequest } from "./axios";


export async function getAllPosts(data) {
    const response = await commonRequest.get("/posts",{
        params: data
    });
    return response.data;
}
// 根据id查文章
export async function getPostById(id) {
    const response = await commonRequest.get(`/posts/${id}`);
    return response.data;
}