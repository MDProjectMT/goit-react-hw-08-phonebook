import PropTypes from 'prop-types';
import scss from './Filter.module.scss';

export default function Filter({ filter, onChange }) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '340px',
          padding: '15px 0 0 0',
          gap: '10px',
        }}
      >
        <label className={scss.label}>Find contacts by name</label>
        <input
          className={scss.input}
          value={filter}
          type="text"
          name="filter"
          placeholder="write name"
          onChange={onChange}
        />
      </div>
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
