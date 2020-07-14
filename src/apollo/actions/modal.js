import { gql } from 'apollo-boost';

export const modalDefaults = {
  modalIsOpen: false,
  __typename: 'modal'
};

export const MODAL_QUERY = gql`
  query {
    modal @client {
      modalIsOpen
    }
  }
`;

export const TOGGLE_MODAL_MUTATION = gql`
  mutation ToggleModal($modalIsOpen: boolean!) {
    toggleModal(modalIsOpen: $modalIsOpen) @client
  }
`;

export const modalResolvers = {
  toggleModal: (_, params, { cache }) => {
    const data = {
      modal: {
        modalIsOpen: !params.modalIsOpen,
        __typename: 'modal'
      }
    };

    cache.writeData({ data });

    return null;
  }
};
