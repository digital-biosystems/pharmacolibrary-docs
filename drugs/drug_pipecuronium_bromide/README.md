<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;pipecuronium bromide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PipecuroniumBromide_Yajima1990_reference&quot;,&quot;label&quot;:&quot;Yajima_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pipecuronium_bromide/PipecuroniumBromide_Yajima1990_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# pipecuronium bromide

- **generic name:** pipecuronium bromide
- **ATC codes:** `M03AC06`
- **DrugBank:** [DB01338](https://go.drugbank.com/drugs/DB01338) · **PubChem:** [CID 50192](https://pubchem.ncbi.nlm.nih.gov/compound/50192)
- **molar mass:** 602.8912 g/mol (C35H62N4O4) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Pipecuronium bromide is a non-depolarising neuromuscular blocking agent, a muscle relaxant used to relax muscles during surgery. It is no longer in use, having been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20817188](https://www.wikidata.org/wiki/Q20817188) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pipecuronium_bromide (pipecuronium) | metabolite | 602.891 | C35H62N4O4 | DrugBank | [50192](https://pubchem.ncbi.nlm.nih.gov/compound/50192) | Caldwell_1988, Caldwell_1989, Tassonyi_1981, Yajima_1990 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:36 | 0:40 | 1/2/1 | 0/0/0 | 0/0/0 | 48,215/4,272 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed</span> | [Yajima_1990_reference](drugs/drug_pipecuronium_bromide/PipecuroniumBromide_Yajima1990_reference.md) | ▶ model + simulator | 1-compartment, IV | 5 | Yajima C et al., [Comparative pharmacokinetics of pipecu…, Masui. The Japanese journal… (1990) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Tassonyi_1981_reference](drugs/drug_pipecuronium_bromide/PipecuroniumBromide_Tassonyi1981_reference.md) | — | 1-compartment (no model) | 4 | Tassonyi E et al., Pharmacokinetics of pipecurium bromide,…, Arzneimittel-Forschung (1981) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Caldwell_1988_reference](drugs/drug_pipecuronium_bromide/PipecuroniumBromide_Caldwell1988_reference.md) | — | parent + metabolite (no model) | 2 | Caldwell JE et al., Pipecuronium and pancuronium: compariso…, British journal of anaesthe… (1988) | [10.1093/bja/61.6.693](https://doi.org/10.1093/bja/61.6.693) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Caldwell_1989_reference](drugs/drug_pipecuronium_bromide/PipecuroniumBromide_Caldwell1989_reference.md) | — | 1-compartment (no model) | 3 | Caldwell JE et al., The influence of renal failure on the p…, Anesthesiology (1989) | [10.1097/00000542-198901000-00004](https://doi.org/10.1097/00000542-198901000-00004) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pipecuronium_bromide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM2 (target), CHRM3 (target), CHRNA2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 4  ·  extracted 1  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Caldwell_1988.pdf` | Caldwell JE et al., Pipecuronium and pancuronium: compariso…, British journal of anaesthe… (1988) | popPK | 10 | [10.1093/bja/61.6.693](https://doi.org/10.1093/bja/61.6.693) | [2849968](https://pubmed.ncbi.nlm.nih.gov/2849968) | The abstract explicitly reports quantitative pharmacokinetic parameters for pipecuronium, including steady-state volume of distribution (Vss) and plasma clearance (Cl), with numerical values and standard deviations. |
| `Caldwell_1989.pdf` | Caldwell JE et al., The influence of renal failure on the p…, Anesthesiology (1989) | popPK | 10 | [10.1097/00000542-198901000-00004](https://doi.org/10.1097/00000542-198901000-00004) | [2536254](https://pubmed.ncbi.nlm.nih.gov/2536254) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for pipecuronium bromide in human patients with and without renal failure, with values explicitly stated in the abstract. |
| `DHonneur_1993.pdf` | D'Honneur G et al., Pharmacokinetics and pharmacodynamics o…, Anesthesia and analgesia (1993) | popPK | 10 | not captured | [8250313](https://pubmed.ncbi.nlm.nih.gov/8250313) | The study reports specific quantitative pharmacokinetic parameters (clearance, half-life, volume of distribution) for pipecuronium in human subjects. |
| `Tassonyi_1981.pdf` | Tassonyi E et al., Pharmacokinetics of pipecurium bromide,…, Arzneimittel-Forschung (1981) | popPK | 10 | not captured | [6274362](https://pubmed.ncbi.nlm.nih.gov/6274362) | The study reports quantitative pharmacokinetic parameters (Cl, Vbeta, half-lives) for pipecuronium bromide in humans, with all values explicitly provided in the text. |
| `Tassonyi_1995.pdf` | Tassonyi E et al., Pharmacokinetics of pipecuronium in inf…, European journal of drug me… (1995) | popPK | 10 | [10.1007/BF03189671](https://doi.org/10.1007/BF03189671) | [8751042](https://pubmed.ncbi.nlm.nih.gov/8751042) | The study reports specific quantitative pharmacokinetic parameters (half-life, clearance) for pipecuronium in humans using a compartmental model. |
| `Yajima_1990.pdf` | Yajima C et al., [Comparative pharmacokinetics of pipecu…, Masui. The Japanese journal… (1990) | popPK | 10 | not captured | [1976829](https://pubmed.ncbi.nlm.nih.gov/1976829) | The abstract explicitly reports quantitative pharmacokinetic parameters (clearance, volumes, half-lives) for pipecuronium bromide in humans. |
| `Vereczkey_1992.pdf` | Vereczkey L, [Pharmacokinetics and metabolism of pip…, Acta pharmaceutica Hungarica (1992) | popPK | 5 | not captured | [1323914](https://pubmed.ncbi.nlm.nih.gov/1323914) | The text confirms a two-compartment model for pipecuronium but only reports qualitative elimination half-life ranges (40 min, 44-137 min) without specific numeric values for clearance, volume, or intercompartmental clearance in the provided evidence. |

<sub>queue written 2026-10-07T02:35:43.318869+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Appadu_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding affinity, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Vereczkey_1992 | relevant | 5 | 2 | The text confirms a two-compartment model for pipecuronium but only reports qualitative elimination half-life ranges (40 min, 44-137 min) without specific numeric values for clearance, volume, or intercompartmental clearance in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:35 UTC</sub>
