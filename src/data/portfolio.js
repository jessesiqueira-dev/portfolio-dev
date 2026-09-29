export const technologies = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'TypeScript',
  'PostgreSQL',
]

export const projects = [
  {
    number: '01',
    category: 'Finanças',
    title: 'FinTrack',
    description:
      'Aplicação de controle financeiro para acompanhar saldo e transações, com filtros por período, autenticação e integração com API.',
    image: '/fintrack-dashboard.jpg',
    imageAlt:
      'Dashboard do FinTrack com saldo, ganhos, gastos, investimentos e lista de transações',
    imageWidth: 1348,
    imageHeight: 1071,
    technologies: ['React', 'TanStack Query', 'React Hook Form', 'API REST'],
    links: [
      { label: 'Ver aplicação', url: 'https://fintrack-jade-rho.vercel.app/' },
      { label: 'Ver código', url: 'https://github.com/jessesiqueira-dev/fintrack' },
    ],
  },
  {
    number: '02',
    category: 'Produtividade',
    title: 'Task Manager',
    description:
      'Gerenciador de tarefas com fluxo de criação e visualização, construído para praticar componentes, rotas e integração de dados em React.',
    image: '/task-manager-dashboard.jpg',
    imageAlt: 'Tela do Task Manager com resumo e tarefas em diferentes estados',
    imageWidth: 1363,
    imageHeight: 936,
    technologies: ['React', 'Vite', 'React Router', 'TanStack Query'],
    links: [
      { label: 'Ver aplicação', url: 'https://task-manager-gamma-lyart-43.vercel.app/' },
    ],
  },
]
