const generateSampleData = (numRecords) => {
    const data = [];
  
    for (let i = 1; i <= numRecords; i++) {
      const record = {
        id: i.toString(),
        name: `Employee${i}`,
        email: `${i}employee.example.com`,
        // ... other attributes, each around 1KB in size
      };
  
      data.push(record);
    }
  
    return data;
  };

const generateSampleData2 = (numRecords) => {
    const data = [];
  
    for (let i = 1; i <= numRecords; i=i+2) {
      const record = {
        id: i.toString(),
        name: `Employee${i+1}`,
        email: `${i}employee.example.com`,
        // ... other attributes, each around 1KB in size
      };
  
      data.push(record);
    }
  
    return data;
  };


  const originalData = [
    { id: '1', name: 'Alice' , email: 'helloWorld@123'},
    { id: '2', name: 'Bob' , email: 'helloWorld@123'},
    { id: '3', name: 'Alice1' , email: 'helloWorld@123'},
    { id: '4', name: 'Bob1' , email: 'helloWorld@123'},
    { id: '5', name: 'Alice2' , email: 'helloWorld@123'},
    { id: '6', name: 'Bob2' , email: 'helloWorld@123'},
    { id: '7', name: 'Alice3' , email: 'helloWorld@123'},
    { id: '8', name: 'Bob3' , email: 'helloWorld@123'},
    { id: '9', name: 'Alice4' , email: 'helloWorld@123'},
    { id: '10', name: 'Bob3' , email: 'helloWorld@123'},
    { id: '11', name: 'Alice1' , email: 'helloWorld@123'},
    { id: '12', name: 'Bob1' , email: 'helloWorld@123'},
    { id: '13', name: 'Alice11' , email: 'helloWorld@123'},
    { id: '14', name: 'Bob11' , email: 'helloWorld@123'},
    { id: '15', name: 'Alice12' , email: 'helloWorld@123'},
    { id: '16', name: 'Bob12' , email: 'helloWorld@123'},
    { id: '17', name: 'Alice13' , email: 'helloWorld@123'},
    { id: '18', name: 'Bob13' , email: 'helloWorld@123'},
    { id: '19', name: 'Alice14' , email: 'helloWorld@123'},
    { id: '20', name: 'Bob13' , email: 'helloWorld@123'},
    
  ];
  const sendData = [
    { id: '1', name: 'Alice' , email: 'helloWorld@123'},
    { id: '2', name: 'Bob' , email: 'helloWorld@123'},
    { id: '3', name: 'Alice1' , email: 'helloWorld@123'},
    { id: '4', name: 'Bob1' , email: 'helloWorld@123'},
    { id: '5', name: 'Alice2' , email: 'helloWorld@123'},
    { id: '6', name: 'Bob2' , email: 'helloWorld@123'},
    { id: '7', name: 'Alice3' , email: 'helloWorld@123'},
    { id: '8', name: 'Bob3' , email: 'helloWorld@123'},
    { id: '9', name: 'Alice4' , email: 'helloWorld@123'},
    { id: '10', name: 'Bob3' , email: 'helloWorld@123'},
    { id: '11', name: 'Alice1' , email: 'helloWorld@123'},
    { id: '12', name: 'Bob1' , email: 'helloWorld@123'},
    { id: '13', name: 'Alice11' , email: 'helloWorld@123'},
    { id: '14', name: 'Bob11' , email: 'helloWorld@123'},
    { id: '15', name: 'Alice12' , email: 'helloWorld@123'},
    { id: '16', name: 'Bob12' , email: 'helloWorld@123'},
    { id: '17', name: 'Alice13' , email: 'helloWorld@123'},
    { id: '18', name: 'Bob13' , email: 'helloWorld@123'},
    { id: '20', name: 'Bob13' , email: 'helloWorld@123'},
    { id: '19', name: 'Alice14' , email: 'helloWorld@123'},
    
  ];
  const sourceData = generateSampleData(100); // Generate 100 sample records
  const migratedData = generateSampleData(100); // Simulate migrated data  

  
  // Checkpoint 1: Check if the record counts match
  if (originalData.length === sendData.length) {
    console.log("Record counts match.");
  } else {
    console.log("Record counts do not match.");
  }
  
  // Checkpoint 2: Verify data integrity using checksums
  const crypto = require("crypto");
  

  //
  function calculateChecksum(data) {
    const hash = crypto.createHash("sha256");
    hash.update(JSON.stringify(data));
    return hash.digest("hex");
  }
  
  const sourceChecksum = calculateChecksum(originalData);
  const migratedChecksum = calculateChecksum(sendData);
  
  if (sourceChecksum === migratedChecksum) {
    console.log("Data integrity verified using checksums.");
  } else {
    console.log("Data integrity check failed.");
  }
    
  // Additional checkpoints and validations can be added as needed.
  
// Checkpoint 3: Verify records are in the same order
function compareDataArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (JSON.stringify(arr1[i]) !== JSON.stringify(arr2[i])) {
      return false;
    }
  }
  return true;
}

if (compareDataArrays(originalData, sendData)) {
  console.log("Records are in the same order.");
} else {
  console.log("Records are not in the same order.");
}
  