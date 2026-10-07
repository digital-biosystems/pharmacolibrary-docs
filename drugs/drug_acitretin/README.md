<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D05B&quot;,&quot;href&quot;:&quot;atc/D05B.md&quot;},{&quot;label&quot;:&quot;acitretin&quot;}]"></div>

# acitretin

- **generic name:** acitretin
- **ATC codes:** `D05BB02`
- **DrugBank:** [DB00459](https://go.drugbank.com/drugs/DB00459) · **PubChem:** [CID 5284513](https://pubchem.ncbi.nlm.nih.gov/compound/5284513)
- **molar mass:** 326.4293 g/mol (C21H26O3) — DrugBank
- **groups:** approved, investigational

## About

Acitretin is a retinoid medicine used to treat psoriasis, including severe forms such as acropustulosis. It is an approved, systemically used antipsoriatic, prescribed under medical supervision and carrying a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q341500](https://www.wikidata.org/wiki/Q341500) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:02 | 0:59 | 0/0/0 | 1/2/0 | 0/0/0 | 13,832/5,075 | openai / gpt-6-luna | 1 | 0/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wu_2021_BKPyV](drugs/drug_acitretin/pd_Wu_2021_BKPyV.md) | BKPyV loads ← acitretin · inhibition effect | — | Wu Z et al., Acitretin and Retinoic Acid Derivatives…, Journal of virology (2021) | [10.1128/JVI.00127-21](https://doi.org/10.1128/JVI.00127-21) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Feld_2026_NAB](drugs/drug_acitretin/pd_Feld_2026_NAB.md) | net antiviral benefit ← acitretin · inhibition effect | — | Feld P et al., Positive net antiviral benefit of bexar…, Antiviral research (2026) | [10.1016/j.antiviral.2026.106398](https://doi.org/10.1016/j.antiviral.2026.106398) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Tippmann_2009_ADAM10_promoter_activity](drugs/drug_acitretin/pd_Tippmann_2009_ADAM10_promoter_activity.md) | ADAM10 promoter activity ← acitretin · stimulation effect | — | Tippmann F et al., Up-regulation of the alpha-secretase AD…, FASEB journal : official pu… (2009) | [10.1096/fj.08-121392](https://doi.org/10.1096/fj.08-121392) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=acitretin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: RARA (target), RARB (target), RARG (target), RBP1 (target), RXRA (target), RXRB (target), RXRG (target), Retinoic acid receptor RXR (target), STAT3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Feld_2026 | irrelevant | 0 | 0 | Acitretin is an in-vitro antiviral comparator, with no quantitative pharmacokinetic parameters reported. |
| popPK | Hausauer_2015 | irrelevant | 0 | 0 | This is a human case report of acitretin treatment and provides no quantitative pharmacokinetic parameters. |
| popPK | Ling_1999 | irrelevant | 0 | 0 | This dosing review provides no quantitative pharmacokinetic disposition parameters. |
| popPK | Tippmann_2009 | irrelevant | 0 | 0 | This is a mechanistic study with no quantitative acitretin disposition parameters. |
| popPK | Vahlquist_1995 | irrelevant | 0 | 0 | This clinical lipid-management study reports no quantitative pharmacokinetic parameters for acitretin. |
| popPK | Wu_2021 | irrelevant | 0 | 0 | This is an in-vitro antiviral study and reports no acitretin disposition parameters. |
| popPK | van_1989 | irrelevant | 0 | 0 | This is a clinical dose-response report and gives no quantitative pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
