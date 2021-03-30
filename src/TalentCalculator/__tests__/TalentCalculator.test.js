import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent, { specialChars } from '@testing-library/user-event';

import TalentCalculator from '../TalentCalculator';

import { translations } from '../../utilities/i18n';

import talentMockData from '../talentMockData';


const totalTalents = talentMockData[0].talents.length + talentMockData[1].talents.length;

it('renders', () => {
  render(<TalentCalculator />);
  expect(screen.getByTestId('TalentCalculator')).toBeInTheDocument();
});

it('contains the correct number of talent trees', () => {
  render(<TalentCalculator />);
  expect(screen.getAllByTestId('TalentTree').length).toBe(talentMockData.length);
});

it('adds the correct string for tree title', () => {
  render(<TalentCalculator />);
  expect(screen.getAllByTestId('TalentTree-title')[0].innerHTML).toBe(translations.en.talent_path_1);
});

it('does not render a connector before the first talent', () => {
  render(<TalentCalculator />);
  const firstTalentButton = screen.getAllByTestId('Talent')[0];
  const connector = firstTalentButton.querySelector('[data-testid=Talent-connector]');
  expect(connector).not.toBeInTheDocument();
  expect(screen.getAllByTestId('Talent-connector').length).toBe(totalTalents - talentMockData.length);
});

it('renders the correct number of talents', () => {
  render(<TalentCalculator />);
  expect(screen.getAllByTestId('Talent').length).toBe(totalTalents);
});

it('adds a talent when clicked', () => {
  render(<TalentCalculator />);
  const firstTalentButton = screen.getAllByTestId('Talent-button')[0];
  userEvent.click(firstTalentButton);
  expect(screen.getByTestId('TalentCalculator-points').innerHTML).toBe('1/6');
});

it('removes a talent when right-clicked', () => {
  render(<TalentCalculator />);
  const firstTalentButton = screen.getAllByTestId('Talent-button')[0];
  userEvent.click(firstTalentButton);
  expect(screen.getByTestId('TalentCalculator-points').innerHTML).toBe('1/6');
  fireEvent.contextMenu(firstTalentButton);
  expect(screen.getByTestId('TalentCalculator-points').innerHTML).toBe('0/6');
});