# CrimeVisualization
This visualization uses the Seattle crime dataset to display a map which marks crimes that have happened within a mile of CenturyLink Field.

Each of the markers is clickable, so you can see a little bit more detail on each point.

The app is running on http://klogan88.github.io

# Known IE9 issues
The app currently does not work on IE9.  This is because IE9 does not support CORS so the data cannot be retrieved from the dataset.

There is a known workaround for this which uses a proxy.  It requires that I place an additional resource at the endpoint, which I cannot do.  More details here on this project: https://github.com/jpillora/xdomain

# Future iterations
On this first pass, I separated out the map visualization into it's own component.  To allow some configuration, you can configure the URL you pass into the component.  Given more time, I would break this down further, creating a more generic map component that can use any type of dataset.