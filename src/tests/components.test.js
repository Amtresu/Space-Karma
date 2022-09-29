/* eslint-disable */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Mission from '../components/Mission';
import Missions from '../components/Missions';
import Nav from '../components/Nav';
import Header from '../components/Header';
import MyProfile from '../components/MyProfile';
import Rocket from '../components/Rocket';
import Rockets from '../components/Rockets';


describe('Render All Components', () => {
    test('render navbar', () => {

        const { container } = render(
            <MemoryRouter>
                <Nav />
            </MemoryRouter>,
        );
        expect(container.firstChild).toMatchSnapshot(`
          class="navigation"
    >
      <a
        aria-current="page"
        class="style active"
        href="/"
        style="color: rgb(0, 0, 255);"
      >
        Rockets
      </a>
      <a
        class="style"
        href="/Mission"
        style="color: rgb(84, 94, 111);"
      >
        Mission
      </a>
      <a
        class="style"
        href="/MyProfile"
        style="color: rgb(84, 94, 111);"
      >
        My Profile
      </a>
    </div>
  `);
    });

    test('render missions', () => {
        const { container } = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Missions />
                </Provider>
            </MemoryRouter>,
        );
        expect(container.firstChild).toMatchSnapshot(`
        <table>
           <thead>
             <tr>
               <th>
                 Mission
               </th>
               <th>
                 Description
               </th>
               <th>
                 Status
               </th>
             </tr>
           </thead>
           <tbody />
         </table>
    `);
    });

    test('render mission', () => {
        const { container } = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Mission />
                </Provider>
            </MemoryRouter>,
        );
        expect(container.firstChild).toMatchSnapshot(  
        `<tr
      class="mission-list"
    >
      <td
        class="mission-title"
      />
      <td
        class="mission-description"
      />
      <td
        class="mission-status"
      >
        <button
          class="non-member"
        >
          Reserve
        </button>
      </td>
      <td
        class="mission-button"
      >
        <button
          class="Reserve"
          type="button"
        >
          Join Mission
        </button>
      </td>
    </tr>`
     );
    });

    test('render Header', () => {
        const { container } = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Header />
                </Provider>
            </MemoryRouter>,
        );
        expect(container.firstChild).toMatchSnapshot(`
        <div
          class="header"
        >
          <div
            class="header-photo"
          >
            <img
              alt="logo"
              src="planet.png"
            />
            <h1
              class="header-text"
            >
              Space Karma Page
            </h1>
          </div>
          <div
            class="navigation"
          >
            <a
              aria-current="page"
              class="style active"
              href="/"
              style="color: rgb(0, 0, 255);"
            >
              Rockets
            </a>
            <a
              class="style"
              href="/Mission"
              style="color: rgb(84, 94, 111);"
            >
              Mission
            </a>
            <a
              class="style"
              href="/MyProfile"
              style="color: rgb(84, 94, 111);"
            >
              My Profile
            </a>
          </div>
        </div>
    `);
    });

    test('render MyProfile', () => {
        const { container } = render(
            <MemoryRouter>
                <Provider store={store}>
                    <MyProfile />
                </Provider>
            </MemoryRouter>,
        );
        expect(container.firstChild).toMatchSnapshot(`
        <div className='my-profile'>
        <table className="main">
          <thead>
          <tr>
            <th>My Rockets</th>
          </tr>
          </thead>
          <tbody className="rockets">
                <tr>
                  <td></td>
                  </tr>
          </tbody>
        </table>
  
        <table className="main">
          <thead>
          <tr>
            <th>My Missions</th>
          </tr>
          </thead>
          <tbody className="missions">
                <tr>
                  <td></td>
          </tbody>
        </table>
      </div>
    `);
    });


    test('render Rockets', () => {
        const { container } = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Rockets />
                </Provider>
            </MemoryRouter>,
        );
        expect(container.firstChild).toMatchSnapshot(`
        <div>
        <div className="rocket-main">
          <Rocket/>
      </div>
    `);
    });

    test('render Rocket', () => {
        const { container } = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Rocket />
                </Provider>
            </MemoryRouter>,
        );
        expect(container.firstChild).toMatchSnapshot(
         `<div>
           <img
             alt="rocket"
           />
           <h2 />
           <div
             class="reservation"
           >
             <button />
           </div>
           <button
             type="button"
           >
             Reserve Rocket
           </button>
         </div>`
    );
    });
})