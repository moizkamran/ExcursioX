import faker from 'faker';

export const UserData = [
  {
    id: 1,
    date: faker.date.past(),
    occupancy: faker.random.number({ min: 30, max: 100 }),
    vacancy: faker.random.number({ min: 30, max: 100 }),
    outOfOrder: faker.random.number({ min: 0, max: 10 }),
    offMarket: faker.random.number({ min: 0, max: 10 }),
  },
  {
    id: 2,
    date: faker.date.recent(),
    occupancy: faker.random.number({ min: 50, max: 100 }),
    vacancy: faker.random.number({ min: 50, max: 100 }),
    outOfOrder: faker.random.number({ min: 0, max: 10 }),
    offMarket: faker.random.number({ min: 0, max: 10 }),
  },
  {
    id: 3,
    date: faker.date.recent(),
    checkins: faker.random.number({ min: 50, max: 100 }),
    checkouts: faker.random.number({ min: 80, max: 100 }),
    confirmed: 100,
  },
];