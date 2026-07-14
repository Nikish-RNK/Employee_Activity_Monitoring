const fs = require('fs');
const path = require('path');
const fsPromise = require('fs').promises;

const { format } = require('date-fns');
const { v4: uuidv4 } = require('uuid');

const eventLogger = async (mess) => {
    try {
        const logFolder = path.join(__dirname, 'logs');

        if (!fs.existsSync(logFolder)) {
            await fsPromise.mkdir(logFolder);
        }

        const dateTime = `${format(new Date(), 'dd/MM/yyyy\tHH:mm:ss')}`;
        const logItems = `${dateTime} \t ${mess} \t ${uuidv4()} \n`;

        await fsPromise.appendFile(path.join(logFolder, 'log.txt'), logItems);
    } catch (error) {
        console.error('Logger Error:', error);
    }
};

module.exports = eventLogger;
