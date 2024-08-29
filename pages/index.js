import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Quiz from '../components/Quiz';
import React, { useState, useEffect } from 'react';

// import nails.json from public/nails.json

import nails from '../public/nails.json';
import beauty from '../public/beauty.json';

export default function Home() {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [nailsIdx, setNailsIdx] = useState(0);
  const [beautyIdx, setBeautyIdx] = useState(0);
  let question_sample_nails = [
    {
      "question": "¿Qué es la manicuría?",
      "options": [
        { "label": "A", "value": "Cuidado y arreglo de las uñas de las manos" },
        { "label": "B", "value": "Corte de cabello" },
        { "label": "C", "value": "Exfoliación de la piel" }
      ],
      "answer": "A"
    },
    {
      "question": "¿Cuál es la función principal de una lima de uñas?",
      "options": [
        { "label": "A", "value": "Cortar las uñas" },
        { "label": "B", "value": "Dar forma y suavizar los bordes" },
        { "label": "C", "value": "Pintar las uñas" }
      ],
      "answer": "B"
    },
    {
      "question": "¿Qué herramienta se utiliza para cortar las cutículas?",
      "options": [
        { "label": "A", "value": "Alicate de cutículas" },
        { "label": "B", "value": "Lima de uñas" },
        { "label": "C", "value": "Pinzas" }
      ],
      "answer": "A"
    },
    {
      "question": "¿Cuánto tiempo se recomienda dejar las uñas en remojo antes de un servicio de manicuría?",
      "options": [
        { "label": "A", "value": "1 minuto" },
        { "label": "B", "value": "5-10 minutos" },
        { "label": "C", "value": "30 minutos" }
      ],
      "answer": "B"
    },
    {
      "question": "¿Qué es un esmalte base y para qué sirve?",
      "options": [
        { "label": "A", "value": "Un esmalte transparente para proteger las uñas" },
        { "label": "B", "value": "Un esmalte para dar color" },
        { "label": "C", "value": "Un esmalte para brillo" }
      ],
      "answer": "A"
    },
    {
      "question": "¿Cuántas capas de esmalte de color se deben aplicar en una manicura tradicional?",
      "options": [
        { "label": "A", "value": "Una" },
        { "label": "B", "value": "Dos" },
        { "label": "C", "value": "Tres" }
      ],
      "answer": "B"
    },
    {
      "question": "¿Qué es un top coat y para qué se utiliza?",
      "options": [
        { "label": "A", "value": "Un esmalte transparente para sellar y dar brillo" },
        { "label": "B", "value": "Un producto para suavizar cutículas" },
        { "label": "C", "value": "Un removedor de esmalte" }
      ],
      "answer": "A"
    },
    {
      "question": "¿Cuál es la función de la cutícula?",
      "options": [
        { "label": "A", "value": "Proteger la base de la uña" },
        { "label": "B", "value": "Aumentar el crecimiento de la uña" },
        { "label": "C", "value": "Dar color a la uña" }
      ],
      "answer": "A"
    },
    {
      "question": "¿Por qué es importante desinfectar las herramientas de manicuría?",
      "options": [
        { "label": "A", "value": "Para mantenerlas en buen estado" },
        { "label": "B", "value": "Para prevenir infecciones" },
        { "label": "C", "value": "Para que las uñas se vean mejor" }
      ],
      "answer": "B"
    },
    {
      "question": "¿Qué tipo de lima es mejor para uñas naturales: metálica o de cartón?",
      "options": [
        { "label": "A", "value": "Metálica" },
        { "label": "B", "value": "De cartón" },
        { "label": "C", "value": "De vidrio" }
      ],
      "answer": "B"
    }
  ]

  let question_sample_beauty = [
    {
      "question": "¿Qué es un facial?",
      "options": [
        { "label": "A", "value": "Un tratamiento para la piel del rostro" },
        { "label": "B", "value": "Un masaje" },
        { "label": "C", "value": "Un tratamiento para el cabello" }
      ],
      "answer": "A"
    },
    {
      "question": "¿Qué es un exfoliante?",
      "options": [
        { "label": "A", "value": "Un producto para limpiar el rostro" },
        { "label": "B", "value": "Un producto para eliminar células muertas" },
        { "label": "C", "value": "Un producto para hidratar la piel" }
      ],
      "answer": "B"
    }
  ]


  useEffect(() => {
    question_sample_nails = nails;
    question_sample_beauty = beauty;
    // randomize questions order.
    question_sample_nails.sort(() => Math.random() - 0.5);
    question_sample_beauty.sort(() => Math.random() - 0.5);
    console.log('initiated with nails', question_sample_nails.length, 'beauty', question_sample_beauty.length);
  }, []);

  const selectCategoryClick = (category, increase = true, is_correct = true) => {
    let nailsIdxNew = nailsIdx;
    let beautyIdxNew = beautyIdx;
    if (increase) {
      if (category == 'nails') {
        nailsIdxNew = nailsIdx + 1;
        if (nailsIdxNew > question_sample_nails.length - 1) {
          nailsIdxNew = 0;
        }
        
        
      } else if (category == 'beauty') {
        beautyIdxNew = beautyIdx + 1;
        if (beautyIdxNew > question_sample_beauty.length - 1) {
          beautyIdxNew = 0;
        }
      }

      setBeautyIdx(beautyIdxNew);
      setNailsIdx(nailsIdxNew);
    }
    

    setSelectedCategory(category);


  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Meli Quiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          {
            selectedCategory == 'nails' && (
              <Quiz QuestionSet={question_sample_nails} selectCategory={selectCategoryClick} defaultIndex={nailsIdx}></Quiz>
            )
          }
          {
            selectedCategory == 'beauty' && (
              <Quiz QuestionSet={question_sample_beauty} selectCategory={selectCategoryClick} defaultIndex={beautyIdx}></Quiz>
            )
          }

          {selectedCategory == null && (
            <div>
              <div className="quiz-container">
                <br />
                <button className='redirect-button option' onClick={() => selectCategoryClick('nails', false)} >Nails</button>
                <button className='redirect-button option' onClick={() => selectCategoryClick('beauty', false)}  >Beauty</button>

              </div>
            </div>
          )}
        </div>


      </main>

    </div>
  );
}
