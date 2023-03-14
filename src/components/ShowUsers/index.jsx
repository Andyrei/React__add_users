import React from 'react'

export default function ShowUsers() {
  return (
    <>
        <div className="indicator border border-cyan-200 w-full">
              <span className="indicator-item badge badge-primary">Users: 99+</span>           
              <div className="flex flex-col w-full">
                <p className='text-gray-400 mb-4'>Users: </p>
                <div className="grid grid-cols-3 px-2">
                  <p className='underline'>Name</p>
                  <p className='underline'>Surname</p>
                  <p className='underline'>Actions</p>
                </div>
                <hr />
                <div className="px-2">
                  <div className="mt-3 flex justify-between">
                    <p className='underline'>Andy</p>
                    <p className='underline'>Andrei</p>
                    <div className="btn-group">
                      <button className="badge badge-accent mx-3">Modify</button>
                      <button className="badge badge-accent mx-3">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <div className="mt-3 flex justify-between">
                    <p className='underline'>Andy</p>
                    <p className='underline'>Andrei</p>
                    <div className="btn-group">
                      <button className="badge badge-accent mx-3">Modify</button>
                      <button className="badge badge-accent mx-3">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <div className="mt-3 flex justify-between">
                    <p className='underline'>Andy</p>
                    <p className='underline'>Andrei</p>
                    <div className="btn-group">
                      <button className="badge badge-accent mx-3">Modify</button>
                      <button className="badge badge-accent mx-3">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <div className="mt-3 flex justify-between">
                    <p className='underline'>Andy</p>
                    <p className='underline'>Andrei</p>
                    <div className="btn-group">
                      <button className="badge badge-accent mx-3">Modify</button>
                      <button className="badge badge-accent mx-3">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <div className="mt-3 flex justify-between">
                    <p className='underline'>Andy</p>
                    <p className='underline'>Andrei</p>
                    <div className="btn-group">
                      <button className="badge badge-accent mx-3">Modify</button>
                      <button className="badge badge-accent mx-3">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <div className="mt-3 flex justify-between">
                    <p className='underline'>Andy</p>
                    <p className='underline'>Andrei</p>
                    <div className="btn-group">
                      <button className="badge badge-accent mx-3">Modify</button>
                      <button className="badge badge-accent mx-3">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
    </>
  )
}
