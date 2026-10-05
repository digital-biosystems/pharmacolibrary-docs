<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;olipudase alfa&quot;}]"></div>

# olipudase alfa

- **generic name:** olipudase alfa
- **ATC codes:** `A16AB25`
- **DrugBank:** [DB12835](https://go.drugbank.com/drugs/DB12835) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Olipudase alfa is an enzyme therapy used to treat acid sphingomyelinase deficiency (ASMD) type A/B or type B. It is authorised in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 11:16 | 0:36 | 0/0/0 | 0/0/0 | 0/0/0 | 19,264/621 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 0/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=olipudase_alfa) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PKLR (activator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aldosari_2019 | irrelevant | 1 | 0 | In-vitro formulation/encapsulation study with no PK disposition parameters for olipudase alfa. |
| PD | Aldosari_2019 | not_relevant | 2 | 1 | In vitro formulation study comparing liposomal vs free rhASM effects in fibroblasts; no concentration-effect modeling or numeric PD parameters (Emax/EC50) reported. |
| popPK | Diaz_2021 | relevant | 8 | 2 | The study reports PK parameters (CL, Vss, t1/2) for olipudase alfa, but the specific numeric values are located in Supplementary Table B, which is not included in the provided evidence. |
| popPK | Kaddi_2018 | relevant | 6 | 1 | The paper models olipudase alfa PK/PD as the subject drug, but the evidence contains no numeric disposition parameter values; they likely reside in supplementary material or figures not provided. |
| popPK | Kirouac_2019 | irrelevant | 0 | 0 | The paper is a review on the reproducibility of QSP models and does not report any pharmacokinetic parameters for olipudase_alfa. |
| PD | Kirouac_2019 | not_relevant | 0 | 0 | Paper is about reproducibility of QSP model code sharing; no olipudase alfa PD or exposure-response data. |
| popPK | Kumar_2024 | irrelevant | 0 | 0 | The paper is a review article focusing on pathophysiology and treatment response, not a primary pharmacokinetic study reporting quantitative disposition parameters for olipudase alfa. |
| PGx | Kumar_2024 | not_relevant | 0 | 0 | The paper is a review of the pathophysiology of ASMD and the mechanism of action of olipudase alfa, focusing on sphingomyelin accumulation, but it does not report pharmacogenomic effects (gene variants affecting PK/PD) of the drug. |
| popPK | Thurberg_2016 | irrelevant | 0 | 0 | The study reports pharmacodynamic biomarkers (liver sphingomyelin levels) and safety data, but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for olipudase alfa. |
| popPK | Thurberg_2020 | irrelevant | 0 | 0 | The paper reports pharmacodynamic biomarkers (sphingomyelin levels, lipid profiles) and efficacy outcomes, but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for olipudase alfa. |
| PD | Thurberg_2020 | not_relevant | 3 | 2 | Reports longitudinal biomarker (lyso-SM, hepatic SM, lipids) changes on ERT in n=5, but no concentration- or dose-effect relationship or numeric PD parameters (Emax/EC50/slope) are stated or derivable. |
| popPK | Wasserstein_2015 | relevant | 4 | 2 | The study reports a circulating half-life range (20.9-23.4h) for olipudase alfa, but lacks other quantitative disposition parameters like clearance or volume of distribution. |
| popPK | Wasserstein_2022 | irrelevant | 2 | 0 | This is an efficacy/safety trial abstract with no PK disposition parameters (CL, V, half-life) reported; any PK data would be in other publications or supplementary material not provided. |
| PD | Wasserstein_2022 | not_relevant | 2 | 1 | Reports only group-level efficacy endpoint changes vs placebo; no concentration-effect or dose-response PD parameters (Emax, EC50, etc.) are stated or derivable. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
