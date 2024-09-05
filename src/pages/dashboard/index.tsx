import { PageContainer, PageContainerToolbar } from '@toolpad/core/PageContainer';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import dayjs from 'dayjs';
import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BaseCard from '../../components/base';

const Dashboard = () => {
  function PageToolbar() {
    return (
      <PageContainerToolbar>
        <Button startIcon={<FileDownloadIcon />} color="inherit">
          Export
        </Button>
        <DateRangePicker
          sx={{ width: 220 }}
          defaultValue={[dayjs(), dayjs().add(14, 'day')]}
          slots={{ field: SingleInputDateRangeField }}
          slotProps={{ field: { size: 'small' } as any }}
          label="Period"
        />
      </PageContainerToolbar>
    );
  }
  return (
    <PageContainer slots={{ toolbar: PageToolbar }}>
      <BaseCard>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="caption">Temperature</Typography>
              <Typography variant="h4">24°C</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="caption">Precipitation</Typography>
              <Typography variant="h4">5%</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="caption">Wind</Typography>
              <Typography variant="h4">18km/h</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </BaseCard>
    </PageContainer>
  );
};

export default Dashboard;