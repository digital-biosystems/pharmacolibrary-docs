<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01E&quot;,&quot;href&quot;:&quot;atc/S01E.md&quot;},{&quot;label&quot;:&quot;aceclidine&quot;}]"></div>

# aceclidine

- **generic name:** aceclidine
- **ATC codes:** `S01EB08`
- **DrugBank:** [DB13262](https://go.drugbank.com/drugs/DB13262) · **PubChem:** not captured
- **molar mass:** 169.224 g/mol (C9H15NO2) — DrugBank
- **groups:** approved

## About

Aceclidine is a parasympathomimetic miotic used to treat glaucoma. It is an approved ophthalmic medicine, used as eye drops for glaucoma, though not widely available globally.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2362603](https://www.wikidata.org/wiki/Q2362603) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:45 | 0:32 | 0/0/0 | 1/1/0 | 0/0/0 | 15,521/977 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Ishikawa_1998_tension](drugs/drug_aceclidine/pd_Ishikawa_1998_tension.md) | tension biomarker turnover ← aceclidine | — | Ishikawa H et al., Selectivity of muscarinic agonists incl…, Journal of ocular pharmacol… (1998) | [10.1089/jop.1998.14.363](https://doi.org/10.1089/jop.1998.14.363) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Patil_2002_vascular_tone_induced_by_phenylephrine](drugs/drug_aceclidine/pd_Patil_2002_vascular_tone_induced_by_phenylephrine.md) | vascular tone induced by phenylephrine ← aceclidine · direct Emax (saturable) effect | — | Patil PN et al., Mechanism of vascular relaxation by cho…, Journal of ocular pharmacol… (2002) | [10.1089/108076802317233180](https://doi.org/10.1089/108076802317233180) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ishikawa_1998.pdf` | Ishikawa H et al., Selectivity of muscarinic agonists incl…, Journal of ocular pharmacol… (1998) | pd | 4 | [10.1089/jop.1998.14.363](https://doi.org/10.1089/jop.1998.14.363) | [9715440](https://www.ncbi.nlm.nih.gov/pubmed/9715440) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T18:45:22.477422+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Drance_1972 | irrelevant | 0 | 0 | no_text gate: only 57 chars of text extracted (&lt; 400) |
| popPK | Ishikawa_1998 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study assessing receptor selectivity and agonist potency (EC50, pKB) on isolated human tissues, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.). |
| popPK | Matsumoto_1994 | irrelevant | 0 | 0 | The paper reports in-vitro pharmacological potency (EC50) for aceclidine in cultured cells, not pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Patil_2002 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of vascular relaxation and does not report pharmacokinetic parameters for aceclidine. |
| popPK | Pfaffendorf_1993 | irrelevant | 0 | 0 | The paper describes in vitro pharmacology (muscarinic receptor agonism) of aceclidine on rat portal vein, not its pharmacokinetics. |
| popPK | Poyer_1994 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study measuring contractile force in monkey ciliary muscle, not a pharmacokinetic study of aceclidine disposition. |
| popPK | Smith_1978 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects (pupil diameter and light reflex) of topically applied aceclidine, not on its pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
