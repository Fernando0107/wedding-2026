import mesasData from '@/data/mesas.json';

interface MesaEntry {
  nombre: string;
  mesa: number;
}

export interface TableGuest {
  name: string;
  table: number;
  searchKey: string;
}

/**
 * Quita tildes y pasa a minúsculas para comparar nombres ("José" → "jose")
 */
export function normalizeName(text: string): string {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

export const tableGuests: TableGuest[] = (mesasData as MesaEntry[])
  .map(({ nombre, mesa }) => ({
    name: nombre.trim(),
    table: mesa,
    searchKey: normalizeName(nombre.trim()),
  }))
  .sort((a, b) => a.searchKey.localeCompare(b.searchKey, 'es'));
