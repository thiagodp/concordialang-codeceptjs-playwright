function is( it ) {
    return !!it && it !== '0' && it !== 'false';
}

function isInCI( process ) {
    return process && is( process.env[ 'CI' ] );
}

// Returns with an error when *not* in CI mode
if ( ! isInCI( process ) ) {
    process.exit( 1 );
}
