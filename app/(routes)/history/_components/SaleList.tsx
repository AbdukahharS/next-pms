import React from 'react'
import { useQuery } from 'convex/react'

import { api } from '@/convex/_generated/api'
import { Doc, Id } from '@/convex/_generated/dataModel'
import SaleItem from './SaleItem'

function parseDate(dateString: string) {
  // Split the string into day, month, and year
  const [day, month, year] = dateString.split('.').map(Number)

  // Create and return a new Date object
  return new Date(year, month - 1, day).getTime() // Month is zero-indexed
}
interface Props {
  start: string
  end: string
  active: Id<'sales'> | Id<'intakes'> | null
  handleClick: (_id: Id<'sales'> | Id<'intakes'>) => void
}

const SaleList = ({ start, end, active, handleClick }: Props) => {
  const sales = useQuery(api.documents.getSalesinDateRange, {
    start: parseDate(start),
    end: parseDate(end),
  })

  return (
    <div className='w-full flex-1 overflow-y-auto'>
      {sales?.length ? (
        <table className='w-full overflow-y-auto table-auto'>
          <thead>
            <tr>
              <th>No</th>
              <th>Mijoz ismi</th>
              <th>Sana</th>
              <th>Umumiy narx</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((doc, i) => (
              <SaleItem
                key={doc._id}
                {...doc}
                i={i}
                handleClick={handleClick}
                active={active}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className='text-center text-xl flex-1 mt-8'>
          Sizda hech qanday mijoz mavjud emas
        </p>
      )}
    </div>
  )
}

export default SaleList
