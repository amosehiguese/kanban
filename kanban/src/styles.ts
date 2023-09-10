import styled from 'styled-components';

export const AppContainer = styled.div`
  align-items: flex-start;
  background: hsl(210, 36%, 96%);
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
  width: 100%;
`;

interface DragPreviewContainerProps {
  isHidden?: boolean;
  isPreview?: boolean;
}

type DragPreviewWrapperProps = {
  position: {
    x: number;
    y: number;
  };
};

export const DragPreviewWrapper = styled.div.attrs<DragPreviewWrapperProps>(
  ({ position: { x, y } }) => ({
    style: {
      transform: `translate(${x}px, ${y}px)`,
    },
  })
)<DragPreviewWrapperProps>``;

export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  transform: ${(props) => (props.isPreview ? 'rotate(5deg)' : null)};
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
`;

export const ColumnContainer = styled(DragPreviewContainer)`
  background: #ebecf0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`;

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`;

export const CardContainer = styled(DragPreviewContainer)`
  background: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

type AddItemButtonProps = {
  dark?: boolean;
};

export const AddItemButton = styled.button<AddItemButtonProps>`
  background: hsl(210, 90%, 70%);
  border-radius: 3px;
  border: none;
  color: ${(props) => (props.dark ? '#000' : '#fff')};
  cursor: pointer;
  max-width: 300px;
  padding: 10px 12px;
  text-align: left;
  transition: background 85ms ease-in;
  width: 100%;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  &:hover {
    background: hsl(210, 80%, 80%);
  }
`;

export const NewItemFormContainer = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export const NewItemButton = styled.button`
  background: hsl(210, 90%, 70%);
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
`;

export const NewItemInput = styled.input`
  border-radius: none;
  border-color: transparent;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`;

export const CustomDragLayerContainer = styled.div`
  height: 100%;
  left: 0;
  pointer-events: none;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;
