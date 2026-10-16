<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;fleroxacin&quot;}]"></div>

# fleroxacin

- **generic name:** fleroxacin
- **ATC codes:** `J01MA08`
- **DrugBank:** [DB04576](https://go.drugbank.com/drugs/DB04576) · **PubChem:** [CID 3357](https://pubchem.ncbi.nlm.nih.gov/compound/3357)
- **molar mass:** 369.344 g/mol (C17H18F3N3O3) — DrugBank
- **groups:** experimental

## About

Fleroxacin is a fluoroquinolone antibiotic that was developed as an anti-infective agent to treat bacterial infections. It is considered an experimental drug and is not in routine clinical use today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3746573](https://www.wikidata.org/wiki/Q3746573) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fleroxacin | parent | 369.344 | C17H18F3N3O3 | DrugBank | [3357](https://pubchem.ncbi.nlm.nih.gov/compound/3357) | Miller_1992 |
| fleroxacin N-oxide | metabolite | — (mass units only) | — | — | — | — |
| N-demethylfleroxacin | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:54 | 2:36 | 0/4/0 | 0/0/0 | 0/0/0 | 25,153/33,285 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.8), gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Miller_1992_aqueous_humor](drugs/drug_fleroxacin/Fleroxacin_Miller1992_aqueous_humor.md) | — | 1-compartment (no model) | 4 | Miller MH et al., Fleroxacin pharmacokinetics in aqueous…, Antimicrobial agents and ch… (1992) | [10.1128/AAC.36.1.32](https://doi.org/10.1128/AAC.36.1.32) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75), gpt-oss-120b (not confirmed, agreement 0.786). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Miller_1992_serum](drugs/drug_fleroxacin/Fleroxacin_Miller1992_serum.md) | — | 1-compartment (no model) | 7 | Miller MH et al., Fleroxacin pharmacokinetics in aqueous…, Antimicrobial agents and ch… (1992) | [10.1128/AAC.36.1.32](https://doi.org/10.1128/AAC.36.1.32) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.889), gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Miller_1992_vitreous_humor](drugs/drug_fleroxacin/Fleroxacin_Miller1992_vitreous_humor.md) | — | 1-compartment (no model) | 4 | Miller MH et al., Fleroxacin pharmacokinetics in aqueous…, Antimicrobial agents and ch… (1992) | [10.1128/AAC.36.1.32](https://doi.org/10.1128/AAC.36.1.32) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.273), gpt-oss-120b (not confirmed, agreement 0.182). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Uehlinger_1996_reference](drugs/drug_fleroxacin/Fleroxacin_Uehlinger1996_reference.md) | — | general linear (no model) | 0 | Uehlinger DE et al., Pharmacokinetics of fleroxacin after mu…, Antimicrobial agents and ch… (1996) | [10.1128/AAC.40.8.1903](https://doi.org/10.1128/AAC.40.8.1903) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fleroxacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: TOP2A (inhibitor), TOP2B (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jiao_2018.pdf` | Jiao Y et al., First population pharmacokinetic analys…, European journal of pharmac… (2018) | popPK | 10 | [10.1016/j.ejps.2018.07.054](https://doi.org/10.1016/j.ejps.2018.07.054) | [30076955](https://pubmed.ncbi.nlm.nih.gov/30076955) | The study reports quantitative population PK parameters (clearances, volume of distribution) for fleroxacin and its metabolites in humans, with specific numeric values provided in the text. |
| `Uehlinger_1996.pdf` | Uehlinger DE et al., Pharmacokinetics of fleroxacin after mu…, Antimicrobial agents and ch… (1996) | popPK | 10 | [10.1128/AAC.40.8.1903](https://doi.org/10.1128/AAC.40.8.1903) | [8843301](https://pubmed.ncbi.nlm.nih.gov/8843301) | The abstract provides explicit quantitative population PK parameters (metabolic clearance 25 ml/min, Vss 84 L) for fleroxacin in humans. |

<sub>queue written 2026-10-14T22:52:27.762798+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Delon_1999 | irrelevant | 2 | 0 | The study focuses on the convulsant activity and CSF/plasma ratios (pharmacodynamic/toxicokinetic context) rather than standard quantitative disposition parameters (CL, V, half-life) for fleroxacin. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay examining GABA antagonism, not a pharmacokinetic study, and fleroxacin is only a minor comparative agent rather than the subject of PK analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 22:54 UTC</sub>
