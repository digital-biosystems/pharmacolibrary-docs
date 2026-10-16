<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;atezolizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atezolizumab_Chan2025_reference&quot;,&quot;label&quot;:&quot;Chan_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atezolizumab/Atezolizumab_Chan2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atezolizumab_Shemesh2019_adult_model_estimate&quot;,&quot;label&quot;:&quot;Shemesh_2019_adult_model_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atezolizumab/Atezolizumab_Shemesh2019_adult_model_estimate.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atezolizumab_Shemesh2019_pediatric_young_adult_model_estimat&quot;,&quot;label&quot;:&quot;Shemesh_2019_pediatric_young_adult_model_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atezolizumab/Atezolizumab_Shemesh2019_pediatric_young_adult_model_estimat.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# atezolizumab

- **generic name:** atezolizumab
- **ATC codes:** `L01FF05`, `L01XC32`
- **DrugBank:** [DB11595](https://go.drugbank.com/drugs/DB11595) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Atezolizumab is a monoclonal antibody that blocks PD-L1 and is used to treat several cancers, including bladder, lung, breast, and colorectal cancers. It is approved and authorised in the European Union, where it is used in cancer care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20707748](https://www.wikidata.org/wiki/Q20707748) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 18:05 | 8:24 | 0/4/3 | 1/0/0 | 0/0/0 | 346,238/23,858 | einfracz / qwen3.8-27b | 10 | 1/9 | 9/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.542). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Chan_2025_reference](drugs/drug_atezolizumab/Atezolizumab_Chan2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+3 cov.) | Chan P et al., Population Pharmacokinetics and Exposur…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13310](https://doi.org/10.1002/psp4.13310) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T1_cmax</sub><br><sub>route_to: `scholar`</sub> | [Shemesh_2019_adult_model_estimate](drugs/drug_atezolizumab/Atezolizumab_Shemesh2019_adult_model_estimate.md) | ▶ model + simulator | 2-compartment, IV | 4 (+7 cov.) | Shemesh CS et al., Population pharmacokinetics, exposure-s…, Journal for immunotherapy o… (2019) | [10.1186/s40425-019-0791-x](https://doi.org/10.1186/s40425-019-0791-x) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T1_cmax</sub><br><sub>route_to: `scholar`</sub> | [Shemesh_2019_pediatric_young_adult_model_estimate](drugs/drug_atezolizumab/Atezolizumab_Shemesh2019_pediatric_young_adult_model_estimat.md) | ▶ model + simulator | 2-compartment, IV | 4 (+5 cov.) | Shemesh CS et al., Population pharmacokinetics, exposure-s…, Journal for immunotherapy o… (2019) | [10.1186/s40425-019-0791-x](https://doi.org/10.1186/s40425-019-0791-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.615). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Netterberg_2019_reference](drugs/drug_atezolizumab/Atezolizumab_Netterberg2019_reference.md) | — | general linear (no model) | 2 | Netterberg I et al., A PK/PD Analysis of Circulating Biomark…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1198](https://doi.org/10.1002/cpt.1198) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Shemesh_2020_ttmb_16_mut_mb](drugs/drug_atezolizumab/Atezolizumab_Shemesh2020_ttmb_16_mut_mb.md) | — | 1-compartment (no model) | 6 | Shemesh CS et al., Pan-cancer population pharmacokinetics…, Pharmacology research & per… (2020) | [10.1002/prp2.685](https://doi.org/10.1002/prp2.685) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.889). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Shemesh_2020_ttmb_16_mut_mb_2](drugs/drug_atezolizumab/Atezolizumab_Shemesh2020_ttmb_16_mut_mb_2.md) | — | 1-compartment (no model) | 5 | Shemesh CS et al., Pan-cancer population pharmacokinetics…, Pharmacology research & per… (2020) | [10.1002/prp2.685](https://doi.org/10.1002/prp2.685) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.571). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Stroh_2017_reference](drugs/drug_atezolizumab/Atezolizumab_Stroh2017_reference.md) | — | 1-compartment (no model) | 0 | Stroh M et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacology and t… (2017) | [10.1002/cpt.587](https://doi.org/10.1002/cpt.587) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Netterberg_2019_IL_18](drugs/drug_atezolizumab/pd_Netterberg_2019_IL_18.md) | interleukin 18 ← atezolizumab · indirect response — drug stimulates the production of interleukin 18 | — | Netterberg I et al., A PK/PD Analysis of Circulating Biomark…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1198](https://doi.org/10.1002/cpt.1198) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Netterberg_2019_ITAC](drugs/drug_atezolizumab/pd_Netterberg_2019_ITAC.md) | interferon-inducible T-cell alpha chemoattractant ← atezolizumab · indirect response — drug stimulates the production of interferon-inducible T-cell alpha chemoattractant | — | Netterberg I et al., A PK/PD Analysis of Circulating Biomark…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1198](https://doi.org/10.1002/cpt.1198) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Netterberg_2019_SLD](drugs/drug_atezolizumab/pd_Netterberg_2019_SLD.md) | tumor size (sum of the longest diameter) ← atezolizumab · disease-progression model | — | Netterberg I et al., A PK/PD Analysis of Circulating Biomark…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1198](https://doi.org/10.1002/cpt.1198) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Netterberg_2019_dropout](drugs/drug_atezolizumab/pd_Netterberg_2019_dropout.md) | dropout ← none · time-to-event model | — | Netterberg I et al., A PK/PD Analysis of Circulating Biomark…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1198](https://doi.org/10.1002/cpt.1198) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=atezolizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD274 (antibody), CD274 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 34 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 7  ·  extracted 0  ·  needs_review 3  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Marchand_2021.pdf` | Marchand M et al., Time-dependent population PK models of…, Cancer chemotherapy and pha… (2021) | popPK | 10 | [10.1007/s00280-021-04276-4](https://doi.org/10.1007/s00280-021-04276-4) | [33904970](https://pubmed.ncbi.nlm.nih.gov/33904970) | The paper is a population PK study of atezolizumab in humans, but the provided evidence contains only qualitative descriptions of model covariates and relative changes, lacking specific numeric parameter estimates (CL, V, etc.). |
| `Stroh_2017.pdf` | Stroh M et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacology and t… (2017) | popPK | 10 | [10.1002/cpt.587](https://doi.org/10.1002/cpt.587) | [27981577](https://pubmed.ncbi.nlm.nih.gov/27981577) | The evidence explicitly reports numeric population PK parameters (clearance, volume, half-life) for atezolizumab in humans. |
| `Peer_2023.pdf` | Peer CJ et al., In Silico Re-Optimization of Atezolizum…, Journal of clinical pharmac… (2023) | popPK | 8 | [10.1002/jcph.2203](https://doi.org/10.1002/jcph.2203) | [36624662](https://pubmed.ncbi.nlm.nih.gov/36624662) | The paper is a PK simulation study for atezolizumab, but it reports derived exposure metrics (CMIN, AUC) and statistical associations rather than raw compartmental parameter estimates (CL, V, Q) in the provided text. |
| `Gimeno-Ballester_2026.pdf` | Gimeno-Ballester V et al., Pharmacokinetic insights into atezolizu…, Clinical & translational on… (2026) | popPK | 5 | [10.1007/s12094-026-04284-x](https://doi.org/10.1007/s12094-026-04284-x) | [41790429](https://pubmed.ncbi.nlm.nih.gov/41790429) | The study uses a population PK model for atezolizumab but only reports simulated concentration outputs (CMIN), not the underlying disposition parameter values (CL, V) in the provided evidence. |

<sub>queue written 2026-10-14T17:58:14.197893+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bielski_2025 | irrelevant | 0 | 0 | The study is an in-vitro efficacy and binding characterization of bispecific antibodies using atezolizumab only as a reference/comparator, with no population pharmacokinetic modeling or disposition parameters reported. |
| popPK | De_2019 | irrelevant | 1 | 0 | The study is an in vitro mechanistic assessment of binding potency (EC50) and does not report pharmacokinetic disposition parameters (CL, V, etc.) for atezolizumab. |
| popPK | Delahousse_2024 | irrelevant | 3 | 0 | This is a systematic review of sex differences in PK for multiple drugs; while it mentions atezolizumab, the specific quantitative PK parameters for atezolizumab are likely in the supplementary tables or original source studies, not clearly present in the provided text. |
| popPK | Desnoyer_2020 | irrelevant | 2 | 0 | This is a review article summarizing general PK characteristics of immune checkpoint inhibitors without providing specific original quantitative PK parameter values for atezolizumab. |
| popPK | Gimeno-Ballester_2026 | relevant | 5 | 1 | The study uses a population PK model for atezolizumab but only reports simulated concentration outputs (CMIN), not the underlying disposition parameter values (CL, V) in the provided evidence. |
| popPK | Goldstein_2019 | irrelevant | 0 | 0 | no_text gate: only 362 chars of text extracted (&lt; 400) |
| popPK | Gopal_2021 | irrelevant | 0 | 0 | The paper is an in-vitro study of a 3D tumor spheroid platform for NK-cell cytotoxicity where atezolizumab is used as a co-treatment agent to assess efficacy, not to model its pharmacokinetics. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and efficacy of a novel TCB (MSLN490/MSLN530) in mice, with atezolizumab used only as a co-administered comparator agent in tumor models; no PK parameters for atezolizumab are reported. |
| popPK | Marchand_2021 | relevant | 10 | 1 | The paper is a population PK study of atezolizumab in humans, but the provided evidence contains only qualitative descriptions of model covariates and relative changes, lacking specific numeric parameter estimates (CL, V, etc.). |
| popPK | Peer_2023 | relevant | 8 | 1 | The paper is a PK simulation study for atezolizumab, but it reports derived exposure metrics (CMIN, AUC) and statistical associations rather than raw compartmental parameter estimates (CL, V, Q) in the provided text. |
| popPK | Xiao_2021 | irrelevant | 0 | 0 | The study focuses on the development and in vitro/in vivo efficacy of an Atezolizumab ADC, not the population pharmacokinetics or disposition parameters of the parent drug. |
| popPK | Zeng_2026 | irrelevant | 4 | 0 | The paper is a simulation and software comparison study that does not report original quantitative disposition parameters (CL, V, Q, ka) for atezolizumab, relying on a pre-existing model not detailed in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 17:58 UTC</sub>
