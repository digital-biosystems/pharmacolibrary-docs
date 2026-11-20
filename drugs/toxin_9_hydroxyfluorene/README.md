<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;9-Hydroxyfluorene&quot;}]"></div>

# 9-Hydroxyfluorene

- **generic name:** 9-Hydroxyfluorene
- **T3DB:** [T3D3991](http://www.t3db.ca/toxins/T3D3991) · **PubChem:** [CID 74318](https://pubchem.ncbi.nlm.nih.gov/compound/74318)

## About

This compound belongs to the family of Fluorenes. These are compounds containing a fluorene moiety, which consists of two benzene rings connected through either a cyclopentane, cyclopentene, or cyclopenta-1,3-diene.

- **Category:** Industrial/Workplace Toxin, Synthetic Toxin
- **Mechanism of toxicity:** 9-Hydroxyfluorene is a weak dopamine reuptake inhibitor. (Wikipedia)
- **Detected in:** urine

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3991">T3DB T3D3991</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 1689-64-1 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:16904">ChEBI 16904</a></small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Zhou_2024_annual_change_in_FEV1_FVC](drugs/toxin_9_hydroxyfluorene/pd_Zhou_2024_annual_change_in_FEV1_FVC.md) | annual change in FEV1/FVC ← 9_hydroxyfluorene · direct linear effect | — | Zhou M et al., Longitudinal association of polycyclic…, Environmental pollution (Ba… (2024) | [10.1016/j.envpol.2023.122801](https://doi.org/10.1016/j.envpol.2023.122801) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-19 18:47 | 4:26 | 0/0/0 | 1/0/0 | 0/0/0 | 127,531/3,569 | einfracz / qwen3.8-flash-next | 4 | 2/2 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhou_2024.pdf` | Zhou M et al., Longitudinal association of polycyclic…, Environmental pollution (Ba… (2024) | pd | 5 | [10.1016/j.envpol.2023.122801](https://doi.org/10.1016/j.envpol.2023.122801) | [37890693](https://www.ncbi.nlm.nih.gov/pubmed/37890693) | metadata signals extractable PD data (exposure-response) |

<sub>queue written 2026-11-19 18:46 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Díaz_2021 | irrelevant | 0 | 0 | The paper is a biomonitoring study reporting urinary metabolite concentrations as exposure biomarkers, but reports no toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for 9-hydroxyfluorene. |
| popPK | Gill_2019 | irrelevant | 0 | 0 | The paper is a method validation and exposure monitoring study measuring 9-hydroxyfluorene concentrations but reports no toxicokinetic parameters (half-life, clearance, Vmax, etc.). |
| popPK | Mattarozzi_2009 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting 9-hydroxyfluorene in urine and reports exposure concentrations in workers, but contains no toxicokinetic parameters. |
| popPK | Nübler_2023 | irrelevant | 1 | 0 | The paper is a quality assurance report for analytical methods measuring urinary PAH metabolites, containing no toxicokinetic parameters (such as half-lives, clearance, or partition coefficients) for 9-hydroxyfluorene. |
| popPK | Ratelle_2020 | irrelevant | 1 | 1 | The paper is a human biomonitoring study reporting geometric means of urinary concentrations for exposure assessment, not toxicokinetic parameters like half-lives or clearance for 9-hydroxyfluorene. |
| popPK | Sun_2021 | irrelevant | 0 | 0 | The paper is an epidemiological cross-sectional study reporting odds ratios for the association between urinary PAH concentrations and kidney stone risk, containing no toxicokinetic parameters (such as half-lives, clearance, or partition coefficients) for 9-hydroxyfluorene. |
| popPK | Tao_2026 | irrelevant | 1 | 10 | The paper is an epidemiological study measuring urinary concentrations of PAH metabolites in pregnant women to assess associations with immune-inflammatory indices, reporting no toxicokinetic parameters such as half-lives, clearance rates, or partition coefficients for 9-hydroxyfluorene. |
| popPK | Valcke_2020 | irrelevant | 0 | 0 | The paper is a biomonitoring study reporting regional differences in exposure concentrations (geometric means) but does not report any quantitative toxicokinetic parameters (e.g., half-lives, rate constants, partition coefficients, or PBPK models) for 9-hydroxyfluorene. |
| popPK | Yang_2017 | irrelevant | 0 | 0 | The paper reports epidemiological associations between urinary 9-hydroxyfluorene concentrations and hormone levels, containing no toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The paper is an epidemiological study associating urinary metabolite concentrations with lung function outcomes and reports no toxicokinetic parameters. |
| popPK | Zhen_2023 | irrelevant | 0 | 0 | The paper is a meta-analysis of epidemiological studies reporting odds ratios for neurodevelopmental outcomes and depression, containing no toxicokinetic parameters for 9-hydroxyfluorene. |
| popPK | Zhou_2024 | irrelevant | 0 | 0 | The paper is an epidemiological exposure-outcome study measuring biomarker concentrations to assess lung function decline, containing no toxicokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B9_hydroxyfluorene%5D&body=Drug%3A%209_hydroxyfluorene%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_9_hydroxyfluorene/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
