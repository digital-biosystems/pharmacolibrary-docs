<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Cadmium sulfate&quot;}]"></div>

# Cadmium sulfate

- **generic name:** Cadmium sulfate
- **DrugBank:** none · **PubChem:** [CID 24962](https://pubchem.ncbi.nlm.nih.gov/compound/24962)
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
| 2026-11-09 10:16 | 3:12 | 0/0/0 | 0/0/0 | 0/0/0 | 100,142/2,455 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bánszegi_2014 | irrelevant | 0 | 0 | The paper describes a method for measuring body length in collembolans and presents dose-response growth data, but contains no quantitative toxicokinetic parameters (half-lives, clearance, partition coefficients, etc.) for cadmium sulfate. |
| popPK | Claverie_2000 | irrelevant | 2 | 0 | The paper reports toxicological outcomes (LD50, enzyme activities, organ mass) and qualitative retention patterns, but lacks specific quantitative toxicokinetic parameters (e.g., half-life, rate constants, partition coefficients) for cadmium sulfate. |
| popPK | Koleva_1988 | irrelevant | 0 | 0 | The paper reports changes in organ-specific enzyme activities (biomarkers) in response to cadmium exposure, but does not provide quantitative toxicokinetic parameters such as half-life, clearance, or tissue concentrations. |
| popPK | LeBoeuf_1987 | irrelevant | 0 | 0 | The study characterizes the deacetylation of diltiazem in rat liver, using cadmium sulfate only as an inhibitor of the enzymatic reaction rather than as the subject substance for toxicokinetic parameter determination. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | The paper uses cadmium sulfate as a positive control to test BPA's effects on biomineralization, and reports only acute toxicity (LC50) and endpoint fluorescence data, with no toxicokinetic parameters. |
| popPK | Odendaal_1999 | irrelevant | 0 | 0 | The paper reports an LC50 and behavioral avoidance data (ecotoxicology/toxicodynamics) but does not provide any quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for cadmium sulfate. |
| popPK | Robbiano_2006 | irrelevant | 0 | 0 | The paper reports genotoxicity (DNA fragmentation) and dose-response data for cadmium sulfate in cell cultures and rats, but does not contain quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients). |
| popPK | Sleet_1985 | irrelevant | 0 | 0 | The paper reports median lethal concentrations (LC50) for toxicity testing, not quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for cadmium sulfate. |
| popPK | Smith_1976 | irrelevant | 0 | 0 | The paper reports pulmonary function outcomes and exposure correlations in workers, but provides no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for cadmium sulfate. |
| popPK | Taha_2022 | irrelevant | 1 | 5 | The paper reports steady-state tissue and blood concentrations after subacute exposure but does not report kinetic parameters such as half-life, clearance, or rate constants. |
| popPK | Tuncsoy_2025 | irrelevant | 0 | 0 | The paper reports toxicodynamic effects (enzyme activities and hemocyte counts) of cadmium sulfate exposure in Galleria mellonella, but contains no quantitative toxicokinetic parameters (e.g., clearance, half-life, partition coefficients) for cadmium sulfate. |
| popPK | Vincent_1997 | irrelevant | 0 | 0 | The paper focuses on gene expression regulation (toxicodynamics) in HepG2 cells by ambient particles, using cadmium sulfate only as a positive control for validation, without reporting any toxicokinetic parameters for cadmium sulfate. |
| popPK | Yorulmazlar_2003 | irrelevant | 0 | 0 | The paper reports acute toxicity LC50 values and behavioral changes, but does not provide any quantitative toxicokinetic parameters such as half-life, clearance, or rate constants. |
| popPK | Zhao_2018 | irrelevant | 2 | 1 | The paper reports intracellular cadmium accumulation in A549 cells following cadmium sulfate exposure, but the specific quantitative time-course values are not present in the provided text, and the study focuses primarily on proteomic responses rather than deriving standard toxicokinetic rate parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcadmium_sulfate%5D&body=Drug%3A%20cadmium_sulfate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cadmium_sulfate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
