<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;abiraterone&quot;}]"></div>

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
| abiraterone | parent | 349.509 | C24H31NO | DrugBank | [132971](https://pubchem.ncbi.nlm.nih.gov/compound/132971) | Stuyckens_2014 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:56 | 3:08 | 0/1/2 | 0/0/1 | 0/0/0 | 225,097/15,516 | einfracz / qwen3.8-27b | 7 | 4/3 | 5/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Stuyckens_2014_final](drugs/drug_abiraterone/Abiraterone_Stuyckens2014_final.md) | — | 1-compartment (no model) | 2 | Stuyckens K et al., Population pharmacokinetic analysis of…, Clinical pharmacokinetics (2014) | [10.1007/s40262-014-0178-6](https://doi.org/10.1007/s40262-014-0178-6) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Stuyckens_2014_final_chemotherapy_pretreated_patients_final_model_1](drugs/drug_abiraterone/Abiraterone_Stuyckens2014_final_chemotherapy_pretreated_pati.md) | — | 1-compartment (no model) | 2 | Stuyckens K et al., Population pharmacokinetic analysis of…, Clinical pharmacokinetics (2014) | [10.1007/s40262-014-0178-6](https://doi.org/10.1007/s40262-014-0178-6) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Russu_2025_reference](drugs/drug_abiraterone/Abiraterone_Russu2025_reference.md) | — | general linear (no model) | 0 | Russu A et al., Population Pharmacokinetics of Nirapari…, Advances in therapy (2025) | [10.1007/s12325-025-03104-y](https://doi.org/10.1007/s12325-025-03104-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> | [van_2020_PSA_PFS](drugs/drug_abiraterone/pd_van_2020_PSA_PFS.md) | prostate-specific antigen (PSA) independent progression-free survival ← abiraterone · time-to-event model | — | van Nuland M et al., Exposure-response analyses of abiratero…, Prostate cancer and prostat… (2020) | [10.1038/s41391-019-0179-5](https://doi.org/10.1038/s41391-019-0179-5) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=abiraterone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | adrenal gland | `CYP17A1` inhibitor | DrugBank actor |
| — | testis | `CYP17A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: SULT2A1 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Russu_2025.pdf` | Russu A et al., Population Pharmacokinetics of Nirapari…, Advances in therapy (2025) | popPK | 10 | [10.1007/s12325-025-03104-y](https://doi.org/10.1007/s12325-025-03104-y) | [40016438](https://pubmed.ncbi.nlm.nih.gov/40016438) | The paper reports a population pharmacokinetic model for abiraterone in humans, but the specific numeric parameter values are not listed in the provided evidence text. |
| `Merdita_2024.pdf` | Merdita S et al., Evaluation of adherence to abiraterone…, British journal of clinical… (2024) | popPK | 9 | [10.1111/bcp.16155](https://doi.org/10.1111/bcp.16155) | [38958217](https://pubmed.ncbi.nlm.nih.gov/38958217) | The paper develops a population PK model for abiraterone, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

<sub>queue written 2026-10-15T03:53:59.144079+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blanchet_2018 | irrelevant | 3 | 2 | The study reports only plasma trough concentrations (Cmin) and metabolic ratios, lacking the compartmental PK parameters (CL, V, half-life) required for population-pharmacokinetic modeling. |
| popPK | Boerrigter_2022 | relevant | 8 | 2 | The study reports population pharmacokinetic modeling of abiraterone in human patients, but the specific numeric parameter values (CL, V, Q) are referenced as being in the Supporting Information which is not provided. |
| popPK | Cella_2016 | irrelevant | 0 | 0 | This is a patient-reported outcome (PRO) analysis of health-related quality of life and does not report any pharmacokinetic parameters. |
| popPK | Chiong_2025 | irrelevant | 2 | 0 | The study focuses on exposure-response and safety, explicitly stating that specific PK parameters are provided in Supplementary Materials which are not included in the evidence, and relies on PBPK simulations rather than reporting original quantitative population-PK parameter estimates in the main text. |
| popPK | Janssen_2020 | irrelevant | 2 | 0 | This is a simulation study evaluating TDM prediction methods, not an original report of quantitative PK parameter estimates (CL, V, etc.) for abiraterone. |
| popPK | Kuzma_2024 | irrelevant | 0 | 0 | The study assesses health-related quality of life outcomes in prostate cancer patients and does not report any pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Li_2015 | irrelevant | 2 | 0 | This is a methodological study on clinical trial simulation design that reports on bias and precision of estimation, not original quantitative population PK parameter values for abiraterone. |
| popPK | Masamrekh_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP3A4 enzyme interactions and does not report in-vivo pharmacokinetic disposition parameters (CL, V, etc.) for abiraterone. |
| popPK | Merdita_2024 | relevant | 9 | 0 | The paper develops a population PK model for abiraterone, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Myint_2020 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis focusing on the safety outcomes (falls and fractures) of androgen receptor inhibitors, not on the pharmacokinetic parameters of abiraterone. |
| popPK | Serbian_2020 | irrelevant | 0 | 0 | The paper describes the synthesis of abiraterone-based conjugates for in-vitro cytotoxicity screening, not the pharmacokinetics of abiraterone itself. |
| popPK | Su_2018 | irrelevant | 0 | 0 | The paper focuses on the antibody-drug conjugate CD46 ADC and the target antigen CD46 in prostate cancer cells, not on the pharmacokinetic disposition parameters of abiraterone. |
| popPK | Yoshida_2021 | irrelevant | 0 | 0 | The study models the pharmacokinetics of ipatasertib, with abiraterone serving only as a covariate for co-administration effects rather than the subject of the PK model. |
| popPK | Yuan_2020 | irrelevant | 0 | 0 | The paper reports in vitro antiviral activity (EC50) of abiraterone against SARS-CoV-2, not pharmacokinetic disposition parameters. |
| popPK | van_2020 | irrelevant | 2 | 0 | The study reports exposure-response relationships using trough concentrations (Cmin) but does not provide quantitative disposition parameters such as clearance, volume, or half-life. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:54 UTC</sub>
