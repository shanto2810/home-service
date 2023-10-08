import { useState, useEffect } from 'react';

const Services = () => {
  const initialServiceState = [
    { id: 1, servicename: 'Ac Repair', servicecategory: '....', price: 5 },
    { id: 2, servicename: 'Plumbing', servicecategory: '....', price: 5 },
    { id: 3, servicename: 'Washing', servicecategory: '....', price: 5 },
    { id: 4, servicename: 'Pest Control', servicecategory: '....', price: 5 },
  ];

  const [services, setServices] = useState(initialServiceState);
  const [editedService, setEditedService] = useState(null);
  const [newService, setNewService] = useState({
    servicename: '',
    servicecategory: '',
    price: 0,
    description: '',
    image: '',
  });

  const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(true);

  useEffect(() => {
    const { servicename, servicecategory, price } = newService;
    setIsAddButtonDisabled(!(servicename && servicecategory && price > 0));
  }, [newService]);

  const handleDelete = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  const handleEdit = (service) => {
    setEditedService(service);
  };

  const handleSave = () => {
    setServices(prevServices =>
      prevServices.map(service =>
        service.id === editedService.id ? { ...editedService } : service
      )
    );
    setEditedService(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedService(prevService => ({
      ...prevService,
      [name]: value
    }));
  };

  const handleAddService = () => {
    setServices(prevServices => [
      ...prevServices,
      {
        id: prevServices.length + 1,
        ...newService
      }
    ]);
    setNewService({
      servicename: '',
      servicecategory: '',
      price: 0,
      description: '',
      image: '',
    });
  };

  const handleNewInputChange = (e) => {
    const { name, value } = e.target;
    setNewService(prevNewService => ({
      ...prevNewService,
      [name]: value
    }));
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <div className="mb-4">
        <strong className="text-gray-700 font-medium mb-2">Add Service</strong>
        <div className="bg-gray-100 p-4 rounded-sm flex flex-col items-start">
          <input
            type="text"
            name="servicename"
            value={newService.servicename}
            onChange={handleNewInputChange}
            placeholder="Service Name"
            className="w-1/2 border border-gray-400 m-5 p-2 mb-2"
          />
          <input
            type="text"
            name="servicecategory"
            value={newService.servicecategory}
            onChange={handleNewInputChange}
            placeholder="Service Category"
            className="w-1/2 border border-gray-400 m-5 p-2 mb-2"
          />
          <input
            type="number"
            name="price"
            value={newService.price || ''}
            onChange={handleNewInputChange}
            placeholder="Service Price"
            className="w-1/2 border border-gray-400 m-5 p-2 mb-2"
          />
          <textarea
            name="description"
            value={newService.description}
            onChange={handleNewInputChange}
            placeholder="Service Description"
            className="w-1/2 border border-gray-400 m-5 p-2 mb-2 h-32 resize-y"
          />
          <div className="flex flex-col w-1/2 m-5 mb-2 ">
            <label htmlFor="image" className="mb-1 text-gray-700 font-bold">Add Image</label>
            <input
              type="file"
              accept="image/*"
              name="image"
              id="image"
              onChange={handleNewInputChange}
              className="border border-gray-400 p-2"
            />
          </div>

          <button
            className="text-green-500 font-bold m-5"
            onClick={handleAddService}
            disabled={isAddButtonDisabled}
          >
            Add Service
          </button>
        </div>
      </div>

      <strong className="text-gray-700 font-medium">View Users</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th>ID</th>
              <th>Service Name</th>
              <th>Service Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map(service => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>
                  {editedService && editedService.id === service.id ? (
                    <input type="text" name="servicename" value={editedService.servicename} onChange={handleInputChange} />
                  ) : (
                    service.servicename
                  )}
                </td>
                <td>
                  {editedService && editedService.id === service.id ? (
                    <input type="text" name="servicecategory" value={editedService.servicecategory} onChange={handleInputChange} />
                  ) : (
                    service.servicecategory
                  )}
                </td>
                <td>
                  {editedService && editedService.id === service.id ? (
                    <input type="number" name="price" value={editedService.price} onChange={handleInputChange} />
                  ) : (
                    service.price
                  )}
                </td>
                <td>
                  {editedService && editedService.id === service.id ? (
                    <button className="text-green-500 font-bold mr-2" onClick={handleSave}>Save</button>
                  ) : (
                    <button className="text-blue-500 font-bold mr-2" onClick={() => handleEdit(service)}>Edit</button>
                  )}
                  <button className="text-red-500 font-bold" onClick={() => handleDelete(service.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Services;
