<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;ropeginterferon alfa-2b&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;RopeginterferonAlfa2b_Zhu2021_reference&quot;,&quot;label&quot;:&quot;Zhu_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# ropeginterferon alfa-2b

- **generic name:** ropeginterferon alfa-2b
- **ATC codes:** `L03AB15`
- **DrugBank:** [DB15119](https://go.drugbank.com/drugs/DB15119) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Ropeginterferon alfa-2b is a long-acting pegylated interferon used to treat polycythemia vera. It is authorised in the European Union and remains investigational for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q99754007](https://www.wikidata.org/wiki/Q99754007) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ropeginterferon_alfa_2b | metabolite | 447.529 | C20H37N3O8 | PubChem | [86278347](https://pubchem.ncbi.nlm.nih.gov/compound/86278347) | Zhu_2021 |

## Start here

> **Zhu_2021_reference** — <span class="pk-badge pk-badge--green">Reproduces with caveats</span> healthy Caucasian and Chinese adults, n = 57. [Run it in the simulator](drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference.md?tab=Simulation) · [record](drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 0.03242 | L/h | 0.778 L/day | healthy Caucasian and Chinese adults | 57 | human | <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Zhu_2021_reference](drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference.md) |
| V | V/F | 2.32 | L | 2.32 L | healthy Caucasian and Chinese adults | 57 | human | <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Zhu_2021_reference](drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference.md) |
| ka | kabs | 0.005833 | 1/h | 0.14 1/day | healthy Caucasian and Chinese adults | 57 | human | <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Zhu_2021_reference](drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces with caveats" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces with caveats</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Zhu_2021_reference](drugs/drug_ropeginterferon_alfa_2b/RopeginterferonAlfa2b_Zhu2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 (+1 cov.) | Zhu M et al., Population Pharmacokinetics of Ropegint…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.673492](https://doi.org/10.3389/fphar.2021.673492) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Qin_2025_HCT](drugs/drug_ropeginterferon_alfa_2b/pd_Qin_2025_HCT.md) | hematocrit ← ropeg · indirect response — drug inhibits the production of hematocrit | model (no simulator) | Qin A et al., Population Pharmacokinetics-Pharmacodyn…, Pharmacology research & per… (2025) | [10.1002/prp2.70109](https://doi.org/10.1002/prp2.70109) |
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Qin_2025_PLT](drugs/drug_ropeginterferon_alfa_2b/pd_Qin_2025_PLT.md) | platelet ← ropeg · indirect response — drug inhibits the production of platelet | model (no simulator) | Qin A et al., Population Pharmacokinetics-Pharmacodyn…, Pharmacology research & per… (2025) | [10.1002/prp2.70109](https://doi.org/10.1002/prp2.70109) |
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Qin_2025_WBC](drugs/drug_ropeginterferon_alfa_2b/pd_Qin_2025_WBC.md) | white blood cell ← ropeg · indirect response — drug inhibits the production of white blood cell | model (no simulator) | Qin A et al., Population Pharmacokinetics-Pharmacodyn…, Pharmacology research & per… (2025) | [10.1002/prp2.70109](https://doi.org/10.1002/prp2.70109) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Qin_2025_ALT](drugs/drug_ropeginterferon_alfa_2b/pd_Qin_2025_ALT.md) | increased ALT ← ropeg · direct linear effect | model (no simulator) | Qin A et al., Population Pharmacokinetics-Pharmacodyn…, Pharmacology research & per… (2025) | [10.1002/prp2.70109](https://doi.org/10.1002/prp2.70109) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Qin_2025_AST](drugs/drug_ropeginterferon_alfa_2b/pd_Qin_2025_AST.md) | increased AST ← ropeg · direct linear effect | model (no simulator) | Qin A et al., Population Pharmacokinetics-Pharmacodyn…, Pharmacology research & per… (2025) | [10.1002/prp2.70109](https://doi.org/10.1002/prp2.70109) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Qin_2025_CHR](drugs/drug_ropeginterferon_alfa_2b/pd_Qin_2025_CHR.md) | complete hematologic response ← ropeg · direct Emax (saturable) effect | model (no simulator) | Qin A et al., Population Pharmacokinetics-Pharmacodyn…, Pharmacology research & per… (2025) | [10.1002/prp2.70109](https://doi.org/10.1002/prp2.70109) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Qin_2025_JAK2V617F_allele_burden_reduction](drugs/drug_ropeginterferon_alfa_2b/pd_Qin_2025_JAK2V617F_allele_burden_reduction.md) | JAK2V617F allele burden reduction ← ropeg · direct linear effect | model (no simulator) | Qin A et al., Population Pharmacokinetics-Pharmacodyn…, Pharmacology research & per… (2025) | [10.1002/prp2.70109](https://doi.org/10.1002/prp2.70109) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Qin_2025_JAK2V617F_allele_burden_reduction_2](drugs/drug_ropeginterferon_alfa_2b/pd_Qin_2025_JAK2V617F_allele_burden_reduction_2.md) | JAK2V617F allele burden reduction ← ropeg · direct linear effect | model (no simulator) | Qin A et al., Population Pharmacokinetics-Pharmacodyn…, Pharmacology research & per… (2025) | [10.1002/prp2.70109](https://doi.org/10.1002/prp2.70109) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Qin_2025_anemia](drugs/drug_ropeginterferon_alfa_2b/pd_Qin_2025_anemia.md) | anemia ← ropeg · direct linear effect | model (no simulator) | Qin A et al., Population Pharmacokinetics-Pharmacodyn…, Pharmacology research & per… (2025) | [10.1002/prp2.70109](https://doi.org/10.1002/prp2.70109) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ropeginterferon_alfa_2b).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2A6` inhibitor, `CYP2D6` inhibitor | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: IFNAR1 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:05 | 0:59 | 1/0/0 | 1/0/0 | 0/0/0 | 59,321/7,097 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huang_2021.pdf` | Huang YW et al., Pharmacokinetics and Pharmacodynamics o…, Advances in therapy (2021) | popPK | 6 | [10.1007/s12325-021-01863-y](https://doi.org/10.1007/s12325-021-01863-y) | [34328630](https://pubmed.ncbi.nlm.nih.gov/34328630) | Reports PK parameters (Tmax, half-life) but lacks compartmental values like CL or V. |
| `Huang_2022.pdf` | Huang YW et al., Novel long-acting ropeginterferon alfa-…, British journal of clinical… (2022) | popPK | 6 | [10.1111/bcp.15176](https://doi.org/10.1111/bcp.15176) | [34907578](https://pubmed.ncbi.nlm.nih.gov/34907578) | The study reports standard non-compartmental PK metrics (Cmax, Tmax, AUC) for ropeginterferon alfa-2b in humans, but does not explicitly provide compartmental parameters (CL, V, half-life) in the provided text. |

<sub>queue written 2026-10-06T23:04:29.861220+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Huang_2021 | relevant | 6 | 4 | Reports PK parameters (Tmax, half-life) but lacks compartmental values like CL or V. |
| popPK | Huang_2022 | relevant | 6 | 4 | The study reports standard non-compartmental PK metrics (Cmax, Tmax, AUC) for ropeginterferon alfa-2b in humans, but does not explicitly provide compartmental parameters (CL, V, half-life) in the provided text. |
| popPK | Qin_2024 | irrelevant | 2 | 0 | The paper reports exposure-efficacy/safety relationships but does not provide quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) for ropeginterferon alfa-2b. |
| popPK | Qin_2025 | relevant | 10 | 3 | The paper is a population PK study of ropeginterferon_alfa_2b, but the numeric parameter estimates (Table 4) are not included in the provided evidence, only referred to. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 23:04 UTC</sub>
