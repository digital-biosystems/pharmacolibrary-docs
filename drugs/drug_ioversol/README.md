<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08A&quot;,&quot;href&quot;:&quot;atc/V08A.md&quot;},{&quot;label&quot;:&quot;ioversol&quot;}]"></div>

# ioversol

- **generic name:** ioversol
- **ATC codes:** `V08AB07`
- **DrugBank:** [DB09134](https://go.drugbank.com/drugs/DB09134) · **PubChem:** [CID 3741](https://pubchem.ncbi.nlm.nih.gov/compound/3741)
- **molar mass:** 807.115 g/mol (C18H24I3N3O9) — DrugBank
- **groups:** approved, investigational

## About

Ioversol is an iodinated, low-osmolar X-ray contrast agent used to make body structures visible during imaging examinations. It is an approved contrast medium, sold as Optiray, and is used in medical imaging settings; it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6064187](https://www.wikidata.org/wiki/Q6064187) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:09 | 0:40 | 0/0/0 | 0/0/1 | 0/0/0 | 31,306/2,645 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Yu_2023_CIN](drugs/drug_ioversol/pd_Yu_2023_CIN.md) | CIN occurrence ← ioversol · categorical (graded) response model | — | Yu R et al., The clinical predictive value and regul…, Biochemical and biophysical… (2023) | [10.1016/j.bbrc.2023.09.019](https://doi.org/10.1016/j.bbrc.2023.09.019) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ioversol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kuhn_1991 | irrelevant | 0 | 0 | This is a contrast-dose comparison and reports no quantitative pharmacokinetic parameters for ioversol. |
| popPK | Mayer_2001 | irrelevant | 0 | 0 | This is an in-vitro chemical stability study, not a study of ioversol pharmacokinetics. |
| popPK | Rankine_2008 | irrelevant | 0 | 0 | Ioversol is used only as CT contrast in a dosimetry study, with no pharmacokinetic parameters reported. |
| popPK | Saade_2019 | irrelevant | 0 | 0 | This human renal CTA study reports imaging outcomes, not quantitative ioversol pharmacokinetic parameters. |
| popPK | Saku_2004 | irrelevant | 0 | 0 | Ioversol was used as a contrast agent in an imaging-quality study, with no quantitative pharmacokinetic parameters reported. |
| popPK | Yu_2023 | irrelevant | 0 | 0 | Ioversol is used as a contrast agent in clinical and in-vitro experiments, but no quantitative ioversol pharmacokinetic parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
