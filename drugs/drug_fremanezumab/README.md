<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;fremanezumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fremanezumab_Jones2021_reference&quot;,&quot;label&quot;:&quot;Jones_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fremanezumab/Fremanezumab_Jones2021_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fremanezumab_FiedlerKelly2019_reference&quot;,&quot;label&quot;:&quot;Fiedler-Kelly_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-10-15 04:16 | 2:41 | 1/2/1 | 1/0/0 | 0/0/4 | 166,469/7,944 | einfracz / qwen3.8-27b | 10 | 0/10 | 8/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Jones_2021_reference](drugs/drug_fremanezumab/Fremanezumab_Jones2021_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+2 cov.) | Jones A et al., Scaling Approaches for Pediatric Dose S…, Pharmaceutics (2021) | [10.3390/pharmaceutics13060785](https://doi.org/10.3390/pharmaceutics13060785) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.923), gpt-oss:120b (partly confirmed, agreement 0.5). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T1_t_half_terminal</sub><br><sub>route_to: `scholar`</sub> | [Fiedler-Kelly_2019_reference](drugs/drug_fremanezumab/Fremanezumab_FiedlerKelly2019_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 (+2 cov.) | Fiedler-Kelly JB et al., Population pharmacokinetic modelling an…, British journal of clinical… (2019) | [10.1111/bcp.14096](https://doi.org/10.1111/bcp.14096) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Iannone_2026_adults](drugs/drug_fremanezumab/Fremanezumab_Iannone2026_adults.md) | — | 1-compartment (no model) | 0 | Iannone LF et al., Pharmacokinetics and Pharmacodynamics,…, European journal of drug me… (2026) | [10.1007/s13318-026-00990-7](https://doi.org/10.1007/s13318-026-00990-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Iannone_2026_children_adolescents_6_17_years](drugs/drug_fremanezumab/Fremanezumab_Iannone2026_children_adolescents_6_17_years.md) | — | 1-compartment (no model) | 0 | Iannone LF et al., Pharmacokinetics and Pharmacodynamics,…, European journal of drug me… (2026) | [10.1007/s13318-026-00990-7](https://doi.org/10.1007/s13318-026-00990-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.00).">in vitro</span> | [Ohlsson_2018_dilatation](drugs/drug_fremanezumab/pd_Ohlsson_2018_dilatation.md) | dilatation ← fremanezumab · inhibition effect | — | Ohlsson L et al., Fremanezumab blocks CGRP induced dilata…, The journal of headache and… (2018) | [10.1186/s10194-018-0905-8](https://doi.org/10.1186/s10194-018-0905-8) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **ATAD2B** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [An_2024](drugs/drug_fremanezumab/pgx_An_2024_ATAD2B_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **LRRC4C** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [An_2024](drugs/drug_fremanezumab/pgx_An_2024_LRRC4C_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **OXR1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [An_2024](drugs/drug_fremanezumab/pgx_An_2024_OXR1_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **unknown** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [An_2024](drugs/drug_fremanezumab/pgx_An_2024_unknown_Q100.md) | An YC et al., Genetic variants associated with respon…, The journal of headache and… (2024) | [10.1186/s10194-024-01850-y](https://doi.org/10.1186/s10194-024-01850-y) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fremanezumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ATAD2B (unknown), CALCA (antibody), CALCA (binder), CALCB (antibody), CALCB (binder), CALCRL (modulator), LRRC4C (unknown), OXR1 (unknown), UNKNOWN (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 7  ·  **relevant:** 3
- **records:** 4  ·  extracted 1  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | An_2024 | not_relevant | 6 | 4 | The paper reports genetic effects on pharmacodynamic efficacy (migraine day improvement), but lacks data on pharmacokinetic parameters and does not provide specific effect size estimates in extractable format, falling short of a robust pharmacogenomic PK/PD model. |
| PD | Bigal_2018 | not_relevant | 1 | 0 | The text is a narrative review summarizing the development and pharmacology of fremanezumab but does not present specific numeric PD parameters or extractable exposure-response data. |
| popPK | Cho_2026 | irrelevant | 0 | 0 | This is a real-world effectiveness and safety study measuring clinical response (headache days) and safety outcomes, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka, etc.). |
| popPK | Cohen-Barak_2021 | irrelevant | 1 | 0 | The evidence describes a model structure and dose recommendation but does not provide any quantitative numeric PK parameter values (e.g., clearance, volume) in the text. |
| PD | Cohen_2021 | not_relevant | 0 | 0 | The paper is a review of immunogenicity (anti-drug antibodies) and does not report any pharmacodynamic or exposure-response models or numeric PD parameters for fremanezumab. |
| popPK | Fiedler-Kelly_2020 | relevant | 4 | 2 | The paper describes an Exposure-Response (E-R) analysis that relies on a population PK model for fremanezumab (2-compartment, 1st-order absorption) and mentions a ~30-day half-life, but the specific numeric PK parameter values (CL, V, Q) are in a separate reference or supplementary material not fully detailed in the provided text. |
| PD | Grell_2019 | not_relevant | 2 | 0 | The paper describes a qualitative in vitro mechanistic study showing inhibition of vasodilation but does not provide numeric concentration-effect data, curves, or PD parameters. |
| PD | Kopruszinski_2020 | not_relevant | 1 | 0 | The paper focuses on a novel PAR2 antibody (PAR650097) and only qualitatively mentions fremanezumab's effect on allodynia without providing any numeric PD parameters, concentration-effect curves, or dose-response data for fremanezumab. |
| PD | Pistolesi_2025 | not_relevant | 3 | 1 | The paper describes qualitative in vitro concentration-dependent effects and in vivo safety outcomes but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response model for fremanezumab. |
| PD | Sung_2025 | not_relevant | 0 | 0 | The paper describes the development of an immunoassay for CGRP using fremanezumab as a capture antibody, reporting analytical parameters (LOD/LOQ) rather than pharmacodynamic exposure-response or dose-response relationships. |
| PGx | Szkutnik-Fiedler_2020 | not_relevant | 0 | 0 | The paper reviews pharmacokinetics and pharmacodynamics of several anti-migraine drugs, but it does not report a pharmacogenomic effect (gene variant/genotype) on these parameters. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The study models clinical efficacy (monthly migraine days) and health-related quality of life, not pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 04:14 UTC</sub>
