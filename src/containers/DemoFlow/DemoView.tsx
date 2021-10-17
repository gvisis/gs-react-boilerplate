import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { actions } from '../../state/actions';

export const DemoView: React.FC = () => {
  const dispatch = useDispatch();
  const { isSagaClicked, testState } = useSelector(state => state.app);
  const { t } = useTranslation();

  const handleButtonStateClick = () => {
    dispatch(actions.app.setTestAction(!testState));
  };

  const handleButtonSagaClick = () => {
    dispatch(actions.app.checkSagaClick());
  };

  return (
    <>
      {testState ? (
        <>
          <h1>{t('title:app')}</h1>
        </>
      ) : (
        <>
          <DemoText>Hello World ( false ) </DemoText>
        </>
      )}
      <h1>{isSagaClicked}</h1>
      <button onClick={handleButtonStateClick}>Click for redux state</button>
      <button onClick={handleButtonSagaClick}>Click for redux saga</button>
    </>
  );
};

const DemoText = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;
