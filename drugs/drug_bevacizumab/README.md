<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;bevacizumab&quot;}]"></div>

# bevacizumab

- **generic name:** bevacizumab
- **ATC codes:** `L01FG01`, `L01XC07`, `S01LA08`
- **DrugBank:** [DB00112](https://go.drugbank.com/drugs/DB00112) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Bevacizumab is a monoclonal antibody that blocks tumour blood vessel growth and is used to treat many cancers, including colorectal, breast, lung, kidney, cervical and ovarian cancers, as well as certain eye conditions such as wet macular degeneration. It is widely used and authorised in the European Union, appears on the WHO list of essential medicines, and is also used off-label in ophthalmology.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413299](https://www.wikidata.org/wiki/Q413299) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:22 | 9:17 | 0/1/4 | 3/1/2 | 0/0/0 | 166,212/43,604 | openai / gpt-6-luna | 5 | 2/3 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q23 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Han_2016_reference](drugs/drug_bevacizumab/Bevacizumab_Han2016_reference.md) | — | 2-compartment (no model) | 5 | Han K et al., Population pharmacokinetics of bevacizu…, Cancer chemotherapy and pha… (2016) | [10.1007/s00280-016-3079-6](https://doi.org/10.1007/s00280-016-3079-6) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Turner_2014_reference](drugs/drug_bevacizumab/Bevacizumab_Turner2014_reference.md) | — | 1-compartment (no model) | 2 | Turner DC et al., Population pharmacokinetics of bevacizu…, Clinical cancer research :… (2014) | [10.1158/1078-0432.CCR-13-2364](https://doi.org/10.1158/1078-0432.CCR-13-2364) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.846). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Caulet_2016_estimate](drugs/drug_bevacizumab/Bevacizumab_Caulet2016_estimate.md) | — | 2-compartment (no model) | 7 (+1 cov.) | Caulet M et al., Bevacizumab Pharmacokinetics Influence…, Clinical pharmacokinetics (2016) | [10.1007/s40262-016-0406-3](https://doi.org/10.1007/s40262-016-0406-3) |
| <span class="pk-badge pk-badge--neutral">not modelled</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Caulet_2016_p_value_a](drugs/drug_bevacizumab/Bevacizumab_Caulet2016_p_value_a.md) | — | 1-compartment (no model) | 3 | Caulet M et al., Bevacizumab Pharmacokinetics Influence…, Clinical pharmacokinetics (2016) | [10.1007/s40262-016-0406-3](https://doi.org/10.1007/s40262-016-0406-3) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Lobet_2024_reference](drugs/drug_bevacizumab/Bevacizumab_Lobet2024_reference.md) | — | 1-compartment (no model) | 2 | Lobet S et al., Confounding mitigation for the exposure…, British journal of clinical… (2024) | [10.1111/bcp.15983](https://doi.org/10.1111/bcp.15983) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Del_2023_BCVA](drugs/drug_bevacizumab/pd_Del_2023_BCVA.md) | change of BCVA from the baseline of nAMD patients ← bevacizumab · indirect response — drug stimulates the production of change of BCVA from the baseline of nAMD patients | — | Del Amo EM et al., Towards a population pharmacokinetic/ph…, European journal of pharmac… (2023) | [10.1016/j.ejpb.2023.05.007](https://doi.org/10.1016/j.ejpb.2023.05.007) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Rocchetti_2013_tumor_growth](drugs/drug_bevacizumab/pd_Rocchetti_2013_tumor_growth.md) | tumor growth ← bevacizumab · disease-progression model | — | Rocchetti M et al., Predictive pharmacokinetic-pharmacodyna…, Cancer chemotherapy and pha… (2013) | [10.1007/s00280-013-2107-z](https://doi.org/10.1007/s00280-013-2107-z) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Xin_2012_PlGF](drugs/drug_bevacizumab/pd_Xin_2012_PlGF.md) | plasma placental growth factor ← bevacizumab · stimulation effect | — | Xin Y et al., Pharmacokinetic and pharmacodynamic ana…, Clinical cancer research :… (2012) | [10.1158/1078-0432.CCR-12-1652](https://doi.org/10.1158/1078-0432.CCR-12-1652) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> | [Park_2023_OS](drugs/drug_bevacizumab/pd_Park_2023_OS.md) | Overall survival ← bevacizumab (SB8 and bevacizumab-EU) · time-to-event model | — | Park S et al., Exposure-response analysis using time-t…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1288308](https://doi.org/10.3389/fphar.2023.1288308) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> | [Park_2023_PFS](drugs/drug_bevacizumab/pd_Park_2023_PFS.md) | Progression-free survival ← bevacizumab (SB8 and bevacizumab-EU) · time-to-event model | — | Park S et al., Exposure-response analysis using time-t…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1288308](https://doi.org/10.3389/fphar.2023.1288308) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Peña-Cabia_2021_OS](drugs/drug_bevacizumab/pd_Pe_a_Cabia_2021_OS.md) | overall survival ← bevacizumab · time-to-event model | — | Peña-Cabia S et al., Assessment of exposure-response relatio…, Biomedicine & pharmacothera… (2021) | [10.1016/j.biopha.2021.111827](https://doi.org/10.1016/j.biopha.2021.111827) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Peña-Cabia_2021_PFS](drugs/drug_bevacizumab/pd_Pe_a_Cabia_2021_PFS.md) | progression-free survival ← bevacizumab · time-to-event model | — | Peña-Cabia S et al., Assessment of exposure-response relatio…, Biomedicine & pharmacothera… (2021) | [10.1016/j.biopha.2021.111827](https://doi.org/10.1016/j.biopha.2021.111827) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Peña-Cabia_2021_clinical_benefit](drugs/drug_bevacizumab/pd_Pe_a_Cabia_2021_clinical_benefit.md) | clinical benefit ← bevacizumab · categorical (graded) response model | — | Peña-Cabia S et al., Assessment of exposure-response relatio…, Biomedicine & pharmacothera… (2021) | [10.1016/j.biopha.2021.111827](https://doi.org/10.1016/j.biopha.2021.111827) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> | [Ferl_2015_KEnF](drugs/drug_bevacizumab/pd_Ferl_2015_KEnF.md) | KEnF · model not identified | — | Ferl GZ et al., Mixed-effects modeling of clinical DCE-…, Journal of magnetic resonan… (2015) | [10.1002/jmri.24514](https://doi.org/10.1002/jmri.24514) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 79 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 5  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lobet_2024.pdf` | Lobet S et al., Confounding mitigation for the exposure…, British journal of clinical… (2024) | popPK | 10 | [10.1111/bcp.15983](https://doi.org/10.1111/bcp.15983) | [38072829](https://pubmed.ncbi.nlm.nih.gov/38072829) | A bevacizumab target-mediated PK model reports numeric parameters, though no numeric clearance or volume is shown. |
| `Turner_2014.pdf` | Turner DC et al., Population pharmacokinetics of bevacizu…, Clinical cancer research :… (2014) | popPK | 10 | [10.1158/1078-0432.CCR-13-2364](https://doi.org/10.1158/1078-0432.CCR-13-2364) | [24637635](https://pubmed.ncbi.nlm.nih.gov/24637635) | The pediatric human population-PK study reports numeric half-life and volume of distribution values. |
| `Petitcollin_2021.pdf` | Petitcollin A et al., Population pharmacokinetics and exposur…, European journal of clinica… (2021) | popPK | 9 | [10.1007/s00228-021-03179-w](https://doi.org/10.1007/s00228-021-03179-w) | [34245336](https://pubmed.ncbi.nlm.nih.gov/34245336) | Human population PK is reported and an approximate half-life (~14 days) is given, but detailed numeric parameter estimates are not present. |
| `Del_2023.pdf` | Del Amo EM et al., Towards a population pharmacokinetic/ph…, European journal of pharmac… (2023) | popPK | 7 | [10.1016/j.ejpb.2023.05.007](https://doi.org/10.1016/j.ejpb.2023.05.007) | [37178941](https://pubmed.ncbi.nlm.nih.gov/37178941) | The study develops a bevacizumab popPKPD model, but no numeric disposition parameters are present in the provided evidence. |

<sub>queue written 2026-10-07T10:14:32.577165+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allegaert_2013 | irrelevant | 0 | 0 | This educational paper mentions bevacizumab but reports no quantitative pharmacokinetic parameters. |
| popPK | Del_2023 | relevant | 7 | 0 | The study develops a bevacizumab popPKPD model, but no numeric disposition parameters are present in the provided evidence. |
| popPK | Eskander_2015 | irrelevant | 1 | 0 | This is a review of bevacizumab use in cervical cancer and provides no quantitative disposition parameters. |
| popPK | Ferl_2015 | irrelevant | 1 | 0 | The model describes a DCE-MRI tumor biomarker response to bevacizumab, not bevacizumab disposition. |
| popPK | Huynh-Le_2019 | irrelevant | 0 | 0 | Bevacizumab is only noted as a treatment covariate; no bevacizumab pharmacokinetic parameters are reported. |
| popPK | Park_2023 | irrelevant | 1 | 0 | This human exposure-response analysis reports no bevacizumab disposition parameters; its numeric values are exposure-response estimates. |
| popPK | Petitcollin_2021 | relevant | 9 | 4 | Human population PK is reported and an approximate half-life (~14 days) is given, but detailed numeric parameter estimates are not present. |
| popPK | Peña-Cabia_2021 | irrelevant | 1 | 0 | The study relates bevacizumab trough concentrations to outcomes but reports no quantitative disposition parameters. |
| popPK | Rietveld_2024 | irrelevant | 2 | 0 | Human bevacizumab exposure ratios are reported, but no quantitative disposition parameters are provided. |
| popPK | Rietveld_2024_2 | irrelevant | 0 | 0 | Bevacizumab is only co-administered; the reported PK parameters are for irinotecan and SN-38. |
| popPK | Rocchetti_2013 | irrelevant | 2 | 0 | The model describes tumor-growth effects, with no quantitative bevacizumab disposition parameters reported in the evidence. |
| popPK | Wang_2014 | irrelevant | 0 | 0 | Bevacizumab is a comparator in binding and efficacy experiments, with no quantitative disposition or population-PK parameters reported. |
| popPK | Xin_2012 | irrelevant | 1 | 0 | Bevacizumab is only a combination agent; the reported PK model is for MNRP1685A, with no bevacizumab disposition values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:15 UTC</sub>
