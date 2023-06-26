import crystalOneMin from '../../images/crystal-one-min.webp';
import crystalTwo from '../../images/crystal-two.png';
import html from '../../images/html.png';
import css from '../../images/css.png';
import typescript from '../../images/typescript.png';
import reactjs from '../../images/reactjs.png';
import javaIcon from '../../images/java-icon.png';
import springBoot from '../../images/spring-boot.png';
import nodejs from '../../images/nodejs.png';
import express from '../../images/express.png';
import expo from '../../images/expo.png';
import androidIos from '../../images/android-ios.png';
import appstore from '../../images/appstore.png';
import playstore from '../../images/playstore.png';
import mongo from '../../images/mongo.jpeg';
import mysql from '../../images/mysql.png';
import postgres from '../../images/postgres.png';
import firebaseRealtime from '../../images/firebase-realtm.png';
import docker from '../../images/docker.png';
import nginx from '../../images/nginx.webp';
import cpanel from '../../images/cpanel.png';
import awsEC2 from '../../images/aws-ec2.png';
import redis from '../../images/redis.png';
import openai from '../../images/openai.png';
import firebase from '../../images/firebase.png';
import googleMap from '../../images/google-map.png';
import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';
import mobile1 from '../../images/mobile1.jpg';
import mobile2 from '../../images/mobile2.jpg';
import mobile3 from '../../images/mobile3.jpg';
import mobile4 from '../../images/mobile4.jpg';
import contactCover from '../../images/contact-cover.png';
import contactCoverMask from '../../images/contact-cover-mask.png';

const images = {
    'crystal-one-min.webp': crystalOneMin,
    'crystal-two.png': crystalTwo,
    'html.png': html,
    'css.png': css,
    'typescript.png': typescript,
    'reactjs.png': reactjs,
    'java-icon.png': javaIcon,
    'spring-boot.png': springBoot,
    'nodejs.png': nodejs,
    'express.png': express,
    'expo.png': expo,
    'android-ios.png': androidIos,
    'appstore.png': appstore,
    'playstore.png': playstore,
    'mongo.jpeg': mongo,
    'mysql.png': mysql,
    'postgres.png': postgres,
    'firebase-realtm.png': firebaseRealtime,
    'docker.png': docker,
    'nginx.webp': nginx,
    'cpanel.png': cpanel,
    'aws-ec2.png': awsEC2,
    'redis.png': redis,
    'openai.png': openai,
    'firebase.png': firebase,
    'google-map.png': googleMap,
    'project1.png': project1,
    'project2.png': project2,
    'project3.png': project3,
    'mobile1.jpg': mobile1,
    'mobile2.jpg': mobile2,
    'mobile3.jpg': mobile3,
    'mobile4.jpg': mobile4,
    'contact-cover.png': contactCover,
    'contact-cover-mask.png': contactCoverMask,
};



export const getImage = (image: string) => {
    //@ts-ignore
    return images[image]
    // return `https://firebasestorage.googleapis.com/v0/b/edsin-portfolio.appspot.com/o/portfolio_images%2F${image}?alt=media`
}