import { Task } from './../app/to-do.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  for(var task of tasks){
    console.log(task);
  }
});
