import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 2, duration: 1 });
	useCountUp({ ref: 'clientsCounter', end: 20, duration: 2 });
	useCountUp({ ref: 'hoursCounter', end: 875, duration: 2 });
	useCountUp({ ref: 'hourProgressCounter', end: (875/3000)*100, duration: 2 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of experience"
					counter={<span id="experienceCounter" />}
					measurement=""
				/>

				<CounterItem
					title="Clients worked with"
					counter={<span id="clientsCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Clinical hours"
					counter={<span id="hoursCounter" />}
					measurement=""
				/>

				<CounterItem
					title="of trainee hours completed"
					counter={<span id="hourProgressCounter" />}
					measurement="%"
				/>
			</div>
		</div>
	);
};

export default AboutCounter;
