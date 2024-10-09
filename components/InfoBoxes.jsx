import InfoBox from './InfoBox';

const InfoBoxes = () => {
  return (
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <InfoBox
            heading='Health Insurance'
            backgroundColor='bg-gray-100'
            buttonInfo={{
              text: 'Get started',
              link: '/services',
              backgroundColor: 'bg-black',
            }}
          >
            Plan for your future health with your health insurance 
          </InfoBox>
          <InfoBox
            heading='Medical adherence'
            backgroundColor='bg-blue-100'
            buttonInfo={{
              text: 'Get started',
              link: '/service/medical',
              backgroundColor: 'bg-blue-500',
            }}
          >
            Your total health is possible with strict adherence
          </InfoBox>
          <InfoBox
            heading='Mental Health'
            backgroundColor='bg-blue-100'
            buttonInfo={{
              text: 'Get started',
              link: '/services/medical',
              backgroundColor: 'bg-blue-500',
            }}
          >
            List your properties and reach potential tenants. Rent as an Airbnb
            or long term.
          </InfoBox>
         
          
        </div>
      </div>
    </section>
  );
};
export default InfoBoxes;
