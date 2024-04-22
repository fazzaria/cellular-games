const shuffle = <T>(array: T[]) => {
  let currentIndex = array.length;
  const arr = [...array];

  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
  return arr;
};

export default shuffle;
