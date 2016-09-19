import React from 'react';
import classNames from 'classnames';

export default ({text, onTextChange, isJsonValid}) => <div>
    <textarea name="json"
              cols="30"
              rows="10"
              value={text}
              className={classNames({isJsonValid})}
              onChange={onTextChange}/>
</div>;