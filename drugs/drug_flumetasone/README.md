<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D07A&quot;,&quot;href&quot;:&quot;atc/D07A.md&quot;},{&quot;label&quot;:&quot;flumetasone&quot;}]"></div>

# flumetasone

- **generic name:** flumetasone
- **ATC codes:** `D07AB03`, `D07BB01`, `D07CB05`, `D07XB01`, `S02CA02`
- **DrugBank:** [DB00663](https://go.drugbank.com/drugs/DB00663) · **PubChem:** not captured
- **groups:** approved, vet_approved

## About

Flumetasone is a moderately potent corticosteroid used to treat inflammatory skin conditions, applied topically alone or in combinations with antiseptics or antibiotics, and also in ear preparations with antiinfectives. It is an approved medicine and also approved for veterinary use, though it does not appear to have a central European Union authorisation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4383636](https://www.wikidata.org/wiki/Q4383636) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:11 | 0:54 | 0/0/0 | 0/1/0 | 0/0/0 | 17,150/1,398 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Knych_2019_cortisol](drugs/drug_flumetasone/pd_Knych_2019_cortisol.md) | cortisol ← flumetasone · indirect response — drug inhibits the production of cortisol | — | Knych HK et al., Pharmacokinetics of intravenous flumeta…, Equine veterinary journal (2019) | [10.1111/evj.13002](https://doi.org/10.1111/evj.13002) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=flumetasone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ESRRA (modulator), ESRRB (modulator), ESRRG (modulator), NR3C1 (target), SERPINA6 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Knych_2019.pdf` | Knych HK et al., Pharmacokinetics of intravenous flumeta…, Equine veterinary journal (2019) | popPK | 10 | [10.1111/evj.13002](https://doi.org/10.1111/evj.13002) | [30080272](https://pubmed.ncbi.nlm.nih.gov/30080272) | The abstract explicitly provides quantitative pharmacokinetic parameters (Vss, CL, t1/2) for flumetasone in horses. |
| `Panaretto_1978.pdf` | Panaretto BA et al., The administration of flumethasone, by…, Australian journal of biolo… (1978) | popPK | 6 | [10.1071/bi9780601](https://doi.org/10.1071/bi9780601) | [754682](https://pubmed.ncbi.nlm.nih.gov/754682) | The study reports quantitative metabolic clearance rates (200-700 ml/min) for flumethasone in sheep, although it does not provide a full compartmental model or volume of distribution. |

<sub>queue written 2026-10-07T21:11:14.561952+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lax_2022 | irrelevant | 0 | 0 | This is a clinical trial review on eczema treatment strategies, not a pharmacokinetic study of flumetasone. |
| popPK | Möstl_1985 | irrelevant | 0 | 0 | The study measures endogenous hormone concentrations (androgens/oestrogens) as a biological response to flumetasone, not the pharmacokinetic parameters (CL, V, t1/2) of flumetasone itself. |
| popPK | Zhang_2011 | irrelevant | 0 | 0 | The study focuses on dexamethasone, and flumetasone is only mentioned as a potential internal standard or likely a typo for flumethasone, with no PK parameters reported for flumetasone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
