import com.example.User;
import com.example.repository.impl.GenericRepositoryImpl;

import jakarta.persistence.EntityManager;

public class UserRepository extends GenericRepositoryImpl<User, Long> {
    public UserRepository(EntityManager em) { super(em, User.class); }
}
