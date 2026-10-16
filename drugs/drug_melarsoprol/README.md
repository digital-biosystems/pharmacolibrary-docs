<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;melarsoprol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Melarsoprol_Burri1994_reference&quot;,&quot;label&quot;:&quot;Burri_1994_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_melarsoprol/Melarsoprol_Burri1994_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# melarsoprol

- **generic name:** melarsoprol
- **ATC codes:** `P01CD01`
- **DrugBank:** [DB12864](https://go.drugbank.com/drugs/DB12864) · **PubChem:** [CID 10311](https://pubchem.ncbi.nlm.nih.gov/compound/10311)
- **molar mass:** 398.33 g/mol (C12H15AsN6OS2) — DrugBank
- **groups:** investigational

## About

Melarsoprol is an arsenic-based antiparasitic drug used to treat sleeping sickness (African trypanosomiasis). It has been listed among WHO essential medicines as a trypanocidal agent, but DrugBank currently classifies it as investigational, so its availability today appears limited.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419753](https://www.wikidata.org/wiki/Q419753) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| melarsoprol | parent | 398.33 | C12H15AsN6OS2 | DrugBank | [10311](https://pubchem.ncbi.nlm.nih.gov/compound/10311) | Burri_1994 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:21 | 0:19 | 1/0/0 | 0/0/0 | 0/0/0 | 10,018/561 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span> | [Burri_1994_reference](drugs/drug_melarsoprol/Melarsoprol_Burri1994_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Burri C et al., Pharmacokinetics of melarsoprol in unin…, Acta tropica (1994) | [10.1016/0001-706x(94)90120-1](https://doi.org/10.1016/0001-706x(94)90120-1) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Burri_1994.pdf` | Burri C et al., Pharmacokinetics of melarsoprol in unin…, Acta tropica (1994) | popPK | 10 | [10.1016/0001-706x(94)90120-1](https://doi.org/10.1016/0001-706x(94)90120-1) | [7863853](https://pubmed.ncbi.nlm.nih.gov/7863853) | The study reports quantitative PK parameters (clearance, volume of distribution, MRT) for melarsoprol in vervet monkeys, with values explicitly stated in the text. |

<sub>queue written 2026-10-14T19:20:56.716427+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bapiro_2002 | not_relevant | 0 | 0 | The study investigates CYP1A induction by antiparasitic drugs in cell lines and reports that melarsoprol has no effect, rather than reporting how a genetic variant affects melarsoprol pharmacokinetics. |
| popPK | Bouteille_1995 | irrelevant | 0 | 0 | The study focuses on the antiparasitic efficacy of the drug megazol in mice; melarsoprol is mentioned only as background context with no pharmacokinetic data reported. |
| popPK | Ullman_1989 | irrelevant | 0 | 0 | The paper describes an in-vitro study on Leishmania cell lines and only mentions melarsoprol as a comparator agent for cytotoxicity, reporting no pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:20 UTC</sub>
