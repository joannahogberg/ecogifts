// import React, { Component } from 'react'
// import PropTypes from 'prop-types';
// import { Field, reduxForm, FieldArray } from 'redux-form'
// import MultiCheckboxField from '../MultiCheckboxField';


// // To make your form component communicate with the store, we need to wrap it with reduxForm(). 
// // It will provide the props about the form state and function to handle the submit process.

// let GiftForm = props => {
//     const { handleSubmit } = props
//     const interests= [{id: 1, label: "Hälsa", value: "health"}, {id: 2, label: "Inredning", value: "home"}, {id: 3, label: "Trädgårdsarbete", value:"gardening"}, {id: 4, label: "Spel", value: "games"}, {id: 6, label: "Resa", value:"travel"}, 
//     {id: 7, label: "Matlagning", value:"cooking"}, {id: 8, label: "Välgörenhet", value: "charity"}, {id: 9, label: "Natur", value:"nature"},
//     {id: 10, label: "Djur", value:"animals"}, {id: 11, label: "Miljö", value:"environment"}, 
//     {id: 12, label: "Friluftsliv", value:"outdoor"}, {id: 13, label: "Förvaring", value:"storage"}, 
//    {id: 14, label: "Leksaker", value: "toys"}, {id: 15, label: "Återvinning", value:"recycling"}, 
//    {id: 16, label: "Fair-Trade", value:"fair-trade"}, {id: 17, label: "Läsning", value: "books"}, {id: 18, label: "Musik", value:"music"},
//     {id: 19, label: "Teknik", value:"technology"}];

//     const personality = [{id: 1, label: "Kreativ", value:"creative"}, {id: 2, label: "Aktiv", value:"active"}, {id: 3, label: "Omtänksam", value:"caring"}, 
//     {id: 4, label: "Ordningsam", value:"orderly"}, {id: 5, label: "Praktisk", value:"practical"}, {id: 6, label: "Livsnjutare", value:"epicurean"}]

//     const material = [{id: 1, label: "Återanvänt", value:"recycled"}, {id: 2, label: "Bambu", value:"bambu"}, {id: 3, label: "Rostfritt stål", value:"stainless"}, 
//     {id: 4, label: "Bomull", value:"cotton"}, {id: 5, label: "Ull", value:"wool"}, {id: 6, label: "Trä", value:"wood"}, 
//     {id: 7, label:"Silikon", value:"silicone"}, {id: 8, label: "Socker", value:"sugar"}, {id: 9, label: "Gummi", value:"rubber"}, 
//     {id: 10, label: "Kartong", value:"cardboard"}, {id: 11, label: "Plast", value:"plastic"}, {id: 12, label: "Papper", value:"paper"}, 
//     {id: 13, label:"Glas", value:"glass"}, {id: 14, label: "Övriga material", value:"other"},
//         {id: 15, label: "Kork", value:"cork"}, {id: 16, label: "Gåvobevis & Presentkort", value:"giftcard"}, {id: 17, label: "Lakrits", value:"liquorice"}, {id: 18, label: "Choklad", value:"chocolate"}]
    
//     const type = [{id: 1, label: "Bebis", value: "toddler"}, {id: 2, label:"Barn", value:"kid"}, {id: 3, label: "Ungdom", value:"youth"}, {id:4, label: "Vuxen", value:"adult"}, {id: 5, label: "Hund el Katt", value:"animal"}]
    
    
//     return <form onSubmit={handleSubmit}>

//       <div>
//         <label htmlFor="interests">Intressen</label>
//         {/* <Field name="interests" component={MultiCheckboxField} type="text" options={interests} label="Intressen"/> */}
//         <MultiCheckboxField
//     label="Intressen"
//     options={interests}
//     field={formField}
// />
//       </div>
//       <div>
//         <label htmlFor="personality">Personlighet</label>
//         <Field name="personality" component={MultiCheckboxField} type="text" options={personality} label="Personlighet"/>
//       </div>
//       <div>
//         <label htmlFor="material">Tillverkat av</label>
//         <Field name="material" component={MultiCheckboxField} type="text" options={material} label="Tillverkat av" />
//       </div>
//       <div>
//         <label htmlFor="type">Presenten skall vara till en: </label>
//         <Field name="type" component={MultiCheckboxField} type="email" options={type} label="Presenten skall vara till en:" />
//       </div>
//       <button type="submit">Visa presentförslag</button>
    
    
    
    
//     </form>
//   }
  
