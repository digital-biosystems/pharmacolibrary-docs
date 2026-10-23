<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M02A&quot;,&quot;href&quot;:&quot;atc/M02A.md&quot;},{&quot;label&quot;:&quot;bendazac&quot;}]"></div>

# bendazac

- **generic name:** bendazac
- **ATC codes:** `M02AA11`, `S01BC07`
- **DrugBank:** [DB13501](https://go.drugbank.com/drugs/DB13501) · **PubChem:** not captured
- **molar mass:** 282.299 g/mol (C16H14N2O3) — DrugBank
- **groups:** approved, withdrawn

## About

Bendazac is a non-steroidal anti-inflammatory drug that was used topically for joint and muscular pain and as an ophthalmic anti-inflammatory agent. It appears to have been withdrawn from use, as it is listed as withdrawn despite once being approved.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q862414](https://www.wikidata.org/wiki/Q862414) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bendazac | parent | 282.299 | C16H14N2O3 | DrugBank | — | Valeri_1985 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Chen_1997_reference](drugs/drug_bendazac/Bendazac_Chen1997_reference.md) | — | 1-compartment (no model) | 0 | Chen XX et al., Pharmacokinetics of bendazac lysine in…, Zhongguo yao li xue bao = A… (1997) | — |
| <span class="pk-rf" hidden data-species="rabbit" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Valeri_1985_reference](drugs/drug_bendazac/Bendazac_Valeri1985_reference.md) | — | 1-compartment (no model) | 1 | Valeri P et al., Investigations on the ocular pharmacoki…, Experimental and molecular… (1985) | [10.1016/0014-4800(85)90065-6](https://doi.org/10.1016/0014-4800(85)90065-6) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:43 | 4:36 | 0/2/0 | 0/0/0 | 0/0/0 | 14,802/33,338 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_1997.pdf` | Chen XX et al., Pharmacokinetics of bendazac lysine in…, Zhongguo yao li xue bao = A… (1997) | popPK | 10 | not captured | [10072958](https://pubmed.ncbi.nlm.nih.gov/10072958) | The study reports quantitative pharmacokinetic parameters (Cmax, Tmax, T1/2, AUC) for bendazac lysine in a 2-compartment model, with values directly present in the abstract. |
| `Rovei_1987.pdf` | Rovei V et al., Pharmacokinetics of bendazac-lysine and…, European journal of clinica… (1987) | popPK | 10 | [10.1007/BF00637567](https://doi.org/10.1007/BF00637567) | [3691618](https://pubmed.ncbi.nlm.nih.gov/3691618) | The study reports population pharmacokinetic parameters (V/F, CL/F, t1/2) for bendazac, but the specific numeric values are not present in the provided abstract text. |
| `Rovei_1988.pdf` | Rovei V et al., The pharmacokinetics of bendazac-lysine…, European journal of clinica… (1988) | popPK | 10 | [10.1007/BF00561370](https://doi.org/10.1007/BF00561370) | [3197747](https://pubmed.ncbi.nlm.nih.gov/3197747) | The abstract reports qualitative pharmacokinetic parameters for bendazac (clearance, volume, half-life) in humans, but specific numeric values are not provided in the evidence. |
| `Valeri_1985.pdf` | Valeri P et al., Investigations on the ocular pharmacoki…, Experimental and molecular… (1985) | popPK | 9 | [10.1016/0014-4800(85)90065-6](https://doi.org/10.1016/0014-4800(85)90065-6) | [4065307](https://pubmed.ncbi.nlm.nih.gov/4065307) | The study reports quantitative half-lives for bendazac in various ocular compartments and plasma in rabbits, representing specific disposition parameters. |

<sub>queue written 2026-10-07T01:39:09.422714+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Rovei_1987 | relevant | 10 | 2 | The study reports population pharmacokinetic parameters (V/F, CL/F, t1/2) for bendazac, but the specific numeric values are not present in the provided abstract text. |
| popPK | Rovei_1988 | relevant | 10 | 3 | The abstract reports qualitative pharmacokinetic parameters for bendazac (clearance, volume, half-life) in humans, but specific numeric values are not provided in the evidence. |
| popPK | Saso_1999 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on protein denaturation where bendazac serves only as a comparator drug, with no pharmacokinetic parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 01:42 UTC</sub>
