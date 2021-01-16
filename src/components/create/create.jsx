// Icons
import plusIcon from '../../assets/icons/plus-icon.png';

// Files
import FilterOverlay from '../../components/create/filteroverlay.jsx';
import SuggestionItem from '../../components/suggestion/suggestion.jsx';

function Create({label, extra}) {
  return (
    <div className="section add-item __shadow--sm">
      <div className="add-item__relative">
        <div className="add-item__input">
          <img
            className="add-item__icon"
            src={plusIcon}
            alt="Plus icon"
          />
          <input
            className="add-item__input-field"
            type="text"
            placeholder={label}
          />
        </div>

        {/* Filter overlay  */}
        {extra && <FilterOverlay />}

      </div>
      <div className="horizontal-line"></div>
      {/* Suggestion */}
      {extra && <SuggestionItem />}
    </div>
  );
}
export default Create;
