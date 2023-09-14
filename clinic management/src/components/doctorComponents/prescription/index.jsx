import React, { useEffect, useState } from 'react'
import Prescriptionform from '../Prescriptionform';
import { useParams } from 'react-router-dom'

const Prescription = () => {
    const {userId} = useParams();
    console.log("00000000000",userId)
  return (
    <>
            <div>
                <div class="flex overflow-hidden bg-white pt-16">
                    <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
                    <div id="main-content" class="h-full w-full relative overflow-y-auto lg:ml-64">
                        <main>
                            <div class=" px-4">
                                <Prescriptionform userId={userId}/>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Prescription