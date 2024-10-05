import { cn } from '@/lib/utils';
import { FC, PropsWithChildren } from 'react';

type Props = {
	className?: string;
};

export const AppContainer: FC<PropsWithChildren<Props>> = ({ className, children }) => {
	return (
		<div className='w-full px-5'>
			<div className={cn('w-full max-w-screen-xl mx-auto', className)}>{children}</div>
		</div>
	);
};