<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Microcystin-YR&quot;}]"></div>

# Microcystin-YR

- **generic name:** Microcystin-YR
- **T3DB:** [T3D3608](http://www.t3db.ca/toxins/T3D3608) · **PubChem:** [CID 6437088](https://pubchem.ncbi.nlm.nih.gov/compound/6437088)

## About

Microcystin-YR (MCРYR) is one of over 80 types of microcystins, cyclic heptapeptides that have been shown to be liver toxins, and which are produced by <i>Microcystis</i> species. Microcystins are chemically stable over a wide range of temperature and pH, possibly as a result of their cyclic structure. The toxins are also resistant to enzymatic hydrolysis (in guts of animals) by some general proteases, such as pepsin, trypsin, collagenase, and chymotrypsin.

- **Category:** Bacterial Toxin, Natural Toxin
- **Route of exposure:** oral
- **Sources and uses:** Microcystins are produced by the cyanobacterial cells. When the algae dies, the cell walls burst, releasing the toxin into the water.
- **Mechanism of toxicity:** The site of action of microcystins is the hepatocyte, the commonest cell type in the liver. They act by disrupting the cytoskeleton, the adaptable protein framework that constantly shapes and reshapes the cell as it responds to the environment. …
- **Health effects:** Liver damage. While microcystin-LR does not cause cancer, microcystin may stimulate the growth of cancer cells.
- **Carcinogenicity:** Microcystis extracts: Group 3, not classifiable as to their carcinogenicity to humans.
- **Minimal risk levels (ATSDR):** WHO developed a drinking water concentration limit of 1.5 μg/L for microcystin LR. They assumed that a 60 kg (132 lbs.) person drinks two liters of water each day and that 80% of the two liters is from a contaminated source.
- **Acute toxicity:** LD50 for rats and mice are in the range 36-122 micrograms/kg with the inhalation toxicity 180 mg/min/m3 or 43 micrograms/kg.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3608">T3DB T3D3608</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 101064-48-6 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:421966">ChEBI 421966</a></small></p>

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
| 2026-11-11 11:21 | 1:58 | 0/0/0 | 0/0/0 | 0/0/0 | 16,440/1,686 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blom_2001 | irrelevant | 0 | 0 | This is an acute toxicity (LC50) comparison in a zooplankton bioassay, not a kinetic parameter study of microcystin-YR. |
| popPK | Ling_2024 | irrelevant | 1 | 0 | Study of MC-LR microbial degradation kinetics in water with molecular modeling; MC-YR appears only in predicted toxicity rankings, with no kinetic parameters for MC-YR. |
| popPK | Mountfort_2005 | irrelevant | 0 | 0 | This is an analytical method paper; IC50 values are enzyme-inhibition assay sensitivities, not toxicokinetic parameters (no half-lives, rate constants, clearance, or disposition of microcystin YR in vivo). |
| popPK | Wirsing_1998 | irrelevant | 0 | 0 | Microcystin-YR is only mentioned as a minor component identified in a bloom sample; no kinetic parameters of any kind are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmicrocystin_yr%5D&body=Drug%3A%20microcystin_yr%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_microcystin_yr/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
