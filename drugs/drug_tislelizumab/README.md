<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;tislelizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tislelizumab_Kim2025_reference&quot;,&quot;label&quot;:&quot;Kim_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tislelizumab/Tislelizumab_Kim2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tislelizumab

- **generic name:** tislelizumab
- **ATC codes:** `L01FF09`
- **DrugBank:** [DB14922](https://go.drugbank.com/drugs/DB14922) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Tislelizumab is a monoclonal antibody that blocks PD-1 and is used to treat several cancers, including esophageal, lung, nasopharyngeal, and stomach cancers. It is an approved medicine, with one product currently authorised in the European Union, though another EU product has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q28209583](https://www.wikidata.org/wiki/Q28209583) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Kim_2025_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> patients with non-small cell lung cancer, n = &gt;2500. [Run it in the simulator](drugs/drug_tislelizumab/Tislelizumab_Kim2025_reference.md?tab=Simulation) · [record](drugs/drug_tislelizumab/Tislelizumab_Kim2025_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.006375 | L/h | 0.153 L/day | patients with non-small cell lung cancer | &gt;2500 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kim_2025_reference](drugs/drug_tislelizumab/Tislelizumab_Kim2025_reference.md) |
| CL | CL | 0.5 | L/h | 12 L/day | patients with advanced solid tumors or cHL |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Yu_2025_cycle_5](drugs/drug_tislelizumab/Tislelizumab_Yu2025_cycle_5.md) |
| CL | CL | 0.8333 | L/h | 20 L/day | patients with advanced solid tumors or cHL |  | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Yu_2025_cycle_1](drugs/drug_tislelizumab/Tislelizumab_Yu2025_cycle_1.md) |
| V | V | 6.42 | L | 6.42 L | patients with non-small cell lung cancer | &gt;2500 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kim_2025_reference](drugs/drug_tislelizumab/Tislelizumab_Kim2025_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="96" viewBox="0 0 560 96" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="74" stroke="#ddd"/><text x="190.0" y="88" font-size="10" text-anchor="middle">0.001</text><line x1="306.7" y1="18" x2="306.7" y2="74" stroke="#ddd"/><text x="306.7" y="88" font-size="10" text-anchor="middle">0.01</text><line x1="423.3" y1="18" x2="423.3" y2="74" stroke="#ddd"/><text x="423.3" y="88" font-size="10" text-anchor="middle">0.1</text><line x1="540.0" y1="18" x2="540.0" y2="74" stroke="#ddd"/><text x="540.0" y="88" font-size="10" text-anchor="middle">1</text><text x="184" y="34.0" font-size="11" text-anchor="end">Kim_2025 · CL</text><circle cx="283.9" cy="30.0" r="4" fill="#2e7d32"><title>Kim_2025 · CL: 0.006375 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Yu_2025 · CL</text><circle cx="504.9" cy="46.0" r="4" fill="#ef6c00"><title>Yu_2025 · CL: 0.5 L/h</title></circle><text x="184" y="66.0" font-size="11" text-anchor="end">Yu_2025 · CL</text><circle cx="530.8" cy="62.0" r="4" fill="#ef6c00"><title>Yu_2025 · CL: 0.8333 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Kim_2025_reference](drugs/drug_tislelizumab/Tislelizumab_Kim2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kim TM, Decoding the EPAR scientific assessment…, Translational and clinical… (2025) | [10.12793/tcp.2025.33.e17](https://doi.org/10.12793/tcp.2025.33.e17) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Yu_2025_cycle_1](drugs/drug_tislelizumab/Tislelizumab_Yu2025_cycle_1.md) | — | 1-compartment (no model) | 4 | Yu T et al., Clinical Pharmacology Overview of Tisle…, Clinical and translational… (2025) | [10.1111/cts.70221](https://doi.org/10.1111/cts.70221) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [↳ cycle_5](drugs/drug_tislelizumab/Tislelizumab_Yu2025_cycle_5.md) | — | 1-compartment (no model) | 4 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Budha_2023_reference](drugs/drug_tislelizumab/Tislelizumab_Budha2023_reference.md) | — | 2-compartment (no model) | 4 | Budha N et al., Model-based population pharmacokinetic…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12880](https://doi.org/10.1002/psp4.12880) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub> | [Liu_2026_reference](drugs/drug_tislelizumab/Tislelizumab_Liu2026_reference.md) | — | 2-compartment (no model) | 7 (+6 cov.) | Liu X et al., Model-Informed Development of a Subcuta…, Clinical and translational… (2026) | [10.1111/cts.70649](https://doi.org/10.1111/cts.70649) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tislelizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PDCD1 (antibody), PDCD1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:15 | 5:19 | 3/2/0 | 0/0/0 | 0/0/0 | 149,126/6,487 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 0/5 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 1  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Rizwan_2025 | relevant | 8 | 2 | The paper uses a population PK model for tislelizumab to simulate alternative dosing regimens, but the specific numeric parameter values (CL, V, etc.) are in supplementary tables or figures not provided in the evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 21:11 UTC</sub>
