import { describe, expect, it } from 'vitest';
import { isValidPlate, normalizePlate } from './parking';

describe('parking utils', () => {
  it('normaliza placa para maiúsculas', () => {
    expect(normalizePlate(' abc-1234 ')).toBe('ABC-1234');
  });

  it('valida formato AAA-0000', () => {
    expect(isValidPlate('ABC-1234')).toBe(true);
    expect(isValidPlate('AB-1234')).toBe(false);
    expect(isValidPlate('ABC1234')).toBe(false);
  });
});
