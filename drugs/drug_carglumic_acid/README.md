<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;carglumic acid&quot;}]"></div>

# carglumic acid

- **generic name:** carglumic acid
- **ATC codes:** `A16AA05`
- **DrugBank:** [DB06775](https://go.drugbank.com/drugs/DB06775) · **PubChem:** [CID 121396](https://pubchem.ncbi.nlm.nih.gov/compound/121396)
- **molar mass:** 190.154 g/mol (C6H10N2O5) — DrugBank
- **groups:** approved, investigational

## About

Carglumic acid is a drug used to treat metabolic disorders, specifically hyperammonaemia caused by N-acetylglutamate synthase deficiency. It is an approved medicine, authorised in the European Union, and used mainly in specialised care for this rare condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q822884](https://www.wikidata.org/wiki/Q822884) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 11:11 | 0:21 | 0/0/0 | 0/0/0 | 0/0/0 | 11,841/345 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=carglumic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | lung | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CPS1 (allosteric modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Burlina_2022 | irrelevant | 0 | 0 | The paper is a qualitative clinical survey regarding long-term management and compliance, reporting no pharmacokinetic parameters or quantitative disposition data for carglumic acid. |
| PD | Burlina_2022 | not_relevant | 1 | 0 | The paper is a qualitative survey reporting clinical outcomes (reduction in decompensations) without any pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| popPK | Häberle_2011 | irrelevant | 0 | 0 | The paper is a clinical review of carglumic acid's therapeutic role in NAGS deficiency and does not report any quantitative pharmacokinetic parameters. |
| PD | Häberle_2011 | not_relevant | 1 | 0 | The text is a review discussing the clinical efficacy of carglumic acid but does not report any specific pharmacokinetic data, concentration-effect curves, or numeric PD parameters. |
| popPK | Ma_2025 | irrelevant | 0 | 0 | The paper is a clinical case report focusing on the therapeutic efficacy of carglumic acid in lowering ammonia levels, and it does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume of distribution, half-life) for the drug itself. |
| PGx | Marwaha_2021 | not_relevant | 0 | 0 | The paper describes a case report of carbonic anhydrase VA deficiency treated with carglumic acid but does not report any pharmacogenomic analysis or effect of genetic variants on the drug's pharmacokinetics or pharmacodynamics. |
| PGx | Noori_2024 | not_relevant | 0 | 0 | The paper is a clinical cohort study of CPS1 deficiency patients that mentions the use of carglumic acid but does not report any pharmacokinetic or pharmacodynamic parameters or genotype-drug response relationships. |
| popPK | Sharma_2015 | irrelevant | 2 | 0 | The paper is a bioanalytical method development study that mentions applying the method to a PK study but does not report any quantitative pharmacokinetic parameters (CL, V, t1/2, etc.) in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
