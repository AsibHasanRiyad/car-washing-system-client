export const combineDateAndTime = (
  dateStr: string,
  timeStr: string
): string => {
  const dateObj = new Date(dateStr);
  const [hours, minutes] = timeStr.split(":").map(Number);

  dateObj.setUTCHours(dateObj.getUTCHours() + hours);
  dateObj.setUTCMinutes(dateObj.getUTCMinutes() + minutes);

  return dateObj.toISOString();
};
