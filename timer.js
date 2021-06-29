const timers = process.argv
  .slice(2)
  .filter(t => t > 0)
  .filter(t => +t)
  .map(s => s * 1000);
if (timers.length) {
  const ring = delay => setTimeout(() => console.log('*alarm sound*'), delay);
  timers.forEach(timer => ring(timer));
}
