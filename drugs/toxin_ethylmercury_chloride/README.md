<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Ethylmercury chloride&quot;}]"></div>

# Ethylmercury chloride

- **generic name:** Ethylmercury chloride
- **T3DB:** [T3D1359](http://www.t3db.ca/toxins/T3D1359) · **PubChem:** [CID 7862](https://pubchem.ncbi.nlm.nih.gov/compound/7862)

## About

Chemical compound.

<p><small>Source: <a href="https://www.wikidata.org/wiki/Q4498247">Wikidata Q4498247</a> · <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0</a></small></p>

- **Category:** Industrial/Workplace Toxin, Pollutant, Airborne Pollutant, Synthetic Toxin
- **Route of exposure:** oral, inhalation, dermal
- **Mechanism of toxicity:** High-affinity binding of the divalent mercuric ion to thiol or sulfhydryl groups of proteins is believed to be the major mechanism for the activity of mercury. Through alterations in intracellular thiol status, mercury can promote oxidative stress, lipid peroxidation, mitochondrial dysfunction, and changes in heme metabolism. …
- **Health effects:** Mercury mainly affects the nervous system. Exposure to high levels of metallic, inorganic, or organic mercury can permanently damage the brain, kidneys, and developing fetus. …
- **Carcinogenicity:** No indication of carcinogenicity (not listed by IARC).
- **Minimal risk levels (ATSDR):** Chronic Inhalation: 0.0002 mg/m3
- **Acute toxicity:** LD50: 40 mg/kg (Oral, Rat); LD50: 200 mg/kg (Dermal, Rat); LC50: 5 mg/m3 (Inhalation, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D1359">T3DB T3D1359</a> (free for non-commercial use with attribution), quoted in part; reference markers removed.</small></p>

<p><small>Also: CAS 107-27-7</small></p>

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
| 2026-11-09 10:46 | 0:59 | 0/0/0 | 0/0/0 | 0/0/0 | 4,845/457 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 1 matched, 1 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cao_2019.pdf` | Cao D et al., Acute and Sublethal Effects of Ethylmer…, Bulletin of environmental c… (2019) | popPK | 9 | [10.1007/s00128-018-2513-3](https://doi.org/10.1007/s00128-018-2513-3) | [30515546](https://pubmed.ncbi.nlm.nih.gov/30515546) | The paper describes a quantitative accumulation and elimination (depuration) study in fish but the specific kinetic values (concentrations, rate constants) are not included in the provided evidence. |

<sub>queue written 2026-11-09 10:45 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cao_2019 | relevant | 9 | 1 | The paper describes a quantitative accumulation and elimination (depuration) study in fish but the specific kinetic values (concentrations, rate constants) are not included in the provided evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bethylmercury_chloride%5D&body=Drug%3A%20ethylmercury_chloride%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ethylmercury_chloride/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
