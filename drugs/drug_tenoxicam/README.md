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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:25 | 0:12 | 0/1/0 | 0/0/0 | 0/0/0 | 14,253/1,102 | einfracz / qwen3.8-27b | 14 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Heintz_1984_reference](drugs/drug_tenoxicam/Tenoxicam_Heintz1984_reference.md) | — | 1-compartment (no model) | 1 | Heintz RC et al., Pharmacokinetics of tenoxicam in health…, European journal of rheumat… (1984) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tenoxicam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C9` substrate | DrugBank actor |
| excretion | kidney | `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

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

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:25 UTC</sub>
