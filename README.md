# Ngrane Villas

A modern, user-friendly web application for browsing and booking villas. This project provides a seamless interface to search villas by destination, date range, and guest count, and displays available villas on an interactive mini map.

## Features

- **Search Villas** by destination, arrival & departure dates, and number of guests.
- **Dynamic Routing** with Next.js App Router.
- **Mini Map Integration** to display villa locations with pins.
- **Responsive Design** suitable for mobile and desktop.
- Handles **Unavailable Dates** for accurate villa availability.
- Clean, modular React components built with TypeScript.

## Technologies Used

- **Next.js 13+** (App Router)
- **React 18+**
- **TypeScript**
- **React Leaflet** for interactive maps
- **CSS Modules** or Tailwind CSS (if used)
- Other dependencies as specified in `package.json`

## Getting Started

### Prerequisites

- Node.js (>=16.x recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Shashithushani/ngrane-villas.git
   cd ngrane-villas
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to see the app.

## Project Structure

```plaintext
/app              # Next.js app directory with pages and components
/components       # Reusable UI components
/public           # Static assets like images
/styles           # Global and component-level styles
```

## Usage

- Use the search form to enter destination, arrival, departure, and guest count.
- View villas matching your criteria.
- Click on a villa to view details and location on the map.

## Deployment

You can deploy this app easily on Vercel or any other Next.js-compatible hosting platform.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

[MIT License](LICENSE)
