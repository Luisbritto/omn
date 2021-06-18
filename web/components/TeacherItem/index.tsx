import React from 'react';


import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){

    return (


                <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/69165153?s=460&v=4" alt="Luis"/>
                        <div>
                            <strong>Luis Ricardo</strong>
                            <span>Educação Fisica</span>
                        </div>
                    </header>

                    <p>
                        Entusista em ganhar dinheiro
                        <br/><br/>
                        haha
                    </p>

                    <footer>
                        <p>Preço/hora 
                            <strong> R$ 80,00</strong>                           
                        </p>
                        <button type="button">
                                <img src={whatsappIcon} alt="whatsapp"/>
                                Entrar em contato
                        </button>
                    </footer>
                </article>

    )
}

export default TeacherItem;