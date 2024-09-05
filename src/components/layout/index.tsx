import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { Outlet } from 'react-router-dom';
import { BASETHEME, NAVIGATION } from '../../utils/constants';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';

export default function DashboardLayoutBasic() {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AppProvider
        navigation={NAVIGATION}
        theme={BASETHEME}
      >
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      </AppProvider>
    </LocalizationProvider>
  );
}