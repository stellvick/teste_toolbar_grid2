import { Grid2, Paper } from "@mui/material";
import { PageContainer } from "@toolpad/core";

type BaseProps = {
    children: React.ReactNode;
};

const BaseCard = ({ children }: BaseProps) => {
    return (
        <PageContainer>
        <Grid2 container sx={{width: 'calc(100vw - 320px)', height: 'calc(100vh - 64px)', padding: 2}}>
            <Grid2 size={12} component={Paper} sx={{padding: 2}}>
                {children}
            </Grid2>
        </Grid2>
        </PageContainer>

    );
};

export default BaseCard;