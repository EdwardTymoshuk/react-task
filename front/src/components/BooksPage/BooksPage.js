import React from 'react'
import './BooksPage.css'
import PageHeader from '../common/PageHeader/PageHeader'

const BooksPage = (props) => {
 
    const addToCart = (item) => {
        item._id = Date.now()
        props.addToCart(item)
    }

    return (
        <container>
            <PageHeader header="Wszystkie książki" />
            <article className="books_container">
                {
                    props.books.map(item => {
                        return (
                            <aside className="card" kry={item.id}>
                                <img src={item.cover_url} className="card-img-top" alt="Okładka książki" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">Autor: {item.author}</p>
                                    <p className="card-text">Liczba stron: {item.pages}</p>
                                    <button href="#" className="btn btn-primary" onClick={() => addToCart(item)}>Dodaj do koszyka</button>
                                </div>
                            </aside>
                        )
                    })
                }
            </article>
        </container>
    )
}

export default BooksPage