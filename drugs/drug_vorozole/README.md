<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;vorozole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vorozole_Piotrovsky1998_reference&quot;,&quot;label&quot;:&quot;Piotrovsky_1998_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vorozole/Vorozole_Piotrovsky1998_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# vorozole

- **generic name:** vorozole
- **ATC codes:** `L02BG05`
- **DrugBank:** [DB13767](https://go.drugbank.com/drugs/DB13767) · **PubChem:** not captured
- **molar mass:** 324.77 g/mol (C16H13ClN6) — DrugBank
- **groups:** experimental

## About

Vorozole is an aromatase inhibitor studied as an anticancer (antineoplastic) agent. It remains experimental and does not appear to be an approved medicine on the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7941876](https://www.wikidata.org/wiki/Q7941876) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vorozole | parent | 324.77 | C16H13ClN6 | DrugBank | — | Piotrovsky_1998 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:28 | 0:07 | 1/0/0 | 0/0/0 | 0/0/0 | 11,515/1,335 | einfracz / qwen3.8-27b | 1 | 0/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Piotrovsky_1998_reference](drugs/drug_vorozole/Vorozole_Piotrovsky1998_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Piotrovsky VK et al., Effects of demographic variables on vor…, Cancer chemotherapy and pha… (1998) | [10.1007/s002800050808](https://doi.org/10.1007/s002800050808) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Piotrovsky_1998.pdf` | Piotrovsky VK et al., Effects of demographic variables on vor…, Cancer chemotherapy and pha… (1998) | popPK | 10 | [10.1007/s002800050808](https://doi.org/10.1007/s002800050808) | [9685057](https://pubmed.ncbi.nlm.nih.gov/9685057) | The paper reports a population pharmacokinetic model for vorozole in humans with specific numeric values for CL, Vc, Vp, Q, and ka provided in the abstract/results. |
| `Pareto_2013.pdf` | Pareto D et al., In vivo imaging of brain aromatase in f…, Molecular imaging (2013) | popPK | 8 | [10.2310/7290.2013.00068](https://doi.org/10.2310/7290.2013.00068) | [24447618](https://pubmed.ncbi.nlm.nih.gov/24447618) | The study reports quantitative PK parameters (V_T, K1) for [11C]vorozole in baboons, but specific numeric values are not present in the provided evidence text. |

<sub>queue written 2026-10-06T22:28:09.458108+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Pareto_2013 | relevant | 8 | 2 | The study reports quantitative PK parameters (V_T, K1) for [11C]vorozole in baboons, but specific numeric values are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:28 UTC</sub>
