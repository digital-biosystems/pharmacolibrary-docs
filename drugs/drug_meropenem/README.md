<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;meropenem&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Meropenem_Bilal2021_reference&quot;,&quot;label&quot;:&quot;Bilal_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_meropenem/Meropenem_Bilal2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Meropenem_Liu2025_reference&quot;,&quot;label&quot;:&quot;Liu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_meropenem/Meropenem_Liu2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Meropenem_Zyryanov2023_reference&quot;,&quot;label&quot;:&quot;Zyryanov_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_meropenem/Meropenem_Zyryanov2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# meropenem

- **generic name:** meropenem
- **ATC codes:** `J01DH02`, `J01DH52`
- **DrugBank:** [DB00760](https://go.drugbank.com/drugs/DB00760) · **PubChem:** [CID 441130](https://pubchem.ncbi.nlm.nih.gov/compound/441130)
- **molar mass:** 383.463 g/mol (C17H25N3O5S) — DrugBank
- **groups:** approved, investigational

## About

Meropenem is a carbapenem antibiotic used to treat serious bacterial infections such as appendicitis, urinary tract infections, peritonitis, respiratory infections, meningitis, and infections caused by E. coli, Pseudomonas, and Bacteroides. It is an approved medicine, appears on the WHO list of essential medicines, and is widely used in hospitals for severe infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421670](https://www.wikidata.org/wiki/Q421670) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| meropenem | parent | 383.463 | C17H25N3O5S | DrugBank | [441130](https://pubchem.ncbi.nlm.nih.gov/compound/441130) | Rančić_2024, Zyryanov_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:28 | 2:32 | 2/0/2 | 0/0/0 | 0/0/0 | 211,002/12,717 | einfracz / qwen3.8-27b | 9 | 0/9 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.615). Primary extraction retained.">cross-check: partial</span> | [Bilal_2021_reference](drugs/drug_meropenem/Meropenem_Bilal2021_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Bilal M et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2021) | [10.1007/s40262-021-01063-5](https://doi.org/10.1007/s40262-021-01063-5) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.778). Primary extraction retained.">cross-check: partial</span> | [Liu_2025_reference](drugs/drug_meropenem/Meropenem_Liu2025_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Liu Y et al., PopPK and PBPK Models Guide Meropenem D…, Pharmaceutics (2025) | [10.3390/pharmaceutics17121544](https://doi.org/10.3390/pharmaceutics17121544) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.636). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Rančić_2024_reference](drugs/drug_meropenem/Meropenem_Rani2024_reference.md) | held back | 1-compartment, IV | 1 | Rančić A et al., Population pharmacokinetics of meropene…, Open medicine (Warsaw, Pola… (2024) | [10.1515/med-2024-1004](https://doi.org/10.1515/med-2024-1004) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: T1_t_half_beta</sub><br><sub>route_to: `scholar`</sub> | [Zyryanov_2023_reference](drugs/drug_meropenem/Meropenem_Zyryanov2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Zyryanov S et al., Population PK/PD modelling of meropenem…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1079680](https://doi.org/10.3389/fphar.2023.1079680) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=meropenem).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: DPEP1 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 395 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 2  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rohani_2023.pdf` | Rohani R et al., Individual meropenem epithelial lining…, Antimicrobial agents and ch… (2023) | popPK | 5 | [10.1128/aac.00727-23](https://doi.org/10.1128/aac.00727-23) | [37975660](https://pubmed.ncbi.nlm.nih.gov/37975660) | The study reports PD target attainment percentages (T&gt;MIC, CFR) and a single surrogate variable (CrCl) rather than explicit quantitative PK parameters (CL, V, Q) or a population PK model for meropenem. |

<sub>queue written 2026-10-15T00:26:19.623522+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abouelhassan_2024 | irrelevant | 0 | 0 | The study focuses on the PK/PD of ampicillin-sulbactam, using meropenem only as a reference for susceptibility/resistance phenotypes rather than reporting meropenem PK parameters. |
| popPK | Alsultan_2024 | irrelevant | 3 | 2 | The study reports only PK/PD target attainment percentages and trough concentrations, lacking quantitative PK parameters (CL, V) or a population PK model; no numerical PK parameter values are present in the text. |
| popPK | Bilal_2021 | irrelevant | 0 | 0 | The paper is a review of the pharmacokinetics of cefiderocol, not meropenem; meropenem is mentioned only as a comparator or standard of care. |
| popPK | Charoensareerat_2023 | relevant | 4 | 1 | Systematic review of meropenem PK in humans that lacks complete reported parameter values and only provides a qualitative description of the model used for simulations. |
| popPK | Czock_2007 | irrelevant | 2 | 0 | This is a review paper focusing on pharmacodynamic modeling and mechanism-based PK-PD relationships for antimicrobial drugs, and it does not report specific quantitative population pharmacokinetic disposition parameters (CL, V, Q, etc.) for meropenem. |
| popPK | Deng_2023 | relevant | 8 | 2 | The paper describes a PBPK model for meropenem in humans with CKD/hemodialysis, but specific numeric disposition parameter values (CL, V, Q) are located in Supplementary Tables and Figures not provided in the evidence. |
| popPK | He_2023 | irrelevant | 0 | 0 | This is a review paper discussing general PK/PD concepts and dosing strategies without providing original quantitative pharmacokinetic parameter values for meropenem. |
| popPK | Liu_2024 | irrelevant | 1 | 0 | This is a literature review summarizing PPK studies for multiple antibacterial agents; it contains no original quantitative PK parameter values for meropenem. |
| popPK | Liu_2025 | relevant | 10 | 2 | The paper reports a relevant PopPK model for meropenem in pediatric patients, but the specific numeric parameter estimates (Table 2) are not included in the provided text or numeric lines. |
| popPK | Lodise_2006 | irrelevant | 1 | 0 | This is a review article discussing general concepts and a specific case study, and it does not report original quantitative population pharmacokinetic parameter values (e.g., CL, V) for meropenem. |
| popPK | Lombardi_2024 | irrelevant | 0 | 0 | The paper is a clinical review discussing new antibiotics in liver transplantation and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for meropenem. |
| popPK | Rando_2024 | irrelevant | 2 | 0 | The paper is a systematic review discussing meropenem/vaborbactam, and the evidence provided contains no original numeric pharmacokinetic parameter values for meropenem. |
| popPK | Roberts_2025 | relevant | 10 | 0 | The paper describes a population PK model for meropenem, but the specific numeric parameter estimates (CL, V, Q) are located in electronic supplementary tables which are not included in the provided evidence. |
| popPK | Rohani_2023 | irrelevant | 5 | 2 | The study reports PD target attainment percentages (T&gt;MIC, CFR) and a single surrogate variable (CrCl) rather than explicit quantitative PK parameters (CL, V, Q) or a population PK model for meropenem. |
| popPK | Zhanel_2018 | irrelevant | 2 | 0 | This is a review of carbapenem-β-lactamase inhibitor combinations; while it mentions meropenem's PK is comparable to vaborbactam, it does not report original quantitative disposition parameters (CL, V, Q) for meropenem itself. |
| popPK | Zhanel_2019 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of cefiderocol, with meropenem appearing only as a microbiological comparator for antibiotic activity. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:26 UTC</sub>
