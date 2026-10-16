<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;obinutuzumab&quot;}]"></div>

# obinutuzumab

- **generic name:** obinutuzumab
- **ATC codes:** `L01FA03`
- **DrugBank:** [DB08935](https://go.drugbank.com/drugs/DB08935) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Obinutuzumab is a monoclonal antibody used to treat B-cell blood cancers such as chronic lymphocytic leukemia and various lymphomas. It is approved and authorised in the European Union for chronic lymphocytic leukemia, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q389496](https://www.wikidata.org/wiki/Q389496) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:58 | 4:45 | 0/11/1 | 1/0/0 | 0/0/0 | 295,986/11,137 | einfracz / qwen3.8-27b | 10 | 0/10 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.964), gpt-oss:120b (not confirmed, agreement 0.926). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Gibiansky_2014_reference](drugs/drug_obinutuzumab/Obinutuzumab_Gibiansky2014_reference.md) | — | 1-compartment (no model) | 1 | Gibiansky E et al., Population Pharmacokinetics of Obinutuz…, CPT: pharmacometrics & syst… (2014) | [10.1038/psp.2014.42](https://doi.org/10.1038/psp.2014.42) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667), gpt-oss:120b (partly confirmed, agreement 0.462). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Gibiansky_2019_effect_on_parameter_mean_95_cls](drugs/drug_obinutuzumab/Obinutuzumab_Gibiansky2019_effect_on_parameter_mean_95_cls.md) | — | 2-compartment (no model) | 3 | Gibiansky E et al., Pharmacokinetics, exposure, efficacy an…, British journal of clinical… (2019) | [10.1111/bcp.13974](https://doi.org/10.1111/bcp.13974) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667), gpt-oss:120b (partly confirmed, agreement 0.462). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Gibiansky_2019_illustrative_value_for_covariate](drugs/drug_obinutuzumab/Obinutuzumab_Gibiansky2019_illustrative_value_for_covariate.md) | — | 1-compartment (no model) | 2 (+3 cov.) | Gibiansky E et al., Pharmacokinetics, exposure, efficacy an…, British journal of clinical… (2019) | [10.1111/bcp.13974](https://doi.org/10.1111/bcp.13974) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667), gpt-oss:120b (partly confirmed, agreement 0.462). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Gibiansky_2019_reference](drugs/drug_obinutuzumab/Obinutuzumab_Gibiansky2019_reference.md) | — | 1-compartment (no model) | 2 (+3 cov.) | Gibiansky E et al., Pharmacokinetics, exposure, efficacy an…, British journal of clinical… (2019) | [10.1111/bcp.13974](https://doi.org/10.1111/bcp.13974) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667), gpt-oss:120b (partly confirmed, agreement 0.889). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Zhai_2017_dlbcl](drugs/drug_obinutuzumab/Obinutuzumab_Zhai2017_dlbcl.md) | — | 1-compartment (no model) | 5 | Zhai J et al., Pharmacokinetics of obinutuzumab in Chi…, British journal of clinical… (2017) | [10.1111/bcp.13232](https://doi.org/10.1111/bcp.13232) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667), gpt-oss:120b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Zhai_2017_dlbcla](drugs/drug_obinutuzumab/Obinutuzumab_Zhai2017_dlbcla.md) | — | 1-compartment (no model) | 6 | Zhai J et al., Pharmacokinetics of obinutuzumab in Chi…, British journal of clinical… (2017) | [10.1111/bcp.13232](https://doi.org/10.1111/bcp.13232) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667), gpt-oss:120b (partly confirmed, agreement 0.889). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Zhai_2017_fl](drugs/drug_obinutuzumab/Obinutuzumab_Zhai2017_fl.md) | — | 1-compartment (no model) | 5 | Zhai J et al., Pharmacokinetics of obinutuzumab in Chi…, British journal of clinical… (2017) | [10.1111/bcp.13232](https://doi.org/10.1111/bcp.13232) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667), gpt-oss:120b (partly confirmed, agreement 0.889). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Zhai_2017_fl_2](drugs/drug_obinutuzumab/Obinutuzumab_Zhai2017_fl_2.md) | — | 1-compartment (no model) | 6 | Zhai J et al., Pharmacokinetics of obinutuzumab in Chi…, British journal of clinical… (2017) | [10.1111/bcp.13232](https://doi.org/10.1111/bcp.13232) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.7), gpt-oss:120b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Zhai_2017_gauguin_a_phase_ii](drugs/drug_obinutuzumab/Obinutuzumab_Zhai2017_gauguin_a_phase_ii.md) | — | 1-compartment (no model) | 6 | Zhai J et al., Pharmacokinetics of obinutuzumab in Chi…, British journal of clinical… (2017) | [10.1111/bcp.13232](https://doi.org/10.1111/bcp.13232) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.7), gpt-oss:120b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Zhai_2017_gershwin_phase_ib](drugs/drug_obinutuzumab/Obinutuzumab_Zhai2017_gershwin_phase_ib.md) | — | 1-compartment (no model) | 6 | Zhai J et al., Pharmacokinetics of obinutuzumab in Chi…, British journal of clinical… (2017) | [10.1111/bcp.13232](https://doi.org/10.1111/bcp.13232) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667), gpt-oss:120b (partly confirmed, agreement 0.889). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Zhai_2017_inhl](drugs/drug_obinutuzumab/Obinutuzumab_Zhai2017_inhl.md) | — | 1-compartment (no model) | 5 | Zhai J et al., Pharmacokinetics of obinutuzumab in Chi…, British journal of clinical… (2017) | [10.1111/bcp.13232](https://doi.org/10.1111/bcp.13232) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.7), gpt-oss:120b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Zhai_2017_jo21900_b_phase_i](drugs/drug_obinutuzumab/Obinutuzumab_Zhai2017_jo21900_b_phase_i.md) | — | 1-compartment (no model) | 6 | Zhai J et al., Pharmacokinetics of obinutuzumab in Chi…, British journal of clinical… (2017) | [10.1111/bcp.13232](https://doi.org/10.1111/bcp.13232) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span> | [Grimm_2019_B_cell_depletion](drugs/drug_obinutuzumab/pd_Grimm_2019_B_cell_depletion.md) | B-cell depletion ← obinutuzumab · indirect response — drug inhibits the production of B-cell depletion | — | Grimm HP et al., PKPD Assessment of the Anti-CD20 Antibo…, Journal of pharmaceutical s… (2019) | [10.1016/j.xphs.2019.07.013](https://doi.org/10.1016/j.xphs.2019.07.013) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=obinutuzumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: MS4A1 (inhibitor), MS4A1 (regulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 16 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 12  ·  extracted 0  ·  needs_review 1  ·  rejected 11  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Grimm_2019.pdf` | Grimm HP et al., PKPD Assessment of the Anti-CD20 Antibo…, Journal of pharmaceutical s… (2019) | popPK | 9 | [10.1016/j.xphs.2019.07.013](https://doi.org/10.1016/j.xphs.2019.07.013) | [31351865](https://pubmed.ncbi.nlm.nih.gov/31351865) | The study reports population PK/PD parameters for obinutuzumab in cynomolgus monkeys, but specific numeric values are not listed in the provided text. |

<sub>queue written 2026-10-15T03:54:55.412762+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Sawaf_2021 | irrelevant | 0 | 0 | The study focuses on minimal residual disease (MRD) kinetics and clinical outcomes in CLL patients, not on the pharmacokinetic parameters (CL, V, etc.) of obinutuzumab. |
| popPK | Bender_2024 | irrelevant | 0 | 0 | The study is a population PK model for mosunetuzumab; obinutuzumab is only a prior therapy whose residual levels are modeled as a competitor for receptor occupancy, not the subject drug. |
| popPK | Edlund_2022 | irrelevant | 0 | 0 | The study focuses on the exposure-response analysis of acalabrutinib, with obinutuzumab serving only as a comparator agent in a combination therapy arm, and no PK parameters for obinutuzumab are reported. |
| popPK | Frances_2022 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of glofitamab, with obinutuzumab used only as a pretreatment agent in animal models. |
| popPK | Grimm_2019 | relevant | 9 | 2 | The study reports population PK/PD parameters for obinutuzumab in cynomolgus monkeys, but specific numeric values are not listed in the provided text. |
| popPK | Jamois_2019 | relevant | 9 | 4 | The paper reports quantitative obinutuzumab PK parameters (half-lives, clearance ratios, exposure values) in human follicular lymphoma patients, but the final population PK model parameter estimates (Tables S1/S2) are in supplementary material. |
| popPK | Lu_2020 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of polatuzumab vedotin, with obinutuzumab serving only as a co-administered comparator agent rather than the subject drug. |
| popPK | Samineni_2022 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of venetoclax, with obinutuzumab serving only as a co-administered agent for which no PK parameters are reported. |
| popPK | Shemesh_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of polatuzumab vedotin, and while obinutuzumab is mentioned as a co-administered agent, its PK parameters are not the subject of the reported quantitative analysis. |
| popPK | Sung_2018 | irrelevant | 0 | 0 | The study is an in-vitro immunological assay measuring NK cell cytotoxicity (ADCC) using obinutuzumab as a reagent, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:55 UTC</sub>
