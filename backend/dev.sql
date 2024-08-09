INSERT INTO "User" (id, username, email, role) VALUES 
(1, 'johndoe', 'john.doe@example.com', 'admin'),
(2, 'janesmith', 'jane.smith@example.com', 'user'),
(3, 'alicejohnson', 'alice.johnson@example.com', 'user'),
(4, 'bobbrown', 'bob.brown@example.com', 'user'),
(5, 'carolwhite', 'carol.white@example.com', 'admin'),
(6, 'davidgreen', 'david.green@example.com', 'user'),
(7, 'eveblack', 'eve.black@example.com', 'user'),
(8, 'frankblue', 'frank.blue@example.com', 'user'),
(9, 'gracegray', 'grace.gray@example.com', 'admin'),
(10, 'hankred', 'hank.red@example.com', 'user');
INSERT INTO "Profile" (id, userId, firstName, lastName, profilePicture, bannerImage, description) VALUES 
(1, 1, 'John', 'Doe', 'profile_pic1.jpg', 'banner1.jpg', 'Description 1'),
(2, 2, 'Jane', 'Smith', 'profile_pic2.jpg', 'banner2.jpg', 'Description 2'),
(3, 3, 'Alice', 'Johnson', 'profile_pic3.jpg', 'banner3.jpg', 'Description 3'),
(4, 4, 'Bob', 'Brown', 'profile_pic4.jpg', 'banner4.jpg', 'Description 4'),
(5, 5, 'Carol', 'White', 'profile_pic5.jpg', 'banner5.jpg', 'Description 5'),
(6, 6, 'David', 'Green', 'profile_pic6.jpg', 'banner6.jpg', 'Description 6'),
(7, 7, 'Eve', 'Black', 'profile_pic7.jpg', 'banner7.jpg', 'Description 7'),
(8, 8, 'Frank', 'Blue', 'profile_pic8.jpg', 'banner8.jpg', 'Description 8'),
(9, 9, 'Grace', 'Gray', 'profile_pic9.jpg', 'banner9.jpg', 'Description 9'),
(10, 10, 'Hank', 'Red', 'profile_pic10.jpg', 'banner10.jpg', 'Description 10');
INSERT INTO "Project" (id, profileId, title, description) VALUES 
(1, 1, 'Project 1', 'Description for project 1'),
(2, 2, 'Project 2', 'Description for project 2'),
(3, 3, 'Project 3', 'Description for project 3'),
(4, 4, 'Project 4', 'Description for project 4'),
(5, 5, 'Project 5', 'Description for project 5'),
(6, 6, 'Project 6', 'Description for project 6'),
(7, 7, 'Project 7', 'Description for project 7'),
(8, 8, 'Project 8', 'Description for project 8'),
(9, 9, 'Project 9', 'Description for project 9'),
(10, 10, 'Project 10', 'Description for project 10');
INSERT INTO "ProjectImage" (id, projectId, imageUrl) VALUES 
(1, 1, 'image1.jpg'),
(2, 2, 'image2.jpg'),
(3, 3, 'image3.jpg'),
(4, 4, 'image4.jpg'),
(5, 5, 'image5.jpg'),
(6, 6, 'image6.jpg'),
(7, 7, 'image7.jpg'),
(8, 8, 'image8.jpg'),
(9, 9, 'image9.jpg'),
(10, 10, 'image10.jpg');
INSERT INTO "Portfolio" (id, projectId, portfolioUrl) VALUES 
(1, 1, 'portfolio1.com'),
(2, 2, 'portfolio2.com'),
(3, 3, 'portfolio3.com'),
(4, 4, 'portfolio4.com'),
(5, 5, 'portfolio5.com'),
(6, 6, 'portfolio6.com'),
(7, 7, 'portfolio7.com'),
(8, 8, 'portfolio8.com'),
(9, 9, 'portfolio9.com'),
(10, 10, 'portfolio10.com');
INSERT INTO "Message" (id, senderId, receiverId, content) VALUES 
(1, 1, 2, 'Hello Jane!'),
(2, 3, 4, 'Hi Bob!'),
(3, 5, 6, 'Hey David!'),
(4, 7, 8, 'Good morning Frank!'),
(5, 9, 10, 'Hello Hank!'),
(6, 1, 3, 'Hi Alice!'),
(7, 2, 4, 'Hey Bob!'),
(8, 5, 7, 'Good morning Eve!'),
(9, 6, 8, 'Hello Frank!'),
(10, 9, 10, 'Hi Hank!');
INSERT INTO "Booking" (id, userId, profileId, bookingDate, status) VALUES 
(1, 1, 1, '2024-02-01 10:00:00', 'confirmed'),
(2, 2, 2, '2024-02-02 11:00:00', 'confirmed'),
(3, 3, 3, '2024-02-03 12:00:00', 'pending'),
(4, 4, 4, '2024-02-04 13:00:00', 'cancelled'),
(5, 5, 5, '2024-02-05 14:00:00', 'confirmed'),
(6, 6, 6, '2024-02-06 15:00:00', 'pending'),
(7, 7, 7, '2024-02-07 16:00:00', 'cancelled'),
(8, 8, 8, '2024-02-08 17:00:00', 'confirmed'),
(9, 9, 9, '2024-02-09 18:00:00', 'pending'),
(10, 10, 10, '2024-02-10 19:00:00', 'confirmed');
INSERT INTO "Review" (id, userId, profileId, rating, comment) VALUES 
(1, 1, 1, 5, 'Great job!'),
(2, 2, 2, 4, 'Good work!'),
(3, 3, 3, 3, 'Average performance'),
(4, 4, 4, 2, 'Needs improvement'),
(5, 5, 5, 1, 'Poor service'),
(6, 6, 6, 5, 'Excellent!'),
(7, 7, 7, 4, 'Very good'),
(8, 8, 8, 3, 'Satisfactory'),
(9, 9, 9, 2, 'Could be better'),
(10, 10, 10, 1, 'Disappointing');
INSERT INTO "Like" (id, userId, profileId) VALUES 
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 4),
(5, 5, 5),
(6, 6, 6),
(7, 7, 7),
(8, 8, 8),
(9, 9, 9),
(10, 10, 10);
INSERT INTO "Follow" (id, userId, followingId) VALUES 
(1, 1, 2),
(2, 2, 3),
(3, 3, 4),
(4, 4, 5),
(5, 5, 6),
(6, 6, 7),
(7, 7, 8),
(8, 8, 9),
(9, 9, 10),
(10, 10, 1);
