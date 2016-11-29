The Model

By Definition: The model handles the state of the application. The state is what your application is about. If your application
is a forum, your Model might contain Class::DBI Objects representing threads, users, and postings. The model does not know
anything about HTML, or web servers, or anything like that. It just supplies ways to query the state, and ways to change that
state.