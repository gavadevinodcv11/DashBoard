import React from 'react';

function CustomerFeedback() {
  const feedback = [
    { name: 'Jenny Wilson', rating: 5, comment: 'The food was excellent and so was the service.' },
    { name: 'Dianne Russell', rating: 5, comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread.' },
    { name: 'Devon Lane', rating: 5, comment: 'Normally wings are wings, but these are lean meaty and tender.' }
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg font-medium mb-4">Customer's Feedback</h3>
      {feedback.map((fb, idx) => (
        <div key={idx} className="mb-4">
          <div className="flex items-center mb-2">
            <span className="font-bold mr-2">{fb.name}</span>
            <span className="text-yellow-400">{'★'.repeat(fb.rating)}</span>
          </div>
          <p>{fb.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default CustomerFeedback;
