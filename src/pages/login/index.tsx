import { AuthProvider, SignInPage } from '@toolpad/core';
import { Grid2 } from '@mui/material';


export default function LoginPage() {
    const providers = [
        { id: 'github', name: 'GitHub' },
        { id: 'google', name: 'Google' },
        { id: 'facebook', name: 'Facebook' },
    ];

    const signIn: (provider: AuthProvider) => void = async (provider) => {
        const promise = new Promise<void>((resolve) => {
            setTimeout(() => {
                console.log(`Sign in with ${provider.id}`);
                resolve();
            }, 500);
        });
        return promise;
    };
    return (
        <Grid2 size="grow">
            <SignInPage signIn={signIn} providers={providers} />
        </Grid2>
    );
}
