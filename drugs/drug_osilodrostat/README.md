<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H02C&quot;,&quot;href&quot;:&quot;atc/H02C.md&quot;},{&quot;label&quot;:&quot;osilodrostat&quot;}]"></div>

# osilodrostat

- **generic name:** osilodrostat
- **ATC codes:** `H02CA02`
- **DrugBank:** [DB11837](https://go.drugbank.com/drugs/DB11837) · **PubChem:** [CID 44139752](https://pubchem.ncbi.nlm.nih.gov/compound/44139752)
- **molar mass:** 227.242 g/mol (C13H10FN3) — DrugBank
- **groups:** approved, investigational

## About

Osilodrostat is a nonsteroidal corticosteroid biosynthesis inhibitor that treats adults with Cushing's disease who cannot undergo surgery or who still have the condition after surgery. It is given orally as a tablet, which is its only listed route of administration. It is authorised in the European Union and the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q27088216](https://www.wikidata.org/wiki/Q27088216), [Wikipedia](https://en.wikipedia.org/wiki/Osilodrostat?oldid=1352441253) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Mohamed_2026_SBP](drugs/drug_osilodrostat/pd_Mohamed_2026_SBP.md) | systolic blood pressure ← osilodrostat · direct linear effect | — | Mohamed KA et al., Dose-Response Relationships and Compara…, Journal of clinical medicine (2026) | [10.3390/jcm15124477](https://doi.org/10.3390/jcm15124477) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:31 | 1:39 | 0/0/0 | 1/0/0 | 0/0/0 | 55,561/798 | einfracz / qwen3.8-27b | 8 | 1/1 | 8/0 | 0 |

## Coverage

- **PubMed hits:** 19 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Piazzola_2025.pdf` | Piazzola C et al., A preliminary model to tailor osilodros…, European journal of endocri… (2025) | popPK | 6 | [10.1093/ejendo/lvaf185](https://doi.org/10.1093/ejendo/lvaf185) | [40971972](https://pubmed.ncbi.nlm.nih.gov/40971972) | The study describes a preliminary kinetic-pharmacodynamic model for osilodrostat in humans, but specific numeric parameter values are not present in the provided abstract text. |

<sub>queue written 2026-10-07 09:30 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Armani_2017 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (CYP inhibition) in a healthy population, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of osilodrostat. |
| popPK | Mohamed_2026 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis focusing on blood pressure efficacy and does not report pharmacokinetic parameters (clearance, volume, half-life) for osilodrostat. |
| popPK | Piazzola_2025 | relevant | 6 | 2 | The study describes a preliminary kinetic-pharmacodynamic model for osilodrostat in humans, but specific numeric parameter values are not present in the provided abstract text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bosilodrostat%5D&body=Drug%3A%20osilodrostat%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_osilodrostat/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
