<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;vedolizumab&quot;}]"></div>

# vedolizumab

- **generic name:** vedolizumab
- **ATC codes:** `L04AG05`
- **DrugBank:** [DB09033](https://go.drugbank.com/drugs/DB09033) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Vedolizumab is a monoclonal antibody immunosuppressant used to treat ulcerative colitis and Crohn's disease. It is authorised in the European Union and is also being investigated for other conditions such as graft-versus-host disease.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7918002](https://www.wikidata.org/wiki/Q7918002) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:35 | 2:54 | 0/4/1 | 0/0/1 | 0/0/0 | 155,701/7,724 | einfracz / qwen3.8-27b | 8 | 1/7 | 8/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C1_half_life_beta failed (ratio 0.5504)</sub><br><sub>route_to: `human_review`</sub> | [Rosario_2017_reference](drugs/drug_vedolizumab/Vedolizumab_Rosario2017_reference.md) | — | 1-compartment (no model) | 7 | Rosario M et al., A Review of the Clinical Pharmacokineti…, Clinical pharmacokinetics (2017) | [10.1007/s40262-017-0546-0](https://doi.org/10.1007/s40262-017-0546-0) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hanzel_2022_reference](drugs/drug_vedolizumab/Vedolizumab_Hanzel2022_reference.md) | — | nonlinear / manual (no model) | 0 | Hanzel J et al., Pharmacokinetic-Pharmacodynamic Model o…, Inflammatory bowel diseases (2022) | [10.1093/ibd/izab143](https://doi.org/10.1093/ibd/izab143) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.615). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Okamoto_2021_reference](drugs/drug_vedolizumab/Vedolizumab_Okamoto2021_reference.md) | — | 3-compartment (no model) | 7 (+7 cov.) | Okamoto H et al., Population pharmacokinetics of vedolizu…, Intestinal research (2021) | [10.5217/ir.2019.09167](https://doi.org/10.5217/ir.2019.09167) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Rosario_2015_reference](drugs/drug_vedolizumab/Vedolizumab_Rosario2015_reference.md) | — | 1-compartment (no model) | 0 | Rosario M et al., Population pharmacokinetics-pharmacodyn…, Alimentary pharmacology & t… (2015) | [10.1111/apt.13243](https://doi.org/10.1111/apt.13243) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Waterhouse_2024_reference](drugs/drug_vedolizumab/Vedolizumab_Waterhouse2024_reference.md) | — | 1-compartment (no model) | 1 | Waterhouse T et al., Population pharmacokinetic modeling of…, Pharmacology research & per… (2024) | [10.1002/prp2.1257](https://doi.org/10.1002/prp2.1257) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hanzel_2022_SES_CD](drugs/drug_vedolizumab/pd_Hanzel_2022_SES_CD.md) | endoscopic remission (SES-CD &lt; 4) ← vedolizumab · categorical (graded) response model | — | Hanzel J et al., Pharmacokinetic-Pharmacodynamic Model o…, Inflammatory bowel diseases (2022) | [10.1093/ibd/izab143](https://doi.org/10.1093/ibd/izab143) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vedolizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ITGA4 (antibody), ITGB7 (antibody).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 29 matched, 16 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 0  ·  needs_review 1  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Colman_2023.pdf` | Colman RJ et al., Real world population pharmacokinetic s…, Alimentary pharmacology & t… (2023) | popPK | 10 | [10.1111/apt.17277](https://doi.org/10.1111/apt.17277) | [36314265](https://pubmed.ncbi.nlm.nih.gov/36314265) | The study is a population pharmacokinetic analysis of vedolizumab in humans, but specific numeric parameter values (CL, V, etc.) are not provided in the abstract evidence. |
| `Kimura_2026.pdf` | Kimura K et al., Pharmacokinetic and pharmacodynamic mod…, The Journal of pharmacy and… (2026) | popPK | 9 | [10.1093/jpp/rgaf123](https://doi.org/10.1093/jpp/rgaf123) | [41400216](https://pubmed.ncbi.nlm.nih.gov/41400216) | The paper describes a PK/PD model for vedolizumab in Crohn's disease, but the specific quantitative PK parameter values (CL, V, etc.) are not present in the provided evidence, which focuses on model diagnostics and MIPD application. |
| `DHaens_2024.pdf` | D'Haens G et al., Exposure-efficacy relationship of vedol…, Expert review of clinical p… (2024) | popPK | 7 | [10.1080/17512433.2024.2318465](https://doi.org/10.1080/17512433.2024.2318465) | [38441048](https://pubmed.ncbi.nlm.nih.gov/38441048) | The paper utilizes a population PK model to generate predicted exposure metrics (Cav,ss, Ctrough,ss) to assess efficacy, but the specific parameter values (CL, V, etc.) are not listed in the provided evidence, only the resulting exposure means/trends. |

<sub>queue written 2026-10-14T23:33:00.643894+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Colman_2023 | relevant | 10 | 2 | The study is a population pharmacokinetic analysis of vedolizumab in humans, but specific numeric parameter values (CL, V, etc.) are not provided in the abstract evidence. |
| popPK | DHaens_2024 | relevant | 7 | 2 | The paper utilizes a population PK model to generate predicted exposure metrics (Cav,ss, Ctrough,ss) to assess efficacy, but the specific parameter values (CL, V, etc.) are not listed in the provided evidence, only the resulting exposure means/trends. |
| popPK | Hanzel_2022_2 | irrelevant | 0 | 0 | The provided text is a corrigendum correcting a reference citation and does not contain any pharmacokinetic data or parameter values. |
| popPK | Kimura_2026 | relevant | 9 | 0 | The paper describes a PK/PD model for vedolizumab in Crohn's disease, but the specific quantitative PK parameter values (CL, V, etc.) are not present in the provided evidence, which focuses on model diagnostics and MIPD application. |
| popPK | Roblin_2024 | irrelevant | 0 | 0 | The paper is a review of therapeutic drug monitoring strategies in IBD and does not report original quantitative pharmacokinetic parameter values (CL, V, Q, etc.) for vedolizumab. |
| popPK | Soler_2009 | irrelevant | 0 | 0 | The paper describes the binding specificity and mechanistic pharmacology of vedolizumab, not quantitative pharmacokinetic disposition parameters. |
| popPK | Steenholdt_2025 | irrelevant | 1 | 0 | This is a clinical cohort study on treatment sequencing and outcomes that uses vedolizumab trough concentrations only to classify failure mechanisms (PK vs PD), rather than reporting quantitative PK parameters like clearance or volume. |
| popPK | Vande_2022 | irrelevant | 0 | 0 | The evidence contains only metadata from a text extraction tool and does not mention vedolizumab or any pharmacokinetic data. |
| popPK | unknown_2015 | irrelevant | 1 | 0 | This is a corrigendum regarding a unit error in a previously published paper and does not contain original pharmacokinetic parameter values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:33 UTC</sub>
