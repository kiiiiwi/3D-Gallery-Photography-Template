'use client';

import { useEffect, useState } from 'react';

interface Star {
	id: number;
	x: number;
	y: number;
	size: number;
	delay: number;
	duration: number;
	type: 'normal' | 'glow' | 'gold';
}

export function StarField() {
	const [stars, setStars] = useState<Star[]>([]);

	useEffect(() => {
		// Generate random stars on mount
		const generatedStars: Star[] = [];
		const starCount = 80;

		for (let i = 0; i < starCount; i++) {
			const type = Math.random() > 0.85 ? (Math.random() > 0.5 ? 'gold' : 'glow') : 'normal';
			generatedStars.push({
				id: i,
				x: Math.random() * 100,
				y: Math.random() * 100,
				size: Math.random() * 2 + 1,
				delay: Math.random() * 5,
				duration: Math.random() * 3 + 2,
				type,
			});
		}

		setStars(generatedStars);
	}, []);

	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
			{stars.map((star) => (
				<div
					key={star.id}
					className={`star ${star.type === 'glow' ? 'star-glow' : ''} ${star.type === 'gold' ? 'star-gold' : ''}`}
					style={{
						left: `${star.x}%`,
						top: `${star.y}%`,
						width: `${star.size}px`,
						height: `${star.size}px`,
						animationDelay: `${star.delay}s`,
						animationDuration: `${star.duration}s`,
					}}
				/>
			))}
		</div>
	);
}
