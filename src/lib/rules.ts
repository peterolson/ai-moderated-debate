type ExampleDialog = {
	acceptable?: boolean;
	text: string;
	explanation?: string;
}[];

export type Rule = {
	key: string;
	title: string;
	description: string;
	examples?: ExampleDialog[];
};
export const rules: Rule[] = [
	{
		key: 'general-civility',
		title: 'General civility',
		description:
			'Be polite and respectful to others. Do not insult or harass others. Do not use hate speech or slurs.'
	},
	{
		key: 'stay-on-topic',
		title: 'Stay on topic',
		description:
			'Do not change the subject or introduce irrelevant points. Stick to the topic at hand.'
	},
	{
		key: 'ignoring-points',
		title: 'Do not ignore arguments',
		description:
			"If your debate partner makes a point, you should address it. Ignoring your opponents' arguments is a sign of bad faith."
	},
	{
		key: 'ad-hominem',
		title: 'Ad hominem',
		description: "Do not attack your debate partner's character or motives. Stick to the arguments."
	},
	{
		key: 'non-sequitur',
		title: 'Non sequitur',
		description:
			'Do not make arguments that do not follow from the premises. Your arguments should be logically connected to the topic at hand.'
	},
	{
		key: 'strawman',
		title: 'Strawman',
		description:
			"Do not misrepresent your debate partner's argument. Address the actual argument, not a distorted version of it.",
		examples: [
			[
				{ text: 'The laws against consumption of certian drugs should be relaxed.' },
				{
					acceptable: false,
					text: 'No, legalizing all drugs would lead to chaos.',
					explanation:
						'The original argument was about relaxing certain drug laws, not legalizing all drugs.'
				}
			]
		]
	},
	{
		key: 'goalpost-moving',
		title: 'Goalpost moving',
		description:
			'Do not change the criteria of the debate after the fact. Stick to the original terms.'
	},
	{
		key: 'circular-reasoning',
		title: 'Circular reasoning',
		description: 'Do not use your conclusion as a premise in your argument.',
		examples: [
			[
				{
					text: 'The Bible is the true word of God because it says so in 2 Timothy 3:16.',
					acceptable: false,
					explanation: 'The argument is circular because 2 Timothy 3:16 is part of the Bible.'
				}
			]
		]
	}
];
