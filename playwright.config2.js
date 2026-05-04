// @ts-check
import { devices, expect } from '@playwright/test';
import { TIMEOUT } from 'node:dns';

const config = {
    testDir: './tests',
    timeout: 50000,
    expect: {
        timeout: 50000,
    },
    reporter: 'html',
    projects: [{
        name: 'chrome',
        use: {
            trace: 'on',
            screenshot: 'on',
            browserName: 'chromium',
            headless: true
        }

    }, {
        name: 'firefox',
        use: {
            browserName: 'firefox',
            headless: false
        }
    }
    ]

}
module.exports = config
