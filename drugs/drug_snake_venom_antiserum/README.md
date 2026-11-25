<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06A&quot;,&quot;href&quot;:&quot;atc/J06A.md&quot;},{&quot;label&quot;:&quot;snake venom antiserum&quot;}]"></div>

# snake venom antiserum

- **generic name:** snake venom antiserum
- **ATC codes:** `J06AA03`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

Antivenom is an immune serum that treats envenomation from snake bites. It is given by injection. Antivenom is a WHO essential medicine.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q424427](https://www.wikidata.org/wiki/Q424427), [Wikipedia](https://en.wikipedia.org/wiki/Antivenom?oldid=1341271076) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-11-24 03:29 | 0:03 | 0/0/0 | 0/0/0 | 0/0/0 | 3,819/158 | einfracz / qwen3.8-27b | 3 | 1/2 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yap_2015.pdf` | Yap MK et al., The Effect of a Polyvalent Antivenom on…, Basic & clinical pharmacolo… (2015) | popPK | 9 | [10.1111/bcpt.12398](https://doi.org/10.1111/bcpt.12398) | [25819552](https://pubmed.ncbi.nlm.nih.gov/25819552) | Study reports PK parameters (half-life, Vd) of antivenom in rabbits, but specific numeric values are implied rather than explicitly listed in the provided text. |

<sub>queue written 2026-11-24 03:29 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chatterjee_2006 | irrelevant | 0 | 0 | The study focuses on the venom-neutralizing properties of lupeol acetate and mentions snake venom antiserum only as a comparative protective agent, with no pharmacokinetic parameters reported for the antiserum. |
| PGx | Chatterjee_2006 | not_relevant | 0 | 0 | The study investigates the pharmacological effects of a plant extract (lupeol acetate) on snake venom toxicity and its interaction with antiserum, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Herrera_2017 | irrelevant | 5 | 2 | The abstract describes a pharmacokinetic study of antivenom in rabbits but does not report specific quantitative parameter values (CL, V, t1/2) in the provided text, stating only that studies suggest no effect of adrenaline. |
| PGx | Herrera_2017 | not_relevant | 0 | 0 | The study investigates the effect of adrenaline premedication on antivenom pharmacokinetics, not the effect of genetic variants. |
| popPK | Isbister_2010 | irrelevant | 0 | 0 | The paper is a review discussing the efficacy and effectiveness of antivenoms in a clinical context, without reporting any quantitative pharmacokinetic parameters for the drug. |
| PGx | Isbister_2010 | not_relevant | 0 | 0 | The paper discusses general antivenom efficacy and PK issues but does not report a pharmacogenomic effect (gene variant influencing drug response). |
| popPK | Knudsen_2020 | irrelevant | 0 | 0 | This is a discussion paper, not a quantitative pharmacokinetic study, and reports no disposition parameter values. |
| popPK | Padula_2016 | irrelevant | 1 | 0 | The paper is a single animal case report describing a fatal envenomation event; while it mentions antivenom concentrations, it does not report quantitative population pharmacokinetic parameters (CL, V, t1/2, etc.) for the antiserum. |
| PGx | Padula_2016 | not_relevant | 0 | 0 | The paper describes a fatal case study of snake envenomation in a cat and does not report pharmacogenomic effects on antivenom PK/PD. |
| popPK | Tibballs_2020 | irrelevant | 0 | 0 | This is a clinical case report describing the use of tiger snake antivenom in a human patient, but it does not provide any quantitative pharmacokinetic parameter values (e.g., clearance, volume of distribution, half-life) for the drug. |
| PGx | Tibballs_2020 | not_relevant | 0 | 0 | The paper is a clinical case report describing the treatment of a single patient and does not investigate the effect of genetic variants on snake venom antiserum pharmacokinetics or pharmacodynamics. |
| popPK | Yap_2015 | relevant | 9 | 4 | Study reports PK parameters (half-life, Vd) of antivenom in rabbits, but specific numeric values are implied rather than explicitly listed in the provided text. |
| PGx | Yap_2015 | not_relevant | 0 | 0 | The study investigates the PK of snake venom and antivenom in rabbits but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsnake_venom_antiserum%5D&body=Drug%3A%20snake_venom_antiserum%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_snake_venom_antiserum/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
