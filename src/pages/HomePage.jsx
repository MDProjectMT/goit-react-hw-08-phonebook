const styles = {
  container: {
    minHeight: 'calc(100vh - 600px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(94, 79, 70, 0.1)',
    boxShadow: 'rgba(94, 79, 70, 0.2) 0px 4px 15px 4px',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    color: 'rgb(94, 79, 70)',
    textAlign: 'center',
    fontFamily: `'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS',
    sans-serif`,
  },
  svg: {
    padding: '5px',
  },
  titlesmall: {
    fontWeight: 500,
    margin: 0,
    fontSize: 24,
    color: '#edede5',
    textAlign: 'center',
    fontFamily: `'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS',
    sans-serif`,
    paddingTop: '20px',
  },
  container2: {
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '40px',
    gap: '10px',
  },
  container3: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    border: '0.2px solid #2a363b',
    borderRadius: '4px',
    backgroundColor: 'rgba(94, 79, 70, 0.5)',
    boxShadow: 'rgba(94, 79, 70, 1) 0px 0px 10px 0px',
    minHeight: '230px',
  },
  list: {
    fontWeight: 400,
    fontSize: 18,
    color: 'rgb(94, 79, 70)',
    fontFamily: `'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS',
    sans-serif`,
    padding: '20px',
    margin: 0,
    lineHeight: '1.5',
  },
};

export default function Home() {
  return (
    <div>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Welcome to Your Ultimate Contacts Manager!
          <div>
            <svg
              style={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              height="64px"
              viewBox="0 -960 960 960"
              width="64px"
              fill="rgb(94, 79, 70)"
            >
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
            </svg>
            <svg
              style={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              height="64px"
              viewBox="0 -960 960 960"
              width="64px"
              fill="rgb(94, 79, 70)"
            >
              <path d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z" />
            </svg>
            <svg
              style={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              height="64px"
              viewBox="0 -960 960 960"
              width="64px"
              fill="rgb(94, 79, 70)"
            >
              <path d="M702-480 560-622l57-56 85 85 170-170 56 57-226 226Zm-342 0q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 260Zm0-340Z" />
            </svg>
            <svg
              style={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              height="64px"
              viewBox="0 -960 960 960"
              width="64px"
              fill="rgb(94, 79, 70)"
            >
              <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
            </svg>
          </div>
        </h1>
        <div style={styles.container2}>
          <div style={styles.container3}>
            <h2 style={styles.titlesmall}>
              Keep your contacts organized and easily accessible with our
              intuitive Contacts Manager.
            </h2>
            <p style={styles.list}>
              Keep your contacts organized and easily accessible with our
              intuitive Contacts Manager. Whether you're managing personal
              connections, professional networks, or both, our app is designed
              to make your life easier. Our Contacts Manager offers a seamless
              experience, allowing you to store, view, and manage all your
              contacts in one convenient place. No more scattered information or
              lost phone numbers - everything you need is right at your
              fingertips.
            </p>
          </div>
          <div style={styles.container3}>
            <h2 style={styles.titlesmall}>Features:</h2>
            <ul style={styles.list}>
              <li>
                <b>Secure Login:</b> Your data is safe and accessible only to
                you.
              </li>
              <li>
                <b>Easy Contact Addition:</b> Quickly add new contacts with
                their names and phone numbers.
              </li>
              <li>
                <b>Effortless Management:</b> Delete contacts with just a
                clicks.
              </li>
              <li>
                <b>User-Friendly Interface:</b> Navigate with ease through a
                clean and intuitive design.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
