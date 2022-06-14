import { writable } from 'svelte/store';

const pledgeList = writable([{
    id: 0,
    name: 'Pledge with no reward',
    description: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    amount: 0,
    stock: null,
}, {
    id: 1,
    name: 'Bamboo Stand',
    description: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    amount: 25,
    stock: 101
}, {
    id: 2,
    name: 'Black Edition Stand',
    description: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    amount: 75,
    stock: 64
}, {
    id: 3,
    name: 'Mahogany Special Edition',
    description: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    amount: 200,
    stock: 0
}]);

export default pledgeList;
