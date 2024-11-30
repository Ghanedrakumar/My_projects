# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



  <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username} // Set input value from state
            onChange={(e) => setUsername(e.target.value)} // Update state on change
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <div key={item.name} className="box">
          <p><span>word:</span>{item.word}
          </p>
        </div>