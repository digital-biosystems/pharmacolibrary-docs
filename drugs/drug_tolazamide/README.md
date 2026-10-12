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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 05:00 | 2:05 | 0/1/0 | 0/0/0 | 0/0/0 | 20,020/4,785 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2), gpt-oss:120b (not confirmed, agreement 0.778). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Welling_1982_reference](drugs/drug_tolazamide/Tolazamide_Welling1982_reference.md) | — | 1-compartment (no model) | 3 | Welling PG et al., Bioavailability of tolazamide from tabl…, Journal of pharmaceutical s… (1982) | [10.1002/jps.2600711119](https://doi.org/10.1002/jps.2600711119) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tolazamide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C9` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABCC8 (blocker), KCNJ10 (blocker).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

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

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 04:59 UTC</sub>
