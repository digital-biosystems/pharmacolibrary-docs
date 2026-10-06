<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;metirosine&quot;}]"></div>

# metirosine

- **generic name:** metirosine
- **ATC codes:** `C02KB01`
- **DrugBank:** [DB00765](https://go.drugbank.com/drugs/DB00765) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Metirosine is a tyrosine hydroxylase inhibitor used to treat phaeochromocytoma. It is an approved antihypertensive, but its use is uncommon and mainly specialised.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6824116](https://www.wikidata.org/wiki/Q6824116) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:14 | 0:55 | 0/0/0 | 0/0/0 | 0/0/0 | 28,623/1,065 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=metirosine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: TH (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amano_1998 | irrelevant | 0 | 0 | The study investigates radiopharmaceuticals for breast cancer imaging in mice and does not involve metirosine. |
| popPK | Bubeck_1981 | irrelevant | 0 | 0 | The study investigates radioiodine-labeled quinoline and tyrosine derivatives in hamsters, not metirosine. |
| popPK | Demarest_1985 | irrelevant | 0 | 0 | The study focuses on dopamine and prolactin in rats and does not involve metirosine or its pharmacokinetics. |
| popPK | Kanai_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the radiotracer [18F]FAMT in mice, not metirosine. |
| popPK | Kersemans_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the radiotracer 123I-2-iodo-L-phenylalanine, not metirosine. |
| popPK | Liu_1992 | irrelevant | 0 | 0 | The study investigates the effect of hypercalcemia on renal sympathetic nervous system activity in rats and does not involve metirosine or its pharmacokinetics. |
| PGx | Ljungström_2024 | not_relevant | 0 | 0 | The paper is a case report on the clinical efficacy of metyrosine in a patient with CFS and does not report pharmacokinetic or pharmacodynamic parameters modified by specific gene variants. |
| popPK | Nakajima_2007 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 3-[125I]iodo-alpha-methyl-L-tyrosine (IMT), not metirosine. |
| popPK | Ohshima_2013 | irrelevant | 0 | 0 | The paper studies the PET tracer D-[(18)F]FAMT, not the drug metirosine. |
| popPK | Shikano_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 4-iodo-L-meta-tyrosine, not metirosine. |
| popPK | Valoti_1992 | irrelevant | 0 | 0 | The paper studies the oxidative ring-coupling of tyrosine and other substrates by rat intestinal peroxidase and does not involve metirosine. |
| popPK | Wålinder_1976 | irrelevant | 0 | 0 | The study focuses on the clinical efficacy of metyrosine as an adjunct to thioridazine in schizophrenia and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for metyrosine. |
| PD | Wålinder_1976 | not_relevant | 2 | 1 | The study reports qualitative dose reduction (15-50%) and measures plasma concentrations, but does not provide a concentration-effect curve or numeric PD parameters (e.g., EC50, Emax) for metyrosine. |
| popPK | Yamaguchi_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the PET tracer 18F-FAMT, not the drug metirosine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
