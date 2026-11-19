<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Octyl gallate&quot;}]"></div>

# Octyl gallate

- **generic name:** Octyl gallate
- **T3DB:** [T3D4831](http://www.t3db.ca/toxins/T3D4831) · **PubChem:** [CID 61253](https://pubchem.ncbi.nlm.nih.gov/compound/61253)

## About

Octyl gallate is an antioxidant used in margarine Octyl gallate has been shown to exhibit anti-viral function.

- **Category:** Food Toxin, Synthetic Toxin

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4831">T3DB T3D4831</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 1034-01-1</small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 1.00).">other organism</span> | [Ridoutt_1998_GA1](drugs/toxin_octyl_gallate/pd_Ridoutt_1998_GA1.md) | GA1 · model not identified | — | Ridoutt BG et al., Metabolism of deuterium- and tritium-la…, Tree physiology (1998) | [10.1093/treephys/18.10.659](https://doi.org/10.1093/treephys/18.10.659) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-16 02:17 | 9:07 | 0/0/0 | 0/1/0 | 0/0/0 | 119,939/2,589 | einfracz / qwen3.8-flash-next | 10 | 2/3 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 29 matched, 31 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Feng_2024 | irrelevant | 0 | 0 | The paper studies linezolid in neonates, with no mention of octyl_gallate. |
| PGx | Fujioka_1990 | not_relevant | 0 | 0 | The text discusses gibberellin biosynthesis in maize and does not mention octyl_gallate. |
| PGx | Ingram_1987 | not_relevant | 0 | 0 | The paper discusses plant genetics (Pisum sativum) and gibberellin biosynthesis, with no mention of the drug octyl_gallate or pharmacokinetic/pharmacodynamic parameters. |
| PGx | Judmann_2023 | not_relevant | 0 | 0 | The paper focuses on the design and evaluation of EGFR-targeting peptides radiolabeled with Gallium-68; it does not mention octyl_gallate or any pharmacogenomic analysis. |
| PGx | Li_2011 | not_relevant | 0 | 0 | The paper discusses ferulic acid glucuronidation; octyl gallate is mentioned only as a marker substrate for UGT1A1, with no pharmacogenomic effects on its PK/PD parameters reported. |
| popPK | Lichtenstein_2004 | irrelevant | 0 | 0 | The paper discusses adenovirus E3 proteins and contains no data on octyl_gallate. |
| popPK | Punt_2021 | relevant | 8 | 4 | The paper reports PBK model input parameters (intrinsic hepatic clearance, absorption rate) and predicted pharmacokinetic parameters (Cmax, AUC) for octyl gallate, but specific numeric values for the clearance and absorption constants are not explicitly listed in the provided text snippets (likely in tables or SI). |
| PGx | Rudich_1976 | not_relevant | 0 | 0 | The paper concerns plant physiology (cucumber seedlings) and gibberellin transport/metabolism, with no mention of octyl gallate or human pharmacogenomics. |
| PGx | Sjöstedt_2017 | not_relevant | 0 | 0 | The paper reports on octyl gallate as an inhibitor of transporters (BCRP/MRP2), but does not investigate how genetic variants affect its own pharmacokinetic or pharmacodynamic parameters. |
| popPK | Soars_2002 | irrelevant | 1 | 2 | The paper describes the biosynthesis of octyl gallate glucuronide standards using dog liver microsomes, not toxicokinetic disposition or kinetic parameters in humans/animals. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper focuses on FAP-targeted radiotracers for cancer imaging and does not mention octyl_gallate or report any toxicokinetic parameters for it. |
| popPK | Wu_2016 | irrelevant | 0 | 0 | The paper studies Gomisin A (GA) as a CYP3A4 probe, with no mention of octyl gallate or its kinetic parameters. |
| PGx | Wu_2016 | not_relevant | 0 | 0 | The paper focuses on Gomisin A as a probe for CYP3A4, not on octyl_gallate, and does not discuss pharmacogenomic effects on octyl_gallate PK/PD. |
| PGx | Zanewich_2020 | not_relevant | 0 | 0 | The paper discusses gibberellins (plant hormones) and heterosis in crops, having no relation to octyl_gallate or human pharmacogenomics. |
| PGx | Zastrozhin_2019 | not_relevant | 0 | 0 | The paper focuses on mirtazapine, not octyl_gallate. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boctyl_gallate%5D&body=Drug%3A%20octyl_gallate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_octyl_gallate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
