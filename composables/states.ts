export const useColor = () => useState<string>('color', () => 'pink')
export const useCounter = ()=>useState('counter', () => Math.round(Math.random() * 1000))
