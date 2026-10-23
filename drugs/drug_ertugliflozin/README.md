<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;ertugliflozin&quot;}]"></div>

# ertugliflozin

- **generic name:** ertugliflozin
- **ATC codes:** `A10BD23`, `A10BD24`, `A10BK04`
- **DrugBank:** [DB11827](https://go.drugbank.com/drugs/DB11827) · **PubChem:** [CID 44814423](https://pubchem.ncbi.nlm.nih.gov/compound/44814423)
- **molar mass:** 436.89 g/mol (C22H25ClO7) — DrugBank
- **groups:** approved, investigational

## About

Ertugliflozin is a blood-glucose-lowering medicine (an SGLT2 inhibitor) used to treat type 2 diabetes. It is authorised in the European Union and is available both alone and in combination products with other oral diabetes drugs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27077223](https://www.wikidata.org/wiki/Q27077223) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Fediuk_2021_3_HbA1c](drugs/drug_ertugliflozin/pd_Fediuk_2021_3_HbA1c.md) | HbA1c ← ertugliflozin · direct Emax (saturable) effect | — | Fediuk DJ et al., End-to-end application of model-informe…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12633](https://doi.org/10.1002/psp4.12633) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Fediuk_2021_3_UGE24](drugs/drug_ertugliflozin/pd_Fediuk_2021_3_UGE24.md) | UGE24 ← ertugliflozin · direct Emax (saturable) effect | — | Fediuk DJ et al., End-to-end application of model-informe…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12633](https://doi.org/10.1002/psp4.12633) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **UGT1A9** | `Q88` · AUC | metabolism | [Fediuk_2021_3](drugs/drug_ertugliflozin/pgx_Fediuk_2021_3_UGT1A9_Q88.md) | Fediuk DJ et al., End-to-end application of model-informe…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12633](https://doi.org/10.1002/psp4.12633) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ertugliflozin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | kidney | `UGT1A9` metabolism/substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `UGT1A1` inhibitor, `UGT1A4` inhibitor, `UGT1A9` metabolism/substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` inhibitor, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| — | kidney | `SLC5A2` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 23:48 | 2:25 | 0/0/0 | 1/0/0 | 0/0/1 | 86,061/2,547 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 34 matched, 34 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_9 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fediuk_2021.pdf` | Fediuk DJ et al., Population Pharmacokinetic Model for Er…, Clinical pharmacology in dr… (2021) | popPK | 10 | [10.1002/cpdd.885](https://doi.org/10.1002/cpdd.885) | [33205593](https://pubmed.ncbi.nlm.nih.gov/33205593) | The paper describes a population PK model for ertugliflozin, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided abstract text. |
| `Fediuk_2021_2.pdf` | Fediuk DJ et al., Population Pharmacokinetic Analyses of…, Clinical pharmacology in dr… (2021) | popPK | 10 | [10.1002/cpdd.970](https://doi.org/10.1002/cpdd.970) | [34213819](https://pubmed.ncbi.nlm.nih.gov/34213819) | The paper reports a population PK model for ertugliflozin with specific percentage changes in CL/F and Vc/F, but absolute numeric parameter values (e.g., specific L/h or L) are not provided in the text. |
| `Kirkwood_2026.pdf` | Kirkwood NC et al., Pharmacokinetics of Ertugliflozin, a So…, Veterinary sciences (2026) | popPK | 10 | [10.3390/vetsci13050445](https://doi.org/10.3390/vetsci13050445) | [42188915](https://pubmed.ncbi.nlm.nih.gov/42188915) | The study reports quantitative non-compartmental pharmacokinetic parameters (Tmax, Cmax, T1/2, CL/F) for ertugliflozin in horses, with all values explicitly provided in the abstract. |
| `Dawra_2018.pdf` | Dawra VK et al., Effect of Rifampin on the Pharmacokinet…, Clinical therapeutics (2018) | popPK | 8 | [10.1016/j.clinthera.2018.07.014](https://doi.org/10.1016/j.clinthera.2018.07.014) | [30170758](https://pubmed.ncbi.nlm.nih.gov/30170758) | The study reports non-compartmental PK parameters (t1/2, AUC, Cmax) for ertugliflozin in humans, but lacks specific clearance (CL) or volume (V) values. |
| `Dawra_2019.pdf` | Dawra VK et al., A PK/PD study comparing twice-daily to…, International journal of cl… (2019) | pd | 5 | [10.5414/CP203343](https://doi.org/10.5414/CP203343) | [30802200](https://www.ncbi.nlm.nih.gov/pubmed/30802200) | metadata signals extractable PD data (PK/PD) |
| `Yao_2023.pdf` | Yao X et al., A model-based meta analysis study of so…, CPT: pharmacometrics & syst… (2023) | pd | 5 | [10.1002/psp4.12934](https://doi.org/10.1002/psp4.12934) | [36890732](https://www.ncbi.nlm.nih.gov/pubmed/36890732) | metadata signals extractable PD data (PK/PD) |
| `Bansal_2025.pdf` | Bansal N et al., Identification and investigation of hit…, Journal of molecular graphi… (2025) | pd | 4 | [10.1016/j.jmgm.2025.109036](https://doi.org/10.1016/j.jmgm.2025.109036) | [40199086](https://www.ncbi.nlm.nih.gov/pubmed/40199086) | metadata signals extractable PD data (IC50) |
| `Marshall_2021.pdf` | Marshall JC et al., Meta-Analysis of Noncompartmental Pharm…, Journal of clinical pharmac… (2021) | pgx | 8 | [10.1002/jcph.1866](https://doi.org/10.1002/jcph.1866) | [33813736](https://www.ncbi.nlm.nih.gov/pubmed/33813736) | metadata signals extractable PGX data (UGT1A9, PK/PD-context) |
| `Lapham_2020.pdf` | Lapham K et al., In Vitro Characterization of Ertugliflo…, Drug metabolism and disposi… (2020) | pgx | 7 | [10.1124/dmd.120.000171](https://doi.org/10.1124/dmd.120.000171) | [33020067](https://www.ncbi.nlm.nih.gov/pubmed/33020067) | metadata signals extractable PGX data (UGT1A9, PK/PD-context) |

<sub>queue written 2026-10-04T23:46:59.783576+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bansal_2025 | irrelevant | 0 | 0 | The paper focuses on drug repurposing for Alzheimer's disease targeting NMDA receptors and does not report pharmacokinetic parameters for ertugliflozin. |
| PD | Bansal_2025 | not_relevant | 0 | 0 | The paper focuses on drug repurposing for Alzheimer's disease targeting NMDA receptors and does not contain any pharmacodynamic or exposure-response data for ertugliflozin. |
| popPK | Cherney_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting renal function (eGFR) and albuminuria outcomes, not a pharmacokinetic study with disposition parameters like clearance or volume. |
| PD | Cherney_2020 | not_relevant | 3 | 2 | The paper reports clinical trial outcomes (eGFR, UACR) by fixed dose groups (5 mg vs 15 mg) over time, but does not provide exposure data (plasma concentrations) or fit a pharmacodynamic model (e.g., Emax, EC50) to derive numeric PD parameters. |
| PD | Dawra_2018 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetic interaction between rifampin and ertugliflozin, reporting PK parameters (AUC, Cmax, etc.) without providing any pharmacodynamic or exposure-response analysis. |
| PGx | Dawra_2018 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (rifampin) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Dawra_2019 | irrelevant | 2 | 0 | The study is a drug interaction assessment reporting only relative changes (AUC/Cmax ratios) and qualitative conclusions, without providing absolute quantitative disposition parameters (CL, V, ka) for ertugliflozin. |
| popPK | Dawra_2019_2 | irrelevant | 0 | 0 | no_text gate: only 102 chars of text extracted (&lt; 400) |
| PD | Dawra_2019_2 | not_relevant | 0 | 0 | The provided text is only the title of the study and does not contain the full text, results, or any numeric PD parameters or curves. |
| popPK | Donnan_2018 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis of clinical outcomes (urinary tract infections) and does not report any pharmacokinetic parameters for ertugliflozin. |
| PD | Donnan_2018 | not_relevant | 2 | 1 | The paper is a network meta-analysis of clinical trial outcomes (UTI risk) comparing different dose levels, but it does not report pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50) for ertugliflozin. |
| popPK | Fediuk_2021 | relevant | 10 | 2 | The paper describes a population PK model for ertugliflozin, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided abstract text. |
| popPK | Fediuk_2021_2 | relevant | 10 | 4 | The paper reports a population PK model for ertugliflozin with specific percentage changes in CL/F and Vc/F, but absolute numeric parameter values (e.g., specific L/h or L) are not provided in the text. |
| popPK | Fediuk_2021_3 | relevant | 8 | 2 | The paper is a review describing a population PK model for ertugliflozin, but the specific numeric parameter estimates (CL, V, Q, ka) are not provided in the text, only qualitative covariate effects and exposure metrics. |
| popPK | Gomes_2026 | irrelevant | 1 | 0 | The paper is a scoping review that qualitatively summarizes the effects of rifampicin on ertugliflozin without reporting original quantitative pharmacokinetic parameter values. |
| PD | Gomes_2026 | not_relevant | 1 | 0 | The paper is a scoping review that qualitatively summarizes PK effects of rifampicin on ertugliflozin but does not report or provide access to numeric PD parameters or concentration-effect curves. |
| popPK | Gumieniczek_2024 | irrelevant | 1 | 0 | The study focuses on lipophilicity analysis (chromatographic/computational) and only mentions PK parameters like clearance and volume in the context of correlation with lipophilicity, without reporting original quantitative PK model parameters for ertugliflozin. |
| PD | Gumieniczek_2024 | not_relevant | 1 | 0 | The paper analyzes lipophilicity and correlates it with static properties like IC50, but does not report an exposure-response or dose-response relationship with numeric PD parameters. |
| PD | Kirkwood_2026 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics of ertugliflozin in horses and does not report any pharmacodynamic or exposure-response analysis. |
| PGx | Lapham_2020 | not_relevant | 0 | 0 | The paper characterizes in vitro enzyme kinetics and fractional metabolism of ertugliflozin but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Li_2021 | relevant | 8 | 2 | The study reports PK parameters for ertugliflozin, but only provides half-life and exposure ratios, lacking specific numeric values for clearance, volume, or compartmental model parameters. |
| popPK | Lloyd_2025 | irrelevant | 0 | 0 | The paper is a computational structural study (docking/MD) of SGLT2 binding and does not report any pharmacokinetic parameters for ertugliflozin. |
| PD | Lloyd_2025 | not_relevant | 0 | 0 | The paper is a computational structural bioinformatics study (docking and molecular dynamics) investigating potential polypharmacy interactions at the SGLT2 binding site; it does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for ertugliflozin. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The study models the pharmacodynamic effect of ertugliflozin on body weight, not its pharmacokinetic disposition parameters. |
| popPK | Yao_2023 | irrelevant | 0 | 0 | no_text gate: only 79 chars of text extracted (&lt; 400) |
| PD | Yao_2023 | not_relevant | 0 | 0 | The provided text is only the title of a meta-analysis and does not contain the full text, data, or specific numeric PD parameters for ertugliflozin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
