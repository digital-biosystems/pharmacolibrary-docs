<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A14A&quot;,&quot;href&quot;:&quot;atc/A14A.md&quot;},{&quot;label&quot;:&quot;metandienone&quot;}]"></div>

# metandienone

- **generic name:** metandienone
- **ATC codes:** `A14AA03`, `D11AE01`
- **DrugBank:** [DB13586](https://go.drugbank.com/drugs/DB13586) · **PubChem:** not captured
- **molar mass:** 300.4351 g/mol (C20H28O2) — DrugBank
- **groups:** approved, withdrawn

## About

Metandienone is an anabolic steroid that was used to promote muscle growth and treat conditions needing anabolic therapy. It has been withdrawn from the market, largely because of serious side effects, and is no longer approved for human use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417194](https://www.wikidata.org/wiki/Q417194) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 10:04 | 0:32 | 0/0/0 | 0/0/0 | 0/0/0 | 11,564/735 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aloia_1981 | irrelevant | 0 | 0 | The study focuses on body composition changes (bone mass, potassium) in osteoporosis treatment and does not report pharmacokinetic parameters for methandrostenolone. |
| popPK | Boris_1972 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Boris_1972 | not_relevant | 0 | 0 | The paper studies the anti-ovulatory effects of androgenic steroids in rats but does not report specific pharmacokinetic or pharmacodynamic modeling (e.g., Emax, EC50) or numeric exposure-response parameters for metandienone. |
| popPK | Clark_1996 | irrelevant | 0 | 0 | The study focuses on behavioral and endocrine effects of anabolic steroids in rats, not pharmacokinetic parameters for metandienone. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper is a risk assessment regarding post-mortem inspection delays in ungulates and does not contain pharmacokinetic data for metandienone. |
| PD | EFSA_2020 | not_relevant | 0 | 0 | The paper discusses the impact of delayed post-mortem inspection on the detection of pathogens and contaminants, including potential degradation of pharmacologically active substances, but does not report any pharmacodynamic or exposure-response data for metandienone. |
| popPK | Fernández_1994 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro/in-vivo binding study of stanozolol and danazol, not a pharmacokinetic study of metandienone. |
| PD | Fernández_1994 | not_relevant | 3 | 2 | The paper studies stanozolol and danazol, not metandienone, and reports binding inhibition data (IC50) rather than a pharmacodynamic exposure-response relationship for the target drug. |
| popPK | GAMSTORP_1964 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| PD | GAMSTORP_1964 | not_relevant | 0 | 0 | The paper is a clinical evaluation of efficacy and safety in children, reporting clinical outcomes (weight, strength) rather than a pharmacodynamic or exposure-response analysis with numeric PD parameters. |
| popPK | Guan_2005 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting anabolic steroids (including methandrostenolone, not metandienone) in equine plasma and does not report pharmacokinetic parameters. |
| popPK | Holma_1977 | irrelevant | 0 | 0 | no_text gate: only 64 chars of text extracted (&lt; 400) |
| PD | Holma_1977 | not_relevant | 0 | 0 | The paper title indicates a study on the biological effects of metandienone on spermatogenesis, but the provided text lacks any data, figures, or analysis regarding pharmacokinetics, exposure, dose-response curves, or numeric pharmacodynamic parameters. |
| popPK | McCune_2023 | irrelevant | 0 | 0 | The study focuses on busulfan pharmacokinetics and metabolomics, not metandienone. |
| PD | McCune_2023 | not_relevant | 0 | 0 | The paper focuses on predicting busulfan clearance using metabolomics and does not report any pharmacodynamic or exposure-response relationship for metandienone. |
| popPK | Mejdrová_2023 | irrelevant | 0 | 0 | The paper focuses on the discovery of constitutive androstane receptor (CAR) agonists and does not report pharmacokinetic parameters for metandienone. |
| PD | Mejdrová_2023 | not_relevant | 0 | 0 | The paper focuses on the discovery of novel CAR agonists and does not report any pharmacodynamic or exposure-response data for metandienone. |
| popPK | Obrador_2026 | irrelevant | 0 | 0 | The paper is a review of radiomitigators for radiation injury and does not mention metandienone or report any pharmacokinetic parameters. |
| PD | Obrador_2026 | not_relevant | 0 | 0 | The paper is a review of radiomitigators and does not mention metandienone or report any pharmacodynamic or exposure-response data. |
| popPK | Parr_2012 | irrelevant | 2 | 0 | The study focuses on metabolic pathways and enzyme identification (CYPs) rather than quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| PGx | Parr_2012 | not_relevant | 0 | 0 | The paper describes the metabolic pathways of metandienone involving specific CYP enzymes but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PGx | Rendic_1999 | not_relevant | 0 | 0 | The study investigates in vitro metabolism by recombinant enzymes and does not report pharmacogenomic effects (gene variants) on PK/PD parameters in humans. |
| popPK | Schänzer_2006 | irrelevant | 2 | 0 | The study focuses on the mass spectrometric identification of a metabolite for doping control and does not report quantitative pharmacokinetic parameters (CL, V, ka) for metandienone. |
| popPK | Wang_2011 | irrelevant | 0 | 0 | The paper describes an analytical method (immunoaffinity column) for detecting methandrostenolone residues, not a pharmacokinetic study, and contains no PK parameters. |
| PD | Wang_2011 | not_relevant | 0 | 0 | The paper describes the preparation of an immunoaffinity column for sample cleanup and reports an IC50 for antibody binding (analytical sensitivity), not a pharmacodynamic exposure-response relationship for the drug. |
| popPK | Zhang_2011 | irrelevant | 0 | 0 | The paper describes an immunoassay for trenbolone detection and does not report pharmacokinetic parameters for metandienone. |
| PD | Zhang_2011 | not_relevant | 0 | 0 | The paper describes the development of an immunoassay for trenbolone detection and does not report any pharmacodynamic or exposure-response data for metandienone. |
| PGx | Zöllner_2010 | not_relevant | 0 | 0 | The paper describes the enzymatic production of a metabolite for doping control reference standards, not the effect of human genetic variants on metandienone pharmacokinetics or pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
