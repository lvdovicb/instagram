-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: localhost    Database: instagram_development
-- ------------------------------------------------------
-- Server version	5.7.21

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
-- Table structure for table `Posts`
--

DROP TABLE IF EXISTS `Posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Posts` (
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  KEY `userId` (`userId`),
  CONSTRAINT `Posts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Posts`
--

LOCK TABLES `Posts` WRITE;
/*!40000 ALTER TABLE `Posts` DISABLE KEYS */;
INSERT INTO `Posts` VALUES ('Ziwjac hemikfi zij igile fam.','https://picsum.photos/201','Dem hecwem pes podis ivomo uwenitsom bu deok nuzi kom ebier suskev cu be fu leegcoz kakguru moftopce.',1,'2018-12-04 15:19:14','2018-12-04 15:19:14'),('Feojura afekej bov becer otepow omecon vahho gawizivo doset ojike zecves peke nir cuhtoklem vi wijdic.','https://picsum.photos/202','Jiide tut foho sabwec ji tazje lojino piz el podpel upegas rewfiw olotupoh iracji na nojil menok peepe.',2,'2018-12-04 15:19:14','2018-12-04 15:19:14'),('Sere imjoges soj oggic od kuolref wuizifo necop ko se gecfo fuhume hekcane sedo kip cefo dac vutagkin.','https://picsum.photos/203','Ci pi huned cegko pelde.',3,'2018-12-04 15:19:14','2018-12-04 15:19:14'),('Sim fiwlig cujero se cuhimli kin coho.','https://picsum.photos/204','Hojad peg acikecah nutuwfi su igi mior eje opore vu fupvewsuf hutub rev fehe mojompir lezom obi biccuw.',4,'2018-12-04 15:19:14','2018-12-04 15:19:14'),('Avanjo vurdu mid zikri nolo rier siscopegi hakezwi tep sipmi wo fotgo nipdil achoj gedbo ker wojvep nagof.','https://picsum.photos/205','Ros vajac wel kalcenme lual hukalat wetra gelasa mulre peaji medogdi he cizel uvidet lauvsow susgo jer pucsi.',5,'2018-12-04 15:19:14','2018-12-04 15:19:14'),('Zuku decjo fic ejogom tepec lu cijcocko ice voflifme ve arvujwof ofvarit setvi pafuj foje ovaeru tof rolomhil.','https://picsum.photos/206','At ucoeko ekerivce woas bewe nuprib do hegotun jocegaw mama.',6,'2018-12-04 15:19:14','2018-12-04 15:19:14'),('Pileje doig iwijo fosbir ivibiup mohigi ackel wuluklem ralecjus wizad laponirol jijna uditesfa dow ejuloku hize leok nuecpis.','https://picsum.photos/207','Cah refdum wobki gi zab id kav disos jeroz esalo zih kanennij rodipi vefenud uka omi eviti vuika.',7,'2018-12-04 15:19:14','2018-12-04 15:19:14'),('Uwe nego no fiw leshe obife zirjer melti cicisi ekioto daope mope jo bivme peli arguze ure delve.','https://picsum.photos/208','Jegase dodapi rento faje ge mih falip acnu uro noli dowo ad pepik fosmid evuwim ebciknow fi zer.',8,'2018-12-04 15:19:14','2018-12-04 15:19:14'),('Bolwegiv fokonocad muzeli leho cirvecug foj devzi guad newid ko hi nesjij gijone ariluc icit resim foon celrogej.','https://picsum.photos/209','Fel cokri vodajwag use kiirni reru ce ecsap vebtif senna ate mo pad.',9,'2018-12-04 15:19:14','2018-12-04 15:19:14'),('Vozji za jif fip huwoseseg res piftinnih redek fedbome nojiv dab faow sapofaav ekuohpe hag.','https://picsum.photos/210','Notohid do jinfehmig cemi empo wedtur gocafer ve to modi am anah nufes ninpaol fevzoda ge vosif jajakeli.',10,'2018-12-04 15:19:14','2018-12-04 15:19:14'),('Lotade jojka tew wun kunfolwoj jegpozow wikfenso nosres sepujsoh vo cemavo deskedo caejwek womupuvuj vijridle ekhamvir.','https://picsum.photos/211','Ibav gictiju ej tu warap cowat hi cegkahi tiomi nuptel legova pikhem lur cak ronop olaewi wojagov teama.',11,'2018-12-04 15:19:14','2018-12-04 15:19:14'),('Mefej pekitnop viewu muazout ci oregi loz ze pozeji pone ho ceku febmi tegoke rajbi kolme ira ejaig.','https://picsum.photos/212','Tu veliktaf kiwimhop notulo gowiktec hevi ekageone tokes uduvoz ruckuge libpif segfi dige ajce vi waj nocpis raddet.',12,'2018-12-04 15:19:14','2018-12-04 15:19:14'),('Ta wehuh wegvut mozitcow ecca bekorlid osiite mubegbis liwgah jejfaj sidhe talouda ji mecre eze ol sibzin ocazahon.','https://picsum.photos/213','Vi repif jajme afiab jam mor voco suvomki siestef vostop vodo afole banme.',13,'2018-12-04 15:19:14','2018-12-04 15:19:14'),('Al feje kirpespe lofiva zifbe woite awo golazena celaksip gatimza la dekvi fidogi bulja.','https://picsum.photos/214','Gawi fecojmel adgucpis jisdi lote sivcociv ohiwav ezazo fopnutec.',14,'2018-12-04 15:19:14','2018-12-04 15:19:14'),('Litolij rinake pafcegolu olimi fik hojfakcac pi ziv vekoif ba tifu ofu onuhid.','https://picsum.photos/215','Nipzaaf herowji natwowo tafim itepa gi wonefaren ji wolu mef va emfok pomrorsuj betiki avusemel orji koma egojieno.',15,'2018-12-04 15:19:14','2018-12-04 15:19:14');
/*!40000 ALTER TABLE `Posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20181203143546-create-users.js'),('20181203145003-create-posts.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'JeanDough0','jeandough0@yopmail.com','$2b$12$8IGrocAiGGayTYsezc6hH.qRt69K7gP5q6wreql0MQF4sVJ9M3SK6','2018-12-04 15:19:10','2018-12-04 15:19:10'),(2,'JeanDough1','jeandough1@yopmail.com','$2b$12$mP7DO57oVf16ISZLCynra.AyoWhwuZR44qUjlprdokHZI5HGAg0RK','2018-12-04 15:19:10','2018-12-04 15:19:10'),(3,'JeanDough2','jeandough2@yopmail.com','$2b$12$VgiFG.z9B/uMfA8xZg1eNOp71qXixP0pi/zqvz09U3yYr0NM6Yl1a','2018-12-04 15:19:10','2018-12-04 15:19:10'),(4,'JeanDough3','jeandough3@yopmail.com','$2b$12$Osh0ZNj1Y8VSV7C6D.XFZOTi7Yr0nSD5cKLghK29TlL258Keb5Pna','2018-12-04 15:19:11','2018-12-04 15:19:11'),(5,'JeanDough4','jeandough4@yopmail.com','$2b$12$sj.IVdIf4uD29.YNkgt1wO1HKs928hduvsT09n6srF4P7ci1VPGPq','2018-12-04 15:19:11','2018-12-04 15:19:11'),(6,'JeanDough5','jeandough5@yopmail.com','$2b$12$qRry/LteDnkR.gPDalH20e.eXcXesof/5ZDRVqbOf6h19CiagRDPy','2018-12-04 15:19:11','2018-12-04 15:19:11'),(7,'JeanDough6','jeandough6@yopmail.com','$2b$12$dmmwNtsnkq1VaYreQ/VBouBVBX8/zkf0eTJeYDJ10A2lG48hQzS5i','2018-12-04 15:19:12','2018-12-04 15:19:12'),(8,'JeanDough7','jeandough7@yopmail.com','$2b$12$fBDFuTSglWE6PnHwM5frG.yf2haXIFEJfrJjPN5GIRoEliNkFRHga','2018-12-04 15:19:12','2018-12-04 15:19:12'),(9,'JeanDough8','jeandough8@yopmail.com','$2b$12$gGY7GL.IaebZHMxfwLmT7O5R0NPuJ9yTtgLcDl01ObudpoDSidXrW','2018-12-04 15:19:12','2018-12-04 15:19:12'),(10,'JeanDough9','jeandough9@yopmail.com','$2b$12$K.tHSscTrtn6mI8jIUSmd.aX.T1H0FfMBJsUnZxOXYPVBaivqlW9O','2018-12-04 15:19:13','2018-12-04 15:19:13'),(11,'JeanDough10','jeandough10@yopmail.com','$2b$12$00Ee40/w.u6HAF/VhXpwxOgC1j1Eygy3X9uk3Cdil.OxmF3NhNIm6','2018-12-04 15:19:13','2018-12-04 15:19:13'),(12,'JeanDough11','jeandough11@yopmail.com','$2b$12$YjudttHMibrzpCZSicCSC.OQhhiTuYzDR3CUDhMZixlUQcZYbILQe','2018-12-04 15:19:13','2018-12-04 15:19:13'),(13,'JeanDough12','jeandough12@yopmail.com','$2b$12$gmcHFfx066lKjo0IOvq7deaixgrca7bOQlOKuajCB6W81yGSoBPqa','2018-12-04 15:19:14','2018-12-04 15:19:14'),(14,'JeanDough13','jeandough13@yopmail.com','$2b$12$9zDtIxVzdktBf2D/B2PRkOqZrrFZbQUTRXIvo.NTjA/Y/wn3S5NLS','2018-12-04 15:19:14','2018-12-04 15:19:14'),(15,'JeanDough14','jeandough14@yopmail.com','$2b$12$83O/9VeGx7L5xNml0ExNz.esXdCVQ9D2pftkI93o5cmCvv51WTsxu','2018-12-04 15:19:14','2018-12-04 15:19:14');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-04 15:21:32
