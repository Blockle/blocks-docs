const groups = ['layout'];
const ids = ['box'];

export function validParams(group: string, id: string): boolean {
  if (!groups.includes(group)) {
    return false;
  }

  if (!ids.includes(id)) {
    return false;
  }

  return true;
}
