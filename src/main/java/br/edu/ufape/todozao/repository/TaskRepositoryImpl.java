package br.edu.ufape.todozao.repository;

import br.edu.ufape.todozao.model.Task;
import br.edu.ufape.todozao.model.QTask;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;

import java.util.List;

public class TaskRepositoryImpl implements TaskRepositoryCustom {

    private final JPAQueryFactory queryFactory;

    public TaskRepositoryImpl(EntityManager em) {
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public List<Task> buscarPorUsuarioEPrioridade(Long userId, String priority) {
        QTask task = QTask.task;

        return queryFactory
                .selectFrom(task)
                .where(
                        task.user.id.eq(userId),
                        task.priority.eq(priority)
                )
                .fetch();
    }
}
