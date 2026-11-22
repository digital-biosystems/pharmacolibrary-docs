<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;2,3,4-Trimethylpentane&quot;}]"></div>

# 2,3,4-Trimethylpentane

- **generic name:** 2,3,4-Trimethylpentane
- **T3DB:** [T3D3456](http://www.t3db.ca/toxins/T3D3456) · **PubChem:** [CID 11269](https://pubchem.ncbi.nlm.nih.gov/compound/11269)

## About

2,3,4-Trimethylpentane is a hydrocarbon and one of the isomers of octane. Octanes may be found in gasoline.

- **Category:** Industrial/Workplace Toxin, Synthetic Toxin
- **Route of exposure:** oral, inhalation, dermal
- **Sources and uses:** Octanes may be found in gasoline.
- **Mechanism of toxicity:** Petroleum distillates are central nervous system depressants and cause pulmonary damage.
- **Health effects:** Petroleum distillates are aspiration hazards and may cause pulmonary damage, central nervous system depression, and cardiac effects such as cardiac arrhythmias. They may also affect the blood, immune system, liver, and kidney.
- **Treatment:** Treatment is mainly symptomatic and supportive. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3456">T3DB T3D3456</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 565-75-3</small></p>

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
| 2026-11-19 18:08 | 5:20 | 0/0/0 | 0/0/0 | 0/0/0 | 30,892/1,958 | einfracz / qwen3.8-flash-next | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `DelRaso_1990.pdf` | DelRaso NJ et al., Lack of detectable metabolism for solub…, Toxicology letters (1990) | pd | 4 | [10.1016/0378-4274(90)90201-v](https://doi.org/10.1016/0378-4274(90)90201-v) | [2260128](https://www.ncbi.nlm.nih.gov/pubmed/2260128) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-19 18:08 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dahanayake_2021 | irrelevant | 0 | 0 | The paper studies Mn8Fe4-co-polystyrene nanobeads and iso-octane (2,2,4-trimethylpentane) is only used as a chemical reagent (hydrophobe) in synthesis, not as the subject of kinetic study. |
| popPK | DelRaso_1990 | irrelevant | 2 | 2 | The paper reports an EC50 for toxicity and negative findings for metabolism in isolated rat kidney tubules, but lacks quantitative toxicokinetic parameters like rate constants or partition coefficients. |
| popPK | Delraso_1989 | irrelevant | 2 | 0 | The paper reports cytotoxicity (LC50) and qualitative metabolite identification in rat hepatocytes, but lacks quantitative kinetic parameters like rate constants, half-lives, or partition coefficients. |
| popPK | Guirguis_2001 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for celecoxib in rats, with no mention of or data for 2,3,4-trimethylpentane. |
| popPK | Jamali_1988 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for etodolac enantiomers, with no mention of 2,3,4-trimethylpentane. |
| popPK | Liang_1992 | irrelevant | 0 | 0 | The paper reports kinetic parameters for pirprofen in rats and does not mention or study 2,3,4-trimethylpentane. |
| popPK | Mehvar_1988 | irrelevant | 0 | 0 | The paper describes an analytical method for ibuprofen and does not report any toxicokinetic data for 234_trimethylpentane. |
| popPK | Sethi_2019 | irrelevant | 0 | 0 | The paper reports binding parameters for pyrethroids (permethrin, deltamethrin), not 2,3,4-trimethylpentane, which is not mentioned at all. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B234_trimethylpentane%5D&body=Drug%3A%20234_trimethylpentane%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_234_trimethylpentane/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
