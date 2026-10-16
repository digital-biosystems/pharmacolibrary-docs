<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;tucatinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tucatinib_Zhang2024_final_population_pk_model_estimate_rse&quot;,&quot;label&quot;:&quot;Zhang_2024_final_population_pk_model_estimate_rse&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tucatinib/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tucatinib_Zhang2024_healthy_participants_300_mg_bid&quot;,&quot;label&quot;:&quot;Zhang_2024_healthy_participants_300_mg_bid&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tucatinib/Tucatinib_Zhang2024_healthy_participants_300_mg_bid.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tucatinib_Zhang2024_her2_mcrcn_68&quot;,&quot;label&quot;:&quot;Zhang_2024_her2_mcrcn_68&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tucatinib/Tucatinib_Zhang2024_her2_mcrcn_68.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# tucatinib

- **generic name:** tucatinib
- **ATC codes:** `L01EH03`
- **DrugBank:** [DB11652](https://go.drugbank.com/drugs/DB11652) · **PubChem:** [CID 51039094](https://pubchem.ncbi.nlm.nih.gov/compound/51039094)
- **molar mass:** 480.532 g/mol (C26H24N8O2) — DrugBank
- **groups:** approved, investigational

## About

Tucatinib is a HER2-blocking kinase inhibitor used to treat breast cancer, including metastatic disease. It is an approved medicine and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q25100690](https://www.wikidata.org/wiki/Q25100690) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tucatinib | parent | 480.532 | C26H24N8O2 | DrugBank | [51039094](https://pubchem.ncbi.nlm.nih.gov/compound/51039094) | Zhang_2024, Zhang_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:38 | 5:57 | 0/0/7 | 0/0/0 | 0/0/0 | 100,534/31,909 | openai / gpt-6-luna | 3 | 0/2 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>route_to: `scholar`</sub> | [Zhang_2024_final_population_pk_model_estimate_rse](drugs/drug_tucatinib/Tucatinib_Zhang2024_final_population_pk_model_estimate_rse.md) | ▶ model + simulator | 2-compartment, oral | 6 | Zhang D et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01412-0](https://doi.org/10.1007/s40262-024-01412-0) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.846). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Zhang_2024_healthy_participants_300_mg_bid](drugs/drug_tucatinib/Tucatinib_Zhang2024_healthy_participants_300_mg_bid.md) | ▶ model + simulator | 1-compartment, oral | 7 | Zhang D et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01412-0](https://doi.org/10.1007/s40262-024-01412-0) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.917). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2024_her2_mbcn_52](drugs/drug_tucatinib/Tucatinib_Zhang2024_her2_mbcn_52.md) | — | 1-compartment (no model) | 7 | Zhang D et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01412-0](https://doi.org/10.1007/s40262-024-01412-0) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.846). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Zhang_2024_her2_mcrcn_68](drugs/drug_tucatinib/Tucatinib_Zhang2024_her2_mcrcn_68.md) | ▶ model + simulator | 1-compartment, oral | 8 | Zhang D et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01412-0](https://doi.org/10.1007/s40262-024-01412-0) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C1_half_life_beta failed (ratio 0.29)</sub><br><sub>blocking: C2_base_Q18 failed (ratio 1.0664)</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2025_healthy_participants_300_mg_bid](drugs/drug_tucatinib/Tucatinib_Zhang2025_healthy_participants_300_mg_bid.md) | — | 1-compartment (no model) | 8 | Zhang D et al., Correction: Population Pharmacokinetic…, Clinical pharmacokinetics (2025) | [10.1007/s40262-024-01458-0](https://doi.org/10.1007/s40262-024-01458-0) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C1_half_life_beta failed (ratio 0.7235)</sub><br><sub>blocking: C2_base_Q18 failed (ratio 0.4858)</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2025_her2_mbcn_52](drugs/drug_tucatinib/Tucatinib_Zhang2025_her2_mbcn_52.md) | — | 1-compartment (no model) | 8 | Zhang D et al., Correction: Population Pharmacokinetic…, Clinical pharmacokinetics (2025) | [10.1007/s40262-024-01458-0](https://doi.org/10.1007/s40262-024-01458-0) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C1_half_life_beta failed (ratio 0.3985)</sub><br><sub>blocking: C2_base_Q18 failed (ratio 0.8101)</sub><br><sub>route_to: `human_review`</sub> | [Zhang_2025_her2_mcrcn_68](drugs/drug_tucatinib/Tucatinib_Zhang2025_her2_mcrcn_68.md) | — | 1-compartment (no model) | 8 | Zhang D et al., Correction: Population Pharmacokinetic…, Clinical pharmacokinetics (2025) | [10.1007/s40262-024-01458-0](https://doi.org/10.1007/s40262-024-01458-0) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tucatinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A2` inhibitor, `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ERBB2 (inhibitor), ERBB3 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 7  ·  extracted 0  ·  needs_review 7  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Meyer_2022 | irrelevant | 1 | 0 | This is a bioanalytical cross-validation paper, with no tucatinib disposition parameter values reported in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:33 UTC</sub>