// //   GiftForm = reduxForm({
// //     // a unique name for the form
// //     form: 'rendergiftsform'
// //   })(GiftForm)
// //   export default GiftForm;

//   export default reduxForm({
//     form: 'rendergiftsform',
//     fields,
//     initialValues: {
//       hobbies: [ potentialHobbies[0], potentialHobbies[2] ],
//       favoriteHobby: potentialHobbies[2],
//       colors: [ 'Red', 'Green', 'Blue' ]
//     }
//   })(GiftForm)



import React, { Component, PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form'
import MultiCheckboxField from '../MultiCheckboxField';
export const fields = [ 'Intressen', 'Personlighet', 'Material', 'Typ']
// const potentialHobbies = [
//   { id: 1, label: 'Guitar', category: 'music' },
//   { id: 2, label: 'Cycling', category: 'sports' },
//   { id: 3, label: 'Hiking', category: 'outdoors' }
// ]
// const potentialColors = [ 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet' ]

// const { handleSubmit } = props
// const interests= [{id: 1, label: "Hälsa", value: "health"}, {id: 2, label: "Inredning", value: "home"}, {id: 3, label: "Trädgårdsarbete", value:"gardening"}, {id: 4, label: "Spel", value: "games"}, {id: 6, label: "Resa", value:"travel"}, 
// {id: 7, label: "Matlagning", value:"cooking"}, {id: 8, label: "Välgörenhet", value: "charity"}, {id: 9, label: "Natur", value:"nature"},
// {id: 10, label: "Djur", value:"animals"}, {id: 11, label: "Miljö", value:"environment"}, 
// {id: 12, label: "Friluftsliv", value:"outdoor"}, {id: 13, label: "Förvaring", value:"storage"}, 
// {id: 14, label: "Leksaker", value: "toys"}, {id: 15, label: "Återvinning", value:"recycling"}, 
// {id: 16, label: "Fair-Trade", value:"fair-trade"}, {id: 17, label: "Läsning", value: "books"}, {id: 18, label: "Musik", value:"music"},
// {id: 19, label: "Teknik", value:"technology"}];

// const personality = [{id: 1, label: "Kreativ", value:"creative"}, {id: 2, label: "Aktiv", value:"active"}, {id: 3, label: "Omtänksam", value:"caring"}, 
// {id: 4, label: "Ordningsam", value:"orderly"}, {id: 5, label: "Praktisk", value:"practical"}, {id: 6, label: "Livsnjutare", value:"epicurean"}]

// const material = [{id: 1, label: "Återanvänt", value:"recycled"}, {id: 2, label: "Bambu", value:"bambu"}, {id: 3, label: "Rostfritt stål", value:"stainless"}, 
// {id: 4, label: "Bomull", value:"cotton"}, {id: 5, label: "Ull", value:"wool"}, {id: 6, label: "Trä", value:"wood"}, 
// {id: 7, label:"Silikon", value:"silicone"}, {id: 8, label: "Socker", value:"sugar"}, {id: 9, label: "Gummi", value:"rubber"}, 
// {id: 10, label: "Kartong", value:"cardboard"}, {id: 11, label: "Plast", value:"plastic"}, {id: 12, label: "Papper", value:"paper"}, 
// {id: 13, label:"Glas", value:"glass"}, {id: 14, label: "Övriga material", value:"other"},
//     {id: 15, label: "Kork", value:"cork"}, {id: 16, label: "Gåvobevis & Presentkort", value:"giftcard"}, {id: 17, label: "Lakrits", value:"liquorice"}, {id: 18, label: "Choklad", value:"chocolate"}]

// const type = [{id: 1, label: "Bebis", value: "toddler"}, {id: 2, label:"Barn", value:"kid"}, {id: 3, label: "Ungdom", value:"youth"}, {id:4, label: "Vuxen", value:"adult"}, {id: 5, label: "Hund el Katt", value:"animal"}]


class GiftForm extends Component {
  render() {

    const { handleSubmit, onSubmit, fields: {interests, personality, material, type} } = this.props;


const interestsOptions = [{id: 1, label: "Hälsa", value: "health"}, {id: 2, label: "Inredning", value: "home"}, {id: 3, label: "Trädgårdsarbete", value:"gardening"}, {id: 4, label: "Spel", value: "games"}, {id: 6, label: "Resa", value:"travel"}, 
{id: 7, label: "Matlagning", value:"cooking"}, {id: 8, label: "Välgörenhet", value: "charity"}, {id: 9, label: "Natur", value:"nature"},
{id: 10, label: "Djur", value:"animals"}, {id: 11, label: "Miljö", value:"environment"}, 
{id: 12, label: "Friluftsliv", value:"outdoor"}, {id: 13, label: "Förvaring", value:"storage"}, 
{id: 14, label: "Leksaker", value: "toys"}, {id: 15, label: "Återvinning", value:"recycling"}, 
{id: 16, label: "Fair-Trade", value:"fair-trade"}, {id: 17, label: "Läsning", value: "books"}, {id: 18, label: "Musik", value:"music"},
{id: 19, label: "Teknik", value:"technology"}];

const personalityOptions = [{id: 1, label: "Kreativ", value:"creative"}, {id: 2, label: "Aktiv", value:"active"}, {id: 3, label: "Omtänksam", value:"caring"}, 
{id: 4, label: "Ordningsam", value:"orderly"}, {id: 5, label: "Praktisk", value:"practical"}, {id: 6, label: "Livsnjutare", value:"epicurean"}]

const materialOptions = [{id: 1, label: "Återanvänt", value:"recycled"}, {id: 2, label: "Bambu", value:"bambu"}, {id: 3, label: "Rostfritt stål", value:"stainless"}, 
{id: 4, label: "Bomull", value:"cotton"}, {id: 5, label: "Ull", value:"wool"}, {id: 6, label: "Trä", value:"wood"}, 
{id: 7, label:"Silikon", value:"silicone"}, {id: 8, label: "Socker", value:"sugar"}, {id: 9, label: "Gummi", value:"rubber"}, 
{id: 10, label: "Kartong", value:"cardboard"}, {id: 11, label: "Plast", value:"plastic"}, {id: 12, label: "Papper", value:"paper"}, 
{id: 13, label:"Glas", value:"glass"}, {id: 14, label: "Övriga material", value:"other"},
    {id: 15, label: "Kork", value:"cork"}, {id: 16, label: "Gåvobevis & Presentkort", value:"giftcard"}, {id: 17, label: "Lakrits", value:"liquorice"}, {id: 18, label: "Choklad", value:"chocolate"}]

const typeOptions = [{id: 1, label: "Bebis", value: "toddler"}, {id: 2, label:"Barn", value:"kid"}, {id: 3, label: "Ungdom", value:"youth"}, {id:4, label: "Vuxen", value:"adult"}, {id: 5, label: "Hund el Katt", value:"animal"}]


    return (<form onSubmit={handleSubmit(onSubmit)} >
        <div>
          <label>Intressen</label>
          <div>

              <Field name="interests" component={MultiCheckboxField} type="text" options={interestsOptions} {...interests} label="Intressen" field={this.props} /> 
          {/* <MultiCheckboxField label="Intressen" options={interestsOptions} {...interests} field={interests} /> */}
          </div>
        </div>
        <div>
          <label>Intressen</label>
          <div>

              <Field name="personality" component={MultiCheckboxField} type="text" options={personalityOptions} {...personality} label="Personlighet" field={this.props} /> 
          </div>
        </div>
        <div>
          <label>Intressen</label>
          <div>
              <Field name="material" component={MultiCheckboxField} type="text" options={materialOptions} {...material} label="Tillverkat av" field={this.props} /> 
          </div>
        </div>
        <div>
          <label>Intressen</label>
          <div>
              <Field name="material" component={MultiCheckboxField} type="text" options={typeOptions} {...type} label="Presenten skall vara till en:" field={this.props} /> 
          </div>
        </div>
        
        {/* <div>
          <label>Personlighet</label>
          <div>
          <MultiCheckboxField label="Personlighet" options={personalityOptions} {...type} field={personality} />
          </div>
        </div>
        <div>
          <label>Material</label>
          <div>
          <MultiCheckboxField label="Material" options={materialOptions} {...material} field={material} />
          </div>
        </div>
        <div>
          <label>Typ</label>
          <div>
          <MultiCheckboxField label="Type" options={typeOptions} {...type} field={type} />
          </div>
        </div> */}
        <div>
        <button type="submit">Visa presentförslag</button>
        </div>
      </form>
    )
  }
}


GiftForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'giftform',
  fields: ['interests', 'personality', 'material', 'type']
})(GiftForm)