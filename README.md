# IPO Board

**IPO Board** is a web application designed to provide information on Initial Public Offerings (IPOs) through a dynamic and user-friendly interface. The project features an admin panel for managing IPO data and a user-side interface to display this information in a structured table format. The app is built using modern technologies for both frontend and backend, ensuring a seamless experience.

---

## Features

### Admin Panel:
- **Add IPO:** Allows administrators to add new IPO details.
- **Update IPO:** Enables editing existing IPO details.
- **Dynamic Routing:** Secure and user-friendly navigation with a unique URL for the admin panel.

### User Panel:
- **Table View:** Displays IPO data in a clean, tabular format with fields such as:
  - Company Name
  - Category
  - Price
  - Lot Size
  - GMP
  - GMP Percentage
  - Estimated Listing
  - IPO Size
  - Open Date
  - Close Date
  - Listing Date
  - Status

---

## Tech Stack

### Frontend:
- **Vite**: Fast development environment.
- **React**: Component-based architecture.
- **Tailwind CSS**: Modern and customizable styling.
- **@nextui-org/react**: For table components and UI enhancements.

### Backend:
- **Spring Boot**: Robust and scalable backend framework.
- **MySQL**: Database to store and manage IPO data.
- **RestTemplate**: For API calls and integration.

### Tools:
- **Postman**: API testing and debugging.
- **GitHub**: Version control and collaboration.

---

## Installation and Setup

### Prerequisites:
- Node.js
- Java (JDK 11 or later)
- MySQL Database

### Steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/chinmayverma10/IPO-Board.git
   cd IPO-Board
   ```

2. **Backend Setup:**
   - Navigate to the `backend` folder.
   - Update the `application.properties` file with your MySQL credentials:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/ipo_board
     spring.datasource.username=your-username
     spring.datasource.password=your-password
     ```
   - Run the backend application:
     ```bash
     mvn spring-boot:run
     ```

3. **Frontend Setup:**
   - Navigate to the `frontend` folder.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the development server:
     ```bash
     npm run dev
     ```

4. **Access the Application:**
   - Admin Panel: [http://localhost:5173/adminhubhai](http://localhost:5173/adminhubhai)
   - User Panel: [http://localhost:5173/](http://localhost:5173/)

---

## Project Structure

```
IPO-Board/
|-- backend/
|   |-- src/main/java/com/example/IPOBoard/
|       |-- Controllers/
|       |-- Entities/
|       |-- Services/
|       |-- DAO/
|   |-- resources/
|       |-- application.properties
|
|-- frontend/
    |-- src/
        |-- components/
        |-- api/
        |-- App.jsx
        |-- main.jsx
```

---


## Future Enhancements
- Implement authentication for the admin panel.
- Add search and filter functionality on the user panel.
- Integrate real-time updates for GMP and estimated listing values.

---

## Contributing
Contributions are welcome! If you have any suggestions or improvements, feel free to fork the repository and create a pull request.




---

## Acknowledgments
- **React Documentation**: For comprehensive React guidance.
- **Spring Boot Documentation**: For backend support.
- **Tailwind CSS Documentation**: For seamless styling.

---

### Contact
For any queries or support, feel free to reach out:
- **Email**: chinmay.verma@outlook.com
- **LinkedIn**: [Chinmay Verma](https://www.linkedin.com/in/chinmaycodes/)

