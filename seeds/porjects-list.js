/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    {
      id: 1,
      project_name: 'Construction of Elizabeth Street',
      municipality: 'City of Toronto',
      contract_no: 'TOR-2023-001',
      closing_date: '2023-07-30'
    },
    {
      id: 2,
      project_name: 'Queensway Rehabilitation',
      municipality: 'City of Mississauga',
      contract_no: 'MIS-2022-008',
      closing_date: '2023-07-27'
    },
    {
      id: 3,
      project_name: 'Gardiner Expressway Widening',
      municipality: 'City of Brampton', contract_no: 'BRM-2022-098',
      closing_date: '2023-10-28'
    },
    {
      id: 4,
      project_name: 'Yonge Street Reconstruction',
      municipality: 'City of Toronto',
      contract_no: 'TOR-2023-003',
      closing_date: '2023-08-26'
    },
    {
      id: 5,
      project_name: 'Lower Don Trail Improvements',
      municipality: 'City of Toronto',
      contract_no: 'TOR-2023-007',
      closing_date: '2023-09-26'
    }
  ]);
};
