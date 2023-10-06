// Define a simple blockchain as an array
const blockchain = [];

// Function to create a new certificate block
function createCertificateBlock(data) {
    const certificateBlock = {
        data: data,
        timestamp: new Date(),
        previousHash: blockchain.length > 0 ? blockchain[blockchain.length - 1].hash : null,
        hash: calculateHash(data),
    };
    blockchain.push(certificateBlock);
}

// Function to calculate the hash of a block
function calculateHash(data) {
    // In a real blockchain, you'd use a more sophisticated hashing algorithm
    return data.toString();
}

// Function to verify a certificate
function verifyCertificate(hash) {
    const block = blockchain.find((block) => block.hash === hash);
    if (block) {
        return "Certificate is valid and registered.";
    } else {
        return "Certificate not found or invalid.";
    }
}

// Event listeners for UI interactions
document.getElementById("registerButton").addEventListener("click", () => {
    const certificateData = document.getElementById("certificateData").value;
    createCertificateBlock(certificateData);
    alert("Certificate registered successfully.");
    document.getElementById("certificateData").value = "";
});

document.getElementById("verifyButton").addEventListener("click", () => {
    const certificateHash = document.getElementById("certificateHash").value;
    const verificationResult = verifyCertificate(certificateHash);
    document.getElementById("verificationResult").textContent = verificationResult;
});
