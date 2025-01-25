const employees = [
    {
        "id": 1,
        'name': "Jaiganesh",
        'email': "jgtumkar@gmail.com",
        'salary': "40000",
        'role': "Software Developer",
        'phone': "9353512129",
        'location': "Bengaluru"
    },
    {
        'id': 2,
        'name': "Abhishek",
        'email': "abhisekh345@gmail.com",
        'salary': "30000",
        'role': "Software Developer",
        'phone': "7862665231",
        'location': "Bengaluru"
    },
    
    {
        "id": 3,
        "name": "Sanket",
        "email": "chavansanket@gmail.com",
        "salary": "40000",
        "role": "Software Developer",
        "phone": "7844444230",
        "location": "Pune"
    },
    {
        "id": 4,
        "name": "Amit",
        "email": "amit.jadhav@gmail.com",
        "salary": "42000",
        "role": "UI Developer",
        "phone": "9876543210",
        "location": "Mumbai"
    },
    {
        "id": 5,
        "name": "Priya",
        "email": "priya.sharma@gmail.com",
        "salary": "45000",
        "role": "Data Scientist",
        "phone": "8776655443",
        "location": "Bangalore"
    },
    {
        "id": 6,
        "name": "Rahul",
        "email": "rahul.verma@gmail.com",
        "salary": "48000",
        "role": "Product Manager",
        "phone": "7894561230",
        "location": "Chennai"
    },
    {
        "id": 7,
        "name": "Ankita",
        "email": "ankita.gupta@gmail.com",
        "salary": "47000",
        "role": "HR Manager",
        "phone": "8887776666",
        "location": "Delhi"
    },
    {
        "id": 8,
        "name": "Karan",
        "email": "karan.mehra@gmail.com",
        "salary": "46000",
        "role": "Marketing Specialist",
        "phone": "9056738123",
        "location": "Pune"
    },
    {
        "id": 9,
        "name": "Neha",
        "email": "neha.singh@gmail.com",
        "salary": "49000",
        "role": "Business Analyst",
        "phone": "7621845632",
        "location": "Hyderabad"
    },
    {
        "id": 10,
        "name": "Ravi",
        "email": "ravi.kumar@gmail.com",
        "salary": "51000",
        "role": "DevOps Engineer",
        "phone": "9812314567",
        "location": "Mumbai"
    },
    {
        "id": 11,
        "name": "Simran",
        "email": "simran.jain@gmail.com",
        "salary": "43000",
        "role": "QA Engineer",
        "phone": "9827456578",
        "location": "Bangalore"
    },
    {
        "id": 12,
        "name": "Vikas",
        "email": "vikas.shukla@gmail.com",
        "salary": "50000",
        "role": "Software Architect",
        "phone": "9045671234",
        "location": "Chennai"
    },
    {
        "id": 13,
        "name": "Isha",
        "email": "isha.patel@gmail.com",
        "salary": "44000",
        "role": "Content Writer",
        "phone": "9988776655",
        "location": "Delhi"
    },
    {
        "id": 14,
        "name": "Manish",
        "email": "manish.sharma@gmail.com",
        "salary": "53000",
        "role": "Network Engineer",
        "phone": "8765432109",
        "location": "Hyderabad"
    },
    {
        "id": 15,
        "name": "Pooja",
        "email": "pooja.rao@gmail.com",
        "salary": "52000",
        "role": "UX Designer",
        "phone": "7678543291",
        "location": "Mumbai"
    },
    {
        "id": 16,
        "name": "Sunil",
        "email": "sunil.mishra@gmail.com",
        "salary": "54000",
        "role": "Database Administrator",
        "phone": "7771234567",
        "location": "Pune"
    },
    {
        "id": 17,
        "name": "Geeta",
        "email": "geeta.singh@gmail.com",
        "salary": "55000",
        "role": "Finance Analyst",
        "phone": "9123456789",
        "location": "Bangalore"
    },
    {
        "id": 18,
        "name": "Ajay",
        "email": "ajay.kumar@gmail.com",
        "salary": "60000",
        "role": "Security Engineer",
        "phone": "9056123456",
        "location": "Chennai"
    },
    {
        "id": 19,
        "name": "Nisha",
        "email": "nisha.joshi@gmail.com",
        "salary": "47000",
        "role": "Software Developer",
        "phone": "9845623198",
        "location": "Delhi"
    },
    {
        "id": 20,
        "name": "Harish",
        "email": "harish.nayak@gmail.com",
        "salary": "49000",
        "role": "Business Analyst",
        "phone": "7665342210",
        "location": "Pune"
    },
    {
        "id": 21,
        "name": "Sonal",
        "email": "sonal.verma@gmail.com",
        "salary": "51000",
        "role": "Product Manager",
        "phone": "9078432910",
        "location": "Bangalore"
    },
    {
        "id": 22,
        "name": "Madhavi",
        "email": "madhavi.pandey@gmail.com",
        "salary": "53000",
        "role": "HR Manager",
        "phone": "9536274891",
        "location": "Hyderabad"
    },
    {
        "id": 23,
        "name": "Ajit",
        "email": "ajit.sharma@gmail.com",
        "salary": "46000",
        "role": "UI Developer",
        "phone": "9321987432",
        "location": "Chennai"
    },
    {
        "id": 24,
        "name": "Rina",
        "email": "rina.garg@gmail.com",
        "salary": "48000",
        "role": "QA Engineer",
        "phone": "9371429856",
        "location": "Delhi"
    },
    {
        "id": 25,
        "name": "Deepak",
        "email": "deepak.singh@gmail.com",
        "salary": "50000",
        "role": "Network Engineer",
        "phone": "9054876321",
        "location": "Bangalore"
    },
    {
        "id": 26,
        "name": "Shalini",
        "email": "shalini.kumar@gmail.com",
        "salary": "55000",
        "role": "Data Scientist",
        "phone": "9812365478",
        "location": "Mumbai"
    },
    {
        "id": 27,
        "name": "Pradeep",
        "email": "pradeep.jadhav@gmail.com",
        "salary": "56000",
        "role": "Software Architect",
        "phone": "7788654321",
        "location": "Hyderabad"
    },
    {
        "id": 28,
        "name": "Rashmi",
        "email": "rashmi.patel@gmail.com",
        "salary": "57000",
        "role": "Marketing Specialist",
        "phone": "9198765432",
        "location": "Pune"
    },
    {
        "id": 29,
        "name": "Vijay",
        "email": "vijay.shukla@gmail.com",
        "salary": "59000",
        "role": "Security Engineer",
        "phone": "8923456789",
        "location": "Chennai"
    },
    {
        "id": 30,
        "name": "Ravi",
        "email": "ravi.mishra@gmail.com",
        "salary": "60000",
        "role": "DevOps Engineer",
        "phone": "8789223344",
        "location": "Delhi"
    },
    {
        "id": 31,
        "name": "Aarti",
        "email": "aarti.verma@gmail.com",
        "salary": "61000",
        "role": "Product Manager",
        "phone": "9609876543",
        "location": "Bangalore"
    },
    {
        "id": 32,
        "name": "Vijay",
        "email": "vijay.kumar@gmail.com",
        "salary": "62000",
        "role": "Business Analyst",
        "phone": "9988776655",
        "location": "Hyderabad"
    },
    {
        "id": 33,
        "name": "Kriti",
        "email": "kriti.singh@gmail.com",
        "salary": "63000",
        "role": "QA Engineer",
        "phone": "9675432109",
        "location": "Mumbai"
    },
    {
        "id": 34,
        "name": "Tarun",
        "email": "tarun.gupta@gmail.com",
        "salary": "64000",
        "role": "HR Manager",
        "phone": "9798765432",
        "location": "Pune"
    },
    {
        "id": 35,
        "name": "Dinesh",
        "email": "dinesh.patel@gmail.com",
        "salary": "65000",
        "role": "Software Developer",
        "phone": "9701234567",
        "location": "Delhi"
    },
    {
        "id": 36,
        "name": "Suman",
        "email": "suman.singh@gmail.com",
        "salary": "66000",
        "role": "DevOps Engineer",
        "phone": "9203456789",
        "location": "Bangalore"
    },
    {
        "id": 37,
        "name": "Kavita",
        "email": "kavita.joshi@gmail.com",
        "salary": "67000",
        "role": "Network Engineer",
        "phone": "9456745123",
        "location": "Hyderabad"
    },
    {
        "id": 38,
        "name": "Ritu",
        "email": "ritu.mishra@gmail.com",
        "salary": "68000",
        "role": "Business Analyst",
        "phone": "9898765432",
        "location": "Chennai"
    },
    {
        "id": 39,
        "name": "Shweta",
        "email": "shweta.jadhav@gmail.com",
        "salary": "69000",
        "role": "Marketing Specialist",
        "phone": "9795432110",
        "location": "Pune"
    },
    {
        "id": 40,
        "name": "Gaurav",
        "email": "gaurav.sharma@gmail.com",
        "salary": "70000",
        "role": "Software Architect",
        "phone": "9088776655",
        "location": "Delhi"
    },
    {
        "id": 41,
        "name": "Ravindra",
        "email": "ravindra.singh@gmail.com",
        "salary": "71000",
        "role": "Data Scientist",
        "phone": "9765432109",
        "location": "Bangalore"
    },
    {
        "id": 42,
        "name": "Mohan",
        "email": "mohan.gupta@gmail.com",
        "salary": "72000",
        "role": "UI Developer",
        "phone": "9812345678",
        "location": "Hyderabad"
    },
    {
        "id": 43,
        "name": "Nikhil",
        "email": "nikhil.mishra@gmail.com",
        "salary": "73000",
        "role": "Product Manager",
        "phone": "9321087432",
        "location": "Chennai"
    },
    {
        "id": 44,
        "name": "Aman",
        "email": "aman.sharma@gmail.com",
        "salary": "74000",
        "role": "Software Developer",
        "phone": "9182345678",
        "location": "Mumbai"
    },
    {
        "id": 45,
        "name": "Anjali",
        "email": "anjali.singh@gmail.com",
        "salary": "75000",
        "role": "HR Manager",
        "phone": "9845671234",
        "location": "Pune"
    },
    {
        "id": 46,
        "name": "Shubham",
        "email": "shubham.kumar@gmail.com",
        "salary": "76000",
        "role": "Business Analyst",
        "phone": "9112345678",
        "location": "Bangalore"
    },
    {
        "id": 47,
        "name": "Sumanth",
        "email": "sumanth.rao@gmail.com",
        "salary": "77000",
        "role": "Data Scientist",
        "phone": "9203456789",
        "location": "Chennai"
    },
    {
        "id": 48,
        "name": "Niharika",
        "email": "niharika.patel@gmail.com",
        "salary": "78000",
        "role": "QA Engineer",
        "phone": "9334567890",
        "location": "Hyderabad"
    },
    {
        "id": 49,
        "name": "Sunita",
        "email": "sunita.verma@gmail.com",
        "salary": "79000",
        "role": "Software Developer",
        "phone": "9456789012",
        "location": "Pune"
    },
    {
        "id": 50,
        "name": "Anil",
        "email": "anil.joshi@gmail.com",
        "salary": "80000",
        "role": "Product Manager",
        "phone": "9576123456",
        "location": "Bangalore"
    }
    ,
    {
        "id": 51,
        "name": "Kunal",
        "email": "kunal.patel@gmail.com",
        "salary": "81000",
        "role": "Network Engineer",
        "phone": "9601234567",
        "location": "Hyderabad"
    },
    {
        "id": 52,
        "name": "Neeraj",
        "email": "neeraj.mishra@gmail.com",
        "salary": "82000",
        "role": "Security Engineer",
        "phone": "9623456789",
        "location": "Chennai"
    },
    {
        "id": 53,
        "name": "Rina",
        "email": "rina.sharma@gmail.com",
        "salary": "83000",
        "role": "Marketing Specialist",
        "phone": "9345678901",
        "location": "Delhi"
    },
    {
        "id": 54,
        "name": "Sandeep",
        "email": "sandeep.kumar@gmail.com",
        "salary": "84000",
        "role": "Business Analyst",
        "phone": "9098765432",
        "location": "Pune"
    },
    {
        "id": 55,
        "name": "Praveen",
        "email": "praveen.jadhav@gmail.com",
        "salary": "85000",
        "role": "Software Architect",
        "phone": "9198765432",
        "location": "Bangalore"
    },
    {
        "id": 56,
        "name": "Aisha",
        "email": "aisha.rao@gmail.com",
        "salary": "86000",
        "role": "HR Manager",
        "phone": "9687564321",
        "location": "Hyderabad"
    },
    {
        "id": 57,
        "name": "Himanshu",
        "email": "himanshu.verma@gmail.com",
        "salary": "87000",
        "role": "Product Manager",
        "phone": "9034567890",
        "location": "Chennai"
    },
    {
        "id": 58,
        "name": "Simran",
        "email": "simran.pandey@gmail.com",
        "salary": "88000",
        "role": "Data Scientist",
        "phone": "9601237890",
        "location": "Delhi"
    },
    {
        "id": 59,
        "name": "Tarun",
        "email": "tarun.shukla@gmail.com",
        "salary": "89000",
        "role": "DevOps Engineer",
        "phone": "9312345678",
        "location": "Bangalore"
    },
    {
        "id": 60,
        "name": "Alok",
        "email": "alok.mishra@gmail.com",
        "salary": "90000",
        "role": "Business Analyst",
        "phone": "9775432109",
        "location": "Pune"
    },
    {
        "id": 61,
        "name": "Ritika",
        "email": "ritika.singh@gmail.com",
        "salary": "91000",
        "role": "UI Developer",
        "phone": "9841234785",
        "location": "Chennai"
    },
    {
        "id": 62,
        "name": "Ankit",
        "email": "ankit.jain@gmail.com",
        "salary": "92000",
        "role": "QA Engineer",
        "phone": "9327654781",
        "location": "Delhi"
    },
    {
        "id": 63,
        "name": "Meera",
        "email": "meera.rao@gmail.com",
        "salary": "93000",
        "role": "Software Developer",
        "phone": "9501234567",
        "location": "Hyderabad"
    },
    {
        "id": 64,
        "name": "Vijay",
        "email": "vijay.patel@gmail.com",
        "salary": "94000",
        "role": "Network Engineer",
        "phone": "9741234567",
        "location": "Pune"
    },
    {
        "id": 65,
        "name": "Divya",
        "email": "divya.kumar@gmail.com",
        "salary": "95000",
        "role": "Product Manager",
        "phone": "9432108765",
        "location": "Chennai"
    },
    {
        "id": 66,
        "name": "Abhishek",
        "email": "abhishek.verma@gmail.com",
        "salary": "96000",
        "role": "Security Engineer",
        "phone": "9812345670",
        "location": "Bangalore"
    },
    {
        "id": 67,
        "name": "Priyanka",
        "email": "priyanka.sharma@gmail.com",
        "salary": "97000",
        "role": "Business Analyst",
        "phone": "9056123456",
        "location": "Delhi"
    },
    {
        "id": 68,
        "name": "Kiran",
        "email": "kiran.pandey@gmail.com",
        "salary": "98000",
        "role": "QA Engineer",
        "phone": "9501234567",
        "location": "Pune"
    },
    {
        "id": 69,
        "name": "Mitali",
        "email": "mitali.mishra@gmail.com",
        "salary": "99000",
        "role": "HR Manager",
        "phone": "9888776655",
        "location": "Hyderabad"
    },
    {
        "id": 70,
        "name": "Ashish",
        "email": "ashish.kumar@gmail.com",
        "salary": "100000",
        "role": "Software Architect",
        "phone": "9654321098",
        "location": "Chennai"
    },
    {
        "id": 71,
        "name": "Neha",
        "email": "neha.patel@gmail.com",
        "salary": "101000",
        "role": "Data Scientist",
        "phone": "9098765432",
        "location": "Bangalore"
    },
    {
        "id": 72,
        "name": "Amit",
        "email": "amit.singh@gmail.com",
        "salary": "102000",
        "role": "Product Manager",
        "phone": "9765432109",
        "location": "Delhi"
    },
    {
        "id": 73,
        "name": "Bhavna",
        "email": "bhavna.rao@gmail.com",
        "salary": "103000",
        "role": "DevOps Engineer",
        "phone": "9675432098",
        "location": "Hyderabad"
    },
    {
        "id": 74,
        "name": "Aarav",
        "email": "aarav.jadhav@gmail.com",
        "salary": "104000",
        "role": "Security Engineer",
        "phone": "9786543210",
        "location": "Chennai"
    },
    {
        "id": 75,
        "name": "Vansh",
        "email": "vansh.singh@gmail.com",
        "salary": "105000",
        "role": "Software Developer",
        "phone": "9709876543",
        "location": "Pune"
    },
    {
        "id": 76,
        "name": "Gaurav",
        "email": "gaurav.sharma@gmail.com",
        "salary": "106000",
        "role": "Business Analyst",
        "phone": "9398765432",
        "location": "Bangalore"
    },
    {
        "id": 77,
        "name": "Siddharth",
        "email": "siddharth.mishra@gmail.com",
        "salary": "107000",
        "role": "Network Engineer",
        "phone": "9576342109",
        "location": "Delhi"
    },
    {
        "id": 78,
        "name": "Rohit",
        "email": "rohit.kumar@gmail.com",
        "salary": "108000",
        "role": "Product Manager",
        "phone": "9865321490",
        "location": "Chennai"
    },
    {
        "id": 79,
        "name": "Jasmine",
        "email": "jasmine.shukla@gmail.com",
        "salary": "109000",
        "role": "HR Manager",
        "phone": "9676543210",
        "location": "Bangalore"
    },
    {
        "id": 80,
        "name": "Rani",
        "email": "rani.verma@gmail.com",
        "salary": "110000",
        "role": "QA Engineer",
        "phone": "9564321098",
        "location": "Hyderabad"
    },
    {
        "id": 81,
        "name": "Ruchi",
        "email": "ruchi.jain@gmail.com",
        "salary": "111000",
        "role": "Security Engineer",
        "phone": "9097654321",
        "location": "Pune"
    },
    {
        "id": 82,
        "name": "Nilesh",
        "email": "nilesh.sharma@gmail.com",
        "salary": "112000",
        "role": "DevOps Engineer",
        "phone": "9687654321",
        "location": "Chennai"
    },
    {
        "id": 83,
        "name": "Preeti",
        "email": "preeti.pandey@gmail.com",
        "salary": "113000",
        "role": "Data Scientist",
        "phone": "9456783210",
        "location": "Delhi"
    },
    {
        "id": 84,
        "name": "Anuj",
        "email": "anuj.verma@gmail.com",
        "salary": "114000",
        "role": "Business Analyst",
        "phone": "9321045678",
        "location": "Bangalore"
    },
    {
        "id": 85,
        "name": "Sonal",
        "email": "sonal.shukla@gmail.com",
        "salary": "115000",
        "role": "Network Engineer",
        "phone": "9078321098",
        "location": "Hyderabad"
    },
    {
        "id": 86,
        "name": "Arvind",
        "email": "arvind.jadhav@gmail.com",
        "salary": "116000",
        "role": "Product Manager",
        "phone": "9532123456",
        "location": "Chennai"
    },
    {
        "id": 87,
        "name": "Nikita",
        "email": "nikita.mishra@gmail.com",
        "salary": "117000",
        "role": "HR Manager",
        "phone": "9212345678",
        "location": "Bangalore"
    },
    {
        "id": 88,
        "name": "Harshit",
        "email": "harshit.patel@gmail.com",
        "salary": "118000",
        "role": "Security Engineer",
        "phone": "9807654321",
        "location": "Pune"
    },
    {
        "id": 89,
        "name": "Sumit",
        "email": "sumit.singh@gmail.com",
        "salary": "119000",
        "role": "Software Developer",
        "phone": "9687654321",
        "location": "Hyderabad"
    },
    {
        "id": 90,
        "name": "Kriti",
        "email": "kriti.patel@gmail.com",
        "salary": "120000",
        "role": "Business Analyst",
        "phone": "9812345678",
        "location": "Chennai"
    },
    {
        "id": 91,
        "name": "Dev",
        "email": "dev.kumar@gmail.com",
        "salary": "121000",
        "role": "Network Engineer",
        "phone": "9321098765",
        "location": "Delhi"
    },
    {
        "id": 92,
        "name": "Amit",
        "email": "amit.jadhav@gmail.com",
        "salary": "122000",
        "role": "Data Scientist",
        "phone": "9608765432",
        "location": "Bangalore"
    },
    {
        "id": 93,
        "name": "Shubham",
        "email": "shubham.singh@gmail.com",
        "salary": "123000",
        "role": "DevOps Engineer",
        "phone": "9023456789",
        "location": "Hyderabad"
    },
    {
        "id": 94,
        "name": "Shalini",
        "email": "shalini.sharma@gmail.com",
        "salary": "124000",
        "role": "Software Architect",
        "phone": "9765432109",
        "location": "Pune"
    },
    {
        "id": 95,
        "name": "Ajay",
        "email": "ajay.jain@gmail.com",
        "salary": "125000",
        "role": "Product Manager",
        "phone": "9501234567",
        "location": "Chennai"
    },
    {
        "id": 96,
        "name": "Ravindra",
        "email": "ravindra.mishra@gmail.com",
        "salary": "126000",
        "role": "QA Engineer",
        "phone": "9687654321",
        "location": "Bangalore"
    },
    {
        "id": 97,
        "name": "Shikha",
        "email": "shikha.rao@gmail.com",
        "salary": "127000",
        "role": "Business Analyst",
        "phone": "9234567890",
        "location": "Delhi"
    },
    {
        "id": 98,
        "name": "Ayesha",
        "email": "ayesha.mishra@gmail.com",
        "salary": "128000",
        "role": "Network Engineer",
        "phone": "9501237890",
        "location": "Hyderabad"
    },
    {
        "id": 99,
        "name": "Anjali",
        "email": "anjali.sharma@gmail.com",
        "salary": "129000",
        "role": "Security Engineer",
        "phone": "9896543210",
        "location": "Pune"
    },
    {
        "id": 100,
        "name": "Vinay",
        "email": "vinay.kumar@gmail.com",
        "salary": "130000",
        "role": "Software Developer",
        "phone": "9678901234",
        "location": "Chennai"
    }
    ,
    {
        "id": 101,
        "name": "Saurabh",
        "email": "saurabh.patil@gmail.com",
        "salary": "131000",
        "role": "Business Analyst",
        "phone": "9512345678",
        "location": "Delhi"
    },
    {
        "id": 102,
        "name": "Shweta",
        "email": "shweta.sharma@gmail.com",
        "salary": "132000",
        "role": "Data Scientist",
        "phone": "9675432109",
        "location": "Chennai"
    },
    {
        "id": 103,
        "name": "Anuj",
        "email": "anuj.pandey@gmail.com",
        "salary": "133000",
        "role": "Software Developer",
        "phone": "9398765432",
        "location": "Bangalore"
    },
    {
        "id": 104,
        "name": "Ravi",
        "email": "ravi.kumar@gmail.com",
        "salary": "134000",
        "role": "Product Manager",
        "phone": "9182736450",
        "location": "Hyderabad"
    },
    {
        "id": 105,
        "name": "Vishal",
        "email": "vishal.singh@gmail.com",
        "salary": "135000",
        "role": "QA Engineer",
        "phone": "9001234567",
        "location": "Pune"
    },
    {
        "id": 106,
        "name": "Nidhi",
        "email": "nidhi.rai@gmail.com",
        "salary": "136000",
        "role": "Security Engineer",
        "phone": "9612345678",
        "location": "Chennai"
    },
    {
        "id": 107,
        "name": "Sanya",
        "email": "sanya.patel@gmail.com",
        "salary": "137000",
        "role": "Software Architect",
        "phone": "9786543210",
        "location": "Bangalore"
    },
    {
        "id": 108,
        "name": "Nikhil",
        "email": "nikhil.kumar@gmail.com",
        "salary": "138000",
        "role": "Business Analyst",
        "phone": "9676543210",
        "location": "Delhi"
    },
    {
        "id": 109,
        "name": "Akshay",
        "email": "akshay.singh@gmail.com",
        "salary": "139000",
        "role": "HR Manager",
        "phone": "9123456789",
        "location": "Hyderabad"
    },
    {
        "id": 110,
        "name": "Tanuja",
        "email": "tanuja.verma@gmail.com",
        "salary": "140000",
        "role": "Software Developer",
        "phone": "9432108765",
        "location": "Pune"
    },
    {
        "id": 111,
        "name": "Manoj",
        "email": "manoj.kumar@gmail.com",
        "salary": "141000",
        "role": "Data Scientist",
        "phone": "9543218765",
        "location": "Chennai"
    },
    {
        "id": 112,
        "name": "Rashmi",
        "email": "rashmi.sharma@gmail.com",
        "salary": "142000",
        "role": "Product Manager",
        "phone": "9056123456",
        "location": "Bangalore"
    },
    {
        "id": 113,
        "name": "Deepak",
        "email": "deepak.pandey@gmail.com",
        "salary": "143000",
        "role": "DevOps Engineer",
        "phone": "9601237890",
        "location": "Delhi"
    },
    {
        "id": 114,
        "name": "Ritika",
        "email": "ritika.rai@gmail.com",
        "salary": "144000",
        "role": "Security Engineer",
        "phone": "9753124680",
        "location": "Hyderabad"
    },
    {
        "id": 115,
        "name": "Sanjay",
        "email": "sanjay.shukla@gmail.com",
        "salary": "145000",
        "role": "QA Engineer",
        "phone": "9988776655",
        "location": "Bangalore"
    },
    {
        "id": 116,
        "name": "Rekha",
        "email": "rekha.singh@gmail.com",
        "salary": "146000",
        "role": "HR Manager",
        "phone": "9345672109",
        "location": "Pune"
    },
    {
        "id": 117,
        "name": "Manisha",
        "email": "manisha.jain@gmail.com",
        "salary": "147000",
        "role": "Product Manager",
        "phone": "9203456789",
        "location": "Chennai"
    },
    {
        "id": 118,
        "name": "Ravi",
        "email": "ravi.rao@gmail.com",
        "salary": "148000",
        "role": "Network Engineer",
        "phone": "9098765432",
        "location": "Bangalore"
    },
    {
        "id": 119,
        "name": "Vandana",
        "email": "vandana.sharma@gmail.com",
        "salary": "149000",
        "role": "DevOps Engineer",
        "phone": "9532148765",
        "location": "Delhi"
    },
    {
        "id": 120,
        "name": "Ravi",
        "email": "ravi.verma@gmail.com",
        "salary": "150000",
        "role": "Software Developer",
        "phone": "9746543210",
        "location": "Hyderabad"
    }

];

  
module.exports = employees;