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
| 2026-10-05 11:14 | 1:34 | 0/0/0 | 0/0/0 | 0/0/0 | 59,529/1,310 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/6 | 4/1 | 0 |

## popPK records

_not available_

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
| popPK | Anding_2023 | irrelevant | 0 | 0 | The study focuses on alglucosidase alfa and avalglucosidase alfa, not cipaglucosidase alfa, and does not report PK parameters for the target drug. |
| popPK | Byrne_2024 | relevant | 8 | 2 | The paper reports population PK analysis and half-life changes for cipaglucosidase alfa, but specific numeric parameter values (CL, V, Q) are located in the supplementary material which is not provided. |
| PD | Byrne_2024 | not_relevant | 2 | 1 | The paper reports descriptive changes in pharmacodynamic biomarkers (CK, Hex4) and efficacy endpoints over time, but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Byrne_2024_2 | irrelevant | 4 | 2 | The paper is a mechanistic review that cites PK parameters (half-life, AUC) from other studies but does not report original quantitative compartmental PK model parameters (CL, V, Q) for cipaglucosidase alfa. |
| popPK | Corsini_2025 | irrelevant | 0 | 0 | The paper is a review of treatment strategies for Pompe disease and does not report quantitative pharmacokinetic parameters for cipaglucosidase alfa. |
| popPK | Han_2016 | irrelevant | 0 | 0 | The study investigates the effect of propranolol on the efficacy of enzyme replacement therapy (rhGAA) in mice, focusing on therapeutic outcomes (weight, glycogen) rather than reporting quantitative pharmacokinetic parameters (CL, V, t1/2) for cipaglucosidase_alfa. |
| popPK | Lim_2017 | irrelevant | 0 | 0 | The study focuses on immune tolerance and efficacy in GAA-KO mice, not the pharmacokinetic disposition parameters of cipaglucosidase_alfa. |
| popPK | Masat_2016 | irrelevant | 0 | 0 | The paper studies the immunogenicity of Myozyme (alglucosidase alfa) in Pompe disease, not the pharmacokinetics of cipaglucosidase alfa. |
| popPK | Mendelsohn_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting functional and respiratory outcomes (FVC, 6MWT) rather than pharmacokinetic parameters (CL, V, t1/2) for cipaglucosidase alfa. |
| popPK | Nowlin_2026 | irrelevant | 0 | 0 | The study investigates the delivery of alglucosidase alfa and avalglucosidase alfa (not cipaglucosidase alfa) in mice and reports histological/biochemical outcomes rather than quantitative pharmacokinetic parameters. |
| popPK | Roberts_2025 | irrelevant | 0 | 0 | The paper is an indirect treatment comparison of efficacy outcomes (FVC, 6MWT) and does not report any pharmacokinetic parameters for cipaglucosidase alfa. |
| PD | Roberts_2025 | not_relevant | 0 | 0 | The paper is an indirect treatment comparison of clinical efficacy outcomes (FVC, 6MWT) and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters. |
| popPK | Schneider_2018 | irrelevant | 0 | 0 | The study investigates recombinant human acid alpha-glucosidase (rhGAA) for Pompe disease, not cipaglucosidase alfa (which is for Fabry disease). |
| PGx | Schoser_2021 | not_relevant | 0 | 0 | The paper reports a clinical trial comparing two treatments for Pompe disease but does not analyze how specific gene variants or genotypes alter the pharmacokinetic or pharmacodynamic parameters of cipaglucosidase alfa. |
| popPK | Schoser_2026 | irrelevant | 0 | 0 | The paper is a clinical position statement regarding therapeutic stability thresholds (FVC, 6MWT) for Pompe disease treatments and does not report pharmacokinetic parameters (CL, V, ka) for cipaglucosidase alfa. |
| PGx | Schoser_2026 | not_relevant | 0 | 0 | The paper discusses clinical therapeutic stability thresholds for Pompe disease treatments but does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Thurberg_2006 | irrelevant | 0 | 0 | The study is a histopathological analysis of muscle biopsies in Pompe disease patients and does not report any pharmacokinetic parameters for cipaglucosidase alfa. |
| popPK | Zhu_2004 | irrelevant | 0 | 0 | The study focuses on the efficacy of a modified enzyme (neo-rhGAA) for glycogen clearance in Pompe mice, not on the pharmacokinetic parameters (CL, V, etc.) of cipaglucosidase alfa. |
| popPK | Zhu_2009 | irrelevant | 0 | 0 | The study focuses on the efficacy of a glycoengineered enzyme in a mouse model of Pompe disease and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for cipaglucosidase_alfa. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
