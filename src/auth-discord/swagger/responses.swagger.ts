export const CreatedResponse = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwicm9sZSI6eyJpZCI6MiwibmFtZSI6IlVzZXIiLCJfX2VudGl0eSI6IlJvbGUifSwiaWF0IjoxNjgxODc5NzExLCJleHAiOjE2ODE5NjYxMTF9.zozZGbwJj_Q6ZWwfXYqPNEXMsmOG-LG8cRkibLB6cT0',
  user: {
    id: 8,
    firstName: null,
    lastName: null,
    createdAt: '2023-04-19T01:36:10.977Z',
    updatedAt: '2023-04-19T01:42:15.123Z',
    deletedAt: null,
    photo: {
      path: 'https://cdn.discordapp.com/avatars/938573248860405881/3fd4cd98e11e645671663801a9fa1122.png',
    },
    role: {
      id: 2,
      name: 'User',
      __entity: 'Role',
    },
    status: {
      id: 1,
      name: 'Active',
      __entity: 'Status',
    },
    __entity: 'User',
  },
};

export const ForbiddenResponse = {
  statusCode: 403,
  message: 'An invalid code was passed',
  error: 'Forbidden',
};
