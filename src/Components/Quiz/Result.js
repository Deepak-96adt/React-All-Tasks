 function Result({score , color}) {
  return (
    <>    
       <div className='container p-4'>
                <h1 className={color}>your score is {score}</h1>
        </div>
    </>
  )
}

export default Result