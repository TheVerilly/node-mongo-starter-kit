export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            HOST: string;
            PORT: number;
            DB_URL: string;
            DB_USER: string;
            DB_PASSWORD: string;
        }
    }
}
