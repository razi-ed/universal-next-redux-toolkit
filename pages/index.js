import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Page from '../components/Page'

import { wrapper } from '../store/store'
import { addCount } from '../store/slices/count.slice'
import { setAppTimer } from '../store/slices/tick.slice'

export default function Index() {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(
      () => dispatch(setAppTimer({ isServer: false, ts: Date.now()})),
      1000
    )
    return () => {
      clearInterval(timer)
    }
  }, [])

  return <Page title="Index Page" linkTo="/other" />
}

export const getStaticProps = wrapper.getStaticProps((store) => () => {
  store.dispatch(setAppTimer({isServer: true, ts: Date.now()}))
  store.dispatch(addCount())
})