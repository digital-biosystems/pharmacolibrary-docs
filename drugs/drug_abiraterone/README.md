<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;abiraterone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Abiraterone_Stuyckens2014_final&quot;,&quot;label&quot;:&quot;Stuyckens_2014_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abiraterone/Abiraterone_Stuyckens2014_final.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati&quot;,&quot;label&quot;:&quot;Stuyckens_2014_final_chemotherapy_pretreated_patients_final_model_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abiraterone/Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# abiraterone

- **generic name:** abiraterone
- **ATC codes:** `L01XK52`, `L02BX03`, `L02BX53`
- **DrugBank:** [DB05812](https://go.drugbank.com/drugs/DB05812) · **PubChem:** [CID 132971](https://pubchem.ncbi.nlm.nih.gov/compound/132971)
- **molar mass:** 349.509 g/mol (C24H31NO) — DrugBank
- **groups:** approved, investigational

## About

Abiraterone is an anticancer medicine used to treat prostate cancer. It is authorised in the European Union and widely used as an endocrine cancer therapy.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q321431](https://www.wikidata.org/wiki/Q321431) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| abiraterone (abiraterone acetate) | parent | 349.509 | C24H31NO | DrugBank | [132971](https://pubchem.ncbi.nlm.nih.gov/compound/132971) | Stuyckens_2014 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:48 | 9:17 | 0/0/2 | 0/0/2 | 0/0/0 | 233,214/15,776 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 4/3 | 5/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Stuyckens_2014_final](drugs/drug_abiraterone/Abiraterone_Stuyckens2014_final.md) | ▶ model + simulator | 1-compartment, oral | 5 | Stuyckens K et al., Population pharmacokinetic analysis of…, Clinical pharmacokinetics (2014) | [10.1007/s40262-014-0178-6](https://doi.org/10.1007/s40262-014-0178-6) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T3_param_coverage</sub><br><sub>route_to: `engineer`</sub> | [Stuyckens_2014_final_chemotherapy_pretreated_patients_final_model_1](drugs/drug_abiraterone/Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati.md) | ▶ model + simulator | 1-compartment, oral | 5 | Stuyckens K et al., Population pharmacokinetic analysis of…, Clinical pharmacokinetics (2014) | [10.1007/s40262-014-0178-6](https://doi.org/10.1007/s40262-014-0178-6) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> | [Boerrigter_2022_OS](drugs/drug_abiraterone/pd_Boerrigter_2022_OS.md) | overall survival ← abiraterone · time-to-event model | — | Boerrigter E et al., The effect of chemotherapy on the expos…, British journal of clinical… (2022) | [10.1111/bcp.15057](https://doi.org/10.1111/bcp.15057) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> | [Boerrigter_2022_PFS](drugs/drug_abiraterone/pd_Boerrigter_2022_PFS.md) | progression-free survival ← abiraterone · time-to-event model | — | Boerrigter E et al., The effect of chemotherapy on the expos…, British journal of clinical… (2022) | [10.1111/bcp.15057](https://doi.org/10.1111/bcp.15057) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> | [van_2020_PSA_PFS](drugs/drug_abiraterone/pd_van_2020_PSA_PFS.md) | prostate-specific antigen (PSA) independent progression-free survival ← abiraterone · time-to-event model | — | van Nuland M et al., Exposure-response analyses of abiratero…, Prostate cancer and prostat… (2020) | [10.1038/s41391-019-0179-5](https://doi.org/10.1038/s41391-019-0179-5) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Merdita_2024.pdf` | Merdita S et al., Evaluation of adherence to abiraterone…, British journal of clinical… (2024) | popPK | 10 | [10.1111/bcp.16155](https://doi.org/10.1111/bcp.16155) | [38958217](https://pubmed.ncbi.nlm.nih.gov/38958217) | The paper describes a population pharmacokinetic model for abiraterone, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| `Russu_2025.pdf` | Russu A et al., Population Pharmacokinetics of Nirapari…, Advances in therapy (2025) | popPK | 10 | [10.1007/s12325-025-03104-y](https://doi.org/10.1007/s12325-025-03104-y) | [40016438](https://pubmed.ncbi.nlm.nih.gov/40016438) | The paper describes a population PK model for abiraterone in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

<sub>queue written 2026-10-07T21:41:16.583852+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blanchet_2018 | irrelevant | 2 | 0 | The study reports only trough concentrations (Cmin) and metabolic ratios for a PK/PD association analysis, lacking quantitative disposition parameters (CL, V, ka) or a compartmental/population PK model. |
| popPK | Boerrigter_2022 | relevant | 8 | 2 | The study performs a population PK analysis for abiraterone, but the specific numeric parameter estimates (CL, V, etc.) are located in the Supporting Information (Table S1, Figures S1-S2) which is not provided in the evidence. |
| popPK | Cella_2016 | irrelevant | 0 | 0 | The paper reports patient-reported outcomes (quality of life) and does not contain any pharmacokinetic parameters for abiraterone. |
| popPK | Chiong_2025 | relevant | 8 | 2 | The study reports PK parameters for abiraterone in humans, but the specific numeric values are explicitly stated to be in Supplementary Materials which are not provided. |
| popPK | Janssen_2020 | irrelevant | 2 | 0 | This is a simulation study evaluating TDM extrapolation methods using a pre-existing population PK model, and it does not report the underlying quantitative PK parameter values (CL, V, etc.) for abiraterone. |
| popPK | Kuzma_2024 | irrelevant | 0 | 0 | The study evaluates health-related quality of life (HRQoL) outcomes and contains no pharmacokinetic parameters for abiraterone. |
| popPK | Li_2015 | irrelevant | 2 | 0 | This is a clinical trial simulation study using virtual data to evaluate trial design power, not an original pharmacokinetic study reporting measured quantitative disposition parameters for abiraterone. |
| popPK | Masamrekh_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP3A4 binding and inhibition, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Merdita_2024 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for abiraterone, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence. |
| popPK | Myint_2020 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of fall and fracture risks, not a pharmacokinetic study, and abiraterone is only mentioned as a control agent. |
| popPK | Russu_2025 | relevant | 10 | 0 | The paper describes a population PK model for abiraterone in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Serbian_2020 | irrelevant | 0 | 0 | The paper describes the synthesis of abiraterone conjugates for cytotoxicity screening, not the pharmacokinetics of abiraterone itself. |
| popPK | Su_2018 | irrelevant | 0 | 0 | The paper focuses on CD46 as a therapeutic target and antibody-drug conjugate efficacy, with no pharmacokinetic modeling or disposition parameters for abiraterone. |
| popPK | Yoshida_2021 | irrelevant | 0 | 0 | The study characterizes the population pharmacokinetics of ipatasertib and its metabolite M1, with abiraterone serving only as a co-administered covariate affecting ipatasertib clearance. |
| popPK | Yuan_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study reporting EC50 values for SARS-CoV-2 inhibition, not a pharmacokinetic study of abiraterone. |
| popPK | van_2020 | irrelevant | 2 | 0 | The study is an exposure-response analysis reporting clinical outcomes (PSA-PFS) and concentration thresholds (Cmin), but it does not report quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) or a compartmental/population-PK model. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:41 UTC</sub>
