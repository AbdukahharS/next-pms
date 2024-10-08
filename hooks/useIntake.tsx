import { create } from 'zustand'

import { Id } from '@/convex/_generated/dataModel'

type IntakeStore = {
  supplier: Id<'suppliers'> | null
  products: {
    id: Id<'products'>
    name: string
    amount: number
    buyPrice: number
    sellPrice: number
    unit: 'piece' | 'm' | 'kg' | 'm2'
    category: Id<'categories'>
  }[] // Make products an array that can be empty
  totalBuyPrice: number
  addItem: (
    id: Id<'products'>,
    buyPrice: number,
    amount: number,
    unit: 'piece' | 'm' | 'kg' | 'm2',
    name: string,
    sellPrice: number,
    category: Id<'categories'>
  ) => void
  removeItem: (id: Id<'products'>) => void
  setSupplier: (id: Id<'suppliers'> | null) => void
  changeAmount: (id: Id<'products'>, amount: number) => void
  clear: () => void
}

const useIntake = create<IntakeStore>((set, get) => ({
  supplier: null,
  products: [],
  totalBuyPrice: 0,
  addItem: (id, buyPrice, amount, unit, name, sellPrice, category) => {
    set((prev) => ({
      ...prev,
      totalBuyPrice: prev.totalBuyPrice + buyPrice * amount,
      products: [
        ...prev.products,
        { id, amount, buyPrice, unit, name, sellPrice, category },
      ],
    }))
  },
  setSupplier: (id) => {
    set({ supplier: id })
  },
  changeAmount: (id, amount) => {
    set((prev) => ({
      ...prev,
      products: prev.products.map((p) => {
        if (p.id === id) {
          return { ...p, amount }
        }
        return p
      }),
    }))
  },
  clear: () => {
    set({ supplier: null, products: [], totalBuyPrice: 0 })
  },
  removeItem: (id) => {
    set((prev) => ({
      ...prev,
      products: prev.products.filter((p) => p.id !== id),
    }))
  },
}))

export default useIntake
