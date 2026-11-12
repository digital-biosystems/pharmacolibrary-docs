<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Azaspiracid&quot;}]"></div>

# Azaspiracid

- **generic name:** Azaspiracid
- **T3DB:** [T3D2672](http://www.t3db.ca/toxins/T3D2672) · **PubChem:** [CID 21593892](https://pubchem.ncbi.nlm.nih.gov/compound/21593892)

## About

Azaspiracid is found in mollusks. Azaspiracid is an alkaloid from Mytilus edulis (blue mussel). Shellfish toxin.

- **Category:** Animal Toxin, Food Toxin, Synthetic Toxin
- **Route of exposure:** oral, inhalation, dermal, eye contact
- **Sources and uses:** Experimentally in cancer research. The toxin is also found in shellfish.
- **Mechanism of toxicity:** Azaspiracid-4 dose-dependent inhibits the increase in cytosolic Ca2+ levels induced by thapsigargin (Tg). Azaspiracid-2 and Azaspiracid-3 clearly increase cytosolic cAMP levels of human lymphocytes.
- **Health effects:** Possibly gastroenteritis.
- **Acute toxicity:** LD50: 500-600 mg/kg (Oral, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2672">T3DB T3D2672</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 214899-21-5</small></p>

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
| 2026-11-09 21:35 | 4:59 | 0/0/0 | 0/0/0 | 0/0/0 | 112,346/3,131 | einfracz / qwen3.8-27b | 4 | 1/3 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jauffrais_2012.pdf` | Jauffrais T et al., Effect of Azadinium spinosum on the fee…, Aquatic toxicology (Amsterd… (2012) | popPK | 8 | [10.1016/j.aquatox.2012.08.016](https://doi.org/10.1016/j.aquatox.2012.08.016) | [22982497](https://pubmed.ncbi.nlm.nih.gov/22982497) | The paper reports qualitative kinetic data (time to regulatory level &lt;6h, bioconversion observed at 3h) and plateau concentrations for azaspiracid in mussels, but lacks specific rate constants or half-lives. |
| `Pelin_2018.pdf` | Pelin M et al., Toxic equivalency factors (TEFs) after…, Toxicology letters (2018) | popPK | 8 | [10.1016/j.toxlet.2017.10.016](https://doi.org/10.1016/j.toxlet.2017.10.016) | [29107028](https://pubmed.ncbi.nlm.nih.gov/29107028) | The paper reports qualitative toxicokinetic observations (tissue distribution and persistence at 14 days) but lacks specific numeric kinetic parameters (half-life, clearance, partition coefficients) in the provided text. |

<sub>queue written 2026-11-09 21:35 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cañete_2010 | irrelevant | 0 | 0 | The paper describes an in vitro cytotoxicity assay methodology and dose-response curves for cell viability, providing no kinetic parameters (half-life, clearance, partition coefficients) for azaspiracid. |
| popPK | Dewi_2014 | irrelevant | 0 | 0 | The paper reports LD50 values (acute toxicity) for Azaspiracid-1, which are dose-response parameters, not toxicokinetic parameters like half-life, clearance, or bioavailability. |
| popPK | Gerssen_2010 | irrelevant | 0 | 0 | The paper is an analytical method validation for the detection of azaspiracid in shellfish and contains no toxicokinetic parameters. |
| popPK | Jauffrais_2012 | relevant | 8 | 2 | The paper reports qualitative kinetic data (time to regulatory level &lt;6h, bioconversion observed at 3h) and plateau concentrations for azaspiracid in mussels, but lacks specific rate constants or half-lives. |
| PGx | Kilcoyne_2018 | not_relevant | 0 | 0 | The paper characterizes a new marine biotoxin (AZA26) and its in vitro cytotoxicity relative to AZA1, but it does not report any pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kilcoyne_2019 | irrelevant | 0 | 0 | The paper reports on the culture optimization and toxin production in the microalga *Azadinium spinosum*, providing no toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for azaspiracid in any organism. |
| popPK | Krock_2024 | relevant | 8 | 2 | The paper reports filtration/uptake clearance rates (approx. 100 mL/mussel/h) and accumulation time-courses for AZA-59 in mussels, but specific concentration or tissue-level kinetic parameters are likely in figures or supplementary material not fully provided. |
| PGx | Krock_2024 | not_relevant | 0 | 0 | The study examines the biotransformation of a toxin (AZA-59) in mussels, not the effect of a gene variant on the PK/PD of a drug. |
| popPK | Ozawa_2023 | irrelevant | 4 | 0 | The paper reports qualitative accumulation trends and tissue distributions for azaspiracid in bivalves but lacks the specific quantitative kinetic parameters (rate constants, half-lives) required for scoring, and no numeric values are present in the evidence. |
| popPK | Pelin_2018 | relevant | 8 | 0 | The paper reports qualitative toxicokinetic observations (tissue distribution and persistence at 14 days) but lacks specific numeric kinetic parameters (half-life, clearance, partition coefficients) in the provided text. |
| popPK | Sérandour_2012 | irrelevant | 0 | 0 | The paper reports cytotoxicity (IC50) values from cell-based assays, which are toxicodynamic endpoints, not quantitative toxicokinetic parameters such as half-life or clearance. |
| popPK | Toyofuku_2006 | irrelevant | 0 | 0 | The paper reports risk assessment endpoints (LOAELs, RfDs) and categorization of biotoxins but contains no quantitative toxicokinetic parameters such as half-life, rate constants, or clearance. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bazaspiracid%5D&body=Drug%3A%20azaspiracid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_azaspiracid/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
