-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 03, 2024 at 01:46 PM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `produit`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `number` int DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `stock` int DEFAULT '0',
  `out_of_stock` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `number`, `category`, `createdAt`, `updatedAt`, `stock`, `out_of_stock`) VALUES
(1, 'Pomme', 1.2, 50, 'Fruits', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(2, 'Banane', 0.8, 0, 'Fruits', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 100, 0),
(3, 'Orange', 1.5, 0, 'Fruits', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 80, 0),
(4, 'Fraise', 2, 20, 'Fruits', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 20, 0),
(5, 'Mangue', 1.75, 40, 'Fruits', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 40, 0),
(6, 'Carotte', 0.9, 0, 'Légumes', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0),
(7, 'Tomate', 1.3, 60, 'Légumes', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 60, 0),
(8, 'Concombre', 1, 50, 'Légumes', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 50, 0),
(9, 'Brocoli', 1.7, 0, 'Légumes', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 30, 0),
(10, 'Poivron', 1.4, 40, 'Légumes', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 0, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
