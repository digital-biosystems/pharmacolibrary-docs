<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;cipaglucosidase alfa&quot;}]"></div>

# cipaglucosidase alfa

- **generic name:** cipaglucosidase alfa
- **ATC codes:** `A16AB23`
- **DrugBank:** [DB16708](https://go.drugbank.com/drugs/DB16708) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Cipaglucosidase alfa is an enzyme therapy used to treat glycogen storage disease type II (Pompe disease). It is authorised in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 02:25 | 0:47 | 0/0/0 | 1/0/0 | 0/0/0 | 1,908/166 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/6 | 4/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Byrne_2024_2_CK](drugs/drug_cipaglucosidase_alfa/pd_Byrne_2024_2_CK.md) | serum creatine kinase ← cipaglucosidase alfa (rhGAA) · direct Emax (saturable) effect | — | Byrne BJ et al., Cipaglucosidase alfa plus miglustat: li…, Frontiers in neurology (2024) | [10.3389/fneur.2024.1451512](https://doi.org/10.3389/fneur.2024.1451512) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Byrne_2024_2_Hex4](drugs/drug_cipaglucosidase_alfa/pd_Byrne_2024_2_Hex4.md) | urinary Hex4 ← cipaglucosidase alfa (rhGAA) · direct Emax (saturable) effect | — | Byrne BJ et al., Cipaglucosidase alfa plus miglustat: li…, Frontiers in neurology (2024) | [10.3389/fneur.2024.1451512](https://doi.org/10.3389/fneur.2024.1451512) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Byrne_2024_2_Kuptake](drugs/drug_cipaglucosidase_alfa/pd_Byrne_2024_2_Kuptake.md) | intracellular GAA enzyme activity uptake ← cipaglucosidase alfa (rhGAA) · direct Emax (saturable) effect | — | Byrne BJ et al., Cipaglucosidase alfa plus miglustat: li…, Frontiers in neurology (2024) | [10.3389/fneur.2024.1451512](https://doi.org/10.3389/fneur.2024.1451512) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Byrne_2024_2_muscle_glycogen_content](drugs/drug_cipaglucosidase_alfa/pd_Byrne_2024_2_muscle_glycogen_content.md) | muscle glycogen content ← cipaglucosidase alfa (rhGAA) · direct Emax (saturable) effect | — | Byrne BJ et al., Cipaglucosidase alfa plus miglustat: li…, Frontiers in neurology (2024) | [10.3389/fneur.2024.1451512](https://doi.org/10.3389/fneur.2024.1451512) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cipaglucosidase_alfa) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: IGF2R (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anding_2023 | irrelevant | 0 | 0 | The study focuses on alglucosidase alfa and avalglucosidase alfa, not cipaglucosidase alfa, and does not report quantitative PK parameters for the target drug. |
| popPK | Byrne_2024 | relevant | 4 | 2 | The paper reports PK parameters (AUC, half-life) for cipaglucosidase alfa, but the specific numeric values are located in Supplementary Section S2 which is not provided in the evidence. |
| PD | Byrne_2024 | not_relevant | 2 | 1 | The paper reports descriptive changes in pharmacodynamic biomarkers (CK, Hex4) and efficacy endpoints over time, but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Byrne_2024_2 | irrelevant | 2 | 1 | The paper is a mechanistic review that discusses PK concepts and cites specific values (e.g., half-life, AUC changes) from other studies, but it does not report original quantitative disposition parameters (CL, V, Q, ka) or a compartmental model for cipaglucosidase alfa. |
| popPK | Corsini_2025 | irrelevant | 0 | 0 | The paper is a review of enzyme replacement therapy strategies for Pompe disease and does not report original quantitative pharmacokinetic parameters for cipaglucosidase alfa. |
| popPK | Han_2016 | irrelevant | 0 | 0 | The study focuses on the efficacy of enzyme replacement therapy (rhGAA) in mice and does not report pharmacokinetic parameters for cipaglucosidase_alfa. |
| popPK | Lim_2017 | irrelevant | 0 | 0 | The study focuses on immune tolerance and efficacy in mice using rhGAA (not cipaglucosidase_alfa) and does not report pharmacokinetic parameters. |
| popPK | Masat_2016 | irrelevant | 0 | 0 | The paper focuses on the immunogenicity (antibody titers, T-cell responses) of Myozyme (rhGAA) in Pompe disease, not the pharmacokinetics of cipaglucosidase alfa. |
| popPK | Mendelsohn_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting functional and respiratory outcomes (FVC, 6MWT) rather than pharmacokinetic parameters (CL, V, ka) for cipaglucosidase alfa. |
| popPK | Nowlin_2026 | irrelevant | 0 | 0 | The study investigates focused ultrasound delivery of enzyme replacement therapy (alglucosidase alfa/avalglucosidase alfa) in mice and does not report pharmacokinetic parameters for cipaglucosidase alfa. |
| popPK | Roberts_2025 | irrelevant | 0 | 0 | The paper is an indirect treatment comparison of efficacy outcomes (FVC, 6MWT) and does not report pharmacokinetic parameters for cipaglucosidase_alfa. |
| PD | Roberts_2025 | not_relevant | 0 | 0 | The paper is an indirect treatment comparison of clinical efficacy outcomes (FVC, 6MWT) and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters. |
| popPK | Schneider_2018 | irrelevant | 0 | 0 | The study focuses on recombinant human acid alpha-glucosidase (rhGAA) for Pompe disease, not cipaglucosidase alfa (which is for Fabry disease), and no quantitative PK parameters are provided. |
| PGx | Schoser_2021 | not_relevant | 0 | 0 | The paper reports a clinical trial comparing two treatments for Pompe disease but does not analyze how specific gene variants or genotypes affect the pharmacokinetics or pharmacodynamics of cipaglucosidase alfa. |
| popPK | Schoser_2026 | irrelevant | 0 | 0 | The paper is a clinical position statement regarding therapeutic stability corridors in Pompe disease and reports clinical efficacy outcomes (FVC, 6MWT) rather than pharmacokinetic parameters (CL, V, ka) for cipaglucosidase alfa. |
| PGx | Schoser_2026 | not_relevant | 0 | 0 | The paper defines clinical stability thresholds for Pompe disease treatment but does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Thurberg_2006 | irrelevant | 0 | 0 | The paper is a histopathological study of Pompe disease treatment and does not report any pharmacokinetic parameters for cipaglucosidase_alfa. |
| popPK | Zhu_2004 | irrelevant | 0 | 0 | The paper studies recombinant human acid alpha-glucosidase (rhGAA), not cipaglucosidase alfa, and focuses on glycogen clearance rather than quantitative PK parameters. |
| popPK | Zhu_2009 | irrelevant | 0 | 0 | The paper focuses on the efficacy of a glycoengineered enzyme (rhGAA) in a mouse model and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for cipaglucosidase_alfa. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
