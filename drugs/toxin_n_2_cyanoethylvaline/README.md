<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;N-(2-Cyanoethyl)valine&quot;}]"></div>

# N-(2-Cyanoethyl)valine

- **generic name:** N-(2-Cyanoethyl)valine
- **T3DB:** [T3D4631](http://www.t3db.ca/toxins/T3D4631) · **PubChem:** [CID 11665476](https://pubchem.ncbi.nlm.nih.gov/compound/11665476)

## About

N-(2-Cyanoethyl)valine is a modified amino acid that arises from acrylonitrile modification of N-terminal amino acid in hemoglobin. It is used as a biomarker of long term or historical exposure to acrylonitrile (a byproduct of smoking cigarettes). The free amino acid arises from proteolytic degradation of hemoglobin.

- **Category:** Synthetic Toxin, Industrial/Workplace Toxin
- **Sources and uses:** It is used as a biomarker of long term or historical exposure to acrylonitrile (a byproduct of smoking cigarettes).
- **Mechanism of toxicity:** Organic nitriles decompose into cyanide ions both in vivo and in vitro. Consequently the primary mechanism of toxicity for organic nitriles is their production of toxic cyanide ions or hydrogen cyanide. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4631">T3DB T3D4631</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 51078-49-0</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-19 11:54 | 6:35 | 0/0/0 | 0/0/0 | 0/0/0 | 17,449/1,067 | einfracz / qwen3.8-flash-next | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Benz_1997 | irrelevant | 2 | 0 | The paper focuses on acrylonitrile and reports dose-response relationships for covalent binding, providing only a single fraction (0.2%) as a biomarker proxy, but no quantitative toxicokinetic parameters (half-life, clearance, Vd, etc.) for the substance itself. |
| popPK | Fennell_2000 | irrelevant | 1 | 0 | The paper reports concentrations of hemoglobin adducts (internal dose markers) in smokers but does not provide quantitative toxicokinetic parameters (half-life, clearance, rate constants, PBPK models, etc.) for the substance. |
| popPK | Leng_2014 | irrelevant | 1 | 1 | The paper is an exposure/biomonitoring study reporting hemoglobin adduct concentrations, not toxicokinetic parameters like half-life or clearance. |
| popPK | Tavares_1996 | irrelevant | 2 | 2 | The paper reports biomonitoring concentrations of N-(2-cyanoethyl)valine (a hemoglobin adduct) in humans and rats but does not provide quantitative kinetic parameters (such as half-lives, rate constants, or partition coefficients). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bn_2_cyanoethylvaline%5D&body=Drug%3A%20n_2_cyanoethylvaline%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_n_2_cyanoethylvaline/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
