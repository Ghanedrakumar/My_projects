import React from 'react'

const Cards = () => {
    return (
        <div className='cards'>

            <div class="max-w-7xl mx-auto h-auto ">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">


                    <div class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <img src="https://www.shutterstock.com/image-photo/features-text-on-red-missing-260nw-438767149.jpg" alt="Card Image 1" class="w-full h-48 object-cover" />
                        <div class="p-4">
                            <h2 class="text-lg font-semibold text-gray-800 mb-2">Features</h2>
                            <p class="text-gray-600"> Listing these words in alphabetical order in the form of headwords, the words listed as entries in the dictionary.</p>
                        </div>
                    </div>

                    <div class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <img src="https://t3.ftcdn.net/jpg/01/32/62/84/360_F_132628460_ICrcIg417LlByTKj8rzWmDDPuis7eUfn.jpg" alt="Card Image 2" class="w-full h-48 object-cover"/>
                            <div class="p-4">
                                <h2 class="text-lg font-semibold text-gray-800 mb-2">Advantages</h2>
                                <p class="text-gray-600">Dictionaries can help you use words correctly, which can improve your communication and grades</p>
                            </div>
                    </div>

                    <div class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <img src="https://www.shutterstock.com/shutterstock/photos/1932042689/display_1500/stock-photo-businessman-using-mobile-smart-phone-business-global-internet-connection-application-technology-1932042689.jpg" alt="Card Image 3" class="w-full h-48 object-cover"/>
                            <div class="p-4">
                                <h2 class="text-lg font-semibold text-gray-800 mb-2">Technoloy</h2>
                                <p class="text-gray-600">In which there are many technology used to create such types of dictionary Like: html,css,js,react etc.</p>
                            </div>
                    </div>

                    <div class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <img src="https://thumbs.dreamstime.com/b/limitations-painful-human-condition-pictured-as-wooden-figure-pushing-heavy-weight-to-show-how-hard-can-be-deal-217881070.jpg" alt="Card Image 4" class="w-full h-48 object-cover"/>
                            <div class="p-4">
                                <h2 class="text-lg font-semibold text-gray-800 mb-2">Limitation</h2>
                                <p class="text-gray-600">This is a description of the fourth card. It provides some brief details about the content.</p>
                            </div>
                    </div>

                </div>
            </div>
        </div >

    )
}

export default Cards
