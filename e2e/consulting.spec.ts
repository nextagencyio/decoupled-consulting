import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads and displays hero content from Drupal', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Apex Strategy Group/)
    // Hero title from Drupal content
    await expect(page.getByText('Driving Transformation, Delivering Results')).toBeVisible()
  })

  test('displays stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('500+')).toBeVisible()
    await expect(page.getByText('Clients Served')).toBeVisible()
  })

  test('has working navigation links', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('link', { name: /Services/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /Case Studies/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /Insights/i }).first()).toBeVisible()
    await expect(page.getByRole('link', { name: /Team/i }).first()).toBeVisible()
  })
})

test.describe('Services Page', () => {
  test('lists services from Drupal', async ({ page }) => {
    await page.goto('/services')
    await expect(page.getByText('Strategy Consulting')).toBeVisible()
    await expect(page.getByText('Operations Consulting')).toBeVisible()
    await expect(page.getByText('Digital Transformation')).toBeVisible()
  })
})

test.describe('Service Detail Page', () => {
  test('renders a service detail page', async ({ page }) => {
    await page.goto('/services/strategy-consulting')
    await expect(page.getByRole('heading', { name: 'Strategy Consulting' })).toBeVisible()
  })
})

test.describe('Case Studies Page', () => {
  test('lists case studies from Drupal', async ({ page }) => {
    await page.goto('/case-studies')
    await expect(page.getByText('Healthcare System Transformation')).toBeVisible()
    await expect(page.getByText('Fintech Market Entry Strategy')).toBeVisible()
    await expect(page.getByText('Supply Chain Resilience Program')).toBeVisible()
  })
})

test.describe('Case Study Detail Page', () => {
  test('renders a case study detail page', async ({ page }) => {
    await page.goto('/case-studies/healthcare-system-transformation')
    await expect(page.getByRole('heading', { name: 'Healthcare System Transformation' })).toBeVisible()
  })
})

test.describe('Team Page', () => {
  test('lists team members from Drupal', async ({ page }) => {
    await page.goto('/team')
    await expect(page.getByText('Sarah Blackwell')).toBeVisible()
    await expect(page.getByText('James Chen')).toBeVisible()
    await expect(page.getByText('Elena Rodriguez')).toBeVisible()
  })
})

test.describe('Team Member Detail Page', () => {
  test('renders a team member detail page', async ({ page }) => {
    await page.goto('/team/sarah-blackwell')
    await expect(page.getByRole('heading', { name: 'Sarah Blackwell' })).toBeVisible()
  })
})

test.describe('Insights Page', () => {
  test('lists insights from Drupal', async ({ page }) => {
    await page.goto('/insights')
    await expect(page.getByText('How AI Is Reshaping Corporate Strategy')).toBeVisible()
    await expect(page.getByText('Building Resilient Supply Chains')).toBeVisible()
  })
})

test.describe('Insight Detail Page', () => {
  test('renders an insight detail page', async ({ page }) => {
    await page.goto('/insights/ai-driven-strategy')
    await expect(page.getByRole('heading', { name: 'How AI Is Reshaping Corporate Strategy' })).toBeVisible()
  })
})

test.describe('Static Pages', () => {
  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page.getByRole('heading', { name: 'About Meridian Consulting Group' })).toBeVisible()
  })

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.getByRole('heading', { name: 'Contact Meridian Consulting Group' })).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('navigating from homepage to services works', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: /Services/i }).first().click()
    await expect(page).toHaveURL(/\/services/)
    await expect(page.getByText('Strategy Consulting')).toBeVisible()
  })
})
