<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;teclistamab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Teclistamab_Miao2023_reference&quot;,&quot;label&quot;:&quot;Miao_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_teclistamab/Teclistamab_Miao2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# teclistamab

- **generic name:** teclistamab
- **ATC codes:** `L01FX24`
- **DrugBank:** [DB16655](https://go.drugbank.com/drugs/DB16655) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Teclistamab is a monoclonal antibody used to treat multiple myeloma. It is an approved anticancer medicine authorised in the European Union, though it also remains under investigation and carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q113366205](https://www.wikidata.org/wiki/Q113366205) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Miao_2023_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> patients with relapsed/refractory multiple myeloma, n = &gt;=338. [Run it in the simulator](drugs/drug_teclistamab/Teclistamab_Miao2023_reference.md?tab=Simulation) · [record](drugs/drug_teclistamab/Teclistamab_Miao2023_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.01871 | L/h | 0.449 L/day | patients with relapsed/refractory multiple myeloma | &gt;=338 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Miao_2023_reference](drugs/drug_teclistamab/Teclistamab_Miao2023_reference.md) |
| V | V1 | 4.13 | L | 4.13 L | patients with relapsed/refractory multiple myeloma | &gt;=338 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Miao_2023_reference](drugs/drug_teclistamab/Teclistamab_Miao2023_reference.md) |
| ka | kabs | 0.005542 | 1/h | 0.133 day–1 | patients with relapsed/refractory multiple myeloma | &gt;=338 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Miao_2023_reference](drugs/drug_teclistamab/Teclistamab_Miao2023_reference.md) |
| F | Fab | 0.718 |  | 0.718 | patients with relapsed/refractory multiple myeloma | &gt;=338 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Miao_2023_reference](drugs/drug_teclistamab/Teclistamab_Miao2023_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: T1_tmax</sub> | [Miao_2023_reference](drugs/drug_teclistamab/Teclistamab_Miao2023_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 | Miao X et al., Population Pharmacokinetics and Exposur…, Targeted oncology (2023) | [10.1007/s11523-023-00989-z](https://doi.org/10.1007/s11523-023-00989-z) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:10 | 5:07 | 0/0/1 | 0/0/0 | 0/0/0 | 137,958/8,655 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/4 | 5/0 | 0 |

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 21:06 UTC</sub>
