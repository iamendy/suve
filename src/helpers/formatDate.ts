const getDate = (date: string): string => {
  const myDate = new Date(parseInt(date) * 1000);
  return myDate.toDateString();
};

export default getDate;
