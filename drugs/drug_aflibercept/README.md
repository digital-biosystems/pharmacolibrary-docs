<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;aflibercept&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aflibercept_Thai2013_reference&quot;,&quot;label&quot;:&quot;Thai_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aflibercept/Aflibercept_Thai2013_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# aflibercept

- **generic name:** aflibercept
- **ATC codes:** `L01XX44`, `S01LA05`
- **DrugBank:** [DB08885](https://go.drugbank.com/drugs/DB08885) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Aflibercept is used to treat several eye conditions involving abnormal blood vessel growth or swelling in the retina, such as wet macular degeneration, diabetic retinopathy, macular edema and retinal vein occlusion, and is also used for colorectal cancer. It is an approved medicine, authorised in the European Union for multiple eye and cancer indications, and is widely used in ophthalmology.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4689286](https://www.wikidata.org/wiki/Q4689286) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 04:00 | 3:54 | 1/11/0 | 1/0/0 | 0/0/0 | 232,864/16,984 | einfracz / qwen3.8-27b | 6 | 1/5 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span> | [Thai_2013_reference](drugs/drug_aflibercept/Aflibercept_Thai2013_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Thai HT et al., Population pharmacokinetic analysis of…, Cancer chemotherapy and pha… (2013) | [10.1007/s00280-013-2182-1](https://doi.org/10.1007/s00280-013-2182-1) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Finley_2015_reference](drugs/drug_aflibercept/Aflibercept_Finley2015_reference.md) | — | general linear (no model) | 0 | Finley SD et al., Pharmacokinetics of Anti-VEGF Agent Afl…, CPT: pharmacometrics & syst… (2015) | [10.1002/psp4.12040](https://doi.org/10.1002/psp4.12040) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Luaces-Rodríguez_2020_reference](drugs/drug_aflibercept/Aflibercept_LuacesRodrguez2020_reference.md) | — | 1-compartment (no model) | 8 | Luaces-Rodríguez A et al., PET study of ocular and blood pharmacok…, European journal of pharmac… (2020) | [10.1016/j.ejpb.2020.06.024](https://doi.org/10.1016/j.ejpb.2020.06.024) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Nagaoka_2025_aflibercept](drugs/drug_aflibercept/Aflibercept_Nagaoka2025_aflibercept.md) | — | 1-compartment (no model) | 0 | Nagaoka K et al., Comparative Pharmacokinetic Analysis of…, International journal of mo… (2025) | [10.3390/ijms26020556](https://doi.org/10.3390/ijms26020556) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Nagaoka_2025_brolucizumab](drugs/drug_aflibercept/Aflibercept_Nagaoka2025_brolucizumab.md) | — | 1-compartment (no model) | 0 | Nagaoka K et al., Comparative Pharmacokinetic Analysis of…, International journal of mo… (2025) | [10.3390/ijms26020556](https://doi.org/10.3390/ijms26020556) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Park_2016_reference](drugs/drug_aflibercept/Aflibercept_Park2016_reference.md) | — | 1-compartment (no model) | 0 | Park SJ et al., Intraocular Pharmacokinetics of Intravi…, Investigative ophthalmology… (2016) | [10.1167/iovs.16-19204](https://doi.org/10.1167/iovs.16-19204) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Park_2022_aflibercept](drugs/drug_aflibercept/Aflibercept_Park2022_aflibercept.md) | — | 1-compartment (no model) | 3 | Park S et al., Pharmacokinetic evaluation of radiolabe…, Clinical and translational… (2022) | [10.1111/cts.13412](https://doi.org/10.1111/cts.13412) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Park_2022_anti_clec14a](drugs/drug_aflibercept/Aflibercept_Park2022_anti_clec14a.md) | — | 1-compartment (no model) | 3 | Park S et al., Pharmacokinetic evaluation of radiolabe…, Clinical and translational… (2022) | [10.1111/cts.13412](https://doi.org/10.1111/cts.13412) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Park_2022_mouse](drugs/drug_aflibercept/Aflibercept_Park2022_mouse.md) | — | 1-compartment (no model) | 4 | Park S et al., Pharmacokinetic evaluation of radiolabe…, Clinical and translational… (2022) | [10.1111/cts.13412](https://doi.org/10.1111/cts.13412) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Park_2022_rabbit](drugs/drug_aflibercept/Aflibercept_Park2022_rabbit.md) | — | 1-compartment (no model) | 4 | Park S et al., Pharmacokinetic evaluation of radiolabe…, Clinical and translational… (2022) | [10.1111/cts.13412](https://doi.org/10.1111/cts.13412) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Park_2022_rat](drugs/drug_aflibercept/Aflibercept_Park2022_rat.md) | — | 1-compartment (no model) | 4 | Park S et al., Pharmacokinetic evaluation of radiolabe…, Clinical and translational… (2022) | [10.1111/cts.13412](https://doi.org/10.1111/cts.13412) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Thai_2011_reference](drugs/drug_aflibercept/Aflibercept_Thai2011_reference.md) | — | 1-compartment (no model) | 0 | Thai HT et al., A mechanism-based model for the populat…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.04015.x](https://doi.org/10.1111/j.1365-2125.2011.04015.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Fetterly_2013_intratumoral_DOX_uptake_rate](drugs/drug_aflibercept/pd_Fetterly_2013_intratumoral_DOX_uptake_rate.md) | intratumoral DOX uptake rate ← aflibercept · stimulation effect | — | Fetterly GJ et al., Development of a preclinical PK/PD mode…, The AAPS journal (2013) | [10.1208/s12248-013-9480-8](https://doi.org/10.1208/s12248-013-9480-8) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=aflibercept).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PGF (binder), PGF (inhibitor), VEGFA (binder), VEGFA (inhibitor), VEGFB (binder), VEGFB (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 11 returned
- **screened:** 8  ·  **relevant:** 8
- **records:** 12  ·  extracted 1  ·  needs_review 0  ·  rejected 11  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Park_2016.pdf` | Park SJ et al., Intraocular Pharmacokinetics of Intravi…, Investigative ophthalmology… (2016) | popPK | 10 | [10.1167/iovs.16-19204](https://doi.org/10.1167/iovs.16-19204) | [27258433](https://pubmed.ncbi.nlm.nih.gov/27258433) | The study reports quantitative PK parameters (half-life, MRT, AUC) for aflibercept in rabbits, with all numeric values explicitly listed in the abstract. |
| `Thai_2011.pdf` | Thai HT et al., A mechanism-based model for the populat…, British journal of clinical… (2011) | popPK | 10 | [10.1111/j.1365-2125.2011.04015.x](https://doi.org/10.1111/j.1365-2125.2011.04015.x) | [21575034](https://pubmed.ncbi.nlm.nih.gov/21575034) | The paper reports a population PK model for aflibercept with specific numeric values for clearance, volume of distribution, and binding parameters in healthy subjects. |
| `Thai_2013.pdf` | Thai HT et al., Population pharmacokinetic analysis of…, Cancer chemotherapy and pha… (2013) | popPK | 10 | [10.1007/s00280-013-2182-1](https://doi.org/10.1007/s00280-013-2182-1) | [23673444](https://pubmed.ncbi.nlm.nih.gov/23673444) | The study reports a population PK model for aflibercept with specific numeric values for clearance and volume of distribution present in the abstract. |

<sub>queue written 2026-10-15T03:57:10.285954+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fetterly_2013 | irrelevant | 1 | 0 | The study focuses on the PK/PD of doxorubicin (the subject drug in the model) to assess tumor response, while aflibercept is treated as a co-administered agent without its own disposition parameters reported. |
| popPK | Sil_2024 | irrelevant | 0 | 0 | The study is a radiomics analysis of OCT images to predict clinical response to anti-VEGF therapy and does not report any pharmacokinetic parameters for aflibercept. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:57 UTC</sub>
