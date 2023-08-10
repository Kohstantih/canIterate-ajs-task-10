export default function canIterate(arg) {
  try {
    if (arg[Symbol.iterator] === undefined) return false;
    return true;
  } catch (error) {
    return false;
  }
}
