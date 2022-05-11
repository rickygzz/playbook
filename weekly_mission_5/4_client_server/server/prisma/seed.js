const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
    try {
        const woopa = await prisma.explorer.upsert({
        where: { name: 'Woopa' },
        update: {},
        create: {
                name: 'Woopa',
                username: 'ajolonauta',
                mission: 'Node'
        },
        });

        const woopa1 = await prisma.explorer.upsert({
        where: { name: 'Woopa1' },
        update: {},
        create: {
                name: 'Woopa1',
                username: 'ajolonauta1',
                mission: 'Node'
        },
        });

        const woopa2 = await prisma.explorer.upsert({
        where: { name: 'Woopa 2' },
        update: {},
        create: {
                name: 'Woopa 2',
                username: 'ajolonauta2',
                mission: 'Java'
        },
        });

        const woopa3 = await prisma.explorer.upsert({
        where: { name: 'Woopa 3' },
        update: {},
        create: {
                name: 'Woopa 3',
                username: 'ajolonauta3',
                mission: 'Node'
        },
        });

        console.log('Create 4 explorers');


        /**
         * Create records for Explorer2
         * 
         * model Explorer2 {
     id Int @id @default(autoincrement())
    name String
    lang String
    missionCommander String
    enrollments Int
    hasCertification Boolean @default(false)
    }
        */

        const explorerA = await prisma.explorer2.upsert({
            where: { name: 'ExplorerA' },
            update: {},
            create: {
                name: 'ExplorerA',
                lang: 'Node',
                missionCommander: 'Carlo Gilmar',
                enrollments: 1,
                hasCertification: true
            },
        });

        const explorerB = await prisma.explorer2.upsert({
            where: { name: 'ExplorerB' },
            update: {},
            create: {
                name: 'ExplorerB',
                lang: 'Java',
                missionCommander: 'Fernanda Ochoa',
                enrollments: 1,
                hasCertification: true
            },
        });

        const explorerC = await prisma.explorer2.upsert({
            where: { name: 'ExplorerC' },
            update: {},
            create: {
                name: 'ExplorerC',
                lang: 'Node',
                missionCommander: 'Carlo Gilmar',
                enrollments: 1,
                hasCertification: true
            },
        });
    } catch(e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();