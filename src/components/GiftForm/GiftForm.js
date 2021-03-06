import React from "react";
import { reduxForm } from "redux-form";
import MultiCheckboxField from "../MultiCheckboxField/MultiCheckboxField";
import PropTypes from "prop-types";
import "./giftform.css";
import PresentIcon from '../../components/PresentIcon/PresentIcon'

const interestsOptions = [
  { id: 1, label: "Hälsa & Kroppsvård", value: "health" },
  { id: 2, label: "Inredning", value: "home" },
  { id: 3, label: "Trädgårdsarbete", value: "gardening" },
  { id: 4, label: "Spel", value: "games" },
  { id: 6, label: "Resor", value: "travel" },
  { id: 7, label: "Matlagning", value: "cooking" },
  { id: 8, label: "Välgörenhet", value: "charity" },
  { id: 9, label: "Natur", value: "nature" },
  { id: 10, label: "Djur", value: "animals" },
  { id: 11, label: "Miljö", value: "environment" },
  { id: 12, label: "Friluftsliv", value: "outdoor" },
  { id: 13, label: "Förvaring", value: "storage" },
  { id: 14, label: "Leksaker", value: "toys" },
  { id: 15, label: "Återvinning", value: "recycling" },
  { id: 16, label: "Fair-Trade", value: "fair-trade" },
  { id: 17, label: "Läsning", value: "books" },
  { id: 18, label: "Musik", value: "music" },
  { id: 19, label: "Teknik", value: "technology" }
];

const personalityOptions = [
  { id: 1, label: "Kreativ", value: "creative" },
  { id: 2, label: "Aktiv", value: "active" },
  { id: 3, label: "Omtänksam", value: "caring" },
  { id: 4, label: "Ordningsam", value: "orderly" },
  { id: 5, label: "Praktisk", value: "practical" },
  { id: 6, label: "Livsnjutare", value: "epicurean" }
];

const materialOptions = [
  { id: 1, label: "Återanvänt", value: "recycled" },
  { id: 2, label: "Bambu", value: "bambu" },
  { id: 3, label: "Rostfritt stål", value: "stainless" },
  { id: 4, label: "Bomull", value: "cotton" },
  { id: 5, label: "Ull", value: "wool" },
  { id: 6, label: "Trä", value: "wood" },
  { id: 7, label: "Silikon", value: "silicone" },
  { id: 8, label: "Socker", value: "sugar" },
  { id: 9, label: "Gummi", value: "rubber" },
  { id: 10, label: "Kartong", value: "cardboard" },
  { id: 11, label: "Plast", value: "plastic" },
  { id: 12, label: "Papper", value: "paper" },
  { id: 13, label: "Glas", value: "glass" },
  { id: 14, label: "Övriga material", value: "other" },
  { id: 15, label: "Kork", value: "cork" },
  { id: 16, label: "Gåvobevis & Presentkort", value: "giftcard" }
];

const receiverOptions = [
  { id: 1, label: "Bebis", value: "toddler" },
  { id: 2, label: "Barn", value: "kid" },
  { id: 3, label: "Ungdom", value: "youth" },
  { id: 4, label: "Vuxen", value: "adult" },
  { id: 5, label: "Hund el Katt", value: "animal" }
];

const GiftForm = ({ onSubmit, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="checkbox-group">
        <label htmlFor="interests">Intressen</label>
        <MultiCheckboxField options={interestsOptions} name="interests" />
      </div>
      <div className="checkbox-group">
        <label htmlFor="personality">Personlighet</label>
        <MultiCheckboxField options={personalityOptions} name="personality" />
      </div>
      <div className="checkbox-group">
        <label htmlFor="material">Tillverkad av</label>
        <MultiCheckboxField options={materialOptions} name="material" />
      </div>
      <div className="checkbox-group">
        <label htmlFor="receiver">Presenten skall vara till en</label>
        <MultiCheckboxField options={receiverOptions} name="receiver" />
      </div>

      <div className="gift-generator-wrapper">
        <button type="submit" className="gift-generator-btn">
          Generera presenttips <PresentIcon/>
        </button>
      </div>
    </form>
  );
};

GiftForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired
};

export default reduxForm({
  form: "giftform",
  fields: ["interests", "personality", "material", "receiver"]
})(GiftForm);
