<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Psilocybin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Psilocybin_Morse2025_reference&quot;,&quot;label&quot;:&quot;Morse_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_psilocybin/Psilocybin_Morse2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Psilocybin

- **generic name:** Psilocybin
- **ATC codes:** not captured
- **DrugBank:** [DB11664](https://go.drugbank.com/drugs/DB11664) · **PubChem:** [CID 10624](https://pubchem.ncbi.nlm.nih.gov/compound/10624)
- **molar mass:** 284.2481 g/mol (C12H17N2O4P) — DrugBank
- **groups:** investigational

## About

**Description.** Psilocybin has been investigated for the treatment of Anxiety and Stage IV Melanoma. In November, 2019, it was granted Breakthrough Therapy status by the FDA.

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| psilocin | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 08:45 | 9:07 | 1/1/0 | 2/0/0 | 0/0/1 | 425,911/16,628 | einfracz / qwen3.8-27b | 25 | 4/21 | 25/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Morse_2025_reference](drugs/drug_psilocybin/Psilocybin_Morse2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Morse JD et al., Pharmacokinetics and pharmacodynamics o…, Journal of psychopharmacolo… (2025) | [10.1177/02698811251330747](https://doi.org/10.1177/02698811251330747) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Holze_2023_reference](drugs/drug_psilocybin/Psilocybin_Holze2023_reference.md) | — | 1-compartment (no model) | 0 | Holze F et al., Pharmacokinetics and Pharmacodynamics o…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2821](https://doi.org/10.1002/cpt.2821) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Purohit_2023_metric_tensor_components_of_the_perceived_visual_space](drugs/drug_psilocybin/pd_Purohit_2023_metric_tensor_components_of_the_perceived_visua.md) | metric tensor components of the perceived visual space ← psilocybin · direct sigmoid Emax (Hill) effect | — | Purohit P et al., Empirically validated theoretical analy…, Frontiers in computational… (2023) | [10.3389/fncom.2023.1136985](https://doi.org/10.3389/fncom.2023.1136985) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Thaoboonruang_2026_5_HT2A_RO](drugs/drug_psilocybin/pd_Thaoboonruang_2026_5_HT2A_RO.md) | 5-HT2A receptor occupancy ← psilocin · direct Emax (saturable) effect | — | Thaoboonruang N et al., Development of a Physiologically Based…, European journal of drug me… (2026) | [10.1007/s13318-026-01033-x](https://doi.org/10.1007/s13318-026-01033-x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Thaoboonruang_2026_MADRS](drugs/drug_psilocybin/pd_Thaoboonruang_2026_MADRS.md) | Montgomery-Åsberg Depression Rating Scale (MADRS) scores ← psilocin · indirect response — drug inhibits the production of Montgomery-Åsberg Depression Rating Scale (MADRS) scores | — | Thaoboonruang N et al., Development of a Physiologically Based…, European journal of drug me… (2026) | [10.1007/s13318-026-01033-x](https://doi.org/10.1007/s13318-026-01033-x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q22` · CL | metabolism | [Becker_2025](drugs/drug_psilocybin/pgx_Becker_2025_CYP2D6_Q22.md) | Becker AM et al., Acute Effects and Pharmacokinetics of L…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3618](https://doi.org/10.1002/cpt.3618) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=psilocybin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` metabolism | paper PGx gene |
| metabolism | liver | `CYP2D6` metabolism | paper PGx gene |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 161 matched, 57 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Brown_2017.pdf` | Brown RT et al., Pharmacokinetics of Escalating Doses of…, Clinical pharmacokinetics (2017) | popPK | 10 | [10.1007/s40262-017-0540-6](https://doi.org/10.1007/s40262-017-0540-6) | [28353056](https://pubmed.ncbi.nlm.nih.gov/28353056) | The study reports population PK parameters for psilocybin's active metabolite psilocin (half-life 3h), but specific numeric values for clearance and volume are not present in the provided text. |
| `Holze_2023.pdf` | Holze F et al., Pharmacokinetics and Pharmacodynamics o…, Clinical pharmacology and t… (2023) | popPK | 9 | [10.1002/cpt.2821](https://doi.org/10.1002/cpt.2821) | [36507738](https://pubmed.ncbi.nlm.nih.gov/36507738) | The study reports quantitative PK parameters (Cmax, tmax, half-life) for psilocin (the active metabolite of psilocybin) using compartmental modeling, though specific clearance and volume values are not explicitly listed in the abstract text provided. |
| `Thaoboonruang_2026.pdf` | Thaoboonruang N et al., Development of a Physiologically Based…, European journal of drug me… (2026) | popPK | 8 | [10.1007/s13318-026-01033-x](https://doi.org/10.1007/s13318-026-01033-x) | [42663926](https://pubmed.ncbi.nlm.nih.gov/42663926) | The paper describes a PBPK/PD model for psilocybin/psilocin, which is a relevant disposition model, but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided evidence text. |
| `Dahmane_2021.pdf` | Dahmane E et al., Exposure-Response Analysis to Assess th…, Clinical pharmacology in dr… (2021) | pd | 5 | [10.1002/cpdd.796](https://doi.org/10.1002/cpdd.796) | [32250059](https://www.ncbi.nlm.nih.gov/pubmed/32250059) | metadata signals extractable PD data (Exposure-Response) |
| `Erkizia-Santamaría_2022.pdf` | Erkizia-Santamaría I et al., Serotonin 5-HT2A, 5-HT2c and 5-HT1A rec…, Biomedicine & pharmacothera… (2022) | pd | 4 | [10.1016/j.biopha.2022.113612](https://doi.org/10.1016/j.biopha.2022.113612) | [36049313](https://www.ncbi.nlm.nih.gov/pubmed/36049313) | metadata signals extractable PD data (Emax) |
| `DeBattista_2024.pdf` | DeBattista C et al., The Black Book of Psychotropic Dosing a…, Psychopharmacology bulletin (2024) | pgx | 7 | [10.64719/pb.4493](https://doi.org/10.64719/pb.4493) | [38993656](https://www.ncbi.nlm.nih.gov/pubmed/38993656) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-09T08:42:39.364505+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alhaj_2025 | not_relevant | 1 | 1 | The paper is a narrative review on drug hypersensitivity reactions; it mentions psilocybin only as a novel agent with understudied pharmacogenomics, providing no specific gene variants or quantitative PK/PD data. |
| PGx | Becker_2025 | not_relevant | 6 | 0 | The paper reports the effect of CYP2D6 genotype on LSD PK, but the question specifically asks about psilocybin, which is not the primary subject of the PK data (psilocybin is only mentioned in the context of previous/related work). |
| popPK | Brown_2017 | relevant | 10 | 2 | The study reports population PK parameters for psilocybin's active metabolite psilocin (half-life 3h), but specific numeric values for clearance and volume are not present in the provided text. |
| popPK | Dahan_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of ketamine and norketamine, not psilocybin. |
| popPK | Dahmane_2021 | irrelevant | 2 | 0 | The study focuses on exposure-response (QTc) analysis and reports pharmacodynamic metrics and exposure levels rather than population pharmacokinetic disposition parameters (CL, V, ka, Q). |
| popPK | Dai_2026 | irrelevant | 0 | 0 | The paper is an fMRI neuroimaging study of brain network integration-segregation in psychedelic states, not a pharmacokinetic study of psilocybin. |
| PGx | DeBattista_2024 | not_relevant | 0 | 0 | The paper discusses a CYP2D6 drug-drug interaction (bupropion inhibiting dextromethorphan), not a pharmacogenomic (genetic) effect on psilocybin PK/PD. |
| popPK | Dolder_2017 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of LSD, not psilocybin, which is the subject drug. |
| popPK | Drexler_2025 | irrelevant | 0 | 0 | The paper investigates the mechanistic effects of psilocybin on glioma proliferation and mentions its clearance qualitatively but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Eckernäs_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of N,N-dimethyltryptamine (DMT), not psilocybin. |
| popPK | Erkizia-Santamaría_2022 | irrelevant | 0 | 0 | no_text gate: only 192 chars of text extracted (&lt; 400) |
| popPK | Erritzoe_2024 | irrelevant | 0 | 0 | The study is a post hoc analysis of clinical trial outcomes regarding depression symptoms and does not report any pharmacokinetic parameters for psilocybin. |
| popPK | Fernández-Guarino_2026 | irrelevant | 0 | 0 | The paper is a review of psychotropic compounds in cutaneous biology and does not report pharmacokinetic parameters for psilocybin. |
| PGx | Forsyth_2026 | not_relevant | 0 | 0 | The study investigates behavioral responses to psilocybin in fish and explicitly states that effects were independent of genotype; it does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Halman_2025 | not_relevant | 4 | 5 | The paper is a review that discusses pharmacogenomics for psychedelics but only reports a specific pharmacodynamic effect for psilocin on HTR2A mutants in vitro, while stating there are no studies on human pharmacokinetic/PD variants for psilocybin itself. |
| popPK | Hastings_2026 | irrelevant | 0 | 0 | The paper is a computational analysis of mental health literature trends (GALENOS project) and does not report pharmacokinetic data for psilocybin. |
| popPK | Jaster_2025 | irrelevant | 6 | 0 | The study describes a PK profile (absorption, half-life, distribution) for psilocin/psilocybin in mice, but the specific numeric parameter values are contained in figures (Fig. 1c, d) that are not provided in the evidence. |
| popPK | Jones_2026 | irrelevant | 0 | 0 | The study is a mechanistic and biomarker analysis where psilocybin is used as a comparative agent in iPSC assays, not a pharmacokinetic study reporting quantitative disposition parameters for psilocybin. |
| popPK | Kelly_2026 | irrelevant | 0 | 0 | The study reports clinical outcome measures (anxiety, quality of life) and does not provide any pharmacokinetic parameters. |
| popPK | Kuypers_2026 | irrelevant | 0 | 0 | The paper is a mechanistic perspective review discussing psychedelic therapy mechanisms (neurochemistry, breathwork, VNS) and does not report any quantitative pharmacokinetic parameters for psilocybin. |
| PGx | Liechti_2022 | not_relevant | 1 | 1 | The text is a general overview of psychedelic dosing and does not report specific pharmacogenomic effects on PK/PD parameters. |
| PGx | Meshkat_2025 | not_relevant | 1 | 2 | This paper is a systematic review of general pharmacokinetics and mentions CYP2D6/3A4 metabolism, but it does not report specific pharmacogenomic effects (genotype-phenotype links) on PK/PD parameters. |
| PGx | Meyer_2011 | not_relevant | 0 | 0 | The paper is a review of isoenzymes involved in metabolism and does not report specific pharmacogenomic associations (genotype-to-PK/PD links) for psilocybin. |
| popPK | Morse_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for LSD, not psilocybin. |
| popPK | Olsen_2022 | irrelevant | 0 | 0 | The study examines neuroimaging (fMRI) connectivity dynamics in response to psilocybin and does not report quantitative pharmacokinetic parameters (CL, V, ka) for the drug. |
| popPK | Pellegrini_2025 | irrelevant | 0 | 0 | The paper is a clinical trial focused on the efficacy of psilocybin in OCD and reports only clinical outcomes, containing no pharmacokinetic parameter data. |
| popPK | Purohit_2023 | irrelevant | 0 | 0 | The paper is a theoretical computational model of visual-spatial perception under psilocybin influence and does not report quantitative population pharmacokinetic parameters (CL, V, Q, ka) for psilocybin. |
| PGx | Raffa_2026 | not_relevant | 0 | 0 | This is a narrative review of regulatory and pharmacy practice implications, not a primary study reporting specific pharmacogenomic changes to psilocybin PK/PD parameters. |
| PGx | Sarris_2022 | not_relevant | 0 | 0 | The paper is a general review of psychedelic medications for mood disorders and does not report specific pharmacogenomic effects on psilocybin's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Silva_2026 | not_relevant | 1 | 0 | The paper discusses toxicity prediction and metabolic pathways (CYP2C9) for psilocybin/psilocin and pesticides, but does not report specific pharmacogenomic effects (gene variants changing PK/PD) for psilocybin. |
| popPK | Studerus_2012 | irrelevant | 0 | 0 | The paper analyzes predictors of subjective psychological response to psilocybin (set and setting) and does not report any pharmacokinetic parameters (CL, V, ka, t1/2) or PK models. |
| popPK | Sutherland_2026 | irrelevant | 0 | 0 | The study focuses on EEG electrophysiological effects (neural plasticity/consciousness) and does not report quantitative pharmacokinetic disposition parameters (CL, V, ka) for psilocybin. |
| popPK | Thaoboonruang_2026 | relevant | 8 | 2 | The paper describes a PBPK/PD model for psilocybin/psilocin, which is a relevant disposition model, but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided evidence text. |
| PGx | Thomann_2024 | not_relevant | 3 | 2 | The study explicitly reports that CYP2D6 genotype did not influence psilocin plasma concentrations in the investigated population. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-09 08:42 UTC</sub>
