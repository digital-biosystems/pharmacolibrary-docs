<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M09A&quot;,&quot;href&quot;:&quot;atc/M09A.md&quot;},{&quot;label&quot;:&quot;givinostat&quot;}]"></div>

# givinostat

- **generic name:** givinostat
- **ATC codes:** `M09AX14`
- **DrugBank:** [DB12645](https://go.drugbank.com/drugs/DB12645) · **PubChem:** [CID 9804992](https://pubchem.ncbi.nlm.nih.gov/compound/9804992)
- **molar mass:** 421.497 g/mol (C24H27N3O4) — DrugBank
- **groups:** approved, investigational

## About

Givinostat is used to treat Duchenne muscular dystrophy. It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q426257](https://www.wikidata.org/wiki/Q426257) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:33 | 0:16 | 0/0/0 | 0/0/1 | 0/0/0 | 51,293/914 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span> | [Mercuri_2026_QTcF](drugs/drug_givinostat/pd_Mercuri_2026_QTcF.md) | placebo-corrected, change-from-baseline QTcF ← givinostat · direct Emax (saturable) effect | — | Mercuri E et al., Thorough QT Study on the Effect of Ther…, Clinical pharmacology in dr… (2026) | [10.1002/cpdd.70047](https://doi.org/10.1002/cpdd.70047) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fiorentini_2023.pdf` | Fiorentini F et al., Population pharmacokinetic-pharmacodyna…, Expert opinion on drug meta… (2023) | popPK | 10 | [10.1080/17425255.2023.2219839](https://doi.org/10.1080/17425255.2023.2219839) | [37306105](https://pubmed.ncbi.nlm.nih.gov/37306105) | The abstract confirms a population PK model for givinostat was developed, but specific numeric parameter values (CL, V, etc.) are not provided in the text, only simulation outcomes. |

<sub>queue written 2026-10-07T03:33:14.059083+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | De_2025 | relevant | 4 | 0 | The paper utilizes a givinostat PK-PD model for simulation, but it is a methods/application paper on reinforcement learning for dosing; specific numeric PK parameters (CL, V, etc.) are not provided in the text but are referenced as being in Supplementary Data (Data S2). |
| popPK | Fiorentini_2023 | relevant | 10 | 2 | The abstract confirms a population PK model for givinostat was developed, but specific numeric parameter values (CL, V, etc.) are not provided in the text, only simulation outcomes. |
| popPK | Mercuri_2026 | relevant | 7 | 3 | The study reports givinostat pharmacokinetics but key quantitative disposition parameters (AUC, CL/F, Vd/F) are explicitly located in Supplementary Table S1, with only Cmax and half-life partially available in the text. |
| popPK | Tosca_2024 | relevant | 5 | 1 | The paper utilizes a population PK model for givinostat in an in silico trial, but the quantitative PK parameter estimates (CL, V, etc.) are explicitly stated to be in supplementary material (Table S2.1/S2.2) which is not provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
