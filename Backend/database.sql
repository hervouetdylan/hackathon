-- MySQL Script generated by MySQL Workbench
-- Wed Oct  4 08:57:47 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydbhackathon
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydbhackathon
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydbhackathon` DEFAULT CHARACTER SET utf8 ;
USE `mydbhackathon` ;

-- -----------------------------------------------------
-- Table `mydbhackathon`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydbhackathon`.`user` (
  `iduser` INT NOT NULL AUTO_INCREMENT,
  `pseudo` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `name` VARCHAR(45) ,
  `lastname` VARCHAR(45),
  PRIMARY KEY (`iduser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydbhackathon`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydbhackathon`.`category` (
  `idcategory` INT NOT NULL AUTO_INCREMENT,
  `name_category` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategory`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydbhackathon`.`place`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydbhackathon`.`place` (
  `idplace` INT NOT NULL AUTO_INCREMENT,
  `cardinal` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idplace`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydbhackathon`.`event`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydbhackathon`.`event` (
  `idevent` INT NOT NULL AUTO_INCREMENT,
  `name_event` VARCHAR(255) NOT NULL,
  `date` DATETIME NULL,
  `description` LONGTEXT NOT NULL,
  `image` MEDIUMTEXT NULL,
  `id_user` INT NOT NULL,
  `id_category` INT NOT NULL,
  `id_place` INT NOT NULL,
  PRIMARY KEY (`idevent`),
  INDEX `id_user_idx` (`id_user` ASC) VISIBLE,
  INDEX `id_event_category_idx` (`id_category` ASC) VISIBLE,
  INDEX `id_event_place_idx` (`id_place` ASC) VISIBLE,
  CONSTRAINT `id_user_event`
    FOREIGN KEY (`id_user`)
    REFERENCES `mydbhackathon`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_event_category`
    FOREIGN KEY (`id_category`)
    REFERENCES `mydbhackathon`.`category` (`idcategory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_event_place`
    FOREIGN KEY (`id_place`)
    REFERENCES `mydbhackathon`.`place` (`idplace`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydbhackathon`.`comment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydbhackathon`.`comment` (
  `idcomment` INT NOT NULL AUTO_INCREMENT,
  `description` LONGTEXT NOT NULL,
  `date` DATETIME NULL,
  `id_event` INT NOT NULL,
  `id_user` INT NOT NULL,
  PRIMARY KEY (`idcomment`),
  INDEX `id_user_idx` (`id_user` ASC) VISIBLE,
  INDEX `id_event_idx` (`id_event` ASC) VISIBLE,
  CONSTRAINT `id_comment_user`
    FOREIGN KEY (`id_user`)
    REFERENCES `mydbhackathon`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_comment_event`
    FOREIGN KEY (`id_event`)
    REFERENCES `mydbhackathon`.`event` (`idevent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydbhackathon`.`like`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydbhackathon`.`like` (
  `idlike` INT NOT NULL AUTO_INCREMENT,
  `nb_like` TINYINT DEFAULT(0) NOT NULL,
  `idlike_iduser` INT NOT NULL,
  `idlike_idevent` INT NOT NULL,
  PRIMARY KEY (`idlike`),
  INDEX `idLike_idUser_idx` (`idlike_iduser` ASC) VISIBLE,
  INDEX `idLike_idEvent_idx` (`idlike_idevent` ASC) VISIBLE,
  CONSTRAINT `id_like_user`
    FOREIGN KEY (`idlike_iduser`)
    REFERENCES `mydbhackathon`.`user` (`iduser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_like_event`
    FOREIGN KEY (`idlike_idevent`)
    REFERENCES `mydbhackathon`.`event` (`idevent`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



INSERT INTO `mydbhackathon`.`user` (`pseudo`,`password`,`name`,`lastname`) VALUES ("a","a","a","a");

INSERT INTO `mydbhackathon`.`place` (`cardinal`) VALUES ("Nord");
INSERT INTO `mydbhackathon`.`place` (`cardinal`) VALUES ("Sud");
INSERT INTO `mydbhackathon`.`place` (`cardinal`) VALUES ("Est");
INSERT INTO `mydbhackathon`.`place` (`cardinal`) VALUES ("Ouest");
INSERT INTO `mydbhackathon`.`category` (`name_category`) VALUES ("Soirées");
INSERT INTO `mydbhackathon`.`category` (`name_category`) VALUES ("Sport");
INSERT INTO `mydbhackathon`.`category` (`name_category`) VALUES ("Culturel");
INSERT INTO `mydbhackathon`.`event` (`name_event`,`date`,`description`,`id_user`,`id_place`,`id_category`) VALUES ("Soirée/Nord","2023-12-21 13:51","Meae optimi magis animadvertere Atratine dicendi Vellem refutaremus animadvertere id male more aliquanto adulescentis et admiratus hunc et partem licentiam ex male sum datam quidem debeo poteratis moderatur adulescentis sum.",1,1,1);
INSERT INTO `mydbhackathon`.`event` (`name_event`,`date`,`description`,`id_user`,`id_place`,`id_category`) VALUES ("Sport/Sud","2023-12-21 13:51","Meae optimi magis animadvertere Atratine dicendi Vellem refutaremus animadvertere id male more aliquanto adulescentis et admiratus hunc et partem licentiam ex male sum datam quidem debeo poteratis moderatur adulescentis sum.",1,2,2);
INSERT INTO `mydbhackathon`.`event` (`name_event`,`date`,`description`,`id_user`,`id_place`,`id_category`) VALUES ("Soirée/Est","2023-12-21 13:51","Meae optimi magis animadvertere Atratine dicendi Vellem refutaremus animadvertere id male more aliquanto adulescentis et admiratus hunc et partem licentiam ex male sum datam quidem debeo poteratis moderatur adulescentis sum.",1,3,1);
INSERT INTO `mydbhackathon`.`event` (`name_event`,`date`,`description`,`id_user`,`id_place`,`id_category`) VALUES ("Culturel/Ouest","2023-12-21 13:51","Meae optimi magis animadvertere Atratine dicendi Vellem refutaremus animadvertere id male more aliquanto adulescentis et admiratus hunc et partem licentiam ex male sum datam quidem debeo poteratis moderatur adulescentis sum.",1,4,3);

INSERT INTO `mydbhackathon`.`like` (`nb_like`,`idlike_iduser`,`idlike_idevent`) VALUES (1,1,1);
INSERT INTO `mydbhackathon`.`like` (`nb_like`,`idlike_iduser`,`idlike_idevent`) VALUES (0,1,2);
INSERT INTO `mydbhackathon`.`like` (`nb_like`,`idlike_iduser`,`idlike_idevent`) VALUES (1,1,3);