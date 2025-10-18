export const booksRes = [
  {
    "id": 1,
    "title": "The Silent Patient",
    "author": "Alex Michaelides",
    "price": 499.00,
    "description": "A psychological thriller about a woman’s act of violence against her husband—and of the therapist obsessed with uncovering her motive.",
    "stockQuantity": 10,
    "imageUrl": "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    "isbn": "9781409181637"
  },
  {
    "id": 2,
    "title": "Atomic Habits",
    "author": "James Clear",
    "price": 399.00,
    "description": "An easy & proven way to build good habits & break bad ones.",
    "stockQuantity": 20,
    "imageUrl": "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    "isbn": "9780735211292"
  },
  {
    "id": 3,
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "price": 299.00,
    "description": "A journey of self-discovery following Santiago, a young shepherd determined to fulfill his personal legend.",
    "stockQuantity": 15,
    "imageUrl": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    "isbn": "9780061122415"
  },
  {
    "id": 4,
    "title": "Rich Dad Poor Dad",
    "author": "Robert T. Kiyosaki",
    "price": 450.00,
    "description": "What the rich teach their kids about money that the poor and middle class do not!",
    "stockQuantity": 8,
    "imageUrl": "https://images.unsplash.com/photo-1529651737248-dad5e20f84e0",
    "isbn": "9781612680194"
  }
];


export const popularRes = [
  {
    "id": 1,
    "rank": 1,
    "addedAt": "2025-10-18T10:30:00",
    "book": {
      "id": 2,
      "title": "Atomic Habits",
      "author": "James Clear",
      "price": 399.00,
      "description": "An easy & proven way to build good habits & break bad ones.",
      "stockQuantity": 20,
      "imageUrl": "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      "isbn": "9780735211292"
    }
  },
  {
    "id": 2,
    "rank": 2,
    "addedAt": "2025-10-17T09:15:00",
    "book": {
      "id": 1,
      "title": "The Silent Patient",
      "author": "Alex Michaelides",
      "price": 499.00,
      "description": "A psychological thriller about a woman’s act of violence against her husband—and of the therapist obsessed with uncovering her motive.",
      "stockQuantity": 10,
      "imageUrl": "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      "isbn": "9781409181637"
    }
  },
  {
    "id": 3,
    "rank": 3,
    "addedAt": "2025-10-16T14:45:00",
    "book": {
      "id": 3,
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "price": 299.00,
      "description": "A journey of self-discovery following Santiago, a young shepherd determined to fulfill his personal legend.",
      "stockQuantity": 15,
      "imageUrl": "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      "isbn": "9780061122415"
    }
  }
]


export const cartItems = [
  {
    id: 1,
    quantity: 2,
    book: {
      id: 101,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 499,
      description: "A journey of dreams, destiny, and discovery.",
      imageUrl:
        "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg",
      isbn: "9780062315007",
    },
  },
  {
    id: 2,
    quantity: 1,
    book: {
      id: 102,
      title: "Atomic Habits",
      author: "James Clear",
      price: 699,
      description: "An easy & proven way to build good habits and break bad ones.",
      imageUrl:
        "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
      isbn: "9780735211292",
    },
  },
];
