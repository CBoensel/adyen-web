import { configure } from 'enzyme';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import Adapter from 'enzyme-adapter-preact-pure';
import './testMocks/matchMedia';
import './testMocks/i18nMock';
import './testMocks/resourcesMock';
import './testMocks/core.mock';
import './testMocks/analyticsMock';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'whatwg-fetch';
import './testMocks/srPanelMock';

configure({ adapter: new Adapter() });
