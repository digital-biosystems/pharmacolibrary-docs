<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Anthanthrene&quot;}]"></div>

# Anthanthrene

- **generic name:** Anthanthrene
- **T3DB:** [T3D0632](http://www.t3db.ca/toxins/T3D0632) · **PubChem:** [CID 9118](https://pubchem.ncbi.nlm.nih.gov/compound/9118)

## About

Anthanthrene is one of over 100 different polycyclic aromatic hydrocarbons (PAHs). PAHs are chemicals that are formed during the incomplete burning organic substances, such as fossil fuels. They are usually found as a mixture containing two or more of these compounds.

- **Category:** Pollutant, Food Toxin, Natural Toxin
- **Route of exposure:** oral, inhalation
- **Sources and uses:** PAHs are released into the environment via the combustion of fossil fuels, coke oven emissions and vehicle exhausts, as well as naturally from forest fires and vocanic eruptions. PAHs from these sources may contaminate nearly water systems. …
- **Mechanism of toxicity:** The ability of PAH's to bind to blood proteins such as albumin allows them to be transported throughout the body. Many PAH's induce the expression of cytochrome P450 enzymes, especially CYP1A1, CYP1A2, and CYP1B1, by binding to the aryl hydrocarbon receptor or glycine N-methyltransferase protein. …
- **Health effects:** PAHs are carcinogens and have been associated with the increased risk of skin, respiratory tract, bladder, stomach, and kidney cancers. They may also cause reproductive effects and depress the immune system.
- **Carcinogenicity:** IARC group 3, not classifiable as to its carcinogenicity to humans.
- **Treatment:** There is no know antidote for PAHs. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D0632">T3DB T3D0632</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 191-26-4</small></p>

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
| 2026-11-17 11:25 | 2:04 | 0/0/0 | 0/0/0 | 0/0/0 | 8,163/544 | einfracz / qwen3.8-flash-next | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Portengen_2023.pdf` | Portengen L et al., Methylated polycyclic aromatic hydrocar…, Environment international (2023) | pd | 5 | [10.1016/j.envint.2023.107870](https://doi.org/10.1016/j.envint.2023.107870) | [36921559](https://www.ncbi.nlm.nih.gov/pubmed/36921559) | metadata signals extractable PD data (exposure-response) |

<sub>queue written 2026-11-17 11:25 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Deutsch-Wenzel_1983 | irrelevant | 0 | 0 | The paper reports on carcinogenic potency and dose-response relationships, not on any toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Portengen_2023 | irrelevant | 0 | 0 | no_text gate: only 169 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Banthanthrene%5D&body=Drug%3A%20anthanthrene%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_anthanthrene/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
