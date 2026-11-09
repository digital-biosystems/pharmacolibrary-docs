<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;9-Hydroxyphenanthrene&quot;}]"></div>

# 9-Hydroxyphenanthrene

- **generic name:** 9-Hydroxyphenanthrene
- **T3DB:** [T3D4991](http://www.t3db.ca/toxins/T3D4991) · **PubChem:** [CID 10229](https://pubchem.ncbi.nlm.nih.gov/compound/10229)

## About

This compound belongs to the family of Phenanthrenes and Derivatives. These are polycyclic compounds containing a phenanthrene moiety, which is a tricyclic aromatic compound with three non-linearly fused benzene.

- **Category:** Natural Toxin, Animal Toxin
- **Mechanism of toxicity:** 9-phenanthrol is a recently identified inhibitor of the transient receptor potential melastatin (TRPM) 4 channel, a Ca(2+) -activated non-selective cation channel whose mechanism of action remains to be determined. 9-phenanthrol modulates a variety of physiological processes through TRPM4 current inhibition. 9-Phenanthrol modulates smooth muscle contraction in bladder and cerebral arteries, affects spontaneous activity in neurons and in the heart, and reduces lipopolysaccharide-induced cell death. 9-phenanthrol exerts cardioprotective effects against ischaemia-reperfusion injuries and reduces ischaemic stroke injuries. The most specific inhibitor of TRPM4 channels currently available is 9-phenanthrol, which abolishes arrhythmias induced by hypoxia and reoxygenation in the mouse ventricle. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4991">T3DB T3D4991</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 484-17-3 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:28820">ChEBI 28820</a></small></p>

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
| 2026-11-09 18:00 | 5:44 | 0/0/0 | 0/0/0 | 0/0/0 | 146,786/6,604 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sobus_2010.pdf` | Sobus JR et al., Biomarker variance component estimation…, Toxicology letters (2010) | pd | 5 | [10.1016/j.toxlet.2010.09.006](https://doi.org/10.1016/j.toxlet.2010.09.006) | [20851754](https://www.ncbi.nlm.nih.gov/pubmed/20851754) | metadata signals extractable PD data (exposure-response) |
| `Zhou_2024.pdf` | Zhou M et al., Longitudinal association of polycyclic…, Environmental pollution (Ba… (2024) | pd | 5 | [10.1016/j.envpol.2023.122801](https://doi.org/10.1016/j.envpol.2023.122801) | [37890693](https://www.ncbi.nlm.nih.gov/pubmed/37890693) | metadata signals extractable PD data (exposure-response) |

<sub>queue written 2026-11-09 18:00 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bartolomé_2015 | irrelevant | 0 | 0 | The paper reports steady-state urinary concentrations for exposure assessment, not quantitative toxicokinetic parameters (half-life, clearance, partition coefficients) for 9-hydroxyphenanthrene. |
| popPK | Caron-Beaudoin_2022 | irrelevant | 0 | 0 | The paper reports urinary concentrations of 9-hydroxyphenanthrene as a biomarker for exposure assessment in a population study, without providing any toxicokinetic parameters such as half-life, clearance, or rate constants. |
| popPK | Chen_2026 | irrelevant | 0 | 0 | The paper is an epidemiological and mechanistic study linking PAH metabolites to disease risk and cellular effects, reporting no quantitative toxicokinetic parameters (half-life, clearance, etc.) for 9-hydroxyphenanthrene. |
| popPK | Cheng_2021 | irrelevant | 0 | 0 | The paper is an epidemiological study measuring urinary metabolite concentrations and their association with diabetes outcomes, reporting no toxicokinetic parameters such as half-lives, clearance, or rate constants for 9-hydroxyphenanthrene. |
| popPK | Elovaara_2003 | irrelevant | 2 | 2 | The paper measures urinary excretion fractions of metabolites (e.g., 9-phenanthrol) of phenanthrene rather than kinetic parameters (half-life, clearance) for 9-hydroxyphenanthrene itself. |
| popPK | Fan_2012 | irrelevant | 0 | 0 | The paper is an epidemiological exposure study reporting urinary concentrations of 9-hydroxyphenanthrene as a biomarker of exposure, but it contains no kinetic parameters such as half-life, clearance, or rate constants. |
| popPK | Feldt_2014 | irrelevant | 0 | 0 | The paper is an exposure/biomonitoring study reporting urinary concentrations of PAH metabolites in humans, with no kinetic parameters (half-life, clearance, partition coefficients, etc.) reported for 9-hydroxyphenanthrene. |
| popPK | Grimmer_1993 | irrelevant | 0 | 0 | The study reports urinary excretion amounts (mass/24h) and metabolite profiles for biomonitoring, which are exposure/outcome data rather than quantitative kinetic parameters (half-life, clearance, rate constants) for 9-hydroxyphenanthrene. |
| popPK | Hua_2021 | irrelevant | 0 | 0 | The paper describes an analytical method for measuring OH-PAHs in urine and does not report any toxicokinetic parameters such as half-lives, clearance, or rate constants for 9-hydroxyphenanthrene. |
| popPK | Joksić_2022 | irrelevant | 0 | 0 | The paper is a human biomonitoring study reporting urinary concentrations (exposure levels) of phenanthrene metabolites, with no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for 9-hydroxyphenanthrene. |
| popPK | Liu_2017 | irrelevant | 0 | 0 | The paper reports urinary concentrations of 9-hydroxyphenanthrene as a biomarker of exposure and its associations with risk factors, but provides no kinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Nübler_2023 | irrelevant | 0 | 0 | The paper is a quality assurance/inter-laboratory comparison study focused on the analytical methods for detecting PAH metabolites in urine, not on the toxicokinetic parameters of the substance itself. |
| popPK | Poursafa_2017 | irrelevant | 0 | 0 | The paper is an epidemiological association study reporting regression coefficients for urinary metabolite concentrations, not quantitative toxicokinetic parameters (half-life, rate constants, clearance, etc.). |
| popPK | Ratelle_2020 | irrelevant | 0 | 0 | The paper is an exposure biomonitoring study measuring urinary levels of PAH metabolites, not a toxicokinetic study, and contains no kinetic parameters (half-life, clearance, etc.) for 9-hydroxyphenanthrene. |
| popPK | Schulz_2009 | irrelevant | 0 | 0 | The paper reports population-level reference values (upper margins of background exposure) for urinary metabolites, not toxicokinetic parameters like half-life or rate constants. |
| popPK | Sobus_2010 | irrelevant | 0 | 0 | The paper is a variance component analysis of biomarker concentrations and does not report specific quantitative toxicokinetic parameters (such as rate constants, half-lives, or clearances) for 9-hydroxyphenanthrene. |
| popPK | Tao_2026 | irrelevant | 0 | 0 | The paper is an epidemiological study reporting associations between PAH metabolite concentrations in urine and immune indices, containing no toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Yang_2017 | irrelevant | 0 | 0 | This is an epidemiological study analyzing associations between urinary metabolite concentrations and semen quality, with no toxicokinetic parameters (e.g., half-life, clearance, rate constants) reported. |
| popPK | Yang_2017_2 | irrelevant | 0 | 0 | The paper is a cross-sectional epidemiological study reporting associations between urinary PAH metabolite concentrations and hormonal outcomes, containing no toxicokinetic parameters (half-lives, rate constants, etc.). |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper is an epidemiological study associating urinary 9-hydroxyphenanthrene levels with childhood weight and obesity, reporting regression coefficients and odds ratios rather than any toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Zhang_2017 | irrelevant | 0 | 0 | The study reports urinary concentrations of 9-hydroxyphenanthrene as an exposure biomarker but does not provide kinetic parameters such as clearance, half-life, or partition coefficients. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper is an epidemiological association study measuring urinary concentrations as biomarkers of exposure, with no quantitative toxicokinetic parameters (such as half-life, clearance, or rate constants) reported for 9-hydroxyphenanthrene. |
| popPK | Zhen_2023 | irrelevant | 0 | 0 | This is an epidemiological meta-analysis of exposure and health outcomes (ORs) which contains no quantitative toxicokinetic parameters for 9-hydroxyphenanthrene. |
| popPK | Zhou_2024 | irrelevant | 0 | 0 | The paper reports an epidemiological association between urinary metabolite concentrations and lung function decline, containing no kinetic parameters (half-life, clearance, rate constants, etc.). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B9_hydroxyphenanthrene%5D&body=Drug%3A%209_hydroxyphenanthrene%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_9_hydroxyphenanthrene/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
