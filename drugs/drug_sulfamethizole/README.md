<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05C&quot;,&quot;href&quot;:&quot;atc/B05C.md&quot;},{&quot;label&quot;:&quot;sulfamethizole&quot;}]"></div>

# sulfamethizole

- **generic name:** sulfamethizole
- **ATC codes:** `B05CA04`, `D06BA04`, `J01EB02`, `S01AB01`
- **DrugBank:** [DB00576](https://go.drugbank.com/drugs/DB00576) · **PubChem:** [CID 5328](https://pubchem.ncbi.nlm.nih.gov/compound/5328)
- **molar mass:** 270.331 g/mol (C9H10N4O2S2) — DrugBank
- **groups:** approved, vet_approved

## About

Sulfamethizole is a sulfonamide antibiotic used to treat urinary tract infections and other gram-negative bacterial infections. It is an approved medicine, also approved for veterinary use, and appears in products for systemic, topical, eye, and irrigating use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3976824](https://www.wikidata.org/wiki/Q3976824) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sulfamethizole).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | liver | `CYP2C9` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 00:48 | 1:20 | 0/0/0 | 0/0/0 | 0/0/0 | 42,674/1,553 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 5/2 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 24 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kamiya_1983.pdf` | Kamiya A et al., Quantitative investigation on renal han…, Journal of pharmaceutical s… (1983) | popPK | 8 | [10.1002/jps.2600720429](https://doi.org/10.1002/jps.2600720429) | [6864487](https://pubmed.ncbi.nlm.nih.gov/6864487) | The study reports quantitative renal handling parameters (secretion/reabsorption kinetics) for sulfamethizole, but specific numeric values are not present in the provided abstract text. |
| `Komiya_1986.pdf` | Komiya I, Urine flow dependence of renal clearanc…, Drug metabolism and disposi… (1986) | popPK | 8 |  | [2870900](https://pubmed.ncbi.nlm.nih.gov/2870900) | The study reports renal clearance and reabsorption parameters for sulfamethizole in rats, but specific numeric values are not present in the provided abstract text. |
| `Kowarski_1976.pdf` | Kowarski CR et al., Measurement of sulfamethizole clearance…, Journal of pharmaceutical s… (1976) | popPK | 8 | [10.1002/jps.2600650338](https://doi.org/10.1002/jps.2600650338) | [1263102](https://pubmed.ncbi.nlm.nih.gov/1263102) | The study reports sulfamethizole clearance in dogs, but specific numeric values are not provided in the text, only methodological comparisons and qualitative results. |
| `Kowarski_1980.pdf` | Kowarski CR et al., Simplified method for estimating volume…, Journal of pharmaceutical s… (1980) | popPK | 8 | [10.1002/jps.2600691029](https://doi.org/10.1002/jps.2600691029) | [7420296](https://pubmed.ncbi.nlm.nih.gov/7420296) | The study reports the volume of distribution (Vdss) for sulfamethizole in dogs, but the specific numeric values are not present in the provided evidence. |
| `Strum_1978.pdf` | Strum JD et al., Bioavailability of sulfonamide suspensi…, Journal of pharmaceutical s… (1978) | popPK | 8 | [10.1002/jps.2600671018](https://doi.org/10.1002/jps.2600671018) | [702289](https://pubmed.ncbi.nlm.nih.gov/702289) | The study reports pharmacokinetic parameters (Cmax, tmax, AUC) for sulfamethizole in humans, but the specific numeric values are not present in the provided abstract text. |
| `Komatsu_2000.pdf` | Komatsu K et al., Prediction of in vivo drug-drug interac…, Drug metabolism and disposi… (2000) | pgx | 7 |  | [10725317](https://www.ncbi.nlm.nih.gov/pubmed/10725317) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-10-06 00:47 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Eo_2026 | irrelevant | 0 | 0 | The paper is a review of antimicrobial scaffolds and does not report pharmacokinetic parameters for sulfamethizole. |
| popPK | Hansen_1979 | irrelevant | 0 | 0 | The study investigates the effect of sulfamethizole on phenytoin metabolism, not the pharmacokinetic parameters of sulfamethizole itself. |
| popPK | Janknegt_1999 | irrelevant | 0 | 0 | The paper is a qualitative drug selection study using a judgment analysis method and does not report quantitative pharmacokinetic parameters for sulfamethizole. |
| popPK | Kamiya_1983 | relevant | 8 | 2 | The study reports quantitative renal handling parameters (secretion/reabsorption kinetics) for sulfamethizole, but specific numeric values are not present in the provided abstract text. |
| popPK | Katayama_1990 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding sulfamethizole pharmacokinetics. |
| popPK | Katayama_1990_2 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no scientific content or pharmacokinetic data for sulfamethizole. |
| popPK | Katayama_1990_3 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding sulfamethizole pharmacokinetics. |
| popPK | Komatsu_2000 | irrelevant | 1 | 0 | The study focuses on in vitro metabolic inhibition of tolbutamide by sulfamethizole and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for sulfamethizole itself. |
| PGx | Komatsu_2000 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (inhibition of tolbutamide metabolism by sulfamethizole) and does not report any pharmacogenomic effects (gene variants) on the PK or PD of sulfamethizole. |
| popPK | Komiya_1986 | relevant | 8 | 2 | The study reports renal clearance and reabsorption parameters for sulfamethizole in rats, but specific numeric values are not present in the provided abstract text. |
| popPK | Koshi_1983 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding sulfamethizole pharmacokinetics. |
| popPK | Kowarski_1976 | relevant | 8 | 2 | The study reports sulfamethizole clearance in dogs, but specific numeric values are not provided in the text, only methodological comparisons and qualitative results. |
| popPK | Kowarski_1980 | relevant | 8 | 0 | The study reports the volume of distribution (Vdss) for sulfamethizole in dogs, but the specific numeric values are not present in the provided evidence. |
| popPK | Lovering_1975 | irrelevant | 2 | 0 | The paper is a review analyzing bioavailability data from the literature for multiple drugs including sulfamethizole, but it does not report original quantitative PK parameters (CL, V, etc.) for sulfamethizole in the provided text. |
| popPK | Lumholtz_1975 | irrelevant | 0 | 0 | The study examines sulfamethizole as an inhibitor of other drugs' metabolism, not the pharmacokinetics of sulfamethizole itself. |
| popPK | Macheras_1986 | irrelevant | 2 | 0 | The study focuses on bioequivalence of formulations and reports qualitative statistical comparisons (AUC, Cmax) and urine excretion data without providing specific quantitative PK parameter values (CL, V, t1/2) for sulfamethizole. |
| popPK | Nakanishi_1989 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding sulfamethizole pharmacokinetics. |
| popPK | Nierenberg_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sulfamethizole's inhibition of penicillin tubular secretion, not a pharmacokinetic study of sulfamethizole's disposition. |
| popPK | Sokolov_2018 | irrelevant | 0 | 0 | The study investigates the abatement of sulfamethizole in water using cold plasma oxidation (environmental chemistry), not its pharmacokinetics in a biological system. |
| popPK | Strum_1978 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (Cmax, tmax, AUC) for sulfamethizole in humans, but the specific numeric values are not present in the provided abstract text. |
| popPK | Sullivan_1975 | irrelevant | 2 | 0 | The study reports peak urinary concentrations and renal excretion relationships rather than systemic pharmacokinetic parameters (CL, V, t1/2) for sulfamethizole. |
| popPK | Vree_1983 | irrelevant | 2 | 0 | The paper is a theoretical discussion/review of pharmacokinetic principles in renal impairment and mentions sulfamethizole only as an example of drug behavior without providing original quantitative parameter values. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | The paper describes a mass spectrometry database resource for drug screening and does not report pharmacokinetic parameters for sulfamethizole. |
| PD | Zhao_2025 | not_relevant | 0 | 0 | The paper describes a metabolomics resource for detecting drug exposure and does not report any pharmacodynamic or exposure-response analysis for sulfamethizole. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsulfamethizole%5D&body=Drug%3A%20sulfamethizole%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sulfamethizole/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
