import PaginatedItems from './Pagination';

const ShowData = () => {
  return (
    <>
     <div className='container m-4'>
                <h1 className='text-primary'>Products details</h1>
                <br/>
        <div className='container m-3'><PaginatedItems itemsPerPage={6} /></div>
        </div>
    </>
  );
};

export default ShowData;
