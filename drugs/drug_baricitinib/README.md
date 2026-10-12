<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;baricitinib&quot;}]"></div>

# baricitinib

- **generic name:** baricitinib
- **ATC codes:** `L04AA37`, `L04AF02`
- **DrugBank:** [DB11817](https://go.drugbank.com/drugs/DB11817) · **PubChem:** [CID 44205240](https://pubchem.ncbi.nlm.nih.gov/compound/44205240)
- **molar mass:** 371.42 g/mol (C16H17N7O2S) — DrugBank
- **groups:** approved, investigational

## About

Baricitinib is a JAK inhibitor used to treat rheumatoid arthritis and, in some settings, COVID-19. It is an approved medicine and is authorised in the European Union for rheumatoid arthritis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4860707](https://www.wikidata.org/wiki/Q4860707) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| baricitinib | parent | 371.42 | C16H17N7O2S | DrugBank | [44205240](https://pubchem.ncbi.nlm.nih.gov/compound/44205240) | Decker_2024, Decker_2026 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:49 | 3:26 | 0/4/0 | 2/0/0 | 0/0/0 | 268,085/13,929 | einfracz / qwen3.8-27b | 9 | 0/9 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.812). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Decker_2024_jia_a](drugs/drug_baricitinib/Baricitinib_Decker2024_jia_a.md) | — | 3-compartment (no model) | 9 | Decker RL et al., A population pharmacokinetic model usin…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13131](https://doi.org/10.1002/psp4.13131) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Decker_2024_population_mean_see](drugs/drug_baricitinib/Baricitinib_Decker2024_population_mean_see.md) | — | 3-compartment (no model) | 9 (+2 cov.) | Decker RL et al., A population pharmacokinetic model usin…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13131](https://doi.org/10.1002/psp4.13131) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.786). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Decker_2024_ra_b](drugs/drug_baricitinib/Baricitinib_Decker2024_ra_b.md) | — | 3-compartment (no model) | 7 | Decker RL et al., A population pharmacokinetic model usin…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13131](https://doi.org/10.1002/psp4.13131) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Decker_2026_reference](drugs/drug_baricitinib/Baricitinib_Decker2026_reference.md) | — | 3-compartment (no model) | 9 (+1 cov.) | Decker RL et al., A Population Pharmacokinetic and Exposu…, Clinical pharmacokinetics (2026) | [10.1007/s40262-025-01563-8](https://doi.org/10.1007/s40262-025-01563-8) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> | [Vaskeikina_2026_mRSS](drugs/drug_baricitinib/pd_Vaskeikina_2026_mRSS.md) | modified Rodnan skin score ← baricitinib · direct Emax (saturable) effect | — | Vaskeikina M et al., Systematic Review and Model-Based Meta-…, Pharmaceutics (2026) | [10.3390/pharmaceutics18020250](https://doi.org/10.3390/pharmaceutics18020250) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.364). Primary extraction retained.">cross-check: disputed</span> | [Zhang_2017_Hgb](drugs/drug_baricitinib/pd_Zhang_2017_Hgb.md) | Hemoglobin ← baricitinib · delayed effect through transit (transduction) compartments | — | Zhang X et al., Dose/Exposure-Response Modeling to Supp…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12251](https://doi.org/10.1002/psp4.12251) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> | [Zhang_2017_ACRL](drugs/drug_baricitinib/pd_Zhang_2017_ACRL.md) | ACR20/50/70 response rate (latent variable ACRL) ← baricitinib · indirect response — drug inhibits the production of ACR20/50/70 response rate (latent variable ACRL) | — | Zhang X et al., Dose/Exposure-Response Modeling to Supp…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12251](https://doi.org/10.1002/psp4.12251) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 13 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kim_2018.pdf` | Kim H et al., Pharmacokinetics, Pharmacodynamics, and…, Clinical pharmacology and t… (2018) | popPK | 9 | [10.1002/cpt.936](https://doi.org/10.1002/cpt.936) | [29134648](https://pubmed.ncbi.nlm.nih.gov/29134648) | The paper describes a population PK model for baricitinib and reports summary exposure metrics (AUC) and qualitative covariate effects, but specific quantitative parameter estimates (CL, V, Q, ka, t1/2) are not provided in the evidence text. |

<sub>queue written 2026-10-06T23:46:36.201202+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adami_2025 | irrelevant | 0 | 0 | The paper is a clinical analysis of glucocorticoid sparing effects in RA patients and does not report any pharmacokinetic parameters for baricitinib. |
| popPK | Bayat_2022 | irrelevant | 0 | 0 | The study is a clinical efficacy and drug persistence analysis in rheumatoid arthritis patients and does not report any pharmacokinetic parameters for baricitinib. |
| popPK | Kim_2018 | relevant | 9 | 2 | The paper describes a population PK model for baricitinib and reports summary exposure metrics (AUC) and qualitative covariate effects, but specific quantitative parameter estimates (CL, V, Q, ka, t1/2) are not provided in the evidence text. |
| popPK | Qi_2025 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for vitiligo treatment and does not report any pharmacokinetic parameters for baricitinib. |
| popPK | Rotbain_2023 | irrelevant | 0 | 0 | The study measures the effect of baricitinib on a biomarker (suPAR) and does not report pharmacokinetic disposition parameters. |
| popPK | Sonomoto_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety comparison study that does not report any pharmacokinetic parameters for baricitinib. |
| popPK | Tachet_2025 | irrelevant | 2 | 0 | This is a study protocol that describes the methods for a future pharmacokinetic study; it contains no actual numerical parameter values or model estimates. |
| popPK | Temiz_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study in rheumatoid arthritis and reports no pharmacokinetic parameters (clearance, volume, half-life, etc.). |
| popPK | Vaskeikina_2026 | irrelevant | 0 | 0 | The paper is a model-based meta-analysis of clinical efficacy endpoints (mRSS and FVC) in systemic sclerosis, not a pharmacokinetic study, and contains no PK parameters for baricitinib. |
| popPK | Zhang_2017 | relevant | 8 | 2 | The study reports a population PK model for baricitinib and estimates a terminal half-life of ~14 hours, but the detailed numeric parameters (CL, V, Q, ka) are explicitly stated to be in Supplementary Table S1 which is not provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:46 UTC</sub>
