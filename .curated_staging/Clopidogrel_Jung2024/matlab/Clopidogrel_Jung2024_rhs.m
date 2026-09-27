function dy = Clopidogrel_Jung2024_rhs(t, y, p)
% Right-hand side of the Clopidogrel_Jung2024 system. y = [depot; amounts in p.comps order].
dy = zeros(numel(y), 1);
C = y(2:end) ./ p.V(:);
if t >= p.Tlag
    absorbed = p.ka * y(1);
else
    absorbed = 0;
end
dy(1) = -absorbed;
dy(1 + p.dose_idx) = dy(1 + p.dose_idx) + absorbed;
for k = 1:size(p.two_way, 1)
    i = p.two_way(k,1); j = p.two_way(k,2); f = p.two_way(k,3) * (C(i) - C(j));
    dy(1+i) = dy(1+i) - f;  dy(1+j) = dy(1+j) + f;
end
for k = 1:size(p.one_way, 1)
    i = p.one_way(k,1); j = p.one_way(k,2); f = p.one_way(k,3) * C(i);
    dy(1+i) = dy(1+i) - f;  dy(1+j) = dy(1+j) + f;
end
for k = 1:size(p.elim, 1)
    i = p.elim(k,1);  dy(1+i) = dy(1+i) - p.elim(k,2) * C(i);
end
end
