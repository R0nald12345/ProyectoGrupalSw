import Header from '../layout/Header'
import PageLoadingPage from './PageLoadingPage'

const PagePrincipal = () => {
    return (
        <>
            <Header/>
    
            <main className='mt-22'>
                <PageLoadingPage/>   
                {/* <PagePrincipal/> */}
                {/* <Outlet/> */}
            </main>
    
        </>
      )
    }
    


export default PagePrincipal