const suggests = [
	{
		id: 'zxcvbn',
		author: 'Author1',
		dateTime: '10.10.2016 - 12:03',
		category: 'Кино',
		suggest: 'Париж - город мертвых',
		likes: [
			{
				id: 1765,
				name: 'liker1'
			},
			{
				id: 4634,
				name: 'liker2'
			}
		],
		comments: [
			{
				id: 4634,
				name: 'liker2',
				comment: 'да, отличный фильм!',
				dateTime: '10.10.2016 - 12:12'
			}
		]
	},
	{
		id: 'asdfgh',
		author: 'Author2',
		dateTime: '12.10.2016 - 18:09',
		category: 'Еда',
		suggest: 'Бургер из фрайдиса',
		likes: [
			{
				id: 1765,
				name: 'liker1'
			}
		],
		comments: [
			{
				id: 1765,
				name: 'liker1',
				comment: 'ниче особенного :( ',
				dateTime: '12.10.2016 - 18:59'
			}
		]
	}
];

export default suggests;