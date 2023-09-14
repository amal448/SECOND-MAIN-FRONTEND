import React, { useEffect, useState } from 'react';
import ListOfPrescriptions from '../userPrescriptionList';

const PrescriptionList = () => {
return(
    <>
     <div>
        <div class="flex overflow-hidden bg-white pt-16">
            <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
            <div id="main-content" class="h-full w-full relative overflow-y-auto lg:ml-64">
                <main>
                    <div class="px-4">
                    <h2>Prescriptions</h2>
                      <ListOfPrescriptions />  
                    </div>
                </main>
            </div>
        </div>
    </div>
    
    
    
    </>
)
};

export default PrescriptionList;
