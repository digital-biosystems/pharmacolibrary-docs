<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;tolazamide&quot;}]"></div>

# tolazamide

- **generic name:** tolazamide
- **ATC codes:** `A10BB05`
- **DrugBank:** [DB00839](https://go.drugbank.com/drugs/DB00839) · **PubChem:** [CID 5503](https://pubchem.ncbi.nlm.nih.gov/compound/5503)
- **molar mass:** 311.4 g/mol (C14H21N3O3S) — DrugBank
- **groups:** approved

## About

Tolazamide is a sulfonylurea blood-glucose-lowering drug used to treat diabetes, including maturity-onset diabetes of the young type 2. It is an approved anti-diabetic medication, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7814101](https://www.wikidata.org/wiki/Q7814101) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tolazamide | parent | 311.4 | C14H21N3O3S | DrugBank | [5503](https://pubchem.ncbi.nlm.nih.gov/compound/5503) | Welling_1982 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Welling_1982_reference](drugs/drug_tolazamide/Tolazamide_Welling1982_reference.md) | — | 1-compartment (no model) | 3 | Welling PG et al., Bioavailability of tolazamide from tabl…, Journal of pharmaceutical s… (1982) | [10.1002/jps.2600711119](https://doi.org/10.1002/jps.2600711119) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 05:00 | 2:05 | 0/1/0 | 0/0/0 | 0/0/0 | 20,020/4,785 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abidi_1982_2.pdf` | Abidi SE et al., Pharmacokinetic interactions of tolazam…, Journal of pharmaceutical s… (1982) | popPK | 9 | [10.1002/jps.2600710107](https://doi.org/10.1002/jps.2600710107) | [7057374](https://pubmed.ncbi.nlm.nih.gov/7057374) | The study reports a two-compartment PK model for tolazamide in dogs, but the specific numeric parameter values (alpha, beta, Vd) are not present in the provided evidence. |
| `Welling_1982.pdf` | Welling PG et al., Bioavailability of tolazamide from tabl…, Journal of pharmaceutical s… (1982) | popPK | 8 | [10.1002/jps.2600711119](https://doi.org/10.1002/jps.2600711119) | [7175719](https://pubmed.ncbi.nlm.nih.gov/7175719) | The study reports quantitative PK parameters (half-lives, absorption rate) for tolazamide in humans, though specific clearance and volume values are not explicitly listed in the text. |

<sub>queue written 2026-10-05T04:59:02.491525+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abidi_1982_2 | relevant | 9 | 0 | The study reports a two-compartment PK model for tolazamide in dogs, but the specific numeric parameter values (alpha, beta, Vd) are not present in the provided evidence. |
| PD | Abidi_1982_2 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (alpha, beta, Vd) and their changes with dosage or co-administration, with no pharmacodynamic or exposure-response analysis. |
| PD | Kabadi_1985 | not_relevant | 1 | 0 | The paper reports clinical efficacy (insulin dose reduction, HbA1 improvement) but provides no concentration-effect data, dose-response curve, or numeric PD parameters. |
| PD | Melchior_1996 | not_relevant | 0 | 0 | The paper is a clinical review of metformin and does not report any pharmacodynamic or exposure-response data for tolazamide. |
| PD | Ozawa_2003 | not_relevant | 0 | 0 | The paper is a historical review of the development and epidemiology of antidiabetic drugs in Japan and contains no pharmacokinetic or pharmacodynamic data, models, or numeric parameters for tolazamide. |
| popPK | Prendergast_1984 | irrelevant | 0 | 0 | The paper is a review of glyburide and glipizide, and tolazamide is only mentioned as a comparator for efficacy, with no pharmacokinetic parameters reported for it. |
| PD | Prendergast_1984 | not_relevant | 1 | 0 | The paper is a general review of glyburide and glipizide that only qualitatively mentions tolazamide as a comparator for efficacy, without providing any specific pharmacodynamic data, exposure-response curves, or numeric PD parameters for tolazamide. |
| PD | RENNIE_1963 | not_relevant | 2 | 1 | The paper reports a clinical comparison of stability and mean effects (blood sugar, glycosuria) between two drugs but does not provide concentration-effect data, dose-response curves, or numeric PD parameters like Emax or EC50. |
| PD | Severin_1987 | not_relevant | 0 | 0 | The paper describes an analytical method for detecting a nitrosamine impurity in tolazamide and contains no pharmacodynamic or exposure-response data. |
| PD | Tsuchiya_1984 | not_relevant | 0 | 0 | The paper reports in vitro protein binding capacity changes due to albumin glucosylation, not a pharmacodynamic exposure-response or dose-response relationship for drug efficacy. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-05 04:59 UTC</sub>
