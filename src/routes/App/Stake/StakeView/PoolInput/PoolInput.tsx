import { formatUnits } from 'ethers/lib/utils';
import React, { useState } from 'react';
import './PoolInput.scss';

const PoolInput = React.forwardRef(({ action, placeholderText, balance, unit, loading, buttonText }: any, ref: any) => {
	const [value, setValue] = useState('');

	return (
    <div className="PoolInput">
      <div className="PoolInput__control">
        <input
          ref={ref}
          className="PoolInput__input"
          type="text"
          value={value}
          placeholder={placeholderText}
          onChange={(event) => setValue(event.target.value)}
        />
        <button className="PoolInput__control__button" onClick={() => {
          if ( balance === undefined ) setValue("0");
          if ( balance !== undefined) setValue(formatUnits(balance, unit));
        }}>
          Max
        </button>
      </div>
      <button
        className={
          loading ? (
            'Btn Btn--primary PoolInput__action'
          ) : (
              'Btn Btn--secondary PoolInput__action'
            )
        }
        disabled={loading}
        onClick={action}
      >
        {loading ? "Loading..." : buttonText}
      </button>
		</div>
	);
});

export default PoolInput;