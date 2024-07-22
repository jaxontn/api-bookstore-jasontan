import { PrismaClient } from '@prisma/client';
//import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Seed Books
  await prisma.book.createMany({
    data: [
        {
          title: 'Atomic Habits',
          author: 'James Clear',
          publishedDate: new Date('2023-07-20'),
          isbn: '111-5627890123',
          price: 49.99,
        },
        {
          title: 'The Pragmatic Programmer',
          author: 'Andrew Hunt and David Thomas',
          publishedDate: new Date('1999-10-20'),
          isbn: '978-0201616224',
          price: 39.99,
        },
        {
          title: 'Clean Code',
          author: 'Robert C. Martin',
          publishedDate: new Date('2008-08-11'),
          isbn: '978-0132350884',
          price: 45.00,
        },
        {
          title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
          author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
          publishedDate: new Date('1994-10-31'),
          isbn: '978-0201633610',
          price: 55.00,
        },
        {
          title: 'Introduction to Algorithms',
          author: 'Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein',
          publishedDate: new Date('2009-07-31'),
          isbn: '978-0262033848',
          price: 72.00,

        },
        {
          title: 'JavaScript: The Good Parts',
          author: 'Douglas Crockford',
          publishedDate: new Date('2008-05-15'),
          isbn: '978-0596517748',
          price: 30.00,
        },
        {
          title: 'You Don’t Know JS',
          author: 'Kyle Simpson',
          publishedDate: new Date('2014-10-24'),
          isbn: '978-1491904244',
          price: 55.00,
        },
        {
          title: 'The Art of Computer Programming',
          author: 'Donald E. Knuth',
          publishedDate: new Date('1968-01-01'),
          isbn: '978-0201896831',
          price: 120.00,
        },
        {
          title: 'Refactoring: Improving the Design of Existing Code',
          author: 'Martin Fowler',
          publishedDate: new Date('1999-07-08'),
          isbn: '978-0201485677',
          price: 50.00,
        },
        {
          title: 'Head First Design Patterns',
          author: 'Eric Freeman, Bert Bates, Kathy Sierra, Elisabeth Robson',
          publishedDate: new Date('2004-10-25'),
          isbn: '978-0596007126',
          price: 40.00,
        },
        {
          title: 'Effective Java',
          author: 'Joshua Bloch',
          publishedDate: new Date('2008-05-28'),
          isbn: '978-0134685991',
          price: 55.00,
        },
      ],
  });

  console.log('Generated Book Data');

  // Seed BookDetails
  await prisma.bookDetail.createMany({
    data: [
        {
          bookId: 1,
          summary: 'A book about forming and maintaining good habits.',
          pageCount: 320,
          genre: 'Self-help',
          language: 'English',
          publisher: 'Penguin Random House',
        },
        {
          bookId: 2,
          summary: 'A classic guide to becoming a better programmer through practical tips and techniques.',
          pageCount: 352,
          genre: 'Programming',
          language: 'English',
          publisher: 'Addison-Wesley',
        },
        {
          bookId: 3,
          summary: 'An essential book for understanding the principles of writing clean, maintainable code.',
          pageCount: 464,
          genre: 'Programming',
          language: 'English',
          publisher: 'Prentice Hall',
        },
        {
          bookId: 4,
          summary: 'The seminal book on design patterns, providing a comprehensive guide to reusable object-oriented software design.',
          pageCount: 395,
          genre: 'Software Engineering',
          language: 'English',
          publisher: 'Addison-Wesley',
        },
        {
          bookId: 5,
          summary: 'A deep dive into algorithms, with a focus on algorithmic techniques and mathematical tools.',
          pageCount: 1312,
          genre: 'Algorithms',
          language: 'English',
          publisher: 'MIT Press',
        },
        {
          bookId: 6,
          summary: 'A concise guide to JavaScript, covering the language’s most important features.',
          pageCount: 172,
          genre: 'Programming',
          language: 'English',
          publisher: 'O\'Reilly Media',
        },
        {
          bookId: 7,
          summary: 'A series of books that delve deeply into the intricacies of JavaScript.',
          pageCount: 700,
          genre: 'Programming',
          language: 'English',
          publisher: 'O\'Reilly Media',
        },
        {
          bookId: 8,
          summary: 'A comprehensive work on algorithms and programming techniques by one of the pioneers in computer science.',
          pageCount: 672,
          genre: 'Computer Science',
          language: 'English',
          publisher: 'Addison-Wesley',
        },
        {
          bookId: 9,
          summary: 'A guide to improving existing code through refactoring techniques and best practices.',
          pageCount: 464,
          genre: 'Programming',
          language: 'English',
          publisher: 'Addison-Wesley',
        },
        {
          bookId: 10,
          summary: 'A beginner-friendly introduction to design patterns with practical examples.',
          pageCount: 688,
          genre: 'Design Patterns',
          language: 'English',
          publisher: 'O\'Reilly Media',
        },
        {
          bookId: 11,
          summary: 'A comprehensive guide to best practices in Java programming.',
          pageCount: 416,
          genre: 'Programming',
          language: 'English',
          publisher: 'Addison-Wesley',
        },
      ],
  });

  console.log('Generated Book Detail Data');

  
  // Seed Users
  await prisma.user.createMany({
    data: [
        {
          name: 'John Doe',
          email: 'john.doe@example.com',
          password: '123456789',
          isAdmin: true, // First user is admin
        },
        {
          name: 'Jane Smith',
          email: 'jane.smith@example.com',
          password: '123456789',
          isAdmin: false,
        },
        {
          name: 'Michael Brown',
          email: 'michael.brown@example.com',
          password: '123456789',
          isAdmin: false,
        },
        {
          name: 'Emily Davis',
          email: 'emily.davis@example.com',
          password: '123456789',
          isAdmin: false,
        },
        {
          name: 'Chris Wilson',
          email: 'chris.wilson@example.com',
          password: '123456789',
          isAdmin: false,
        },
        {
          name: 'Jessica Lee',
          email: 'jessica.lee@example.com',
          password: '123456789',
          isAdmin: false,
        },
        {
          name: 'Matthew Taylor',
          email: 'matthew.taylor@example.com',
          password: '123456789',
          isAdmin: false,
        },
        {
          name: 'Olivia Anderson',
          email: 'olivia.anderson@example.com',
          password: '123456789',
          isAdmin: false,
        },
        {
          name: 'Daniel Martinez',
          email: 'daniel.martinez@example.com',
          password: '123456789',
          isAdmin: false,
        },
        {
          name: 'Sophia Thomas',
          email: 'sophia.thomas@example.com',
          password: '123456789',
          isAdmin: false,
        },
        {
          name: 'William Jackson',
          email: 'william.jackson@example.com',
          password: '123456789',
          isAdmin: false,
        },
      ],
  });

  console.log('Generated User Data');
  

  // Fetch the current price for each bookId
  const bookPrices = await prisma.book.findMany({
    select: { id: true, price: true },
  });

  const bookPriceMap = new Map<number, number>();
  bookPrices.forEach(book => bookPriceMap.set(book.id, book.price));

  // Seed Orders and OrderItems
  for (let orderId = 1; orderId <= 11; orderId++) {
    // Generate orderItems for this order
    const orderItems = [];
    for (let i = 0; i < 3; i++) {
      const bookId = Math.floor(Math.random() * 11) + 1; // Random bookId between 1 and 11
      const quantity = Math.floor(Math.random() * 5) + 1; // Random quantity between 1 and 5
      const price = bookPriceMap.get(bookId) ?? 0; // Get the price for the bookId
      const totalPrice = price * quantity; // Calculate totalPrice based on price and quantity

      orderItems.push({
        bookId,
        quantity,
        totalPrice,
      });
    }

    // Create the Order with orderItems
    await prisma.order.create({
      data: {
        userId: Math.floor(Math.random() * 11) + 1, // Random userId between 1 and 11
        status: "Paid",
        orderItems: {
          create: orderItems,
        },
      },
    });
  }

  console.log('Generated Order and Order Item Data');

  

  console.log('Data seeding complete');
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
