const MAX_WORD_COUNT = 20;
export const truncateDescription = (description: string) => {
  const words = description.split(" ");
  if (words.length > MAX_WORD_COUNT) {
    return {
      shortDescription: words.slice(0, MAX_WORD_COUNT).join(" ") + "...",
      isTruncated: true,
    };
  }
  return {
    shortDescription: description,
    isTruncated: false,
  };
};
