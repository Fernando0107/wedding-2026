import familiesData from '@/data/families.json';

export interface FamilyData {
  guests: string[];
}

export interface FamiliesData {
  [familyKey: string]: FamilyData;
}

// Cargar datos de familias
export const families: FamiliesData = familiesData as FamiliesData;

/**
 * Obtiene los datos de una familia por su key
 * @param familyKey - La clave de la familia (ej: "gonzalez")
 * @returns Los datos de la familia o null si no existe
 */
export function getFamily(familyKey: string): FamilyData | null {
  const normalizedKey = familyKey.toLowerCase().trim();
  return families[normalizedKey] || null;
}

/**
 * Verifica si una familia existe
 * @param familyKey - La clave de la familia
 * @returns true si la familia existe
 */
export function familyExists(familyKey: string): boolean {
  return getFamily(familyKey) !== null;
}

/**
 * Obtiene la lista de invitados de una familia
 * @param familyKey - La clave de la familia
 * @returns Array de nombres de invitados o array vacío
 */
export function getFamilyGuests(familyKey: string): string[] {
  const family = getFamily(familyKey);
  return family?.guests || [];
}

/**
 * Obtiene todas las keys de familias del JSON
 * @returns Array con todas las keys de familias
 */
export function getAllFamilyKeys(): string[] {
  return Object.keys(families);
}

/**
 * Calcula el total de invitados sumando todos los guests de todas las familias
 * @returns Número total de invitados
 */
export function getTotalGuests(): number {
  return Object.values(families).reduce((total, family) => {
    return total + (family.guests?.length || 0);
  }, 0);
}
