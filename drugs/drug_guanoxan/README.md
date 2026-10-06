<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02C&quot;,&quot;href&quot;:&quot;atc/C02C.md&quot;},{&quot;label&quot;:&quot;guanoxan&quot;}]"></div>

# guanoxan

- **generic name:** guanoxan
- **ATC codes:** `C02CC03`
- **DrugBank:** [DB13211](https://go.drugbank.com/drugs/DB13211) · **PubChem:** not captured
- **molar mass:** 207.233 g/mol (C10H13N3O2) — DrugBank
- **groups:** approved

## About

Guanoxan is a guanidine-derivative medicine used to lower high blood pressure. It is classed as a peripherally acting antiadrenergic antihypertensive and is listed as an approved drug, though it does not appear to have a current authorisation from the European Medicines Agency.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3778223](https://www.wikidata.org/wiki/Q3778223) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 13:59 | 0:57 | 0/0/0 | 0/0/0 | 0/0/0 | 11,977/601 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Boobis_1983 | not_relevant | 2 | 10 | The paper reports in vitro enzyme inhibition constants (Ki) for guanoxan, not in vivo pharmacokinetic or pharmacodynamic parameters modified by genotype. |
| popPK | Conté_1976 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of dihydroergotamine for postural hypotension, with guanoxan serving only as a comparator antihypertensive agent, and no pharmacokinetic parameters are reported. |
| PD | Conté_1976 | not_relevant | 1 | 0 | The paper reports clinical efficacy of DHE in patients taking guanoxan but provides no concentration-effect data, dose-response curve, or numeric PD parameters for guanoxan itself. |
| PGx | Eichelbaum_1984 | not_relevant | 5 | 0 | The paper mentions impaired metabolism of guanoxan in poor metabolizers but provides no specific quantitative PK/PD data or fitted effect sizes for guanoxan. |
| PGx | Islam_1991 | not_relevant | 0 | 0 | The paper describes a structural molecular template for CYP2D6 substrates and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Lennard_1986 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of metoprolol metabolism where guanoxan is used only as an inhibitor, not as the subject drug for PK parameter estimation. |
| PGx | Lennard_1986 | not_relevant | 0 | 0 | The paper studies the metabolism of metoprolol, not guanoxan; guanoxan is only mentioned as an inhibitor of metoprolol metabolism. |
| popPK | Meyer_1982 | irrelevant | 0 | 0 | The paper is a review discussing genetic polymorphisms in drug metabolism and mentions guanoxan only as an example of a drug affected by debrisoquine hydroxylase deficiency, without providing any quantitative pharmacokinetic parameters. |
| PD | Meyer_1982 | not_relevant | 1 | 0 | The text is a general review of pharmacogenetics that mentions guanoxan as a substrate for debrisoquine hydroxylase but provides no specific pharmacodynamic data, exposure-response curves, or numeric PD parameters. |
| PGx | Meyer_1982 | not_relevant | 2 | 0 | The paper mentions guanoxan only as an example of a drug metabolized by the debrisoquine hydroxylase pathway in a general review, without reporting specific pharmacokinetic or pharmacodynamic data or effect sizes for guanoxan. |
| popPK | Zonnenchein_1990 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study characterizing imidazoline receptors, not a pharmacokinetic study, and guanoxan is only mentioned as a ligand for competition binding. |
| PD | Zonnenchein_1990 | not_relevant | 0 | 0 | The paper reports receptor binding affinity (Kd, Bmax) and an IC50 for a channel blocker, but does not report a pharmacodynamic exposure-response or dose-response relationship for guanoxan. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
