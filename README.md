# Document Receive API

A FastAPI-based API for receiving and managing documents with business authentication.

## Features

- Business registration with API key generation
- Document upload with local file storage and database persistence
- Document retrieval by account ID

## Setup

### Prerequisites

- Python 3.12+
- Poetry

### Installation

1. Install Poetry if not already installed:
   ```bash
   pip install poetry
   ```

2. Clone the repository and navigate to the project directory.

3. Install dependencies:
   ```bash
   poetry install
   ```

   To include development dependencies (for code formatting and linting):
   ```bash
   poetry install --with dev
   ```

### Running the Application

1. Activate the virtual environment:
   ```bash
   poetry shell
   ```

2. Run the FastAPI server:
   ```bash
   fastapi dev
   ```

The API will be available at `http://127.0.0.1:8000`.

## Development Dependencies

Poetry dev dependencies are tools used during development for maintaining code quality:

- **isort**: Sorts Python imports alphabetically and automatically.
- **black**: An uncompromising code formatter that ensures consistent code style.

These are installed with `poetry install --with dev` and are not required for running the application in production.

## API Endpoints

- `POST /business/register` - Register a new business
- `POST /document/upload` - Upload a document (requires API key in `x-api-key` header)
- `GET /document/{account_id}` - Get documents for an account
