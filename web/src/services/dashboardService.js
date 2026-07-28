import api from "./api";


export async function getDashboardData() {

    const response = await api.get("/api/forecast");

    return response.data;

}