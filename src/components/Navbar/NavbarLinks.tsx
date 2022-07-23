import * as Tooltip from '@radix-ui/react-tooltip';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { useNavbar } from '.';
import { Annotation } from '../../icons/Annotation';
import { UserCircle } from '../../icons/UserCircle';

interface NavbarItemProps {
	href: string;
	icon: ReactNode;
	label: string;
}

const items: NavbarItemProps[] = [
	{
		href: '/about',
		icon: <UserCircle />,
		label: 'About'
	},
	{
		href: '/blog',
		icon: <Annotation />,
		label: 'Blog'
	}
];

function NavbarItem({ href, icon, label }: NavbarItemProps) {
	const { asPath } = useRouter();
	const { visible } = useNavbar();

	return (
		<Tooltip.Provider delayDuration={0}>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<Link
						href={href}
						className={clsx(
							'rounded-xl bg-gray-3 p-2 text-gray-8 transition-colors hover:bg-gray-4 hover:text-gray-9',
							asPath === href && 'bg-gray-4 text-gray-9'
						)}
						aria-label={label}
					>
						{icon}
					</Link>
				</Tooltip.Trigger>

				<Tooltip.Portal>
					<Tooltip.Content
						className="rounded-lg border border-gray-6 bg-gray-3 px-1.5 py-px text-sm text-gray-11 shadow-md radix-state-delayed-open:animate-tooltip-open"
						side="bottom"
						sideOffset={visible ? 16 : 6}
					>
						{label}
					</Tooltip.Content>
				</Tooltip.Portal>
			</Tooltip.Root>
		</Tooltip.Provider>
	);
}

export function NavbarLinks() {
	return (
		<div className="flex items-center space-x-3">
			{items.map((props, i) => (
				<NavbarItem key={i} {...props} />
			))}
		</div>
	);
}
