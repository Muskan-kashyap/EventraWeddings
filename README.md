# 💍 Eventra Weddings - The Premier Wedding & Event Services Platform for Bihar==>https://eventra-weddings.vercel.app/
==>Write Dashboard to see changes

Eventra Weddings is a comprehensive, full-stack ready web platform designed to connect customers with local wedding and event service vendors (Venues, Decorators, Photographers, etc.) specifically within the Bihar region.

This repository contains the complete **frontend architecture** built using **React** and **Custom CSS**, structured for seamless integration with any modern backend technology (e.g., Node.js/Express, Django, Firebase).

## ✨ Key Features & Functionality

The application is split into three main applications, all built within a single React project, managed via **React Router**.

| Application Layer | Core Functions |
| :--- | :--- |
| **Customer Site** | Landing Page (Search/Hero), Vendor Listing with Filters, Vendor Detail Page, Checkout Flow. |
| **Vendor Dashboard** | Vendor Login, Dashboard Home (KPIs/Charts), Profile Management (Edit services/photos), Bookings List, Payment Status. |
| **Admin Panel** | Admin Login, Platform Summary, Manage Vendors (Approval Queue), Manage Customers List. |

## 🚀 Technology Stack

* **Frontend Framework:** **React.js** (Functional Components & Hooks)
* **Routing:** **React Router DOM** (Multi-page application handling)
* **Styling:** **Custom CSS** (No external frameworks like Bootstrap/Tailwind CSS)
* **Design Theme:** **"Royal Mithila" Palette** (Deep Crimson, Gold, and Royal Purple)
* **Build Tool:** **Vite** (Initial setup detected via `vite.config.js`)
* **Package Manager:** **Bun** (Used for dependency management)

## ⚙️ Architecture & Backend Readiness

The entire project is designed following the **Separation of Concerns principle**:

* **State Management:** Local component state (`useState`) handles all UI logic and form data capture.
* **Service Layer Pattern:** All data (Vendors, Bookings, Customers) is currently sourced from **mock data** files (`/src/Services/mockData.js`).
* **API Ready:** All components are structured to swap the mock service calls with real **`fetch`** or **`axios`** API calls when the backend is connected, requiring **zero change** to the UI components.

## 📦 Getting Started (Local Setup)

To run this project locally, you need to have Node.js and Bun installed.

1.  **Clone the Repository:**
    ```bash
    git clone 
    cd Eventra-Weddings-Frontend 
    ```

2.  **Install Dependencies using Bun:**
    ```bash
    bun install
    ```

3.  **Start the Development Server:**
    ```bash
    bun run dev
    # The application will open at http://localhost:[PORT]
    ```

## 🔗 Key Routes for Development

Use these paths to test different sections of the application:

| Section | Route |
| :--- | :--- |
| **Customer Home** | `/` |
| **Vendor Listings** | `/vendors` |
| **Vendor Dashboard** | `/vendor/dashboard` |
| **Admin Panel** | `/admin/dashboard` |
| **Login Page** | `/login` |

---
*Developed by Muskan*




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
