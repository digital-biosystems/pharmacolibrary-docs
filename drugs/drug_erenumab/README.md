<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;erenumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Erenumab_FiedlerKelly2019_reference&quot;,&quot;label&quot;:&quot;Fiedler-Kelly_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/Erenumab_FiedlerKelly2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Vu_2017_CIDBF&quot;,&quot;label&quot;:&quot;Vu_2017 \u00b7 CIDBF&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_erenumab/pd_Vu_2017_CIDBF.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# erenumab

- **generic name:** erenumab
- **ATC codes:** `N02CD01`
- **DrugBank:** [DB14039](https://go.drugbank.com/drugs/DB14039) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Erenumab is a monoclonal antibody that blocks the calcitonin gene-related peptide receptor and is used to prevent migraine. It is authorised in the European Union for migraine and is an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q28209017](https://www.wikidata.org/wiki/Q28209017) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 04:09 | 2:47 | 1/1/0 | 1/0/0 | 0/0/1 | 223,015/12,308 | einfracz / qwen3.8-27b | 11 | 2/15 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.0), gpt-oss:120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial 0/2</span> | [Fiedler-Kelly_2019_reference](drugs/drug_erenumab/Erenumab_FiedlerKelly2019_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Fiedler-Kelly JB et al., Population pharmacokinetic modelling an…, British journal of clinical… (2019) | [10.1111/bcp.14096](https://doi.org/10.1111/bcp.14096) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.8), gpt-oss:120b (partly confirmed, agreement 0.929). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Vu_2017_reference](drugs/drug_erenumab/Erenumab_Vu2017_reference.md) | — | 2-compartment (no model) | 8 | Vu T et al., Pharmacokinetic-Pharmacodynamic Relatio…, Pharmaceutical research (2017) | [10.1007/s11095-017-2183-6](https://doi.org/10.1007/s11095-017-2183-6) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Vu_2017_CIDBF](drugs/drug_erenumab/pd_Vu_2017_CIDBF.md) | capsaicin-induced dermal blood flow ← erenumab · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Vu T et al., Pharmacokinetic-Pharmacodynamic Relatio…, Pharmaceutical research (2017) | [10.1007/s11095-017-2183-6](https://doi.org/10.1007/s11095-017-2183-6) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: partial 1/2</span> | **RAMP1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Zecca_2022](drugs/drug_erenumab/pgx_Zecca_2022_RAMP1_Q100.md) | Zecca C et al., Clinic and genetic predictors in respon…, European journal of neurolo… (2022) | [10.1111/ene.15236](https://doi.org/10.1111/ene.15236) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=erenumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CALCRL (target), RAMP1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 40 matched, 38 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Shen_2022.pdf` | Shen Q et al., Pharmacokinetics and Safety of Erenumab…, Clinical drug investigation (2022) | popPK | 7 | [10.1007/s40261-022-01171-5](https://doi.org/10.1007/s40261-022-01171-5) | [35727536](https://pubmed.ncbi.nlm.nih.gov/35727536) | The study reports quantitative single-dose PK parameters (Cmax, AUC) for erenumab in humans, but does not report compartmental parameters like CL, V, or half-life in the provided text. |
| `Gupta_2025.pdf` | Gupta P et al., A Semi-Mechanistic Mathematical Model o…, Pharmaceutics (2025) | popPK | 5 | [10.3390/pharmaceutics17070845](https://doi.org/10.3390/pharmaceutics17070845) | [40733054](https://pubmed.ncbi.nlm.nih.gov/40733054) | The paper describes a population PK model for erenumab in rats to study immune tolerance, but no numeric parameter values (CL, V, etc.) are provided in the extracted evidence. |
| `Garelja_2024.pdf` | Garelja ML et al., Pharmacological characterisation of ere…, British journal of pharmaco… (2024) | pd | 4 | [10.1111/bph.16218](https://doi.org/10.1111/bph.16218) | [37580864](https://www.ncbi.nlm.nih.gov/pubmed/37580864) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-15T04:07:47.481003+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Hassany_2023 | irrelevant | 0 | 0 | The paper is a clinical case report and review discussing dose-finding strategies and pharmacodynamic models, containing no quantitative pharmacokinetic parameters (CL, V, t1/2) for erenumab. |
| PD | Al-Hassany_2023 | not_relevant | 3 | 2 | The paper is a review/commentary that references existing dose-response data (capsaicin model) but does not present new numeric PD parameters or a formal PK/PD model in the provided text. |
| popPK | Bashour_2023 | irrelevant | 0 | 0 | The paper is a biophysical study of antibody developability parameters and does not contain pharmacokinetic data for erenumab. |
| PD | Bashour_2023 | not_relevant | 0 | 0 | The paper focuses on computational analysis of antibody developability parameters (physicochemical properties) and does not contain any pharmacodynamic, exposure-response, or dose-response data for erenumab. |
| popPK | Bashour_2024 | irrelevant | 0 | 0 | The paper is a biophysical and computational study on antibody developability landscapes using a large dataset of sequences, not a pharmacokinetic study of erenumab. |
| PD | Bashour_2024 | not_relevant | 0 | 0 | The paper focuses on the biophysical and computational analysis of antibody developability parameters (physicochemical properties) and does not contain any pharmacokinetic, pharmacodynamic, or exposure-response data for erenumab or any other drug. |
| popPK | Chan_2021 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for GDC-0334 (a TRPA1 inhibitor), not erenumab. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The study evaluates psychometric properties and patient-reported outcomes (quality of life) rather than pharmacokinetic parameters like clearance or volume of distribution. |
| PD | Chen_2023 | not_relevant | 3 | 1 | The paper focuses on psychometric modeling (IRT) of a questionnaire and qualitative simulation of improvement, without reporting specific numeric exposure-response parameters (e.g., EC50, Emax) or a concentration-effect curve for erenumab. |
| popPK | Di_2019 | irrelevant | 0 | 0 | This is a cost-effectiveness/health utility analysis of migraine trials and reports no pharmacokinetic parameters for erenumab. |
| PD | Di_2019 | not_relevant | 2 | 1 | The paper models utility values as a function of clinical response (MMDs), not drug exposure or dose, and does not report pharmacodynamic parameters like Emax or EC50. |
| popPK | Fiedler-Kelly_2019 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for fremanezumab, not erenumab. |
| PD | Fiedler-Kelly_2019 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for fremanezumab, not erenumab, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Fiedler-Kelly_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and exposure-response models of fremanezumab, not erenumab, which is only mentioned as a comparator. |
| PD | Fiedler-Kelly_2020 | not_relevant | 0 | 0 | The paper reports exposure-response models for fremanezumab, not erenumab. |
| popPK | Gallardo_2026 | irrelevant | 0 | 0 | This is a biomarker/clinical response study that uses erenumab as a treatment to assess disease predictors, but does not report any pharmacokinetic disposition parameters (e.g., clearance, volume, half-life). |
| popPK | Garelja_2024 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study characterizing receptor binding and antagonism (IC50, pKB), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Giner-Soriano_2025 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for migraine preventive drugs (propranolol, amitriptyline, flunarizine, topiramate) and does not involve erenumab or pharmacokinetic modeling. |
| PD | Giner-Soriano_2025 | not_relevant | 0 | 0 | The paper is a study protocol for a clinical trial comparing standard migraine preventives (propranolol, amitriptyline, flunarizine, topiramate) and does not involve erenumab or report any pharmacodynamic or exposure-response modeling. |
| popPK | González-Hernández_2025 | irrelevant | 1 | 0 | The paper is a narrative review without original quantitative PK parameter values for erenumab. |
| PD | González-Hernández_2025 | not_relevant | 2 | 1 | The paper is a narrative review that qualitatively discusses PK/PD characteristics of anti-CGRP therapies but does not report specific numeric PD parameters or extractable exposure-response curves for erenumab. |
| popPK | Gupta_2025 | relevant | 5 | 0 | The paper describes a population PK model for erenumab in rats to study immune tolerance, but no numeric parameter values (CL, V, etc.) are provided in the extracted evidence. |
| PD | Gupta_2025 | not_relevant | 4 | 2 | The paper describes a semi-mechanistic PK/immunogenicity model for ADA formation and immune tolerance, not a pharmacodynamic exposure-response relationship for the drug's therapeutic effect (e.g., CGRP receptor inhibition), and specific numeric PD parameters for the drug effect are not reported. |
| popPK | Iannone_2022 | irrelevant | 0 | 0 | The paper is a clinical study on the effectiveness of anti-CGRP antibodies on migraine symptoms and does not report any pharmacokinetic parameters for erenumab. |
| PD | Iannone_2022 | not_relevant | 1 | 0 | The study reports qualitative clinical outcomes and symptom reduction percentages in a cohort but does not provide drug concentrations, dose levels, or numeric PD parameters (e.g., Emax, EC50) to establish an exposure-response relationship. |
| popPK | Janković_2024 | irrelevant | 0 | 0 | The paper is a narrative review focusing on drug interactions and does not report original quantitative pharmacokinetic parameters for erenumab. |
| PD | Janković_2024 | not_relevant | 1 | 0 | The paper is a narrative review focusing on drug interactions and provides no numeric PD parameters or concentration-effect curves for erenumab. |
| popPK | Jordan_2023 | irrelevant | 0 | 0 | The paper is a systematic scoping review regarding data availability for breastfeeding and infant outcomes, not a pharmacokinetic study of erenumab. |
| PD | Jordan_2023 | not_relevant | 0 | 0 | The paper is a systematic scoping review regarding breastfeeding and infant outcomes, containing no pharmacodynamic modeling or specific data for erenumab. |
| popPK | Kamogawa_2026 | irrelevant | 0 | 0 | This is a clinical outcome study evaluating functional improvement (HIT-6 scores) in adolescents, not a pharmacokinetic study, and no disposition parameters are reported. |
| popPK | Karlsson_2026 | irrelevant | 0 | 0 | The study investigates the association of inflammatory biomarkers (hs-CRP, TNF-α) with clinical migraine response to erenumab and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for erenumab. |
| popPK | Kielbasa_2019 | irrelevant | 1 | 1 | This is a review article focused on galcanezumab, and erenumab is only mentioned as a comparator with no quantitative population-PK parameter values reported in the text. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The paper focuses on the discovery of GLP-1 receptor antibodies and only mentions erenumab as an example of an approved GPCR antibody without providing any pharmacokinetic parameters for it. |
| PD | Liu_2021 | not_relevant | 0 | 0 | The paper focuses on the discovery of novel GLP-1R antibodies (TB01-3, TB59-2) and does not report any pharmacodynamic or exposure-response data for erenumab. |
| popPK | Martín-Yeves_2026 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing migraine outcomes, not a pharmacokinetic study, and contains no disposition parameters. |
| popPK | Mattioli_2026 | irrelevant | 0 | 0 | The study is a retrospective clinical outcomes analysis of migraine frequency and disability, reporting no pharmacokinetic parameters. |
| popPK | Szkutnik-Fiedler_2020 | irrelevant | 2 | 3 | The paper is a review of multiple anti-migraine drugs, and while it mentions erenumab's half-life and bioavailability, it lacks the specific quantitative disposition parameters (CL, V, Q) or compartmental models required for population-PK extraction. |
| PD | Szkutnik-Fiedler_2020 | not_relevant | 1 | 0 | The paper is a review of drug-drug interactions and general PK/PD concepts for migraine drugs, providing no specific numeric PD parameters or exposure-response data for erenumab. |
| PGx | Szkutnik-Fiedler_2020 | not_relevant | 0 | 0 | The paper reviews drug-drug and drug-food interactions (DDI) for migraine drugs, including erenumab, but does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Xu_2019 | irrelevant | 1 | 0 | The study evaluates the pharmacokinetics of oral contraceptives (ethinyl estradiol, norgestrel, norelgestromin) in the presence of erenumab, reporting no quantitative disposition parameters (CL, V, etc.) for erenumab itself. |
| PD | Xu_2019 | not_relevant | 0 | 0 | The study evaluates pharmacokinetic drug-drug interactions and qualitative hormonal markers, but does not report a concentration-effect or dose-response model for erenumab with numeric PD parameters. |
| popPK | Yang_2022 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical efficacy and safety outcomes, not a pharmacokinetic study, and it does not report quantitative PK parameters like clearance or volume for erenumab. |
| PD | Yang_2022 | not_relevant | 2 | 1 | The paper is a meta-analysis comparing fixed doses (70mg vs 140mg) and does not report concentration-effect relationships or numeric PD parameters like Emax or EC50. |
| popPK | de_2018 | relevant | 10 | 0 | The paper is a Phase I PK study of erenumab, but the provided evidence contains only qualitative descriptions of the PK profile without specific numeric parameter values. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a title of a conference abstract collection and contains no data, analysis, or parameters regarding erenumab pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 04:07 UTC</sub>
