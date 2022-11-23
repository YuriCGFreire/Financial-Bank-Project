export type UserData = {
    id?: string | undefined;
    balance?: number | undefined;
    user: {
        id?: string | undefined;
        user_name?: string | undefined;
    }
}

export type SignInRequestData = {
    user_name: string;
    password: string;
}

export type SignUpRequestData = SignInRequestData;

export type AuthContextType = {
    user: UserData | null;
    signIn: (data: SignInRequestData) => Promise<void>;
    signUp: (data: SignUpRequestData) => Promise<void>;
    signOut: () => void;
}

