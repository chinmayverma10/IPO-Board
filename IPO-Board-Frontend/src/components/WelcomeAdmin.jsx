// WelcomeAdmin.jsx
import React, { useState } from 'react';
import { Button } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/modal";
import AddIpoModal from './AddIpoModal';
import UpdateIpoModal from './UpdateIpoModal';
import { useEffect } from 'react';
import Banner from './Banner';

function WelcomeAdmin() {

    useEffect(() => {
        document.title = "Admin Panel - IPO Board";
    }, []);

    const { isOpen: addIpoIsOpen, onOpen: onAddIpoOpen, onOpenChange: onAddIpoOpenChange } = useDisclosure();
    const { isOpen: updateIpoIsOpen, onOpen: onUpdateIpoOpen, onOpenChange: onUpdateIpoOpenChange } = useDisclosure();
    const [formData, setFormData] = useState({
        companyName: '',
        category: '',
        price: '',
        lotSize: '',
        gmp: '',
        gmpPercentage: '',
        estimatedListing: '',
        ipoSize: '',
        openDate: '',
        closeDate: '',
        listingDate: '',
        status: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const handleStatusChange = (value) => {
        setFormData((prevData) => ({
            ...prevData,
            status: value,
        }));
    };
    
    const handleSubmit = (e, onClose, actionType) => {
        e.preventDefault();
        console.log(`${actionType}:`, formData);
        onClose();
    };

    return (
        <>

            <Banner text={"Welcome to Admin Panel of IPO Board "} />

            <div className='flex justify-center items-center p-8 gap-8'>
                <Button color="primary" variant="ghost" size='lg' onPress={onAddIpoOpen}>
                    +ADD IPO
                </Button>
                <AddIpoModal
                    isOpen={addIpoIsOpen}
                    onOpenChange={onAddIpoOpenChange}
                    formData={formData}
                    handleInputChange={handleInputChange}
                    handleStatusChange={handleStatusChange}
                />

                <Button color="success" variant="ghost" size='lg' onPress={onUpdateIpoOpen}>
                    UPDATE IPO
                </Button>
                <UpdateIpoModal
                    isOpen={updateIpoIsOpen}
                    onOpenChange={onUpdateIpoOpenChange}
                    formData={formData}
                    handleInputChange={handleInputChange}
                    handleStatusChange={handleStatusChange}
                    handleSubmit={handleSubmit}
                />
            </div>
        </>
    );
}

export default WelcomeAdmin;