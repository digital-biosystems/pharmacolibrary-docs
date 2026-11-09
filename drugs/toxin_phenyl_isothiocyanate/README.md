<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Phenyl isothiocyanate&quot;}]"></div>

# Phenyl isothiocyanate

- **generic name:** Phenyl isothiocyanate
- **DrugBank:** none · **PubChem:** [CID 7673](https://pubchem.ncbi.nlm.nih.gov/compound/7673)
- **groups:** not captured

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-09 07:42 | 2:55 | 0/0/0 | 0/0/0 | 0/0/0 | 225,710/2,359 | einfracz / qwen3.8-27b | 9 | 5/4 | 4/5 | 0 |

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelhalim_2011 | irrelevant | 0 | 0 | The paper is a medicinal chemistry synthesis study where phenyl isothiocyanate is used solely as a chemical reagent to form compounds, with no toxicokinetic parameters reported. |
| popPK | Amr_2009 | irrelevant | 0 | 0 | Phenyl isothiocyanate is used solely as a chemical reagent in the synthesis of thiazole derivatives, and the paper reports no kinetic parameters for it. |
| popPK | Berghot_1992 | irrelevant | 0 | 0 | The paper uses phenyl isothiocyanate as a chemical reagent in the synthesis of heterocyclic compounds and does not report any toxicokinetic parameters. |
| popPK | Drobnica_1979 | irrelevant | 0 | 1 | The paper reports a chemical reaction rate constant for phenyl isothiocyanate with glutathione in vitro for comparison, but it does not report any toxicokinetic parameters (absorption, distribution, metabolism, excretion, half-life, PBPK) for the substance in an organism. |
| PGx | Elbarbry_2024 | not_relevant | 0 | 0 | The paper evaluates the enzyme inhibition potency of isothiocyanates on sEH and CYPs in vitro but does not report any pharmacogenomic associations with PK or PD parameters of phenyl isothiocyanate. |
| popPK | Fouad_2023 | irrelevant | 0 | 0 | The paper focuses on the synthesis of derivatives of 1,3-diphenylpropane-1,3-dione and does not report any toxicokinetic parameters for phenyl isothiocyanate. |
| popPK | Hussein_2026 | irrelevant | 0 | 0 | The paper studies a novel 1,3-diazetidine-2-thione derivative synthesized using phenyl isothiocyanate as a reagent, and contains no toxicokinetic parameters for phenyl isothiocyanate itself. |
| popPK | Ito_2022 | irrelevant | 0 | 0 | Phenyl isothiocyanate is used solely as a derivatizing reagent for tauropine, which is the actual subject of the pharmacokinetic study. |
| popPK | Porta_2021 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study examining the analgesic effects of phenyl isothiocyanate (P-ITC) in mice, containing no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Romeo_2018 | irrelevant | 0 | 0 | The paper is a review on the antimicrobial activity of isothiocyanates and does not report quantitative toxicokinetic parameters for phenyl isothiocyanate. |
| popPK | Tang_2008 | irrelevant | 0 | 0 | The paper uses phenylisothiocyanate (PITC) to induce liver damage in rats to test the protective effects of a traditional Chinese medicine on the metabolism of *other* probe drugs (caffeine, dapsone, chlorzoxazone), and does not report toxicokinetic parameters for PITC itself. |
| popPK | Thomson_2006 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study on apoptosis where phenyl isothiocyanate serves as a comparator with no observed biological activity, and no toxicokinetic parameters are reported. |
| popPK | Xiao_2004 | irrelevant | 0 | 0 | The paper focuses on phenethyl isothiocyanate (PEITC) and uses phenyl isothiocyanate only as a negative control with no kinetic parameters reported. |
| popPK | Yamaura_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for L-theanine, while phenylisothiocyanate (PITC) is used solely as an analytical derivatization reagent. |
| popPK | Yang_2023 | irrelevant | 0 | 0 | The paper describes the synthesis of fluorescent probes using phenyl isothiocyanate as a chemical precursor, reporting no toxicokinetic parameters for phenyl isothiocyanate itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphenyl_isothiocyanate%5D&body=Drug%3A%20phenyl_isothiocyanate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_phenyl_isothiocyanate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
