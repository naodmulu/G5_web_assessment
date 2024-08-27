import axios from "axios";

const API_URL = "https://a2sv-backend.onrender.com/api/auth";


// Utility function to handle requests
const handleRequest = async <T>(
  method: string,
  endpoint: string,
  data?: any,
  accessToken?: string
): Promise<T> => {
  try {
    const response = await axios({
      method,
      url: endpoint,
      data,
      headers: {
        Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    return response.data as T;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

class AuthServices{
  public static register(userData:any){
    return handleRequest("POST",`${API_URL}/register`,userData,)
  }

  public static login(userData:any){
    return handleRequest("POST",`${API_URL}/login`,userData,)
  }
}

export default AuthServices;
