<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;camazepam&quot;}]"></div>

# camazepam

- **generic name:** camazepam
- **ATC codes:** `N05BA15`
- **DrugBank:** [DB01489](https://go.drugbank.com/drugs/DB01489) · **PubChem:** [CID 37367](https://pubchem.ncbi.nlm.nih.gov/compound/37367)
- **molar mass:** 371.818 g/mol (C19H18ClN3O3) — DrugBank
- **groups:** experimental, illicit

## About

Camazepam is a benzodiazepine drug with sedative properties, used as an anxiolytic for anxiety. It is not an established marketed medicine today; databases list it only as experimental, and it is controlled as a benzodiazepine derivative.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3651150](https://www.wikidata.org/wiki/Q3651150) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| camazepam | parent | 371.818 | C19H18ClN3O3 | DrugBank | [37367](https://pubchem.ncbi.nlm.nih.gov/compound/37367) | Legheand_1982 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Legheand_1982_reference](drugs/drug_camazepam/Camazepam_Legheand1982_reference.md) | — | 1-compartment (no model) | 3 | Legheand J et al., Pharmacokinetics of intravenous camazep…, Arzneimittel-Forschung (1982) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Morino_1986_percent_anticonvulsant_effect](drugs/drug_camazepam/pd_Morino_1986_percent_anticonvulsant_effect.md) | percent anticonvulsant effect ← camazepam and active metabolites (temazepam, oxazepam, hydroxy CZ) via receptor binding · direct sigmoid Emax (Hill) effect | — | Morino A et al., Receptor-mediated model relating antico…, Journal of pharmacokinetics… (1986) | [10.1007/BF01106709](https://doi.org/10.1007/BF01106709) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 18:54 | 0:22 | 0/1/0 | 0/1/0 | 0/0/0 | 13,633/1,228 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Legheand_1982.pdf` | Legheand J et al., Pharmacokinetics of intravenous camazep…, Arzneimittel-Forschung (1982) | popPK | 10 | not captured | [6127087](https://pubmed.ncbi.nlm.nih.gov/6127087) | Original PK study of IV camazepam in dogs with a three-compartment model; half-life range (6.4–10.5 h) is given but CL/V/Q values are not shown in the evidence. |

<sub>queue written 2026-10-06T18:53:48.495382+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Morino_1985 | irrelevant | 0 | 0 | The evidence contains only a GROBID header with no paper content, so no PK parameters for camazepam are present or assessable. |
| popPK | Morino_1986 | irrelevant | 2 | 1 | This is a receptor-binding/PD modeling study in rats with no quantitative disposition parameters (CL, V, ka, half-life) for camazepam reported in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 18:53 UTC</sub>
