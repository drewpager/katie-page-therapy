import { FiClock, FiTag } from 'react-icons/fi';
import { ProjectHeader } from '../utils/SingleProjectData';

const ProjectSingleHeader = () => {
	return (
		<div>
			<p className="text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-7 sm:mt-20 mb-7">
				{ProjectHeader.title}
			</p>
			<div className="flex">
				<div className="flex items-center mr-10">
					<FiClock className="text-xl text-ternary-dark dark:text-ternary-light" />
					<span className="ml-2 leading-none text-primary-dark dark:text-primary-light">
						{ProjectHeader.publishDate}
					</span>
				</div>
				<div className="flex items-center">
					<FiTag className="w-4 h-4 text-ternary-dark dark:text-ternary-light" />
					<span className="ml-2 leading-none text-primary-dark dark:text-primary-light">
						{ProjectHeader.tags}
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectSingleHeader;