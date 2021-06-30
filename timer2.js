const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', key => {
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }
  if (key === 'b') {
    process.stdout.write('*alarm sound*\n');
  } else {
    key = +key;
    if (key > 0 && key < 10) {
      process.stdout.write(
        `setting timer for ${key} second${key > 1 ? 's' : ''}..\n`
      );
      setTimeout(() => {
        process.stdout.write('*alarm sound*\n');
      }, key * 1000);
    }
  }
});
