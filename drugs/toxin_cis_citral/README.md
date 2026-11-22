<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;cis-Citral&quot;}]"></div>

# cis-Citral

- **generic name:** cis-Citral
- **T3DB:** [T3D4866](http://www.t3db.ca/toxins/T3D4866) · **PubChem:** [CID 643779](https://pubchem.ncbi.nlm.nih.gov/compound/643779)

## About

Citral is found in carrot. Citral, or 3,7-dimethyl-2,6-octadienal or lemonal, is either of, or a mixture of, a pair of terpenoids with the molecular formula C10H16O. The two compounds are double bond isomers. …

- **Category:** Household Toxin, Food Toxin, Natural Toxin

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4866">T3DB T3D4866</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 5392-40-5 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:29020">ChEBI 29020</a></small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 1.00).">other animal</span> | [Plata-Rueda_2020_LD50](drugs/toxin_cis_citral/pd_Plata_Rueda_2020_LD50.md) | Lethal Dose ← cis_citral · model not identified | — | Plata-Rueda A et al., Acute Toxicity and Sublethal Effects of…, Insects (2020) | [10.3390/insects11060379](https://doi.org/10.3390/insects11060379) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 1.00).">other animal</span> | [Plata-Rueda_2020_LD90](drugs/toxin_cis_citral/pd_Plata_Rueda_2020_LD90.md) | Lethal Dose ← cis_citral · model not identified | — | Plata-Rueda A et al., Acute Toxicity and Sublethal Effects of…, Insects (2020) | [10.3390/insects11060379](https://doi.org/10.3390/insects11060379) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-17 14:19 | 8:44 | 0/0/0 | 2/0/0 | 0/0/0 | 116,062/2,468 | einfracz / qwen3.8-flash-next | 14 | 0/3 | 14/0 | 0 |

## Coverage

- **PubMed hits:** 35 matched, 36 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dascalu_2023 | irrelevant | 0 | 0 | The paper focuses on geranial (citral isomers), linalool, myrcene, etc., but does not specifically analyze cis_citral (neral) nor report any quantitative toxicokinetic parameters (half-life, clearance, partition coefficients) for it. |
| PGx | Hagvall_2008 | not_relevant | 0 | 0 | The paper focuses on the metabolic activation of geraniol into allergens by specific CYP enzymes, but does not investigate gene variants/genotypes, nor does it mention cis-citral or quantify PK/PD parameter changes based on genetics. |
| popPK | Kaur_2026 | irrelevant | 0 | 0 | The paper is a network pharmacology and molecular docking study that lists Citral only as one of many phytochemicals screened, providing no toxicokinetic parameters or numerical values for it. |
| popPK | Mutagwaba_2025 | irrelevant | 0 | 0 | The paper reports larvicidal potency (LC50/LC90) of essential oils against mosquito larvae, not toxicokinetic parameters for cis_citral. |
| popPK | Sabaly_2024 | irrelevant | 0 | 0 | The paper is an in vitro antifungal study measuring essential oil inhibition of fungal growth, with no toxicokinetic parameters for cis-citral in any biological system. |
| popPK | Vera_2014 | irrelevant | 1 | 0 | The paper reports lethal concentrations (LC50) for larvicidal activity in mosquitoes, which are toxicity endpoints, not toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| PGx | Yuba_1995 | not_relevant | 0 | 0 | The text describes plant genetics and monoterpenes biosynthesis in Perilla frutescens, not human pharmacogenomics or drug PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcis_citral%5D&body=Drug%3A%20cis_citral%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cis_citral/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
