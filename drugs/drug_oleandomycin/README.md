<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;oleandomycin&quot;}]"></div>

# oleandomycin

- **generic name:** oleandomycin
- **ATC codes:** `J01FA05`, `J01RA08`
- **DrugBank:** [DB11442](https://go.drugbank.com/drugs/DB11442) · **PubChem:** not captured
- **molar mass:** 687.868 g/mol (C35H61NO12) — DrugBank
- **groups:** experimental, vet_approved

## About

Oleandomycin is a macrolide antibiotic used to treat bacterial infections. It is no longer used in human medicine and is now approved mainly for veterinary use, being considered largely experimental otherwise.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1076248](https://www.wikidata.org/wiki/Q1076248) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 11:28 | 4:14 | 0/0/0 | 0/1/0 | 0/0/0 | 34,637/1,332 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Kanfer_1998_oleandomycin_concentration](drugs/drug_oleandomycin/pd_Kanfer_1998_oleandomycin_concentration.md) | oleandomycin concentration ← oleandomycin · model not identified | — | Kanfer I et al., Analysis of macrolide antibiotics, Journal of chromatography. A (1998) | [10.1016/s0021-9673(98)00276-3](https://doi.org/10.1016/s0021-9673(98)00276-3) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=oleandomycin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 21 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Duthu_1985.pdf` | Duthu GS, Interspecies correlation of the pharmac…, Journal of pharmaceutical s… (1985) | popPK | 8 | [10.1002/jps.2600740907](https://doi.org/10.1002/jps.2600740907) | [4067847](https://pubmed.ncbi.nlm.nih.gov/4067847) | The paper describes population PK models and allometric correlations for oleandomycin across species, but the specific numeric parameter values (CL, V, etc.) are not provided in the evidence text. |
| `Gershon_1986.pdf` | Gershon P et al., Synergy of four macrolide antibiotics w…, Transactions of the Royal S… (1986) | pd | 4 | [10.1016/0035-9203(86)90376-7](https://doi.org/10.1016/0035-9203(86)90376-7) | [3299891](https://www.ncbi.nlm.nih.gov/pubmed/3299891) | metadata signals extractable PD data (IC50) |
| `Yan_2002.pdf` | Yan Z et al., Rapidly distinguishing reversible and i…, European journal of drug me… (2002) | pd | 4 | [10.1007/BF03192339](https://doi.org/10.1007/BF03192339) | [12587958](https://www.ncbi.nlm.nih.gov/pubmed/12587958) | metadata signals extractable PD data (IC50) |
| `Zhao_1997.pdf` | Zhao XJ et al., Metabolic interactions of selected anti…, British journal of clinical… (1997) | pd | 4 | [10.1046/j.1365-2125.1997.t01-1-00619.x](https://doi.org/10.1046/j.1365-2125.1997.t01-1-00619.x) | [9384469](https://www.ncbi.nlm.nih.gov/pubmed/9384469) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-13T11:28:49.745976+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Berthou_1994 | not_relevant | 0 | 0 | The paper focuses on the metabolism of toremifene, not oleandomycin, and does not report pharmacogenomic effects on oleandomycin's PK/PD parameters. |
| popPK | Bigorie_1975 | irrelevant | 0 | 0 | The paper is a case report on a drug interaction (adverse event) and contains no pharmacokinetic parameters. |
| popPK | Chittum_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ribosome assembly in E. coli, not a pharmacokinetic study of oleandomycin. |
| popPK | Duthu_1985 | relevant | 8 | 1 | The paper describes population PK models and allometric correlations for oleandomycin across species, but the specific numeric parameter values (CL, V, etc.) are not provided in the evidence text. |
| popPK | Gershon_1986 | irrelevant | 0 | 0 | The study is an in-vitro investigation of the antimalarial activity (ID50/IC50) of macrolides, not a pharmacokinetic study reporting disposition parameters. |
| popPK | González_2007 | irrelevant | 0 | 0 | This is an analytical chemistry study determining macrolide antibiotic concentrations in animal feed samples, not a pharmacokinetic study. |
| popPK | Gutierrez_2024 | irrelevant | 0 | 0 | The study focuses on the environmental removal of micropollutants in wastewater, not on the pharmacokinetics or disposition parameters of oleandomycin in biological subjects. |
| popPK | Kanfer_1998 | irrelevant | 0 | 0 | The paper is a review of analytical methods (chromatography, electrophoresis) for macrolide antibiotics and does not report quantitative pharmacokinetic parameters or disposition data for oleandomycin. |
| popPK | Porter_2016 | irrelevant | 0 | 0 | This study investigates the pharmacological (anti-inflammatory/antiviral) properties of an oleandomycin derivative (Mac5) in vitro and does not report pharmacokinetic parameters for oleandomycin. |
| popPK | Rouamba_2025 | irrelevant | 0 | 0 | The study is an in-vitro antibacterial assay of essential oils where oleandomycin is used only as a positive control antibiotic, with no pharmacokinetic parameters reported. |
| popPK | Tamargo_1982 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of cardiac effects (negative inotropy) on isolated rat atria, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Volberg_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic examination of channel blockade (IC50 values) rather than a pharmacokinetic study reporting disposition parameters. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | This paper describes an immunoassay for erythromycin detection and explicitly states there was no cross-reactivity to oleandomycin, containing no PK data for oleandomycin. |
| popPK | Yan_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic pharmacology study evaluating CYP450 inhibition, not a pharmacokinetic study reporting disposition parameters for oleandomycin. |
| popPK | Zhao_1997 | irrelevant | 0 | 0 | no_text gate: only 152 chars of text extracted (&lt; 400) |
| PGx | Zhao_1997 | not_relevant | 0 | 0 | The paper studies drug-drug interactions affecting quinine metabolism in vitro, not pharmacogenomic effects on oleandomycin. |
| popPK | de_2021 | irrelevant | 0 | 0 | The paper is an in-vitro antiplasmodial activity study reporting IC50 values for Plasmodium, not pharmacokinetic parameters (CL, V, etc.) for oleandomycin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
