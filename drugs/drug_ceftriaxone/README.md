<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;ceftriaxone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ceftriaxone_Alonso2021_reference&quot;,&quot;label&quot;:&quot;Alonso_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ceftriaxone/Ceftriaxone_Alonso2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ceftriaxone_Kumar2010_reference&quot;,&quot;label&quot;:&quot;Kumar_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ceftriaxone/Ceftriaxone_Kumar2010_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ceftriaxone_RoubaudBaudron2025_reference&quot;,&quot;label&quot;:&quot;Roubaud-Baudron_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_ceftriaxone/Ceftriaxone_RoubaudBaudron2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# ceftriaxone

- **generic name:** ceftriaxone
- **ATC codes:** `J01DD04`
- **DrugBank:** [DB01212](https://go.drugbank.com/drugs/DB01212) · **PubChem:** [CID 5479530](https://pubchem.ncbi.nlm.nih.gov/compound/5479530)
- **molar mass:** 554.58 g/mol (C18H18N8O7S3) — DrugBank
- **groups:** approved, investigational

## About

Ceftriaxone is a third-generation cephalosporin antibiotic used to treat many bacterial infections, including pneumonia, meningitis, gonorrhea, sepsis, and urinary tract infections. It is an approved medicine and is listed by the WHO as an essential medicine, so it is widely used around the world.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421713](https://www.wikidata.org/wiki/Q421713) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ceftriaxone (unbound ceftriaxone) | parent | 554.58 | C18H18N8O7S3 | DrugBank | [5479530](https://pubchem.ncbi.nlm.nih.gov/compound/5479530) | Kumar_2010, Meenks_2022, Patel_1981, Roubaud-Baudron_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:46 | 2:07 | 1/1/3 | 1/0/0 | 0/0/0 | 168,209/10,671 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> | [Alonso_2021_reference](drugs/drug_ceftriaxone/Ceftriaxone_Alonso2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Alonso R et al., Molecular Epidemiology, Antimicrobial S…, Pharmaceutics (2021) | [10.3390/pharmaceutics13101699](https://doi.org/10.3390/pharmaceutics13101699) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Kumar_2010_reference](drugs/drug_ceftriaxone/Ceftriaxone_Kumar2010_reference.md) | ▶ model + simulator | 1-compartment, oral | 6 | Kumar S et al., Plasma pharmacokinetics and milk levels…, Veterinary research communi… (2010) | [10.1007/s11259-010-9421-2](https://doi.org/10.1007/s11259-010-9421-2) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Meenks_2022_reference](drugs/drug_ceftriaxone/Ceftriaxone_Meenks2022_reference.md) | — | 1-compartment (no model) | 4 | Meenks SD et al., Population pharmacokinetics of unbound…, International journal of cl… (2022) | [10.5414/CP204181](https://doi.org/10.5414/CP204181) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.938). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: unreported model parameter default(s): F</sub><br><sub>route_to: `scholar`</sub> | [Roubaud-Baudron_2025_reference](drugs/drug_ceftriaxone/Ceftriaxone_RoubaudBaudron2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Roubaud-Baudron C et al., Pharmacokinetics of Subcutaneous and In…, Open forum infectious disea… (2025) | [10.1093/ofid/ofaf313](https://doi.org/10.1093/ofid/ofaf313) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.538). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Patel_1981_reference](drugs/drug_ceftriaxone/Ceftriaxone_Patel1981_reference.md) | — | 1-compartment (no model) | 4 | Patel IH et al., Pharmacokinetics of ceftriaxone in huma…, Antimicrobial agents and ch… (1981) | [10.1128/AAC.20.5.634](https://doi.org/10.1128/AAC.20.5.634) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Jimenez-Toro_2023_log10_CFU](drugs/drug_ceftriaxone/pd_Jimenez_Toro_2023_log10_CFU.md) | log10 CFU (bacterial burden) ← ceftriaxone · direct Emax (saturable) effect | — | Jimenez-Toro I et al., Pharmacokinetic/Pharmacodynamic Index L…, Antimicrobial agents and ch… (2023) | [10.1128/aac.00966-22](https://doi.org/10.1128/aac.00966-22) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ceftriaxone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | `ABCB1` inhibitor, `SLC15A1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` other/unknown | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC15A2` inhibitor, `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: GLUL (inducer), SLC22A11 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 150 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 5  ·  extracted 1  ·  needs_review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_8 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Heffernan_2022.pdf` | Heffernan AJ et al., Multicenter Population Pharmacokinetic…, Antimicrobial agents and ch… (2022) | popPK | 10 | [10.1128/aac.02189-21](https://doi.org/10.1128/aac.02189-21) | [35575578](https://pubmed.ncbi.nlm.nih.gov/35575578) | The paper reports a population PK model for ceftriaxone in humans, but specific numeric parameter values (e.g., CL, V values) are not provided in the extracted evidence, likely residing in the results tables or text not included. |
| `Kumar_2010.pdf` | Kumar S et al., Plasma pharmacokinetics and milk levels…, Veterinary research communi… (2010) | popPK | 10 | [10.1007/s11259-010-9421-2](https://doi.org/10.1007/s11259-010-9421-2) | [20571922](https://pubmed.ncbi.nlm.nih.gov/20571922) | The study reports quantitative pharmacokinetic parameters (Vd, AUC, t1/2, Cl, MRT) for ceftriaxone in cows. |
| `Kumta_2025.pdf` | Kumta N et al., Ceftriaxone population pharmacokinetics…, International journal of an… (2025) | popPK | 10 | [10.1016/j.ijantimicag.2025.107461](https://doi.org/10.1016/j.ijantimicag.2025.107461) | [39923947](https://pubmed.ncbi.nlm.nih.gov/39923947) | The paper is a population PK study of ceftriaxone in humans reporting qualitative model results and variability, but specific numeric parameters (CL, V, Q) are not explicitly listed in the abstract text, likely residing in the full text or tables not provided. |
| `Meenks_2022.pdf` | Meenks SD et al., Population pharmacokinetics of unbound…, International journal of cl… (2022) | popPK | 10 | [10.5414/CP204181](https://doi.org/10.5414/CP204181) | [35861497](https://pubmed.ncbi.nlm.nih.gov/35861497) | The abstract provides explicit numeric estimates for hepatic clearance, renal clearance, volume of distribution, and intercompartmental rate constants for unbound ceftriaxone. |
| `Sangkakul_2026.pdf` | Sangkakul N et al., High-dose ceftriaxone: Pharmacokinetic…, British journal of clinical… (2026) | popPK | 10 | [10.1002/bcp.70480](https://doi.org/10.1002/bcp.70480) | [41664494](https://pubmed.ncbi.nlm.nih.gov/41664494) | The paper describes a population PK study of ceftriaxone in humans with significant covariates identified, but specific numeric parameter estimates (CL, V, Q) are not explicitly listed in the provided abstract text. |
| `Wang_2020_2.pdf` | Wang YK et al., Optimal Dosing of Ceftriaxone in Infant…, Antimicrobial agents and ch… (2020) | popPK | 9 | [10.1128/AAC.01412-20](https://doi.org/10.1128/AAC.01412-20) | [32816735](https://pubmed.ncbi.nlm.nih.gov/32816735) | The paper is a population PK study of ceftriaxone in infants, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract text. |
| `van_2023.pdf` | van den Broek AK et al., Population pharmacokinetic/pharmacodyna…, British journal of clinical… (2023) | popPK | 9 | [10.1111/bcp.15819](https://doi.org/10.1111/bcp.15819) | [37309251](https://pubmed.ncbi.nlm.nih.gov/37309251) | The study is a population PK/PD analysis of ceftriaxone in humans, but the evidence provided only contains the abstract and conclusion, lacking specific quantitative PK parameter estimates (e.g., CL, Vc) which are typically found in the full results or supplementary tables. |
| `Perry_2001.pdf` | Perry TR et al., Clinical use of ceftriaxone: a pharmaco…, Clinical pharmacokinetics (2001) | popPK | 5 | [10.2165/00003088-200140090-00004](https://doi.org/10.2165/00003088-200140090-00004) | [11605716](https://pubmed.ncbi.nlm.nih.gov/11605716) | The paper is a review that discusses ceftriaxone PK/PD and mentions specific target AUIC values, but it does not report primary quantitative disposition parameters like clearance (CL), volume (V), or half-life with volume derived from original data. |

<sub>queue written 2026-10-07T10:45:16.148639+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Heffernan_2022 | relevant | 10 | 2 | The paper reports a population PK model for ceftriaxone in humans, but specific numeric parameter values (e.g., CL, V values) are not provided in the extracted evidence, likely residing in the results tables or text not included. |
| popPK | Jimenez-Toro_2023 | irrelevant | 3 | 1 | The study is a PK/PD simulation/efficacy study in mice and humans (simulated) defining combination therapy indices, rather than reporting quantitative PK parameters (CL, V, t1/2) for ceftriaxone itself as a primary disposition study. |
| popPK | Kumta_2025 | relevant | 10 | 4 | The paper is a population PK study of ceftriaxone in humans reporting qualitative model results and variability, but specific numeric parameters (CL, V, Q) are not explicitly listed in the abstract text, likely residing in the full text or tables not provided. |
| popPK | Liu_2024 | irrelevant | 1 | 0 | This is a narrative literature review without original quantitative data, and specific ceftriaxone parameter values are not provided in the text. |
| popPK | Olivares_2025 | relevant | 9 | 1 | The paper models ceftriaxone PK (two-compartment model) and reports PK parameters, but the specific numeric values are located in Supplementary Tables S1-S3 which are not included in the provided evidence. |
| popPK | Perry_2001 | relevant | 5 | 1 | The paper is a review that discusses ceftriaxone PK/PD and mentions specific target AUIC values, but it does not report primary quantitative disposition parameters like clearance (CL), volume (V), or half-life with volume derived from original data. |
| popPK | Sangkakul_2026 | relevant | 10 | 4 | The paper describes a population PK study of ceftriaxone in humans with significant covariates identified, but specific numeric parameter estimates (CL, V, Q) are not explicitly listed in the provided abstract text. |
| popPK | Sanz-Codina_2023 | irrelevant | 3 | 1 | The study compares methods for determining protein binding and reports only concentrations (Cmax) and binding parameters (Kd), lacking explicit quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Theuretzbacher_2020 | irrelevant | 2 | 0 | This is a narrative review summarizing general PK/PD principles for gonorrhea treatment without presenting original quantitative population PK parameters for ceftriaxone. |
| popPK | Toki_2019 | irrelevant | 4 | 1 | The paper reports PK-PD comparisons and minimum concentrations but does not report quantitative disposition parameters (CL, V, Q, ka, or compartmental model parameters) for ceftriaxone in the text. |
| popPK | Torumkuney_2025 | irrelevant | 0 | 0 | The paper is an antibiotic susceptibility (MIC) surveillance study reporting resistance rates, not a pharmacokinetic study with quantitative disposition parameters for ceftriaxone. |
| popPK | Wang_2020 | irrelevant | 1 | 0 | Ceftriaxone is only mentioned as a resistance marker (ceftriaxone-resistant) and is not one of the seven antimicrobials subjected to PK modeling in this study. |
| popPK | Wang_2020_2 | relevant | 9 | 1 | The paper is a population PK study of ceftriaxone in infants, but the specific numeric parameter values (CL, V, etc.) are not listed in the provided abstract text. |
| popPK | Zelenitsky_2016 | irrelevant | 2 | 0 | This is a PK-PD simulation study using literature-based models, not an original study reporting primary quantitative PK parameters (CL, V, etc.) for ceftriaxone. |
| popPK | van_2023 | relevant | 9 | 0 | The study is a population PK/PD analysis of ceftriaxone in humans, but the evidence provided only contains the abstract and conclusion, lacking specific quantitative PK parameter estimates (e.g., CL, Vc) which are typically found in the full results or supplementary tables. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:45 UTC</sub>
