<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02A&quot;,&quot;href&quot;:&quot;atc/A02A.md&quot;},{&quot;label&quot;:&quot;aluminium phosphate&quot;}]"></div>

# aluminium phosphate

- **generic name:** aluminium phosphate
- **ATC codes:** `A02AB03`
- **DrugBank:** [DB14517](https://go.drugbank.com/drugs/DB14517) · **PubChem:** not captured
- **molar mass:** 121.9529 g/mol (AlO4P) — DrugBank
- **groups:** approved, investigational

## About

Aluminium phosphate is an antacid used for acid-related disorders of the digestive tract, and also serves as an immunologic adjuvant in vaccines. It is an approved drug, used widely as a non-prescription antacid.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419503](https://www.wikidata.org/wiki/Q419503) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 08:33 | 1:44 | 0/0/0 | 0/0/0 | 0/0/0 | 64,529/1,586 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 3/8 | 8/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=aluminium_phosphate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: APP (unknown), ATP1A1 (unknown), KLK1 (unknown), TF (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 161 matched, 34 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Morera-Díaz_2023.pdf` | Morera-Díaz Y et al., Active immunization with a structurally…, Cancer letters (2023) | pd | 4 | [10.1016/j.canlet.2023.216156](https://doi.org/10.1016/j.canlet.2023.216156) | [37019172](https://www.ncbi.nlm.nih.gov/pubmed/37019172) | metadata signals extractable PD data (PKPD) |
| `Schipper_2017.pdf` | Schipper P et al., Diphtheria toxoid and N-trimethyl chito…, Journal of controlled relea… (2017) | pd | 4 | [10.1016/j.jconrel.2017.07.017](https://doi.org/10.1016/j.jconrel.2017.07.017) | [28710002](https://www.ncbi.nlm.nih.gov/pubmed/28710002) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T08:33:26.765111+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | COHEN_1959 | irrelevant | 0 | 0 | The paper is a potency assay study for tetanus toxoid where aluminium phosphate is used only as an adsorbent, not as the subject drug for pharmacokinetic analysis. |
| PD | COHEN_1959 | not_relevant | 3 | 0 | The paper describes a bioassay method for tetanus toxoid potency using AlPO4 as an adsorbent, reporting parallel log-dose-response lines for the vaccine but providing no numeric PD parameters (e.g., EC50, Emax) for aluminium phosphate itself. |
| popPK | Dahhas_2022 | irrelevant | 0 | 0 | The paper is a review on anthrax vaccine stability and adjuvants, where aluminum phosphate is mentioned only as an adjuvant, not as a subject drug for pharmacokinetic analysis. |
| popPK | Fabrizi_2015 | irrelevant | 0 | 0 | The paper is a review of hepatitis B vaccine immunogenicity in CKD patients, where aluminium phosphate is mentioned only as an adjuvant component, not as the subject drug for pharmacokinetic analysis. |
| popPK | Gan_2020 | irrelevant | 0 | 0 | The study focuses on the immunological efficacy of aluminum phosphate nanoparticles as a cancer vaccine adjuvant in mice, not on the pharmacokinetic disposition parameters (CL, V, etc.) of the drug. |
| popPK | Ghitu_2000 | irrelevant | 0 | 0 | The paper is a clinical review of renal osteodystrophy treatment and does not report any pharmacokinetic parameters for aluminium phosphate. |
| popPK | Gupta_1995 | irrelevant | 0 | 0 | The paper is a review of vaccine adjuvants and does not report pharmacokinetic parameters for aluminium phosphate. |
| popPK | Gupta_1998 | irrelevant | 0 | 0 | The study focuses on the immunogenicity of vaccines using aluminium phosphate as an adjuvant, not on the pharmacokinetic disposition parameters of aluminium phosphate itself. |
| popPK | Hottelart_2000 | irrelevant | 0 | 0 | The paper is a clinical review of renal osteodystrophy management and does not report any pharmacokinetic parameters for aluminium phosphate. |
| popPK | Jeon_2021 | irrelevant | 0 | 0 | The paper is a vaccine development study where aluminum phosphate is used as an adjuvant, not as the subject drug for pharmacokinetic analysis. |
| popPK | Jeong_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of hepatitis B surface antigen (HBsAg) where aluminium phosphate is used as an adjuvant, not as the subject drug. |
| popPK | Joffe_1994 | irrelevant | 0 | 0 | The study focuses on osteocalcin pharmacokinetics in CAPD patients and only mentions aluminum and phosphate as measured serum levels, not as the subject drug for PK modeling. |
| popPK | Joki_2009 | irrelevant | 0 | 0 | The paper is a review of lanthanum carbonate, not a pharmacokinetic study of aluminium phosphate, and contains no quantitative PK parameters for the subject drug. |
| PD | Joki_2009 | not_relevant | 1 | 0 | The text is a qualitative review of lanthanum carbonate and does not report any numeric PD parameters or exposure-response relationships for aluminium phosphate. |
| popPK | Juergens_2014 | irrelevant | 0 | 0 | The paper is an immunogenicity and safety study of a pneumococcal vaccine where aluminum phosphate is an adjuvant, not a drug subject to pharmacokinetic analysis. |
| PD | Juergens_2014 | not_relevant | 0 | 0 | The paper is a clinical trial assessing vaccine immunogenicity and safety, reporting geometric mean concentrations and titers, but it does not contain any pharmacokinetic data, exposure-response modeling, or numeric PD parameters (e.g., Emax, EC50) for aluminum phosphate. |
| popPK | Lu_2022 | irrelevant | 0 | 0 | The paper is a review of nano-alum as a vaccine adjuvant and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for aluminium phosphate. |
| popPK | Luo_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of an anti-SEB mRNA antibody in mice, where aluminium phosphate is only mentioned as a comparator adjuvant for a protein vaccine. |
| popPK | Madhi_2023 | irrelevant | 0 | 0 | The paper is a clinical trial of a Group B Streptococcus vaccine where aluminum phosphate is used only as an adjuvant, and no pharmacokinetic parameters for aluminum phosphate are reported. |
| popPK | Mei_2019 | irrelevant | 0 | 0 | The paper is a physicochemical characterization study of aluminum phosphate as a vaccine adjuvant (particle size, spectroscopy) and does not report any pharmacokinetic parameters. |
| popPK | Mitkus_2011 | irrelevant | 2 | 0 | The paper is a safety assessment/review that updates a previous model but does not report original quantitative PK parameters (CL, V, etc.) for aluminum phosphate in the provided text. |
| popPK | Morera-Díaz_2023 | irrelevant | 0 | 0 | The paper is an immunology study regarding PD-L1 antigens and tumor models, with no mention of aluminium_phosphate or pharmacokinetic parameters. |
| PD | Morera-Díaz_2023 | not_relevant | 0 | 0 | The paper describes an immunological study on PD-L1 antigen immunization and does not report any pharmacodynamic or exposure-response analysis for aluminium phosphate. |
| popPK | Pennick_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lanthanum carbonate, not aluminium phosphate. |
| popPK | Rupp_2019 | irrelevant | 0 | 0 | The paper is a clinical immunogenicity study of a pneumococcal vaccine where aluminium phosphate is an adjuvant, not a subject drug for pharmacokinetic analysis. |
| PD | Rupp_2019 | not_relevant | 1 | 0 | The study is a descriptive dose-ranging trial that explicitly reports no dose-response effect and provides no numeric PD parameters or concentration-effect curves. |
| popPK | Schipper_2017 | irrelevant | 0 | 0 | no_text gate: only 153 chars of text extracted (&lt; 400) |
| PD | Schipper_2017 | not_relevant | 0 | 0 | The paper focuses on the immunogenicity of microneedles in mice and does not report any pharmacodynamic or exposure-response analysis for aluminium phosphate. |
| popPK | Shen_2016 | irrelevant | 0 | 0 | The study investigates the immunogenicity of a hepatitis B vaccine in mice, where aluminum phosphate is only mentioned as a common adjuvant in commercial vaccines, not as the subject drug for pharmacokinetic analysis. |
| popPK | Shuhsadhe_2023 | irrelevant | 0 | 0 | The study focuses on the immunogenicity and stability of Td vaccines using aluminum phosphate as an adjuvant, not on the pharmacokinetics of aluminum phosphate itself. |
| popPK | Smith_2023 | irrelevant | 0 | 0 | The study investigates the impact of aluminum adjuvants on vaccine stability and immunogenicity, not the pharmacokinetics of aluminium phosphate. |
| popPK | Sánchez_2022 | irrelevant | 0 | 0 | The paper discusses aluminum phosphate only as an adjuvant in a vaccine context and focuses on immunological mechanisms, not the pharmacokinetics of aluminum phosphate. |
| PD | Sánchez_2022 | not_relevant | 0 | 0 | The paper discusses mechanisms of action for an immunotherapy vaccine (CIGB-247) and mentions aluminum phosphate only as an adjuvant, without reporting any pharmacodynamic or exposure-response data for aluminum phosphate itself. |
| PGx | Sánchez_2022 | not_relevant | 0 | 0 | The paper discusses the mechanism of action of a VEGF vaccine (CIGB-247) and its adjuvant (aluminum phosphate) on immune responses, but does not report any pharmacogenomic effects on the PK or PD of aluminum phosphate. |
| popPK | Verdier_2005 | irrelevant | 0 | 0 | The study investigates local histopathology and tissue aluminium concentrations at the injection site, not systemic pharmacokinetic parameters (CL, V, ka) for aluminium phosphate. |
| popPK | Vogelsang_1994 | irrelevant | 0 | 0 | The study focuses on the elimination of aluminium via dialysis and chelation in patients with aluminium poisoning, not the pharmacokinetic parameters (CL, V, ka) of aluminium phosphate as a drug. |
| popPK | Yayehrad_2021 | irrelevant | 0 | 0 | The paper is a review of nanotechnology for COVID-19 and does not contain any pharmacokinetic data for aluminium phosphate. |
| PD | Yayehrad_2021 | not_relevant | 0 | 0 | The paper is a review of nanotechnology applications for COVID-19 and does not report any pharmacodynamic or exposure-response data for aluminium phosphate. |
| popPK | Zhao_2022 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating the immunogenicity and safety of a pneumococcal vaccine where aluminum phosphate is used only as an adjuvant, not as the subject drug for pharmacokinetic analysis. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific data, models, or parameters for aluminium phosphate. |
| popPK | unknown_2018_2 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | unknown_2018_2 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific study data, drug information, or pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
