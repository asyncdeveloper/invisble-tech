import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

export class Api {
    private api: AxiosInstance;

    public constructor (config: AxiosRequestConfig) {
        this.api = axios.create(config);

        this.api.interceptors.request.use((param: AxiosRequestConfig) => ({
            ...param
        }));

        this.api.interceptors.response.use((param: AxiosResponse) => ({
            ...param
        }));
    }

    public get<T, R = AxiosResponse<T>> (url: string, config?: AxiosRequestConfig): Promise<R> {
        return this.api.get(url, config);
    }

}
