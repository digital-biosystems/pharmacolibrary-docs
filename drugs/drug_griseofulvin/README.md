<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;griseofulvin&quot;}]"></div>

# griseofulvin

- **generic name:** griseofulvin
- **ATC codes:** `D01AA08`, `D01BA01`
- **DrugBank:** [DB00400](https://go.drugbank.com/drugs/DB00400) · **PubChem:** [CID 441140](https://pubchem.ncbi.nlm.nih.gov/compound/441140)
- **molar mass:** 352.766 g/mol (C17H17ClO6) — DrugBank
- **groups:** approved, vet_approved

## About

Griseofulvin is an antifungal medication used to treat fungal skin infections such as dermatophytosis, ringworm, and athlete's foot. It is an approved medicine, including for veterinary use, and is listed among essential medicines, available both topically and by mouth for skin fungal infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416096](https://www.wikidata.org/wiki/Q416096) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Schäfer-Korting_1987_reference](drugs/drug_griseofulvin/Griseofulvin_SchferKorting1987_reference.md) | — | 1-compartment (no model) | 0 | Schäfer-Korting M, Pharmacokinetics of griseofulvin in blo…, Drug metabolism and disposi… (1987) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=griseofulvin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP1A2` inducer, `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: KRT12 (other/unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:21 | 1:29 | 0/1/0 | 0/0/0 | 0/0/0 | 22,424/2,319 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bates_1975.pdf` | Bates TR et al., Apparent absorption kinetics of microni…, Journal of pharmaceutical s… (1975) | popPK | 9 | [10.1002/jps.2600640910](https://doi.org/10.1002/jps.2600640910) | [1185560](https://pubmed.ncbi.nlm.nih.gov/1185560) | The study reports quantitative PK parameters (one-compartment model, zero-order absorption) for griseofulvin in rats, but no specific numeric values (CL, V, ka, etc.) are present in the provided evidence. |
| `Schäfer-Korting_1987.pdf` | Schäfer-Korting M, Pharmacokinetics of griseofulvin in blo…, Drug metabolism and disposi… (1987) | popPK | 9 |  | [2886314](https://pubmed.ncbi.nlm.nih.gov/2886314) | The study reports quantitative PK parameters (half-lives, Cmax) for griseofulvin in rats, though specific clearance and volume values are not explicitly listed in the text. |

<sub>queue written 2026-10-07 13:20 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bailly_2026 | irrelevant | 0 | 0 | The paper is a review of antifungal mechanisms of action in plants and does not report pharmacokinetic parameters for griseofulvin. |
| popPK | Bates_1975 | relevant | 9 | 0 | The study reports quantitative PK parameters (one-compartment model, zero-order absorption) for griseofulvin in rats, but no specific numeric values (CL, V, ka, etc.) are present in the provided evidence. |
| popPK | Ríos-Santamarina_1998 | irrelevant | 0 | 0 | The paper reports in vitro bronchodilator activity (relaxation percentages) of griseofulvin, not pharmacokinetic parameters. |
| popPK | Sato_1995 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding griseofulvin pharmacokinetics. |
| popPK | Wang_2010 | irrelevant | 0 | 0 | The paper is a natural product isolation and identification study reporting antifungal activity (EC50) of griseofulvin, not a pharmacokinetic study. |
| popPK | Wazir_2014 | irrelevant | 0 | 0 | The study evaluates antibacterial, antifungal, and antioxidant activities of plant extracts, using griseofulvin only as a standard comparator for antifungal screening, with no pharmacokinetic data reported. |
| popPK | Zimmerman_1983 | irrelevant | 2 | 0 | The paper is a methodological study on fitting algorithms using griseofulvin as a test case, but no specific numeric PK parameter values are provided in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgriseofulvin%5D&body=Drug%3A%20griseofulvin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_griseofulvin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 13:20 UTC</sub>
