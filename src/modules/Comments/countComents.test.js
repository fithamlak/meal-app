/**
 * @jest-environment jsdom
 */

import countComments from './countComments.js';

describe('Test1', () => {
// display only empity comment section at first
  document.body.innerHTML = `
  <section class='load_comments'>
    <h2 id='comments_title'>Comments</h2>
    <div id='prev_comments'>          
      <ul id="comments_List"></ul>
    </div>
    <h5 id='error_message'></h5>
  </section>
  `;
  countComments();
  const title = document.getElementById('comments_title');
  const container = document.getElementById('comments_List');
  test('countComent should make the title as (0) Comments when there is no comment element', () => {
    expect(title.innerHTML).toStrictEqual('(0) Comments ');
  });

  test('countComent should make the title as (1) Comments when I add an element', () => {
    container.innerHTML = `
    <li>Comment</li>
    `;
    countComments();
    expect(title.innerHTML).toStrictEqual('(1) Comments ');
  });

  test('countComent should make the title as (5) Comments when I add 4 more elements', () => {
    container.innerHTML += `
    <li>Comment</li>
    <li>Comment</li>
    <li>Comment</li>
    <li>Comment</li>
      `;
    countComments();
    expect(title.innerHTML).toStrictEqual('(5) Comments ');
  });
});