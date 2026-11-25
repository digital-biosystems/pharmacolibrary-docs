<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;epinastine&quot;}]"></div>

# epinastine

- **generic name:** epinastine
- **ATC codes:** `R06AX24`, `S01GX10`
- **DrugBank:** [DB00751](https://go.drugbank.com/drugs/DB00751) · **PubChem:** [CID 3241](https://pubchem.ncbi.nlm.nih.gov/compound/3241)
- **molar mass:** 249.3104 g/mol (C16H15N3) — DrugBank
- **groups:** approved

## About

It is given as eye drops for ocular symptoms and can also be taken orally as tablets or liquids. It is marketed in the United States and approved for use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q632405](https://www.wikidata.org/wiki/Q632405), [Wikipedia](https://en.wikipedia.org/wiki/Epinastine?oldid=1329183374) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| epinastine | parent | 249.31 | C16H15N3 | DrugBank | [3241](https://pubchem.ncbi.nlm.nih.gov/compound/3241) | Sarashina_2005 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Jang_2025_reference](drugs/drug_epinastine/Epinastine_Jang2025_reference.md) | — | 1-compartment (no model) | 0 | Jang JH et al., Population modeling of pharmacokinetic…, Naunyn-Schmiedeberg's archi… (2025) | [10.1007/s00210-025-04299-1](https://doi.org/10.1007/s00210-025-04299-1) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Sarashina_2005_reference](drugs/drug_epinastine/Epinastine_Sarashina2005_reference.md) | — | 1-compartment (no model) | 0 | Sarashina A et al., Population pharmacokinetics of epinasti…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.2250](https://doi.org/10.1111/j.1365-2125.2005.2250) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 20:57 | 0:04 | 0/2/0 | 0/0/0 | 0/0/0 | 3,850/179 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ohtani_1997 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic ECG effects and plasma concentration time-courses for comparison, not the derivation of quantitative disposition parameters (CL, V, ka) or compartmental models for epinastine. |
| PGx | Ohtani_1997 | not_relevant | 0 | 0 | The study is a comparative pharmacokinetic-pharmacodynamic analysis in rats and does not report any gene variants, genotypes, or phenotypes that influence the drug's PK or PD parameters. |
| PGx | Sarashina_2005 | not_relevant | 0 | 0 | The study is a population pharmacokinetic analysis for epinastine that investigates non-genetic covariates such as body weight, age, food status, and formulation, with no mention of gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Wu_2017 | irrelevant | 0 | 0 | The paper is a study on an octopamine receptor in the brown planthopper (Nilaparvata lugens) where epinastine is used solely as a pharmacological antagonist to characterize the receptor, with no PK data reported. |
| PGx | Wu_2017 | not_relevant | 0 | 0 | The paper studies an octopamine receptor in insects and does not report any pharmacogenomic effects on human PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bepinastine%5D&body=Drug%3A%20epinastine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_epinastine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 20:55 UTC</sub>
