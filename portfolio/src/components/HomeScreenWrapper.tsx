import * as React from 'react'

type HomeScreenWrapperType = {
    children: React.ReactNode
}

const HomeScreenWrapper = ({children}: HomeScreenWrapperType) => {
    let squareList = Array(10).fill(1)

    return(
        <main className='h-[calc(100vh-3.5rem)] overflow-hidden'>
            <div className='z-10 relative'>{children}</div>

            <div className="area z-0">
                <ul className='circles'>
                    {
                        squareList.map((_, index) => (
                            <li key={index}></li>
                        ))
                    }
                </ul>
            </div>
        </main>
        
    )
}

export default HomeScreenWrapper