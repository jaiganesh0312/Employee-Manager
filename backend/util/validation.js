function validateForm(data) {
    const message = {};

    // Validate Name (Only alphabets and spaces, 2-50 characters)
    if (!data.name || !/^[a-zA-Z\s]{3,50}$/.test(data.name)) {
        message.name = "Name must be 3-50 characters long and contain only alphabets and spaces.";
    }

    if (!data.role || !/^[a-zA-Z\s]{2,50}$/.test(data.role)) {
        message.role = "Role must be 2-50 characters long and contain only alphabets and spaces.";
    }

    if (!data.location || !/^[a-zA-Z\s]{2,50}$/.test(data.location)) {
        message.location = "Role must be 2-50 characters long and contain only alphabets and spaces.";
    }

    // Validate Email (Basic email pattern)
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        message.email = "Please enter a valid email address.";
    }

    // Validate Salary (Positive numbers, optional decimals)
    if (!data.salary || !/^\d+(\.\d{1,2})?$/.test(data.salary)) {
        message.salary = "Salary must be a positive number with up to 2 decimal places.";
    }

    // Validate Phone (10-digit number starting with a non-zero digit)
    if (!data.phone || !/^[1-9]\d{9}$/.test(data.phone)) {
        message.phone = "Phone number must be a 10-digit number starting with a non-zero digit.";
    }

    return {
        error: Object.keys(message).length !== 0,
        message,
    };
};

module.exports = validateForm;
  
