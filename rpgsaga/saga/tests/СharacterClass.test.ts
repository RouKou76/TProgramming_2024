import { Mage } from '../src/Character/Mage';
import { Warrior } from '../src/Character/Warrior';

describe('Class Character', () => {
  const war = new Warrior('Name', 'Warrior', 1);

  it('create New Character', () => {
    const magic = new Mage('Magika', 'Mag', 10);
    expect(magic.name).toEqual('Magika');
    expect(magic.class).toEqual('Mag');
    expect(magic.level).toEqual(10);
  });

  it('Gets class', () => {
    expect(war.name).toEqual('Name');
    expect(war.class).toEqual('Warrior');
    expect(war.level).toEqual(1);
  });

  it('Sets class', () => {
    war.name = 'Robbin';
    war.class = 'Lychnik';
    war.level = 1;
    expect(war.name).toEqual('Robbin');
    expect(war.class).toEqual('Lychnik');
    expect(war.level).toEqual(1);
  });
});
