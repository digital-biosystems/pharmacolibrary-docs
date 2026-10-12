<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;fremanezumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fremanezumab_FiedlerKelly2019_reference&quot;,&quot;label&quot;:&quot;Fiedler-Kelly_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fremanezumab_Jones2021_previously_developed_adult_model_appl&quot;,&quot;label&quot;:&quot;Jones_2021_previously_developed_adult_model_applied_to_pediatric_data&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fremanezumab_Jones2021_pediatric_model_to_support_phase_3_de&quot;,&quot;label&quot;:&quot;Jones_2021_pediatric_model_to_support_phase_3_development_1&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fremanezumab/Fremanezumab_Jones2021_pediatric_model_to_support_phase_3_de.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# fremanezumab

- **generic name:** fremanezumab
- **ATC codes:** `N02CD03`
- **DrugBank:** [DB14041](https://go.drugbank.com/drugs/DB14041) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Fremanezumab is a monoclonal antibody used to prevent migraine, including migraine with and without aura. It is an approved CGRP-antagonist medicine authorised in the European Union for migraine prevention.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q39048381](https://www.wikidata.org/wiki/Q39048381) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:38 | 3:26 | 2/2/1 | 0/0/0 | 0/0/0 | 140,129/6,122 | einfracz / qwen3.8-27b | 10 | 0/10 | 8/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.923), gpt-oss:120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Fiedler-Kelly_2019_reference](drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+2 cov.) | Fiedler-Kelly JB et al., Population pharmacokinetic modelling an…, British journal of clinical… (2019) | [10.1111/bcp.14096](https://doi.org/10.1111/bcp.14096) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.923), gpt-oss:120b (partly confirmed, agreement 0.923). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Jones_2021_previously_developed_adult_model_applied_to_pediatric_data](drugs/drug_fremanezumab/Fremanezumab_Jones2021_previously_developed_adult_model_appl.md) | ▶ model + simulator | 2-compartment, oral | 6 (+2 cov.) | Jones A et al., Scaling Approaches for Pediatric Dose S…, Pharmaceutics (2021) | [10.3390/pharmaceutics13060785](https://doi.org/10.3390/pharmaceutics13060785) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.909), gpt-oss:120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Jones_2021_pediatric_model_to_support_phase_3_development_1](drugs/drug_fremanezumab/Fremanezumab_Jones2021_pediatric_model_to_support_phase_3_de.md) | ▶ model + simulator | 2-compartment, oral | 5 (+2 cov.) | Jones A et al., Scaling Approaches for Pediatric Dose S…, Pharmaceutics (2021) | [10.3390/pharmaceutics13060785](https://doi.org/10.3390/pharmaceutics13060785) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Iannone_2026_adults](drugs/drug_fremanezumab/Fremanezumab_Iannone2026_adults.md) | — | 1-compartment (no model) | 0 | Iannone LF et al., Pharmacokinetics and Pharmacodynamics,…, European journal of drug me… (2026) | [10.1007/s13318-026-00990-7](https://doi.org/10.1007/s13318-026-00990-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Iannone_2026_children_adolescents_6_17_years](drugs/drug_fremanezumab/Fremanezumab_Iannone2026_children_adolescents_6_17_years.md) | — | 1-compartment (no model) | 0 | Iannone LF et al., Pharmacokinetics and Pharmacodynamics,…, European journal of drug me… (2026) | [10.1007/s13318-026-00990-7](https://doi.org/10.1007/s13318-026-00990-7) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 7  ·  **relevant:** 3
- **records:** 5  ·  extracted 2  ·  needs_review 1  ·  rejected 2  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cohen-Barak_2021.pdf` | Cohen-Barak O et al., Dose selection for fremanezumab (AJOVY)…, Cephalalgia : an internatio… (2021) | popPK | 9 | [10.1177/03331024211007789](https://doi.org/10.1177/03331024211007789) | [34000848](https://pubmed.ncbi.nlm.nih.gov/34000848) | The paper describes a pediatric population PK study and model for fremanezumab, but the specific numeric parameter estimates are not provided in the text, likely residing in a full paper or supplementary materials not included here. |

<sub>queue written 2026-10-07T15:35:39.153386+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Bigal_2018 | not_relevant | 1 | 0 | The text is a narrative review summarizing the development and pharmacology of fremanezumab but does not present specific numeric PD parameters or extractable exposure-response data. |
| popPK | Cho_2026 | irrelevant | 0 | 0 | The paper is a clinical effectiveness study reporting response rates (reduction in headache days) and does not contain any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Cohen-Barak_2021 | relevant | 9 | 1 | The paper describes a pediatric population PK study and model for fremanezumab, but the specific numeric parameter estimates are not provided in the text, likely residing in a full paper or supplementary materials not included here. |
| PD | Cohen_2021 | not_relevant | 0 | 0 | The paper is a review of immunogenicity (anti-drug antibodies) and does not report any pharmacodynamic or exposure-response models or numeric PD parameters for fremanezumab. |
| popPK | Fiedler-Kelly_2020 | relevant | 5 | 2 | The paper uses a population PK model for fremanezumab to derive exposure metrics for Exposure-Response analysis, but the specific quantitative PK parameter values (CL, V) are in a cited reference or supplementary material, not listed in the text, only the half-life is mentioned. |
| PD | Grell_2019 | not_relevant | 2 | 0 | The paper describes a qualitative in vitro mechanistic study showing inhibition of vasodilation but does not provide numeric concentration-effect data, curves, or PD parameters. |
| PD | Kopruszinski_2020 | not_relevant | 1 | 0 | The paper focuses on a novel PAR2 antibody (PAR650097) and only qualitatively mentions fremanezumab's effect on allodynia without providing any numeric PD parameters, concentration-effect curves, or dose-response data for fremanezumab. |
| PD | Pistolesi_2025 | not_relevant | 3 | 1 | The paper describes qualitative in vitro concentration-dependent effects and in vivo safety outcomes but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response model for fremanezumab. |
| PD | Sung_2025 | not_relevant | 0 | 0 | The paper describes the development of an immunoassay for CGRP using fremanezumab as a capture antibody, reporting analytical parameters (LOD/LOQ) rather than pharmacodynamic exposure-response or dose-response relationships. |
| PGx | Szkutnik-Fiedler_2020 | not_relevant | 0 | 0 | The paper is a review of drug-drug and drug-food interactions, not a report of pharmacogenomic effects on PK/PD parameters. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper models migraine efficacy and health-related quality of life, not the pharmacokinetic or pharmacodynamic disposition parameters of fremanezumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:35 UTC</sub>
