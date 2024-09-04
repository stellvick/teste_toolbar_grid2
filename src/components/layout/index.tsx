import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { Outlet } from 'react-router-dom';
import { BASETHEME, NAVIGATION } from '../../utils/constants';

export default function DashboardLayoutBasic() {

  return (
    <AppProvider
      navigation={NAVIGATION}
      theme={BASETHEME}
    >
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </AppProvider>
  );
}