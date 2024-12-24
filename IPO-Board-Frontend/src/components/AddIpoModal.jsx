import React from 'react';
import api from './api';
import { Form, Input, Button, Select, SelectItem } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { toast, ToastContainer, Flip } from 'react-toastify';



const AddIpoModal = ({ isOpen, onOpenChange, formData, handleInputChange, handleStatusChange }) => {


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
            const response = await api.post('ipo', finalData);
            if (response.status === 200 || response.status === 201) {
                toast.success('IPO added successfully!');
                setTimeout(() => {
                    onClose(); // Close the modal
                }, 500); // Allow toast to show briefly before closing
            } else {
                toast.error('Failed to add IPO. Please try again.');
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
                        <ModalHeader className="flex flex-col gap-1">Add New IPO</ModalHeader>
                        <ModalBody className="max-h-[540px] overflow-y-auto">
                            <Form
                                id='ipoAddForm'
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
                                    label="Category"
                                    labelPlacement="outside"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    placeholder="Enter category"
                                    type="text"
                                />
                                <Input
                                    isRequired
                                    label="Price"
                                    labelPlacement="outside"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    placeholder="Enter price"
                                    type="number"
                                />
                                <Input
                                    isRequired
                                    label="Lot Size"
                                    labelPlacement="outside"
                                    name="lotSize"
                                    value={formData.lotSize}
                                    onChange={handleInputChange}
                                    placeholder="Enter lot size"
                                    type="number"
                                />
                                <Input
                                    isRequired
                                    label="GMP"
                                    labelPlacement="outside"
                                    name="gmp"
                                    value={formData.gmp}
                                    onChange={handleInputChange}
                                    placeholder="Enter GMP"
                                    type="text"
                                />
                                <Input
                                    isRequired
                                    label="GMP Percentage"
                                    labelPlacement="outside"
                                    name="gmpPercentage"
                                    value={formData.gmpPercentage}
                                    onChange={handleInputChange}
                                    placeholder="Enter GMP percentage"
                                    type="text"
                                />
                                <Input
                                    isRequired
                                    label="Estimated Listing"
                                    labelPlacement="outside"
                                    name="estimatedListing"
                                    value={formData.estimatedListing}
                                    onChange={handleInputChange}
                                    placeholder="Enter estimated listing"
                                    type="text"
                                />
                                <Input
                                    isRequired
                                    label="IPO Size"
                                    labelPlacement="outside"
                                    name="ipoSize"
                                    value={formData.ipoSize}
                                    onChange={handleInputChange}
                                    placeholder="Enter IPO size"
                                    type="number"
                                />
                                <Input
                                    isRequired
                                    label="Open Date"
                                    labelPlacement="outside"
                                    name="openDate"
                                    value={formData.openDate}
                                    onChange={handleInputChange}
                                    placeholder="Enter open date"
                                    type="date"
                                />
                                <Input
                                    isRequired
                                    label="Close Date"
                                    labelPlacement="outside"
                                    name="closeDate"
                                    value={formData.closeDate}
                                    onChange={handleInputChange}
                                    placeholder="Enter close date"
                                    type="date"
                                />
                                <Input
                                    isRequired
                                    label="Listing Date"
                                    labelPlacement="outside"
                                    name="listingDate"
                                    value={formData.listingDate}
                                    onChange={handleInputChange}
                                    placeholder="Enter listing date"
                                    type="date"
                                />
                                <Input
                                    isRequired
                                    label="status"
                                    labelPlacement="outside"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleInputChange}
                                    placeholder="Enter Status"
                                    type="text"
                                />
                                {/* <Select
                                    isRequired
                                    label="Status"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleStatusChange}
                                    aria-label="Select IPO status"
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
                            <Button
                                color="primary"
                                type="submit"
                                form="ipoAddForm"
                            >
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

export default AddIpoModal;
