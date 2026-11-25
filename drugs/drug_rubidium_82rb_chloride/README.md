<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09G&quot;,&quot;href&quot;:&quot;atc/V09G.md&quot;},{&quot;label&quot;:&quot;rubidium (82Rb) chloride&quot;}]"></div>

# rubidium (82Rb) chloride

- **generic name:** rubidium (82Rb) chloride
- **ATC codes:** `V09GX04`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

Rubidium chloride is a diagnostic radiopharmaceutical used to evaluate the cardiovascular system.

<small>⚠️ **Unverified** — written by `qwen3.8-27b` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Tahari_2014_reference](drugs/drug_rubidium_82rb_chloride/Rubidium82rbChloride_Tahari2014_reference.md) | — | 1-compartment (no model) | 0 | Tahari AK et al., Initial human experience with Rubidium-…, Journal of medical imaging… (2014) | [10.1111/1754-9485.12079](https://doi.org/10.1111/1754-9485.12079) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:25 | 0:03 | 0/1/0 | 0/0/0 | 0/0/0 | 4,220/164 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 24 matched, 10 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fujita_2021 | irrelevant | 0 | 0 | Rubidium-82 is used as a diagnostic tracer for blood-brain barrier permeability, not as the subject drug for pharmacokinetic parameter estimation. |
| PGx | Fujita_2021 | not_relevant | 0 | 0 | The paper assesses blood-brain barrier permeability using 82Rb-PET but does not investigate gene variants or their effects on pharmacokinetic/pharmacodynamic parameters. |
| popPK | Gregg_2021 | irrelevant | 0 | 0 | The study focuses on myocardial blood flow and Gjedde-Patlak-Rutland graphical analysis for perfusion imaging, not the extraction of pharmacokinetic disposition parameters (CL, V, ka) for the drug itself. |
| PGx | Gregg_2021 | not_relevant | 0 | 0 | The study focuses on a new graphical analysis method (GPR) for measuring myocardial blood flow using 82Rb and does not report any pharmacogenomic effects or gene variants affecting the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Jarden_1994 | irrelevant | 0 | 0 | The paper uses Rubidium-82 as a diagnostic imaging agent to measure permeability and pH in brain tumors, not as a subject drug for pharmacokinetic parameter estimation (CL, V, etc.). |
| PGx | Jarden_1994 | not_relevant | 0 | 0 | The paper studies brain tumor pathophysiology using Rubidium-82 as an imaging tracer, not pharmacogenomics of the drug. |
| popPK | Knešaurek_2009 | irrelevant | 1 | 1 | This human PET perfusion study uses 82Rb as a diagnostic tracer and reports blood-flow repeatability, not drug disposition parameters. |
| popPK | Maddahi_2014 | irrelevant | 0 | 0 | This is a review article focused on cardiac PET tracers that mentions Rubidium-82 only as a diagnostic imaging agent with a 76-second half-life, without providing any quantitative pharmacokinetic disposition parameters (CL, V, etc.) for the drug itself. |
| PGx | Maddahi_2014 | not_relevant | 0 | 0 | The paper reviews PET tracers and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of rubidium-82. |
| popPK | Rigo_1986 | irrelevant | 0 | 0 | The paper uses Rubidium-82 as a diagnostic tracer for perfusion imaging in myocardial infarction patients, not as a subject for pharmacokinetic parameter estimation (CL, V, etc.). |
| PGx | Rigo_1986 | not_relevant | 0 | 0 | The paper discusses the use of Rubidium-82 as a PET tracer for myocardial blood flow in post-infarction patients but does not report any pharmacogenomic effects or genetic variants influencing its PK/PD. |
| PGx | Tahari_2014 | not_relevant | 0 | 0 | The study investigates renal PET imaging feasibility in healthy volunteers and does not report any pharmacogenomic effects or gene variants. |
| popPK | Yu_2016 | irrelevant | 4 | 2 | The study reports PET kinetic parameters (K1, MBF, CFR) derived from a 1-tissue model rather than standard PK disposition parameters (CL, V), and the specific numeric values are only summarized as percentage changes relative to uncorrected data. |
| PGx | Yu_2016 | not_relevant | 0 | 0 | The paper investigates respiratory motion correction in dynamic PET imaging and does not report any pharmacogenomic effects or genetic variants. |
| popPK | Zünkeler_1996 | irrelevant | 0 | 0 | Rubidium-82 is used as a diagnostic tracer to measure blood-brain barrier permeability, not as a drug subject for PK parameter estimation. |
| PGx | Zünkeler_1996 | not_relevant | 0 | 0 | The paper investigates pharmacokinetics related to blood-brain barrier disruption and does not mention any genetic variants or pharmacogenomic factors. |
| popPK | vom_2001 | irrelevant | 0 | 0 | The paper is a review of PET imaging techniques where Rb-82 is a diagnostic tracer, and no quantitative pharmacokinetic parameters for Rb-82 are reported. |
| PGx | vom_2001 | not_relevant | 0 | 0 | The paper is a review of PET imaging applications for cardiac diagnosis and does not report pharmacogenomic effects on the PK/PD of rubidium-82 chloride. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brubidium_82rb_chloride%5D&body=Drug%3A%20rubidium_82rb_chloride%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_rubidium_82rb_chloride/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 04:24 UTC</sub>
