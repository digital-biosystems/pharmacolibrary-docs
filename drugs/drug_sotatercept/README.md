<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;sotatercept&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sotatercept_AitOudhia2024_reference&quot;,&quot;label&quot;:&quot;Ait-Oudhia_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# sotatercept

- **generic name:** sotatercept
- **ATC codes:** `C02KX06`
- **DrugBank:** [DB12118](https://go.drugbank.com/drugs/DB12118) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Sotatercept is a fusion-protein medication used to treat pulmonary arterial hypertension. It is an approved drug and is used for pulmonary hypertension, classified among antihypertensives for pulmonary arterial hypertension.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q103815273](https://www.wikidata.org/wiki/Q103815273) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:39 | 6:04 | 1/0/0 | 0/0/0 | 0/0/0 | 89,497/17,418 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span> | [Ait-Oudhia_2024_reference](drugs/drug_sotatercept/Sotatercept_AitOudhia2024_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+3 cov.) | Ait-Oudhia S et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13166](https://doi.org/10.1002/psp4.13166) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sotatercept) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ACVR1B (binder), ACVR2A (binder), GDF11 (binder), MSTN (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ait-Oudhia_2025.pdf` | Ait-Oudhia S et al., Population Pharmacokinetic/Pharmacodyna…, Clinical pharmacology and t… (2025) | pd | 5 | [10.1002/cpt.3524](https://doi.org/10.1002/cpt.3524) | [39668469](https://www.ncbi.nlm.nih.gov/pubmed/39668469) | metadata signals extractable PD data (Exposure-Response) |

<sub>queue written 2026-10-06T16:34:14.618703+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Ait-Oudhia_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetic (PK) modeling and does not report pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Ait-Oudhia_2025 | irrelevant | 0 | 0 | no_text gate: only 171 chars of text extracted (&lt; 400) |
| PGx | Bose_2019 | not_relevant | 0 | 0 | The paper is a review of myelofibrosis treatments and does not mention sotatercept or any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report quantitative pharmacokinetic parameters for sotatercept. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain any specific data, analysis, or numeric parameters for sotatercept. |
| popPK | Coyne_2019 | irrelevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes (hemoglobin, bone density, vascular calcification) but contains no pharmacokinetic parameters or disposition data for sotatercept. |
| PGx | Miranda_2025 | not_relevant | 1 | 0 | The paper explicitly states that BMPR2 genetic variant status was not associated with significant differences in treatment effects, reporting a null result rather than a pharmacogenomic effect. |
| PGx | Montani_2025 | not_relevant | 2 | 5 | The study reports that clinical efficacy (PVR, 6MWD) and safety were consistent regardless of genotype, indicating no differential pharmacodynamic effect of the drug based on genetic status. |
| popPK | Rothman_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and efficacy of imatinib, not sotatercept. |
| popPK | Sherman_2013 | relevant | 8 | 2 | The paper is a PK study of sotatercept reporting a terminal half-life, but lacks other quantitative disposition parameters like clearance or volume of distribution in the provided text. |
| PGx | Yoshida_2026 | not_relevant | 0 | 0 | The paper is a clinical trial protocol for sotatercept in congenital heart disease and does not report pharmacogenomic effects on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 16:34 UTC</sub>
