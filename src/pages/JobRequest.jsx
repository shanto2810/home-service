import { useState } from 'react';

const JobRequest = () => {
  const [jobRequests, setJobRequests] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', job: 'Plumbing', address: '123 Street, City', phone: '1234567890', status: 'Pending' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', job: 'Electrical Repair', address: '456 Avenue, Town', phone: '9876543210', status: 'Pending' },
    { id: 3, name: 'Michael Johnson', email: 'michael@example.com', job: 'Painting', address: '789 Road, Village', phone: '5678901234', status: 'Pending' },
  ]);

  const handleAccept = (id) => {
    setJobRequests(jobRequests.map(request =>
      request.id === id ? { ...request, status: 'Accepted' } : request
    ));
  };

  const handleReject = (id) => {
    setJobRequests(jobRequests.map(request =>
      request.id === id ? { ...request, status: 'Rejected' } : request
    ));
  };

  return (
    <div className="bg-white p-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Job Requests</strong>
      <div className="overflow-x-auto mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th className="py-2">ID</th>
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
              <th className="py-2">Job</th>
              <th className="py-2">Address</th>
              <th className="py-2">Phone Number</th>
              <th className="py-2">Status</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobRequests.map(request => (
              <tr key={request.id}>
                <td className="py-2">{request.id}</td>
                <td className="py-2">{request.name}</td>
                <td className="py-2">{request.email}</td>
                <td className="py-2">{request.job}</td>
                <td className="py-2">{request.address}</td>
                <td className="py-2">{request.phone}</td>
                <td className="py-2">{request.status}</td>
                <td className="py-2">
                  {request.status === 'Pending' && (
                    <>
                      <button className="text-green-500 font-bold mr-2" onClick={() => handleAccept(request.id)}>Accept</button>
                      <button className="text-red-500 font-bold " onClick={() => handleReject(request.id)}>Reject</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JobRequest;
