<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;amineptine&quot;}]"></div>

# amineptine

- **generic name:** amineptine
- **ATC codes:** `N06AA19`
- **DrugBank:** [DB04836](https://go.drugbank.com/drugs/DB04836)
- **groups:** approved, illicit, withdrawn

## About

**Description.** The Food and Drug Administration suspended the marketing authorisation for Survector in 1999 and France withdrew it from the market, however several developing countries continued to produce it up until 2005.

**Indication.** For the treatment of depression.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-23 19:17 | 10:45 | 0/0/0 | 0/0/0 | 0/0/0 | 26,342/2,204 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=amineptine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>“…Hepatic.…”</sub> | prose |
| target | brain | `SLC6A4` unknown | DrugBank actor |
| target | platelet | `SLC6A4` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: SLC6A2 (unknown), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 21 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lachatre_1989.pdf` | Lachatre G et al., Single-dose pharmacokinetics of aminept…, Fundamental & clinical phar… (1989) | popPK | 10 | [10.1111/j.1472-8206.1989.tb00026.x](https://doi.org/10.1111/j.1472-8206.1989.tb00026.x) | [2714729](https://pubmed.ncbi.nlm.nih.gov/2714729) | The abstract explicitly reports quantitative pharmacokinetic parameters for amineptine, including volume of distribution (2.4 l.kg-1), half-life (0.8 h), and clearance (124.8 l.h-1). |
| `Riché_1989.pdf` | Riché C et al., Pharmacokinetics of amineptine after si…, Clinical neuropharmacology… (1989) | popPK | 10 | [10.1097/00002826-198912002-00005](https://doi.org/10.1097/00002826-198912002-00005) | [2698269](https://pubmed.ncbi.nlm.nih.gov/2698269) | The text explicitly reports quantitative pharmacokinetic parameters for amineptine, including volume of distribution (2.4 L/kg), half-life (0.8 h), and clearance (124.8 L/h). |
| `Tsaconas_1989.pdf` | Tsaconas C et al., Gas chromatographic-mass spectrometric…, Journal of chromatography (1989) | popPK | 9 | [10.1016/s0378-4347(00)83040-6](https://doi.org/10.1016/s0378-4347(00)83040-6) | [2722999](https://pubmed.ncbi.nlm.nih.gov/2722999) | The paper is a relevant pharmacokinetic study of amineptine in humans, but the provided evidence contains only qualitative descriptions of precision and accuracy without any specific numeric parameter values. |
| `Bonnet_1986.pdf` | Bonnet JJ et al., High-affinity [3H]GBR 12783 binding to…, European journal of pharmac… (1986) | pd | 4 | [10.1016/0014-2999(86)90050-6](https://doi.org/10.1016/0014-2999(86)90050-6) | [3489625](https://www.ncbi.nlm.nih.gov/pubmed/3489625) | metadata signals extractable PD data (IC50) |
| `Ceci_1986.pdf` | Ceci A et al., Effect of long term amineptine treatmen…, British journal of pharmaco… (1986) | pd | 4 | [10.1111/j.1476-5381.1986.tb09495.x](https://doi.org/10.1111/j.1476-5381.1986.tb09495.x) | [3708219](https://www.ncbi.nlm.nih.gov/pubmed/3708219) | metadata signals extractable PD data (IC50) |
| `Fromenty_1993.pdf` | Fromenty B et al., Evaluation of human blood lymphocytes a…, Biochemical pharmacology (1993) | pd | 4 | [10.1016/0006-2952(93)90518-2](https://doi.org/10.1016/0006-2952(93)90518-2) | [8347165](https://www.ncbi.nlm.nih.gov/pubmed/8347165) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-23T19:16:43.119126+00:00</sub>

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
| popPK | Hascoët_1998 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice assessing anxiety and locomotor activity, not a pharmacokinetic study, and reports no disposition parameters for amineptine. |
| PD | Lachatre_1989 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics of amineptine and its metabolite, with no pharmacodynamic or exposure-response analysis reported. |
| PGx | Larrey_1989 | not_relevant | 0 | 0 | The paper studies dextromethorphan metabolism in patients with drug-induced hepatitis and concludes that amineptine hepatotoxicity is not related to dextromethorphan oxidation capacity, without reporting specific PK/PD changes for amineptine itself. |
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
| popPK | Tsaconas_1989 | relevant | 9 | 0 | The paper is a relevant pharmacokinetic study of amineptine in humans, but the provided evidence contains only qualitative descriptions of precision and accuracy without any specific numeric parameter values. |
| popPK | Zangani_2021 | irrelevant | 0 | 0 | The paper is a systematic review of amisulpride efficacy, and amineptine is only mentioned as a comparator drug without any pharmacokinetic data. |
| PD | Zangani_2021 | not_relevant | 0 | 0 | The paper is a meta-analysis of amisulpride efficacy and only mentions amineptine as a comparator in a qualitative comparison without providing any PK/PD data or numeric parameters for amineptine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
