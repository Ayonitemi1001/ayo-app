import React from 'react';

const studentList = [
  { id: 1, matric: 'CD1001', firstName: 'Peter', lastName: 'Lomon', Age: '23', Phone: '08034256743' },
  { id: 2, matric: 'CE1201', firstName: 'Jon', lastName: 'Doe', Age: '25', Phone: '08034256743' },
  { id: 3, matric: 'CR1301', firstName: 'Sarah', lastName: 'Waters', Age: '21', Phone: '08034256743' },
  { id: 4, matric: 'CT1401', firstName: 'Alex', lastName: 'Arnold', Age: '19', Phone: '08034256743' },
];

export default function Mapper() {
  return (

    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white via-gray-800 to-black">
      <div className="w-full max-w-4xl p-4">
        
        <div className="grid grid-cols-6 gap-4 px-4 py-3 font-bold text-gray-300 uppercase bg-gray-800 rounded-t-lg">
          <div>ID</div>
          <div>Matric</div>
          <div>First Name</div>
          <div>Last Name</div>
          <div>Age</div>
          <div>Phone</div>
        </div>

        
        <div className="bg-gray-700 rounded-b-lg">
          {studentList.map((student) => (
            <div
              key={student.id}
            
              className="grid grid-cols-6 gap-4 px-4 py-3 text-gray-200 border-b border-gray-600 last:border-b-0 hover:bg-gray-600 transition-colors duration-200"
            >
              <div>{student.id}</div>
              <div>{student.matric}</div>
              <div>{student.firstName}</div>
              <div>{student.lastName}</div>
              <div>{student.Age}</div>
              <div>{student.Phone}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}