<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;amineptine&quot;}]"></div>

# amineptine

- **generic name:** amineptine
- **ATC codes:** `N06AA19`
- **DrugBank:** [DB04836](https://go.drugbank.com/drugs/DB04836) · **PubChem:** [CID 34869](https://pubchem.ncbi.nlm.nih.gov/compound/34869)
- **molar mass:** 337.463 g/mol (C22H27NO2) — DrugBank
- **groups:** approved, illicit, withdrawn

## About

Amineptine is a tricyclic antidepressant that was used to treat depression. It was never approved in the US and was withdrawn from the French market because of concerns over abuse, dependence and severe acne.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q44822059](https://www.wikidata.org/wiki/Q44822059) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:38 | 1:00 | 0/0/0 | 0/0/0 | 0/0/0 | 38,647/836 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=amineptine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | brain | `SLC6A4` unknown | DrugBank actor |
| — | platelet | `SLC6A4` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: SLC6A2 (unknown), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 21 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lachatre_1989.pdf` | Lachatre G et al., Single-dose pharmacokinetics of aminept…, Fundamental & clinical phar… (1989) | popPK | 9 | [10.1111/j.1472-8206.1989.tb00026.x](https://doi.org/10.1111/j.1472-8206.1989.tb00026.x) | [2714729](https://pubmed.ncbi.nlm.nih.gov/2714729) | Human single-dose PK study of amineptine with numeric Vd, clearance, and half-life values reported directly in the abstract. |
| `Riché_1989.pdf` | Riché C et al., Pharmacokinetics of amineptine after si…, Clinical neuropharmacology… (1989) | popPK | 9 | [10.1097/00002826-198912002-00005](https://doi.org/10.1097/00002826-198912002-00005) | [2698269](https://pubmed.ncbi.nlm.nih.gov/2698269) | Abstract reports numeric PK parameters for amineptine (Vd 2.4 L/kg, CL 124.8 L/h, t½ 0.8 h) directly in the evidence. |
| `Tsaconas_1989.pdf` | Tsaconas C et al., Gas chromatographic-mass spectrometric…, Journal of chromatography (1989) | popPK | 8 | [10.1016/s0378-4347(00)83040-6](https://doi.org/10.1016/s0378-4347(00)83040-6) | [2722999](https://pubmed.ncbi.nlm.nih.gov/2722999) | Human PK study of amineptine and its C5 metabolite with clearance, half-life, and MRT reported, but no numeric parameter values appear in the evidence text. |
| `Bonnet_1986.pdf` | Bonnet JJ et al., High-affinity [3H]GBR 12783 binding to…, European journal of pharmac… (1986) | pd | 4 | [10.1016/0014-2999(86)90050-6](https://doi.org/10.1016/0014-2999(86)90050-6) | [3489625](https://www.ncbi.nlm.nih.gov/pubmed/3489625) | metadata signals extractable PD data (IC50) |
| `Ceci_1986.pdf` | Ceci A et al., Effect of long term amineptine treatmen…, British journal of pharmaco… (1986) | pd | 4 | [10.1111/j.1476-5381.1986.tb09495.x](https://doi.org/10.1111/j.1476-5381.1986.tb09495.x) | [3708219](https://www.ncbi.nlm.nih.gov/pubmed/3708219) | metadata signals extractable PD data (IC50) |
| `Fromenty_1993.pdf` | Fromenty B et al., Evaluation of human blood lymphocytes a…, Biochemical pharmacology (1993) | pd | 4 | [10.1016/0006-2952(93)90518-2](https://doi.org/10.1016/0006-2952(93)90518-2) | [8347165](https://www.ncbi.nlm.nih.gov/pubmed/8347165) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T21:38:30.926955+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bonnet_1986 | irrelevant | 0 | 0 | The paper is an in-vitro binding study of the dopamine uptake system where amineptine is only used as a comparator ligand, not a subject of pharmacokinetic analysis. |
| PD | Bonnet_1986 | not_relevant | 1 | 0 | The paper reports an in vitro binding assay (IC50) for amineptine, which is a pharmacological potency measure, not a pharmacodynamic exposure-response or dose-response relationship in a biological system with numeric PD parameters like Emax or EC50 for a drug effect. |
| popPK | Castot_1990 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study analyzing cases of amineptine abuse and does not report any pharmacokinetic parameters. |
| PD | Castot_1990 | not_relevant | 0 | 0 | The paper is a pharmacovigilance case series analyzing abuse patterns and clinical outcomes, containing no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| popPK | Ceci_1986 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PD | Ceci_1986 | not_relevant | 0 | 0 | The paper investigates the effects of long-term amineptine treatment on pre- and postsynaptic mechanisms in rat brain, which is a pharmacological or neurochemical study, not a pharmacokinetic/pharmacodynamic (PK/PD) modeling study reporting exposure-response or dose-response numeric parameters. |
| popPK | Fromenty_1993 | irrelevant | 0 | 0 | no_text gate: only 199 chars of text extracted (&lt; 400) |
| PD | Fromenty_1993 | not_relevant | 0 | 0 | The paper studies amiodarone, not amineptine, and focuses on mitochondrial effects in lymphocytes rather than a pharmacodynamic exposure-response relationship for the target drug. |
| popPK | Haddad_1999 | irrelevant | 0 | 0 | The paper is a review on the addiction potential of antidepressants and does not report any pharmacokinetic parameters for amineptine. |
| PD | Haddad_1999 | not_relevant | 1 | 0 | The paper is a qualitative review of addiction case reports and general pharmacodynamic profiles, providing no numeric concentration-effect or dose-response parameters for amineptine. |
| popPK | Hascoët_1998 | irrelevant | 0 | 0 | Behavioral pharmacology study in mice with no PK parameters for amineptine. |
| PD | Lachatre_1989 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics of amineptine and its metabolite, with no pharmacodynamic or exposure-response analysis reported. |
| PGx | Larrey_1989 | not_relevant | 3 | 2 | Amineptine hepatotoxicity is only mentioned as included among drugs; no PK/PD parameter of amineptine is linked to genotype/phenotype. |
| popPK | Mohamed_2006 | irrelevant | 0 | 0 | The paper describes a spectrophotometric analytical method for drug quantification and contains no pharmacokinetic parameters. |
| PD | Mohamed_2006 | not_relevant | 0 | 0 | The paper describes a spectrophotometric analytical method for drug quantification, not a pharmacodynamic or exposure-response study. |
| popPK | Mohamed_2007 | irrelevant | 0 | 0 | The paper describes a spectrophotometric analytical method for drug quantification and contains no pharmacokinetic data or disposition parameters for amineptine. |
| PD | Mohamed_2007 | not_relevant | 0 | 0 | The paper describes a spectrophotometric analytical method for quantifying drug concentrations, not a pharmacodynamic or exposure-response study. |
| popPK | Nour_2006 | irrelevant | 0 | 0 | The paper describes a spectrophotometric analytical method for quantifying amineptine in dosage forms, not a pharmacokinetic study. |
| PD | Nour_2006 | not_relevant | 0 | 0 | The paper describes a spectrophotometric analytical method for quantifying amineptine, not a pharmacodynamic or exposure-response study. |
| popPK | Paes_1989 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study of amineptine that reports no pharmacokinetic parameters or quantitative disposition data. |
| PD | Paes_1989 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes (HDRS, CGI) for a fixed dose but contains no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| popPK | Quaglio_2008 | irrelevant | 0 | 0 | The paper is a case report on venlafaxine dependence where amineptine is only mentioned as part of the patient's history of misuse, with no pharmacokinetic data provided. |
| PD | Quaglio_2008 | not_relevant | 0 | 0 | The paper is a case report on venlafaxine dependence and only mentions amineptine in the patient's history without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for amineptine. |
| PD | Riché_1989 | not_relevant | 0 | 0 | The paper focuses exclusively on pharmacokinetics (PK) in various populations and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Sbarra_1981 | irrelevant | 0 | 0 | no_text gate: only 37 chars of text extracted (&lt; 400) |
| popPK | Shoptaw_2009 | irrelevant | 0 | 0 | The paper is a systematic review of clinical trials for amphetamine withdrawal and does not report any pharmacokinetic parameters for amineptine. |
| PD | Shoptaw_2009 | not_relevant | 1 | 0 | The text is a systematic review summarizing clinical trial outcomes (discontinuation rates, symptoms) without reporting any pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters (e.g., Emax, EC50) for amineptine. |
| popPK | Srisurapanont_2001 | irrelevant | 0 | 0 | The paper is a systematic review of clinical trials for amphetamine withdrawal where amineptine is a treatment agent, and it contains no pharmacokinetic parameters or quantitative disposition data. |
| PD | Srisurapanont_2001 | not_relevant | 1 | 0 | The paper is a systematic review of clinical trials that reports qualitative clinical outcomes (discontinuation rate, CGI scores) but does not provide any pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50) for amineptine. |
| popPK | Tsaconas_1989 | relevant | 8 | 2 | Human PK study of amineptine and its C5 metabolite with clearance, half-life, and MRT reported, but no numeric parameter values appear in the evidence text. |
| popPK | Zangani_2021 | irrelevant | 0 | 0 | This is a meta-analysis of amisulpride efficacy where amineptine is only a comparator; no PK parameters are reported. |
| PD | Zangani_2021 | not_relevant | 0 | 0 | The paper is a meta-analysis of amisulpride efficacy and only mentions amineptine as a comparator in a qualitative comparison without providing any PK/PD data or numeric parameters for amineptine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
