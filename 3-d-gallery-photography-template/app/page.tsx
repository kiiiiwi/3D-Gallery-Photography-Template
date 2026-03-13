import InfiniteGallery from '@/components/InfiniteGallery';
import { StarField } from '@/components/StarField';

export interface MoonImage {
	src: string;
	alt: string;
	title: string;
	period: string;
	description: string;
}

export default function Home() {
	const moonObservationImages: MoonImage[] = [
		{
			src: 'https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?w=800&q=80',
			alt: 'Ancient Moon Observation',
			title: 'Ancient Civilizations',
			period: '3000 BCE - 500 CE',
			description: 'Ancient Babylonians, Egyptians, and Greeks tracked lunar cycles to create calendars, predict eclipses, and guide agricultural practices. The Moon was revered as a deity in many cultures.',
		},
		{
			src: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=800&q=80',
			alt: 'Medieval Moon Studies',
			title: 'Medieval Astronomy',
			period: '500 - 1400 CE',
			description: 'Islamic astronomers made precise measurements of lunar motion. Al-Battani calculated the lunar year with remarkable accuracy, while observatories across the Middle East advanced selenography.',
		},
		{
			src: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800&q=80',
			alt: 'Galileo Telescope Era',
			title: 'The Telescope Revolution',
			period: '1609 - 1700',
			description: 'Galileo Galilei first observed the Moon through a telescope in 1609, revealing mountains, craters, and maria. This transformed our understanding of the Moon from a perfect celestial sphere to a world with terrain.',
		},
		{
			src: 'https://images.unsplash.com/photo-1509183614470-a73aa9f7ffb5?w=800&q=80',
			alt: 'Age of Enlightenment Moon Mapping',
			title: 'Enlightenment Mapping',
			period: '1700 - 1850',
			description: 'Detailed lunar maps emerged as telescope technology improved. Johann Heinrich von Mädler created the first reliable lunar map, while scientists debated whether the Moon harbored life or water.',
		},
		{
			src: 'https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?w=800&q=80',
			alt: 'Lunar Photography Beginning',
			title: 'Birth of Lunar Photography',
			period: '1840 - 1900',
			description: 'The first lunar photographs were taken in 1840 by J.W. Draper. By the late 1800s, detailed photographic atlases of the Moon revolutionized astronomical study and public fascination.',
		},
		{
			src: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800&q=80',
			alt: 'Space Race Era',
			title: 'The Space Race',
			period: '1957 - 1969',
			description: 'The USSR launched Luna 2, the first spacecraft to reach the Moon in 1959. Luna 3 photographed its far side for the first time. The race culminated with Apollo 11 landing humans on the Moon in 1969.',
		},
		{
			src: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80',
			alt: 'Apollo Moon Landing',
			title: 'Apollo Missions',
			period: '1969 - 1972',
			description: 'Six Apollo missions landed 12 astronauts on the lunar surface, returning 382 kg of Moon rocks. These samples revolutionized our understanding of the Moon\'s origin and geological history.',
		},
		{
			src: 'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?w=800&q=80',
			alt: 'Modern Lunar Exploration',
			title: 'Modern Exploration',
			period: '2000 - Present',
			description: 'Missions like LCROSS discovered water ice at the lunar poles. China\'s Chang\'e program landed on the far side. Multiple nations now plan permanent lunar bases as humanity prepares to return.',
		},
	];

	return (
		<main className="min-h-screen bg-background relative overflow-hidden">
			{/* Star field background */}
			<StarField />
			
			{/* Decorative orbital lines */}
			<div className="orbital-line top-[15%] left-[5%] w-[25%] opacity-50" />
			<div className="orbital-line top-[15%] right-[5%] w-[25%] opacity-50" />
			<div className="orbital-line bottom-[20%] left-[10%] w-[15%] opacity-30" />
			<div className="orbital-line bottom-[25%] right-[8%] w-[20%] opacity-30" />

			{/* 3D Gallery */}
			<InfiniteGallery
				images={moonObservationImages}
				speed={1.2}
				zSpacing={3}
				visibleCount={12}
				falloff={{ near: 0.8, far: 14 }}
				className="h-screen w-full rounded-lg overflow-hidden"
			/>

			{/* Title overlay */}
			<div className="fixed inset-0 pointer-events-none flex flex-col items-center justify-start pt-12 md:pt-16 px-4 z-10">
				<p className="font-mono text-sm md:text-base tracking-[0.3em] uppercase text-foreground/70 mb-2">
					Explore the
				</p>
				<h1 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-center text-balance">
					<span className="text-primary font-medium">Human History</span>
					<br />
					<span className="italic text-secondary">of Observing the Moon</span>
				</h1>
			</div>

			{/* Navigation instructions */}
			<div className="text-center fixed bottom-8 left-0 right-0 font-mono uppercase text-[10px] md:text-[11px] tracking-wider z-10">
				<p className="text-primary/90">
					Use mouse wheel, arrow keys, or touch to navigate
				</p>
				<p className="text-foreground/50 mt-1">
					Press and hold on image to reveal details
				</p>
				<p className="text-foreground/40 mt-1">
					Auto-play resumes after 3 seconds of inactivity
				</p>
			</div>

			{/* Decorative corner accents */}
			<div className="fixed top-8 left-8 w-16 h-16 border-l border-t border-primary/30 pointer-events-none" />
			<div className="fixed top-8 right-8 w-16 h-16 border-r border-t border-primary/30 pointer-events-none" />
			<div className="fixed bottom-8 left-8 w-16 h-16 border-l border-b border-secondary/30 pointer-events-none" />
			<div className="fixed bottom-8 right-8 w-16 h-16 border-r border-b border-secondary/30 pointer-events-none" />
		</main>
	);
}
