package cn.ymypay.halo.plugin.rainbowAggregationLogin.point;

import org.pf4j.ExtensionPoint;
import org.springframework.security.core.Authentication;
import reactor.core.publisher.Mono;

public interface UsernamePasswordAuthenticationManager extends ExtensionPoint {
    Mono<Authentication> authenticate(Authentication authentication);
}
