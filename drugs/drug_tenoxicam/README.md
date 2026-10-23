<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;tenoxicam&quot;}]"></div>

# tenoxicam

- **generic name:** tenoxicam
- **ATC codes:** `M01AC02`
- **DrugBank:** [DB00469](https://go.drugbank.com/drugs/DB00469) · **PubChem:** [CID 54677971](https://pubchem.ncbi.nlm.nih.gov/compound/54677971)
- **molar mass:** 337.37 g/mol (C13H11N3O4S2) — DrugBank
- **groups:** approved

## About

Tenoxicam is a non-steroidal anti-inflammatory drug of the oxicam class, used to treat pain and inflammation in musculoskeletal and rheumatic conditions. It is an approved medicine and remains in use, though it is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q45050](https://www.wikidata.org/wiki/Q45050) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tenoxicam | parent | 337.37 | C13H11N3O4S2 | DrugBank | [54677971](https://pubchem.ncbi.nlm.nih.gov/compound/54677971) | Heintz_1984 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Heintz_1984_reference](drugs/drug_tenoxicam/Tenoxicam_Heintz1984_reference.md) | — | 1-compartment (no model) | 1 | Heintz RC et al., Pharmacokinetics of tenoxicam in health…, European journal of rheumat… (1984) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tenoxicam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2C9` substrate | DrugBank actor |
| excretion | kidney | `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:25 | 0:12 | 0/1/0 | 0/0/0 | 0/0/0 | 14,253/1,102 | einfracz / qwen3.8-27b | 14 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Heintz_1984.pdf` | Heintz RC et al., Pharmacokinetics of tenoxicam in health…, European journal of rheumat… (1984) | popPK | 10 | not captured | [6336292](https://pubmed.ncbi.nlm.nih.gov/6336292) | The paper is a primary pharmacokinetic study of tenoxicam in humans that explicitly reports quantitative values for clearance, volume of distribution, half-life, and Cmax in the text. |
| `Troconiz_1995.pdf` | Troconiz IF et al., Tenoxicam pharmacokinetics in rats: a p…, Journal of pharmaceutical s… (1995) | popPK | 10 | [10.1002/jps.2600841216](https://doi.org/10.1002/jps.2600841216) | [8748332](https://pubmed.ncbi.nlm.nih.gov/8748332) | The study presents a population pharmacokinetic model for tenoxicam in rats, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided evidence text. |

<sub>queue written 2026-10-07T01:25:12.684255+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Elkomy_2017_2 | irrelevant | 2 | 0 | The study focuses on in vivo rat/rabbit skin irritation and edema tests and a PK-PD model for skin deposition, lacking standard systemic quantitative PK parameters (CL, V, t1/2) for tenoxicam in the provided evidence. |
| popPK | Troconiz_1995 | relevant | 10 | 1 | The study presents a population pharmacokinetic model for tenoxicam in rats, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided evidence text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 01:25 UTC</sub>
