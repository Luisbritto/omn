import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import './styles.css';

import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm(){
    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Que incrivel que você quer dar aulas."
            description="O primeiro passo é preencher esse fomulário de inscrição"          
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="WhatsApp"/>
                    <Textarea name="bio" label="Biografia"/>

                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select name="subject" label="Matéria"/>
                    <Input name="cost" label="Custo da sua hora por aula"/>
                    
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante"/>
                        Importante! <br/>  
                        Preencha todos os dados     
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>

            </main>
        </div>
    )
}

export default TeacherForm;