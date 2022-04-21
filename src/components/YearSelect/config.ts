const reverseYearArray: number[] = [];
const currentYear = new Date().getFullYear();
for (let i = currentYear; i > 1899; --i) reverseYearArray.push(i);

export default reverseYearArray;
