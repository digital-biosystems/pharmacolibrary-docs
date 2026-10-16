<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H03A&quot;,&quot;href&quot;:&quot;atc/H03A.md&quot;},{&quot;label&quot;:&quot;liothyronine sodium&quot;}]"></div>

# liothyronine sodium

- **generic name:** liothyronine sodium
- **ATC codes:** `H03AA02`
- **DrugBank:** [DB00279](https://go.drugbank.com/drugs/DB00279) · **PubChem:** [CID 5920](https://pubchem.ncbi.nlm.nih.gov/compound/5920)
- **molar mass:** 650.9735 g/mol (C15H12I3NO4) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Liothyronine sodium, a synthetic thyroid hormone, is used to treat hypothyroidism and other thyroid-related conditions such as goiter, myxedema, and thyroid carcinoma. It is an approved medicine, also approved for veterinary use, and is used less widely than levothyroxine, mainly where a faster-acting thyroid hormone is needed.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q327362](https://www.wikidata.org/wiki/Q327362) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:01 | 0:48 | 0/0/0 | 0/0/0 | 0/0/0 | 22,696/821 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=liothyronine_sodium).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer, `SLCO1A2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer | DrugBank actor |
| absorption | liver | `ABCB1` inducer | DrugBank actor |
| absorption | placenta | `ABCB1` inducer | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer, `SLCO1A2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` inducer | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | liver | `SLC10A1` substrate, `SLCO1B1` substrate, `SLCO1B3` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: PCNA (target), SERPINA7 (substrate), SLC16A10 (inhibitor), SLC7A5 (unknown), SLCO1C1 (inhibitor), SLCO1C1 (substrate), SLCO4A1 (inhibitor), SLCO4A1 (substrate), SLCO4C1 (substrate), THRA (target), THRB (target), TTR (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Taylor_1997.pdf` | Taylor AH et al., Beneficial effects of a novel thyromime…, Molecular pharmacology (1997) | pd | 5 | [10.1124/mol.52.3.542](https://doi.org/10.1124/mol.52.3.542) | [9281617](https://www.ncbi.nlm.nih.gov/pubmed/9281617) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T10:00:47.340392+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Almohammadi_2025 | not_relevant | 2 | 0 | The paper reports the efficacy of liothyronine in treating a genetic thyroid disorder (SECISBP2 deficiency) but does not analyze how this genetic variant alters the pharmacokinetics (PK) or pharmacodynamics (PD) of the drug (e.g., clearance, half-life, receptor sensitivity), which is required for a pharmacogenomic effect. |
| PGx | Dumitrescu_2006 | not_relevant | 0 | 0 | The paper studies MCT8 knockout mice and endogenous thyroid hormone regulation, not the pharmacogenomics of liothyronine sodium. |
| PGx | Haberkorn_2001 | not_relevant | 0 | 0 | The study investigates the effects of dietary vitamin A and L-T3 on UGT enzyme expression in rats, which is not a pharmacogenomic effect on a PK/PD parameter for liothyronine_sodium. |
| PGx | Haberkorn_2003 | not_relevant | 0 | 0 | The paper studies the effect of thyroid status and retinoic acid on UGT expression in rat hepatocytes, not the effect of gene variants on liothyronine pharmacokinetics or pharmacodynamics. |
| popPK | Simonetti_2026 | irrelevant | 0 | 0 | The study evaluates cystic fibrosis treatment outcomes (sweat chloride) and does not report pharmacokinetic parameters for liothyronine sodium. |
| PGx | Simonetti_2026 | not_relevant | 0 | 0 | The study evaluates the pharmacodynamics of elexacaftor/tezacaftor/ivacaftor in cystic fibrosis, not the pharmacokinetics or pharmacodynamics of liothyronine sodium. |
| popPK | Taylor_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of the thyromimetic CGS 23425 and lipid metabolism, using L-T3 (liothyronine) only as a reference compound without reporting its pharmacokinetic parameters. |
| popPK | Wooliscroft_2020 | irrelevant | 0 | 0 | The study focuses on safety and visual outcomes in multiple sclerosis and does not report any pharmacokinetic parameters for liothyronine sodium. |
| popPK | Zhang_2015 | irrelevant | 0 | 0 | The study is an in vivo toxicity/genetic assay in frogs to screen for thyroid hormone disruptors, not a pharmacokinetic study for liothyronine sodium. |
| popPK | Zhou-Li_1991 | irrelevant | 0 | 0 | The study is an in vitro cell proliferation experiment investigating the biological effects of L-triiodothyronine, not its pharmacokinetics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
