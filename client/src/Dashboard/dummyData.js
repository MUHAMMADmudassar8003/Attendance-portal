// src/Dashboard/dummyData.js

const generateDummyData = (numRecords) => {
    const statuses = ['Present', 'Absent', 'Leave'];
    const records = [];

    const getRandomTime = () => {
        const hours = Math.floor(Math.random() * 8) + 9; // Random hour between 9 and 16
        const minutes = Math.floor(Math.random() * 60);
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    };

    for (let i = 1; i <= numRecords; i++) {
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        const randomDate = new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
        records.push({
            id: i,
            date: randomDate.toISOString().split('T')[0],
            status: randomStatus,
            punchIn: randomStatus === 'Present' ? getRandomTime() : null,
            punchOut: randomStatus === 'Present' ? getRandomTime() : null,
        });
    }

    return records;
};

const dummyData = generateDummyData(1000);

export default dummyData;
