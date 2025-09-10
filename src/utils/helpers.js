export function toUrlSlug(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function capitaliseFirstLetter(str) {
  return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}

export const limitTitleLength = (title, limit, length) => {
  const originalStr = title;
  const strToArr = originalStr.split(" ");
  let shortenedStr = originalStr;
  if (strToArr.length > limit) {
    shortenedStr = strToArr.slice(0, length).join(" ") + "...";
  }
  return shortenedStr;
};

//##
