<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06B&quot;,&quot;href&quot;:&quot;atc/D06B.md&quot;},{&quot;label&quot;:&quot;lysozyme&quot;}]"></div>

# lysozyme

- **generic name:** lysozyme
- **ATC codes:** `D06BB07`, `J05AX02`
- **DrugBank:** [DB13260](https://go.drugbank.com/drugs/DB13260) · **PubChem:** not captured
- **groups:** investigational

## About

Lysozyme is an enzyme classified in ATC as a topical and systemic antiviral, but it is considered investigational rather than an established medicine. It is not an approved drug; no marketing authorisation is listed, so it remains in the investigational stage.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q72487897](https://www.wikidata.org/wiki/Q72487897) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Yamamoto_2020_hCaSR](drugs/drug_lysozyme/pd_Yamamoto_2020_hCaSR.md) | calcium-sensing receptor activation ← lysozyme · direct Emax (saturable) effect | — | Yamamoto M et al., Sweet proteins lysozyme and thaumatin a…, Biochemical and biophysical… (2020) | [10.1016/j.bbrc.2019.10.111](https://doi.org/10.1016/j.bbrc.2019.10.111) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Ide_2009_cAMP](drugs/drug_lysozyme/pd_Ide_2009_cAMP.md) | intracellular cAMP ← lysozyme · direct sigmoid Emax (Hill) effect | — | Ide N et al., Interactions of the sweet-tasting prote…, Journal of agricultural and… (2009) | [10.1021/jf803956f](https://doi.org/10.1021/jf803956f) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:42 | 0:49 | 0/0/0 | 1/1/0 | 0/0/0 | 67,940/2,286 | einfracz / qwen3.8-27b | 5 | 3/2 | 4/1 | 0 |

## Coverage

- **PubMed hits:** 38 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2011 | irrelevant | 0 | 0 | The study is a methodological paper on mass spectrometry desalting where lysozyme is used only as a test protein to demonstrate salt removal efficiency, not as a subject for pharmacokinetic analysis. |
| popPK | Coles_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of lysozyme secretion by bronchial mucosa, not a pharmacokinetic study of drug disposition. |
| popPK | Dai_2023 | irrelevant | 0 | 0 | This study investigates the toxicokinetics of Cadmium (Cd) in crayfish; lysozyme is merely an immune biomarker (enzyme activity) measured in hemolymph, not a drug subject to pharmacokinetic modeling. |
| popPK | Darragh_1996 | irrelevant | 0 | 0 | The paper describes an in vitro chemical method for correcting amino acid analysis errors during acid hydrolysis of lysozyme, not a pharmacokinetic study. |
| popPK | Darragh_2005 | irrelevant | 0 | 0 | The paper describes a method for amino acid analysis of proteins, including lysozyme, but does not report pharmacokinetic parameters. |
| popPK | Dong_2019 | irrelevant | 0 | 0 | Lysozyme is used solely as a reagent to remove bacterial cell walls for the analysis of silver uptake, not as the subject of a pharmacokinetic study. |
| popPK | Goicolea_2022 | irrelevant | 0 | 0 | The study is a proof-of-concept for an ELISA mimic targeting lactoferrin, and lysozyme is only mentioned as a comparator protein for assessing cross-reactivity, not as a subject for pharmacokinetic analysis. |
| popPK | Gridneva_2021 | irrelevant | 0 | 0 | The study investigates the association between human milk lysozyme intake and infant body composition, not the pharmacokinetic disposition of lysozyme. |
| popPK | Ide_2009 | irrelevant | 0 | 0 | The study investigates the interaction of lysozyme with sweet-taste receptors (sensory/pharmacodynamics) and does not report any pharmacokinetic disposition parameters for lysozyme. |
| popPK | Lees_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of miloxicam, and lysozyme is mentioned only as a marker in inflammatory exudates, not as the subject drug. |
| popPK | Mace_2000 | irrelevant | 0 | 0 | The paper studies the receptor for lysozyme in Tetrahymena thermophila and does not report pharmacokinetic parameters for lysozyme disposition. |
| popPK | Panarelli_1998 | irrelevant | 0 | 0 | The study investigates glucocorticoid receptor polymorphisms and uses lysozyme release from leukocytes in vitro as a diagnostic/biochemical marker, rather than measuring the pharmacokinetic parameters of lysozyme. |
| popPK | Plotuna_2026 | irrelevant | 0 | 0 | This is a nutritional/immunology study measuring lysozyme concentration as an innate immune biomarker in rabbits, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for lysozyme as a dosed drug. |
| popPK | Rozi_2025 | irrelevant | 0 | 0 | The paper is an immunological study on a vaccine where lysozyme is measured as an innate immune biomarker, not as a drug subject to pharmacokinetic analysis. |
| popPK | Sarkhel_2014 | irrelevant | 1 | 0 | Lysozyme is used as a model drug in an in vitro release study, and the paper relies on literature values for PK parameters rather than providing original quantitative PK data for lysozyme. |
| popPK | Torrens_2011 | irrelevant | 0 | 0 | This is an in-vitro biophysical study of protein adsorption to vesicles, not a pharmacokinetic study reporting disposition parameters for lysozyme. |
| popPK | Wolska_2024 | irrelevant | 0 | 0 | This is an in vitro pharmaceutical formulation study investigating the effect of lysozyme enzyme on the release of indomethacin from solid lipid microparticles; it does not report pharmacokinetic parameters for lysozyme as a subject drug. |
| popPK | Xia_2013 | irrelevant | 0 | 0 | The paper describes an electrochemical aptasensor for the detection of lysozyme, not a pharmacokinetic study of the drug. |
| popPK | Yamamoto_2020 | irrelevant | 0 | 0 | The paper is a mechanistic/pharmacological study on the calcium-sensing receptor (CaSR) activation by lysozyme in an in-vitro cell assay, reporting an EC50 (potency) but no pharmacokinetic parameters (CL, V, T1/2, etc.). |
| popPK | Zhao_2019 | irrelevant | 0 | 0 | The study is an in-vitro biophysical investigation of nanoprotein adsorption kinetics (KD, Hill coefficient) rather than a pharmacokinetic study reporting disposition parameters (CL, V, half-life) for lysozyme. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
