import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCount } from '../store/slices/count.slice'

export default function AddCount() {
  
  const dipatch = useDispatch();
  const count = useSelector(store => store.count.value);
  const addCountCb = useCallback(() => dipatch(addCount()));

  return (
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <h1>
        AddCount: <span>{count}</span>
      </h1>
      <button onClick={addCountCb}>Add To Count</button>
    </div>
  )
}