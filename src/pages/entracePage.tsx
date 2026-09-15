import { FC } from 'react';
import Header from '../components/header';
import TabNavBar from '../components/tab-navbar';
import FormParking from '../components/form-parking';

const EntrancePage: FC = () => (
  <>
    <Header />
    <section>
      <TabNavBar entrance />
    </section>
    <section>
      <FormParking entrace />
    </section>
  </>
);

export default EntrancePage;
