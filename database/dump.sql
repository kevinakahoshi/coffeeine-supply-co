-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: wickedSales
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `productId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int(11) NOT NULL,
  `image` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shortDescription` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `longDescription` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Shake Weight',2999,'/images/shake-weight.jpg','Dynamic Inertia technology ignites muscles in arms, shoulders, and chest.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'),(2,'ShamWow',2595,'/images/shamwow.jpg','It\'s like a chamois, towel, and sponge, all in one! Soaks up to 10x it\'s weight in any liquid!','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel orci porta non. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Imperdiet proin fermentum leo vel orci porta. Massa tincidunt dui ut ornare. Fusce id velit ut tortor pretium viverra suspendisse potenti nullam. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Nec nam aliquam sem et tortor consequat. Pulvinar sapien et ligula ullamcorper malesuada proin. Lectus mauris ultrices eros in cursus turpis. Faucibus purus in massa tempor nec. Morbi tristique senectus et netus et malesuada fames ac turpis. Ut morbi tincidunt augue interdum velit euismod.\r\n\r\n'),(3,'Snuggie',2900,'/images/snuggie.jpg','Super-Soft Fleece with pockets! One Size fits all Adults! Keeps you Warm & Your Hands-Free!','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel turpis nunc eget lorem dolor sed. Tempor nec feugiat nisl pretium fusce id velit. Tortor id aliquet lectus proin nibh nisl. Ipsum dolor sit amet consectetur adipiscing. Adipiscing elit duis tristique sollicitudin nibh sit amet. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Dictum fusce ut placerat orci. Id diam vel quam elementum pulvinar etiam non quam. Placerat in egestas erat imperdiet sed. Vitae aliquet nec ullamcorper sit amet risus. Congue quisque egestas diam in arcu cursus euismod quis viverra. Malesuada proin libero nunc consequat interdum varius sit amet. Egestas maecenas pharetra convallis posuere morbi leo urna molestie.\r\n\r\n'),(4,'Wax Vac',999,'/images/wax-vac.jpg','Gentle way to remove ear wax. Safe and hygienic. Reduces the risk of painful infections.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ligula ullamcorper malesuada proin. Consequat id porta nibh venenatis cras sed. Eget dolor morbi non arcu. Felis eget velit aliquet sagittis id consectetur purus. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. Tortor id aliquet lectus proin nibh nisl. Sem integer vitae justo eget magna fermentum iaculis. Arcu vitae elementum curabitur vitae nunc. Lacinia at quis risus sed vulputate odio ut enim. Dignissim cras tincidunt lobortis feugiat vivamus at augue. Sapien eget mi proin sed. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.\r\n\r\n'),(5,'Ostrich Pillow',9900,'/images/ostrich-pillow.jpg','Create your own snugly space in the world and feel-good anywhere with the ultimate cocoon pillow.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque vitae tempus quam pellentesque nec. Massa massa ultricies mi quis hendrerit dolor magna eget. Aliquam sem fringilla ut morbi tincidunt augue interdum. Vel risus commodo viverra maecenas accumsan lacus. Blandit aliquam etiam erat velit. Et tortor consequat id porta nibh venenatis cras. Donec adipiscing tristique risus nec feugiat in fermentum. Odio morbi quis commodo odio aenean. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Facilisis volutpat est velit egestas dui. Lobortis mattis aliquam faucibus purus. Mollis aliquam ut porttitor leo a. Urna nunc id cursus metus.\r\n\r\n'),(6,'Tater Mitts',830,'/images/tater-mitts.jpg','8 Seconds is All You Need with Tater Mitts Quickly and easily prepare all your favorite potato dishes with Tater Mitts.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Mauris in aliquam sem fringilla ut morbi tincidunt augue. In mollis nunc sed id semper risus. Non blandit massa enim nec dui. Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Urna nec tincidunt praesent semper feugiat nibh. Tincidunt vitae semper quis lectus nulla at. Tincidunt vitae semper quis lectus nulla at volutpat diam. Et malesuada fames ac turpis egestas sed. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Eros donec ac odio tempor orci dapibus ultrices in. Aliquam sem fringilla ut morbi tincidunt augue interdum.\r\n\r\n');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-18 23:25:48
