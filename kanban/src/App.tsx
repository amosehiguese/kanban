import React from 'react';
import { Column } from './Column';
import { AppContainer } from './styles';
import { AddNewItem } from './AddNewItem';
import { useAppState } from './state/AppStateContext';
import { CustomDragLayer } from './CustomDragLayer';
import { addList } from './state/actions';

export const App = () => {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      <CustomDragLayer />
      {lists.map((list) => {
        return <Column text={list.text} key={list.id} id={list.id} />;
      })}
      <AddNewItem
        toggleButtonText='+ Add another list'
        onAdd={(text) => dispatch(addList(text))}
      />
    </AppContainer>
  );
};
