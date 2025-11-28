import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001/api",
});

export async function getData(endpoint: string, idParam?: string) {
    const url = idParam ? `/${endpoint}/${idParam}` : `/${endpoint}`; // Wether it is for all items or a specific one
    const response = await api.get(url);
    return JSON.parse(JSON.stringify(response.data));
}

export async function postData(endpoint: string, data: object) {
    const response = await api.post(`/${endpoint}`, data);
    return JSON.parse(JSON.stringify(response.data, null, 2));
}

export async function patchData(endpoint: string, idParam: string, data: object) {
    const response = await api.patch(`/${endpoint}/${idParam}`, data);
    return JSON.parse(JSON.stringify(response.data, null, 2));
}

export async function deleteData(endpoint: string, idParam: string) {
    const response = await api.delete(`/${endpoint}/${idParam}`);
    return JSON.parse(JSON.stringify(response.data, null, 2));
}