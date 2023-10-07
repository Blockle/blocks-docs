const groups = ['layout', 'theme', 'components'];
const ids = ['theming', 'box', 'stack', 'inline', 'button'];

export function validParams(group: string, id: string): boolean {
  if (!groups.includes(group)) {
    return false;
  }

  if (!ids.includes(id)) {
    return false;
  }

  return true;
}
