<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M05B&quot;,&quot;href&quot;:&quot;atc/M05B.md&quot;},{&quot;label&quot;:&quot;denosumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Denosumab_Sutjandra2011_reference&quot;,&quot;label&quot;:&quot;Sutjandra_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_denosumab/Denosumab_Sutjandra2011_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Denosumab_Ding2023_reference&quot;,&quot;label&quot;:&quot;Ding_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_denosumab/Denosumab_Ding2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# denosumab

- **generic name:** denosumab
- **ATC codes:** `M05BX04`
- **DrugBank:** [DB06643](https://go.drugbank.com/drugs/DB06643) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Denosumab is a monoclonal antibody used to treat bone diseases, especially postmenopausal osteoporosis and bone loss linked to cancer. It is widely used and authorised in the European Union, with products covering osteoporosis, bone resorption, bone tumours, and giant cell tumour of bone.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408283](https://www.wikidata.org/wiki/Q408283) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:18 | 2:33 | 1/1/3 | 1/0/0 | 0/0/0 | 239,021/14,970 | einfracz / qwen3.8-27b | 7 | 0/7 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed</span> | [Sutjandra_2011_reference](drugs/drug_denosumab/Denosumab_Sutjandra2011_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Sutjandra L et al., Population pharmacokinetic meta-analysi…, Clinical pharmacokinetics (2011) | [10.2165/11594240-000000000-00000](https://doi.org/10.2165/11594240-000000000-00000) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.529). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Choi_2025_reference](drugs/drug_denosumab/Denosumab_Choi2025_reference.md) | — | 3-compartment (no model) | 6 (+3 cov.) | Choi S et al., Population pharmacokinetics/pharmacodyn…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1631034](https://doi.org/10.3389/fphar.2025.1631034) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.917). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Ding_2023_reference](drugs/drug_denosumab/Denosumab_Ding2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Ding Y et al., A randomized trial comparing LY01011, b…, Journal of bone oncology (2023) | [10.1016/j.jbo.2023.100499](https://doi.org/10.1016/j.jbo.2023.100499) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.467). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Gibiansky_2012_reference](drugs/drug_denosumab/Denosumab_Gibiansky2012_reference.md) | — | 1-compartment (no model) | 4 | Gibiansky L et al., Population pharmacokinetic analysis of…, Clinical pharmacokinetics (2012) | [10.2165/11598090-000000000-00000](https://doi.org/10.2165/11598090-000000000-00000) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Sánchez-Vidaurre_2025_reference](drugs/drug_denosumab/Denosumab_SnchezVidaurre2025_reference.md) | — | 2-compartment (no model) | 7 | Sánchez-Vidaurre S et al., Population PK Modeling of Denosumab Bio…, Pharmaceutics (2025) | [10.3390/pharmaceutics17091146](https://doi.org/10.3390/pharmaceutics17091146) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Choi_2025_BMD](drugs/drug_denosumab/pd_Choi_2025_BMD.md) | lumbar spine BMD biomarker turnover ← denosumab | — | Choi S et al., Population pharmacokinetics/pharmacodyn…, Frontiers in pharmacology (2025) | [10.3389/fphar.2025.1631034](https://doi.org/10.3389/fphar.2025.1631034) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 27 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 1  ·  needs_review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gibiansky_2012.pdf` | Gibiansky L et al., Population pharmacokinetic analysis of…, Clinical pharmacokinetics (2012) | popPK | 10 | [10.2165/11598090-000000000-00000](https://doi.org/10.2165/11598090-000000000-00000) | [22420579](https://pubmed.ncbi.nlm.nih.gov/22420579) | The abstract explicitly reports quantitative population PK parameters including clearance (3.25 mL/h/66 kg), central volume (2.62 L/66 kg), bioavailability (61%), and absorption half-life (2.7 days). |
| `Sutjandra_2011.pdf` | Sutjandra L et al., Population pharmacokinetic meta-analysi…, Clinical pharmacokinetics (2011) | popPK | 10 | [10.2165/11594240-000000000-00000](https://doi.org/10.2165/11594240-000000000-00000) | [22087866](https://pubmed.ncbi.nlm.nih.gov/22087866) | The paper is a population PK study of denosumab in humans that explicitly reports numeric values for clearance, volume, and absorption rate in the results section. |
| `Martínez-Reina_2021.pdf` | Martínez-Reina J et al., Are drug holidays a safe option in trea…, Journal of the mechanical b… (2021) | popPK | 5 | [10.1016/j.jmbbm.2020.104140](https://doi.org/10.1016/j.jmbbm.2020.104140) | [33080564](https://pubmed.ncbi.nlm.nih.gov/33080564) | The paper applies an in silico mechanistic PK-PD model of denosumab, but no numeric PK parameter values (CL, V, t1/2, etc.) are present in the evidence provided. |

<sub>queue written 2026-10-07T03:16:08.573669+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kuang_2026 | irrelevant | 2 | 1 | The study models LY06006, a biosimilar, rather than denosumab itself, and does not provide specific quantitative PK parameter values (like CL or Vd) for denosumab. |
| popPK | Kultima_2025 | irrelevant | 0 | 0 | The paper is a metabolomics study identifying bone turnover biomarkers (peptides/peptidomics) associated with denosumab withdrawal, not a pharmacokinetic study reporting disposition parameters for denosumab itself. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The study is an efficacy comparison of bone mineral density and does not report pharmacokinetic parameters for denosumab. |
| popPK | Mandema_2014 | irrelevant | 0 | 0 | The study is a meta-analysis of bone mineral density pharmacodynamic outcomes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Marathe_2011 | irrelevant | 4 | 0 | The study focuses on pharmacodynamic modeling and BMD changes, and while it integrates PK, no specific quantitative PK parameter values (CL, V, ka) for denosumab are provided in the evidence. |
| popPK | Martínez-Reina_2021 | relevant | 5 | 1 | The paper applies an in silico mechanistic PK-PD model of denosumab, but no numeric PK parameter values (CL, V, t1/2, etc.) are present in the evidence provided. |
| popPK | Martínez-Reina_2022 | relevant | 7 | 2 | The paper presents a mechanistic PK/PD model including a one-compartment PK model for denosumab, but the specific numeric parameter values are located in Supplementary Table S1 which is not provided in the evidence. |
| popPK | Massa_2025 | irrelevant | 0 | 0 | The study is a retrospective observational analysis of clinical efficacy (analgesia and skeletal-related events), not a pharmacokinetic study reporting disposition parameters. |
| popPK | Pivonka_2024 | irrelevant | 2 | 0 | The paper is a review of mechanobiological PK-PD models and does not report quantitative disposition parameters (CL, V, etc.) for denosumab in the provided evidence. |
| popPK | Wang_2022 | irrelevant | 2 | 1 | The study reports only bioequivalence ratios for Cmax and AUC, lacking compartmental model parameters (CL, V, Q, ka) required for population PK extraction. |
| popPK | Wu_2021 | irrelevant | 1 | 0 | The study models the pharmacodynamic effects on bone turnover markers and bone mineral density rather than the pharmacokinetic disposition parameters of denosumab. |
| popPK | Zecca_2025 | irrelevant | 0 | 0 | The study is a clinical trial evaluating analgesic efficacy and survival outcomes, not pharmacokinetics, and contains no PK parameters (e.g., clearance, volume) for denosumab. |
| popPK | Zhang_2024 | irrelevant | 2 | 0 | The abstract mentions population pharmacokinetics as a similarity outcome but provides no quantitative PK parameters (CL, V, ka, etc.) for denosumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:16 UTC</sub>
