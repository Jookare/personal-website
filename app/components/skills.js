

const skillstyle = `
flex flex-col aspect-square w-full 
bg-accent rounded-xl transition-all 
duration-200 hover:scale-105 cursor-pointer 
items-center justify-center text-zinc-400 `

const Skills = () => {

    return (
        <div className="font-sans max-w-[650px] gap-4 flex flex-col">

            <h1 className="text-2xl font-semibold">Skills</h1>

            <div className=" bg-[#141414] w-[650px]">
                <div className="grid grid-cols-3 gap-4">
                    <div className={`${skillstyle} hover:grayscale-0`}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-14 p-1"
                            viewBox="0 0 48 48">
                            <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
                        </svg>
                        <p>Python</p>
                    </div>

                    <div className={`${skillstyle} hover:grayscale-0`}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-14 p-1"
                            viewBox="0 0 100 100">
                            <path fill="#00a6a6" d="M43.337,54.522l-12.63-10.826c0,0,1.804-2.707,4.511-5.413c2.707-2.707,4.937-3.342,8.12-5.413 C49.672,28.748,55.13,11,63.25,11L45.56,49.672L43.337,54.522z"></path><path fill="#472b29" d="M43.337,55.522c-0.236,0-0.468-0.084-0.65-0.241L30.056,44.455 c-0.385-0.329-0.462-0.893-0.182-1.314c0.076-0.114,1.892-2.821,4.637-5.565c1.9-1.901,3.607-2.85,5.415-3.854 c0.9-0.5,1.831-1.017,2.865-1.69c2.383-1.55,4.727-5.332,7.208-9.335C53.867,16.454,57.867,10,63.25,10 c0.341,0,0.657,0.173,0.842,0.459c0.184,0.287,0.209,0.647,0.067,0.957L44.246,54.938c-0.131,0.286-0.388,0.493-0.694,0.56 C43.48,55.514,43.408,55.522,43.337,55.522z M32.049,43.53l10.932,9.37l18.57-40.588c-3.567,1.298-6.755,6.442-9.852,11.438 c-2.603,4.199-5.061,8.165-7.817,9.958c-1.093,0.711-2.055,1.246-2.984,1.762c-1.755,0.975-3.27,1.816-4.973,3.52 C34.146,40.769,32.755,42.565,32.049,43.53z"></path><polygon fill="#78ccd3" points="24.875,65.125 7,52.875 30.707,43.696 43.837,53.556 30.707,63.663"></polygon><path fill="#472b29" d="M24.875,66.125c-0.2,0-0.397-0.06-0.565-0.175L6.435,53.7c-0.306-0.209-0.471-0.572-0.428-0.94 c0.043-0.369,0.286-0.683,0.632-0.817l23.706-9.179c0.322-0.124,0.685-0.074,0.962,0.133l13.131,9.861 c0.25,0.188,0.397,0.481,0.399,0.794s-0.143,0.608-0.39,0.798L31.316,64.455c-0.109,0.083-0.234,0.144-0.367,0.177l-5.831,1.462 C25.038,66.115,24.956,66.125,24.875,66.125z M9.13,53.123l15.938,10.923l5.192-1.302l11.924-9.177L30.55,44.829L9.13,53.123z"></path><path fill="#f5905f" d="M91.375,73.25c-1.228-4.297-3.802-12.846-7.02-22.256v16.652 C88.326,70.459,91.375,73.25,91.375,73.25z"></path><path fill="#f69d4a" d="M84.355,67.647V50.994c-2.446-7.154-5.264-14.803-8.145-21.463v33.441 C78.935,64.065,81.83,65.859,84.355,67.647z"></path><path fill="#f8a936" d="M76.21,29.531c-2.747-6.351-5.551-11.8-8.145-15.057v48.417c0.801-0.441,1.655-0.755,2.587-0.903 c1.609-0.254,3.536,0.172,5.558,0.983V29.531z"></path><path fill="#f9b621" d="M63.5,11.25c-1.289,0-2.665,1.268-4.089,3.345v58.734c2.926-4.46,5.316-8.601,8.654-10.438V14.474 C66.438,12.433,64.895,11.25,63.5,11.25z"></path><path fill="#e3a12e" d="M50.757,32.987v50.462c0.767-0.594,1.554-1.267,2.348-2.052c2.533-2.505,4.519-5.344,6.306-8.067 V14.595C56.625,18.658,53.651,25.854,50.757,32.987z"></path><path fill="#cd8c3b" d="M42.638,50.849c-0.174,0.268-0.354,0.531-0.536,0.792v27.447c1.136,4.392,1.148,8.162,1.148,8.162 s3.435-0.649,7.507-3.801V32.987C47.883,40.07,45.088,47.077,42.638,50.849z"></path><path fill="#b77748" d="M26.75,64.571v0.731c1.822,0.019,4.902,0.352,7.815,2.1c4.264,2.558,6.432,7.416,7.537,11.686 V51.641C37.323,58.495,29.982,62.873,26.75,64.571z"></path><path fill="#472b29" d="M43,88c-0.23,0-0.457-0.08-0.638-0.23c-0.229-0.189-0.361-0.471-0.362-0.767	c0-0.141-0.141-14.159-8.199-18.993c-4.158-2.495-8.744-1.9-8.789-1.894c-0.48,0.066-0.961-0.238-1.099-0.717	c-0.136-0.479,0.102-0.986,0.557-1.188c0.111-0.049,11.141-5.013,17.079-14.156c2.281-3.511,4.873-9.905,7.618-16.675	C55.064,18.833,58.955,10,63.25,10c10.61,0,27.002,56.305,28.837,62.725c0.122,0.431-0.056,0.89-0.436,1.125	c-0.383,0.235-0.872,0.189-1.202-0.113c-3.667-3.357-14.399-11.88-19.891-11.01c-3.902,0.617-6.5,4.633-9.508,9.283	c-2.052,3.172-4.378,6.767-7.493,9.848c-5.166,5.108-10.164,6.086-10.375,6.125C43.122,87.995,43.062,88,43,88z M28.775,64.215	c1.787,0.246,3.956,0.821,6.055,2.08c7.568,4.54,8.891,15.576,9.121,19.396c1.657-0.564,4.901-1.993,8.2-5.255	c2.961-2.928,5.224-6.426,7.221-9.512c3.268-5.052,6.09-9.415,10.874-10.172c5.679-0.903,14.604,5.702,18.981,9.299	C82.231,46.33,69.801,12,63.25,12c-3.258,0-8.443,12.791-12.229,22.131c-2.782,6.861-5.409,13.341-7.794,17.013	C39.056,57.565,32.702,61.942,28.775,64.215z"></path><g><path fill="#fff" d="M57.765,25.75c1.254-2.858,2.54-5.592,3.697-7.625"></path><path fill="#472b29" d="M57.765,26.25c-0.067,0-0.136-0.014-0.201-0.042c-0.253-0.111-0.367-0.406-0.257-0.659 c1.458-3.323,2.675-5.833,3.721-7.671c0.136-0.24,0.441-0.325,0.682-0.188c0.24,0.136,0.324,0.442,0.188,0.682 c-1.028,1.809-2.23,4.288-3.674,7.579C58.141,26.138,57.957,26.25,57.765,26.25z"></path></g><g><path fill="#fff" d="M56.213,29.375c0.139-0.332,0.28-0.666,0.421-1"></path><path fill="#472b29" d="M56.213,29.875c-0.064,0-0.131-0.013-0.193-0.039c-0.255-0.107-0.375-0.4-0.268-0.655l0.423-1.001 c0.107-0.255,0.4-0.372,0.655-0.266c0.254,0.108,0.373,0.401,0.265,0.655l-0.421,0.999C56.594,29.76,56.408,29.875,56.213,29.875z"></path></g><path fill="#472b29" d="M46.432,81.686c-0.069,0-0.139-0.014-0.204-0.043c-0.152-0.068-0.261-0.208-0.289-0.373	c-0.974-5.706-3.469-13.307-9.822-17.119c-0.249-0.149-0.499-0.291-0.748-0.424c-0.151-0.081-0.25-0.232-0.264-0.403	c-0.013-0.17,0.063-0.336,0.199-0.438c4.226-3.158,7.597-6.65,10.02-10.38c2.516-3.874,5.186-10.461,8.014-17.436	c0.403-0.997,0.824-2.014,1.282-3.123l0.419-1.013c0.104-0.255,0.397-0.374,0.652-0.271c0.256,0.105,0.377,0.398,0.271,0.653	l-0.418,1.013c-0.458,1.107-0.878,2.123-1.281,3.117c-2.846,7.02-5.533,13.65-8.102,17.604c-2.368,3.647-5.612,7.067-9.648,10.173	c0.039,0.023,0.078,0.046,0.117,0.07c6.401,3.84,9.062,11.245,10.16,17.059c1.012-0.693,1.984-1.5,2.9-2.406	c1.135-1.122,2.248-2.428,3.405-3.994c0.166-0.222,0.479-0.268,0.699-0.104c0.223,0.164,0.27,0.477,0.105,0.699	c-1.188,1.607-2.335,2.952-3.507,4.11c-1.154,1.142-2.397,2.135-3.695,2.952C46.617,81.66,46.524,81.686,46.432,81.686z"></path><g><path fill="#fff" d="M58.186,67.25c-0.445,0.671-0.888,1.355-1.334,2.044"></path><path fill="#472b29" d="M56.853,69.794c-0.094,0-0.188-0.026-0.271-0.08c-0.231-0.15-0.298-0.459-0.148-0.691 c0.446-0.691,0.89-1.376,1.338-2.049c0.152-0.231,0.463-0.292,0.693-0.14c0.229,0.153,0.292,0.463,0.139,0.693 c-0.444,0.669-0.886,1.352-1.33,2.039C57.177,69.713,57.016,69.794,56.853,69.794z"></path></g><path fill="#472b29" d="M59.651,65.625c-0.102,0-0.204-0.031-0.293-0.095c-0.224-0.162-0.274-0.475-0.112-0.698	c2.378-3.286,5.479-6.751,10.453-7.537c3.479-0.555,7.833,0.723,13.106,3.852c-2.395-7.483-4.786-14.379-7.116-20.514	c-1.432-3.77-2.826-7.213-4.146-10.234c-0.11-0.253,0.005-0.548,0.258-0.658c0.254-0.111,0.548,0.004,0.658,0.258	c1.327,3.036,2.729,6.495,4.166,10.279c2.468,6.5,5.005,13.849,7.541,21.843c0.063,0.2-0.005,0.418-0.171,0.547	s-0.395,0.14-0.571,0.028c-5.565-3.497-10.081-4.964-13.568-4.413c-4.612,0.729-7.542,4.017-9.799,7.136	C59.959,65.553,59.806,65.625,59.651,65.625z"></path><g><line x1="14.875" x2="25.375" y1="53.25" y2="60.625" fill="#fff"></line><path fill="#472b29" d="M25.375,61.125c-0.1,0-0.2-0.029-0.287-0.091l-10.5-7.375c-0.227-0.159-0.281-0.471-0.122-0.697 s0.472-0.28,0.696-0.122l10.5,7.375c0.227,0.159,0.281,0.471,0.122,0.697C25.687,61.051,25.532,61.125,25.375,61.125z"></path></g>
                        </svg>
                        <p>Matlab</p>
                    </div>

                    <div className={`${skillstyle}`}>
                        <svg role="img"
                            fill="#181717"
                            className="h-14 p-1"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>GitHub</title>
                            <path fill="#181717" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
                        <p>Github</p>
                    </div>
                    <div className={`${skillstyle} `}>
                        <svg role="img"
                            viewBox="0 0 24 24"
                            fill="#EE4C2C"
                            className=" h-14 p-1 "
                            xmlns="http://www.w3.org/2000/svg">
                            <title>PyTorch</title>
                            <path d="M12.005 0L4.952 7.053a9.865 9.865 0 000 14.022 9.866 9.866 0 0014.022 0c3.984-3.9 3.986-10.205.085-14.023l-1.744 1.743c2.904 2.905 2.904 7.634 0 10.538s-7.634 2.904-10.538 0-2.904-7.634 0-10.538l4.647-4.646.582-.665zm3.568 3.899a1.327 1.327 0 00-1.327 1.327 1.327 1.327 0 001.327 1.328A1.327 1.327 0 0016.9 5.226 1.327 1.327 0 0015.573 3.9z" />
                        </svg>
                        <p>PyTorch</p>
                    </div>
                    <div className={`${skillstyle}`}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-14 p-1 "
                            viewBox="0 0 48 48">
                            <path fill="#80deea" d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"></path><path fill="#80deea" d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"></path><path fill="#80deea" d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"></path><circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                        </svg>
                        <p>React</p>
                    </div>
                    <div className={skillstyle}>
                        <svg role="img" fill="#06B6D4"
                            className="h-14 p-1 "
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>Tailwind CSS</title>
                            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" /></svg>

                        <p>Tailwind CSS</p>
                    </div>
                    <div className={skillstyle}>
                        <svg role="img" fill="#76B900"
                            className="h-14 p-1 "
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>NVIDIA</title><path d="M8.948 8.798v-1.43a6.7 6.7 0 0 1 .424-.018c3.922-.124 6.493 3.374 6.493 3.374s-2.774 3.851-5.75 3.851c-.398 0-.787-.062-1.158-.185v-4.346c1.528.185 1.837.857 2.747 2.385l2.04-1.714s-1.492-1.952-4-1.952a6.016 6.016 0 0 0-.796.035m0-4.735v2.138l.424-.027c5.45-.185 9.01 4.47 9.01 4.47s-4.08 4.964-8.33 4.964c-.37 0-.733-.035-1.095-.097v1.325c.3.035.61.062.91.062 3.957 0 6.82-2.023 9.593-4.408.459.371 2.34 1.263 2.73 1.652-2.633 2.208-8.772 3.984-12.253 3.984-.335 0-.653-.018-.971-.053v1.864H24V4.063zm0 10.326v1.131c-3.657-.654-4.673-4.46-4.673-4.46s1.758-1.944 4.673-2.262v1.237H8.94c-1.528-.186-2.73 1.245-2.73 1.245s.68 2.412 2.739 3.11M2.456 10.9s2.164-3.197 6.5-3.533V6.201C4.153 6.59 0 10.653 0 10.653s2.35 6.802 8.948 7.42v-1.237c-4.84-.6-6.492-5.936-6.492-5.936z" /></svg>

                        <p>CUDA</p>
                    </div>
                    <div className={skillstyle}>
                        <svg role="img" fill="#00599C"
                            className="h-14 p-1 "
                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>C++</title><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" /></svg>

                        <p>C++</p>
                    </div>
                    <div className={skillstyle}>
                        <svg role="img"
                            fill="#000"
                            className="h-14 p-1 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title>Linux</title>
                            <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z" />
                        </svg>
                        <p>Linux</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Skills;