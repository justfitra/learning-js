const capitalize = (string) => {
  const first = string.charAt(0);
  const upper = first.toUpperCase();
  const last = string.slice(1);
  const full = upper + last;

  return full;
};

export default capitalize;
