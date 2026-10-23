<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;limaprost&quot;}]"></div>

# limaprost

- **generic name:** limaprost
- **ATC codes:** `B01AC28`
- **DrugBank:** [DB09211](https://go.drugbank.com/drugs/DB09211) · **PubChem:** [CID 6438378](https://pubchem.ncbi.nlm.nih.gov/compound/6438378)
- **molar mass:** 380.525 g/mol (C22H36O5) — DrugBank
- **groups:** investigational

## About

Limaprost is a vasodilator compound classified as an antiplatelet (antithrombotic) agent, investigated for improving blood flow. It is not an approved medicine in major markets such as the European Union and remains investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q22075873](https://www.wikidata.org/wiki/Q22075873) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=limaprost).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PTGER1 (target), PTGER2 (target), PTGER3 (target), PTGER4 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 14:56 | 0:14 | 0/0/0 | 0/0/0 | 0/0/0 | 5,577/273 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 3/7 | 9/1 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Park_2010.pdf` | Park YS et al., Pharmacokinetic characteristics of a va…, Clinical and applied thromb… (2010) | popPK | 10 | [10.1177/1076029609334125](https://doi.org/10.1177/1076029609334125) | [19825922](https://pubmed.ncbi.nlm.nih.gov/19825922) | The study reports quantitative pharmacokinetic parameters (CL, T1/2, AUC, etc.) for limaprost in human volunteers, with all values explicitly listed in the text. |
| `Chen_2015.pdf` | Chen H et al., Single- and multiple-dose pharmacokinet…, Clinical drug investigation (2015) | popPK | 8 | [10.1007/s40261-014-0265-3](https://doi.org/10.1007/s40261-014-0265-3) | [25586152](https://pubmed.ncbi.nlm.nih.gov/25586152) | The study reports quantitative PK parameters (tmax, t1/2, Cmax, AUC) for limaprost in humans, though specific clearance (CL) and volume (V) values are not explicitly listed in the text. |

<sub>queue written 2026-10-05 14:55 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aoki_1992 | irrelevant | 0 | 0 | The paper is a clinical case report on the pathophysiological effects of limaprost on diabetic nephropathy and does not report any pharmacokinetic parameters. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy for lumbar spinal stenosis and contains no pharmacokinetic parameters or disposition data for limaprost. |
| popPK | Choi_2010 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on gene transcription where limaprost is used only as a receptor agonist probe, not as the subject of a pharmacokinetic analysis. |
| popPK | Di_2026 | irrelevant | 0 | 0 | The paper is a systematic review of clinical efficacy for lumbar spinal stenosis and contains no pharmacokinetic data or disposition parameters for limaprost. |
| popPK | Eguchi_2023 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for lumbar spinal stenosis and does not report any pharmacokinetic parameters for limaprost. |
| popPK | Giménez-Campos_2022 | irrelevant | 0 | 0 | The paper is a systematic review of gabapentin and pregabalin for sciatica pain, where limaprost is only mentioned as a comparator in one trial, and no pharmacokinetic parameters for limaprost are reported. |
| popPK | Inoue_2016 | irrelevant | 0 | 0 | The paper focuses on solid-state stability and inclusion complex formation, not pharmacokinetic disposition parameters. |
| popPK | Kasukawa_2018 | irrelevant | 0 | 0 | The paper is a clinical retrospective study on pain management outcomes and does not report any pharmacokinetic parameters for limaprost. |
| popPK | Kawanishi_1992 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for erectile dysfunction and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for limaprost. |
| popPK | Ko_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for JOINS tablets where limaprost is only a co-administered control medication, and no pharmacokinetic parameters are reported. |
| popPK | Ko_2026 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating integrative medical services for spinal stenosis where limaprost is only a background pharmacotherapy, and no pharmacokinetic parameters are reported. |
| popPK | Lee_2023 | irrelevant | 0 | 0 | The paper is a self-controlled case series study investigating the risk of bleeding associated with limaprost use, not a pharmacokinetic study, and it does not report any quantitative PK parameters such as clearance, volume, or half-life. |
| popPK | Levett_2024 | irrelevant | 0 | 0 | The paper is a narrative review of pharmacological treatments for degenerative cervical myelopathy and does not report any quantitative pharmacokinetic parameters (CL, V, ka, etc.) for limaprost. |
| popPK | Matsudaira_2009 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for lumbar spinal stenosis and does not report any pharmacokinetic parameters for limaprost. |
| popPK | Meng_2024 | irrelevant | 2 | 0 | The paper describes a bioanalytical method for limaprost quantification and mentions its use in a PK study, but it does not report any quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2) in the provided evidence. |
| popPK | Murai_1989 | irrelevant | 0 | 0 | The evidence contains only the title and no quantitative pharmacokinetic parameters or data for limaprost. |
| popPK | Murata_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of NGF expression and does not report any pharmacokinetic parameters for limaprost. |
| popPK | Nakade_2008 | relevant | 4 | 5 | The study reports standard non-compartmental PK parameters (AUC, Cmax, t1/2) for limaprost in humans, but lacks the specific compartmental or population PK parameters (CL, V, Q, ka) required for high-relevance extraction. |
| popPK | Park_2024 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing pain outcomes, not a pharmacokinetic study, and contains no PK parameters for limaprost. |
| popPK | Saito_1994 | irrelevant | 0 | 0 | The study focuses on the physiological effect of limaprost on peripheral skin temperature and does not report any pharmacokinetic parameters. |
| popPK | Sato_1997 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for erectile dysfunction and does not report any pharmacokinetic parameters for limaprost. |
| popPK | Shono_1989 | irrelevant | 0 | 0 | The evidence contains only the title of a clinical study on Raynaud's disease, with no pharmacokinetic parameters or quantitative disposition data for limaprost. |
| popPK | Sun_2018 | irrelevant | 0 | 0 | The paper is an analytical chemistry study focusing on mass spectrometry derivatization and fragmentation mechanisms, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Swainston_2007 | irrelevant | 0 | 0 | The paper is a clinical efficacy review of limaprost for thromboangiitis obliterans and spinal stenosis, containing no pharmacokinetic parameters or disposition data. |
| popPK | Toyooka_1992 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting prostaglandins (including limaprost) via HPLC and does not report any pharmacokinetic parameters. |
| popPK | Tsuboshima_1992 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no scientific content or pharmacokinetic data for limaprost. |
| popPK | Tsukamoto_1991 | irrelevant | 0 | 0 | The evidence consists only of a title indicating a clinical treatment study for Raynaud's phenomenon, with no pharmacokinetic data or quantitative disposition parameters provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blimaprost%5D&body=Drug%3A%20limaprost%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_limaprost/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
