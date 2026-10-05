<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A14A&quot;,&quot;href&quot;:&quot;atc/A14A.md&quot;},{&quot;label&quot;:&quot;metenolone&quot;}]"></div>

# metenolone

- **generic name:** metenolone
- **ATC codes:** `A14AA04`
- **DrugBank:** [DB13710](https://go.drugbank.com/drugs/DB13710) · **PubChem:** not captured
- **molar mass:** 302.451 g/mol (C20H30O2) — DrugBank
- **groups:** investigational

## About

Metenolone is an anabolic steroid that has been used to promote muscle growth and counter wasting conditions. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q905078](https://www.wikidata.org/wiki/Q905078) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 00:46 | 1:26 | 0/0/0 | 0/0/0 | 0/0/0 | 3,720/291 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abdul_2024.pdf` | Abdul Karim A et al., Biotransformation of metenolone acetate…, Steroids (2024) | pd | 4 | [10.1016/j.steroids.2023.109345](https://doi.org/10.1016/j.steroids.2023.109345) | [37984606](https://www.ncbi.nlm.nih.gov/pubmed/37984606) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-30T00:46:33.418115+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdul_2024 | irrelevant | 0 | 0 | The study focuses on microbial biotransformation and in-vitro aromatase inhibition, not pharmacokinetic disposition parameters. |
| PD | Abdul_2024 | not_relevant | 0 | 0 | The paper reports in vitro aromatase inhibition IC50 values for metabolites, which is a pharmacological potency assay, not a pharmacodynamic (exposure-response) relationship for the drug metenolone itself. |
| popPK | Anes_2024 | irrelevant | 0 | 0 | The paper is a review on immunology (Type I Interferons in TB/HIV) and contains no pharmacokinetic data for metenolone. |
| popPK | Garbrecht_1981 | irrelevant | 0 | 0 | The study focuses on lipid metabolism side effects (hyperlipoproteinaemia) and does not report any pharmacokinetic parameters for methenolone. |
| PD | Garbrecht_1981 | not_relevant | 1 | 0 | The paper reports a qualitative observation of hyperlipoproteinaemia and explicitly states there was no relationship between cholesterol levels and dosage, providing no numeric PD parameters or concentration-effect data. |
| popPK | Hraiech_2017 | irrelevant | 0 | 0 | The paper is a study on Staphylococcus aureus pneumonia in mice and does not involve metenolone or pharmacokinetic parameters. |
| popPK | Hussain_2016 | irrelevant | 0 | 0 | The study focuses on fungal biotransformation and immunomodulatory activity of methenolone enanthate, not pharmacokinetic disposition parameters. |
| popPK | Shen_2009 | irrelevant | 0 | 0 | The study focuses on hair analysis for doping control and explicitly states that metenolone does not deposit in hair, providing no pharmacokinetic parameters. |
| PD | Shen_2009 | not_relevant | 0 | 0 | The paper reports that methenolone does not deposit in hair and focuses on the time-course of concentration in hair for other steroids, providing no pharmacodynamic (effect) data or exposure-response relationship for metenolone. |
| popPK | Siddiqui_2020 | irrelevant | 0 | 0 | The paper is a study on fungal biocatalysis and structural transformation of metenolone acetate, reporting no pharmacokinetic parameters. |
| PD | Siddiqui_2020 | not_relevant | 2 | 2 | The paper reports single-point IC50 values for specific metabolites in cell assays, but does not provide a concentration-effect curve, Emax, or a PK/PD model for metenolone itself. |
| popPK | Torre_2017 | irrelevant | 0 | 0 | The paper is a study on planarian innate immunity and has no relation to metenolone pharmacokinetics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
