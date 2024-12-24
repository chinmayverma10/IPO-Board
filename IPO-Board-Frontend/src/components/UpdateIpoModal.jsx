import React from 'react';
import { Form, Input, Button, Select, SelectItem } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { ToastContainer, toast, Flip } from 'react-toastify';
import api from './api';




const UpdateIpoModal = ({ isOpen, onOpenChange, formData, handleInputChange, handleStatusChange }) => {

    const sanitizedFormData = { ...formData }; // Clone to ensure no circular references
    for (const key in sanitizedFormData) {
        if (typeof sanitizedFormData[key] === 'object') {
            sanitizedFormData[key] = String(sanitizedFormData[key]); // Convert objects to strings for debugging
        }
    }


    const handleFormSubmit = async (e, onClose) => {
        e.preventDefault();
        const cleanedFormData = { ...formData }; // Clone to ensure no unexpected references
        // console.log('Submitting cleaned data:', cleanedFormData);
        const finalData = JSON.stringify(sanitizedFormData);
        try {
            const response = await api.put(`ipo/${formData.companyName}`, finalData);
            if (response.status === 200 || response.status === 201) {
                toast('IPO Updated successfully!');
                setTimeout(() => {
                    onClose(); // Close the modal
                }, 500); // Allow toast to show briefly before closing
            } else {
                toast.error('Failed to update IPO. Please try again.');
            }
        } catch (error) {
            console.error('Error adding IPO:', error);
            toast.error('An error occurred while adding IPO.');
        }
    }


    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className="w-full max-w-3xl">
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Update IPO</ModalHeader>
                        <ModalBody className="max-h-[540px] overflow-y-auto">
                            <Form
                                id='ipoUpdateForm'
                                className="w-full flex flex-col gap-4"
                                validationBehavior="native"
                                onSubmit={(e) => handleFormSubmit(e, onClose)}
                            >
                                <Input
                                    isRequired
                                    label="Company Name"
                                    labelPlacement="outside"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    placeholder="Enter company name"
                                    type="text"
                                />
                                <Input
                                    isRequired
                                    label="Updated GMP"
                                    labelPlacement="outside"
                                    name="gmp"
                                    value={formData.gmp}
                                    onChange={handleInputChange}
                                    placeholder="Enter updated GMP"
                                    type="text"
                                />
                                <Input
                                    isRequired
                                    label="Updated status"
                                    labelPlacement="outside"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleInputChange}
                                    placeholder="Enter Updated Status"
                                    type="text"
                                />
                                {/* <Select
                                    isRequired
                                    label="Updated Status"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleStatusChange}
                                    aria-label="Select updated IPO status"
                                >
                                    <SelectItem value="UPCOMING">UPCOMING</SelectItem>
                                    <SelectItem value="OPEN">OPEN</SelectItem>
                                    <SelectItem value="CLOSES">CLOSED</SelectItem>
                                </Select> */}
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" type="submit" form="ipoUpdateForm" >
                                Submit
                            </Button>
                            <ToastContainer
                                position="top-center"
                                autoClose={5000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick={false}
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="dark"
                                transition={Flip}
                            />
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default UpdateIpoModal;
