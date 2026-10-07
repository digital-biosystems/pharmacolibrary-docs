<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H05A&quot;,&quot;href&quot;:&quot;atc/H05A.md&quot;},{&quot;label&quot;:&quot;abaloparatide&quot;}]"></div>

# abaloparatide

- **generic name:** abaloparatide
- **ATC codes:** `H05AA04`
- **DrugBank:** [DB05084](https://go.drugbank.com/drugs/DB05084) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Abaloparatide is a parathyroid hormone analogue used to treat postmenopausal osteoporosis. It is an approved medicine, with one product authorised in the European Union, though another application there was refused.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4834481](https://www.wikidata.org/wiki/Q4834481) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:54 | 0:28 | 0/0/0 | 1/0/0 | 0/0/0 | 28,509/946 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sahbani_2019_PTHR1_internalization](drugs/drug_abaloparatide/pd_Sahbani_2019_PTHR1_internalization.md) | PTHR1 internalization ← abaloparatide · direct Emax (saturable) effect | — | Sahbani K et al., Abaloparatide exhibits greater osteoana…, Physiological reports (2019) | [10.14814/phy2.14225](https://doi.org/10.14814/phy2.14225) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sahbani_2019_arrestin_recruitment](drugs/drug_abaloparatide/pd_Sahbani_2019_arrestin_recruitment.md) | β-arrestin recruitment ← abaloparatide · direct Emax (saturable) effect | — | Sahbani K et al., Abaloparatide exhibits greater osteoana…, Physiological reports (2019) | [10.14814/phy2.14225](https://doi.org/10.14814/phy2.14225) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Sahbani_2019_cAMP](drugs/drug_abaloparatide/pd_Sahbani_2019_cAMP.md) | intracellular cAMP ← abaloparatide · direct Emax (saturable) effect | — | Sahbani K et al., Abaloparatide exhibits greater osteoana…, Physiological reports (2019) | [10.14814/phy2.14225](https://doi.org/10.14814/phy2.14225) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=abaloparatide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PTH1R (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bilezikian_2018 | irrelevant | 0 | 0 | The paper is a clinical efficacy study assessing trabecular bone score (TBS) and bone mineral density, and does not report pharmacokinetic disposition parameters (e.g., clearance, volume, half-life) for abaloparatide. |
| popPK | Sahbani_2019 | irrelevant | 0 | 0 | The study evaluates the osteoanabolic efficacy and receptor signaling (cAMP, beta-arrestin) of abaloparatide, but does not report pharmacokinetic disposition parameters such as clearance, volume, or half-life. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
