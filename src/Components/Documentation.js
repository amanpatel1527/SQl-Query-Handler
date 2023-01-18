import React from 'react';

function Documentation() {
  return (
      <div className='m-5' >
    <h1 className='text-red text-center my-5'>SQL Commands Docs</h1>          
    <div className="accordion" id="accordionExample">

    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Data Definition Language (DDL)
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <h3 className="h3">1. Data Definition Language (DDL)</h3>
<ul >
<li>DDL changes the structure of the table like creating a table, deleting a table, altering a table, etc.</li>
<li>All the command of DDL are auto-committed that means it permanently save all the changes in the database.</li>
</ul>
<p>Here are some commands that come under DDL:</p>
<ul >
<li>CREATE</li>
<li>ALTER</li>
<li>DROP</li>
<li>TRUNCATE</li>
</ul>
<p><strong>a. CREATE</strong> It is used to create a new table in the database.</p>
<p><strong>Syntax:</strong></p>
<div className="my-1 p-1"><textarea className="w-75 p-1" disabled  value="CREATE TABLE TABLE_NAME (COLUMN_NAME DATATYPES[,....]);" /></div>
<p><strong>Example:</strong></p>
<div className="my-1 p-1"><textarea disabled className="w-75 p-1"   value="ALTER TABLE STU_DETAILS ADD(ADDRESS VARCHAR2(20));
ALTER TABLE STU_DETAILS MODIFY (NAME VARCHAR2(20));" /></div>
<p><strong>d. TRUNCATE:</strong> It is used to delete all the rows from the table and free the space containing the table.</p>
<p><strong>Syntax:</strong></p>
<div className="my-1 p-1"><textarea className="w-75 p-1" disabled  value="TRUNCATE TABLE table_name;" /></div>
<p><strong>Example:</strong></p>
<div className="my-1 p-1"><textarea className="w-75 p-1" disabled  value="TRUNCATE TABLE EMPLOYEE;" /></div>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Data Manipulation Language (DML)
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        <h3 className="h3">2. Data Manipulation Language</h3>
<ul >
<li>DML commands are used to modify the database. It is responsible for all form of changes in the database.</li>
<li>The command of DML is not auto-committed that means it can't permanently save all the changes in the database. They can be rollback.</li>
</ul>
<p>Here are some commands that come under DML: </p>
<ul >
<li>INSERT</li>
<li>UPDATE</li>
<li>DELETE</li>
</ul>
<p><strong>a. INSERT:</strong> The INSERT statement is a SQL query. It is used to insert data into the row of a table.</p>
<p><strong>Syntax:</strong></p>
<div ><textarea disabled className="w-75 p-1" value="INSERT INTO TABLE_NAME  
(col1, col2, col3,.... col N)
VALUES (value1, value2, value3, .... valueN);" />
</div>
<p>Or</p>
<div ><textarea disabled className="w-75 p-1" value="INSERT INTO TABLE_NAME  
VALUES (value1, value2, value3, .... valueN);" />
</div>
<p><strong>For example:</strong></p>
<div ><textarea disabled className="w-75 p-1" value="INSERT INTO javatpoint (Author, Subject) VALUES ('Sonoo', 'DBMS');" /> 
</div>
<p><strong>b. UPDATE:</strong> This command is used to update or modify the value of a column in the table.</p>
<p><strong>Syntax:</strong></p>
<div ><textarea disabled className="w-75 p-1" value='UPDATE table_name SET [column_name1= value1,...column_nameN = valueN] [WHERE CONDITION] ' />
</div>
<p><strong>For example:</strong></p>
<div ><textarea disabled className="w-75 p-1" value="UPDATE students  
SET User_Name = 'Sonoo'  
WHERE Student_Id = '3'" />
</div>
<p><strong>c. DELETE:</strong> It is used to remove one or more row from a table.</p>
<p><strong>Syntax:</strong></p>
<div ><textarea disabled className="w-75 p-1" value='
DELETE FROM table_name [WHERE condition];' />
</div>
<p><strong>For example:</strong></p>
<div ><textarea disabled className="w-75 p-1"
value='DELETE FROM javatpoint
WHERE Author="Sonoo";' />
</div>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Data Control Language (DCL)
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        <h3 className="h3">3. Data Control Language</h3>
<p>DCL commands are used to grant and take back authority from any database user.</p>
<p>Here are some commands that come under DCL:</p>
<ul >
<li>Grant</li>
<li>Revoke</li>
</ul>
<p><strong>a. Grant:</strong> It is used to give user access privileges to a database.</p>
<p><strong>Example</strong></p>
<div className="my-1 p-1"><textarea disabled className="w-75 p-1" value='GRANT SELECT, UPDATE ON MY_TABLE TO SOME_USER, ANOTHER_USER;' />
</div>
<p><strong>b. Revoke:</strong> It is used to take back permissions from the user.</p>
<p><strong>Example</strong></p>
<div className="my-1 p-1"><textarea disabled className="w-75 p-1" value='REVOKE SELECT, UPDATE ON MY_TABLE FROM USER1, USER2;' />
</div>  
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingFour">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
          Transaction Control Language (TCL)
        </button>
      </h2>
      <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        <h3 className="h3">4. Transaction Control Language</h3>
<p>TCL commands can only use with DML commands like INSERT, DELETE and UPDATE only.</p>
<p>These operations are automatically committed in the database that's why they cannot be used while creating tables or dropping them.</p>
<p>Here are some commands that come under TCL:</p>
<ul >
<li>COMMIT</li>
<li>ROLLBACK</li>
<li>SAVEPOINT</li>
</ul>
<p><strong>a. Commit:</strong> Commit command is used to save all the transactions to the database.</p>
<p><strong>Syntax:</strong></p>
<div className="my-1 p-1"><textarea disabled className="w-75 p-1" value='COMMIT;' />
</div>
<p><strong>Example:</strong></p>
<div className="my-1 p-1"><textarea disabled className="w-75 p-1" value='DELETE FROM CUSTOMERS
WHERE AGE = 25;
COMMIT;' />
</div>
<p><strong>b. Rollback:</strong> Rollback command is used to undo transactions that have not already been saved to the database.</p>
<p><strong>Syntax:</strong></p>
<div className="my-1 p-1"><textarea disabled className="w-75 p-1" value='ROLLBACK;' />
</div>
<p><strong>Example:</strong></p>
<div className="my-1 p-1"><textarea disabled className="w-75 p-1" value='DELETE FROM CUSTOMERS
WHERE AGE = 25;
ROLLBACK;' />
</div>
<p><strong>c. SAVEPOINT:</strong> It is used to roll the transaction back to a certain point without rolling back the entire transaction.</p>
<p><strong>Syntax:</strong></p>
<div className="my-1 p-1"><textarea disabled className="w-75 p-1" value='SAVEPOINT SAVEPOINT_NAME;' />
</div>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingFive">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
          Data Query Language (DQL)
        </button>
      </h2>
      <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        <h3 className="h3">5. Data Query Language </h3>
<p>DQL is used to fetch the data from the database. </p>
<p>It uses only one command:</p>
<ul >
<li>SELECT</li>
</ul>
<p><strong>a. SELECT:</strong> This is the same as the projection operation of relational algebra. It is used to select the attribute based on the condition described by WHERE clause. </p>
<p><strong>Syntax:</strong></p>
<div className="my-1 p-1"><textarea disabled className="w-75 p-1" value="SELECT expressions  
FROM TABLES  
WHERE conditions;" /></div>
<p><strong>For example:</strong></p>
<div className="my-1 p-1"><textarea disabled className="w-75 p-1" value='SELECT emp_name
FROM employee
WHERE age > 20;' /></div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Documentation