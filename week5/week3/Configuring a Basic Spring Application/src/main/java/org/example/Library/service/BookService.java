package org.example.Library.service;

import org.example.Library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void printBook() {
        System.out.println("Book: " + bookRepository.findBook());
    }
}
