import LoginPage from './components/LoginPage'


export default function Home(props) {
  return (
    <div className=''>
      <LoginPage error={props.searchParams.error}/>
    </div>
  )
}
