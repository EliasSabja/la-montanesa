
export const getPaginationNumbers = (currentPageNumber: number, totalPageNumber: number) => {
  const paginationNumbers = [];
  for (let i = currentPageNumber - 2; i <= currentPageNumber + 2; i++) {
    if (i > 0 && i <= totalPageNumber) {
      paginationNumbers.push(i);
    }
  }
  return paginationNumbers;
}
