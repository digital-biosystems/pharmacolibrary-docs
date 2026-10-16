<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;fluconazole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fluconazole_Comisar2025_reference&quot;,&quot;label&quot;:&quot;Comisar_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluconazole/Fluconazole_Comisar2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fluconazole_Matsuno2024_reference&quot;,&quot;label&quot;:&quot;Matsuno_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fluconazole/Fluconazole_Matsuno2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# fluconazole

- **generic name:** fluconazole
- **ATC codes:** `D01AC15`, `J01RA07`, `J02AC01`
- **DrugBank:** [DB00196](https://go.drugbank.com/drugs/DB00196) · **PubChem:** [CID 3365](https://pubchem.ncbi.nlm.nih.gov/compound/3365)
- **molar mass:** 306.2708 g/mol (C13H12F2N6O) — DrugBank
- **groups:** approved, investigational

## About

Fluconazole is an antifungal medicine used to treat fungal infections, including various forms of candidiasis, cryptococcosis, and other fungal diseases. It is widely used and appears on the WHO list of essential medicines, with approved systemic and topical uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411478](https://www.wikidata.org/wiki/Q411478) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fluconazole | parent | 306.271 | C13H12F2N6O | DrugBank | [3365](https://pubchem.ncbi.nlm.nih.gov/compound/3365) | Tanzawa_2022, Vuong_2026, Wade_2008 |
| fosfluconazole | metabolite | 386.255 | C13H13F2N6O4P | PubChem | [214356](https://pubchem.ncbi.nlm.nih.gov/compound/214356) | Tanzawa_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:08 | 17:12 | 2/0/4 | 1/0/0 | 0/0/0 | 312,508/44,422 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 2/6 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.889), gpt-oss:120b (partly confirmed, agreement 0.818). Primary extraction retained.">cross-check: partial 0/2</span> | [Comisar_2025_reference](drugs/drug_fluconazole/Fluconazole_Comisar2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Comisar CM et al., Population Pharmacokinetic Modeling of…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70051](https://doi.org/10.1002/psp4.70051) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.75), gpt-oss:120b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial 0/2</span> | [Matsuno_2024_reference](drugs/drug_fluconazole/Fluconazole_Matsuno2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Matsuno VK et al., Changes in fluconazole pharmacokinetics…, Clinics (Sao Paulo, Brazil) (2024) | [10.1016/j.clinsp.2024.100491](https://doi.org/10.1016/j.clinsp.2024.100491) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.778), gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: model_quarantined: Cl, Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Tanzawa_2022_base](drugs/drug_fluconazole/Fluconazole_Tanzawa2022_base.md) | held back | 1-compartment, oral | 3 | Tanzawa A et al., Fluconazole Population Pharmacokinetics…, Microbiology spectrum (2022) | [10.1128/spectrum.01952-21](https://doi.org/10.1128/spectrum.01952-21) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.833), gpt-oss:120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Cl, Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Tanzawa_2022_final](drugs/drug_fluconazole/Fluconazole_Tanzawa2022_final.md) | held back | 1-compartment, oral | 3 | Tanzawa A et al., Fluconazole Population Pharmacokinetics…, Microbiology spectrum (2022) | [10.1128/spectrum.01952-21](https://doi.org/10.1128/spectrum.01952-21) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Vuong_2026_reference](drugs/drug_fluconazole/Fluconazole_Vuong2026_reference.md) | — | 2-compartment (no model) | 6 | Vuong ML et al., A fluconazole population pharmacokineti…, Infection (2026) | [10.1007/s15010-025-02663-0](https://doi.org/10.1007/s15010-025-02663-0) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222), gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Wade_2008_reference](drugs/drug_fluconazole/Fluconazole_Wade2008_reference.md) | — | 1-compartment (no model) | 2 | Wade KC et al., Population pharmacokinetics of fluconaz…, Antimicrobial agents and ch… (2008) | [10.1128/AAC.00569-08](https://doi.org/10.1128/AAC.00569-08) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Louie_1998_fungal_densities_in_kidneys](drugs/drug_fluconazole/pd_Louie_1998_fungal_densities_in_kidneys.md) | fungal densities in kidneys ← fluconazole · direct sigmoid Emax (Hill) effect | — | Louie A et al., Pharmacodynamics of fluconazole in a mu…, Antimicrobial agents and ch… (1998) | [10.1128/AAC.42.5.1105](https://doi.org/10.1128/AAC.42.5.1105) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fluconazole).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2C9` inhibitor, `CYP3A4` inhibitor, `CYP3A5` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `CYP3A5` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 135 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 6  ·  extracted 2  ·  needs_review 4  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wade_2008.pdf` | Wade KC et al., Population pharmacokinetics of fluconaz…, Antimicrobial agents and ch… (2008) | popPK | 10 | [10.1128/AAC.00569-08](https://doi.org/10.1128/AAC.00569-08) | [18809946](https://pubmed.ncbi.nlm.nih.gov/18809946) | The abstract provides explicit numeric values for the population mean clearance equation, volume of distribution equation, and specific clearance ranges for different gestational ages. |

<sub>queue written 2026-10-07T12:53:34.835507+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barrett_2002 | irrelevant | 0 | 0 | The study reports population PK parameters for efavirenz, not fluconazole, which is only mentioned as a co-administered drug affecting clearance. |
| popPK | Cheng_2021 | irrelevant | 1 | 0 | This is a review article summarizing external evaluation methods for various antibiotics, including fluconazole, but it does not report original quantitative PK parameter values for fluconazole. |
| popPK | Comisar_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for rimegepant, with fluconazole serving only as a co-administered CYP3A4 inhibitor covariate. |
| popPK | Geng_2024 | irrelevant | 0 | 0 | The study models the pharmacokinetics of S-warfarin, with fluconazole serving only as a perpetrator drug in a drug-drug interaction context, not as the subject drug. |
| popPK | Gonzalez_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sildenafil, with fluconazole serving only as a co-administered CYP3A inhibitor to assess drug-drug interactions, not as the subject drug. |
| popPK | Gumbo_2006 | irrelevant | 0 | 0 | The study focuses on anidulafungin pharmacokinetics and pharmacodynamics, with fluconazole serving only as a comparator for efficacy (E_max) without reporting its own quantitative PK parameters. |
| popPK | Han_2024 | irrelevant | 0 | 0 | The study focuses on the antifungal activity of novel acrylopimaric acid derivatives, using fluconazole only as a comparator for efficacy (EC50) rather than studying its pharmacokinetics. |
| popPK | Horcajada_2015 | irrelevant | 0 | 0 | The paper is a review discussing PK/PD concepts for various antimicrobials and does not report quantitative pharmacokinetic parameters for fluconazole. |
| popPK | Li_2010 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of posaconazole, with fluconazole mentioned only as a comparator for antifungal activity. |
| popPK | Louie_1998 | irrelevant | 2 | 0 | The study is a pharmacodynamic investigation in mice that reports ED50 and dose-response relationships, but does not provide quantitative pharmacokinetic parameters (CL, V, ka, etc.) for fluconazole. |
| popPK | Matsuno_2024 | relevant | 9 | 4 | The study reports quantitative PK parameters (Vd, CL, t1/2) for fluconazole in humans, but the specific numeric values for the study cohort are presented in Figures 1 and 2 which are not included in the evidence, while reference values for healthy subjects are in Supplementary Table 2. |
| popPK | Qiu_2023 | irrelevant | 0 | 0 | The study focuses on the mechanism of a monoclonal antibody against Candida albicans Ssa1, using fluconazole only as a co-administered comparator in an efficacy model without reporting any pharmacokinetic parameters for fluconazole. |
| popPK | Scott_2020 | irrelevant | 2 | 0 | This is a review article summarizing pharmacokinetic data for antifungals in neonates, but the provided evidence contains no original quantitative parameter values for fluconazole. |
| popPK | Xie_2022 | irrelevant | 2 | 0 | The study is a Monte Carlo simulation using published models for multiple antifungals, and no specific numeric PK parameter values for fluconazole are provided in the evidence. |
| popPK | Yalcin_2022 | irrelevant | 2 | 0 | This is a literature review that discusses fluconazole PK in neonates on ECMO but does not report original quantitative parameter values (CL, V, etc.) for fluconazole in the provided text. |
| popPK | Yuan_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vincristine (VCR) and its metabolite M1, with fluconazole mentioned only as a co-administered drug for drug-drug interaction analysis, not as the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:53 UTC</sub>
