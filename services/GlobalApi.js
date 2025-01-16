import axios from "axios";

const strapiBaseUrl = process.env.EXPO_PUBLIC_STRAPI_BASE_URL;

const axiosClient = axios.create({
    baseURL: `${strapiBaseUrl}/api`,
    headers: {
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_STRAPI_API_KEY}`,
    },
});

const GetUserInfo = (email) =>
    axiosClient.get(`/user-lists?filters[username][$eq]=${email}`);

const CreateUser = (data) =>
    axiosClient.post("/user-lists", {
        data: data,
    });

export default {
    GetUserInfo,
    CreateUser,
};
