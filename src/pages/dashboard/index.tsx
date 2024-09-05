import { PageContainer, PageContainerToolbar } from '@toolpad/core/PageContainer';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import dayjs from 'dayjs';

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
    <PageContainer slots={{ toolbar: PageToolbar }}>Page content</PageContainer>
  );
};

export default Dashboard;