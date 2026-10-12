<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01C&quot;,&quot;href&quot;:&quot;atc/H01C.md&quot;},{&quot;label&quot;:&quot;nafarelin&quot;}]"></div>

# nafarelin

- **generic name:** nafarelin
- **ATC codes:** `H01CA02`
- **DrugBank:** [DB00666](https://go.drugbank.com/drugs/DB00666) · **PubChem:** [CID 25077405](https://pubchem.ncbi.nlm.nih.gov/compound/25077405)
- **molar mass:** 1322.496 g/mol (C66H83N17O13) — DrugBank
- **groups:** approved, investigational

## About

Nafarelin is a gonadotropin-releasing hormone analogue used to treat endometriosis. It is an approved medicine, though not authorised in the European Union, and has also been investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3869873](https://www.wikidata.org/wiki/Q3869873) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:30 | 5:27 | 0/0/0 | 2/0/0 | 0/0/0 | 87,973/1,681 | einfracz / qwen3.8-27b | 3 | 0/0 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Hull_1994_Estrogen_status](drugs/drug_nafarelin/pd_Hull_1994_Estrogen_status.md) | Estrogen status ← nafarelin · model not identified | — | Hull ME et al., Nafarelin in the treatment of endometri…, Gynecologic and obstetric i… (1994) | [10.1159/000292574](https://doi.org/10.1159/000292574) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Swerdloff_1986_spermatogenesis](drugs/drug_nafarelin/pd_Swerdloff_1986_spermatogenesis.md) | spermatogenesis ← Nafarelin · inhibition effect | — | Swerdloff RS et al., Gonadotropin releasing hormone (GnRH) a…, Medical biology (1986) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 46 matched, 46 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Anik_1984.pdf` | Anik ST et al., Nasal absorption of nafarelin acetate,…, Journal of pharmaceutical s… (1984) | popPK | 6 | [10.1002/jps.2600730523](https://doi.org/10.1002/jps.2600730523) | [6234387](https://pubmed.ncbi.nlm.nih.gov/6234387) | The study is a pharmacokinetic analysis of nafarelin in rhesus monkeys, but the evidence provided only contains qualitative descriptions (e.g., "rapid," "approximately 2%") and lacks specific numeric parameter values like CL, V, or t1/2. |

<sub>queue written 2026-10-07T09:29:48.590058+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Anik_1984 | relevant | 6 | 1 | The study is a pharmacokinetic analysis of nafarelin in rhesus monkeys, but the evidence provided only contains qualitative descriptions (e.g., "rapid," "approximately 2%") and lacks specific numeric parameter values like CL, V, or t1/2. |
| popPK | Chiang_1985 | irrelevant | 0 | 0 | The paper focuses on endocrine bioactivity responses (LH/FSH suppression) to nafarelin dosing rather than pharmacokinetic disposition parameters. |
| popPK | Goggin_2004 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for Emfilermin (r-hLIF), not nafarelin. |
| popPK | Rosenfield_1994 | irrelevant | 0 | 0 | The study investigates ovarian steroidogenic responses to nafarelin as a diagnostic probe, not the pharmacokinetic disposition parameters of nafarelin itself. |
| popPK | Rosenfield_1996 | irrelevant | 0 | 0 | The study focuses on hormonal efficacy (LH/FSH/steroid responses) of leuprolide as a comparator to nafarelin for diagnostic testing, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for nafarelin. |
| popPK | Schriock_1985 | irrelevant | 1 | 0 | The paper mentions determining pharmacokinetic characteristics, but the provided evidence contains only endocrine response data (LH/FSH levels) and no quantitative PK parameters (CL, V, t1/2) for nafarelin. |
| popPK | Vickery_1985 | irrelevant | 1 | 0 | This is a pharmacodynamic study focusing on reproductive parameters (LH, testosterone, sperm) in dogs and does not report quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for nafarelin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
