// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';

export const projectsData = [
	{
		id: 1,
		title: 'Individual Therapy',
		category: 'IFS',
		img: WebImage2,
		ProjectHeader: {
			title: 'Integrated Therapy Services',
			publishDate: 'Jul 26, 2023',
			tags: 'IFS',
		},
	},
	{
		id: 2,
		title: 'Couples Therapy',
		category: 'Couples',
		img: MobileImage2,
	},
	{
		id: 3,
		title: 'LGBTQIA+ Therapy',
		category: 'LGBTQIA+',
		img: UIImage1,
	},
	// {
	// 	id: 4,
	// 	title: 'Cloud Storage Platform',
	// 	category: 'UI/UX Design',
	// 	img: UIImage2,
	// },
	// {
	// 	id: 5,
	// 	title: 'React Social App',
	// 	category: 'Mobile Application',
	// 	img: MobileImage1,
	// },
	// {
	// 	id: 6,
	// 	title: 'Apple Design System',
	// 	category: 'Web Application',
	// 	img: WebImage1,
	// },
];
