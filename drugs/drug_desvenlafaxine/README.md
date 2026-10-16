<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;desvenlafaxine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Desvenlafaxine_MangasSanjun2023_reference&quot;,&quot;label&quot;:&quot;Mangas-Sanju\u00e1n_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_desvenlafaxine/Desvenlafaxine_MangasSanjun2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# desvenlafaxine

- **generic name:** desvenlafaxine
- **ATC codes:** `N06AX23`
- **DrugBank:** [DB06700](https://go.drugbank.com/drugs/DB06700) · **PubChem:** [CID 125017](https://pubchem.ncbi.nlm.nih.gov/compound/125017)
- **molar mass:** 263.3752 g/mol (C16H25NO2) — DrugBank
- **groups:** approved, investigational

## About

Desvenlafaxine is an antidepressant, a serotonin and noradrenaline reuptake inhibitor, used to treat depression and studied for anxiety. It is approved and used in several countries, but a marketing application in the European Union was withdrawn, so it is not authorised there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2419445](https://www.wikidata.org/wiki/Q2419445) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| desvenlafaxine (O-desmethyl venlafaxine, O-desmethyl venlafaxine (desvenlafaxine)) | parent | 263.375 | C16H25NO2 | DrugBank | [125017](https://pubchem.ncbi.nlm.nih.gov/compound/125017) | Mangas-Sanjuán_2023, Nichols_2018, Wang_2022 |
| venlafaxine | metabolite | 277.408 | C17H27NO2 | PubChem | [5656](https://pubchem.ncbi.nlm.nih.gov/compound/5656) | Wang_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:25 | 4:34 | 1/1/1 | 0/2/0 | 0/0/0 | 219,129/16,047 | ollama / glm-5.3-flash | 19 | 1/7 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.9), gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Mangas-Sanjuán_2023_reference](drugs/drug_desvenlafaxine/Desvenlafaxine_MangasSanjun2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Mangas-Sanjuán V et al., Alternative Pharmacokinetic Metrics in…, Pharmaceutics (2023) | [10.3390/pharmaceutics15020409](https://doi.org/10.3390/pharmaceutics15020409) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111), gpt-oss:120b (partly confirmed, agreement 0.636). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Wang_2022_reference](drugs/drug_desvenlafaxine/Desvenlafaxine_Wang2022_reference.md) | — | parent + metabolite (no model) | 7 | Wang Z et al., Joint population pharmacokinetic modeli…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.978202](https://doi.org/10.3389/fphar.2022.978202) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.444), gpt-oss:120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Nichols_2018_reference](drugs/drug_desvenlafaxine/Desvenlafaxine_Nichols2018_reference.md) | — | 1-compartment (no model) | 0 | Nichols AI et al., Population Pharmacokinetics of Desvenla…, Clinical pharmacology in dr… (2018) | [10.1002/cpdd.419](https://doi.org/10.1002/cpdd.419) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Lindauer_2008_amplitude](drugs/drug_desvenlafaxine/pd_Lindauer_2008_amplitude.md) | amplitude of the pupillary light reflex ← O-desmethylvenlafaxine · model not identified | — | Lindauer A et al., Pharmacokinetic/pharmacodynamic modelli…, Clinical pharmacokinetics (2008) | [10.2165/00003088-200847110-00003](https://doi.org/10.2165/00003088-200847110-00003) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Lindauer_2008_recovery_time](drugs/drug_desvenlafaxine/pd_Lindauer_2008_recovery_time.md) | recovery time of the pupillary light reflex ← O-desmethylvenlafaxine · model not identified | — | Lindauer A et al., Pharmacokinetic/pharmacodynamic modelli…, Clinical pharmacokinetics (2008) | [10.2165/00003088-200847110-00003](https://doi.org/10.2165/00003088-200847110-00003) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Wang_2020_R_ODV_toxicity](drugs/drug_desvenlafaxine/pd_Wang_2020_R_ODV_toxicity.md) | toxicity dose-response of R-O-desmethylvenlafaxine to S. scenedesmus ← R-O-desmethylvenlafaxine · inhibition effect | — | Wang W et al., β-cyclodextrin improve the tolerant of…, Journal of hazardous materi… (2020) | [10.1016/j.jhazmat.2020.123076](https://doi.org/10.1016/j.jhazmat.2020.123076) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Wang_2020_S_ODV_toxicity](drugs/drug_desvenlafaxine/pd_Wang_2020_S_ODV_toxicity.md) | toxicity dose-response of S-O-desmethylvenlafaxine to S. scenedesmus ← S-O-desmethylvenlafaxine · inhibition effect | — | Wang W et al., β-cyclodextrin improve the tolerant of…, Journal of hazardous materi… (2020) | [10.1016/j.jhazmat.2020.123076](https://doi.org/10.1016/j.jhazmat.2020.123076) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=desvenlafaxine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `UGT1A1` substrate, `UGT1A3` substrate, `UGT2B15` substrate, `UGT2B17` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `UGT1A1` substrate, `UGT2B17` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: SLC6A2 (inhibitor), SLC6A3 (inhibitor), UGT2B4 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 14 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nichols_2018.pdf` | Nichols AI et al., Population Pharmacokinetics of Desvenla…, Clinical pharmacology in dr… (2018) | popPK | 10 | [10.1002/cpdd.419](https://doi.org/10.1002/cpdd.419) | [29228473](https://pubmed.ncbi.nlm.nih.gov/29228473) | Population PK model of desvenlafaxine with CL/F and V/F reported, but only relative percent differences given, not absolute parameter values. |
| `Alves_2026.pdf` | Alves BCM et al., Enantioselective Pharmacokinetics of Ve…, Journal of clinical pharmac… (2026) | popPK | 5 | [10.1002/jcph.70194](https://doi.org/10.1002/jcph.70194) | [42011083](https://pubmed.ncbi.nlm.nih.gov/42011083) | This is a venlafaxine population PK study in which desvenlafaxine (O-desmethylvenlafaxine) is the metabolite, so metabolite disposition parameters are modeled, but the abstract shows only fold-changes, not the numeric CL/V/ka values, which likely reside in tables/figures not provided. |

<sub>queue written 2026-10-06T22:21:34.561987+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbas_2022 | irrelevant | 2 | 1 | This is a thorough QT study of venlafaxine; desvenlafaxine appears only as a measured metabolite in an exposure-response analysis with no PK disposition parameters reported. |
| popPK | Alves_2026 | relevant | 5 | 3 | This is a venlafaxine population PK study in which desvenlafaxine (O-desmethylvenlafaxine) is the metabolite, so metabolite disposition parameters are modeled, but the abstract shows only fold-changes, not the numeric CL/V/ka values, which likely reside in tables/figures not provided. |
| popPK | Atkinson_2018 | irrelevant | 2 | 0 | This is a pediatric efficacy/safety trial; population PK of desvenlafaxine is only mentioned as to be "reported separately," with no numeric PK parameters in the evidence. |
| popPK | Katzman_2017 | irrelevant | 0 | 0 | This is a clinical efficacy meta-analysis of depression outcomes with no pharmacokinetic parameters (no CL, V, ka, half-life, or PK model) reported for desvenlafaxine. |
| popPK | Kilpinen_2023 | irrelevant | 0 | 0 | Environmental wastewater monitoring study with no pharmacokinetic parameters for desvenlafaxine; only mentions O-desmethylvenlafaxine concentrations in effluent. |
| PD | Kilpinen_2023 | not_relevant | 0 | 0 | The paper is an environmental study on micropollutants in wastewater and does not report any pharmacodynamic or exposure-response relationships for desvenlafaxine. |
| popPK | Lindauer_2008 | irrelevant | 0 | 0 | The study models venlafaxine and its metabolite O-desmethylvenlafaxine, not desvenlafaxine (desvenlafaxine is a different drug, succinate metabolite of venlafaxine not studied here). |
| popPK | Men_2024 | irrelevant | 0 | 0 | The paper models venlafaxine and its metabolite O-desmethylvenlafaxine, not desvenlafaxine; desvenlafaxine is a different drug. |
| popPK | Pitts_2025 | irrelevant | 0 | 0 | This is an antiviral efficacy study of obeldesivir/GS-441524 against RSV, not a PK study of desvenlafaxine; no desvenlafaxine disposition parameters appear. |
| PD | Pitts_2025 | not_relevant | 0 | 0 | The paper reports pharmacodynamics for obeldesivir (ODV), not desvenlafaxine. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | This is an algal toxicity/removal study of venlafaxine (not desvenlafaxine) with EC50 values and degradation half-lives, not pharmacokinetic disposition parameters. |
| popPK | Weihs_2018 | irrelevant | 2 | 0 | This is a pediatric efficacy/safety trial; population PK samples were collected but results are reported separately, with no numeric PK parameters in the evidence. |
| popPK | Xiang_2026 | irrelevant | 0 | 0 | This is an efficacy/tolerability IPD meta-analysis of antidepressants; desvenlafaxine is only a treatment arm with no PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:21 UTC</sub>
