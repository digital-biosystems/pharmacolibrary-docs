<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01A&quot;,&quot;href&quot;:&quot;atc/R01A.md&quot;},{&quot;label&quot;:&quot;nedocromil&quot;}]"></div>

# nedocromil

- **generic name:** nedocromil
- **ATC codes:** `R01AC07`, `R03BC03`, `S01GX04`
- **DrugBank:** [DB00716](https://go.drugbank.com/drugs/DB00716) · **PubChem:** [CID 50294](https://pubchem.ncbi.nlm.nih.gov/compound/50294)
- **molar mass:** 371.3408 g/mol (C19H17NO7) — DrugBank
- **groups:** approved

## About

Nedocromil is a mast cell stabilizer used to treat asthma and allergic conjunctivitis. It is given by inhalation for breathing problems, as eye drops for eye allergies, and via nasal spray, though oral use is listed as a route in the data. It is an approved medication, but production of inhaled nedocromil in the US has ceased.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q416706](https://www.wikidata.org/wiki/Q416706), [Wikipedia](https://en.wikipedia.org/wiki/Nedocromil?oldid=1332194128) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nedocromil | parent | 371.341 | C19H17NO7 | DrugBank | [50294](https://pubchem.ncbi.nlm.nih.gov/compound/50294) | Neale_1987 |
| nedocromil sodium | metabolite | 415.309 | C19H15NNa2O7 | PubChem | [50295](https://pubchem.ncbi.nlm.nih.gov/compound/50295) | Neale_1987 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Neale_1987_reference](drugs/drug_nedocromil/Nedocromil_Neale1987_reference.md) | — | 1-compartment (no model) | 2 | Neale MG et al., The pharmacokinetics of nedocromil sodi…, British journal of clinical… (1987) | [10.1111/j.1365-2125.1987.tb03203.x](https://doi.org/10.1111/j.1365-2125.1987.tb03203.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:25 | 0:03 | 1/0/0 | 0/0/0 | 0/0/0 | 3,993/164 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lindén_1999.pdf` | Lindén A et al., Effect of nedocromil sodium on non-adre…, Regulatory peptides (1999) | pd | 4 | [10.1016/s0167-0115(99)00018-x](https://doi.org/10.1016/s0167-0115(99)00018-x) | [10395407](https://www.ncbi.nlm.nih.gov/pubmed/10395407) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-24 01:25 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lindén_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neural responses in guinea pig bronchi and reports no pharmacokinetic parameters. |
| PGx | Lindén_1999 | not_relevant | 0 | 0 | The paper describes the mechanism of action of nedocromil in guinea pig bronchi and does not investigate genetic variants or their effect on PK/PD parameters. |
| PGx | Neale_1987 | not_relevant | 0 | 0 | The paper reports general pharmacokinetic parameters of nedocromil but does not investigate or report any pharmacogenomic effects. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The paper is a pharmacogenomic study analyzing genetic variants and placebo response in asthma, reporting no pharmacokinetic parameters for nedocromil. |
| popPK | Wu_2009 | irrelevant | 0 | 0 | The paper is a pharmacogenetic/clinical trial analysis assessing the repeatability of clinical asthma outcomes (FEV1, PC20), not a pharmacokinetic study reporting quantitative PK parameters for nedocromil. |
| PGx | Wu_2009 | not_relevant | 0 | 0 | The paper reports on the repeatability (ICC) of clinical outcomes in asthma patients, not the effect of a specific gene variant on a PK or PD parameter. |
| popPK | Wu_2014 | irrelevant | 0 | 0 | The study analyzes longitudinal FEV1 lung function and genetics in asthma patients, with no pharmacokinetic data or parameters for nedocromil. |
| PGx | Wu_2014 | not_relevant | 1 | 0 | The paper focuses on genetic predictors of lung function (FEV1) over time and only mentions nedocromil as a historical comparator group, without reporting any pharmacokinetic or pharmacodynamic effects of gene variants on the drug itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnedocromil%5D&body=Drug%3A%20nedocromil%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nedocromil/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 01:24 UTC</sub>
