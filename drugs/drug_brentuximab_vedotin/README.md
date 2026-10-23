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
| brentuximab vedotin (ADC) | metabolite | 153000 | — | the paper | — | Li_2017 |
| DM1 | metabolite | — (mass units only) | — | — | — | — |
| MMAE | metabolite | 718 | — | the paper | — | Li_2017, Suri_2018 |
| monomethyl auristatin E (MMAE) (MMAE (monomethyl auristatin E)) | metabolite | 717.993 | C39H67N5O7 | PubChem | [11542188](https://pubchem.ncbi.nlm.nih.gov/compound/11542188) | Suri_2019, Suri_2020 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q67 — no SI value to build from</sub> | [Li_2017_reference](drugs/drug_brentuximab_vedotin/BrentuximabVedotin_Li2017_reference.md) | — | parent + metabolite (no model) | 15 | Li H et al., Population Pharmacokinetics of Brentuxi…, Journal of clinical pharmac… (2017) | [10.1002/jcph.920](https://doi.org/10.1002/jcph.920) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22, Q63, Q61, Q64, Q30 — no SI val…</sub> | [Suri_2019_reference](drugs/drug_brentuximab_vedotin/BrentuximabVedotin_Suri2019_reference.md) | — | parent + metabolite (no model) | 6 | Suri A et al., Population Pharmacokinetic Modeling and…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1530](https://doi.org/10.1002/cpt.1530) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Suri_2020_reference](drugs/drug_brentuximab_vedotin/BrentuximabVedotin_Suri2020_reference.md) | — | parent + metabolite (no model) | 2 | Suri A et al., Population Pharmacokinetics of Brentuxi…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1682](https://doi.org/10.1002/jcph.1682) |
| <span class="pk-rf" hidden data-species="human + animal" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Ait-Oudhia_2017_reference](drugs/drug_brentuximab_vedotin/BrentuximabVedotin_AitOudhia2017_reference.md) | — | general linear (no model) | 0 | Ait-Oudhia S et al., A Mechanism-Based PK/PD Model for Hemat…, The AAPS journal (2017) | [10.1208/s12248-017-0113-5](https://doi.org/10.1208/s12248-017-0113-5) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Suri_2018_reference](drugs/drug_brentuximab_vedotin/BrentuximabVedotin_Suri2018_reference.md) | — | parent + metabolite (no model) | 3 | Suri A et al., Population PK and Exposure-Response Rel…, Clinical pharmacology and t… (2018) | [10.1002/cpt.1037](https://doi.org/10.1002/cpt.1037) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Lhospice_2015_Cell_toxicity_in_Karpas_299_cells](drugs/drug_brentuximab_vedotin/pd_Lhospice_2015_Cell_toxicity_in_Karpas_299_cells.md) | Cell toxicity in Karpas 299 cells ← ADCETRIS · model not identified | — | Lhospice F et al., Site-Specific Conjugation of Monomethyl…, Molecular pharmaceutics (2015) | [10.1021/mp500666j](https://doi.org/10.1021/mp500666j) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Lhospice_2015_Cell_toxicity_in_Raji_CD30_cells](drugs/drug_brentuximab_vedotin/pd_Lhospice_2015_Cell_toxicity_in_Raji_CD30_cells.md) | Cell toxicity in Raji-CD30(+) cells ← ADCETRIS · model not identified | — | Lhospice F et al., Site-Specific Conjugation of Monomethyl…, Molecular pharmaceutics (2015) | [10.1021/mp500666j](https://doi.org/10.1021/mp500666j) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Liu-Kreyche_2019_cell_killing_effects](drugs/drug_brentuximab_vedotin/pd_Liu_Kreyche_2019_cell_killing_effects.md) | cell-killing effects ← brentuximab vedotin · inhibition effect | — | Liu-Kreyche P et al., Lysosomal P-gp-MDR1 Confers Drug Resist…, Frontiers in pharmacology (2019) | [10.3389/fphar.2019.00749](https://doi.org/10.3389/fphar.2019.00749) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Suri_2018_ORR4](drugs/drug_brentuximab_vedotin/pd_Suri_2018_ORR4.md) | objective response rate lasting at least 4 months ← brentuximab vedotin ADC · categorical (graded) response model | — | Suri A et al., Population PK and Exposure-Response Rel…, Clinical pharmacology and t… (2018) | [10.1002/cpt.1037](https://doi.org/10.1002/cpt.1037) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Suri_2018_PFS](drugs/drug_brentuximab_vedotin/pd_Suri_2018_PFS.md) | progression‐free survival ← brentuximab vedotin ADC · time-to-event model | — | Suri A et al., Population PK and Exposure-Response Rel…, Clinical pharmacology and t… (2018) | [10.1002/cpt.1037](https://doi.org/10.1002/cpt.1037) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Suri_2018_PN](drugs/drug_brentuximab_vedotin/pd_Suri_2018_PN.md) | grade ≥2 PN ← brentuximab vedotin ADC · categorical (graded) response model | — | Suri A et al., Population PK and Exposure-Response Rel…, Clinical pharmacology and t… (2018) | [10.1002/cpt.1037](https://doi.org/10.1002/cpt.1037) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Suri_2018_PN_2](drugs/drug_brentuximab_vedotin/pd_Suri_2018_PN_2.md) | grade ≥2 PN ← MMAE · categorical (graded) response model | — | Suri A et al., Population PK and Exposure-Response Rel…, Clinical pharmacology and t… (2018) | [10.1002/cpt.1037](https://doi.org/10.1002/cpt.1037) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Suri_2018_TEAE](drugs/drug_brentuximab_vedotin/pd_Suri_2018_TEAE.md) | grade ≥3 TEAE ← brentuximab vedotin ADC · categorical (graded) response model | — | Suri A et al., Population PK and Exposure-Response Rel…, Clinical pharmacology and t… (2018) | [10.1002/cpt.1037](https://doi.org/10.1002/cpt.1037) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Suri_2018_TEAE_2](drugs/drug_brentuximab_vedotin/pd_Suri_2018_TEAE_2.md) | grade ≥3 TEAE ← MMAE · categorical (graded) response model | — | Suri A et al., Population PK and Exposure-Response Rel…, Clinical pharmacology and t… (2018) | [10.1002/cpt.1037](https://doi.org/10.1002/cpt.1037) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Suri_2019_FN](drugs/drug_brentuximab_vedotin/pd_Suri_2019_FN.md) | febrile neutropenia ← brentuximab vedotin (ADC) · categorical (graded) response model | — | Suri A et al., Population Pharmacokinetic Modeling and…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1530](https://doi.org/10.1002/cpt.1530) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Suri_2019_FN_2](drugs/drug_brentuximab_vedotin/pd_Suri_2019_FN_2.md) | febrile neutropenia ← monomethyl auristatin E (MMAE) · categorical (graded) response model | — | Suri A et al., Population Pharmacokinetic Modeling and…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1530](https://doi.org/10.1002/cpt.1530) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Suri_2019_PN](drugs/drug_brentuximab_vedotin/pd_Suri_2019_PN.md) | grade ≥ 2 peripheral neuropathy ← brentuximab vedotin (ADC) · categorical (graded) response model | — | Suri A et al., Population Pharmacokinetic Modeling and…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1530](https://doi.org/10.1002/cpt.1530) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Suri_2019_PN_2](drugs/drug_brentuximab_vedotin/pd_Suri_2019_PN_2.md) | grade ≥ 2 peripheral neuropathy ← monomethyl auristatin E (MMAE) · categorical (graded) response model | — | Suri A et al., Population Pharmacokinetic Modeling and…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1530](https://doi.org/10.1002/cpt.1530) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Suri_2019_TEAE](drugs/drug_brentuximab_vedotin/pd_Suri_2019_TEAE.md) | grade ≥ 3 treatment-emergent adverse events ← brentuximab vedotin (ADC) · categorical (graded) response model | — | Suri A et al., Population Pharmacokinetic Modeling and…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1530](https://doi.org/10.1002/cpt.1530) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Suri_2019_TEAE_2](drugs/drug_brentuximab_vedotin/pd_Suri_2019_TEAE_2.md) | grade ≥ 3 treatment-emergent adverse events ← monomethyl auristatin E (MMAE) · categorical (graded) response model | — | Suri A et al., Population Pharmacokinetic Modeling and…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1530](https://doi.org/10.1002/cpt.1530) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Suri_2019_grade_4_neutropenia](drugs/drug_brentuximab_vedotin/pd_Suri_2019_grade_4_neutropenia.md) | grade ≥ 4 neutropenia ← brentuximab vedotin (ADC) · categorical (graded) response model | — | Suri A et al., Population Pharmacokinetic Modeling and…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1530](https://doi.org/10.1002/cpt.1530) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Suri_2019_grade_4_neutropenia_2](drugs/drug_brentuximab_vedotin/pd_Suri_2019_grade_4_neutropenia_2.md) | grade ≥ 4 neutropenia ← monomethyl auristatin E (MMAE) · categorical (graded) response model | — | Suri A et al., Population Pharmacokinetic Modeling and…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1530](https://doi.org/10.1002/cpt.1530) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Suri_2019_mPFS](drugs/drug_brentuximab_vedotin/pd_Suri_2019_mPFS.md) | modified progression-free survival (mPFS) by independent review facility (IRF) ← brentuximab vedotin (ADC) · time-to-event model | — | Suri A et al., Population Pharmacokinetic Modeling and…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1530](https://doi.org/10.1002/cpt.1530) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Ait-Oudhia_2017_ANC](drugs/drug_brentuximab_vedotin/pd_Ait_Oudhia_2017_ANC.md) | neutrophils ← MMAE · delayed effect through transit (transduction) compartments | — | Ait-Oudhia S et al., A Mechanism-Based PK/PD Model for Hemat…, The AAPS journal (2017) | [10.1208/s12248-017-0113-5](https://doi.org/10.1208/s12248-017-0113-5) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Shah_2012_CR](drugs/drug_brentuximab_vedotin/pd_Shah_2012_CR.md) | complete response rates · model not identified | — | Shah DK et al., Bench to bedside translation of antibod…, Journal of pharmacokinetics… (2012) | [10.1007/s10928-012-9276-y](https://doi.org/10.1007/s10928-012-9276-y) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Shah_2012_PFS](drugs/drug_brentuximab_vedotin/pd_Shah_2012_PFS.md) | progression free survival rates · model not identified | — | Shah DK et al., Bench to bedside translation of antibod…, Journal of pharmacokinetics… (2012) | [10.1007/s10928-012-9276-y](https://doi.org/10.1007/s10928-012-9276-y) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Shah_2012_TGI](drugs/drug_brentuximab_vedotin/pd_Shah_2012_TGI.md) | tumor growth inhibition · model not identified | — | Shah DK et al., Bench to bedside translation of antibod…, Journal of pharmacokinetics… (2012) | [10.1007/s10928-012-9276-y](https://doi.org/10.1007/s10928-012-9276-y) |

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
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:47 | 15:42 | 3/2/0 | 4/2/0 | 0/0/0 | 290,968/80,725 | openai / gpt-6-luna | 7 | 0/7 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 20 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 0  ·  needs_review 3  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Flerlage_2016.pdf` | Flerlage JE et al., Pharmacokinetics, immunogenicity, and s…, Cancer chemotherapy and pha… (2016) | popPK | 10 | [10.1007/s00280-016-3180-x](https://doi.org/10.1007/s00280-016-3180-x) | [27837256](https://pubmed.ncbi.nlm.nih.gov/27837256) | A compartmental model reports brentuximab vedotin clearance and volume relationships, but their numeric values are not provided. |
| `Zhang_2024.pdf` | Zhang D et al., Time-varying brentuximab vedotin pharma…, British journal of clinical… (2024) | popPK | 10 | [10.1111/bcp.16128](https://doi.org/10.1111/bcp.16128) | [38866401](https://pubmed.ncbi.nlm.nih.gov/38866401) | Human population-PK modeling is reported, but numeric disposition parameter values are not present in the evidence. |
| `Shah_2012.pdf` | Shah DK et al., Bench to bedside translation of antibod…, Journal of pharmacokinetics… (2012) | popPK | 9 | [10.1007/s10928-012-9276-y](https://doi.org/10.1007/s10928-012-9276-y) | [23151991](https://pubmed.ncbi.nlm.nih.gov/23151991) | The study models brentuximab vedotin disposition, but no numeric parameter values are present in the provided evidence. |
| `Ait-Oudhia_2017.pdf` | Ait-Oudhia S et al., A Mechanism-Based PK/PD Model for Hemat…, The AAPS journal (2017) | popPK | 8 | [10.1208/s12248-017-0113-5](https://doi.org/10.1208/s12248-017-0113-5) | [28646408](https://pubmed.ncbi.nlm.nih.gov/28646408) | The two-compartment PK model reports SGN-35’s numeric release rate (0.12 h⁻¹), but not numeric CL, V, or Q values. |

<sub>queue written 2026-10-07T10:33:24.149508+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Flerlage_2016 | relevant | 10 | 2 | A compartmental model reports brentuximab vedotin clearance and volume relationships, but their numeric values are not provided. |
| popPK | Hedrich_2018 | irrelevant | 0 | 0 | This is a review and provides no quantitative brentuximab vedotin disposition values. |
| popPK | Lhospice_2015 | irrelevant | 2 | 0 | ADCETRIS is a comparator and the evidence reports biodistribution, not quantitative disposition parameters; no such parameter values are provided. |
| popPK | Liao_2024 | irrelevant | 0 | 0 | This review focuses on polatuzumab vedotin and uses brentuximab vedotin only as a comparator; no numeric brentuximab PK values are provided. |
| popPK | Liu-Kreyche_2019 | irrelevant | 0 | 0 | The study reports in-vitro cytotoxicity and transporter results, not quantitative pharmacokinetic disposition parameters. |
| popPK | Sapra_2013 | irrelevant | 2 | 0 | This review mentions PK/PD models but provides no readable quantitative brentuximab vedotin disposition parameters. |
| popPK | Shah_2012 | relevant | 9 | 0 | The study models brentuximab vedotin disposition, but no numeric parameter values are present in the provided evidence. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | This systematic review reports survival outcomes, not quantitative pharmacokinetic disposition parameters. |
| popPK | Zhang_2024 | relevant | 10 | 1 | Human population-PK modeling is reported, but numeric disposition parameter values are not present in the evidence. |
| popPK | Zhang_2024_2 | relevant | 9 | 3 | Human pediatric PK data and a population-PK model are reported, but numeric disposition parameters are unclear or referenced in supplementary material not provided. |
| popPK | Zhou_2025 | relevant | 10 | 2 | Human population-PK models are reported, but the numeric model parameter values are only in Tables S1 and S2, which are not provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 10:34 UTC</sub>
