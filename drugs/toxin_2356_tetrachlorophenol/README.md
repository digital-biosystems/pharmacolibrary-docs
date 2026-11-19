<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;2,3,5,6-Tetrachlorophenol&quot;}]"></div>

# 2,3,5,6-Tetrachlorophenol

- **generic name:** 2,3,5,6-Tetrachlorophenol
- **T3DB:** [T3D0870](http://www.t3db.ca/toxins/T3D0870) · **PubChem:** [CID 13636](https://pubchem.ncbi.nlm.nih.gov/compound/13636)

## About

2,3,5,6-Tetrachlorophenol is a biodegradation product of polychlorinated benzene and polychlorinated biphenols.

- **Category:** Food Toxin, Synthetic Toxin
- **Route of exposure:** inhalation, oral, dermal, eye contact
- **Sources and uses:** Breathing contamiated air; drinking contaminated water; eating contaminating food; skin/eye contact (particularly while treating wood).
- **Mechanism of toxicity:** 2,3,5,6-tetrachlorophenol acts at the sites of adenosine triphosphate production and decreases or blocks it without blocking the electron transport chain. Thus the poison uncouples phosphorylation from oxidation. …
- **Health effects:** Dermal exposure can cause corrosive skin damage.
- **Carcinogenicity:** Not directly listed by IARC, but related polychlorophenols are discussed, and combined exposures to polychlorophenols or to their sodium salts are classified as possibly carcinogenic to humans (Group 2B).
- **Acute toxicity:** LD50: 89 mg/kg (Oral, Mouse)
LD50: >2000 mg/kg (Dermal, Rabbit)
- **Treatment:** In case of oral exposure, dilution may enhance absorption of phenol, and should be avoided; charcoal may be administered. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D0870">T3DB T3D0870</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 935-95-5 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:52048">ChEBI 52048</a></small></p>

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
| 2026-11-15 16:52 | 1:18 | 0/0/0 | 0/0/0 | 0/0/0 | 19,355/1,446 | einfracz / qwen3.8-flash-next | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ahlborg_1978.pdf` | Ahlborg UG et al., Metabolism of tetrachlorophenols in the…, Archives of toxicology (1978) | popPK | 8 | [10.1007/BF00353280](https://doi.org/10.1007/BF00353280) | [580377](https://pubmed.ncbi.nlm.nih.gov/580377) | The paper reports qualitative metabolic fate and a 24-hour elimination window for the substance in rats, which constitutes toxicokinetic data, but it lacks specific numeric kinetic parameters (half-lives, clearance rates) in the text. |
| `Pekari_1991.pdf` | Pekari K et al., Urinary excretion of chlorinated phenol…, International archives of o… (1991) | popPK | 8 | [10.1007/BF00406199](https://doi.org/10.1007/BF00406199) | [1856025](https://pubmed.ncbi.nlm.nih.gov/1856025) | The paper reports apparent half-times (4.3 days for one-compartment; 5.3 and 26 days for two-compartment) and renal clearance data for 2,3,4,6-tetrachlorophenol in human saw-mill workers. |

<sub>queue written 2026-11-15 16:52 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahlborg_1978 | relevant | 8 | 2 | The paper reports qualitative metabolic fate and a 24-hour elimination window for the substance in rats, which constitutes toxicokinetic data, but it lacks specific numeric kinetic parameters (half-lives, clearance rates) in the text. |
| popPK | Babich_1987 | irrelevant | 0 | 0 | The paper reports in vitro cytotoxicity data (cell survival), not quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Hassen_2018 | irrelevant | 0 | 0 | The paper describes bacterial biodegradation of pentachlorophenol and its metabolites, reporting toxicity endpoints (LC50/IGC50) but no toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B2356_tetrachlorophenol%5D&body=Drug%3A%202356_tetrachlorophenol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_2356_tetrachlorophenol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
