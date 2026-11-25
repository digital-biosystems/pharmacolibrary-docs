<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P03A&quot;,&quot;href&quot;:&quot;atc/P03A.md&quot;},{&quot;label&quot;:&quot;bioallethrin&quot;}]"></div>

# bioallethrin

- **generic name:** bioallethrin
- **ATC codes:** `P03AC02`
- **DrugBank:** [DB13746](https://go.drugbank.com/drugs/DB13746) · **PubChem:** [CID 15558638](https://pubchem.ncbi.nlm.nih.gov/compound/15558638)
- **molar mass:** 302.414 g/mol (C19H26O3) — DrugBank
- **groups:** approved, withdrawn

## About

Bioallethrin is an insecticide and ectoparasiticide used to treat external parasites. It is given as a topical aerosol or shampoo. The substance is no longer used.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q2102184](https://www.wikidata.org/wiki/Q2102184), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [García_2017_growth_inhibition](drugs/drug_bioallethrin/pd_Garc_a_2017_growth_inhibition.md) | Growth inhibition of Pseudokirchneriella subcapitata ← bioallethrin (R/S-bioallethrin and esbiol) · direct sigmoid Emax (Hill) effect | — | García MÁ et al., A capillary micellar electrokinetic chr…, Journal of chromatography. A (2017) | [10.1016/j.chroma.2017.06.056](https://doi.org/10.1016/j.chroma.2017.06.056) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Norris_2024_LC50](drugs/drug_bioallethrin/pd_Norris_2024_LC50.md) | LC50 ← bioallethrin · model not identified | — | Norris EJ et al., Repellency and Toxicity of Vapor-Active…, ACS infectious diseases (2024) | [10.1021/acsinfecdis.3c00294](https://doi.org/10.1021/acsinfecdis.3c00294) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:14 | 0:04 | 0/0/0 | 2/0/0 | 0/0/0 | 3,785/157 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahlbom_1994 | irrelevant | 0 | 0 | The study focuses on neurotoxicology and receptor binding, containing no pharmacokinetic parameters or quantitative disposition data for bioallethrin. |
| PGx | Ahlbom_1994 | not_relevant | 0 | 0 | The study investigates the toxicological effects of bioallethrin on receptor binding and behavior, not the effect of genetic variants on bioallethrin's PK/PD parameters. |
| popPK | Cao_2011 | irrelevant | 0 | 0 | The paper describes an in-vitro mechanistic study of calcium influx in neurons, not a pharmacokinetic study, and reports no disposition parameters for bioallethrin. |
| PGx | Cao_2011 | not_relevant | 0 | 0 | The paper investigates the mechanistic effects of pyrethroids on neuronal calcium influx, not the impact of genetic variants on pharmacokinetics or pharmacodynamics. |
| popPK | García_2017 | irrelevant | 0 | 0 | This is an analytical chemistry/ecotoxicity study (CE separation method, EC50 in algae/plants) with no pharmacokinetic disposition parameters for bioallethrin. |
| popPK | Norris_2024 | irrelevant | 0 | 0 | The study focuses on the repellency and toxicity of benzaldehydes in mosquitoes, using bioallethrin only as a toxicant comparator with no pharmacokinetic data. |
| PGx | Norris_2024 | not_relevant | 0 | 0 | The paper studies the toxicity and repellency of benzaldehyde analogues in mosquitoes, not the pharmacokinetics or pharmacodynamics of bioallethrin in relation to a gene variant or genotype. |
| popPK | Wolansky_2006 | irrelevant | 0 | 0 | The study focuses on toxicology (dose-response for motor function) rather than pharmacokinetics, and reports no PK parameters like clearance or half-life. |
| PGx | Wolansky_2006 | not_relevant | 0 | 0 | The paper reports dose-response relationships and relative potencies of pyrethroids in rats but does not investigate pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Wolansky_2008 | irrelevant | 0 | 0 | This is a neurobehavioral toxicology review with no PK parameters for bioallethrin; no numeric disposition values appear. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbioallethrin%5D&body=Drug%3A%20bioallethrin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bioallethrin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
