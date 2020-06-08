function sheepJump(numSheep) {
	if (numSheep <= 0) {
		return console.log('All sheep jumped over the fence');
	}

	console.log(numSheep, 'Another sheep jumped over the fence');

	sheepJump(numSheep - 1);
}

sheepJump(-3);
