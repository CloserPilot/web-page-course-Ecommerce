import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import HomePage from './HomePage.jsx';
import { MemoryRouter } from 'react-router';
import { userEvent } from '@testing-library/user-event';

vi.mock('../../api', async (importOriginal) => {
  const originalModule = await importOriginal(); // importa todo el módulo real

  return {
    ...originalModule,   // mantiene fullURL
    api: {
      ...originalModule.api, // mantiene cualquier otra propiedad de api
      get: vi.fn(),          // solo mockea get
    },
  };
});

describe('HomePage component', () => {
  let loadCart;
  let api;
  let fullURL;

  beforeEach(async () => {
    loadCart = vi.fn();

    const mod = await import('../../api');
    api = mod.api;
    fullURL = mod.fullURL;

    api.get.mockImplementation(async (url) => {
      if (url === `/api/products`) {
        const response = {
          data: [
            {
              id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
              image: "images/products/athletic-cotton-socks-6-pairs.jpg",
              name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
              rating: { stars: 4.5, count: 87 },
              priceCents: 1090,
              keywords: ["socks", "sports", "apparel"]
            },
            {
              id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
              image: "images/products/intermediate-composite-basketball.jpg",
              name: "Intermediate Size Basketball",
              rating: { stars: 4, count: 127 },
              priceCents: 2095,
              keywords: ["sports", "basketballs"]
            }
          ]
        };
        console.log('MOCK API GET RESPONSE:', response);
        return response;
      }
      console.log('MOCK API GET RESPONSE:', url);
      return { data: [] }; // fallback si no coincide la URL
    });
  });

  it('displays the products correct', async () => {
    render(
      <MemoryRouter>
        <HomePage cart={[]} loadCart={loadCart} />
      </MemoryRouter>
    );

    const productContainers = await screen.findAllByTestId('product-container');
    expect(productContainers.length).toBe(2);
    expect(
      within(productContainers[0]).getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')
    ).toBeInTheDocument()
    expect(
      within(productContainers[1]).getByText('Intermediate Size Basketball')
    ).toBeInTheDocument()
  });
});
