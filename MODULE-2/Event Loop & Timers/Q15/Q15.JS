const rl = require('readline').createInterface({input:process.stdin,output:process.stdout});

const start = (n) => {
	n = Number(n);
	if (!Number.isFinite(n) || n < 0) { console.log('Enter a non-negative number'); process.exit(1) }
	let t = n;
	console.log(`Starting ${t}s. Press 's' to stop.`);
	const id = setInterval(()=>{
		console.log(`Time left: ${t}s`);
		if (t-- <= 0) { clearInterval(id); console.log('Countdown Complete!'); cleanup() }
	},1000);

	setTimeout(()=>{
		if (process.stdin.isTTY && process.stdin.setRawMode) {
			process.stdin.setRawMode(true); process.stdin.resume();
			process.stdin.on('data', c => {
				const k = c.toString();
				if (k === '\u0003') { clearInterval(id); console.log(); cleanup() }
				if (k.trim().toLowerCase() === 's') { clearInterval(id); console.log('\nCountdown stopped by user.'); cleanup() }
			});
		}
	},500);

	function cleanup(){ try{ if (process.stdin.isTTY && process.stdin.setRawMode) process.stdin.setRawMode(false); process.stdin.pause() }catch(e){} setTimeout(()=>process.exit(0),50) }
};

if (process.argv[2]) start(process.argv[2]); else rl.question('Enter number of seconds: ', a=>{ rl.close(); start(a) });

