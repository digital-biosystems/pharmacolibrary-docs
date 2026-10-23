<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;oliceridine&quot;}]"></div>

# oliceridine

- **generic name:** oliceridine
- **ATC codes:** `N02AX07`
- **DrugBank:** [DB14881](https://go.drugbank.com/drugs/DB14881) · **PubChem:** not captured
- **molar mass:** 386.55 g/mol (C22H30N2O2S) — DrugBank
- **groups:** approved, investigational

## About

Oliceridine is an opioid painkiller (analgesic) used to treat pain. It is an approved medicine, but not authorised in the European Union, and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q17142898](https://www.wikidata.org/wiki/Q17142898) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Simons_2023_V_E55](drugs/drug_oliceridine/pd_Simons_2023_V_E55.md) | Ventilation at an extrapolated end-tidal Pco 2 of 55 mmHg ← oliceridine · direct sigmoid Emax (Hill) effect | — | Simons P et al., Respiratory Effects of Biased Ligand Ol…, Anesthesiology (2023) | [10.1097/ALN.0000000000004473](https://doi.org/10.1097/ALN.0000000000004473) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Song_2025_successful_anesthesia_absence_of_body_movement_during_cervical_dilation](drugs/drug_oliceridine/pd_Song_2025_successful_anesthesia_absence_of_body_movement_dur.md) | successful anesthesia (absence of body movement during cervical dilation) ← oliceridine · categorical (graded) response model | — | Song CZ et al., Determination of the 90% Effective Dose…, Drug design, development an… (2025) | [10.2147/DDDT.S546489](https://doi.org/10.2147/DDDT.S546489) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Buchwald_2023_Arr](drugs/drug_oliceridine/pd_Buchwald_2023_Arr.md) | β-arrestin2 recruitment ← oliceridine · delayed effect through transit (transduction) compartments | — | Buchwald P, Quantitative receptor model for respons…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1274065](https://doi.org/10.3389/fphar.2023.1274065) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Buchwald_2023_Gprt](drugs/drug_oliceridine/pd_Buchwald_2023_Gprt.md) | G protein activation ← oliceridine · delayed effect through transit (transduction) compartments | — | Buchwald P, Quantitative receptor model for respons…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1274065](https://doi.org/10.3389/fphar.2023.1274065) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Simons_2023](drugs/drug_oliceridine/pgx_Simons_2023_CYP2D6_Q27.md) | Simons P et al., Respiratory Effects of Biased Ligand Ol…, Anesthesiology (2023) | [10.1097/ALN.0000000000004473](https://doi.org/10.1097/ALN.0000000000004473) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:38 | 0:52 | 0/0/0 | 1/1/1 | 0/0/1 | 130,379/3,584 | einfracz / qwen3.8-27b | 9 | 2/10 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 42 matched, 42 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fossler_2018.pdf` | Fossler MJ et al., Oliceridine (TRV130), a Novel G Protein…, Journal of clinical pharmac… (2018) | popPK | 9 | [10.1002/jcph.1076](https://doi.org/10.1002/jcph.1076) | [29412458](https://pubmed.ncbi.nlm.nih.gov/29412458) | The paper describes a population PK/PD model for oliceridine in humans and reports one quantitative parameter (EC50) in the text, but the specific PK parameters (CL, V, Q, etc.) are not listed in the provided evidence. |
| `Dahan_2020.pdf` | Dahan A et al., Benefit and Risk Evaluation of Biased μ…, Anesthesiology (2020) | popPK | 6 | [10.1097/ALN.0000000000003441](https://doi.org/10.1097/ALN.0000000000003441) | [32788558](https://pubmed.ncbi.nlm.nih.gov/32788558) | The study performs a population PK-PD analysis for oliceridine, but the extracted evidence only reports PD potency parameters (EC50, potency) rather than specific quantitative PK parameters (CL, V, ka) which are likely in the full text or supplementary material not provided. |
| `Lu_2026.pdf` | Lu ZQ et al., Oliceridine Reduces the EC50 of Remifen…, Neuro endocrinology letters (2026) | pd | 5 | not captured | [42460910](https://www.ncbi.nlm.nih.gov/pubmed/42460910) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T05:38:09.442016+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Buchwald_2023 | irrelevant | 0 | 0 | The paper is a mechanistic study of receptor signaling (pharmacodynamics/biochemistry) using in vitro cell assays, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Dahan_2020 | relevant | 6 | 2 | The study performs a population PK-PD analysis for oliceridine, but the extracted evidence only reports PD potency parameters (EC50, potency) rather than specific quantitative PK parameters (CL, V, ka) which are likely in the full text or supplementary material not provided. |
| popPK | Fossler_2018 | relevant | 9 | 2 | The paper describes a population PK/PD model for oliceridine in humans and reports one quantitative parameter (EC50) in the text, but the specific PK parameters (CL, V, Q, etc.) are not listed in the provided evidence. |
| popPK | Fossler_2018_2 | irrelevant | 2 | 0 | The paper is a simulation study of study designs based on an existing PK/PD model and does not report new quantitative disposition parameter values (CL, V, etc.) for oliceridine in the provided evidence. |
| PGx | Fossler_2018_2 | not_relevant | 5 | 2 | The paper describes simulations involving CYP2D6 poor metabolizers, but it is a model-based study, not a report of observed pharmacogenomic data with fitted quantitative effect sizes. |
| popPK | Goudra_2021 | irrelevant | 1 | 0 | The paper is a review that discusses oliceridine's mechanism and clinical use but explicitly states that pharmacokinetic data (such as context-sensitive half-times) are not yet available for oliceridine, providing no quantitative PK parameters. |
| PD | Goudra_2021 | not_relevant | 1 | 0 | The text is a qualitative review discussing the mechanism of action and general dose-dependent effects of oliceridine without providing specific numeric PD parameters or exposure-response data. |
| popPK | Lu_2026 | irrelevant | 0 | 0 | The study is a clinical pharmacodynamic trial measuring remifentanil EC50 and hemodynamic responses, not a pharmacokinetic study reporting disposition parameters for oliceridine. |
| popPK | Miao_2026 | irrelevant | 2 | 0 | The study reports pharmacodynamic ED50 values, not quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| popPK | Moss_2023 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (neurocognitive and analgesic) and reports effect-site concentrations (C50), but does not report quantitative population pharmacokinetic disposition parameters such as clearance, volume of distribution, or half-life for oliceridine. |
| popPK | Ok_2018 | relevant | 4 | 3 | The paper is a review that reports some quantitative PK parameters (half-life 1.6-2.7 h, clearance ~34 L/h) for oliceridine, but lacks a full compartmental or population PK model with volume of distribution or intercompartmental clearance. |
| PD | Ok_2018 | not_relevant | 2 | 0 | The paper is a review article describing the mechanism of action and general pharmacodynamics of oliceridine without reporting specific numeric PD parameters or concentration-effect curves. |
| popPK | Pedersen_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of receptor binding kinetics and biased agonism, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Simons_2023 | relevant | 10 | 2 | The paper describes a population pharmacokinetic-pharmacodynamic study for oliceridine and explicitly states that parameter estimates are in Table 1, but the table content is not included in the provided evidence. |
| popPK | Song_2025 | irrelevant | 0 | 0 | The study is a pharmacodynamic dose-finding trial (ED90) for anesthesia efficacy and safety, not a pharmacokinetic study, and reports no disposition parameters (CL, V, t1/2, etc.) for oliceridine. |
| popPK | Stahl_2022 | irrelevant | 0 | 0 | The paper is a mechanistic reanalysis of receptor signaling data (intrinsic efficacy and bias) in vitro, containing no pharmacokinetic parameters for oliceridine. |
| popPK | Wallach_2023 | irrelevant | 0 | 0 | The study focuses on 5-HT2A receptor signaling and psychedelic potential in mice and does not involve oliceridine or report any pharmacokinetic parameters. |
| PD | Wallach_2023 | not_relevant | 0 | 0 | The paper focuses on 5-HT2A receptor signaling and psychedelic potential of various ligands (e.g., 25N series, DOI, LSD) and does not mention or analyze oliceridine. |
| popPK | Wu_2025 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (ED50/ED95) for oliceridine, not pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Yang_2022 | irrelevant | 0 | 0 | The paper focuses on a novel compound (LPM3480392) and oliceridine is only used as a structural reference/comparator; no pharmacokinetic parameters for oliceridine are reported. |
| popPK | Ye_2023 | irrelevant | 0 | 0 | The study evaluates the subacute toxicity and toxicokinetics of LPM3480392, not oliceridine, which is only mentioned as a comparator or lead compound. |
| PD | Ye_2023 | not_relevant | 2 | 1 | The paper is a subacute toxicity study reporting qualitative dose-dependent adverse effects and PK parameters, but it does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The study is a pharmacodynamic trial measuring the EC50 of remifentanil, not a pharmacokinetic study reporting disposition parameters (CL, V, Q, ka) for oliceridine. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 63 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
