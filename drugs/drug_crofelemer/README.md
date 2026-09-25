<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07X&quot;,&quot;href&quot;:&quot;atc/A07X.md&quot;},{&quot;label&quot;:&quot;crofelemer&quot;}]"></div>

# crofelemer

- **generic name:** crofelemer
- **ATC codes:** `A07XA06`
- **DrugBank:** [DB04941](https://go.drugbank.com/drugs/DB04941)
- **groups:** approved

## About

**Description.** Crofelemer, previously known as the investigational drug SP-303, is a novel proanthocyanidin purified from the bark latex of the Amazonian Croton tree <i>Croton lechleri</i>. It is marketed under the brand name Fulyzaq and indicated for the symptomatic treatment of non-infectious diarrhea in adult patients with HIV/AIDS who are taking antiretroviral therapy.

**Indication.** For the symptomatic treatment of non-infectious diarrhea in adult patients with HIV/AIDS who are taking antiretroviral therapy.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-12 00:43 | 1:31 | 0/0/0 | 1/0/0 | 0/0/0 | 22,819/690 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Tradtrantip_2010](drugs/drug_crofelemer/pd_Tradtrantip_2010_CFTR.md) | Tradtrantip L et al., Crofelemer, an antisecretory antidiarrh…, Molecular pharmacology (2010) | [10.1124/mol.109.061051](https://doi.org/10.1124/mol.109.061051) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tradtrantip_2010](drugs/drug_crofelemer/pd_Tradtrantip_2010_SCC.md) | Tradtrantip L et al., Crofelemer, an antisecretory antidiarrh…, Molecular pharmacology (2010) | [10.1124/mol.109.061051](https://doi.org/10.1124/mol.109.061051) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tradtrantip_2010](drugs/drug_crofelemer/pd_Tradtrantip_2010_TMEM16A.md) | Tradtrantip L et al., Crofelemer, an antisecretory antidiarrh…, Molecular pharmacology (2010) | [10.1124/mol.109.061051](https://doi.org/10.1124/mol.109.061051) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=crofelemer) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ANO1 (target), CFTR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Crutchley_2010 | irrelevant | 2 | 0 | The paper is a narrative review of crofelemer's chemistry, pharmacology, and clinical efficacy, and the provided evidence contains no quantitative pharmacokinetic parameter values (e.g., CL, V, ka). |
| popPK | Frampton_2013 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and safety that explicitly states crofelemer undergoes minimal systemic absorption, and it does not report any quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Frampton_2013 | not_relevant | 1 | 0 | The text is a clinical review summarizing efficacy and safety outcomes (diarrhea reduction) without providing any pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Tradtrantip_2010 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study investigating crofelemer's effect on chloride channels, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
