<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;brentuximab vedotin&quot;}]"></div>

# brentuximab vedotin

- **generic name:** brentuximab vedotin
- **ATC codes:** `L01FX05`
- **DrugBank:** [DB08870](https://go.drugbank.com/drugs/DB08870) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Brentuximab vedotin is an antibody-drug conjugate used to treat lymphoma, including Hodgkin lymphoma and several types of T-cell and non-Hodgkin lymphoma. It is approved and authorised in the European Union, and is also being investigated for additional uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422324](https://www.wikidata.org/wiki/Q422324) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| DM1 | metabolite | — (mass units only) | — | — | — | — |
| MMAE | metabolite | 718 | — | the paper | — | Li_2017 |
| monomethyl auristatin E (monomethyl_auristatin_E) | metabolite | 717.993 | C39H67N5O7 | PubChem | [11542188](https://pubchem.ncbi.nlm.nih.gov/compound/11542188) | Suri_2018, Suri_2019, Suri_2020 |
| monomethyl auristatin E (MMAE) | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 18:32 | 4:35 | 0/2/3 | 0/0/0 | 0/0/0 | 249,698/22,924 | einfracz / qwen3.8-27b | 7 | 0/7 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.03), qwen3.8-27b (not confirmed, agreement 0.0). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q67 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Li_2017_reference](drugs/drug_brentuximab_vedotin/BrentuximabVedotin_Li2017_reference.md) | — | parent + metabolite (no model) | 15 | Li H et al., Population Pharmacokinetics of Brentuxi…, Journal of clinical pharmac… (2017) | [10.1002/jcph.920](https://doi.org/10.1002/jcph.920) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.062), qwen3.8-27b (not confirmed, agreement 0.154). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q63 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Suri_2019_reference](drugs/drug_brentuximab_vedotin/BrentuximabVedotin_Suri2019_reference.md) | — | parent + metabolite (no model) | 3 | Suri A et al., Population Pharmacokinetic Modeling and…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1530](https://doi.org/10.1002/cpt.1530) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25), qwen3.8-27b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Suri_2020_reference](drugs/drug_brentuximab_vedotin/BrentuximabVedotin_Suri2020_reference.md) | — | parent + metabolite (no model) | 2 | Suri A et al., Population Pharmacokinetics of Brentuxi…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1682](https://doi.org/10.1002/jcph.1682) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25), qwen3.8-27b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ait-Oudhia_2017_reference](drugs/drug_brentuximab_vedotin/BrentuximabVedotin_AitOudhia2017_reference.md) | — | general linear (no model) | 0 | Ait-Oudhia S et al., A Mechanism-Based PK/PD Model for Hemat…, The AAPS journal (2017) | [10.1208/s12248-017-0113-5](https://doi.org/10.1208/s12248-017-0113-5) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2), qwen3.8-27b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Suri_2018_reference](drugs/drug_brentuximab_vedotin/BrentuximabVedotin_Suri2018_reference.md) | — | parent + metabolite (no model) | 3 | Suri A et al., Population PK and Exposure-Response Rel…, Clinical pharmacology and t… (2018) | [10.1002/cpt.1037](https://doi.org/10.1002/cpt.1037) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=brentuximab_vedotin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ABCB5 (substrate), TNFRSF8 (antibody), TNFRSF8 (binder), TNFRSF8 (regulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 20 returned
- **screened:** 5  ·  **relevant:** 4
- **records:** 5  ·  extracted 0  ·  needs_review 3  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Flerlage_2016.pdf` | Flerlage JE et al., Pharmacokinetics, immunogenicity, and s…, Cancer chemotherapy and pha… (2016) | popPK | 10 | [10.1007/s00280-016-3180-x](https://doi.org/10.1007/s00280-016-3180-x) | [27837256](https://pubmed.ncbi.nlm.nih.gov/27837256) | The paper describes a population PK model and reports qualitative findings on correlations (weight, gender) and relative exposure differences, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| `Zhang_2024.pdf` | Zhang D et al., Time-varying brentuximab vedotin pharma…, British journal of clinical… (2024) | popPK | 10 | [10.1111/bcp.16128](https://doi.org/10.1111/bcp.16128) | [38866401](https://pubmed.ncbi.nlm.nih.gov/38866401) | The paper describes a population PK model for brentuximab vedotin, but the provided abstract evidence lacks specific numeric parameter values (e.g., CL, V) which are likely in the full text or tables. |
| `Shah_2012.pdf` | Shah DK et al., Bench to bedside translation of antibod…, Journal of pharmacokinetics… (2012) | popPK | 8 | [10.1007/s10928-012-9276-y](https://doi.org/10.1007/s10928-012-9276-y) | [23151991](https://pubmed.ncbi.nlm.nih.gov/23151991) | The study reports a mechanistic PK/PD model for brentuximab vedotin in mice and humans, but the extracted evidence contains only descriptive text without specific numeric parameter values. |

<sub>queue written 2026-10-14T18:28:17.511942+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ait-Oudhia_2017 | irrelevant | 1 | 0 | The study focuses on a mechanistic PK/PD model for hematological toxicity and reports a payload release rate constant ($k_{rel}$) rather than standard quantitative disposition parameters (CL, V, Q) for brentuximab vedotin itself, and no specific numeric PK values are present in the provided evidence. |
| popPK | Flerlage_2016 | relevant | 10 | 0 | The paper describes a population PK model and reports qualitative findings on correlations (weight, gender) and relative exposure differences, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| popPK | Hedrich_2018 | irrelevant | 2 | 0 | The paper is a review article discussing ADCs generally and mentions brentuximab vedotin only as an approved therapy without providing original quantitative PK parameter values. |
| popPK | Lhospice_2015 | irrelevant | 0 | 0 | The paper studies novel cAC10-based ADCs as comparators to brentuximab vedotin (ADCETRIS) and focuses on biodistribution/toxicology rather than reporting quantitative population-PK parameters (CL, V, Q) for brentuximab vedotin itself. |
| popPK | Liao_2024 | irrelevant | 1 | 0 | The study focuses on polatuzumab vedotin as the subject drug, using brentuximab vedotin only as a comparator/reference, and no numeric PK values for brentuximab vedotin are provided. |
| popPK | Liu-Kreyche_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of efflux transporters and cytotoxicity, reporting no pharmacokinetic parameters such as clearance or volume for brentuximab vedotin. |
| popPK | Sapra_2013 | irrelevant | 3 | 0 | This is a review article that discusses PK/PD models for brentuximab vedotin but does not contain original quantitative parameter values or extractable data in the provided evidence. |
| popPK | Shah_2012 | relevant | 8 | 0 | The study reports a mechanistic PK/PD model for brentuximab vedotin in mice and humans, but the extracted evidence contains only descriptive text without specific numeric parameter values. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The study is a meta-analysis of survival outcomes (OS/PFS) and does not report any pharmacokinetic parameters such as clearance or volume for brentuximab vedotin. |
| popPK | Zhang_2024 | relevant | 10 | 2 | The paper describes a population PK model for brentuximab vedotin, but the provided abstract evidence lacks specific numeric parameter values (e.g., CL, V) which are likely in the full text or tables. |
| popPK | Zhang_2024_2 | irrelevant | 4 | 2 | The study reports population PK exposure metrics (AUC, Cmax, Cave) and covariate effects (body weight) but does not report specific quantitative disposition parameters like clearance (CL), volume (V), or intercompartmental clearance (Q) for the subject drug in the provided text. |
| popPK | Zhou_2025 | relevant | 10 | 2 | This is a population PK study for brentuximab vedotin, but the final model parameter values (CL, V, Q) are explicitly stated to be in Tables S1 and S2, which are not included in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 18:28 UTC</sub>
