import { FC } from 'react';
import Header from '../components/header';
import TabNavBar from '../components/tab-navbar';
import FormParking from '../components/form-parking';

const ExitPage: FC = () => (
  <>
    <Header />
    <section>
      <TabNavBar exit />
    </section>
    <section>
      <FormParking payment exit history />
    </section>
  </>
);

export default ExitPage;
