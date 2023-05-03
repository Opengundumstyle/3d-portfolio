
import { motion } from "framer-motion";


const Pagination = ({ projectsPerPage, totalProjects, paginate, currentPage }) => {

    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
      pageNumbers.push(i);
    }
    
    return (
    <div className="flex justify-center mt-10">
                <nav className="flex">
                {pageNumbers.map((number) => (
                <motion.div
                    key={number}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`${
                    currentPage === number ? "bg-secondary text-white" : "bg-white text-secondary"
                    } px-4 py-2 border rounded-l-md rounded-r-md cursor-pointer`}
                    onClick={() => paginate(number)}
                >
                    {number}
                </motion.div>
                ))}
            </nav>
      </div>
    );
  };
  
  export default Pagination;