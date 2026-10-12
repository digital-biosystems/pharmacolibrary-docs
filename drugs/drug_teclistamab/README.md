<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;teclistamab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Teclistamab_Miao2023_reference&quot;,&quot;label&quot;:&quot;Miao_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_teclistamab/Teclistamab_Miao2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# teclistamab

- **generic name:** teclistamab
- **ATC codes:** `L01FX24`
- **DrugBank:** [DB16655](https://go.drugbank.com/drugs/DB16655) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Teclistamab is a monoclonal antibody used to treat multiple myeloma. It is an approved anticancer medicine authorised in the European Union, though it also remains under investigation and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q113366205](https://www.wikidata.org/wiki/Q113366205) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:10 | 5:07 | 0/0/1 | 0/0/0 | 0/0/0 | 137,958/8,655 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.789). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T1_tmax</sub><br><sub>route_to: `scholar`</sub> | [Miao_2023_reference](drugs/drug_teclistamab/Teclistamab_Miao2023_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 | Miao X et al., Population Pharmacokinetics and Exposur…, Targeted oncology (2023) | [10.1007/s11523-023-00989-z](https://doi.org/10.1007/s11523-023-00989-z) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cardé_2026 | relevant | 8 | 2 | The paper uses a population PK model for teclistamab and reports simulated concentration values, but the specific quantitative disposition parameters (CL, V, Q, ka) are not listed in the text, only referenced as previously described or in supplementary material. |
| popPK | Girgis_2022 | relevant | 8 | 2 | The paper describes a 2-compartment PK model for teclistamab in humans and monkeys, but specific numeric parameter values (CL, V, Q) are not listed in the text, likely residing in figures or supplementary material. |
| popPK | Guo_2025 | relevant | 8 | 4 | The paper reports population PK modeling and simulation results for teclistamab, providing specific exposure metrics (Ctrough, AUC, Cmax) and simulation comparisons, but lacks explicit structural parameter estimates (CL, V, Q) in the provided text. |
| popPK | Martin_2024 | irrelevant | 0 | 0 | The paper reports health-related quality of life (HRQoL) and patient-reported outcomes, not pharmacokinetic parameters. |
| popPK | Pillarisetti_2020 | irrelevant | 0 | 0 | The paper reports in vitro and in vivo efficacy (cytotoxicity, EC50) but contains no pharmacokinetic parameters (CL, V, t1/2) for teclistamab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:06 UTC</sub>
