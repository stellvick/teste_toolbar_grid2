import { Button } from "@mui/material";
import { PageContainer, PageContainerToolbar } from "@toolpad/core";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro";

const Dashboard = () => {
    function PageToolbar() {
        return (
          <PageContainerToolbar>
            <Button startIcon={<FileDownloadIcon />} color="inherit">
              Export
            </Button>
            <DateRangePicker
              sx={{ width: 220 }}
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