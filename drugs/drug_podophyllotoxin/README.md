<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06B&quot;,&quot;href&quot;:&quot;atc/D06B.md&quot;},{&quot;label&quot;:&quot;podophyllotoxin&quot;}]"></div>

# podophyllotoxin

- **generic name:** podophyllotoxin
- **ATC codes:** `D06BB04`
- **DrugBank:** [DB01179](https://go.drugbank.com/drugs/DB01179) · **PubChem:** [CID 10607](https://pubchem.ncbi.nlm.nih.gov/compound/10607)
- **molar mass:** 414.4053 g/mol (C22H22O8) — DrugBank
- **groups:** approved

## About

Podophyllotoxin (podofilox) is a topical treatment for common warts. It is an approved dermatological medicine, applied topically to the skin.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421193](https://www.wikidata.org/wiki/Q421193) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zefirov_2019_MTT](drugs/drug_podophyllotoxin/pd_Zefirov_2019_MTT.md) | cytotoxicity (MTT test) biomarker turnover ← podophyllotoxin analogue 2 | — | Zefirov NA et al., [Podophyllotoxin analogue with bicyclo[…, Biomeditsinskaia khimiia (2019) | [10.18097/PBMC20196502086](https://doi.org/10.18097/PBMC20196502086) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hour_2000_EC50](drugs/drug_podophyllotoxin/pd_Hour_2000_EC50.md) | cytotoxicity ← podophyllotoxin · inhibition effect | — | Hour MJ et al., 6-Alkylamino- and 2,3-dihydro-3'-methox…, Journal of medicinal chemis… (2000) | [10.1021/jm000151c](https://doi.org/10.1021/jm000151c) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:57 | 9:26 | 0/0/0 | 1/1/0 | 0/0/0 | 225,732/4,204 | einfracz / qwen3.8-27b | 15 | 3/4 | 13/2 | 0 |

## Coverage

- **PubMed hits:** 211 matched, 72 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jia_1995.pdf` | Jia ZP et al., [HPLC determination of 4-[4"-(2",2",6",…, Yao xue xue bao = Acta phar… (1995) | popPK | 9 | not captured | [8701732](https://pubmed.ncbi.nlm.nih.gov/8701732) | Study reports pharmacokinetic parameters for a podophyllotoxin derivative (GP-7) in rats, but only T1/2 beta is explicitly provided in the text without volume or clearance. |
| `Rassmann_1999.pdf` | Rassmann I et al., Phase I clinical and pharmacokinetic tr…, Investigational new drugs (1999) | popPK | 5 | [10.1023/a:1006293830585](https://doi.org/10.1023/a:1006293830585) | [10426664](https://pubmed.ncbi.nlm.nih.gov/10426664) | Reports PK parameters (CL, V, t1/2) for NK611, a podophyllotoxin derivative, rather than podophyllotoxin itself. |

<sub>queue written 2026-10-07T21:55:42.922147+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bai_2012 | irrelevant | 0 | 0 | The paper reports in-vitro biotransformation and anti-tumor activity (EC50) of derivatives, with no pharmacokinetic data for podophyllotoxin. |
| PGx | Barnaba_2016 | not_relevant | 0 | 0 | The study reports on mechanism-based inhibition of CYP3A4 by podophyllotoxin and in vivo drug-drug interaction potential, but it does not report any pharmacogenomic effects (gene variants or genotypes) on podophyllotoxin PK or PD parameters. |
| popPK | Chen_2007 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in vitro anti-HIV-1 activity of podophyllotoxin derivatives, not on pharmacokinetic parameters. |
| popPK | Danielak_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of etoposide, not podophyllotoxin itself. |
| popPK | Fatima_2021 | irrelevant | 0 | 0 | The study investigates the anticancer effects of neomenthol, using podophyllotoxin only as a standard comparator in in vitro assays; no pharmacokinetic data for podophyllotoxin are reported. |
| popPK | Habtemariam_2003 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity assay comparing erlangerins to podophyllotoxin as a reference standard, containing no pharmacokinetic data. |
| popPK | He_2025 | irrelevant | 0 | 0 | The paper is a computational biology study on drug repositioning for COVID-19 and other diseases, containing no pharmacokinetic data for podophyllotoxin. |
| popPK | Hour_2000 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study synthesizing quinazolinones and comparing their activity to podophyllotoxin, but it does not study the pharmacokinetics of podophyllotoxin. |
| popPK | Jia_1995 | relevant | 9 | 4 | Study reports pharmacokinetic parameters for a podophyllotoxin derivative (GP-7) in rats, but only T1/2 beta is explicitly provided in the text without volume or clearance. |
| PGx | Julsing_2008 | not_relevant | 0 | 0 | The paper reports kinetic parameters for a wild-type enzyme but does not investigate the impact of a specific genetic variant or genotype on the pharmacokinetics or pharmacodynamics of podophyllotoxin. |
| PGx | Karadeniz_2015 | not_relevant | 0 | 0 | The paper describes in vitro cytotoxicity of plant extracts and does not report any pharmacogenomic effects (gene variants) on the PK or PD parameters of podophyllotoxin. |
| popPK | Manda_2016 | irrelevant | 0 | 0 | The study focuses on the mechanism (P-gp induction) and structure-activity relationship of fascaplysin, using podophyllotoxin only as a comparator/reference compound in an in vitro screening, not for PK parameter characterization. |
| popPK | Mross_1996 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of the podophyllotoxin derivative NK 611, not podophyllotoxin itself. |
| PGx | Owczarek_2021 | not_relevant | 0 | 0 | The study examines HPV genotype profiles (pathogen) and their correlation with ALA-PDT efficacy; it does not report host pharmacogenomic variants affecting the PK/PD of podophyllotoxin. |
| PGx | Qi_2015 | not_relevant | 0 | 0 | The paper reports UGT inhibition by podophyllotoxin (drug interaction) but does not report pharmacogenomic effects (gene variants/genotypes) on PK/PD. |
| popPK | Rassmann_1996 | irrelevant | 2 | 0 | The study reports pharmacokinetics for NK611 (a podophyllotoxin derivative), not for podophyllotoxin itself, and specific CL/Vd values are not provided in the text. |
| PGx | Song_2011 | not_relevant | 0 | 0 | The study investigates in vitro drug-drug interactions (CYP inhibition) and does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Sudo_1998 | irrelevant | 0 | 0 | The study is an in vitro pharmacology investigation of antiviral activity and does not report pharmacokinetic parameters. |
| PGx | Sun_2021 | not_relevant | 0 | 0 | The paper maps the metabolism of podophyllotoxin and identifies involved CYP enzymes but does not report pharmacogenomic effects (gene variants/genotypes) on PK/PD parameters. |
| popPK | Tang_2011 | irrelevant | 0 | 0 | The paper describes an in-vitro biosynthesis and cytotoxicity study, containing no pharmacokinetic data. |
| popPK | Toffoli_2004 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for etoposide, which is a derivative of podophyllotoxin, but does not report parameters for podophyllotoxin itself. |
| PGx | Vasilev_2006 | not_relevant | 0 | 0 | The paper describes in vitro biotransformation of a precursor into a drug using recombinant enzymes, not the impact of a specific genetic variant on the PK or PD of podophyllotoxin in a biological context. |
| popPK | Zefirov_2019 | irrelevant | 0 | 0 | The paper is a synthetic and molecular modeling study of podophyllotoxin analogs, reporting only in vitro cytotoxicity (IC50/EC50) and docking scores, with no pharmacokinetic parameters. |
| popPK | Zefirov_2021 | irrelevant | 0 | 0 | The study is a medicinal chemistry paper focusing on the synthesis and in vitro biological activity (cytotoxicity/microtubule depolymerization) of a podophyllotoxin conjugate, reporting no pharmacokinetic parameters. |
| popPK | Zefirova_2017 | irrelevant | 0 | 0 | The study focuses on the synthesis and in-vitro biological evaluation of antimitotic agents, containing no pharmacokinetic data for podophyllotoxin. |
| PGx | Zhang_2021 | not_relevant | 0 | 0 | The paper focuses on the mechanism of etoposide-induced leukemia rather than the pharmacogenomics of podophyllotoxin, and does not report quantitative genotype-to-PK/PD effect sizes. |
| popPK | Zhu_2004 | irrelevant | 0 | 0 | The paper reports anti-HIV activity (EC50, TI) of podophyllotoxin derivatives in vitro, with no pharmacokinetic data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
