import React, { useEffect, useRef, useState } from 'react'

export default function ShowUsers({users, usersLen}) {

  return (
    <>
        <div className="indicator border col-span-2 border-cyan-200 w-full">
              <span className="indicator-item badge badge-lg text-lg badge-primary">{usersLen}</span>           
              <div className="flex flex-col w-full">
                <p className='text-gray-400 mb-4'>Users: </p>
                <div className="grid grid-cols-3 px-2">
                  <p className='text-lg'>Name</p>
                  <p className='text-lg'>Surname</p>
                  <p className='text-lg'>Actions</p>
                </div>
                <hr />
                {/* HERE WILL GO A LOOP THAT WILL PRINT ALL DATA FROM INPUT */}
                <div className="max-h-80 overflow-y-scroll">
                  {
                    users?.map((user, i) =>
                          <div className="px-5 hover:bg-zinc-700 cursor-grab active:cursor-grabbing active:bg-zinc-500" key={i}>
                            <div className="py-2 my-2 grid grid-cols-3">
                              <p className='capitalize'>{user.name}</p>
                              <p className='capitalize'>{user.username}</p>
                              <div className="btn-group flex justify-between">
                                <button className="badge bg-green-300 hover:bg-green-400 active:bg-green-600 text-slate-900 font-bold text-md p-3">MODIFY</button>
                                <button className="badge bg-pink-300 hover:bg-pink-400 active:bg-pink-600 active:text-slate-200 text-slate-900 font-bold text-md p-3 mr-10">DELETE</button>
                              </div>
                            </div>
                          </div>
                    )
                  }
                </div>

          </div>
          </div>
    </>
  )
}
