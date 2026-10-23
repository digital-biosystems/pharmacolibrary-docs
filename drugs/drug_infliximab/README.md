<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;infliximab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Infliximab_Eser2021_reference&quot;,&quot;label&quot;:&quot;Eser_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_infliximab/Infliximab_Eser2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Infliximab_Little2022_reference&quot;,&quot;label&quot;:&quot;Little_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_infliximab/Infliximab_Little2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# infliximab

- **generic name:** infliximab
- **ATC codes:** `L04AB02`
- **DrugBank:** [DB00065](https://go.drugbank.com/drugs/DB00065) · **PubChem:** none
- **groups:** approved, investigational

## About

Infliximab is a monoclonal antibody that blocks tumour necrosis factor alpha and is used to treat inflammatory conditions such as rheumatoid and psoriatic arthritis, Crohn's disease, ulcerative colitis, psoriasis, and ankylosing spondylitis. It is approved and widely used, with several products authorised in the European Union, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415264](https://www.wikidata.org/wiki/Q415264) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Little_2022_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_infliximab/Infliximab_Little2022_reference.md?tab=Simulation) · [record](drugs/drug_infliximab/Infliximab_Little2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.01108 | L/h | 0.266 L/day | adults with rheumatoid arthritis and ankylosing spondylitis | human | <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Eser_2021_reference](drugs/drug_infliximab/Infliximab_Eser2021_reference.md) |
| CL | CL | 0.01479 | L/h | 0.355 L/d | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Little_2022_reference](drugs/drug_infliximab/Infliximab_Little2022_reference.md) |
| V | V | 5.531 | L | 5.5313 L | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Little_2022_reference](drugs/drug_infliximab/Infliximab_Little2022_reference.md) |
| V | V1 | 2.79 | L | 2.79 L | adults with rheumatoid arthritis and ankylosing spondylitis | human | <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Eser_2021_reference](drugs/drug_infliximab/Infliximab_Eser2021_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">0.01</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">0.1</text><text x="184" y="34.0" font-size="11" text-anchor="end">Eser_2021 · CL</text><circle cx="205.6" cy="30.0" r="4" fill="#66bb6a"><title>Eser_2021 · CL: 0.01108 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Little_2022 · CL</text><circle cx="249.5" cy="46.0" r="4" fill="#2e7d32"><title>Little_2022 · CL: 0.01479 L/h</title></circle></svg><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Little_2022 · V</text><circle cx="450.0" cy="30.0" r="4" fill="#2e7d32"><title>Little_2022 · V: 5.531 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Eser_2021 · V1</text><circle cx="346.0" cy="46.0" r="4" fill="#66bb6a"><title>Eser_2021 · V1: 2.79 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces with caveats" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces with caveats</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Eser_2021_reference](drugs/drug_infliximab/Infliximab_Eser2021_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 (+7 cov.) | Eser A et al., Increased Induction Infliximab Clearanc…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1732](https://doi.org/10.1002/jcph.1732) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Little_2022_reference](drugs/drug_infliximab/Infliximab_Little2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Little RD et al., Therapeutic Drug Monitoring of Subcutan…, Journal of clinical medicine (2022) | [10.3390/jcm11206173](https://doi.org/10.3390/jcm11206173) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Hemperly_2025_reference](drugs/drug_infliximab/Infliximab_Hemperly2025_reference.md) | — | 2-compartment (no model) | 3 (+3 cov.) | Hemperly A et al., Pharmacokinetics and Exposure-Response…, Journal of clinical medicine (2025) | [10.3390/jcm14227968](https://doi.org/10.3390/jcm14227968) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub> | [Song_2025_reference](drugs/drug_infliximab/Infliximab_Song2025_reference.md) | — | 2-compartment (no model) | 7 | Song JH et al., Population Pharmacokinetic Model for th…, Gut and liver (2025) | [10.5009/gnl240503](https://doi.org/10.5009/gnl240503) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Samuels_2025_ESR](drugs/drug_infliximab/pd_Samuels_2025_ESR.md) | erythrocyte sedimentation rate ← infliximab dose number · direct Emax (saturable) effect | model (no simulator) | Samuels A et al., Integrating early response biomarkers i…, Clinical and translational… (2025) | [10.1111/cts.70086](https://doi.org/10.1111/cts.70086) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Samuels_2025_albumin](drugs/drug_infliximab/pd_Samuels_2025_albumin.md) | serum albumin ← infliximab dose number · direct Emax (saturable) effect | model (no simulator) | Samuels A et al., Integrating early response biomarkers i…, Clinical and translational… (2025) | [10.1111/cts.70086](https://doi.org/10.1111/cts.70086) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Samuels_2025_nCD64](drugs/drug_infliximab/pd_Samuels_2025_nCD64.md) | neutrophil CD64 ← infliximab dose number · direct Emax (saturable) effect | model (no simulator) | Samuels A et al., Integrating early response biomarkers i…, Clinical and translational… (2025) | [10.1111/cts.70086](https://doi.org/10.1111/cts.70086) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Samuels_2025_weight](drugs/drug_infliximab/pd_Samuels_2025_weight.md) | weight ← infliximab dose number · direct Emax (saturable) effect | model (no simulator) | Samuels A et al., Integrating early response biomarkers i…, Clinical and translational… (2025) | [10.1111/cts.70086](https://doi.org/10.1111/cts.70086) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=infliximab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: TNF (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:55 | 3:37 | 2/2/0 | 1/0/0 | 0/0/0 | 328,920/18,466 | einfracz / qwen3.8-27b | 9 | 0/9 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 113 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 2  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2025.pdf` | Wang Z et al., Optimizing the switch from escalated in…, Journal of Crohn's & colitis (2025) | popPK | 10 | [10.1093/ecco-jcc/jjaf151](https://doi.org/10.1093/ecco-jcc/jjaf151) | [40875539](https://pubmed.ncbi.nlm.nih.gov/40875539) | The paper is a population PK/PD study of infliximab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence (abstract only). |
| `Nassar-Sheikh_2022.pdf` | Nassar-Sheikh Rashid A et al., Population Pharmacokinetics of Inflixim…, Therapeutic drug monitoring (2022) | popPK | 9 | [10.1097/FTD.0000000000000914](https://doi.org/10.1097/FTD.0000000000000914) | [34292215](https://pubmed.ncbi.nlm.nih.gov/34292215) | The study is a population PK analysis of infliximab, but specific numeric parameter values (CL, V, etc.) are not present in the provided text. |
| `Kimura_2020.pdf` | Kimura K et al., Prediction of treatment failure during…, European journal of pharmac… (2020) | popPK | 8 | [10.1016/j.ejps.2020.105317](https://doi.org/10.1016/j.ejps.2020.105317) | [32205229](https://pubmed.ncbi.nlm.nih.gov/32205229) | The study performs a population PK/PD model of infliximab in humans, but specific quantitative parameter values (e.g., mean CL, V) are not explicitly listed in the provided abstract text. |
| `Vande_2019.pdf` | Vande Casteele N et al., Infliximab Exposure-Response Relationsh…, Clinical gastroenterology a… (2019) | popPK | 6 | [10.1016/j.cgh.2018.10.036](https://doi.org/10.1016/j.cgh.2018.10.036) | [30613004](https://pubmed.ncbi.nlm.nih.gov/30613004) | The paper reports quantitative clearance thresholds (e.g., &lt;0.397 L/d) and a 2-compartment model, but the primary focus is exposure-response rather than comprehensive PK parameter estimation. |

<sub>queue written 2026-10-06 23:52 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Faghihi_2019 | irrelevant | 2 | 0 | The study focuses on formulation stability and local in vivo activity (TNF-alpha suppression) in mice, without reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for infliximab. |
| popPK | Heikal_2024 | irrelevant | 2 | 0 | The paper is an external evaluation of existing models and reports only performance metrics (bias/error) rather than the original quantitative PK parameter estimates (CL, V, etc.) for infliximab. |
| popPK | Hemperly_2018 | irrelevant | 4 | 2 | The paper is a review article that cites general ranges (Vss 4.5-6 L, t1/2 14 days) but does not report original quantitative PK parameters (CL, V, Q) from a specific population PK study. |
| popPK | Irie_2025 | relevant | 8 | 2 | The study applies a population PK model for infliximab in pediatric patients but reports prediction errors (RMSE) rather than explicit quantitative parameter estimates (e.g., typical CL, V) in the provided text. |
| popPK | Kantasiripitak_2022 | irrelevant | 1 | 0 | The paper evaluates the predictive performance of existing models for dosing optimization but does not report original quantitative population PK parameter estimates (CL, V, Q) for infliximab. |
| popPK | Kimura_2019 | irrelevant | 2 | 0 | The paper describes a PK/PD modeling study for clinical response but the provided evidence contains no numeric PK parameter values (CL, V, etc.). |
| popPK | Kimura_2020 | relevant | 8 | 2 | The study performs a population PK/PD model of infliximab in humans, but specific quantitative parameter values (e.g., mean CL, V) are not explicitly listed in the provided abstract text. |
| popPK | Kinzer_2023 | irrelevant | 0 | 0 | The study is a physicochemical and functional characterization (binding affinity, glycan analysis) and does not report pharmacokinetic disposition parameters (CL, V, half-life) for infliximab. |
| popPK | Mould_2015 | irrelevant | 1 | 0 | The paper is a review discussing the design of dose optimization dashboard systems with infliximab as a reference example, and it does not report any quantitative pharmacokinetic parameter values. |
| popPK | Nassar-Sheikh_2022 | relevant | 9 | 2 | The study is a population PK analysis of infliximab, but specific numeric parameter values (CL, V, etc.) are not present in the provided text. |
| popPK | Pool_2026 | irrelevant | 4 | 1 | The study performs statistical association analysis of covariates with trough levels rather than fitting a compartmental or population PK model to derive quantitative parameters like clearance or volume of distribution. |
| popPK | Roblin_2024 | irrelevant | 2 | 0 | This is a review of therapeutic drug monitoring strategies in inflammatory bowel disease that discusses population PK concepts and dashboards but does not report original quantitative disposition parameter values (CL, V, etc.) for infliximab. |
| popPK | Samuels_2025 | relevant | 6 | 2 | The study extends a published population PK model for infliximab in humans but reports covariate change parameters (Emax) rather than the primary PK parameter values (CL, V) which are cited from a prior publication. |
| popPK | Steenholdt_2025 | irrelevant | 1 | 0 | The study is a clinical outcomes analysis of biologic sequencing in IBD that uses infliximab trough levels only to classify failure mechanisms (PK vs PD) and does not report population pharmacokinetic parameters (CL, V, t1/2) for infliximab. |
| popPK | Vande_2019 | relevant | 6 | 4 | The paper reports quantitative clearance thresholds (e.g., &lt;0.397 L/d) and a 2-compartment model, but the primary focus is exposure-response rather than comprehensive PK parameter estimation. |
| popPK | Wang_2025 | relevant | 10 | 0 | The paper is a population PK/PD study of infliximab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence (abstract only). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Binfliximab%5D&body=Drug%3A%20infliximab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_infliximab/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 23:53 UTC</sub>
