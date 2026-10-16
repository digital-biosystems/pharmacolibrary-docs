<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;pretomanid&quot;}]"></div>

# pretomanid

- **generic name:** pretomanid
- **ATC codes:** `J04AK08`
- **DrugBank:** [DB05154](https://go.drugbank.com/drugs/DB05154) · **PubChem:** [CID 456199](https://pubchem.ncbi.nlm.nih.gov/compound/456199)
- **molar mass:** 359.2574 g/mol (C14H12F3N3O5) — DrugBank
- **groups:** approved, investigational

## About

Pretomanid is an antimycobacterial drug used to treat multidrug-resistant tuberculosis. It is an approved medicine, with one product authorised in the European Union for this indication.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7118312](https://www.wikidata.org/wiki/Q7118312) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pretomanid | parent | 359.257 | C14H12F3N3O5 | DrugBank | [456199](https://pubchem.ncbi.nlm.nih.gov/compound/456199) | Lyons_2018, Ngara_2025, Nyangwa_2026, Salinger_2019, Zou_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 11:33 | 29:38 | 2/5/0 | 3/0/1 | 0/0/0 | 680,078/123,455 | einfracz / qwen3.8-27b | 8 | 1/7 | 7/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> | [Nyangwa_2026_parameter_estimate_rse](drugs/drug_pretomanid/Pretomanid_Nyangwa2026_parameter_estimate_rse.md) | — | 1-compartment (no model) | 3 | Nyang'wa BT et al., Population pharmacokinetics and target…, Scientific reports (2026) | [10.1038/s41598-026-46217-2](https://doi.org/10.1038/s41598-026-46217-2) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.778). Primary extraction retained.">cross-check: partial</span> | [Zou_2022_reference](drugs/drug_pretomanid/Pretomanid_Zou2022_reference.md) | — | 1-compartment (no model) | 5 (+2 cov.) | Zou Y et al., Characterizing Absorption Properties of…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01163-w](https://doi.org/10.1007/s40262-022-01163-w) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Lyons_2018_reference](drugs/drug_pretomanid/Pretomanid_Lyons2018_reference.md) | — | 1-compartment (no model) | 3 | Lyons MA, Modeling and Simulation of Pretomanid P…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.02359-17](https://doi.org/10.1128/AAC.02359-17) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.792). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Ngara_2025_estimates_rse](drugs/drug_pretomanid/Pretomanid_Ngara2025_estimates_rse.md) | — | 2-compartment (no model) | 11 | Ngara B et al., Translational Modeling of BTZ-043 to Pr…, The Journal of infectious d… (2025) | [10.1093/infdis/jiaf088](https://doi.org/10.1093/infdis/jiaf088) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Ngara_2025_estimates_rse_2](drugs/drug_pretomanid/Pretomanid_Ngara2025_estimates_rse_2.md) | — | 1-compartment (no model) | 5 | Ngara B et al., Translational Modeling of BTZ-043 to Pr…, The Journal of infectious d… (2025) | [10.1093/infdis/jiaf088](https://doi.org/10.1093/infdis/jiaf088) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Nyangwa_2026_median](drugs/drug_pretomanid/Pretomanid_Nyangwa2026_median.md) | — | 1-compartment (no model) | 3 | Nyang'wa BT et al., Population pharmacokinetics and target…, Scientific reports (2026) | [10.1038/s41598-026-46217-2](https://doi.org/10.1038/s41598-026-46217-2) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.474). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Salinger_2019_reference](drugs/drug_pretomanid/Pretomanid_Salinger2019_reference.md) | — | 1-compartment (no model) | 11 (+1 cov.) | Salinger DH et al., Population Pharmacokinetics of the Anti…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.00907-19](https://doi.org/10.1128/AAC.00907-19) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span> | [Abdelwahab_2026_QTcF](drugs/drug_pretomanid/pd_Abdelwahab_2026_QTcF.md) | QTcF ← pretomanid · direct Emax (saturable) effect | — | Abdelwahab MT et al., Exposure-QTc modeling of bedaquiline, p…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01399-25](https://doi.org/10.1128/aac.01399-25) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Ngara_2025_Pretomanid](drugs/drug_pretomanid/pd_Ngara_2025_Pretomanid.md) | Pretomanid ← Pretomanid · direct Emax (saturable) effect | — | Ngara B et al., Translational Modeling of BTZ-043 to Pr…, The Journal of infectious d… (2025) | [10.1093/infdis/jiaf088](https://doi.org/10.1093/infdis/jiaf088) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [de_2026_log10_CFU](drugs/drug_pretomanid/pd_de_2026_log10_CFU.md) | log10 colony-forming unit (CFU) in sputum ← pretomanid · direct Emax (saturable) effect | — | de Castro Suarez N et al., Predicting early bactericidal activity…, bioRxiv : the preprint serv… (2026) | [10.64898/2026.01.29.702705](https://doi.org/10.64898/2026.01.29.702705) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Nedelman_2020_GI_symptoms](drugs/drug_pretomanid/pd_Nedelman_2020_GI_symptoms.md) | Gastrointestinal symptoms ← Pretomanid · time-to-event model | — | Nedelman JR et al., An Exposure-Response Perspective on the…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.01121-20](https://doi.org/10.1128/AAC.01121-20) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Nedelman_2020_TSCC](drugs/drug_pretomanid/pd_Nedelman_2020_TSCC.md) | Time to sputum culture conversion ← Pretomanid · time-to-event model | — | Nedelman JR et al., An Exposure-Response Perspective on the…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.01121-20](https://doi.org/10.1128/AAC.01121-20) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Nedelman_2020_Vomiting](drugs/drug_pretomanid/pd_Nedelman_2020_Vomiting.md) | Vomiting ← Pretomanid · time-to-event model | — | Nedelman JR et al., An Exposure-Response Perspective on the…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.01121-20](https://doi.org/10.1128/AAC.01121-20) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pretomanid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A8` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 9  ·  **relevant:** 5
- **records:** 7  ·  extracted 2  ·  needs_review 0  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lyons_2018.pdf` | Lyons MA, Modeling and Simulation of Pretomanid P…, Antimicrobial agents and ch… (2018) | popPK | 10 | [10.1128/AAC.02359-17](https://doi.org/10.1128/AAC.02359-17) | [29661865](https://pubmed.ncbi.nlm.nih.gov/29661865) | The paper reports a population pharmacokinetic model for pretomanid in humans with explicit quantitative values for clearance, volume of distribution, and interindividual variability. |
| `Ignatius_2021.pdf` | Ignatius EH et al., Pretomanid Pharmacokinetics in the Pres…, Antimicrobial agents and ch… (2021) | popPK | 8 | [10.1128/AAC.01196-20](https://doi.org/10.1128/AAC.01196-20) | [33229425](https://pubmed.ncbi.nlm.nih.gov/33229425) | The paper reports a population PK model and specific exposure metrics (AUC, Cmax) and relative clearance changes for pretomanid in humans, but lacks absolute central parameter estimates (like CL or V values) which may be in supplementary material. |

<sub>queue written 2026-10-13T11:18:58.973553+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelwahab_2026 | irrelevant | 2 | 0 | The study is a PK/PD exposure-QTcF model focusing on QT interval effects rather than quantitative PK disposition parameters (CL, V, Q) for pretomanid, and no specific PK parameter values for pretomanid are reported in the evidence. |
| popPK | Diacon_2015 | irrelevant | 0 | 0 | The study evaluates bactericidal activity of drug combinations on M. tuberculosis, not the pharmacokinetic parameters (CL, V, etc.) of pretomanid. |
| popPK | Ignatius_2021 | relevant | 8 | 4 | The paper reports a population PK model and specific exposure metrics (AUC, Cmax) and relative clearance changes for pretomanid in humans, but lacks absolute central parameter estimates (like CL or V values) which may be in supplementary material. |
| popPK | Muliaditan_2021 | irrelevant | 0 | 0 | This is a pharmacodynamic modeling study in mice that uses pretomanid as a companion drug to evaluate its effect on other drugs, rather than a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for pretomanid itself. |
| popPK | Nedelman_2020 | irrelevant | 1 | 0 | This is an exposure-response (E-R) analysis that uses Cavg as a covariate derived from a separate population PK model (reference 7), but it does not report the quantitative PK parameters (CL, V, ka, etc.) for pretomanid itself. |
| popPK | Solans_2023 | irrelevant | 2 | 2 | The study is a PK-PD/efficacy analysis of TB treatment outcomes; it reports trough concentrations and AUC for pretomanid but does not fit a compartmental or population PK model to derive disposition parameters like clearance or volume for pretomanid. |
| popPK | Srivastava_2022 | irrelevant | 0 | 0 | The study is an in-vitro MIC and time-kill study for Mycobacterium kansasii, not a pharmacokinetic study of pretomanid. |
| popPK | Van_2026 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy of a WGS-guided treatment regimen and reports mycobacterial load half-life, not pharmacokinetic parameters for pretomanid. |
| popPK | de_2026 | irrelevant | 2 | 0 | The paper is a PK-PD study of drug combinations where pretomanid is one of four drugs, and it reports pharmacodynamic interaction parameters (E_max, EC_50) rather than standalone quantitative pharmacokinetic disposition parameters (CL, V, ka) for pretomanid. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-13 11:19 UTC</sub>
