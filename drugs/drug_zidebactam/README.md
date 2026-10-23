<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Zidebactam&quot;}]"></div>

# Zidebactam

- **generic name:** Zidebactam
- **ATC codes:** none (no WHO ATC code)
- **DrugBank:** [DB13090](https://go.drugbank.com/drugs/DB13090) · **PubChem:** [CID 77846445](https://pubchem.ncbi.nlm.nih.gov/compound/77846445)
- **molar mass:** 391.4 g/mol (C13H21N5O7S) — DrugBank
- **groups:** investigational

## About

**Description.** Zidebactam is under investigation in clinical trial NCT02674347 (MAD Study to Evaluate the Safety, Tolerability and Pharmacokinetics of Intravenous Zidebactam in Healthy Adults).

<p><small>Source: <a href="https://go.drugbank.com/drugs/DB13090">DrugBank DB13090</a> · <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a></small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-22 10:44 | 7:36 | 0/0/0 | 0/0/0 | 0/0/0 | 205,603/4,142 | einfracz / qwen3.8-27b | 12 | 0/12 | 12/0 | 0 |

## Coverage

- **PubMed hits:** 43 matched, 43 returned
- **screened:** 8  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Giri_2020.pdf` | Giri P et al., Relevance of preclinical rodent pharmac…, Xenobiotica; the fate of fo… (2020) | popPK | 8 | [10.1080/00498254.2019.1696494](https://doi.org/10.1080/00498254.2019.1696494) | [31755347](https://pubmed.ncbi.nlm.nih.gov/31755347) | The study reports pharmacokinetic parameters (CL, VSS, T1/2) for zidebactam in rats and mice, but only ratio data are explicitly detailed in the abstract; specific individual numeric values for zidebactam are likely in tables or figures not fully provided in the evidence text. |
| `Lepak_2019.pdf` | Lepak AJ et al., WCK 5222 (Cefepime/Zidebactam) Pharmaco…, Antimicrobial agents and ch… (2019) | popPK | 5 | [10.1128/AAC.01648-19](https://doi.org/10.1128/AAC.01648-19) | [31591114](https://pubmed.ncbi.nlm.nih.gov/31591114) | Study reports PK for zidebactam in mice with specific half-life values (0.3-0.5 h) and ELF penetration data, but lacks standard disposition parameters (CL, Vd) required for population PK modeling. |
| `Bhagwat_2019.pdf` | Bhagwat SS et al., The Novel β-Lactam Enhancer Zidebactam…, Antimicrobial agents and ch… (2019) | pd | 5 | [10.1128/AAC.02146-18](https://doi.org/10.1128/AAC.02146-18) | [30670419](https://www.ncbi.nlm.nih.gov/pubmed/30670419) | metadata signals extractable PD data (exposure-response) |
| `Horcajada_2019.pdf` | Horcajada JP et al., Epidemiology and Treatment of Multidrug…, Clinical microbiology revie… (2019) | pd | 5 | [10.1128/CMR.00031-19](https://doi.org/10.1128/CMR.00031-19) | [31462403](https://www.ncbi.nlm.nih.gov/pubmed/31462403) | metadata signals extractable PD data (PK/PD) |
| `Polati_2025.pdf` | Polati VR et al., Investigational antibiotic cefepime/zid…, European journal of clinica… (2025) | pd | 5 | [10.1007/s10096-025-05106-8](https://doi.org/10.1007/s10096-025-05106-8) | [40100511](https://www.ncbi.nlm.nih.gov/pubmed/40100511) | metadata signals extractable PD data (PK/PD) |

<sub>queue written 2026-10-22 10:44 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alarcia-Lacalle_2025 | irrelevant | 2 | 0 | This is a systematic review covering multiple beta-lactamase inhibitors; while zidebactam is mentioned as a search term and included agent, no specific quantitative PK parameters or values for zidebactam are reported in the provided text or tables. |
| popPK | Almarzoky_2019 | irrelevant | 0 | 0 | The paper is an in vivo efficacy study focused on bacterial burden reduction and MICs, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, t1/2) for zidebactam. |
| popPK | Bakthavatchalam_2026 | irrelevant | 0 | 0 | The paper is an in vitro microbiological study reporting MIC distributions for ertapenem/zidebactam and does not contain any pharmacokinetic parameters (CL, V, t1/2, etc.) for zidebactam. |
| popPK | Bhagwat_2019 | irrelevant | 0 | 0 | no_text gate: only 164 chars of text extracted (&lt; 400) |
| popPK | Carcione_2026 | irrelevant | 1 | 0 | The paper is a review focused on cefepime and cefepime-based combinations; it does not report specific quantitative pharmacokinetic parameters (CL, V, etc.) for zidebactam, mentioning it only in the context of the combination drug. |
| popPK | Comini_2026 | irrelevant | 0 | 0 | The paper is a review of cefepime combined with beta-lactamase inhibitors, focusing on mechanisms of action, in vitro activity, and clinical evidence, without reporting quantitative PK parameters for zidebactam. |
| PGx | Comini_2026 | not_relevant | 0 | 0 | The paper is a review of the mechanisms of action, in vitro activity, and clinical evidence for cefepime combinations, with no mention of pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | De_2026 | irrelevant | 0 | 0 | This is a narrative review of new cefepime combinations, and while it mentions zidebactam, it does not report quantitative population pharmacokinetic parameters (CL, V, Q, etc.) for zidebactam itself. |
| popPK | Gatti_2026 | irrelevant | 0 | 0 | The paper is a clinical review of pivotal trials and real-world evidence for efficacy and place in therapy, not a pharmacokinetic study reporting quantitative disposition parameters for zidebactam. |
| PGx | Gatti_2026 | not_relevant | 0 | 0 | The paper is a review of real-world evidence and therapeutic algorithms for novel beta-lactams, containing no data on pharmacogenomics or gene variants affecting PK/PD parameters. |
| popPK | Giri_2020 | relevant | 8 | 3 | The study reports pharmacokinetic parameters (CL, VSS, T1/2) for zidebactam in rats and mice, but only ratio data are explicitly detailed in the abstract; specific individual numeric values for zidebactam are likely in tables or figures not fully provided in the evidence text. |
| popPK | Guo_2022 | irrelevant | 0 | 0 | The paper reports in vitro antimicrobial susceptibility (MICs) for cefepime-zidebactam against bacterial isolates and does not contain pharmacokinetic parameter values (CL, V, etc.). |
| popPK | Horcajada_2019 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| popPK | Isler_2021 | irrelevant | 0 | 0 | The paper is a review of cefepime and combinations, mentioning zidebactam only as a companion agent in in vitro and animal contexts without reporting specific pharmacokinetic parameters for zidebactam. |
| popPK | Karlowsky_2020 | irrelevant | 0 | 0 | The study is an in vitro susceptibility investigation measuring MIC values, not a pharmacokinetic study reporting disposition parameters for zidebactam. |
| popPK | Karvouniaris_2023 | irrelevant | 2 | 0 | This is a review of various novel antimicrobials where zidebactam is only mentioned by name in the introduction, but the provided text contains no quantitative pharmacokinetic parameters (CL, V, Q, etc.) for zidebactam specifically. |
| popPK | Lepak_2019 | relevant | 5 | 3 | Study reports PK for zidebactam in mice with specific half-life values (0.3-0.5 h) and ELF penetration data, but lacks standard disposition parameters (CL, Vd) required for population PK modeling. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The study reports in vitro minimum inhibitory concentrations (MICs) for antimicrobial susceptibility, not pharmacokinetic parameters for zidebactam. |
| popPK | Lodise_2026 | irrelevant | 0 | 0 | no_text gate: only 229 chars of text extracted (&lt; 400) |
| popPK | Monogue_2019 | irrelevant | 1 | 0 | The paper describes in vivo efficacy (MICs and CFU reduction) in a murine model, not pharmacokinetic disposition parameters for zidebactam. |
| popPK | Moya_2017 | irrelevant | 0 | 0 | The study focuses on in vitro antimicrobial activity (MICs, PBP binding, enzyme inhibition) and time-kill kinetics, with no pharmacokinetic parameters reported. |
| popPK | Pipitò_2026 | irrelevant | 1 | 0 | The paper is a review summarizing cefepime-based combinations including zidebactam but provides no original quantitative pharmacokinetic parameter values (CL, V, etc.) in the evidence. |
| popPK | Polati_2025 | irrelevant | 0 | 0 | The paper is a clinical case report focusing on efficacy and microbiological cure, with no quantitative pharmacokinetic parameters or PK model data provided for zidebactam. |
| popPK | Preston_2019 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| popPK | Principe_2022 | irrelevant | 3 | 4 | The paper is a review that summarizes PK parameters for zidebactam (as part of cefepime/zidebactam) in Table 3, but it is not an original study reporting new quantitative disposition data or compartmental models. |
| popPK | Raro_2026 | irrelevant | 0 | 0 | The study characterizes beta-lactamase hydrolytic kinetics and MICs in vitro, reporting no pharmacokinetic parameters (CL, V, t1/2) for zidebactam. |
| popPK | Rodvold_2018 | relevant | 4 | 2 | The study provides non-compartmental PK parameters (AUC, Cmax) and penetration ratios for zidebactam, but lacks the specific disposition parameters (CL, V, ka) requested and does not report a population PK model. |
| popPK | Rusu_2026 | irrelevant | 0 | 0 | The paper is a review of pyrrolidine-based antibacterial drugs and does not contain pharmacokinetic data for zidebactam. |
| popPK | Sastre-Femenia_2026 | irrelevant | 0 | 0 | The study is an in-vitro microbiological and mechanistic analysis of PBP2 binding and MICs, containing no pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Soman_2021 | irrelevant | 0 | 0 | The paper is a review discussing clinical implications of antibiotic resistance and does not report any quantitative pharmacokinetic parameters for zidebactam. |
| popPK | Thacker_2026 | irrelevant | 0 | 0 | This is a clinical case report describing the therapeutic outcome of zidebactam in a patient, not a pharmacokinetic study, and contains no quantitative PK parameters. |
| popPK | Van_2026 | irrelevant | 0 | 0 | The paper is a review of the pharmacodynamics and clinical efficacy of the cefepime-zidebactam combination, containing no quantitative pharmacokinetic parameter values. |
| popPK | Yahav_2020 | irrelevant | 1 | 0 | The paper is a review that discusses zidebactam only in the context of its in vitro antimicrobial spectrum and development status, without providing quantitative pharmacokinetic parameter values. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzidebactam%5D&body=Drug%3A%20zidebactam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_zidebactam/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
